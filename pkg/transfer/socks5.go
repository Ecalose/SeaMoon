package transfer

import (
	"bufio"
	"net"
	"time"

	"github.com/DVKunion/SeaMoon/pkg/network"
	"github.com/DVKunion/SeaMoon/pkg/system/errors"
	"github.com/DVKunion/SeaMoon/pkg/system/xlog"
)

func Socks5Check(conn net.Conn) (net.Conn, error) {
	br := &network.BufferedConn{Conn: conn, Br: bufio.NewReader(conn)}
	b, err := br.Peek(1)

	if err != nil || b[0] != network.SOCKS5Version {
		return nil, errors.Wrap(err, xlog.ServiceProtocolNotSupportError)
	}
	return br, nil
}

func Socks5Transport(conn net.Conn, check bool) error {

	var err error
	if !check {
		if conn, err = Socks5Check(conn); err != nil {
			return err
		}
	}
	// todo AUTH

	// select method
	if _, err = network.ReadMethods(conn); err != nil {
		return errors.Wrap(err, xlog.ServiceSocks5ReadMethodError)
	}

	if err = network.WriteMethod(network.MethodNoAuth, conn); err != nil {
		return errors.Wrap(err, xlog.ServiceSocks5WriteMethodError)
	}

	// read command
	request, err := network.ReadSOCKS5Request(conn)
	if err != nil {
		return errors.Wrap(err, xlog.ServiceSocks5ReadCmdError)
	}
	switch request.Cmd {
	case network.SOCKS5CmdConnect:
		handleConnect(conn, request)
	case network.SOCKS5CmdBind:
		// todo: support cmd bind
		xlog.Debug("unexpect not support cmd bind")
		handleBind(conn, request)
	case network.SOCKS5CmdUDPOverTCP:
		// todo: support upd proxy
		xlog.Debug("unexpect not support upd")
		handleUDPOverTCP(conn, request)
	}

	return nil
}

func handleConnect(conn net.Conn, req *network.SOCKS5Request) {
	xlog.Info(xlog.ServiceSocks5ConnectServer, "src", conn.RemoteAddr(), "dest", req.Addr)
	// default socks timeout : 10
	dialer := net.Dialer{Timeout: 10 * time.Second}
	destConn, err := dialer.Dial("tcp", req.Addr.String())

	if err != nil {
		xlog.Error(xlog.ServiceSocks5DailError, "err", err)
		return
	}

	// if utils.Transport get out , then close conn of remote
	defer destConn.Close()

	if err := network.NewReply(network.SOCKS5RespSucceeded, nil).Write(conn); err != nil {
		xlog.Error(xlog.ServiceSocks5ReplyError, "err", err)
		return
	}

	xlog.Info(xlog.ServiceSocks5Establish, "src", conn.RemoteAddr(), "dest", req.Addr)

	if _, _, err := network.Transport(conn, destConn); err != nil {
		xlog.Error(xlog.NetworkTransportError, "err", err)
	}

	xlog.Info(xlog.ServiceSocks5DisConnect, "src", conn.RemoteAddr(), "dest", req.Addr)
}

func handleBind(conn net.Conn, req *network.SOCKS5Request) {
	// TODO
}

func handleUDPOverTCP(conn net.Conn, req *network.SOCKS5Request) {
	// TODO
}