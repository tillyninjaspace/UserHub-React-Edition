(this.webpackJsonpuser_hub_react=this.webpackJsonpuser_hub_react||[]).push([[0],{35:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var n=r(9),c=r(1),s=r(0),a=r(28),u=r.n(a),o=r(12),i=r(2);r(35);var j=function(e){var t=e.currentUser,r=e.setCurrentUser,a=e.userList,u=Object(s.useState)(),i=Object(n.a)(u,2),j=i[0],l=i[1];Object(s.useEffect)((function(){l(a[0])}),[a]);return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Welcome to UserHub"}),Object(c.jsx)("form",{className:"user-select",onSubmit:function(e){e.preventDefault()},children:t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.b,{to:"/posts",activeClassName:"current",children:"POSTS"}),Object(c.jsx)(o.b,{to:"/todos",activeClassName:"current",children:"TODOS"}),Object(c.jsxs)("button",{onClick:function(e){l(a[0]),localStorage.removeItem("currentUser"),r(null)},children:["LOG OUT, ",t.username]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("select",{onChange:function(e){var t=e.target.value,r=a.find((function(e){return e.id==t}));l(r)},children:a.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.username},e.id)}))}),Object(c.jsx)("button",{onClick:function(e){var t;t=j,localStorage.setItem("currentUser",JSON.stringify(t)),r(j)},children:"LOG IN"})]})})]})},l=(r(41),function(e){var t=e.currentUser,r=e.userPosts;return Object(c.jsxs)("div",{className:"user-posts",children:[Object(c.jsxs)("h2",{children:["Posts By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,n=e.body;return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("h3",{children:r}),Object(c.jsx)("p",{children:n})]},t)}))]})}),h=(r(42),function(e){var t=e.currentUser,r=e.userTodos;return Object(c.jsxs)("div",{className:"user-todos",children:[Object(c.jsxs)("h2",{children:["Todos By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,n=e.completed;return Object(c.jsx)("div",{className:"todo",children:Object(c.jsx)("h3",{style:{textDecoration:n?"line-through":"none"},children:r})},t)}))]})}),b=r(10),d=r.n(b),O=r(13),p=r(14),f=r.n(p),x="https://jsonplace-univclone.herokuapp.com";function v(){return(v=Object(O.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return(m=Object(O.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/posts"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(){return(g=Object(O.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/todos"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var y=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),r=t[0],a=t[1],u=Object(s.useState)(JSON.parse(localStorage.getItem("currentUser"))),b=Object(n.a)(u,2),d=b[0],O=b[1],p=Object(s.useState)([]),f=Object(n.a)(p,2),x=f[0],y=f[1],S=Object(s.useState)([]),U=Object(n.a)(S,2),w=U[0],N=U[1];return Object(s.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){a(e)})).catch((function(e){console.error(e)}))}),[]),Object(s.useEffect)((function(){if(!d)return y([]),void N([]);(function(e){return m.apply(this,arguments)})(d.id).then((function(e){y(e)})).catch((function(e){console.error(e)})),function(e){return g.apply(this,arguments)}(d.id).then((function(e){N(e)})).catch((function(e){console.error(e)}))}),[d]),Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{id:"App",children:[Object(c.jsx)(j,{userList:r,currentUser:d,setCurrentUser:O}),d?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{path:"/posts",children:Object(c.jsx)(l,{userPosts:x,currentUser:d})}),Object(c.jsx)(i.b,{path:"/todos",children:Object(c.jsx)(h,{userTodos:w,currentUser:d})}),Object(c.jsx)(i.b,{exact:!0,path:"/",children:Object(c.jsxs)("h2",{style:{padding:".5em"},children:["Welcome, ",d.username,"!"]})}),Object(c.jsx)(i.a,{to:"/"})]})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{exact:!0,path:"/",children:Object(c.jsx)("h2",{style:{padding:".5em"},children:"Please log in, above."})}),Object(c.jsx)(i.a,{to:"/"})]})})]})})};u.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.52dba8d4.chunk.js.map