(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return o}));var r="/",a="/login",c="/sign-up",u="/p/:username",o="/not-found"},19:function(e,t,n){"use strict";var r=n(1),a=Object(r.createContext)(null);t.a=a},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(27),a=(n(49),n(45),r.a.initializeApp({apiKey:"AIzaSyAcJzOoEX_kety8dkSwTI0HHZ2AwpnRZxo",authDomain:"instagram-clone-7057b.firebaseapp.com",projectId:"instagram-clone-7057b",storageBucket:"instagram-clone-7057b.appspot.com",messagingSenderId:"942306765196",appId:"1:942306765196:web:7b25726254a12e81c60ea9"})),c=r.a.firestore.FieldValue},29:function(e,t,n){"use strict";var r=n(1),a=Object(r.createContext)(null);t.a=a},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(32),u=n.n(c),o=n(18),i=n(5),s=n(13),l=n(29),b=n(28),j=n(19),d=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useContext)(j.a).firebase;return Object(r.useEffect)((function(){var e=c.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),a(e)):(localStorage.removeItem("authUser"),a(null))}));return function(){return e()}}),[c]),{user:n}},h=n(16),O=n(21),f=n(4);function p(e){var t=e.user,n=e.children,r=Object(O.a)(e,["user","children"]);return Object(f.jsx)(i.b,Object(h.a)(Object(h.a)({},r),{},{render:function(e){var r=e.location;return t?a.a.cloneElement(n,{user:t}):t?null:Object(f.jsx)(i.a,{to:{pathname:s.b,state:{from:r}}})}}))}function g(e){var t=e.user,n=e.loggedInPath,r=e.children,a=Object(O.a)(e,["user","loggedInPath","children"]);return Object(f.jsx)(i.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){var a=e.location;return t?t?Object(f.jsx)(i.a,{to:{pathname:n,state:{from:a}}}):null:r}}))}var m=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,64))})),x=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,65))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,68))})),I=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,69))})),S=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,66))}));var y=function(){var e=d().user;return Object(f.jsx)(l.a.Provider,{value:{user:e},children:Object(f.jsx)(o.a,{children:Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)("p",{children:"Loading..."}),children:Object(f.jsxs)(i.d,{children:[Object(f.jsx)(g,{user:e,loggedInPath:s.a,path:s.b,children:Object(f.jsx)(m,{})}),Object(f.jsx)(g,{user:e,loggedInPath:s.a,path:s.e,children:Object(f.jsx)(x,{})}),Object(f.jsx)(i.b,{path:s.d,component:I}),Object(f.jsx)(p,{user:e,path:s.a,exact:!0,children:Object(f.jsx)(v,{})}),Object(f.jsx)(i.b,{path:"*",exact:!0,component:S})]})})})})},z=n(22);n(47);u.a.render(Object(f.jsx)(j.a.Provider,{value:{firebase:z.b,FieldValue:z.a},children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[48,2,3]]]);
//# sourceMappingURL=main.e4a90dcf.chunk.js.map