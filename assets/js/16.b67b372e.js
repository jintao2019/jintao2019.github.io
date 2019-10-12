(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{198:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"通信类与安全类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通信类与安全类","aria-hidden":"true"}},[t._v("#")]),t._v(" 通信类与安全类")]),t._v(" "),s("ul",[s("li",[t._v("什么是同源策略及限制")]),t._v(" "),s("li",[t._v("前后端如何通信")]),t._v(" "),s("li",[t._v("如何创建Ajax")]),t._v(" "),s("li",[t._v("跨域通信的几种方式")])]),t._v(" "),s("h3",{attrs:{id:"什么是同源策略及限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是同源策略及限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是同源策略及限制")]),t._v(" "),s("p",[t._v("协议、域名、端口")]),t._v(" "),s("h3",{attrs:{id:"前后端如何通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前后端如何通信","aria-hidden":"true"}},[t._v("#")]),t._v(" 前后端如何通信")]),t._v(" "),s("ul",[s("li",[t._v("Ajax")]),t._v(" "),s("li",[t._v("WebSocket")]),t._v(" "),s("li",[t._v("CORS")])]),t._v(" "),s("h4",{attrs:{id:"websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket","aria-hidden":"true"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),s("p",[t._v("WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器\n为什么传统的HTTP协议不能做到WebSocket实现的功能？这是因为HTTP协议是一个请求－响应协议，请求必须先由浏览器发给服务器，服务器才能响应这个请求，再把数据发送给浏览器。换句话说，浏览器不主动请求，服务器是没法主动发数据给浏览器的。")]),t._v(" "),s("h4",{attrs:{id:"cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),s("p",[t._v('CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源(协议 + 域名 + 端口)服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。')]),t._v(" "),s("h3",{attrs:{id:"如何创建ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何创建ajax","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何创建Ajax")]),t._v(" "),s("ul",[s("li",[t._v("XMLHttpRequest对象的工作流程")]),t._v(" "),s("li",[t._v("兼容性处理")]),t._v(" "),s("li",[t._v("事件的触发条件")]),t._v(" "),s("li",[t._v("事件的触发顺序")])]),t._v(" "),s("h3",{attrs:{id:"跨域通信的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域通信的几种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域通信的几种方式")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JSONP")])]),t._v(" "),s("li",[s("p",[t._v("Hash")])]),t._v(" "),s("li",[s("p",[t._v("postMessage H5中新增")])]),t._v(" "),s("li",[s("p",[t._v("WebSocket")])]),t._v(" "),s("li",[s("p",[t._v("CORS")])]),t._v(" "),s("li",[s("p",[t._v("josnp 原理")])])]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/smyhvae/p/8523576.html")]),t._v(" "),s("h4",{attrs:{id:"jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" jsonp")]),t._v(" "),s("p",[t._v("面试会问：JSONP的原理是什么？怎么实现的？")]),t._v(" "),s("p",[t._v("在CORS和postMessage以前，我们一直都是通过JSONP来做跨域通信的。")]),t._v(" "),s("p",[t._v("JSONP的原理：通过"),s("code",[t._v("<script>")]),t._v("标签的异步加载来实现的。比如说，实际开发中，我们发现，head标签里，可以通过"),s("code",[t._v("<script>")]),t._v("标签的src，里面放url，加载很多在线的插件。这就是用到了JSONP。")]),t._v(" "),s("p",[t._v("JSONP的实现：")]),t._v(" "),s("p",[t._v("比如说，客户端这样写：")]),t._v(" "),s("pre",[s("code",[t._v('`<script src="http://www.smyhvae.com/?data=name&callback=myjsonp"><\/script>`\n')])]),t._v(" "),s("p",[t._v("上面的src中，data=name是get请求的参数，myjsonp是和后台约定好的函数名。\n服务器端这样写：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myjsonp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tdata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash","aria-hidden":"true"}},[t._v("#")]),t._v(" Hash")]),t._v(" "),s("p",[t._v("url的#后面的内容就叫Hash。Hash的改变，页面不会刷新。这就是用 Hash 做跨域通信的基本原理。")]),t._v(" "),s("p",[t._v("补充：url的?后面的内容叫Search。Search的改变，会导致页面刷新，因此不能做跨域通信。")]),t._v(" "),s("p",[t._v("使用举例：")]),t._v(" "),s("p",[t._v("场景：我的页面 A 通过iframe或frame嵌入了跨域的页面 B。")]),t._v(" "),s("p",[t._v("现在，我这个A页面想给B页面发消息，怎么操作呢？")]),t._v(" "),s("p",[t._v("（1）首先，在我的A页面中：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//伪代码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iframe'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonString'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//我们可以把JS 对象，通过 JSON.stringify()方法转成 json字符串，发给 B")]),t._v("\n")])])]),s("p",[t._v("（2）然后，在B页面中：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B中的伪代码")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onhashchange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过onhashchange方法监听，url中的 hash 是否发生变化")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"postmessage-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postmessage-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" postMessage()方法")]),t._v(" "),s("p",[t._v("H5中新增的postMessage()方法，可以用来做跨域通信。既然是H5中新增的，那就一定要提到。")]),t._v(" "),s("p",[t._v("场景：窗口 A (http:A.com)向跨域的窗口 B (http:B.com)发送信息。步骤如下。")]),t._v(" "),s("p",[t._v("（1）在A窗口中操作如下：向B窗口发送数据：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 窗口A(http:A.com)向跨域的窗口B(http:B.com)发送信息")]),t._v("\n    Bwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://B.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里强调的是B窗口里的window对象")]),t._v("\n")])])]),s("p",[t._v("（2）在B窗口中操作如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在窗口B中监听 message 事件")]),t._v("\n\tAwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里强调的是A窗口里的window对象")]),t._v("\n\t\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取 ：url。这里指：http://A.com")]),t._v("\n\t\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取：A window对象")]),t._v("\n\t\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取传过来的数据")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h1",{attrs:{id:"安全类csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全类csrf","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全类CSRF")]),t._v(" "),s("ul",[s("li",[t._v("基本概念和缩写")]),t._v(" "),s("li",[t._v("攻击原理")]),t._v(" "),s("li",[t._v("防御措施")])]),t._v(" "),s("h3",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[t._v("CSRF， 通常称为跨站请求伪造。")])])}],!1,null,null,null);a.default=e.exports}}]);