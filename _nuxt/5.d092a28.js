(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(t,e,o){"use strict";o(39),o(26),o(22),o(29),o(14),o(15),o(3),o(53);var r=o(25),n=o(11),c=(o(108),o(0)),l=o(27);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}e.a=c.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(h(t)?data.style=d(d({},data.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=d(d({},data.class),{},Object(n.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(h(t))data.style=d(d({},data.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),o=Object(r.a)(e,2),c=o[0],f=o[1];data.class=d(d({},data.class),{},Object(n.a)({},c+"--text",!0)),f&&(data.class["text--"+f]=!0)}return data}}})},202:function(t,e,o){"use strict";var r=o(0);function n(t){return function(e,o){for(var r in o)Object.prototype.hasOwnProperty.call(e,r)||this.$delete(this.$data[t],r);for(var n in e)this.$set(this.$data[t],n,e[n])}}e.a=r.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},203:function(t,e,o){"use strict";o.d(e,"b",(function(){return l}));var r=o(0),n=o(16),c={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.default.extend({name:"positionable",props:t.length?Object(n.f)(c,t):c})}e.a=l()},205:function(t,e,o){"use strict";o(39),o(26),o(22),o(3),o(29);var r=o(11),n=(o(208),o(202)),c=o(199),l=(o(135),o(0).default.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(r.a)({},"elevation-".concat(this.elevation),!0)}}})),f=o(207),d=o(106),h=o(105);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(h.a)(n.a,c.a,l,f.a,d.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return y(y({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses),this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}})},208:function(t,e,o){var content=o(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("63000ea3",content,!0,{sourceMap:!1})},209:function(t,e,o){(e=o(48)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#1e1e1e;border-color:#1e1e1e;color:#fff}.v-sheet{border-radius:4px}.v-sheet--tile{border-radius:0}",""]),t.exports=e},210:function(t,e,o){var content=o(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("aa1e91ba",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";var r=o(210);o.n(r).a},237:function(t,e,o){(e=o(48)(!1)).push([t.i,"a{text-decoration:none}",""]),t.exports=e},238:function(t,e,o){var content=o(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("bb35a8d6",content,!0,{sourceMap:!1})},239:function(t,e,o){(e=o(48)(!1)).push([t.i,".theme--light.v-footer{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background-color:#272727;color:#fff}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;flex-wrap:wrap;padding:6px 16px;position:relative;transition-duration:.2s;transition-property:background-color,left,right;transition-timing-function:cubic-bezier(.4,0,.2,1)}.v-footer:not([data-booted=true]){transition:none!important}.v-footer--absolute,.v-footer--fixed{z-index:3}.v-footer--absolute{position:absolute;width:100%}.v-footer--fixed{position:fixed}.v-footer--padless{padding:0}",""]),t.exports=e},254:function(t,e,o){"use strict";o.r(e);o(14),o(15),o(3),o(32);var r=o(7),n=o(13),c=o(8),l=o(2),f=o(20),d=o(84);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(l.a)(t);if(e){var n=Object(l.a)(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return Object(c.a)(this,o)}}var v=function(t,e,o,desc){var r,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c},y=function(t){Object(n.a)(o,t);var e=h(o);function o(){var t;return Object(r.a)(this,o),(t=e.apply(this,arguments)).categorys=[{title:"Discord.js の関連リンク",items:[{text:"ドキュメント",url:"https://discord.js.org/#/docs/main/stable/general/welcome"},{text:"ガイド",url:"https://discordjs.guide"},{text:"Discord",url:"https://discord.gg/bRCvFy9"},{text:"GitHub",url:"https://github.com/discordjs/discord.js"}]},{title:"Discord.js Japan の関連リンク",items:[{text:"Scrapbox",url:"https://scrapbox.io/discordjs-japan"},{text:"Discord",url:"https://discord.gg/4tpD3TY"},{text:"GitHub",url:"https://github.com/discordjs-japan"},{text:"ガイド翻訳 (Crowdin)",url:"https://crwd.in/discordjs-guide"},{text:"ドキュメント翻訳 (Crowdin)",url:"https://crowdin.com/project/discordjs"},{text:"ドキュメント",url:"https://i18n.djs-jpn.tk"},{text:"ガイド",url:"https://guide.discordjs-japan.org"}]}],t}return o}(d.Vue),j=y=v([d.Component],y),m=(o(236),o(44)),O=o(107),x=o.n(O),w=o(249),P=o(258),$=o(250),C=(o(39),o(26),o(22),o(29),o(191),o(11)),D=(o(135),o(238),o(203)),k=o(105);var B=o(205),_=o(128),S=o(16);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(k.a)(B.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(k.a)(Object(D.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("footer",["height","inset"]),_.a).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return E(E({},B.a.options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return E(E({},B.a.options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(S.d)(t),left:Object(S.d)(this.computedLeft),right:Object(S.d)(this.computedRight),bottom:Object(S.d)(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){return t("footer",this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles}),this.$slots.default)}}),N=o(251),component=Object(m.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"mt-5"},[o("v-container",{staticClass:"px-0"},[o("v-row",t._l(t.categorys,(function(e,r){return o("v-col",{key:r},[o("strong",{staticClass:"d-block mb-5",domProps:{textContent:t._s(e.title)}}),t._v(" "),o("ul",t._l(e.items,(function(e,i){return o("li",{key:i,staticClass:"mb-3"},[e.nuxtLink?o("nuxt-link",{attrs:{to:e.url},domProps:{textContent:t._s(e.text)}}):o("a",{attrs:{href:e.url},domProps:{textContent:t._s(e.text)}})],1)})),0)])})),1),t._v(" "),o("v-divider",{staticClass:"mt-5 mb-5"}),t._v(" "),o("p",{staticClass:"subtitle-1"},[t._v("\n      Copyright © "+t._s((new Date).getFullYear())+" Discord.js Japan All rights reserved.\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VCol:w.a,VContainer:P.a,VDivider:$.a,VFooter:A,VRow:N.a})}}]);