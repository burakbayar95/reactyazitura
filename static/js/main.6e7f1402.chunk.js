(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(t,e,a){t.exports=a.p+"static/media/1-lira-tura.7c42669a.png"},function(t,e,a){t.exports=a.p+"static/media/1-lira-yazi.9b70882e.png"},,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(2),r=a.n(s),o=(a(14),a(15),a(3)),c=a(4),l=a(8),u=a(7),m=(a(16),a(5)),d=a.n(m),p=a(6),f=a.n(p),h=function(t){return i.a.createElement("div",{className:"Coin-container"},i.a.createElement("div",{className:"Coin ".concat(t.flipping?"Coin-rotate":"")},i.a.createElement("img",{src:d.a,className:"yazi"===t.side?"Coin-back":"Coin-front"}),i.a.createElement("img",{src:f.a,className:"yazi"===t.side?"Coin-front":"Coin-back"})))},g=(a(17),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleClick=function(){var t=["yazi","tura"],e=Math.floor(Math.random()*t.length);n.setState({donus:n.state.donus+1});var a=t[e];"yazi"===a&&n.setState({yazisayisi:n.state.yazisayisi+1}),"tura"===a&&n.setState({turasayisi:n.state.turasayisi+1}),n.setState({flipping:!0,side:a}),setTimeout(function(){return n.setState({flipping:!1})},1e3)},n.state={side:"",flipping:!1,donus:0,yazisayisi:0,turasayisi:0},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"CoinFlipper"},i.a.createElement("h1",null,"Yaz\u0131 m\u0131 Tura m\u0131?"),i.a.createElement(h,{side:this.state.side,flipping:this.state.flipping}),i.a.createElement("button",{onClick:this.handleClick},"Hadi At.. Bol \u015eans !"),i.a.createElement("p",null,"Toplam ",i.a.createElement("strong",null," ",this.state.donus," ")," at\u0131\u015ftan",i.a.createElement("strong",null," ",this.state.turasayisi," "),"tanesi ",i.a.createElement("span",{className:"tura"===this.state.side?"glow":""},"Tura"),i.a.createElement("strong",null," ",this.state.yazisayisi,"  ")," tanesi ",i.a.createElement("span",{className:"yazi"===this.state.side?"glow":""},"Yaz\u0131")," geldi."))}}]),a}(n.Component));var y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.6e7f1402.chunk.js.map