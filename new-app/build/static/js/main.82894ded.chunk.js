(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(16),a(2)),s=a.n(i),l=a(5),h=a(6),u=a(7),d=a(1),p=a(9),m=a(10),w=a(8),g=a.n(w),f=(a(18),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={word1:"",word2:""},n.word1Change=n.word1Change.bind(Object(d.a)(n)),n.word2Change=n.word2Change.bind(Object(d.a)(n)),n.checkAnagram=n.checkAnagram.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"word1Change",value:function(e){this.setState({word1:e.target.value})}},{key:"word2Change",value:function(e){this.setState({word2:e.target.value})}},{key:"checkAnagram",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word1:this.state.word1,word2:this.state.word2})},e.next=3,fetch("/api",t);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),r.a.createElement("label",null,"Word 1",r.a.createElement("input",{type:"text",value:this.state.word1,onChange:this.word1Change})),r.a.createElement("label",null,"Word 2",r.a.createElement("input",{type:"text",value:this.state.word2,onChange:this.word2Change})),r.a.createElement("button",{onClick:this.checkAnagram}," Anagram ")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.82894ded.chunk.js.map