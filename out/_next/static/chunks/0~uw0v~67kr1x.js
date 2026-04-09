(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5922,e=>{"use strict";e.i(68601),e.i(75705),e.s([])},16421,e=>{"use strict";let t,r;var a,s=e.i(75705);let i={data:""},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,n=(e,t)=>{let r="",a="",s="";for(let i in e){let d=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+d+";":a+="f"==i[1]?n(d,i):i+"{"+n(d,"k"==i[1]?"":t)+"}":"object"==typeof d?a+=n(d,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=d&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=n.p?n.p(i,d):i+":"+d+";")}return r+(t&&s?t+"{"+s+"}":s)+a},c={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e};function x(e){let t,r,a=this||{},s=e.call?e(a.p):e;return((e,t,r,a,s)=>{var i;let x=m(e),p=c[x]||(c[x]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(x));if(!c[p]){let t=x!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(o,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);c[p]=n(s?{["@keyframes "+p]:t}:t,r?"":"."+p)}let g=r&&c.g?c.g:null;return r&&(c.g=c[p]),i=c[p],g?t.data=t.data.replace(g,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),p})(s.unshift?s.raw?(t=[].slice.call(arguments,1),r=a.p,s.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":n(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(a.target),a.g,a.o,a.k)}x.bind({g:1});let p,g,u,h=x.bind({k:1});function y(e,t){let r=this||{};return function(){let a=arguments;function s(i,d){let o=Object.assign({},i),l=o.className||s.className;r.p=Object.assign({theme:g&&g()},o),r.o=/ *go\d+/.test(l),o.className=x.apply(r,a)+(l?" "+l:""),t&&(o.ref=d);let n=e;return e[0]&&(n=o.as||e,delete o.as),u&&n[0]&&u(o),p(n,o)}return t?t(s):s}}var b=(e,t)=>"function"==typeof e?e(t):e,f=(t=0,()=>(++t).toString()),j="default",w=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},v=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},N={},$=(e,t=j)=>{N[t]=w(N[t]||k,e),v.forEach(([e,r])=>{e===t&&r(N[t])})},C=e=>Object.keys(N).forEach(t=>$(e,t)),z=(e=j)=>t=>{$(t,e)},E=e=>(t,r)=>{let a,s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||f()}))(t,e,r);return z(s.toasterId||(a=s.id,Object.keys(N).find(e=>N[e].toasts.some(e=>e.id===a))))({type:2,toast:s}),s.id},P=(e,t)=>E("blank")(e,t);P.error=E("error"),P.success=E("success"),P.loading=E("loading"),P.custom=E("custom"),P.dismiss=(e,t)=>{let r={type:3,toastId:e};t?z(t)(r):C(r)},P.dismissAll=e=>P.dismiss(void 0,e),P.remove=(e,t)=>{let r={type:4,toastId:e};t?z(t)(r):C(r)},P.removeAll=e=>P.remove(void 0,e),P.promise=(e,t,r)=>{let a=P.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?b(t.success,e):void 0;return s?P.success(s,{id:a,...r,...null==r?void 0:r.success}):P.dismiss(a),e}).catch(e=>{let s=t.error?b(t.error,e):void 0;s?P.error(s,{id:a,...r,...null==r?void 0:r.error}):P.dismiss(a)}),e};var _=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,S=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,A=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${S} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,O=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${O} 1s linear infinite;
`,I=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,D=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=y("div")`
  position: absolute;
`,L=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(H,null,t):t:"blank"===r?null:s.createElement(L,null,s.createElement(T,{...a}),"loading"!==r&&s.createElement(B,null,"error"===r?s.createElement(A,{...a}):s.createElement(D,{...a})))},U=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;s.memo(({toast:e,position:t,style:a,children:i})=>{let d=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[s,i]=(()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=s.createElement(M,{toast:e}),l=s.createElement(X,{...e.ariaProps},b(e.message,e));return s.createElement(U,{className:e.className,style:{...d,...a,...e.style}},"function"==typeof i?i({icon:o,message:l}):s.createElement(s.Fragment,null,o,l))}),a=s.createElement,n.p=void 0,p=a,g=void 0,u=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["toast",0,P],16421)},49010,e=>{"use strict";var t=e.i(68601),r=e.i(75705),a=e.i(15565),s=e.i(43462),i=e.i(36455),d=e.i(74840),o=e.i(71693),l=e.i(17316),n=e.i(55806),c=e.i(49871),m=e.i(8783);e.i(5922);var x=e.i(84398),p=e.i(46789),g=e.i(99806),u=e.i(16421);let h="cart",y="orders",b="favorites",f="settings";e.s(["__N_SSP",0,!0,"default",0,()=>{let e=(0,a.useRouter)(),{data:j,status:w,update:v}=(0,s.useSession)(),[k,N]=(0,r.useState)(h),{cartItems:$,cartCount:C,removeFromCart:z,updateQuantity:E,clearCart:P,getSubtotal:_}=(0,x.useCart)(),{currency:F,t:S}=(0,p.useCurrency)(),[A,O]=(0,r.useState)({name:"",email:"",phone:""}),[T,I]=(0,r.useState)(!1);(0,r.useEffect)(()=>{"unauthenticated"===w?e.replace("/auth/signin"):j?.user&&O({name:j.user.name||"",email:j.user.email||"",phone:j.user.phone||""})},[w,e,j]);let q=e=>{let{name:t,value:r}=e.target;O(e=>({...e,[t]:r}))},D=async e=>{e.preventDefault(),I(!0);try{let e=await fetch("/api/user/update-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)}),t=await e.json();if(!e.ok)throw Error(t.message||"Error al actualizar perfil");await v({...j,user:{...j.user,name:A.name,phone:A.phone}}),u.toast.success("Perfil actualizado correctamente")}catch(e){console.error("Error updating profile:",e),u.toast.error(e.message||"Error al actualizar el perfil")}finally{I(!1)}};if("loading"===w||!j)return(0,t.jsx)("div",{className:"flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"})});let B=()=>(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,t.jsxs)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:[S("cart")," (",C,")"]}),$.length>0&&(0,t.jsx)(o.default,{href:"/cart",children:(0,t.jsx)("button",{className:"text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300",children:S("viewFullCart")})})]}),0===$.length?(0,t.jsxs)("div",{className:"text-center py-10",children:[(0,t.jsx)("div",{className:"inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 mb-4",children:(0,t.jsx)(n.FiShoppingBag,{size:30,className:"text-gray-500 dark:text-gray-400"})}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:S("emptyCart")}),(0,t.jsx)(o.default,{href:"/coleccion",children:(0,t.jsx)("button",{className:"mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",children:S("exploreProducts")})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"max-h-96 overflow-y-auto pr-2",children:$.map(e=>{var r;return(0,t.jsxs)("div",{className:"flex items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700",children:[(0,t.jsx)("div",{className:"relative w-16 h-20 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden",children:(0,t.jsx)(d.default,{src:(r=e.image,r?.startsWith("http")?`${r}?auto=format&q=80&fit=crop&w=120&h=150`:r||"https://via.placeholder.com/120x150"),alt:e.name,layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:"ml-4 flex-1",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-gray-900 dark:text-white",children:e.name}),(0,t.jsx)("button",{onClick:()=>z(e.id,e.size),className:"text-gray-500 hover:text-red-600","aria-label":"Remove",children:"×"})]}),(0,t.jsxs)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[e.category,e.size&&` \xb7 ${S("size")}: ${e.size}`]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,t.jsxs)("div",{className:"flex items-center border border-gray-300 dark:border-gray-600 rounded",children:[(0,t.jsx)("button",{onClick:()=>E(e.id,e.quantity-1,e.size),className:"px-2 py-1 text-gray-600 dark:text-gray-400",children:"-"}),(0,t.jsx)("span",{className:"px-2 text-sm",children:e.quantity}),(0,t.jsx)("button",{onClick:()=>E(e.id,e.quantity+1,e.size),className:"px-2 py-1 text-gray-600 dark:text-gray-400",children:"+"})]}),(0,t.jsx)("span",{className:"text-sm font-medium text-gray-900 dark:text-white",children:(0,g.formatPrice)(e.price*e.quantity,F)})]})]})]},`${e.id}-${e.size||"default"}`)})}),(0,t.jsxs)("div",{className:"border-t border-gray-200 dark:border-gray-700 pt-4 mt-2",children:[(0,t.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,t.jsx)("span",{className:"text-gray-600 dark:text-gray-400",children:S("subtotal")}),(0,t.jsx)("span",{className:"font-medium text-gray-900 dark:text-white",children:(0,g.formatPrice)(_(),F)})]}),(0,t.jsx)(o.default,{href:"/checkout",children:(0,t.jsx)("button",{className:"w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",children:S("proceedToCheckout")})})]})]})]});return(0,t.jsx)("div",{className:"page-transition",children:(0,t.jsxs)("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[(0,t.jsx)(i.default,{children:(0,t.jsxs)("title",{children:[S("myAccount")," | ModaVista"]})}),(0,t.jsx)(c.default,{}),(0,t.jsx)("main",{className:"container mx-auto px-4 pt-20 pb-10",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-3xl font-display font-bold text-gray-900 dark:text-white mb-2",children:S("myAccount")}),(0,t.jsxs)("p",{className:"text-gray-600 dark:text-gray-400",children:[S("welcome"),", ",j.user.name]})]}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-6",children:[(0,t.jsx)("div",{className:"md:w-1/4",children:(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center mb-6",children:[(0,t.jsx)("div",{className:"w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-300",children:j.user.image?(0,t.jsx)(d.default,{src:j.user.image,alt:j.user.name,width:56,height:56,className:"rounded-full"}):(0,t.jsx)(n.FiUser,{size:30})}),(0,t.jsxs)("div",{className:"ml-4",children:[(0,t.jsx)("h3",{className:"font-medium text-gray-900 dark:text-white",children:j.user.name}),(0,t.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:j.user.email})]})]}),(0,t.jsxs)("nav",{className:"space-y-1",children:[(0,t.jsxs)("button",{onClick:()=>N(h),className:`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${k===h?"bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300":"text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}`,children:[(0,t.jsx)(n.FiShoppingBag,{className:"mr-3 flex-shrink-0"}),(0,t.jsx)("span",{children:S("cart")}),C>0&&(0,t.jsx)("span",{className:"ml-auto bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",children:C})]}),(0,t.jsxs)("button",{onClick:()=>N(y),className:`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${k===y?"bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300":"text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}`,children:[(0,t.jsx)(n.FiClock,{className:"mr-3 flex-shrink-0"}),(0,t.jsx)("span",{children:S("myOrders")})]}),(0,t.jsxs)("button",{onClick:()=>N(b),className:`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${k===b?"bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300":"text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}`,children:[(0,t.jsx)(n.FiHeart,{className:"mr-3 flex-shrink-0"}),(0,t.jsx)("span",{children:S("favorites")})]}),(0,t.jsxs)("button",{onClick:()=>N(f),className:`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${k===f?"bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300":"text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"}`,children:[(0,t.jsx)(n.FiSettings,{className:"mr-3 flex-shrink-0"}),(0,t.jsx)("span",{children:S("settings")})]})]})]})}),(0,t.jsx)("div",{className:"md:w-3/4",children:(0,t.jsx)(l.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},children:(()=>{switch(k){case h:return B();case y:return(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-6",children:S("myOrders")}),(0,t.jsxs)("div",{className:"text-center py-10",children:[(0,t.jsx)("div",{className:"inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 mb-4",children:(0,t.jsx)(n.FiClock,{size:30,className:"text-gray-500 dark:text-gray-400"})}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"No tienes pedidos recientes"})]})]});case b:return(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-6",children:S("myWishlist")}),(0,t.jsxs)("div",{className:"text-center py-10",children:[(0,t.jsx)("div",{className:"inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 mb-4",children:(0,t.jsx)(n.FiHeart,{size:30,className:"text-gray-500 dark:text-gray-400"})}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"No tienes productos en tu lista de favoritos"}),(0,t.jsx)(o.default,{href:"/coleccion",children:(0,t.jsx)("button",{className:"mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",children:S("exploreProducts")})})]})]});case f:return(0,t.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-md p-6",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-6",children:S("settings")}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("form",{onSubmit:D,children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,t.jsx)("h4",{className:"text-md font-medium text-gray-900 dark:text-white",children:S("personalInformation")}),(0,t.jsxs)("button",{type:"submit",disabled:T,className:"flex items-center text-sm bg-primary-600 text-white px-3 py-1.5 rounded-md hover:bg-primary-700 disabled:opacity-50",children:[(0,t.jsx)(n.FiSave,{className:"mr-1.5"}),T?"Guardando...":"Guardar Cambios"]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"md:col-span-2",children:[(0,t.jsx)("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:"Nombre Completo"}),(0,t.jsx)("input",{type:"text",name:"name",value:A.name,onChange:q,className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:S("email")}),(0,t.jsx)("input",{type:"email",name:"email",value:A.email,onChange:q,className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:"Teléfono"}),(0,t.jsx)("input",{type:"tel",name:"phone",value:A.phone,onChange:q,placeholder:"+54 9 ...",className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-md font-medium text-gray-900 dark:text-white mb-3",children:S("changePassword")}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:S("currentPassword")}),(0,t.jsx)("input",{type:"password",placeholder:"••••••••",className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:S("newPassword")}),(0,t.jsx)("input",{type:"password",placeholder:"••••••••",className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:S("confirmPassword")}),(0,t.jsx)("input",{type:"password",placeholder:"••••••••",className:"w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"})]})]}),(0,t.jsx)("button",{className:"mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors",children:S("updatePassword")})]})]})]});default:return B()}})()},k)})]})]})}),(0,t.jsx)(m.default,{})]})})}])},63987,(e,t,r)=>{let a="/user/profile";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(49010)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},60357,e=>{e.v(t=>Promise.all(["static/chunks/15iwp8io~zw56.js"].map(t=>e.l(t))).then(()=>t(66597)))},31469,e=>{e.v(t=>Promise.all(["static/chunks/025j~jt76k4jn.js"].map(t=>e.l(t))).then(()=>t(48996)))}]);