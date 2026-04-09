(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,77774,e=>{"use strict";var t=e.i(68601),s=e.i(36455),a=e.i(75705),r=e.i(49871),i=e.i(8783),l=e.i(46789);e.s(["default",0,({children:e,title:n="ModaVista",description:d=""})=>{let{t:o,language:c}=(0,l.useCurrency)();return(0,a.useEffect)(()=>{document.documentElement.lang=c},[c]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:n}),(0,t.jsx)("meta",{name:"description",content:d||o("welcome")}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("main",{className:"flex-grow",children:e}),(0,t.jsx)(i.default,{})]})]})}])},16421,e=>{"use strict";let t,s;var a,r=e.i(75705);let i={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,o=(e,t)=>{let s="",a="",r="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+l+";":a+="f"==i[1]?o(l,i):i+"{"+o(l,"k"==i[1]?"":t)+"}":"object"==typeof l?a+=o(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=o.p?o.p(i,l):i+":"+l+";")}return s+(t&&r?t+"{"+r+"}":r)+a},c={},m=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+m(e[s]);return t}return e};function x(e){let t,s,a=this||{},r=e.call?e(a.p):e;return((e,t,s,a,r)=>{var i;let x=m(e),p=c[x]||(c[x]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(x));if(!c[p]){let t=x!==e?e:(e=>{let t,s,a=[{}];for(;t=l.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(s=t[3].replace(d," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);c[p]=o(r?{["@keyframes "+p]:t}:t,s?"":"."+p)}let u=s&&c.g?c.g:null;return s&&(c.g=c[p]),i=c[p],u?t.data=t.data.replace(u,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),p})(r.unshift?r.raw?(t=[].slice.call(arguments,1),s=a.p,r.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(a.target),a.g,a.o,a.k)}x.bind({g:1});let p,u,h,g=x.bind({k:1});function f(e,t){let s=this||{};return function(){let a=arguments;function r(i,l){let n=Object.assign({},i),d=n.className||r.className;s.p=Object.assign({theme:u&&u()},n),s.o=/ *go\d+/.test(d),n.className=x.apply(s,a)+(d?" "+d:""),t&&(n.ref=l);let o=e;return e[0]&&(o=n.as||e,delete n.as),h&&o[0]&&h(n),p(o,n)}return t?t(r):r}}var y=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),j="default",v=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return v(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],w={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},C=(e,t=j)=>{k[t]=v(k[t]||w,e),N.forEach(([e,s])=>{e===t&&s(k[t])})},F=e=>Object.keys(k).forEach(t=>C(e,t)),E=(e=j)=>t=>{C(t,e)},$=e=>(t,s)=>{let a,r=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||b()}))(t,e,s);return E(r.toasterId||(a=r.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===a))))({type:2,toast:r}),r.id},_=(e,t)=>$("blank")(e,t);_.error=$("error"),_.success=$("success"),_.loading=$("loading"),_.custom=$("custom"),_.dismiss=(e,t)=>{let s={type:3,toastId:e};t?E(t)(s):F(s)},_.dismissAll=e=>_.dismiss(void 0,e),_.remove=(e,t)=>{let s={type:4,toastId:e};t?E(t)(s):F(s)},_.removeAll=e=>_.remove(void 0,e),_.promise=(e,t,s)=>{let a=_.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?y(t.success,e):void 0;return r?_.success(r,{id:a,...s,...null==s?void 0:s.success}):_.dismiss(a),e}).catch(e=>{let r=t.error?y(t.error,e):void 0;r?_.error(r,{id:a,...s,...null==s?void 0:s.error}):_.dismiss(a)}),e};var P=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,S=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z} 0.15s ease-out forwards;
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
`,A=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=f("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A} 1s linear infinite;
`,O=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,L=g`
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
}`,D=f("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${L} 0.2s ease-out forwards;
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
`,I=f("div")`
  position: absolute;
`,q=f("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=f("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,U=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?r.createElement(B,null,t):t:"blank"===s?null:r.createElement(q,null,r.createElement(M,{...a}),"loading"!==s&&r.createElement(I,null,"error"===s?r.createElement(T,{...a}):r.createElement(D,{...a})))},X=f("div")`
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
`,H=f("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;r.memo(({toast:e,position:t,style:a,children:i})=>{let l=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,i]=(()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(U,{toast:e}),d=r.createElement(H,{...e.ariaProps},y(e.message,e));return r.createElement(X,{className:e.className,style:{...l,...a,...e.style}},"function"==typeof i?i({icon:n,message:d}):r.createElement(r.Fragment,null,n,d))}),a=r.createElement,o.p=void 0,p=a,u=void 0,h=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["toast",0,_],16421)},24718,e=>{"use strict";var t=e.i(68601),s=e.i(75705),a=e.i(17316),r=e.i(86071),i=e.i(55806);e.s(["default",0,function({title:e,children:l,onClose:n,maxWidth:d="max-w-4xl"}){return(0,s.useEffect)(()=>{document.body.style.overflow="hidden";let e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}},[n]),(0,t.jsx)(r.AnimatePresence,{children:(0,t.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50",children:[(0,t.jsx)(a.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,className:"absolute inset-0 bg-black bg-opacity-50"}),(0,t.jsxs)(a.motion.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>{e.stopPropagation()},className:`${d} w-full bg-white rounded-lg shadow-xl overflow-hidden z-10`,children:[(0,t.jsxs)("div",{className:"flex justify-between items-center px-6 py-4 border-b border-gray-200",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:e}),(0,t.jsx)("button",{onClick:n,className:"text-gray-500 hover:text-gray-700 focus:outline-none",children:(0,t.jsx)(i.FiX,{size:20})})]}),(0,t.jsx)("div",{className:"overflow-y-auto max-h-[calc(100vh-10rem)]",children:l})]})]})})}])},11522,e=>{"use strict";var t=e.i(68601),s=e.i(75705),a=e.i(15565),r=e.i(43462),i=e.i(1216),l=e.i(16421),n=e.i(55806),d=e.i(77774),o=e.i(24718),c=e.i(74840),m=e.i(71693),x=e.i(17316),p=e.i(84398),u=e.i(46789),h=e.i(99806);let g=()=>{let{cartItems:e,cartCount:r,removeFromCart:i,updateQuantity:l,clearCart:d,getSubtotal:o}=(0,p.useCart)(),{currency:g,t:f}=(0,u.useCurrency)(),[y,b]=(0,s.useState)(!1),j=(0,a.useRouter)();return 0===e.length?(0,t.jsxs)("div",{className:"py-16 text-center",children:[(0,t.jsx)("div",{className:"flex justify-center mb-4",children:(0,t.jsx)(n.FiShoppingBag,{size:60,className:"text-gray-400 dark:text-gray-600"})}),(0,t.jsx)("h2",{className:"text-xl text-gray-600 dark:text-gray-400 mb-6",children:"Tu carrito está vacío"}),(0,t.jsx)(m.default,{href:"/coleccion",children:(0,t.jsxs)(x.motion.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"hero-button primary-button flex items-center justify-center mx-auto",children:["Ir a la tienda ",(0,t.jsx)(n.FiArrowRight,{className:"ml-2"})]})})]}):(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)("div",{className:"space-y-4",children:e.map(e=>{var s;return(0,t.jsxs)("div",{className:"flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800",children:[(0,t.jsx)("div",{className:"relative w-16 h-20 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden",children:(0,t.jsx)(c.default,{src:(s=e.image,s?.startsWith("http")?`${s}?auto=format&q=80&fit=crop&w=150&h=180`:s||"https://via.placeholder.com/150x180"),alt:e.name,layout:"fill",objectFit:"cover"})}),(0,t.jsxs)("div",{className:"ml-4 flex-1",children:[(0,t.jsx)("h3",{className:"text-sm font-medium text-gray-900 dark:text-white",children:e.name}),e.size&&(0,t.jsxs)("p",{className:"mt-1 text-xs text-gray-500 dark:text-gray-400",children:["Talla: ",e.size]}),(0,t.jsxs)("div",{className:"mt-1 flex justify-between items-center",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:(0,h.formatPrice)(e.price,g)}),(0,t.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,t.jsx)("button",{onClick:()=>l(e.id,e.quantity-1,e.size),className:"p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded",children:(0,t.jsx)(n.FiMinus,{size:14})}),(0,t.jsx)("span",{className:"w-6 text-center text-sm",children:e.quantity}),(0,t.jsx)("button",{onClick:()=>l(e.id,e.quantity+1,e.size),className:"p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded",children:(0,t.jsx)(n.FiPlus,{size:14})})]})]})]}),(0,t.jsx)("button",{onClick:()=>i(e.id,e.size),className:"ml-4 p-1 text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 rounded-full","aria-label":"Remove",children:(0,t.jsx)(n.FiTrash2,{size:16})})]},`${e.id}-${e.size||"default"}`)})}),(0,t.jsxs)("div",{className:"flex justify-between border-t border-b py-3 border-gray-200 dark:border-gray-700",children:[(0,t.jsxs)("button",{onClick:d,className:"text-sm text-red-600 hover:text-red-800 flex items-center",children:[(0,t.jsx)(n.FiTrash2,{size:16,className:"mr-1"})," Vaciar carrito"]}),(0,t.jsxs)("span",{className:"text-sm font-medium",children:[r," ",1===r?"producto":"productos"]})]}),(0,t.jsxs)("div",{className:"bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4",children:[(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{className:"text-gray-600 dark:text-gray-400",children:"Subtotal"}),(0,t.jsx)("span",{className:"text-gray-900 dark:text-white font-medium",children:(0,h.formatPrice)(o(),g)})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("span",{className:"text-gray-600 dark:text-gray-400",children:"Envío"}),(0,t.jsx)("span",{className:"text-gray-900 dark:text-white font-medium",children:(0,h.formatPrice)(0,g)})]}),(0,t.jsxs)("div",{className:"flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700",children:[(0,t.jsx)("span",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Total"}),(0,t.jsx)("span",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:(0,h.formatPrice)(o(),g)})]})]}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(x.motion.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{j.push("/checkout")},disabled:y,className:"w-full hero-button primary-button flex items-center justify-center",children:y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"mr-2 animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"}),"Procesando..."]}):(0,t.jsx)(t.Fragment,{children:"Proceder al pago"})})})]})]})};e.s(["__N_SSP",0,!0,"default",0,function(){let e=(0,a.useRouter)(),{view:c}=e.query,[m,x]=(0,s.useState)("profile"),[p,u]=(0,s.useState)(!0),[h,f]=(0,s.useState)(null),[y,b]=(0,s.useState)([]),[j,v]=(0,s.useState)(null),[N,w]=(0,s.useState)(!1);(0,s.useEffect)(()=>{(async()=>{let t=await (0,r.getSession)();t?(f(t.user),c?(console.log("Activando pestaña basada en URL:",c),x(c),"orders"===c?k():u(!1)):u(!1)):e.push("/login")})()},[e,c]);let k=async()=>{try{console.log("Solicitando órdenes al servidor...");let e=await i.default.get("/api/user/orders");console.log("Respuesta del servidor:",e.data),e.data.success?(console.log(`Recibidas ${e.data.orders.length} \xf3rdenes`),b(e.data.orders)):(console.error("Error en la respuesta:",e.data.message),l.toast.error("Error al cargar tus órdenes")),u(!1)}catch(e){console.error("Error al obtener órdenes:",e),l.toast.error("Error al cargar tus órdenes"),u(!1)}},C=t=>{x(t),"orders"===t&&0===y.length&&k(),e.push({pathname:"/profile",query:"profile"!==t?{view:t}:{}},void 0,{shallow:!0})},F=async()=>{await (0,r.signOut)({redirect:!1}),e.push("/")},E=e=>{switch(e){case"pending":return"Pendiente";case"processing":return"Procesando";case"shipped":return"Enviado";case"in_transit":return"En camino";case"delivered":return"Entregado";case"completed":return"Finalizado";case"cancelled":return"Cancelada";default:return e}},$=e=>{switch(e){case"pending":return(0,t.jsx)(n.FiClock,{className:"text-yellow-500"});case"processing":return(0,t.jsx)(n.FiPackage,{className:"text-blue-500"});case"shipped":return(0,t.jsx)(n.FiTruck,{className:"text-blue-500"});case"in_transit":return(0,t.jsx)(n.FiTruck,{className:"text-indigo-500"});case"delivered":case"completed":return(0,t.jsx)(n.FiCheckCircle,{className:"text-green-500"});case"cancelled":return(0,t.jsx)(n.FiXCircle,{className:"text-red-500"});default:return(0,t.jsx)(n.FiClock,{className:"text-gray-500"})}},_=e=>{switch(e){case"card":return"Tarjeta";case"mercadopago":return"Mercado Pago";case"paypal":return"PayPal";default:return e}};return(0,t.jsxs)(d.default,{title:"Mi Perfil",children:[(0,t.jsx)("div",{className:"container mx-auto px-4 py-8",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-8",children:[(0,t.jsx)("div",{className:"md:w-1/4",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[h&&(0,t.jsxs)("div",{className:"flex flex-col items-center mb-6",children:[(0,t.jsx)("div",{className:"w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4",children:(0,t.jsx)(n.FiUser,{size:36,className:"text-blue-500"})}),(0,t.jsx)("h2",{className:"text-xl font-bold",children:h.name}),(0,t.jsx)("p",{className:"text-gray-600",children:h.email})]}),(0,t.jsx)("nav",{children:(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:()=>C("profile"),className:`w-full text-left px-4 py-2 rounded-md flex items-center ${"profile"===m?"bg-blue-50 text-blue-700":"hover:bg-gray-100"}`,children:[(0,t.jsx)(n.FiUser,{className:"mr-3"})," Mi Cuenta"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:()=>C("orders"),className:`w-full text-left px-4 py-2 rounded-md flex items-center ${"orders"===m?"bg-blue-50 text-blue-700":"hover:bg-gray-100"}`,children:[(0,t.jsx)(n.FiShoppingBag,{className:"mr-3"})," Mis Compras"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:()=>C("cart"),className:`w-full text-left px-4 py-2 rounded-md flex items-center ${"cart"===m?"bg-blue-50 text-blue-700":"hover:bg-gray-100"}`,children:[(0,t.jsx)(n.FiShoppingBag,{className:"mr-3"})," Mi Carrito"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:F,className:"w-full text-left px-4 py-2 rounded-md flex items-center text-red-600 hover:bg-red-50",children:[(0,t.jsx)(n.FiLogOut,{className:"mr-3"})," Cerrar Sesión"]})})]})})]})}),(0,t.jsx)("div",{className:"md:w-3/4",children:p?(0,t.jsx)("div",{className:"bg-white rounded-lg shadow-md p-8 flex justify-center",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):"profile"===m?(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-8",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Mi Perfil"}),(0,t.jsx)("div",{className:"space-y-6",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-3",children:"Información Personal"}),(0,t.jsx)("div",{className:"bg-gray-50 p-4 rounded-md",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Nombre"}),(0,t.jsx)("p",{className:"font-medium",children:h?.name})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Email"}),(0,t.jsx)("p",{className:"font-medium",children:h?.email})]})]})})]})})]}):"orders"===m?(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-8",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Mis Compras"}),y.length>0?(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,t.jsx)("thead",{className:"bg-gray-50",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Orden"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Fecha"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Estado"}),(0,t.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Acciones"})]})}),(0,t.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:y.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,t.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[(0,t.jsxs)("div",{className:"text-sm font-medium text-gray-900",children:["#",e.id]}),(0,t.jsx)("div",{className:"text-sm text-gray-500",children:_(e.payment_method)})]}),(0,t.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[(0,t.jsx)("div",{className:"text-sm text-gray-900",children:new Date(e.created_at).toLocaleDateString()}),(0,t.jsx)("div",{className:"text-sm text-gray-500",children:new Date(e.created_at).toLocaleTimeString()})]}),(0,t.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[(0,t.jsxs)("div",{className:"text-sm font-semibold text-gray-900",children:["$",e.total_amount.toFixed(2)]}),(0,t.jsxs)("div",{className:"text-sm text-gray-500",children:[e.items.length," producto(s)"]})]}),(0,t.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,t.jsxs)("div",{className:"flex items-center",children:[$(e.status),(0,t.jsx)("span",{className:`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                  ${"pending"===e.status?"bg-yellow-100 text-yellow-800":"processing"===e.status?"bg-blue-100 text-blue-800":"shipped"===e.status?"bg-indigo-100 text-indigo-800":"in_transit"===e.status?"bg-purple-100 text-purple-800":"delivered"===e.status||"completed"===e.status?"bg-green-100 text-green-800":"cancelled"===e.status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:E(e.status)})]})}),(0,t.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:(0,t.jsxs)("button",{onClick:()=>{v(e),w(!0)},className:"text-blue-600 hover:text-blue-900 flex items-center",children:[(0,t.jsx)(n.FiFileText,{className:"mr-1"})," Ver detalles"]})})]},e.id))})]})}):(0,t.jsxs)("div",{className:"text-center py-12 bg-gray-50 rounded-md",children:[(0,t.jsx)(n.FiShoppingBag,{className:"mx-auto h-12 w-12 text-gray-400"}),(0,t.jsx)("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No hay compras"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Aún no has realizado ninguna compra."}),(0,t.jsx)("div",{className:"mt-6",children:(0,t.jsx)("button",{onClick:()=>e.push("/"),className:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",children:"Ir a comprar"})})]})]}):"cart"===m?(0,t.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-8",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Mi Carrito"}),(0,t.jsx)(g,{})]}):null})]})}),N&&j&&(0,t.jsx)(o.default,{title:`Detalle de la Orden #${j.id}`,onClose:()=>w(!1),children:(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Fecha de la orden:"}),(0,t.jsx)("p",{className:"font-medium",children:new Date(j.created_at).toLocaleString()})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[$(j.status),(0,t.jsx)("span",{className:`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${"pending"===j.status?"bg-yellow-100 text-yellow-800":"processing"===j.status?"bg-blue-100 text-blue-800":"shipped"===j.status?"bg-indigo-100 text-indigo-800":"in_transit"===j.status?"bg-purple-100 text-purple-800":"delivered"===j.status||"completed"===j.status?"bg-green-100 text-green-800":"cancelled"===j.status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:E(j.status)})]})]}),(0,t.jsxs)("div",{className:"border-t border-gray-200 pt-4 mb-6",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Detalles de la Compra"}),(0,t.jsxs)("div",{className:"space-y-4",children:[j.items.map(e=>(0,t.jsxs)("div",{className:"flex items-start border-b border-gray-100 pb-4",children:[(0,t.jsx)("div",{className:"h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",children:(0,t.jsx)("img",{src:e.image,alt:e.product_name,className:"h-full w-full object-cover object-center"})}),(0,t.jsxs)("div",{className:"ml-4 flex-1",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-gray-900",children:e.product_name}),(0,t.jsxs)("p",{className:"text-sm font-medium text-gray-900",children:["$",(e.price*e.quantity).toFixed(2)]})]}),(0,t.jsxs)("div",{className:"mt-1 flex text-sm",children:[(0,t.jsxs)("p",{className:"text-gray-500",children:["Cantidad: ",e.quantity]}),(0,t.jsxs)("p",{className:"ml-4 text-gray-500",children:["Precio unitario: $",e.price.toFixed(2)]})]})]})]},e.id)),(0,t.jsxs)("div",{className:"flex justify-between py-2",children:[(0,t.jsx)("p",{className:"text-sm font-medium text-gray-900",children:"Total:"}),(0,t.jsxs)("p",{className:"text-lg font-semibold text-gray-900",children:["$",j.total_amount.toFixed(2)]})]})]})]}),(0,t.jsxs)("div",{className:"border-t border-gray-200 pt-4 mb-6",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Método de Pago"}),(0,t.jsx)("div",{className:"bg-gray-50 p-4 rounded-md",children:(0,t.jsx)("p",{className:"font-medium",children:_(j.payment_method)})})]}),(0,t.jsxs)("div",{className:"border-t border-gray-200 pt-4",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-3",children:"Información de Envío"}),(0,t.jsxs)("div",{className:"bg-gray-50 p-4 rounded-md",children:[(0,t.jsx)("p",{className:"font-medium",children:j.name}),(0,t.jsx)("p",{className:"text-gray-600",children:j.address}),(0,t.jsxs)("p",{className:"text-gray-600",children:[j.city,", ",j.state," ",j.postal_code]}),(0,t.jsx)("p",{className:"text-gray-600",children:j.phone})]})]}),(0,t.jsx)("div",{className:"flex justify-end mt-6",children:(0,t.jsx)("button",{onClick:()=>w(!1),className:"px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300",children:"Cerrar"})})]})})]})}],11522)},54645,(e,t,s)=>{let a="/profile";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(11522)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},60357,e=>{e.v(t=>Promise.all(["static/chunks/15iwp8io~zw56.js"].map(t=>e.l(t))).then(()=>t(66597)))},31469,e=>{e.v(t=>Promise.all(["static/chunks/025j~jt76k4jn.js"].map(t=>e.l(t))).then(()=>t(48996)))}]);