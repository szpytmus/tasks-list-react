(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(11),i=t.n(a),c=t(1),u=t(2);function l(){var n=Object(u.a)(["\n\nhtml{\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  background: ",";\n  font-size: 16px;\n  padding: 10px;\n}\n\n"]);return l=function(){return n},n}var d=Object(c.b)(l(),(function(n){return n.theme.color.gallery})),s=t(3);function f(){var n=Object(u.a)(["\n    height: 50px;\n    font-size: 20px;\n    background-color: ",";\n    color: ",";\n    border: none;\n    padding: 15px;\n    transition: 2s;\n\n    @media (max-width: ","px) {\n        flex-grow: 1;\n    }\n\n    &:hover{\n    background-color: hsl(180, 100%, 45%);\n    transform: scale(1.2);\n    }\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\n    height: 50px;\n    border: 3px solid #eee;\n    padding-left: 10px;\n    margin-right: 20px;\n\n    @media (max-width: ","px) {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n    }\n\n"]);return m=function(){return n},n}function g(){var n=Object(u.a)(["\n    margin: 20px;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap:20px;  \n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n\n"]);return g=function(){return n},n}var b=c.d.form(g(),(function(n){return n.theme.breakpoint.mobileMax})),p=c.d.input(m(),(function(n){return n.theme.breakpoint.mobileMax})),h=c.d.button(f(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),x=function(n){var e=n.addNewTask,t=Object(r.useState)(""),a=Object(s.a)(t,2),i=a[0],c=a[1],u=Object(r.useRef)(null),l=function(){u.current.focus()};return o.a.createElement(b,{onSubmit:function(n){n.preventDefault();var t=i.trim();""!==t&&(e(t),c(""),l())}},o.a.createElement(p,{value:i,ref:u,placeholder:"Anything to do?",onChange:function(n){var e=n.target;return c(e.value)}}),o.a.createElement(h,{onClick:l},"Add task"))};function v(){var n=Object(u.a)(["\n        background: ",";\n        &:hover{\n        filter:brightness(120%);\n        }\n    "]);return v=function(){return n},n}function k(){var n=Object(u.a)(["\n        background: ",";\n        &:hover{\n        filter:brightness(120%);\n        }\n    "]);return k=function(){return n},n}function O(){var n=Object(u.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n"]);return O=function(){return n},n}function j(){var n=Object(u.a)(["\n        text-decoration: line-through;\n    "]);return j=function(){return n},n}function w(){var n=Object(u.a)(["\n    flex-grow: 1;\n    margin: 0 10px; \n\n    ","\n"]);return w=function(){return n},n}function E(){var n=Object(u.a)(["\n        display: none;\n    "]);return E=function(){return n},n}function y(){var n=Object(u.a)(["\n    border-bottom: 3px solid ",";\n    display:grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap:10px;\n    align-items:center;\n    padding:10px;\n    border-bottom: 1px solid ",";\n    \n\n    ","\n\n"]);return y=function(){return n},n}function D(){var n=Object(u.a)(["\n    list-style-type: none;\n    padding:10px;\n    margin: 0;\n    margin-top:10px;\n\n"]);return D=function(){return n},n}var T=c.d.ul(D()),S=c.d.li(y(),(function(n){return n.theme.color.gallery}),(function(n){return n.theme.color.alto}),(function(n){return n.hidden&&Object(c.c)(E())})),A=c.d.span(w(),(function(n){return n.done&&Object(c.c)(j())})),C=c.d.button(O(),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(c.c)(k(),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(c.c)(v(),(function(n){return n.theme.color.crimson}))})),N=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,a=n.toggleTaskDone;return o.a.createElement(T,null,e.map((function(n){return o.a.createElement(S,{key:n.id,hidden:n.done&&t},o.a.createElement(C,{toggleDone:!0,onClick:function(){return a(n.id)}},n.done?"\u2714":""),o.a.createElement(A,{done:n.done}," ",n.content),o.a.createElement(C,{remove:!0,onClick:function(){return r(n.id)}},"\ud83d\uddd1"))})))};function z(){var n=Object(u.a)(["\n    background:transparent;\n    color: ",";\n    border:none;\n    margin: 0 0 0 20px;\n    transition: color 0.3s;\n    padding: 15px;\n\n    &:hover{\n    transform:scale(1.1);\n    transition: 1s;\n    background-color: hsl(180, 100%, 45%);\n    color: ",";\n    border: none;  \n    }\n\n    &:disabled{\n    background:transparent;\n    color: hsl(180, 1%, 75%);\n    border:none;\n    margin: 0 0 0 20px;\n    transition: color 0.3s; \n    }\n"]);return z=function(){return n},n}function H(){var n=Object(u.a)(["\n    display:flex;\n    flex-wrap:wrap;\n"]);return H=function(){return n},n}var M=c.d.div(H()),J=c.d.button(z(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white})),I=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,a=n.setAllDone;return o.a.createElement(M,null,e.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(J,{onClick:r},t?"Show":"Hide"," Done"),o.a.createElement(J,{disabled:e.every((function(n){return n.done})),onClick:a},"All tasks done!")))};function L(){var n=Object(u.a)(["\n     padding:20px;\n"]);return L=function(){return n},n}function B(){var n=Object(u.a)(["\n    font-size:20px;\n    margin-top:10px;\n    margin-bottom:10px;\n"]);return B=function(){return n},n}function G(){var n=Object(u.a)(["\n    border-bottom:1px solid #ddd;\n    display:grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items:center;\n    padding: 30px;\n    margin-top:10px;\n"]);return G=function(){return n},n}function W(){var n=Object(u.a)(["\n    margin: 10px 0;\n    background: white;\n    box-shadow: 0 0 5px #ddd;\n"]);return W=function(){return n},n}var F=c.d.section(W()),R=c.d.header(G()),$=c.d.h2(B()),q=c.d.div(L()),K=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return o.a.createElement(F,null,o.a.createElement(R,null,o.a.createElement($,null,e),r),o.a.createElement(q,null,t))},P=function(n){var e=n.title;return o.a.createElement("header",null,o.a.createElement("h1",null,e))};function Q(){var n=Object(u.a)(["\n    width: 1000px;\n    max-width: 100%;\n    margin: 60px auto 0;\n    padding: 20px;\n"]);return Q=function(){return n},n}var U=c.d.main(Q()),V=function(n){var e=n.children;return o.a.createElement(U,null,e)},X=t(15),Y=t(5),Z=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]};var _=function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],a=e[1],i=function(){var n=Object(r.useState)(Z),e=Object(s.a)(n,2),t=e[0],o=e[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]);return{tasks:t,addNewTask:function(n){o((function(e){return[].concat(Object(X.a)(e),[{content:n,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))},setAllDone:function(){o((function(n){return n.map((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{done:!0})}))}))},toggleTaskDone:function(n){o((function(e){return e.map((function(e){return e.id===n?Object(Y.a)(Object(Y.a)({},e),{},{done:!e.done}):e}))}))},removeTask:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))}}}(),c=i.tasks,u=i.addNewTask,l=i.setAllDone,d=i.toggleTaskDone,f=i.removeTask;return o.a.createElement(V,null,o.a.createElement(P,{title:"Tasks List"}),o.a.createElement(K,{title:"Add new task",body:o.a.createElement(x,{addNewTask:u})}),o.a.createElement(K,{title:"Tasks List",body:o.a.createElement(N,{tasks:c,hideDone:t,removeTask:f,toggleTaskDone:d}),extraHeaderContent:o.a.createElement(I,{tasks:c,hideDone:t,toggleHideDone:function(){a((function(n){return!n}))},setAllDone:l})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{theme:{color:{black:"#000",silver:"#ccc",alto:"#ddd",gallery:"#eee",white:"#fff",teal:"#008080",crimson:"#db143c",forestGreen:"#228c22"},breakpoint:{mobileMax:767}}},o.a.createElement(d,null),o.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d0798355.chunk.js.map