"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[69],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,k=d["".concat(s,".").concat(v)]||d[v]||u[v]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},s="MQTT\u534f\u8bae",p={unversionedId:"tutorial-extras/mqtt",id:"tutorial-extras/mqtt",title:"MQTT\u534f\u8bae",description:"\u672c\u6587\u7ae0\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7MQTT\u8fdb\u884c\u9065\u6d4b\u548c\u5c5e\u6027\u6570\u636e\u4e0a\u4f20\u4ee5\u53caRPC\u63a7\u5236\u7684\u5b9e\u73b0\u3002",source:"@site/docs/tutorial-extras/mqtt.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/mqtt",permalink:"/docs/tutorial-extras/mqtt",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-extras/mqtt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u89c4\u5219\u94fe\u4f7f\u7528\u65b9\u5f0f",permalink:"/docs/tutorial-basics/scriptuse"},next:{title:"Http\u534f\u8bae",permalink:"/docs/tutorial-extras/http"}},c={},u=[{value:"\u53d1\u9001\u5c5e\u6027\u548c\u9065\u6d4b\u6570\u636e",id:"\u53d1\u9001\u5c5e\u6027\u548c\u9065\u6d4b\u6570\u636e",level:2},{value:"\u8fde\u63a5\u76f4\u8fde\u8bbe\u5907\u6216\u8005\u7f51\u5173",id:"\u8fde\u63a5\u76f4\u8fde\u8bbe\u5907\u6216\u8005\u7f51\u5173",level:3},{value:"\u76f4\u8fde\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e",id:"\u76f4\u8fde\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e",level:3},{value:"\u7f51\u5173\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e",id:"\u7f51\u5173\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e",level:3},{value:"\u7f51\u5173\u5b50\u8bbe\u5907\u7684\u4e0a\u7ebf\u4e0e\u5df2\u4e0b\u7ebf",id:"\u7f51\u5173\u5b50\u8bbe\u5907\u7684\u4e0a\u7ebf\u4e0e\u5df2\u4e0b\u7ebf",level:3},{value:"\u7f51\u5173\u8bbe\u5907\u6279\u91cf\u53d1\u9001\u8bbe\u5907\u9065\u6d4b\u6570\u636e\u548c\u5c5e\u6027\u6570\u636e",id:"\u7f51\u5173\u8bbe\u5907\u6279\u91cf\u53d1\u9001\u8bbe\u5907\u9065\u6d4b\u6570\u636e\u548c\u5c5e\u6027\u6570\u636e",level:3},{value:"\u8ba2\u9605\u5c5e\u6027",id:"\u8ba2\u9605\u5c5e\u6027",level:2},{value:"\u76f4\u8fde\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027",id:"\u76f4\u8fde\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027",level:3},{value:"\u7f51\u5173\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027",id:"\u7f51\u5173\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027",level:3},{value:"\u53d1\u8d77\u4e0a\u884cRPC\u8fdc\u7a0b\u63a7\u5236",id:"\u53d1\u8d77\u4e0a\u884crpc\u8fdc\u7a0b\u63a7\u5236",level:2},{value:"\u53d1\u8d77\u4e0b\u884cRPC\u8fdc\u7a0b\u63a7\u5236",id:"\u53d1\u8d77\u4e0b\u884crpc\u8fdc\u7a0b\u63a7\u5236",level:2},{value:"RawData",id:"rawdata",level:2},{value:"\u8bbe\u5907\u900f\u4f20\u7684\u539f\u59cb\u6570\u636e",id:"\u8bbe\u5907\u900f\u4f20\u7684\u539f\u59cb\u6570\u636e",level:2},{value:"KepServerEx",id:"kepserverex",level:2}],d={toc:u};function v(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mqtt\u534f\u8bae"},"MQTT\u534f\u8bae"),(0,l.kt)("p",null,"\u672c\u6587\u7ae0\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7MQTT\u8fdb\u884c\u9065\u6d4b\u548c\u5c5e\u6027\u6570\u636e\u4e0a\u4f20\u4ee5\u53caRPC\u63a7\u5236\u7684\u5b9e\u73b0\u3002 "),(0,l.kt)("h2",{id:"\u53d1\u9001\u5c5e\u6027\u548c\u9065\u6d4b\u6570\u636e"},"\u53d1\u9001\u5c5e\u6027\u548c\u9065\u6d4b\u6570\u636e"),(0,l.kt)("p",null,"\u8bbe\u5907\u5206\u76f4\u8fde\u8bbe\u5907\u548c\u7f51\u5173\u8bbe\u5907\uff0c \u53d1\u9001\u6570\u636e\u65b9\u5f0f\u4e5f\u6709\u6240\u4e0d\u540c\u3002 telemetry \u4e3a \u9065\u6d4b\uff0c attributes\u8868\u793a\u5c5e\u6027\uff0c\u5ba2\u6237\u7aef\u4e0a\u4f20\u7684\u5c5e\u6027\u5728\u670d\u52a1\u5668\u7aef\u6c38\u8fdc\u4e3a ClientSide \uff0c \u5373\u5ba2\u6237\u7aef\u4fa7\u5c5e\u6027\u3002 \u4e0d\u63a8\u8350\u5728\u670d\u52a1\u7aef\u4fee\u6539\u3002 "),(0,l.kt)("h3",{id:"\u8fde\u63a5\u76f4\u8fde\u8bbe\u5907\u6216\u8005\u7f51\u5173"},"\u8fde\u63a5\u76f4\u8fde\u8bbe\u5907\u6216\u8005\u7f51\u5173"),(0,l.kt)("p",null,"\u901a\u8fc7 mqtt\u5ba2\u6237\u7aef\u8fde\u63a5mqtt\u670d\u52a1\u5668\uff0c\u7528\u6237\u540d\u586b\u5199 token\uff0c \u5bc6\u7801\u53ef\u4ee5\u4e3a\u7a7a\u3002 "),(0,l.kt)("h3",{id:"\u76f4\u8fde\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e"},"\u76f4\u8fde\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"devices/me/telemetry\ndevices/me/attributes\n")),(0,l.kt)("p",null," MQTT\u7684\u8d1f\u8f7d\u4e3a\u5982\u4e0b\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stringvalue":"here is strvalue",\n  "intvalue":234\n}\n')),(0,l.kt)("h3",{id:"\u7f51\u5173\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e"},"\u7f51\u5173\u8bbe\u5907\u53d1\u9001\u9065\u6d4b\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"devices/{\u8bbe\u5907\u540d\u79f0}/telemetry\ndevices/{\u8bbe\u5907\u540d\u79f0}/attributes\n")),(0,l.kt)("p",null," {\u8bbe\u5907\u540d\u79f0} \u5219\u662f\u96b6\u5c5e\u5f53\u524d\u7f51\u5173\u8bbe\u5907\u5904\u7406\u7684\u8bbe\u5907\u540d\u79f0\u3002\nMQTT\u7684\u8d1f\u8f7d\u4e3a\u5982\u4e0b\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stringvalue":"here is strvalue",\n  "intvalue":234\n}\n')),(0,l.kt)("h3",{id:"\u7f51\u5173\u5b50\u8bbe\u5907\u7684\u4e0a\u7ebf\u4e0e\u5df2\u4e0b\u7ebf"},"\u7f51\u5173\u5b50\u8bbe\u5907\u7684\u4e0a\u7ebf\u4e0e\u5df2\u4e0b\u7ebf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gateway/connect\ngateway/disconnect\n\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c \u8fd9\u91cc\u76f4\u63a5\u517c\u5bb9 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"v1/gateway/connect\nv1/gateway/disconnect\n")),(0,l.kt)("h3",{id:"\u7f51\u5173\u8bbe\u5907\u6279\u91cf\u53d1\u9001\u8bbe\u5907\u9065\u6d4b\u6570\u636e\u548c\u5c5e\u6027\u6570\u636e"},"\u7f51\u5173\u8bbe\u5907\u6279\u91cf\u53d1\u9001\u8bbe\u5907\u9065\u6d4b\u6570\u636e\u548c\u5c5e\u6027\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gateway/telemetry\ngateway/attributes\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c \u8fd9\u91cc\u76f4\u63a5\u517c\u5bb9 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"v1/gateway/telemetry\nv1/gateway/attributes\n")),(0,l.kt)("p",null,"\u6279\u91cf\u53d1\u9001\u6570\u636e\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subdevice1": [\n        {\n            "ts": 637834108219892435,\n            "devicestatus": 0,\n            "values": {\n                "string": "this string",\n                "float": 22.222\n            }\n        }\n    ],\n    "subdevice2": [\n        {\n            "ts": 637834108219892435,\n            "devicestatus": 0,\n            "values": {\n                "intvalue": 22\n            }\n        }\n    ]\n}\n\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u662f\u4e00\u4e2aC#\u5408\u6210\u6279\u91cf\u4e0a\u4f20\u7684\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},' Dictionary<string, List<Playload>> pairs = new Dictionary<string, List<Playload>>();\n            var plst = new List<Playload>();\n            var values = new Dictionary<string, object>();\n            values.Add("string", "this string");\n            values.Add("intvalue",22);\n            plst.Add(new Playload() { DeviceStatus = DeviceStatus.Good, Ticks = DateTime.Now.Ticks, Values = values });\n            values.Add("float", 22.222);\n            plst.Add(new Playload() { DeviceStatus = DeviceStatus.Bad, Ticks = DateTime.Now.Ticks, Values = values });\n            pairs.Add("subdevice1",plst);\n            pairs.Add("subdevice2", plst);\n         var str=    Newtonsoft.Json.JsonConvert.SerializeObject(pairs);\n            Console.WriteLine(str); \n')),(0,l.kt)("h2",{id:"\u8ba2\u9605\u5c5e\u6027"},"\u8ba2\u9605\u5c5e\u6027"),(0,l.kt)("h3",{id:"\u76f4\u8fde\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027"},"\u76f4\u8fde\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027"),(0,l.kt)("p",null,"\u53d1\u5e03\u8bf7\u6c42"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  devices/me/attributes/request/{\u8bf7\u6c42\u552f\u4e00\u6807\u8bc6}\n")),(0,l.kt)("p",null,"\u8ba2\u9605\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," devices/me/attributes/response/{\u8bf7\u6c42\u552f\u4e00\u6807\u8bc6}\n")),(0,l.kt)("h3",{id:"\u7f51\u5173\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027"},"\u7f51\u5173\u8bbe\u5907\u8bf7\u6c42\u5c5e\u6027"),(0,l.kt)("p",null,"\u53d1\u5e03\u8bf7\u6c42"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  devices/{\u8bbe\u5907\u540d\u79f0}/attributes/request/{\u8bf7\u6c42\u552f\u4e00\u6807\u8bc6}\n")),(0,l.kt)("p",null,"\u8ba2\u9605\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," devices/{\u8bbe\u5907\u540d\u79f0}/attributes/response/{\u8bf7\u6c42\u552f\u4e00\u6807\u8bc6}\n")),(0,l.kt)("h2",{id:"\u53d1\u8d77\u4e0a\u884crpc\u8fdc\u7a0b\u63a7\u5236"},"\u53d1\u8d77\u4e0a\u884cRPC\u8fdc\u7a0b\u63a7\u5236"),(0,l.kt)("p",null,"\u4e0a\u884cRPC\u63a7\u5236\u662f\u6307 \u7ec8\u7aef\u8bbe\u5907\u8fdc\u7a0b\u8c03\u7528\u670d\u52a1\u7aef\u7684\u5185\u5bb9\uff0c IoTSharp \u6536\u5230\u6b64\u8bf7\u6c42\u5219\u8c03\u7528\u89c4\u5219\u94fe\uff0c \u4f60\u53ef\u4ee5\u5728\u89c4\u5219\u94fe\u4e2d\u5904\u7406\u6b64\u8bf7\u6c42\uff0c \u5173\u4e8e\u89c4\u5219\u94fe\u8bf7\u67e5\u770b\u76f8\u5173\u7ae0\u8282\u3002 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  devices/{\u8bbe\u5907\u540d\u79f0}/rpc/request/{\u65b9\u6cd5\u540d\u79f0}\n")),(0,l.kt)("p",null,"\u8bbe\u5907\u540d\u79f0\u8fd9\u91cc\u5982\u679c\u662f\u76f4\u8fde\u8bbe\u5907\uff0c \u5219\u4e3ame\uff0c \u5982\u679c\u662f\u7f51\u5173\u8bbe\u5907\uff0c \u5219\u662f\u8bbe\u5907\u540d\u79f0\uff0c {\u65b9\u6cd5\u540d\u79f0}\u7528\u4e8e\u533a\u522b\u8c03\u7528\u4e86\u4f55\u79cd\u65b9\u6cd5\uff0c \u8fd9\u91cc\u4ea4\u7531\u89c4\u5219\u94fe\u5904\u7406\u3002 \u901a\u8fc7\u89c4\u5219\u94fe\uff0c \u4f60\u53ef\u4ee5\u8c03\u7528 \u5185\u90e8\u670d\u52a1\uff0c \u4e5f\u53ef\u4ee5\u8c03\u7528\u5916\u90e8\u670d\u52a1\u7b49\uff0c \u53d1\u6325\u4f60\u7684\u60f3\u8c61\u5c31\u597d\u3002 "),(0,l.kt)("h2",{id:"\u53d1\u8d77\u4e0b\u884crpc\u8fdc\u7a0b\u63a7\u5236"},"\u53d1\u8d77\u4e0b\u884cRPC\u8fdc\u7a0b\u63a7\u5236"),(0,l.kt)("p",null,"\u4e0b\u884cRPC\u662f\u6307\u5e73\u53f0\u7aef\u6216\u8005\u7b2c\u4e09\u65b9\u670d\u52a1\u8c03\u7528IoTSharp\u8fdb\u884c\u8fdc\u7a0b\u63a7\u5236\u7ec8\u7aef\u8bbe\u5907\u7684\u65b9\u6cd5\u3002 "),(0,l.kt)("p",null,"\u901a\u8fc7MQTT\u53d1\u8d77\u65f6\uff0c \u5148\u8ba2\u9605response\uff0c \u7136\u540e\u53d1\u5e03request\u3002 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," devices/{\u8bbe\u5907\u540d\u79f0}/rpc/request/{\u65b9\u6cd5\u540d\u79f0}/{\u8bf7\u6c42\u552f\u4e00\u6807\u8bc6}\n devices/{\u8bbe\u5907\u540d\u79f0}/rpc/response/{\u65b9\u6cd5\u540d\u79f0}/{\u8bf7\u6c42\u552f\u4e00\u6807\u8bc6}\n")),(0,l.kt)("h2",{id:"rawdata"},"RawData"),(0,l.kt)("p",null,"\u5728Mqtt\u4e2d\u6211\u4eec\u901a\u8fc7topic   gateway/json \u548c gateway/xml  \u6765\u652f\u6301 RawDataGateway \u89e3\u6790\u3002 "),(0,l.kt)("h2",{id:"\u8bbe\u5907\u900f\u4f20\u7684\u539f\u59cb\u6570\u636e"},"\u8bbe\u5907\u900f\u4f20\u7684\u539f\u59cb\u6570\u636e"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c \u901a\u5e38\u60c5\u51b5\u4e0b\u4f60\u9700\u8981 \u914d\u5408\u89c4\u5219\u94fe\u7684\u811a\u672c\u6765\u89e3\u6790\u900f\u4f20\u7684\u539f\u59cb\u6570\u636e\uff0c \u76f8\u5173\u89c6\u9891\u8bf7\u67e5\u770b \u3010IoTSharp \u6559\u7a0b\u7b2c\u4e8c\u96c6 \u89c4\u5219\u94fe\u4f7f\u7528\u3011 ",(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1be4y1N74s/?share_source=copy_web&vd_source=5b4c8cb51c4e0e2e985b5927ecc05d4a"},"https://www.bilibili.com/video/BV1be4y1N74s/?share_source=copy_web&vd_source=5b4c8cb51c4e0e2e985b5927ecc05d4a"),(0,l.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d\u652f\u6301\u7684topic\u5982\u4e0b "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"devices/{\u8bbe\u5907\u540d\u79f0}/data/json  \u6765\u5904\u7406json\u683c\u5f0f\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"devices/{\u8bbe\u5907\u540d\u79f0}/data/binary  \u7528\u4e8e\u5904\u7406\u4e8c\u8fdb\u5236\u6570\u636e ")),(0,l.kt)("p",null,"\u7b2c\u4e09\u65b9\u670d\u52a1\u8c03\u7528\u65f6\u6211\u4eec\u5efa\u8bae\u901a\u8fc7\u901a\u8fc7 Web Api \u53d1\u8d77\uff0c \u793a\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'POST' \\\n  'https://cloud.iotsharp.net/api/Devices/{\u8bbe\u5907\u7684TOKEN}/Rpc/{\u65b9\u6cd5\u540d\u79f0}?timeout={\u8d85\u65f6\u65f6\u95f4}' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '\"{\u53c2\u6570\uff0c \u53ef\u4ee5\u662fjson}\"'\n\n")),(0,l.kt)("h2",{id:"kepserverex"},"KepServerEx"),(0,l.kt)("p",null,"\u5728MQTT\u534f\u8bae\u4e2d\uff0c \u6211\u4eec\u63d0\u4f9b\u4e86\u63a5\u6536KepServerEx\u6d88\u606f\u7684\u670d\u52a1\u7aef\u7f51\u5173"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728KepServerEx\u7684IoT Gateway \u65b0\u5efa \u4e00\u4e2a MQTT\u7684 \u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ol"},"URL \u586b\u5199 tcp://<iotsharp\u5730\u5740>:1883"),(0,l.kt)("li",{parentName:"ol"},"Topic \u586b\u5199 /gateway/kepserverex"),(0,l.kt)("li",{parentName:"ol"},"ClientId\u586b\u5199\u8bbe\u5907ID\u6216\u8005\u968f\u610f"),(0,l.kt)("li",{parentName:"ol"},"UserName\u586b\u5199 \u7f51\u5173\u7a0b\u5e8f\u7684Token ")),(0,l.kt)("p",null,"\u914d\u7f6e\u5982\u4e0b\u56fe\u6240\u793a:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8bbe\u7f6e",src:n(4172).Z,width:"746",height:"442"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8bbe\u7f6e",src:n(9198).Z,width:"746",height:"440"})))}v.isMDXComponent=!0},4172:function(e,t,n){t.Z=n.p+"assets/images/kep_iotgateway-6896389c24bb02d05cd67f71b8c59a54.png"},9198:function(e,t,n){t.Z=n.p+"assets/images/kep_iotgateway2-d8e9ef3ef620bc8ba8a166d3fed324d9.png"}}]);