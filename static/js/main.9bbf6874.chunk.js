(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),s=(n(13),n(7)),i=n(3),l=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useRef)(null);return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=r.trim();""!==n&&(t(n),s(""))}},o.a.createElement("input",{value:r,ref:i,className:"form__input",placeholder:"Anything to do?",onChange:function(e){var t=e.target;return s(t.value)}}),o.a.createElement("button",{className:"form__button",onClick:function(){i.current.focus()}},"Add task"))}),m=(n(15),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"tasksList"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"tasksList__item ".concat(e.done&&n?"tasksList__item--hidden":"")},o.a.createElement("button",{className:"tasksList__button ".concat(e.done?"tasksList__button--checked":""),onClick:function(){return c(e.id)}}),o.a.createElement("span",{className:"tasksList__content ".concat(e.done?"tasksList__content--done":"")}," ",e.content),o.a.createElement("button",{className:"tasksList__button tasksList__button--remove",onClick:function(){return a(e.id)}}))})))}),d=(n(16),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setAllDone;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:a,className:"buttons__button"},n?"Show":"Hide"," Done"),o.a.createElement("button",{className:"buttons__button",disabled:t.every((function(e){return e.done})),onClick:c},"All tasks done!")))}),f=(n(17),function(e){var t=e.title,n=e.body,a=e.extraHeaderContent;return o.a.createElement("section",{className:"section"},o.a.createElement("header",{className:"section__header"},o.a.createElement("h2",{className:"section__title"},t),a),o.a.createElement("div",{className:"section__body"},n))}),k=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))},b=(n(18),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)}),E=function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]};var _=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(E),_=Object(l.a)(r,2),h=_[0],v=_[1];return Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(h))}),[h]),o.a.createElement(b,null,o.a.createElement(k,{title:"Tasks List"}),o.a.createElement(f,{title:"Add new task",body:o.a.createElement(u,{addNewTask:function(e){v((function(t){return[].concat(Object(s.a)(t),[{content:e,done:!1,id:0===t.length?1:t[t.length-1].id+1}])}))}})}),o.a.createElement(f,{title:"Tasks List",body:o.a.createElement(m,{tasks:h,hideDone:n,removeTask:function(e){v((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){v((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t}))}))}}),extraHeaderContent:o.a.createElement(d,{tasks:h,hideDone:n,toggleHideDone:function(){c((function(e){return!e}))},setAllDone:function(){v((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!0})}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9bbf6874.chunk.js.map