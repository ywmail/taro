(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),O=i(a),j=n,d=O["".concat(c,".").concat(j)]||O[j]||u[j]||l;return a?r.a.createElement(d,p(p({ref:t},o),{},{components:a})):r.a.createElement(d,p({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=O;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},528:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return i}));var n=a(1735),r=a(1736),l=(a(0),a(1737)),c={title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},p={unversionedId:"apis/base/weapp/app-event/onAppShow",id:"apis/base/weapp/app-event/onAppShow",isDocsHomePage:!1,title:"Taro.onAppShow(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onShow \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002",source:"@site/docs/apis/base/weapp/app-event/onAppShow.md",slug:"/apis/base/weapp/app-event/onAppShow",permalink:"/taro/docs/next/apis/base/weapp/app-event/onAppShow",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/onAppShow.md",version:"current",sidebar_label:"onAppShow",sidebar:"API",previous:{title:"Taro.onAudioInterruptionBegin(callback)",permalink:"/taro/docs/next/apis/base/weapp/app-event/onAudioInterruptionBegin"},next:{title:"Taro.onAppHide(callback)",permalink:"/taro/docs/next/apis/base/weapp/app-event/onAppHide"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"CallbackResult",id:"callbackresult",children:[]},{value:"ResultReferrerInfo",id:"resultreferrerinfo",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:b};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object"}),Object(l.a)("inlineCode",{parentName:"a"},"App.onShow"))," \u7684\u56de\u8c03\u53c2\u6570\u4e00\u81f4\u3002"),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"\u8fd4\u56de\u6709\u6548 referrerInfo \u7684\u573a\u666f")),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u573a\u666f\u503c"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u573a\u666f"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"appId\u542b\u4e49"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1020"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7 profile \u9875\u76f8\u5173\u5c0f\u7a0b\u5e8f\u5217\u8868"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1035"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7\u81ea\u5b9a\u4e49\u83dc\u5355"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1036"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"App \u5206\u4eab\u6d88\u606f\u5361\u7247"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6765\u6e90App")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1037"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u6253\u5f00\u5c0f\u7a0b\u5e8f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1038"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u8fd4\u56de"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6765\u6e90\u5c0f\u7a0b\u5e8f")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1043"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u516c\u4f17\u53f7\u6a21\u677f\u6d88\u606f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6765\u6e90\u516c\u4f17\u53f7")))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.a)("p",null,"\u90e8\u5206\u7248\u672c\u5728\u65e0",Object(l.a)("inlineCode",{parentName:"p"},"referrerInfo"),"\u7684\u65f6\u5019\u4f1a\u8fd4\u56de ",Object(l.a)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5efa\u8bae\u4f7f\u7528 ",Object(l.a)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," \u8fdb\u884c\u5224\u65ad\u3002"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (result: CallbackResult) => void) => void\n")),Object(l.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.a)("h3",{id:"callbackresult"},"CallbackResult"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"path"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684\u8def\u5f84")),Object(l.a)("tr",null,Object(l.a)("td",null,"query"),Object(l.a)("td",null,Object(l.a)("code",null,"Record<string, any>")),Object(l.a)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684 query \u53c2\u6570")),Object(l.a)("tr",null,Object(l.a)("td",null,"referrerInfo"),Object(l.a)("td",null,Object(l.a)("code",null,"ResultReferrerInfo")),Object(l.a)("td",null,"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ","{}","\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)")),Object(l.a)("tr",null,Object(l.a)("td",null,"scene"),Object(l.a)("td",null,Object(l.a)("code",null,"number")),Object(l.a)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u524d\u53f0\u7684",Object(l.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"},"\u573a\u666f\u503c"))),Object(l.a)("tr",null,Object(l.a)("td",null,"shareTicket"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"shareTicket\uff0c\u8be6\u89c1",Object(l.a)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html"},"\u83b7\u53d6\u66f4\u591a\u8f6c\u53d1\u4fe1\u606f"))))),Object(l.a)("h3",{id:"resultreferrerinfo"},"ResultReferrerInfo"),Object(l.a)("p",null,"\u6765\u6e90\u4fe1\u606f\u3002\u4ece\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u8fdb\u5165\u5c0f\u7a0b\u5e8f\u65f6\u8fd4\u56de\u3002\u5426\u5219\u8fd4\u56de ",Object(l.a)("inlineCode",{parentName:"p"},"{}"),"\u3002(\u53c2\u89c1\u540e\u6587\u6ce8\u610f)"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"appId"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",null,"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u3001\u516c\u4f17\u53f7\u6216 App \u7684 appId")),Object(l.a)("tr",null,Object(l.a)("td",null,"extraData"),Object(l.a)("td",null,Object(l.a)("code",null,"Record<string, any>")),Object(l.a)("td",null,"\u6765\u6e90\u5c0f\u7a0b\u5e8f\u4f20\u8fc7\u6765\u7684\u6570\u636e\uff0cscene=1037\u62161038\u65f6\u652f\u6301")))),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.onAppShow"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0}}]);