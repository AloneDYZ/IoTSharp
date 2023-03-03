"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[129],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return d}});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=i.createContext({}),u=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=u(t.components);return i.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?i.createElement(m,l(l({ref:e},o),{},{components:n})):i.createElement(m,l({ref:e},o))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2676:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),l=["components"],s={},c="\u89c4\u5219\u94fe\u4f7f\u7528\u65b9\u5f0f",u={unversionedId:"tutorial-basics/scriptuse",id:"tutorial-basics/scriptuse",title:"\u89c4\u5219\u94fe\u4f7f\u7528\u65b9\u5f0f",description:"\u4e00\u3001\u5404\u79cd\u811a\u672c\u8bed\u8a00\u6267\u884c\u6d4b\u8bd5",source:"@site/docs/tutorial-basics/scriptuse.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/scriptuse",permalink:"/docs/tutorial-basics/scriptuse",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-basics/scriptuse.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u5907\u8fde\u901a\u6027",permalink:"/docs/tutorial-basics/connectivity"},next:{title:"MQTT\u534f\u8bae",permalink:"/docs/tutorial-extras/mqtt"}},o={},p=[{value:"\u4e00\u3001\u5404\u79cd\u811a\u672c\u8bed\u8a00\u6267\u884c\u6d4b\u8bd5",id:"\u4e00\u5404\u79cd\u811a\u672c\u8bed\u8a00\u6267\u884c\u6d4b\u8bd5",level:2},{value:"\u4e8c\u3001\u901a\u8fc7mqtt\u5ba2\u6237\u7aef\u6a21\u62df\u8bbe\u5907\u544a\u8b66\u4e0a\u62a5",id:"\u4e8c\u901a\u8fc7mqtt\u5ba2\u6237\u7aef\u6a21\u62df\u8bbe\u5907\u544a\u8b66\u4e0a\u62a5",level:2}],h={toc:p};function d(t){var e=t.components,s=(0,a.Z)(t,l);return(0,r.kt)("wrapper",(0,i.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u89c4\u5219\u94fe\u4f7f\u7528\u65b9\u5f0f"},"\u89c4\u5219\u94fe\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("h2",{id:"\u4e00\u5404\u79cd\u811a\u672c\u8bed\u8a00\u6267\u884c\u6d4b\u8bd5"},"\u4e00\u3001\u5404\u79cd\u811a\u672c\u8bed\u8a00\u6267\u884c\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u811a\u672c\u5206\u7c7b\uff1a  javascript\u811a\u672c\u3001python\u811a\u672c\u3001sql\u811a\u672c\u3001lua\u811a\u672c\u3001csharp\u811a\u672c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(6353).Z,width:"215",height:"294"})),(0,r.kt)("p",null,"1.javascript\u811a\u672c"),(0,r.kt)("p",null,"\u5e95\u5c42\u662f\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e93jint\u6765\u6267\u884cjavascript\u811a\u672c\u4ee3\u7801"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sebastienros/jint"},"https://github.com/sebastienros/jint")),(0,r.kt)("p",null,"\u811a\u672c\u53c2\u6570\u4ee5\u53c2\u6570\u540d\uff1ainput \u4f20\u5165\uff0c\u6240\u4ee5\u5728\u65b9\u6cd5\u4e2d\u53d6\u503c\u65f6\u9700\u8981\u52a0\u4e0ainput\u524d\u7f00"),(0,r.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5199\u4e86\u4e00\u4e2ajavascript\u65b9\u6cd5\uff0c\u5b9e\u73b0\u8ba1\u7b97\u4e58\u65b9\u529f\u80fd"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(9745).Z,width:"1246",height:"635"})),(0,r.kt)("p",null,"\u5bf9\u5de5\u4f5c\u94fe\u4f20\u53c2\u6570\u5e76\u6267\u884c\u6d4b\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(8054).Z,width:"1456",height:"631"})),(0,r.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\uff0c\u53ef\u4ee5\u770b\u5230\u5de5\u4f5c\u94fe\u6210\u529f\u63a5\u6536\u4e86\u53c2\u6570\uff0c\u5e76\u4e14\u6267\u884c\u4e86\u4e58\u65b9\u64cd\u4f5c\uff0c\u5e76\u53cd\u9988\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(5685).Z,width:"1342",height:"830"})),(0,r.kt)("p",null,"2.lua\u811a\u672c"),(0,r.kt)("p",null,"\u5e95\u5c42\u662f\u901a\u8fc7NeoLua\u6765\u6267\u884cpython\u8bed\u53e5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/neolithos/neolua"},"https://github.com/neolithos/neolua")),(0,r.kt)("p",null,"\u5199\u4e86\u4e00\u4e2alua\u7684\u8ba1\u7b97\u4e58\u65b9\u51fd\u6570\uff0c\u63a5\u6536\u53c2\u6570\u8f93\u5165\u5e76\u8fd4\u56de\u4e58\u65b9\u7ed3\u679c\uff0c\u8f93\u5165\u53c2\u6570\u4e5f\u662f\u4ee5input\u63a5\u6536"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(7158).Z,width:"1632",height:"693"})),(0,r.kt)("p",null,"\u4f20\u53c2\u5e76\u6d4b\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(8116).Z,width:"1413",height:"619"})),(0,r.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(560).Z,width:"1388",height:"809"})),(0,r.kt)("p",null,"3.sql\u811a\u672c"),(0,r.kt)("p",null,"\u6b64sql\u975e\u5f7csql\uff0c\u4e0d\u662f\u6211\u4eec\u7406\u89e3\u7684\u67e5\u6570\u636e\u5e93\u7684sql\uff0c\u8fd9\u91cc\u7684sql\u8bed\u6cd5\u662f\u8981\u7b26\u5408jsonDB\u8981\u6c42\u7684\uff0c\u56e0\u4e3a\u5b83\u7684\u6570\u636e\u6e90\u662fjsonDB\u5c01\u88c5\u540e\u7684\u5bf9\u8c61"),(0,r.kt)("p",null,"\u5e95\u5c42\u7528\u5230\u4e86\u4e24\u4e2a\u5e93\uff1a"),(0,r.kt)("p",null,"a. \u901a\u8fc7jsonDB\u5e93\u628ajson\u5bf9\u8c61\u5c01\u88c5\u4e00\u4e0b\uff0c\u4f7f\u5b83\u652f\u6301sql\u67e5\u8be2"),(0,r.kt)("p",null,"b.\u901a\u8fc7jint\u5e93\u6267\u884c\u4f60\u7684sql\u811a\u672c"),(0,r.kt)("p",null,"jsonDB\u5e93\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thinkeridea/jsonDB"},"https://github.com/thinkeridea/jsonDB")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(8472).Z,width:"1371",height:"340"})),(0,r.kt)("p",null,"\u7531\u4e8e\u662fjsonDB\u7684sql\uff0c\u800c\u4e14\u6570\u636e\u6e90\u662fjson\u5bf9\u8c61\uff0c\u5e76\u975e\u6570\u636e\u5e93\u3002 \u6240\u4ee5\u8fd9\u4e2a\u811a\u672c\u5f15\u64ce\u4ec5\u652f\u6301\u7b80\u5355\u7684crud\uff0c\u51fd\u6570\u3001\u5b58\u50a8\u8fc7\u7a0b\u8fd9\u4e9b\u90fd\u4e0d\u652f\u6301\u3002 "),(0,r.kt)("p",null,'\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u8fc7\u6ee4\u59d3\u540d="lihong"\u7684\u4eba\uff0c\u67e5\u51fa\u6027\u522b'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(5317).Z,width:"1370",height:"546"})),(0,r.kt)("p",null,"\u8f93\u5165\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(3904).Z,width:"1110",height:"890"})),(0,r.kt)("p",null,"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(9705).Z,width:"1206",height:"747"})),(0,r.kt)("p",null,"4.python\u811a\u672c"),(0,r.kt)("p",null,"\u5e95\u5c42\u662f\u901a\u8fc7IronPython\u6267\u884c\u811a\u672c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/IronLanguages/ironpython3"},"https://github.com/IronLanguages/ironpython3")),(0,r.kt)("p",null,"\u5b9a\u4e49\u4e58\u65b9\u51fd\u6570\uff0c\u6ce8\u610fpython\u9700\u8981\u628a\u8fd4\u56de\u503c\u590d\u5236\u7ed9output\u5f62\u53c2\uff0c\u6ca1\u6709\u8fd9\u4e2a\u53c2\u6570\u4f1a\u62a5\u9519"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(2987).Z,width:"1643",height:"697"})),(0,r.kt)("p",null,"\u4f20\u53c2\u5e76\u6d4b\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(9603).Z,width:"1304",height:"569"})),(0,r.kt)("p",null,"\u6267\u884c\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(6758).Z,width:"1023",height:"795"})),(0,r.kt)("p",null,"5.csharp\u811a\u672c"),(0,r.kt)("p",null,"\u5e95\u5c42\u901a\u8fc7cs-script\u52a8\u6001\u6267\u884cc#\u811a\u672c\u4ee3\u7801"),(0,r.kt)("p",null,"c#\u811a\u672c\u8ba1\u7b97\u4e58\u65b9"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(7546).Z,width:"1513",height:"759"})),(0,r.kt)("p",null,"\u53d1\u9001\u6570\u636e\u5e76\u6d4b\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(5170).Z,width:"1087",height:"560"})),(0,r.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(2379).Z,width:"1469",height:"798"})),(0,r.kt)("h2",{id:"\u4e8c\u901a\u8fc7mqtt\u5ba2\u6237\u7aef\u6a21\u62df\u8bbe\u5907\u544a\u8b66\u4e0a\u62a5"},"\u4e8c\u3001\u901a\u8fc7mqtt\u5ba2\u6237\u7aef\u6a21\u62df\u8bbe\u5907\u544a\u8b66\u4e0a\u62a5"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(6507).Z,width:"1726",height:"733"})),(0,r.kt)("p",null,"\u8bbe\u8ba1\u89c4\u5219\u94fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(9532).Z,width:"1267",height:"773"})),(0,r.kt)("p",null,"\u5728javascript\u811a\u672c\u4e2d\uff0c\u52a0\u5165\u53d1\u70e7\u7684\u903b\u8f91\u5224\u65ad\u8bed\u53e5\uff0c\u7136\u540ecreateAlarmDto\u5e76\u8fd4\u56de"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(8542).Z,width:"1856",height:"868"})),(0,r.kt)("p",null,"mqtt\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u5e73\u53f0\uff0c\u5e76\u6a21\u62df\u53d1\u9001\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(2128).Z,width:"1009",height:"690"})),(0,r.kt)("p",null,"\u6210\u529f\u521b\u5efa\u544a\u8b66"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(99).Z,width:"1723",height:"598"})))}d.isMDXComponent=!0},9532:function(t,e,n){e.Z=n.p+"assets/images/alarm-rule-design-30e729ed90e27abe5d186fa6682db599.png"},8542:function(t,e,n){e.Z=n.p+"assets/images/alarm-rule-function-59d02524797a6847a2084a6f36e27426.png"},2128:function(t,e,n){e.Z=n.p+"assets/images/alarm-rule-mqtt-test-5cf12c7ef122b42eabf79f9fd8932c4d.png"},99:function(t,e,n){e.Z=n.p+"assets/images/alarm-rule-result-d66bb316a1c3ae79afacf4a12b5c3907.png"},7546:function(t,e,n){e.Z=n.p+"assets/images/csharp-function-633dcf099f46d1782e622087a236a8e3.png"},2379:function(t,e,n){e.Z=n.p+"assets/images/csharp-result-f7da693ada2e606d24ad0f67e1ef31bc.png"},5170:function(t,e,n){e.Z=n.p+"assets/images/csharp-test-37ea403d2336d2adb4ea0efc9df35ca3.png"},9745:function(t,e,n){e.Z=n.p+"assets/images/javascript-function-f7bb840a06312aaf995fda2491171ddb.png"},5685:function(t,e,n){e.Z=n.p+"assets/images/javascript-result-93be7824b74ed6275ef25ec2220350a6.png"},8054:function(t,e,n){e.Z=n.p+"assets/images/javascript-test-23a41e3f751eaaa93ce6fa001c34e488.png"},7158:function(t,e,n){e.Z=n.p+"assets/images/lua-function-1b69c00b84692082ddd7813b5dd0cefb.png"},560:function(t,e,n){e.Z=n.p+"assets/images/lua-result-11e7d66f071bfc571125042bd43354f5.png"},8116:function(t,e,n){e.Z=n.p+"assets/images/lua-test-34307f03c6b49b22fb33f1936d801f4a.png"},2987:function(t,e,n){e.Z=n.p+"assets/images/python-function-ce35b8cf3e0e330815d1be197a56d2f3.png"},6758:function(t,e,n){e.Z=n.p+"assets/images/python-result-50b6a863ab66e77546ad4ffede59c127.png"},9603:function(t,e,n){e.Z=n.p+"assets/images/python-test-5e1a927968ecfecc2a07d785cd8481d6.png"},6507:function(t,e,n){e.Z=n.p+"assets/images/rules-list-68d773cc4a806ddfd67fd59b8016b396.png"},6353:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAEmCAYAAADxxAW9AAAgAElEQVR4nO3dfVwVdd7/8ddwOCCiZCrGAUTRTXTLBDQVpTLq142smcJelzdrt9Zu67pUW5dXoUWt1Lq1XZI/t8tSW9dS+y1oWti2edMNiljclLVIqSQCR0FM0aPC4Zz5/XEOh3sYkDkofJ6PBw/OzHxn5ksP332/8z3fmVFUVVURQnRY4Y9Fza73cHM9hOgxJFxC6ETCJYROJFxC6ETCJYROJFxC6ETCJYROJFxC6ETCJYROJFxC6ETCJYROJFxC6KQTw/UNr0WOI8L5s3BbBQAV2xKISPnGUSRvuWt7ROQ4Xstr+WgV2xJcxxDiStTJLddknv/oK3YkTW6lyBJ25HzM860UEaI78NTv0CW8v/BOXtgDsIeIdb9i3dqmpSq2JXB70p4WjnEnEUlN10YnfcyKewZ0Yl2F6HydHK49vHD3OACik57j3hVfcdO2BG4vfJjchBsgb3mTPQbck0LuPY1W5i0n4qF3AJi39iueDO/cWgrhDu7vFrblxFYWrgllXdJkopPWMmzNcr7pvAqKHuir7Ow2y3zyyY5OP6+Oo4UZvBY5ztHlW/eQYwDjszZ2ObGVhXcX8siK6QQBEMS9i0N5K1ICJjpu+fLXefXVv7S4ffGS59i1a3enn1fHcEXzZI6jFYtO+pjcnK948pZWiuctJ+LuXdz20ePcUH/9NdNZ8VEob0Um8P4J/Woruq931q+joOB7Fi95rsm2Pzz1NCdOnODll5M7/bydHC7HNVfdAEUFX3wSyiMh6+uG45vxTco4Ih6CdTkp3HtNMwWumc6Kj2LYefc4GZ4XHfLWW6s4cfwECxcmuNY99tvfUXmmkrfeXKXLOTt5QGMyz3+Uwk1ZCSQBFdte5MjDKdxr2kr0ul1800zL9U3KOO4/tIQdOdF8sXAc9zcYOKw3Wnj/WnJzPub9hXcSUbjWMUAiRDu89dYqHnnk1zzyyK8brNOL0mlPf6q9Xsp5nKBtCSQVhsK6d8hwFZjM80mhvPAJzOMd1u/5FetyGnUB66nYlkASz8mQu+h0teHqrGC19PSnTmu5KrJ2kXH/w6wAKgBC57Ei53HX9m9SxvHWJwAx3L/iK57srBML0U56tlb1ddo1V0nhHuaFFrLQOUIYGtKwxbkh4StWPBzaWacT4rLXed1CIXooeSioEG4m4RJCJxIuIXQi4RJCJxIuIXQi4RJCJxIuIXQi4RJCJxIuIXQi4RJCJxIuIXQi4RJCJxIuIXQi4RJCJxIuIXQi4RJCJxIuIXQi4RJCJ+16QM2FC1BdDf/zKuzPar7M+o0Nl+fN7rxy+f+Gl/7YtMzIUZD4XPcrtzkVtqQ1LTcjDmbGd79yyS/Cwfym5Z5dAqN+3rXlPD3h6I9ww5im5VqiqeWy2eDMGTh/HmpqIChY+wmE6A5qauDF5yFhAZjN2vbR9ICavFwYHFK37G200Mv7Ap6GGkCebyO6K4UamyfVVh+KS31Z/hf4sRCuvRZSVtaV6vADatL+Ac8ugt07weBh46o+J+nTuxJPgxUJlujeVDwNVnr3qmTYkJMkPmdjaCj88IMjF21pM1yff+r4fVU/6NP7J2eohOhZPA1Wrhn4EzPiHMu1uWhNm+EqLHT8njDBIsESPZqnwcqECRagLhetlm+rQE2N43fvXhcuqWJCdAe9e11gRpyvprKah+IdgxdC9GyehpoGXx+0ph1fIsvghRDtyUGbLVfjL3uFENrI9Cch2mlLWvMzThrr5DdLOlwsnnjJx+gVvK8TaiJE59uc6vg9/9HWy7XZch3Mb37elRCidW22XMkvOn5v3653VYToXq6sa66sFJTZWzje1fVoRmZyIHGbyjqtnLjy6XLNpZsJCaiX6ehlVGIpGq5xRQ9yBbdcZWyYHYhidP7Urm/cuhVvIc6YQmZr+9TuV7veVd7h+Kb5rm21rU5mciBxs+e71tW1SI5zJG/aQlyjfY5vms+kJNg8L1xaryvYjDhccwxbc2WFq57M5HDmXv8BqrUU1foBS1MXsCYLmBDN0tR0dhU7yh3PSGdzUjRRre1DNsnRB3i3sBTVWop5/QFerf3Hn5WCaWssZuc+kfOeZYPz2JtxrE+bNahJ/RbPK+Ipaylq4Upw7hMwazV7k2Dm+rxm9xFXhpnxaJql0Wa3cOSozqhOnc/3XXR9vnliLwBKzDYsF+yMGGbUfJyoxNJ635UPJjQeCl2ft5OWUcacWbBr63aWPr66jX0aCpi12tXFy9yxjJnT8wgAYCyJVsexMgGuD3Gub2rm+tlEAQTP4KmkBbyaUcYcCVSP0mbLlfhcw1vPO8Ods+u6RFPiTvCzSSWMuc3M3AUntR+kuK7bpRjDmZtau2EQMdOnsvnwMSjeQ1rqImImtLXPWBILY0kLbdxdLKPw25arMHP44Ba3RYZKkHq6Lu0Wrk+1kJVTxfIXr+bNVwYQOdpL455lbHh6AazPc3bx8ni3XjMdEB3LzKQMMkuKXF3CtvYheAZpVme3cHo6puRsYBCh13fsb8sprP0fSOsBFVcerTM0ujRcgwY6Tv+vzy4ybowXf/iNX8cOlLWxXisEBE8mLn4Zk6KXsfT2sW3v02DQw6G2VQodPpXNW/c4W7Jsko2BJLfwcJ76XPsU7yEtdSpx0dKSdRebU+tmabSmS2do3DnFh0d/1YftOy8w/YEy/v4Pi8Y9BzHn8UVsnhfu6MbtiGZvUv3WwtE1hHpdwtb2CZ7ByvUHmOTsMpq2xrLSeX0UMGs1e69fgMkYiGKcRs76PBInNFOlRpZeX+TYJ3QBkRmrmeN8qE/o8KkyWthDtPmAmql3OH5v367xkTe0Prfw830XuXN2GR9vHOQa0Ni+8wLvbbPw/7adZ9MbA5l+V+/m5xZmpaAsD8G8cUaLAwldr4wNs8MpfLxUUwjFlWfqVBMA2//lWO7wA2o6y5vvnAPgnMWR5YH9DWzfeYFHn65g6m0+rEsZCMBf151tdv/M5ECU6GUsffxyDpYQddwyQ+MfH5wnYckpXl9TSeVZO9Pu8OHnI4z87b1zrE+1sGd/FVVWR+gSE65q9hhRiaWoie6o7aUaxJyNpV1dCXEZcEu4fjmtNzCQD3ec5/abfLh5ojcAf15yNRPHevP5vov08fVg+p29uTFc64ihEF1Dy+wM6IJrLq3kfi5xuao447jmGjDAsdzSNZcuMzQkGEJoCFdnz84Qoqe4YifuCtFVdJihoXS8NkJ0G0rnz9CosV1Z91UKoYf25KDNkstecjzSetM/fPDzlWfFi57t/EUfwPEyvLa02XKFhjp+Z2X5UmPTfr+VEN1Njc1IVpbjOfG1uWhNm+G6eYrj95Y0OHHyagmY6JFqbEbOWq4mc69juTYXrdH0ZsmEBY4Xfg0NdTwIcWSYBS+jvFlSdHeON0tWVftwsdrRYp0/Dx9ug8cW1JVq6UtkTeEym+FPSx0Ba/yy5s58oXhXlbvcXzwuLzK/tHKd/eLxPn3AYKjb3uEZGgAmk+MdsNs/hNE31L2zS4ieQFEcofLyAh+fduynpeUSQrSsy+/nEqKnkXAJoRMJlxA6kXAJoRMJlxA6kXAJoRMJlxA6kXAJoRMJlxA6kXAJoZN23V585PAxCgoKKS8/hc1m16tOQlxWDAYP/P37ExYWyrBWXhvVmOZwfbn/AGZzOeERowgy+WLwqAZVbjkR3ZkCiic2uxclZgt5uflUVJzmxvGjNe2tqVt45PAxzOZyYmOjCQkyYlAsoFqRYInuTQXVikGxEBJkJDY2GrO5nCOHj2naW1O4CgoKCY8YhUGpdIZKiB5GtWJQKgmPGEVBQXMv+21KU7jKy08RZPKVYImeTbUSZPKlvPyUpuKawmWz2R3XWEL0cAaPas2DedqH4lW5/ViI9uSgHd9zyeCFEO3JgXyJLIROJFxC6MRtD4D/v/8qJu/HM5SdqaLszAWuD/YlzORL9Mj+RIUNcFc1hHAbt7Rc72eXU3G2mgduCaTszEUUVeXbo2dIyyzmibV5pH8l7xAW3Y9bWq6TldX49/Wkt5cH2G2oqh3VbkdR7aiqDfOp8+6ohhBu5ZaWS0Hl22OVrNlZRGSoH5GhV6FgB+woqoquI5HFW4gzppAJQBkbZgeSnKXf6YSopVvLlXXoDAeOnQNUFFUlcqgfjrlaji/gsn8oc7ZcdlBVKP2z43evMBhwr17VEsJtdGm58kstPPveIdbsOsaanUWs3nmU1TsKWf3JEcfPvw45WixVRakNl6rC+Xw4uRkuHG7+wFkpKLO3sCE5EMUYiFLbIjVonQCySTamkEk2yaEL2MwyJtXfXriFOKPjGHGbyuqOX1y3XqlfPisFZXYKybNrt81nQ3Gn/2cT3Ywu4dr6VRmWi9Woqg3VXvtjB7u93nLd+n59vMB6Bmx2sNngp90tHzx1AWnD81CtpexNWsak5GwInkxc/DJ21Xb3sjJYnBRNFGNJLFzJTBax15pAlHPz4q2w0lqKmrGIzfOedQbFEUTW1zv27C0cd513GTxeimrN49347cxdl63HfzrRjegSroKSc3WtkWoH1d7gGstxneVYHnaNLzcPLYGqYmdZFS4caeXoi3hq1iAAou5fycykDDIZRMz0qeQUOlqhzB3LWHr72BaPMHP6ZAIAJkSztHZlcRE5jY+dms4uVwu1iJgJgPNcQrRFl2uu/JKzYLe5ghU14mpirruKa/3P48EFV/B8vAyYvA/hafkSnC0bdjtYDrV88PgQmnupX0B0LDy9h+OzQtiVtIiYxJYPERk6qOnKkiI2A0/VLgeHEKnhvEK0RJdwjQrsTf6xM6Cq9DIqLJp2FQG2d6C6pC5Aqh2q7HDBXq+Fc7Z2vVr5Z5xaROFGHC1P/UAETyaOZ9m1aTSLk6LbP/4YFMJM6r2toriIHJBAiQ7TpVsYZurtDIuNUH8fAnyKHN2++q1T/R+bzXG9Zbc5floLF3XXVpk7lkFStPNaahAx02HuvNa7hC0KDiGSZbzqHODIXLeAzfGxxAS3/1BCgE4t1x1jBvH+vmOg2vExeoDtrKNFqm2xGrdU9X+UXjDw9pYPHr8IlgeipALxKzFvrAtSQHQsMxntvDZyCg4hkgVMMsJeawuvmQRwDn7EhYajzANYxF7rDEcLKUQHaHr53dtrN/PgfVFtFWvgnzlmtmUdQ1VV3phTBqe21oWr/73OcNEoXHbwHQF+Ec0fNCsFZXkI5o3N/6M/vmk+psOPoSZ2oOUSQqO3/57Jgw/NdC1f0mtbO+KuSBN3RZocCz9tqwuQXYXytLqg2e0wKB4CfnlJ58tMDmRS0iL2WiVY4vLgnlnxquq8nqodzHAuhz4HFbsdy1pMSEDd2PymqMRS1FZGCIVwN/fcz+U5wNFiNfjuS4Vz38GFo+DZzy3VEMKd3NNy+UWDR184m+v4gthSAL1+BtbTMPAuGBDjlmoI4U5uu1mSPmMcP0L0EHKbvxA6kXAJoZN2hEvRrxZCXDG050B7uBT3XZ4JcdlqRw40hctg8MBm9+pwfYToLmx2LwwGbW2SplL+/v0pMVtAMV5SxYS4oilGSswW/P37ayquKVxhYaHk5eZjU/0kYKJnUozYVD/ycvMJC9N2I5KmcA0bPhiTyZ/09AyKSqzYVF9nyGSQQ3RnijNUvhSVWElPz8Bk8tf86lZNs+JryTuRRU/U1juRW5oV365wCSGaailc8iWyEDqRcAmhEwmXEDqRcAmhEwmXEDqRcAmhEwmXEDqRcAmhEwmXEDqRcAmhEwmXEDpp1+3FMnFX9ERtTdxtieZwfbn/AGZzOeERowgy+WLwqAa1Bl1fFi5El1JA8cRm96LEbCEvN5+KitPcOH60pr01dQuPHD6G2VxObGw0IUFGDIoFVCsSLNG9qaBaMSgWQoKMxMZGYzaXc+TwMU17awpXQUEh4RGjMCiVzlAJ0cOoVgxKJeERoygoKNS0i6ZwlZefIsjkK8ESPZtqJcjkS3n5KU3FNYXLZrM7rrGE6OEMHtWaB/O0D8WrNR2tjxDdRzty0I7vuWTwQoj25EC+RBZCJxIuIXSi6wPg33zrXf598EcArNaLTLl5PBeraigqPk552SkMnkYCQ4ZjRwHbRexVp1n09G/1rJIQbqNby7X0lbexeA/hXOAkzgVE4TH0Jq4KjuDohas5ovyMC0NiCLt1FkrgDbyXb+OLigF4B4xh6Z/e0KtKQriVLuF64Y9/wTRsNO/uN5NXeJK8oxVUe/Ylbf8x3s8r5+ui02R/X8ybH2bxQWY+c24Lp7SikneySrl+0jRe+YsETFz5dAmXp7EXn39X3GBd2OCBZH9f3KTs2fNVfPV9CdOiRgHwUd4xikvKOq8yWSkos7d03vGE0EiXcFVWnse7b8M3QfTx8WZ2TDi/cIaoVt/e3kwZM4yxI4IBCB9yNUGB/npUSwi30iVc11wzAC/7hQbrwgb7U1x+hjvGjWDy9UNd62fHhPPmh1mUVlQCUHPRwsiw4S0cuYwNswNRjI6fuE31WrisFNf65E1biDOmkNnZf5gQ7aBLuK4dHsxAr4bzEAuOlfPFgUJ+v2Ir1w29psV9TxT9wNS7b2t22/FNzzL3+g9QraWo1g+InLfRGaBskqOXsTSjFNVaSszhBWzuvD9HiA7RJVzjb4ygF9rmIn769RHX9dad11/DkP7g6anlG4KxJFoTiALIymAxi4iZ4NgSdf9KZnao5kJ0Hp26hf74GKz4ejV9f9eU8OF8+vUR1/L3x8pd11tXqWeYMf2OFo8bMGs1e5lW1/3LqrcxPgRtryQTwj30m6FhO8/EoX1di+cuVBH980BGBA/k+2PlDYq++WEWvxh/LWdKD/LtdwWUmk+0eNioxFJXt5Do+WyoHYBMLULbXTZCuIdu4Zo4IZyrPc67lvtxjqO732V0YG/m3BbeoOyIwf5s/eJrTDf8HwKGTeAPTy9t9piZyY0GMRhNaDAwIZqlLONV57bMdXLNJbqebuGaMD6CQwcy+d2do7hv8lCqz1Yw48EEMg6eYEzI1Q3KDh/ky/mKUs6fLGbNX//C4mcXNnvMqMQPiJwX7uwWToMM5zUXY0ksXAnOba+ySK65RJfTdW7h6lV/ZtkrfyU752v8/Qdx9aAQThQfQam8tUG58pKj3HJdX265OQb4RStHHEuitZTE5jYFzyDNOsPxuXgLcUnOt/1NSEDd2Al/jBDtpGu4gCYTcfO+/o6PPstvsM7Ho4bBg4P0rooQbqV7uBoLH3MdOzMPQb2heoNaTVBgQOedJHgGafK4D9HFuuR+rl5UM2KwY4rT9NH9qao8jre3V1dURQjduL3lArhuVDBV3xxl9AhPelcXkfBfv+mKagihqy4J15RbophyS1RXnFoIt5Hb/IXQiYRLCJ20I1xN5wkK0fNoz4H2cCldcnkmxOWlHTnQFC6DwQObXYbKhbDZvTAYtLVJmkr5+/enxGwBxXhJFRPiiqYYKTFb8Pfv33ZZNIYrLCyUvNx8bKqfBEz0TIoRm+pHXm4+YWHa7hzUFK5hwwdjMvmTnp5BUYkVm+rrDJkMcojuTHGGypeiEivp6RmYTP6aX92qqKqq+cny8k5k0RO19U7kwh+Lmt2vXeESQjTVUrjkS2QhdCLhEkInEi4hdCLhEkInEi4hdCLhEkInEi4hdCLhEkInEi4hdCLhEkInEi4hdNKu24tl4q7oidqauNsSzeH6cv8BzOZywiNGEWTyxeBRDWoNIPN+RXelgOKJze5FidlCXm4+FRWnuXH8aE17a+oWHjl8DLO5nNjYaEKCjBgUC6hWJFiie1NBtWJQLIQEGYmNjcZsLufI4WOa9tYUroKCQsIjRmFQKp2hEqKHUa0YlErCI0ZRUKDtNYuawlVefoogk68ES/RsqpUgky/l5ac0FdcULpvN7rjGEqKHM3hUax7M0z4Ur9Z0tD5CdB/tyEE7vueSwQsh2pMD+RJZCJ1IuITQiVseAF9V5RhlrDxrwdvbiLeXF5VnLQD49fUFIP/gGR58eDcAb6+5lfAxA91RNSF0o3u4Ks9aXAHy9+7nWl//c1WVlUd/s4u8rysAePzJPXy6c7reVRNCV7qGq6S0nKBAx7uPd+4qYfP7R8jNLSdz3wmiJl5DRIQ/M+8dxm0xQVTLSL/oZnQLV/nJ065gvb7iAAlPZjTYnrnvBJn7TrBm7UH+/PJE/rY2hgce2gXA8tcmN3/QrBSU5SGYN84gQK+KC9FJdAlXVZXV1RX858dFTYIF4O/vS1raLKKiBvPQQ+8zYsR58rL/w7W/EFc63UYLvb2N5OSWc/cv0pvdvnTpbdx00xA8PT1Yu/Ze7o37mJzccs3Hz0wOJG5TmXOpjA2zA0nOqt2aTbIxEKX2Jzn7kv4WITpCl3DVjgSuevPfLZb57rsy1+fMzGNUVdW4ytfu3zFlbJg9jZz1eajWUtTClcxMeoMNxZdwSCE6QNcBjewcR0v0/PO38sILuxtse/31fQBcd90gFi/e2aC8t/elvANsEHM2ljKndjE4hMhLOJoQHaVLy1V7vVUblnvuCXNtmzJlqOv366/v4+zZKp555qYG5b29LvEVsVkpdV1C4zQWX9rRhOgQXcJV5RxXj5p4DQD9+/d2bXvttbsBWLXqHgCeeupjnnhiUoPy7e8WHqMwtfZzNsnRy1iaUeroFlo/YGnH/gwhLok+4XKO9kVEOIbi+/f3cW0LCbkKgBEjBrJq1T2o6ouubbXltdq8dQ/HAbIyWmydjm96Q1ou0SV07RbOvHcYADk5peze/SC7dz/IgAG9UdUXOXjwJI8+Os61z5QpQ13la/dvTVTiByxNXYDJGIiyI4R342u3jOXh9VNZHO3oFi7gMd6N305hSaf+iUK0SdcBjdtigkh5LZpbb327zbIpr0VzW0xQ699xTUhA3Vi7MJZEaymJro0zXJ8CZq1GnVVvv1ml7au4EJ1Al5bL29voum76/cLRfPRhbKvlP/owlt8vdDxRp3ZyrxBXOt2+RPbr60tJqWP07647Q8jeH8+j83/O2EjHddXYSH8enf9zsvfHc9edIYBjLqL/wH4tHlOIK4mu3cKgQH/KT57Gr68vkRH+rHrjlhbLVp61uOYiCtEd6H7Lif/AflRVWamqsja4h6uqurrBHEQtgxhCXEnccrNk7TVU/Xu4vL2N0NcdZxeia8ht/kLoRMIlhE7aES5Fv1oIccXQngPt4VLccnkmxOWtHTnQFC6DwQOb/RJnqgvRDdjsXhgM2tokTaX8/ftTYraAIjMnRA+mGCkxW/D376+puKZwhYWFkpebj031k4CJnkkxYlP9yMvNJywsVNMumsI1bPhgTCZ/0tMzKCqxYlN9nSGTQQ7RnSnOUPlSVGIlPT0Dk8lf86tbFVVVNT9ZXt6JLHqitt6JXPhjUbP7tStcQoimWgqXfIkshE4kXELoRMIlhE4kXELoRMIlhE4kXELoRMIlhE4kXELoRMIlhE4kXELoRMIlhE7adXuxTNwVPVFbE3dbojlcX+4/gNlcTnjEKIJMvhg8qkGtAWTer+iuFFA8sdm9KDFbyMvNp6LiNDeOH61pb03dwiOHj2E2lxMbG01IkBGDYgHVigRLdG8qqFYMioWQICOxsdGYzeUcOXxM096awlVQUEh4xCgMSqUzVEL0MKoVg1JJeMQoCgoKNe2iKVzl5acIMvlKsETPploJMvlSXn5KU3FN4bLZ7I5rLCF6OINHtebBPO1D8WpNR+sjRPfRjhy043suGbwQoj05kC+RhdCJhEsInbjlAfCV1edYnf8e24/u5puTBzldXUk/Lz9uGDiSqUNuZf6o/8TPq487qiKE2+gerjX57/HMvlc4XVXZYP3p6ko+L93P56X7+VPOG7w88WkeHvWfeldHCLfRtVv4Us4bPPbZkibBaux0VSWPfbaEpC+X61kdIdxKt3C9fTCVVd9tol+9V7W25aXsv7Im/73Oq0TxFuKMKWR23hGF0EyXcFVWn2NZ7ioAfDx92hWwZ/a9QmX1OT2qJYRb6RKutw+mcqGmbkbHb0Y/QsYvd1P9u7N8Hr/TtX7hmN9y36i5PD8hkcmmKMDRRVzdWutVvIU4YyCKMRBl9haOO1dnJjvXGQNRkrMb7FK4ab5z23w2FNetP+5a32hbVgrK7PmO88zewvGsFJTZW9jgOoe0hqJtuoRrV0ndP72JAeO5a8gdvPd9KoPeCmbOP+9zbbtv1Fy+q8hn3si57DHX7bP96O4WjpxNcmg6cYWlqNZS9l6/gAWbyiArhUnfrsRsLUW15vHut2/UC9Ey0njJUT5pO3OfdgYyKwXTvNHstZbWbVtXL5SpOM6zcQYBAKkLSBue5yy7jEmNAixEY7qE64fTR12f/2vsk6Qe2kLqoc34ePbmnNXR5Vsy/hnSC/9J5n98RkjfwfzPza+49vnm5MHmD5yVweL4WGKCHYtRiaWkzRrUqNAg5mxczZzg2uWpxEU7ykTdvqiu2IQEVGsCUc7F0OFTGx1nNKHB9ZcX8ZTzXFH3r2RmUoa0XqJVuoTLUnPB9Xnk1WGkHdriWvbx7E0/76v44/6X+fXo+QA8s3cJT3z+tKvM6ermRxePFx5o/oQTEjBPT8fk7OLFbSqrt7FxSGqVsWF2XVfSNG97w83xIYS2tixEG3QJl6+nj+tzicXMxIDxDbbfGjyF5KgXGNCrP9t//CdPhC9kyfhnXNv7efk1e9yA0JbvAA2YtRrV2S2M2xpOclbrdTy+6VnmUtuVLMW8vnHL1UhqEa67eEqK2Nx6aSH0Cde1/Ya4Pi/PXcHEgAn0MTpmYAz1G8K+4/s5fKaQ/z3wFt9W/JvffprAH/e/7NrnhoEjmz9wUAgzU9PZ5byeykx2DF4c3zS/0SDGVEKD2lPjbNY0brmaWMYuZ2AzdyyDpGhXl1KI5ugSrpigun926T9+hEHxYNu0VAru+4ZHrnsIgJ+qfuJv+evZa87k85IvGuw/dcitzR84eAZpGYXIvjMAAAI3SURBVKOZG+royk36diXmxLEEzHqJd7+d5uzihZM2/aV611zNC5j1GEtTFzi7khnEZCyCb4tco49NxC+C5Q3PK0RrNL1Z8u21m3nwPu3/n66sPsf4tBkNhuNbc6HmPKerzgDQz9uPQ3M/vbzmGmaloCwPwVw7cih6tLf/nsmDD810Lbv1zZJ+Xn3474hfay5fO8gB8PLEpy+vYAnRQbpN3H1gZDzm8+X873ebNJX38ezNE2Meujwn705IQN3Y1ZUQVxpdZ8U/E/kYpt7+/Cl3VatdRB9PL/474tc8MDJez+oI4Va633LywMh4Zg67i7cPprKrJJMfTh/FUnMBX08fru03hJigKB4cGS9dQdHtuOVmST+vPiTc8AAJNzzgjtMJcVmQ2/yF0ImESwidtCNcin61EOKKoT0H2sOluOXyTIjLWztyoClcBoMHNrtXh+sjRHdhs3thMGhrkzSV8vfvT4nZAorxkiomxBVNMVJituDv319TcU3hCgsLJS83H5vqJwETPZNixKb6kZebT1iYtjv7NIVr2PDBmEz+pKdnUFRixab6OkMmgxyiO1OcofKlqMRKenoGJpO/5le3apoVX0veiSx6orbeidzSrPh2hUsI0ZRbbzkRQki4hNCNhEsInUi4hNCJhEsInUi4hNCJhEsInUi4hNCJhEsInUi4hNCJhEsInUi4hNCJhEuIS+Tp2fTWf09PTwmXEJfqKr++za6TW06E6AQWy3ks588D4Nu7N76+vfn/hFnKSaAN4jQAAAAASUVORK5CYII="},8472:function(t,e,n){e.Z=n.p+"assets/images/sql-code-78d2ece106821e2015798db79ed92c0f.png"},5317:function(t,e,n){e.Z=n.p+"assets/images/sql-function-5306bc4fd2871ef0b2887b50e53e11a5.png"},9705:function(t,e,n){e.Z=n.p+"assets/images/sql-result-91ae00039e05f8361c0a2928ff812560.png"},3904:function(t,e,n){e.Z=n.p+"assets/images/sql-test-ac1fd7014657a15638ce4da2b0e4914a.png"}}]);