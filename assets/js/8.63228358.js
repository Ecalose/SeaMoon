(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{318:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"🕹-快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🕹-快速开始"}},[t._v("#")]),t._v(" 🕹 快速开始")]),t._v(" "),s("p",[t._v("通过该页面，您可以通过推荐的部署方式快速开始使用 SeaMoon。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("写在前面")]),t._v(" "),s("p",[t._v("本页面按照阿里云标准云函数服务进行部署，如果您希望获取到更多自定义的配置和使用方式，"),s("a",{attrs:{href:"https://seamoon.dvkunion.cn/guide/deploy",target:"_blank",rel:"noopener noreferrer"}},[t._v("请跳转"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("🔥 如果您的钱包和预算有限，并且代理IP需求并不是特别高，这里推荐使用 "),s("a",{attrs:{href:"https://seamoon.dvkunion.cn/guide/deploy/sealos",target:"_blank",rel:"noopener noreferrer"}},[t._v("sealos部署服务端"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("🙅 如果只想测试一下 seamoon 感受一下效果，可以使用 "),s("a",{attrs:{href:"https://seamoon.dvkunion.cn/guide/deploy/render",target:"_blank",rel:"noopener noreferrer"}},[t._v("render部署服务端"),s("OutboundLink")],1),t._v(", 但是注意极容易封号。")]),t._v(" "),s("p",[t._v("🔧 如果你不想仅拥有 http/socks5 协议的代理，期望使用更多代理，请移步 "),s("a",{attrs:{href:"https://seamoon.dvkunion.cn/guide/client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多客户端适配"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"事前准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事前准备"}},[t._v("#")]),t._v(" 事前准备")]),t._v(" "),s("ul",[s("li",[t._v("云厂商账户(以阿里云为例)，并开通对应的serverless服务（阿里云serverless服务名为：函数计算）")]),t._v(" "),s("li",[t._v("云厂商账户 AK/SK，并拥有操作FC的全部权限。")]),t._v(" "),s("li",[t._v("一台存在docker、Nodejs >= 12 的客户端的机器，同时保证 7777、1080、9999端口未被占用，该机器将作为使用的客户端。")])]),t._v(" "),s("h3",{attrs:{id:"step-1-安装serverless-devs工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-安装serverless-devs工具"}},[t._v("#")]),t._v(" Step.1 安装serverless-devs工具")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @serverless-devs/s "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n")])])]),s("p",[t._v("国内加速:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ cnpm "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @serverless-devs/s "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n")])])]),s("p",[t._v("如果不存在npm包管理器，请先通过node安装npm/cnpm")]),t._v(" "),s("p",[t._v("安装后运行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ s "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),s("p",[t._v("将可以看到serverless-devs版本，表示安装成功。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("@serverless-devs/s3: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(".0, s-home: /Users/DVK/.s, darwin-arm64, node-v20.9.0\n")])])]),s("p",[t._v("然后通过如下命令开始配置云厂商认证")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ s config "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" \n")])])]),s("p",[t._v("按提示即可选择即可，本次我们以 "),s("code",[t._v("Alibaba Cloud")]),t._v(" 为例，输入对应的账户"),s("code",[t._v("AccessKeyID")]),t._v("、"),s("code",[t._v("AccessKeySecret")])]),t._v(" "),s("p",[t._v("最后一步填写"),s("code",[t._v("alias")]),t._v("时，请确保值为"),s("code",[t._v("default")]),t._v("(一般初次安装与认证该字段都默认为default，回车即可)。")]),t._v(" "),s("p",[t._v("如果AK/SK无误，那么你将会看到认证成功的提示。")]),t._v(" "),s("h3",{attrs:{id:"step-2-部署服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-部署服务端"}},[t._v("#")]),t._v(" Step.2 部署服务端")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/DVKunion/SeaMoon.git\n")])])]),s("p",[t._v("进入到项目目录")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" SeaMoon\n$ s deploy\n")])])]),s("p",[t._v("如果你不是第一次部署，那么将会提示你选择冲突的配置：remote/local，一般选择local即可。")]),t._v(" "),s("p",[t._v("稍等片刻，你将会得到部署好的两个地址：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SeaMoon-WST-Node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("region")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SeaMoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Service\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memorySize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("diskSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("system_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("seamoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxxxxxx.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong.fcapp.run\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("system_intranet_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("seamoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxxxxxx.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vpc.fcapp.run\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpTrigger\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SeaMoon-GRT-Node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("region")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SeaMoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Service\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" custom\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("memorySize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cpu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("diskSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("system_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("seamoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxxxxxx.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong.fcapp.run\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("system_intranet_url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//grpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("seamoon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxxxxxx.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hongkong"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vpc.fcapp.run\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" httpTrigger\n")])])]),s("p",[t._v("这里是用的都是默认配置，如果你需要更多高级可选项，"),s("a",{attrs:{href:"https://seamoon.dvkunion.cn/guide/deploy",target:"_blank",rel:"noopener noreferrer"}},[t._v("请继续阅读"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("同样，如果你不想使用阿里云，或者想寻求更廉价的计费方式，"),s("a",{attrs:{href:"https://seamoon.dvkunion.cn/guide/deploy",target:"_blank",rel:"noopener noreferrer"}},[t._v("请继续阅读"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("服务端部署完成")]),t._v(" "),s("h3",{attrs:{id:"step-3-开启客户端使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-开启客户端使用"}},[t._v("#")]),t._v(" Step.3 开启客户端使用")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--net")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host dvkunion/seamoon:latest proxy\n\n")])])]),s("p",[t._v("默认使用"),s("code",[t._v("--net=host")]),t._v("模式，然后浏览器打开：")]),t._v(" "),s("p",[s("code",[t._v("localhost:7777")])]),t._v(" "),s("p",[t._v("即可开启客户端, 点击配置管理")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/0dd37f5600364e59a9457e38eaf77b1f.png",alt:"client"}})]),t._v(" "),s("p",[t._v("添加云端配置")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/66b1b150238e400483adf936649b7ed5.png",alt:"client-config"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("如何填写地址")]),t._v(" "),s("p",[t._v("我们在步骤2的时候，如果你是使用 s 工具实现的部署，那么最终的 yaml 内可以看到 url 字段，url 字段内的 system_url 即为我们需要的地址。\n不要使用带有 vpc 字样的 url， 也就是 system_intranet_url 字段的值，这是内网 vpc 访问的域名。"),s("br"),t._v("\n除此之外，需要自行将协议头 https:// 替换为对应的隧道协议，如: ws:// 或是 grcp:// 。默认两种协议的隧道是都部署了的。"),s("br"),t._v("\ngrpc 按照阿里云的要求，还需要自行声明端口，由此，一个 grpc 隧道的填写应该是这样: grpc://grpc-node-seamoon-service-xxxxxxxx.cn-hongkong.fcapp.run:8089\n8089 是阿里云的固定 grpc 协议端口，不需要改动。")])]),t._v(" "),s("p",[t._v("开启socks5代理，并保持默认"),s("code",[t._v(":1080")]),t._v("不改变。")]),t._v(" "),s("p",[t._v("此时，你已经可以通过云函数启动socks5代理访问了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/7bfff588795a4e41b488694ad4eb5153.png",alt:"speed"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);