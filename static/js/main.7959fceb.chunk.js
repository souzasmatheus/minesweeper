(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t){e.exports=function(e){return(t=function(e,t){var n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81];return e.map(function(e){return n.splice(e-1,1,t)}),n}(e,"mine")).map(function(e,n){return"mine"!==e?{symbol:function(e,t){for(var n=0,i=[-10,-9,-8,-1,1,8,9,10],r=0;r<i.length;r++)"mine"===t[e+i[r]]&&n++;return n}(n,t),id:n,isClicked:!1}:{symbol:"mine",id:n,isClicked:!1}});var t}},function(e,t){var n=function(e,t){for(var n=[],i=0;i<t.length;i++)e===t[i]&&n.push(t[i]);return 0===n.length},i=function(e,t){t.push(e)};e.exports=function(){for(var e,t,r,a,l=[];l.length<10;){var o=(a=81,Math.floor(Math.random()*a)+1);r=i,n(e=o,t=l)&&r(e,t)}return l}},,,,function(e,t){e.exports={SORT_SQUARES:"SORT_SQUARES",SHOW_VALUE:"SHOW_VALUE",FINISH_GAME:"FINISH_GAME"}},,function(e,t,n){var i=n(30),r=i.squares,a=i.finish,l=n(31),o=l.createStore,c=l.combineReducers,u=l.applyMiddleware,s={finish:!1,squares:n(1)(n(2)())},d=function(e){return function(t){return function(n){console.groupCollapsed("dispatching",n.type),console.log("prev state",e.getState()),console.log("action",n),t(n),console.log("next state",e.getState()),console.groupEnd()}}};e.exports=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return u(d)(o)(c({squares:r,finish:a}),s)}},,,function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t),n.d(t,"square",function(){return a}),n.d(t,"squares",function(){return l}),n.d(t,"finish",function(){return o});var i=n(10),r=n(6),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SHOW_VALUE:return e.id!==t.id?e:Object(i.a)({},e,{isClicked:!0});default:return e}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SORT_SQUARES:return t.squares;case r.SHOW_VALUE:return e.map(function(e){return a(e,t)});default:return e}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FINISH_GAME:return t.finish;default:return e}}},,,function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(7),l=n.n(a),o=(n(16),n(18),n(20),n(6)),c=function(e){return{type:o.SHOW_VALUE,id:e}},u=function(){return 0!==arguments.length?{type:o.FINISH_GAME,finish:!1}:{type:o.FINISH_GAME,finish:!0}},s=(n(22),function(e){var t=e.store,n=e.symbol,i=e.isClicked,a=e.id;return!1===i&&"mine"===n?r.a.createElement("td",{onClick:function(){t.dispatch(c(a)),setTimeout(function(){return t.dispatch(u())},700)}}):!0===i&&"mine"===n?r.a.createElement("td",null,r.a.createElement("i",{className:"fas fa-bomb"})):!0===i?r.a.createElement("td",null,n):r.a.createElement("td",{onClick:function(){return t.dispatch(c(a))}})}),d=n(1),m=n.n(d),f=n(2),E=n.n(f),p=(n(24),function(e){var t=e.store;return r.a.createElement("p",{onClick:function(){var e;t.dispatch((e=m()(E()()),{type:o.SORT_SQUARES,squares:e})),t.dispatch(u(1))}},r.a.createElement("i",{className:"fas fa-undo"}))}),h=(n(26),function(){return r.a.createElement("div",{className:"modal"},r.a.createElement("h1",null,"Booom!!!"))}),y=(n(28),function(){return r.a.createElement("div",{className:"about-me"},r.a.createElement("p",null,"I am Matheus Souza and this is a portfolio project I have developed using Redux. "),r.a.createElement("p",null,"Check out my other projects on Github ",r.a.createElement("a",{href:"https://github.com/souzasmatheus/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github"})),"!"))}),k=function(e){var t=e.store,n=t.getState(),i=n.squares;return!1===n.finish?r.a.createElement("div",{className:"game"},r.a.createElement(p,{store:t}),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,i.map(function(e){return e.id<9?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>8&&e.id<18?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>17&&e.id<27?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>26&&e.id<36?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>35&&e.id<45?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>44&&e.id<54?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>53&&e.id<63?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>62&&e.id<72?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})),r.a.createElement("tr",null,i.map(function(e){return e.id>71&&e.id<81?r.a.createElement(s,{key:e.id,id:e.id,symbol:e.symbol,store:t,isClicked:e.isClicked}):null})))),r.a.createElement(y,null)):r.a.createElement("div",{className:"game"},r.a.createElement(p,{store:t}),r.a.createElement(h,{store:t}),r.a.createElement(y,null))},v=function(e){var t=e.store;return r.a.createElement("div",{className:"App"},r.a.createElement(k,{store:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(8),g=n.n(b)()(!0),C=function(){return l.a.render(r.a.createElement(v,{store:g}),document.getElementById("root"))};g.subscribe(C),C(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.7959fceb.chunk.js.map