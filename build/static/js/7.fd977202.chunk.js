(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[7],{52:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return O})),n.d(t,"b",(function(){return w})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return I}));var r=n(28),c=n(16),a=n(50),s=n.n(a),o=n(51),u=n(22);function i(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.empty);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").limit(10).get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})).filter((function(e){return e.userId!==t&&!n.includes(e.userId)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(s.a.mark((function e(t,n,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.b.firestore().collection("users").doc(t).update({following:r?u.a.arrayRemove(n):u.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t,n){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(s.a.mark((function e(t,n,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.b.firestore().collection("users").doc(t).update({followers:r?u.a.arrayRemove(n):u.a.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(s.a.mark((function e(t,n){var r,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("userId","in",n).get();case 2:return r=e.sent,a=r.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(a.map(function(){var e=Object(o.a)(s.a.mark((function e(n){var r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,n.likes.includes(t)&&(r=!0),e.next=4,j(n.userId);case 4:return a=e.sent,o=a[0].username,e.abrupt("return",Object(c.a)(Object(c.a)({username:o},n),{},{userLikedPhoto:r}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(s.a.mark((function e(t){var n,a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return n=e.sent,a=Object(r.a)(n,1),o=a[0],e.next=7,u.b.firestore().collection("photos").where("userId","==",o.userId).get();case 7:return i=e.sent,e.abrupt("return",i.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(s.a.mark((function e(t,n){var a,o,i,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).where("following","array-contains",n).get();case 2:return a=e.sent,o=a.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),i=Object(r.a)(o,1),l=i[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,n,r,c){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(s.a.mark((function e(t,n,r,c,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n,c,t);case 2:return e.next=4,O(r,a,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(50),c=n.n(r),a=n(51),s=n(28),o=n(1),u=n(52);function i(e){var t=Object(o.useState)({}),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(o.useEffect)((function(){e&&function(){var t=Object(a.a)(c.a.mark((function t(){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.d)(e);case 2:n=t.sent,r=Object(s.a)(n,1),a=r[0],i(a||{});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),{user:r}}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),c=n(18),a=n(19),s=n(29),o=n(13),u=n(54),i=n(4);function l(){var e=Object(r.useContext)(s.a).user,t=Object(u.a)(null===e||void 0===e?void 0:e.uid).user,n=Object(r.useContext)(a.a).firebase;return Object(i.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:Object(i.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(i.jsxs)("div",{className:"flex justify-between h-full",children:[Object(i.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:Object(i.jsx)("h1",{className:"flex justify-center w-full",children:Object(i.jsx)(c.b,{to:o.a,"aria-label":"Instagram Logo",children:Object(i.jsx)("img",{src:"/images/logo.png",alt:"Instragram",className:"mt-2 w-6/12"})})})}),Object(i.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:(null===t||void 0===t?void 0:t.username)?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.b,{to:o.a,"aria-label":"Dashboard",children:Object(i.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),Object(i.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){n.auth().signOut()},onKeyDown:function(e){"Enter"===e.key&&n.auth().signOut()},children:Object(i.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(i.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(i.jsx)(c.b,{to:"/p/".concat(null===t||void 0===t?void 0:t.username),children:Object(i.jsx)("img",{className:"rounded-full h-8 w-8 flex",src:"/images/avatars/".concat(null===t||void 0===t?void 0:t.username,".jpg"),alt:"".concat(null===t||void 0===t?void 0:t.username," profile")})})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.b,{to:o.b,children:Object(i.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),Object(i.jsx)(c.b,{to:o.e,children:Object(i.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}},69:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(50),c=n.n(r),a=n(51),s=n(28),o=n(1),u=n(5),i=n(52),l=n(13),d=n(55),f=n(16),j=n(56),b=n.n(j),p=n(54),h=n(29),m=n(4);function x(e){var t=e.photosCount,n=e.followerCount,r=e.setFollowerCount,u=e.profile,l=u.docId,d=u.userId,f=u.fullName,j=u.following,x=u.followers,O=u.username,v=Object(o.useContext)(h.a).user,w=Object(p.a)(null===v||void 0===v?void 0:v.uid).user,g=Object(o.useState)(!1),y=Object(s.a)(g,2),N=y[0],k=y[1],C=(null===w||void 0===w?void 0:w.username)&&(null===w||void 0===w?void 0:w.username)!==O,I=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k((function(e){return!e})),r({followerCount:N?n-1:n+1}),e.next=4,Object(i.h)(N,w.docId,l,d,w.userId);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.g)(w.username,d);case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===w||void 0===w?void 0:w.username)&&d&&e()}),[null===w||void 0===w?void 0:w.username,d]),Object(m.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg",children:[Object(m.jsx)("div",{className:"container flex justify-center items-center",children:O?Object(m.jsx)("img",{className:"rounded-full h-40 w-40 flex",alt:"".concat(O," profile"),src:"/images/avatars/".concat(O,".jpg")}):Object(m.jsx)("img",{className:"rounded-full h-40 w-40 flex",alt:"Kevin Alcivar's profile",src:"/images/avatars/k1.jpg"})}),Object(m.jsxs)("div",{className:"flex items-center justify-center flex-col col-span-2",children:[Object(m.jsxs)("div",{className:"container flex items-center",children:[Object(m.jsxs)("p",{className:"text-2xl mr-4",children:[" ",O," "]}),C&&Object(m.jsx)("button",{className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",type:"button",onClick:I,children:N?"Unfollow":"Follow"})]}),Object(m.jsx)("div",{className:"container flex mt-4",children:x&&j?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{className:"mr-10",children:[Object(m.jsx)("span",{className:"font-bold",children:t})," photos"]}),Object(m.jsxs)("p",{className:"mr-10",children:[Object(m.jsx)("span",{className:"font-bold",children:n})," ",1===n?"follower":"followers"]}),Object(m.jsxs)("p",{className:"mr-10",children:[Object(m.jsx)("span",{className:"font-bold",children:j.length})," following"]})]}):Object(m.jsx)(b.a,{count:1,width:677,height:24})}),Object(m.jsx)("div",{className:"container mt-4",children:Object(m.jsx)("p",{className:"font-medium",children:f||Object(m.jsx)(b.a,{count:1,height:24})})})]})]})}function O(e){var t=e.photos;return Object(m.jsxs)("div",{className:"h-16 border-t border-gray-primary mt-12 pt-4",children:[Object(m.jsx)("div",{className:"grid grid-cols-3 gap-8 mt-4 mb-12",children:t?t.length>0?t.map((function(e){return Object(m.jsxs)("div",{className:"relative group mb-1",children:[Object(m.jsx)("img",{src:e.imageSrc,alt:e.caption}),Object(m.jsxs)("div",{className:"absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden",children:[Object(m.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),e.likes.length]}),Object(m.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.comments.length]})]})]},e.docId)})):null:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b.a,{count:12,width:320,height:400})})}),!t||0===t.length&&Object(m.jsx)("p",{className:"text-center text-2xl",children:"No Posts Yet"})]})}function v(e){var t=e.user,n=Object(o.useReducer)((function(e,t){return Object(f.a)(Object(f.a)({},e),t)}),{profile:{},photosCollection:[],followerCount:0}),r=Object(s.a)(n,2),u=r[0],l=u.profile,d=u.photosCollection,j=u.followerCount,b=r[1];return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)(t.username);case 2:n=e.sent,b({profile:t,photosCollection:n,followerCount:t.followers.length});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.username]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{photosCount:d?d.length:0,profile:l,followerCount:j,setFollowerCount:b}),Object(m.jsx)(O,{photos:d})]})}function w(){var e=Object(u.h)().username,t=Object(o.useState)(null),n=Object(s.a)(t,2),r=n[0],f=n[1],j=Object(u.g)();return Object(o.useEffect)((function(){function t(){return(t=Object(a.a)(c.a.mark((function t(){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.e)(e);case 2:n=t.sent,r=Object(s.a)(n,1),(null===(a=r[0])||void 0===a?void 0:a.userId)?f(a):j.push(l.c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,j]),(null===r||void 0===r?void 0:r.username)?Object(m.jsxs)("div",{className:"bg-gray-background",children:[Object(m.jsx)(d.a,{}),Object(m.jsx)("div",{className:"mx-auto max-w-screen-lg",children:Object(m.jsx)(v,{user:r})})]}):null}}}]);
//# sourceMappingURL=7.fd977202.chunk.js.map