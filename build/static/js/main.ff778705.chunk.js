(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o(1),s=o.n(n),a=o(7),i=o.n(a),l=(o(14),o(3)),d=(o(15),o(8)),r=function(t){var e=t.setInputText,o=t.todos,n=t.setTodos,s=t.inputText,a=t.setStatus;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:s,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(d.a)(o),[{text:s,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"ALL"}),Object(c.jsx)("option",{value:"completed",children:"Completed"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,n=t.todos,s=t.setTodos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(c.jsx)("button",{onClick:function(){s(n.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){s(n.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,o=t.setTodos,n=t.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(c.jsx)(j,{setTodos:o,todos:e,todo:t,text:t.text},t.id)}))})})};var f=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),o=e[0],s=e[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(n.useState)("all"),f=Object(l.a)(j,2),m=f[0],O=f[1],p=Object(n.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){g(),N()}),[d,m]);var g=function(){switch(m){case"completed":v(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}},N=function(){localStorage.setItem("todos",JSON.stringify(d))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"To-Do List"})}),Object(c.jsx)(r,{inputText:o,todos:d,setTodos:u,setInputText:s,setStatus:O}),Object(c.jsx)(b,{filteredTodos:h,setTodos:u,todos:d})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.ff778705.chunk.js.map