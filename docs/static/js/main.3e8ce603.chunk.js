(this["webpackJsonpvictors-letters"]=this["webpackJsonpvictors-letters"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);t(5),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(3),i=t(0),c=t(1),s=function(){var e=i.useState(""),n=Object(o.a)(e,2),t=n[0],s=n[1],r=i.useState(window.speechSynthesis.getVoices()),a=Object(o.a)(r,2),u=a[0],h=a[1],l=i.useMemo((function(){return function(e){return e.sort((function(e,n){return e.localService!==n.localService?!0!==e.localService?1:-1:0})).sort((function(e,n){return e.lang!==n.lang?"de-DE"!==e.lang?1:-1:0})).reduce((function(e,n){return"de-DE"===n.lang?n:e}),e[0])}(u)}),[u]);window.speechSynthesis.onvoiceschanged=function(){return h((function(){return window.speechSynthesis.getVoices()}))};return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("input",{type:"text",name:"letter",value:t,onChange:function(e){var n=e.target.value.split(" ").slice(-1).join("");s(n),function(e){var n=new SpeechSynthesisUtterance(e);n.voice=l,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}(n)},style:{width:"100vw",height:"100vh",fontSize:"100vh",textAlign:"center"}})})},r=t(4);t.n(r).a.render(Object(c.jsx)(s,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.3e8ce603.chunk.js.map