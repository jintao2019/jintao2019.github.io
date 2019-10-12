(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{171:function(t,v,_){t.exports=_.p+"assets/img/http-1.94bbc66d.png"},204:function(t,v,_){"use strict";_.r(v);var i=[function(){var t=this,v=t.$createElement,i=t._self._c||v;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"http协议类"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http协议类","aria-hidden":"true"}},[t._v("#")]),t._v(" http协议类")]),t._v(" "),i("ul",[i("li",[t._v("http协议的主要特点")]),t._v(" "),i("li",[t._v("http报文的组成部分")]),t._v(" "),i("li",[t._v("http方法")]),t._v(" "),i("li",[t._v("post和get的区别")]),t._v(" "),i("li",[t._v("http状态码")]),t._v(" "),i("li",[t._v("什么是持久连接")]),t._v(" "),i("li",[t._v("什么是管线化")])]),t._v(" "),i("h2",{attrs:{id:"http协议的主要特点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http协议的主要特点","aria-hidden":"true"}},[t._v("#")]),t._v(" http协议的主要特点")]),t._v(" "),i("ul",[i("li",[t._v("简单快速\n每个资源UIl是固定的，统一资源符")]),t._v(" "),i("li",[t._v("灵活\n每个http协议中有个头部份和数据类型，通过http协议完成不同数据类型的一个传输")]),t._v(" "),i("li",[t._v("无连接\n我连接一次它就会断掉，不会保持连接")]),t._v(" "),i("li",[t._v("无状态\n客户端和服务端是两种身份，客户端向服务端请求一个图片，http协议帮你建立连接，帮你中间传输，这个任务完成之后，这个连接就断开了， 下次客服端再过来，服务端是没法区分两次连接的身份。")])]),t._v(" "),i("h2",{attrs:{id:"http报文的组成部分"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http报文的组成部分","aria-hidden":"true"}},[t._v("#")]),t._v(" http报文的组成部分")]),t._v(" "),i("p",[t._v("http报文的组成部分")]),t._v(" "),i("p",[i("img",{attrs:{src:_(171),alt:""}})]),t._v(" "),i("ul",[i("li",[t._v("请求行\n"),i("ol",[i("li",[t._v("http方法")]),t._v(" "),i("li",[t._v("页面地址")]),t._v(" "),i("li",[t._v("http协议以及版本")])])]),t._v(" "),i("li",[t._v("请求头\n"),i("ol",[i("li",[t._v("key:value值来告诉服务端要什么内容，注意什么类型")])])]),t._v(" "),i("li",[t._v("空行：\n"),i("ol",[i("li",[t._v("遇到空行，告诉服务端下雨咯不再是请求头部分了，该当做请求体来解析了")])])])]),t._v(" "),i("h3",{attrs:{id:"post和get的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#post和get的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" post和get的区别")]),t._v(" "),i("ul",[i("li",[t._v("GET在浏览器回退时是无害的，而post会再次提交请求")]),t._v(" "),i("li",[t._v("get产生的url地址可以被收藏，而post不可以")]),t._v(" "),i("li",[t._v("get请求会被浏览器主动缓存，而post不会，除非手动设置")]),t._v(" "),i("li",[t._v("get请求只能进行url编码，而post支持多种编码方式")]),t._v(" "),i("li",[t._v("get请求参数会被完整保留在浏览器历史记录里，而post中的参数不会被保留")]),t._v(" "),i("li",[t._v("get请求在url中传送的参数是有长度限制的，而post没有限制")]),t._v(" "),i("li",[t._v("对参数的数据类型，get只接受ASCII支付，而post没有限制")]),t._v(" "),i("li",[t._v("get比post更不安全，因为参数直接暴露在url上，所以不能用来传递敏感信息")]),t._v(" "),i("li",[t._v("get参数通过url传递，post放在request body中")])]),t._v(" "),i("h3",{attrs:{id:"http状态码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#http状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" http状态码")]),t._v(" "),i("p",[t._v("1xx: 指示信息-表示请求已接收，继续处理\n2xx: 成功-表示请求已被成功接受\n3xx: 重定向- 要完成请求必须进行更进一步的操作\n4xx: 客户端错误- 请求有语法错误或请求无法实现\n5xx: 服务器错误- 服务器未能实现合法的请求")]),t._v(" "),i("ul",[i("li",[t._v("200 ok 客户端请求成功")]),t._v(" "),i("li",[t._v("206 partial content 客户发送了一个带有range头的get请求，服务器完成了它")]),t._v(" "),i("li",[t._v("301 所要求的页面已经转移至新的url")]),t._v(" "),i("li",[t._v("302 所请求的页面已经临时转移至新的url")]),t._v(" "),i("li",[t._v("304 客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓存的文档还可以继续使用")]),t._v(" "),i("li",[t._v("400 客户端请求有语法错误，不能被服务器所理解")]),t._v(" "),i("li",[t._v("请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用")]),t._v(" "),i("li",[t._v("403 forbidden 对被请求页面的访问被禁止")]),t._v(" "),i("li",[t._v("404 Not Found 请求资源不存在")]),t._v(" "),i("li",[t._v("500 服务器发生不可预期的错误原来缓冲的文档还可以继续使用")]),t._v(" "),i("li",[t._v("403 请求为完成，服务器临时过载或当机，一段时间后可能恢复正常")])]),t._v(" "),i("h3",{attrs:{id:"什么是持久连接"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是持久连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是持久连接")]),t._v(" "),i("p",[t._v("HTTP协议采用 “请求-应答”模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成之后立即断开连接（http协议为无连接的协议）")]),t._v(" "),i("p",[t._v("当使用Keep-Alive 模式（又称持久连接、连接重用）时，Keep-Alive功能使客户端到服务端的链接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接")]),t._v(" "),i("h3",{attrs:{id:"管线化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#管线化","aria-hidden":"true"}},[t._v("#")]),t._v(" 管线化")]),t._v(" "),i("p",[t._v("在使用持久连接的情况下，某个连接上消息的传递类似于")]),t._v(" "),i("p",[t._v("请求1> 响应1 > 请求2 > 响应2 > 请求3 > 响应3\n某个连接上的消息变成了类似这样")]),t._v(" "),i("p",[t._v("请求1 > 请求2 > 请求3 > 响应1 > 响应2 > 响应3")]),t._v(" "),i("ul",[i("li",[t._v("管线化机制通过持久连接完成，仅HTTP/1.1支持此技术")]),t._v(" "),i("li",[t._v("只有GET和HEAD请求可以进行管线化，而post则有所限制")]),t._v(" "),i("li",[t._v("初次创建连接时不应启动管线机制，因为对方（服务器）不一定支持HTTP/1.1版本的协议")]),t._v(" "),i("li",[t._v("管线化不会影响响应到来的顺序，如上面的例子所示，响应返回的顺序并未改变")]),t._v(" "),i("li",[t._v("HTTP/1.1要求服务器端支持管线化，但并不要求服务器端也对响应进行管线化处理，只是要求对于管线化的请求不失败即可")]),t._v(" "),i("li",[t._v("由于上面提到的服务端问题，开启管线化很可能并不会带来大幅度的性能提升，而且很多服务器端和代理程序对管线化的支持并不好，因此现代浏览器如Chrome和Firefox默认并未开启管线化支持")])])])}],e=_(0),l=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),i,!1,null,null,null);v.default=l.exports}}]);