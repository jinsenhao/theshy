(function(t){function n(n){for(var o,i,s=n[0],l=n[1],c=n[2],h=0,d=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(n);while(d.length)d.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,s=1;s<e.length;s++){var l=e[s];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},a=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0258":function(t,n,e){"use strict";var o=e("266e"),r=e.n(o);r.a},"034f":function(t,n,e){"use strict";var o=e("85ec"),r=e.n(o);r.a},"266e":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"},on:{click:t.click}},[t.bStarted?t._e():e("div",{attrs:{id:"desc"}},[e("div",{staticClass:"pp title"},[t._v("The Shy")]),e("div",{staticClass:"pp"},[t._v("😄大家将一个手指按到屏幕上任何位置, 系统随机挑选一个shy shy的Ta, 随机决定是谁喝酒、取外卖、洗碗等等")]),e("div",{staticClass:"nigeerhuo tab-icon"},[t._v("")])]),t._m(0),t._m(1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.bShowCountDown,expression:"bShowCountDown"}],ref:"countDownContainer",attrs:{id:"count-down-container"}},[t._v(" "+t._s(t.countDownIndex)+" ")]),t._l(t.balls,(function(t){return[e("Ball",{attrs:{color:t.color||"orange",x:t.x,y:t.y}})]})),t._l(t.ballsV2,(function(t,n){return[e("Ball2",{ref:"ball-"+n,refInFor:!0,attrs:{x:t.x,y:t.y,"main-color":t.color,zi:t.zi,ball:t}})]})),t.bEnd?e("button",{attrs:{id:"reload"},on:{click:function(n){return n.stopPropagation(),t.reload()}}},[t._v("再来一次")]):t._e()],2)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"info"}},[e("a",{attrs:{href:"https://github.com/AJLoveChina/theshy",target:"_blank"}},[t._v("open source link here")]),e("br"),e("span",{staticClass:"nigeerhuo"},[t._v("")]),t._v("Idea by LW Mao、HYY && Developed by "),e("a",{attrs:{href:"https://github.com/AJLoveChina",target:"_blank"}},[t._v("霸都丶傲天")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{staticClass:"loaders"},[e("div",{staticClass:"loader"},[e("div",{staticClass:"ball-pulse"},[e("div"),e("div"),e("div")])])])])}],i=(e("4160"),e("c975"),e("159b"),e("96cf"),e("89ba")),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loaders ball",style:"top:"+t.y+"px;left:"+t.x+"px;"},[e("div",{staticClass:"loader"},[e("div",{staticClass:"ball-scale-multiple",staticStyle:{background:"green"}},[e("div",{style:"background-color:"+t.color+";width:100px;height:100px;"}),e("div",{style:"background-color:"+t.color+";width:100px;height:100px;"}),e("div",{style:"background-color:"+t.color+";width:100px;height:100px;"})])])])},l=[],c=(e("a9e3"),{name:"Ball",props:{color:String,x:Number,y:Number}}),u=c,h=(e("66c0"),e("2877")),d=Object(h["a"])(u,s,l,!1,null,"8af058d4",null),f=d.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"ball",staticClass:"loaders ball",style:"top:"+t.y+"px;left:"+t.x+"px;"},[t._v(" "+t._s(t.zi)+" ")])},p=[];e("d3b7");function v(t){return new Promise((function(n,e){setTimeout((function(){n(t)}),t)}))}var m={name:"Ball",props:{x:Number,y:Number,mainColor:String,zi:String,ball:Object},data:function(){return{animationMS:50,min:60,max:80,step:1,baseFontSize:20}},mounted:function(){this.animate()},methods:{animate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.$refs.ball,n){t.next=4;break}return t.abrupt("break",22);case 4:if(e=n.getBoundingClientRect(),o=e.width,o>=this.max&&(this.step=-1),o<=this.min&&(this.step=1),o=this.step>0?Math.floor(1.05*o):Math.floor(.95*o),n.style.width="".concat(o,"px"),n.style.height="".concat(o,"px"),n.style.lineHeight="".concat(o,"px"),n.style.fontSize="".concat(this.max/o*this.baseFontSize,"px"),this.ball.bounceColor?(n.style.backgroundColor=this.ball.bounceColor,n.style.boxShadow="0 0 20px ".concat(this.ball.bounceColor)):(n.style.backgroundColor=this.mainColor,n.style.boxShadow="0 0 10px ".concat(this.mainColor)),!this.ball.bounceColor){t.next=18;break}return t.next=16,v(.4*this.animationMS);case 16:t.next=20;break;case 18:return t.next=20,v(this.animationMS);case 20:t.next=0;break;case 22:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},x=m,w=(e("0258"),Object(h["a"])(x,b,p,!1,null,"e33f0932",null)),g=w.exports,C={name:"app",components:{Ball:f,Ball2:g},data:function(){return{balls:[],ballsV2:[],ziList:["龍","钱","帅","鼎","雷","火","风","雨","侠","虎","羊","狗","猪"],usedZiList:[],colors:["#4285f4","#A7A7A7","#fbbc05","#769cdb","#45ad61"],usedColors:[],bStarted:!1,bShowCountDown:!1,bCountDownOver:null,countDownIndexInit:3,countDownIndex:3,countDownInterval:null,randomChooseIndex:0,defaultBounceColor:"#F46445",maxSupportUsers:12,changeMS:1e3,initChangeMS:1e3,minChangeMS:200,minChangeMSLastMS:3e3,changeMSX:0,sleepMS:40,bEnd:!1,intervalsWaitClear:[]}},created:function(){},mounted:function(){var t=document.createElement("style");t.innerHTML="#count-down-container{line-height:".concat(window.innerHeight,"px;}"),document.body.appendChild(t)},watch:{countDownIndex:function(t,n){t<=0&&(this.randomChoose(),this.modifyChangMS(),this.finalSelect())},bEnd:function(t,n){this.bEnd&&this.theshy()}},methods:{reload:function(){window.location.reload()},theshy:function(){var t=this.ballsV2[this.randomChooseIndex];this.ballsV2=[t],this.bounceBall(t,!0)},finalSelect:function(){var t=this,n=this.ballsV2.length;setTimeout((function(){t.bEnd=!0,t.clear()}),1e3*(1.2*n+n*Math.random()))},clear:function(){this.intervalsWaitClear.forEach((function(t){return clearInterval(t)}))},modifyChangMS:function(){var t=this,n=0,e=setInterval((function(){n+=50,n<=3e3?t.changeMS=-(t.initChangeMS-t.minChangeMS)/3e3*n+t.initChangeMS:n>3e3&&n<6e3||(t.changeMS+=5+10*Math.random())}),50);this.intervalsWaitClear.push(e)},addBall:function(t,n){this.balls.push({x:t,y:n,name:"x",color:"#ea4436"})},randomColor:function(){var t=0,n=50;while(1){var e=Math.floor(Math.random()*this.colors.length),o=this.colors[e];if(-1===this.usedColors.indexOf(o))return this.usedColors.push(o),o;if(t++>n)return o}},randomZI:function(){while(1){var t=Math.floor(Math.random()*this.ziList.length),n=this.ziList[t];if(-1===this.usedZiList.indexOf(n))return this.usedZiList.push(n),n}},addBallV2:function(t,n){var e=this.randomColor(),o=this.randomZI();this.ballsV2.push({x:t,y:n,color:e,zi:o})},countDown:function(){var t=this;this.countDownInterval||(this.bShowCountDown=!0,this.bCountDownOver=!1,this.countDownInterval=setInterval((function(){t.countDownIndex-=1,t.countDownIndex<=0&&(clearInterval(t.countDownInterval),t.bCountDownOver=!0,t.countDownInterval=null,t.bShowCountDown=!1)}),1e3))},click:function(t){if(!(this.ballsV2.length>this.maxSupportUsers)&&!0!==this.bCountDownOver){this.bStarted=!0,this.countDownIndex=this.countDownIndexInit;var n=t.clientX,e=t.clientY;this.addBallV2(n,e),this.countDown()}},bounceBall:function(t,n){t.bounceColor=n?this.defaultBounceColor:null},randomChoose:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.bEnd){t.next=3;break}return t.abrupt("break",14);case 3:return n=this.ballsV2[this.randomChooseIndex],this.bounceBall(n,!0),console.log("sleep ".concat(this.changeMS)),t.next=8,v(this.changeMS);case 8:if(!this.bEnd){t.next=10;break}return t.abrupt("break",14);case 10:this.randomChooseIndex=(this.randomChooseIndex+1)%this.ballsV2.length,this.bounceBall(n,!1),t.next=0;break;case 14:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mousedown:function(t){console.log("",t)},mouseup:function(t){console.log(t)}}},y=C,S=(e("034f"),Object(h["a"])(y,r,a,!1,null,null,null)),_=S.exports;e("7d31");o["a"].config.productionTip=!0,new o["a"]({render:function(t){return t(_)}}).$mount("#app")},"66c0":function(t,n,e){"use strict";var o=e("7187"),r=e.n(o);r.a},7187:function(t,n,e){},"7d31":function(t,n,e){},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.d8389561.js.map