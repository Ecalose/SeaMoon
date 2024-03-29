# build stage
FROM node:20 as front
COPY .. /src
WORKDIR /src/web
RUN npm run build

FROM golang:alpine AS build
ARG VERSION
ARG SHA
COPY .. /src
WORKDIR /src
ENV CGO_ENABLED 0
ENV VERSION=${VERSION}
ENV SHA=${SHA}
COPY --from=front /src/web/dist /src/cmd/client/static
#COPY ./seamoon /tmp/seamoon
RUN go build -v -ldflags "-X github.com/DVKunion/SeaMoon/system/xlog.Version=${VERSION} -X github.com/DVKunion/SeaMoon/system/xlog.Commit=${SHA}" -o /tmp/seamoon cmd/main.go
RUN chmod +x /tmp/seamoon
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && \
    apk add upx && upx -9 /tmp/seamoon
# run stage
FROM alpine:3.19
LABEL maintainer="dvkunion@gamil.com"
WORKDIR /app
COPY --from=build /tmp/seamoon /app/seamoon
COPY ./entrypoint.sh /app/entrypoint.sh
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && \
    apk add tor && \
    echo -e "RunAsDaemon 1\n\nAssumeReachable 1\n\nLog notice file /var/log/tor/tor.log" > /etc/tor/torrc &&\
    chmod +x /app/entrypoint.sh && chmod +x /app/seamoon
EXPOSE 1080 8080 7777 9000
ENTRYPOINT ["/app/entrypoint.sh"]