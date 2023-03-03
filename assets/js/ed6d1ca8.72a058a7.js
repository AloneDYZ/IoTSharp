"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[860],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=l(r),m=i,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(y,a(a({ref:e},p),{},{components:r})):n.createElement(y,a({ref:e},p))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4851:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],c={sidebar_position:8},u="\u8bbe\u5907\u8fde\u901a\u6027",l={unversionedId:"tutorial-basics/connectivity",id:"tutorial-basics/connectivity",title:"\u8bbe\u5907\u8fde\u901a\u6027",description:"IoTSharp\u8bbe\u5907\u72b6\u6001\u670d\u52a1\u8d1f\u8d23\u76d1\u89c6\u8bbe\u5907\u8fde\u63a5\u72b6\u6001\u5e76\u89e6\u53d1\u63a8\u9001\u5230\u89c4\u5219\u94fe\u7684\u8bbe\u5907\u8fde\u63a5\u4e8b\u4ef6\u3002 \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u5e94\u89c4\u5219\u94fe\u6765\u5904\u7406\u8fd9\u4e9b\u4e8b\u4ef6\u3002",source:"@site/docs/tutorial-basics/connectivity.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/connectivity",permalink:"/docs/tutorial-basics/connectivity",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-basics/connectivity.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u9065\u6d4b\u6570\u636e\u805a\u5408",permalink:"/docs/tutorial-basics/aggregate"},next:{title:"\u89c4\u5219\u94fe\u4f7f\u7528\u65b9\u5f0f",permalink:"/docs/tutorial-basics/scriptuse"}},p={},s=[],f={toc:s};function m(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8bbe\u5907\u8fde\u901a\u6027"},"\u8bbe\u5907\u8fde\u901a\u6027"),(0,o.kt)("p",null,"IoTSharp\u8bbe\u5907\u72b6\u6001\u670d\u52a1\u8d1f\u8d23\u76d1\u89c6\u8bbe\u5907\u8fde\u63a5\u72b6\u6001\u5e76\u89e6\u53d1\u63a8\u9001\u5230\u89c4\u5219\u94fe\u7684\u8bbe\u5907\u8fde\u63a5\u4e8b\u4ef6\u3002 \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5bf9\u5e94\u89c4\u5219\u94fe\u6765\u5904\u7406\u8fd9\u4e9b\u4e8b\u4ef6\u3002 "),(0,o.kt)("p",null,"\u652f\u6301\u4e8b\u4ef6\u5982\u4e0b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect   -  \u8bbe\u5907\u8fde\u63a5\u5230IoTSharp\u65f6\u89e6\u53d1\u3002 "),(0,o.kt)("li",{parentName:"ul"},"Disconnect   - \u8bbe\u5907\u65ad\u5f00IoTSharp\u65f6\u89e6\u53d1"),(0,o.kt)("li",{parentName:"ul"},"Activity   -   \u5728\u8bbe\u5907\u7684\u8d85\u65f6\u65f6\u95f4\u8303\u56f4\u5185\u89e6\u53d1\u4e00\u6b21\uff0c\u5982\u679c\u6b63\u597d\u6709\u6570\u636e\u7684\u8bdd\u5c31\u4f1a\u89e6\u53d1"),(0,o.kt)("li",{parentName:"ul"},"Inactivity  - \u5f53\u8d85\u8fc7\u8bbe\u5907\u7684\u8d85\u65f6\u65f6\u95f4\u8303\u56f4\u540e\uff0c\u5982\u679c\u4f9d\u7136\u6ca1\u6570\u636e\uff0c \u5c31\u4f1a\u89e6\u53d1\u3002 ")),(0,o.kt)("p",null,"\u8bbe\u5907\u72b6\u6001\u670d\u52a1\u8d1f\u8d23\u7ef4\u62a4\u4ee5\u4e0b\u670d\u52a1\u7aef\u5c5e\u6027:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Active - \u8868\u793a\u5f53\u524d\u8bbe\u5907\u72b6\u6001\u4e3aTrue\u6216False;"),(0,o.kt)("li",{parentName:"ul"},"LastConnectDateTime - \u8868\u793a\u8bbe\u5907\u6700\u540e\u4e00\u6b21\u8fde\u63a5\u5230IoTSharp\u7684\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ul"},"LastDisconnectDateTime - \u8868\u793a\u8bbe\u5907\u4e0eIoTSharp\u65ad\u5f00\u8fde\u63a5\u7684\u6700\u540e\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ul"},"LastActivityDateTime - \u8868\u793a\u8bbe\u5907\u4e0a\u6b21\u63a8\u9001\u9065\u6d4b\u5c5e\u6027\u66f4\u65b0\u6216rpc\u547d\u4ee4\u7684\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ul"},"InactivityAlarmDateTime - \u8868\u793a\u8bbe\u5907\u5728\u8d85\u8fc7\u8bbe\u5907\u8d85\u65f6\u65f6\u95f4\u8303\u56f4\u540e\u4f9d\u7136\u6ca1\u6709\u6536\u5230\u6570\u636e\u7684\u6700\u540e\u65f6\u95f4\u3002")))}m.isMDXComponent=!0}}]);