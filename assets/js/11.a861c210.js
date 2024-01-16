(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{321:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"叹息的腾讯云"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#叹息的腾讯云"}},[s._v("#")]),s._v(" 叹息的腾讯云")]),s._v(" "),t("p",[s._v("先说结论，个人不建议腾讯云部署，原因众多：")]),s._v(" "),t("ul",[t("li",[s._v("腾讯云go代码部署仅支持代码上传，这种过时的部署方式完全不符合devops的生态。")]),s._v(" "),t("li",[s._v("如此必须依赖自定义镜像部署，腾讯云又不支持公网镜像部署，还需要手动将镜像推送至个人腾讯云仓库（虽然个人版免费）")]),s._v(" "),t("li",[s._v("最最最最最重要的一点：腾讯云SFC不免费了，没有了免费调度的礼包，必须得买套餐，不买套餐TMD血贵，只是测了个速花了我4毛钱！")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/e2929ffbf39a4e9f92539ecd79db1f8e.png",alt:"tencent-billing"}})]),s._v(" "),t("p",[s._v("因此使用腾讯云的用户请先考虑下钱包，虽然最低配置的流量包9.9一个月。")]),s._v(" "),t("h2",{attrs:{id:"如何部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何部署"}},[s._v("#")]),s._v(" 如何部署")]),s._v(" "),t("p",[s._v("步骤很多，一步一步操作吧。。。大概对比一下就知道为什么不推荐腾讯云部署了。")]),s._v(" "),t("h3",{attrs:{id:"step-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[s._v("#")]),s._v(" Step.1")]),s._v(" "),t("p",[s._v("结论也提到了，腾讯云不支持go代码级别部署，所以我们为了方便，只能通过自定义镜像部署模式，函数类型选择web类型：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/2cedc6b7287f414f927a483049d59a19.png",alt:"tencent-app"}})]),s._v(" "),t("p",[s._v("在填写部署参数之前，需要先手动来上传server镜像到个人仓库（个人镜像仓库10个以内免费）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/31501cea0bf740c1bf061218581c92f2.png",alt:"tencent-images"}})]),s._v(" "),t("p",[s._v("点击选择镜像，将会跳转至个人镜像仓库：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/8b6bf3ff3c4849cfa0bdc3ab9a1e3d44.png",alt:"tencent-registry"}})]),s._v(" "),t("p",[s._v("创建个人镜像仓库，先要创建命名空间，这个随便起个名字就好。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/46f890741dcf4fefbd1091859caa3a2c.png",alt:"tencent-registry-create"}})]),s._v(" "),t("p",[s._v("然后需要创建镜像仓库，镜像仓库的名称必须为："),t("code",[s._v("seamoon-server")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/bf8e425ba0144ae3b357c73b97545905.png",alt:"tencent-registry-images"}})]),s._v(" "),t("p",[s._v("然后点击快捷操作，会出现命令提示:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/24166d0e0d854435ae66153fa88e2252.png",alt:"tencent-registry-login"}})]),s._v(" "),t("p",[s._v("复杂的步骤来了。现在需要找一台i386/amd64架构、且有docker的电脑......如果不懂如何查看电脑架构/不知道如何安装docker，建议还是放弃腾讯云。")]),s._v(" "),t("p",[s._v("执行以下命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取dockerhub 服务镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull dvkunion/seamoon-server:latest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新tag镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag dvkunion/seamoon-server:latest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上图命令的地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上图命令的地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/seamoon-server:latest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登陆腾讯云")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上图命令的地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上图提供的用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上图命令的地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("上图命令的地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/seamoon-server:latest\n")])])]),t("p",[s._v("还需要注意，登录时是需要填写登录密码的，如果是在不知道这个密码在哪里，建议重置一下；重置密码的位置也隐秘的感人：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/efefb1d95a5a48929186b41b9da1af0d.png",alt:"tencent-registry-passwd"}})]),s._v(" "),t("p",[s._v("至此，第一步已完成。")]),s._v(" "),t("h3",{attrs:{id:"step-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[s._v("#")]),s._v(" Step.2")]),s._v(" "),t("p",[s._v("回到函数创建的页面，我们继续来创建函数。")]),s._v(" "),t("p",[s._v("现在选择部署镜像的位置已经有了，选择刚推送的seamoon-server镜像，开始填写配置吧：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/ff6e2d4d1e904798a8f6a5102e861318.png",alt:"tencent-app-setting"}})]),s._v(" "),t("p",[s._v("基础配置中，函数类型必须选择web函数。名称建议填写seamoon比较容易识别，地域按照你自己的需求选择即可。")]),s._v(" "),t("p",[s._v("函数代码选完我们上传的镜像，不需要改动。")]),s._v(" "),t("p",[s._v("日志要花钱的，钱多就开。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/9e606f6b3a06428dbbaeda4ff51000ef.png",alt:"tencent-app-custom"}})]),s._v(" "),t("p",[s._v("高级配置中主要是环境配置：函数内存给个最低的64就够，初始化时间按照建议给90s，超时时间给600 10分钟足够。")]),s._v(" "),t("p",[s._v("重要的是环境变量的配置，如果是socks5代理这个值填写socks5; 如果你想要http代理，这里填写http。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/c846ef2987a845b09f8bfd07aa800d6a.png",alt:"tencent-socks5"}})]),s._v(" "),t("p",[s._v("往下滑，记得开启公网IP，并且不要绑定IP, 如果想要固定 IP 的再勾选绑定IP。来到协议配置，开启websocket，超时时间设置60，其他的都可以默认不动。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/1f4dcff644dd4a0f836d6a62f1633295.png",alt:"tencent-ip"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/f140dcd5a43f41bfb3bef8f7db540dc0.png",alt:"tencent-ws"}})]),s._v(" "),t("p",[s._v("触发器也默认不动即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/ae6824b540414859ad634f35332f9c79.png",alt:"tencent-creator"}})]),s._v(" "),t("p",[s._v("点击部署，终于，服务部署完成。")]),s._v(" "),t("h3",{attrs:{id:"step-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3"}},[s._v("#")]),s._v(" Step.3")]),s._v(" "),t("p",[s._v("部署完成后，几秒后自动跳转到函数页面，点击触发管理，可以看到函数地址，将此地址直接复制到客户端配置即可。")]),s._v(" "),t("h2",{attrs:{id:"效果展示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果展示"}},[s._v("#")]),s._v(" 效果展示")]),s._v(" "),t("p",[s._v("勉勉强强及格吧，大概10MB下行带宽的样子。")]),s._v(" "),t("p",[s._v("而且初次启动的冷启动速度相比其他家腾讯云是有明显感受上的启动时间的；IP池也逐步下滑了(benchtest大概在17-30个左右)。")]),s._v(" "),t("p",[s._v("而且从服务群来看，感觉腾讯云已经摆烂了，这玩意就这样了你爱用不用吧......哎。")])])}),[],!1,null,null,null);t.default=n.exports}}]);