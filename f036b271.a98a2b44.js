(window.webpackJsonp=window.webpackJsonp||[]).push([[1566],{1628:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1735),r=a(1736),c=(a(0),a(1737)),l={title:"Taro.compressImage(option)",sidebar_label:"compressImage"},o={unversionedId:"apis/media/image/compressImage",id:"version-2.x/apis/media/image/compressImage",isDocsHomePage:!1,title:"Taro.compressImage(option)",description:"\u538b\u7f29\u56fe\u7247\u63a5\u53e3\uff0c\u53ef\u9009\u538b\u7f29\u8d28\u91cf",source:"@site/versioned_docs/version-2.x/apis/media/image/compressImage.md",slug:"/apis/media/image/compressImage",permalink:"/taro/docs/2.x/apis/media/image/compressImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/image/compressImage.md",version:"2.x",sidebar_label:"compressImage",sidebar:"version-2.x/API",previous:{title:"Taro.getImageInfo(option)",permalink:"/taro/docs/2.x/apis/media/image/getImageInfo"},next:{title:"Taro.chooseMessageFile(option)",permalink:"/taro/docs/2.x/apis/media/image/chooseMessageFile"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u538b\u7f29\u56fe\u7247\u63a5\u53e3\uff0c\u53ef\u9009\u538b\u7f29\u8d28\u91cf"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"src"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u56fe\u7247\u8def\u5f84\uff0c\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u3001\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3001\u5b58\u50a8\u6587\u4ef6\u8def\u5f84")),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"quality"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u538b\u7f29\u8d28\u91cf\uff0c\u8303\u56f40\uff5e100\uff0c\u6570\u503c\u8d8a\u5c0f\uff0c\u8d28\u91cf\u8d8a\u4f4e\uff0c\u538b\u7f29\u7387\u8d8a\u9ad8\uff08\u4ec5\u5bf9jpg\u6709\u6548\uff09\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"tempFilePath"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u538b\u7f29\u540e\u56fe\u7247\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.compressImage({\n  src: '', // \u56fe\u7247\u8def\u5f84\n  quality: 80 // \u538b\u7f29\u8d28\u91cf\n})\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.compressImage"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},1735:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1736:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,d=p["".concat(l,".").concat(O)]||p[O]||b[O]||c;return a?r.a.createElement(d,o(o({ref:t},u),{},{components:a})):r.a.createElement(d,o({ref:t},u))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<c;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);