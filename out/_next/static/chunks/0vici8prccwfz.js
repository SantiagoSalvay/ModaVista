(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,77774,e=>{"use strict";var t=e.i(68601),a=e.i(36455),s=e.i(75705),r=e.i(49871),i=e.i(8783),n=e.i(46789);e.s(["default",0,({children:e,title:l="ModaVista",description:o=""})=>{let{t:d,language:c}=(0,n.useCurrency)();return(0,s.useEffect)(()=>{document.documentElement.lang=c},[c]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:l}),(0,t.jsx)("meta",{name:"description",content:o||d("welcome")}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,t.jsx)(r.default,{}),(0,t.jsx)("main",{className:"flex-grow",children:e}),(0,t.jsx)(i.default,{})]})]})}])},16421,e=>{"use strict";let t,a;var s,r=e.i(75705);let i={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,o=/\n+/g,d=(e,t)=>{let a="",s="",r="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":s+="f"==i[1]?d(n,i):i+"{"+d(n,"k"==i[1]?"":t)+"}":"object"==typeof n?s+=d(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(i,n):i+":"+n+";")}return a+(t&&r?t+"{"+r+"}":r)+s},c={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e};function p(e){let t,a,s=this||{},r=e.call?e(s.p):e;return((e,t,a,s,r)=>{var i;let p=m(e),x=c[p]||(c[p]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(p));if(!c[x]){let t=p!==e?e:(e=>{let t,a,s=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(a=t[3].replace(o," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(o," ").trim();return s[0]})(e);c[x]=d(r?{["@keyframes "+x]:t}:t,a?"":"."+x)}let u=a&&c.g?c.g:null;return a&&(c.g=c[x]),i=c[x],u?t.data=t.data.replace(u,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),x})(r.unshift?r.raw?(t=[].slice.call(arguments,1),a=s.p,r.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(s.target),s.g,s.o,s.k)}p.bind({g:1});let x,u,g,h=p.bind({k:1});function b(e,t){let a=this||{};return function(){let s=arguments;function r(i,n){let l=Object.assign({},i),o=l.className||r.className;a.p=Object.assign({theme:u&&u()},l),a.o=/ *go\d+/.test(o),l.className=p.apply(a,s)+(o?" "+o:""),t&&(l.ref=n);let d=e;return e[0]&&(d=l.as||e,delete l.as),g&&d[0]&&g(l),x(d,l)}return t?t(r):r}}var y=(e,t)=>"function"==typeof e?e(t):e,f=(t=0,()=>(++t).toString()),j="default",v=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return v(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],w={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},_=(e,t=j)=>{k[t]=v(k[t]||w,e),N.forEach(([e,a])=>{e===t&&a(k[t])})},C=e=>Object.keys(k).forEach(t=>_(e,t)),E=(e=j)=>t=>{_(t,e)},F=e=>(t,a)=>{let s,r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||f()}))(t,e,a);return E(r.toasterId||(s=r.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===s))))({type:2,toast:r}),r.id},P=(e,t)=>F("blank")(e,t);P.error=F("error"),P.success=F("success"),P.loading=F("loading"),P.custom=F("custom"),P.dismiss=(e,t)=>{let a={type:3,toastId:e};t?E(t)(a):C(a)},P.dismissAll=e=>P.dismiss(void 0,e),P.remove=(e,t)=>{let a={type:4,toastId:e};t?E(t)(a):C(a)},P.removeAll=e=>P.remove(void 0,e),P.promise=(e,t,a)=>{let s=P.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?y(t.success,e):void 0;return r?P.success(r,{id:s,...a,...null==a?void 0:a.success}):P.dismiss(s),e}).catch(e=>{let r=t.error?y(t.error,e):void 0;r?P.error(r,{id:s,...a,...null==a?void 0:a.error}):P.dismiss(s)}),e};var $=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,z=h`
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
}`,A=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,T=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,D=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,I=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,O=h`
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
}`,L=b("div")`
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
    animation: ${O} 0.2s ease-out forwards;
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
`,V=b("div")`
  position: absolute;
`,M=b("div")`
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
}`,X=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?r.createElement(X,null,t):t:"blank"===a?null:r.createElement(M,null,r.createElement(D,{...s}),"loading"!==a&&r.createElement(V,null,"error"===a?r.createElement(A,{...s}):r.createElement(L,{...s})))},B=b("div")`
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
`,K=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;r.memo(({toast:e,position:t,style:s,children:i})=>{let n=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[r,i]=(()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a})()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},l=r.createElement(q,{toast:e}),o=r.createElement(K,{...e.ariaProps},y(e.message,e));return r.createElement(B,{className:e.className,style:{...n,...s,...e.style}},"function"==typeof i?i({icon:l,message:o}):r.createElement(r.Fragment,null,l,o))}),s=r.createElement,d.p=void 0,x=s,u=void 0,g=void 0,p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,e.s(["toast",0,P],16421)},24718,e=>{"use strict";var t=e.i(68601),a=e.i(75705),s=e.i(17316),r=e.i(86071),i=e.i(55806);e.s(["default",0,function({title:e,children:n,onClose:l,maxWidth:o="max-w-4xl"}){return(0,a.useEffect)(()=>{document.body.style.overflow="hidden";let e=e=>{"Escape"===e.key&&l()};return window.addEventListener("keydown",e),()=>{document.body.style.overflow="",window.removeEventListener("keydown",e)}},[l]),(0,t.jsx)(r.AnimatePresence,{children:(0,t.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50",children:[(0,t.jsx)(s.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l,className:"absolute inset-0 bg-black bg-opacity-50"}),(0,t.jsxs)(s.motion.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>{e.stopPropagation()},className:`${o} w-full bg-white rounded-lg shadow-xl overflow-hidden z-10`,children:[(0,t.jsxs)("div",{className:"flex justify-between items-center px-6 py-4 border-b border-gray-200",children:[(0,t.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:e}),(0,t.jsx)("button",{onClick:l,className:"text-gray-500 hover:text-gray-700 focus:outline-none",children:(0,t.jsx)(i.FiX,{size:20})})]}),(0,t.jsx)("div",{className:"overflow-y-auto max-h-[calc(100vh-10rem)]",children:n})]})]})})}])},80142,e=>{"use strict";var t=e.i(68601),a=e.i(75705),s=e.i(43462),r=e.i(1216),i=e.i(16421),n=e.i(55806),l=e.i(77774),o=e.i(24718);e.s(["__N_SSP",0,!0,"default",0,function(){let[e,d]=(0,a.useState)(!0),[c,m]=(0,a.useState)([]),[p,x]=(0,a.useState)([]),[u,g]=(0,a.useState)(null),[h,b]=(0,a.useState)(!1),[y,f]=(0,a.useState)(!1),[j,v]=(0,a.useState)(!1),[N,w]=(0,a.useState)(null),[k,_]=(0,a.useState)(""),[C,E]=(0,a.useState)(""),[F,P]=(0,a.useState)(""),[$,z]=(0,a.useState)("all");(0,a.useEffect)(()=>{(async()=>{let e=await (0,s.getSession)();if(!e||"admin"!==e.user.role){window.location.href="/";return}S()})()},[]),(0,a.useEffect)(()=>{c.length>0&&A($)},[c,$]);let S=async()=>{try{let e=await r.default.get("/api/admin/orders");m(e.data.orders),x(e.data.orders),d(!1)}catch(e){console.error("Error al cargar órdenes:",e),i.toast.error("Error al cargar las órdenes"),d(!1)}},A=e=>{switch(e){case"mercadopago":x(c.filter(e=>"mercadopago"===e.payment_method));break;case"paypal":x(c.filter(e=>"paypal"===e.payment_method));break;case"card":x(c.filter(e=>"card"===e.payment_method));break;case"pending":x(c.filter(e=>"pending"===e.status));break;case"processing":x(c.filter(e=>"processing"===e.status));break;case"shipped":x(c.filter(e=>"shipped"===e.status));break;case"in_transit":x(c.filter(e=>"in_transit"===e.status));break;case"delivered":x(c.filter(e=>"delivered"===e.status));break;case"completed":x(c.filter(e=>"completed"===e.status));break;case"cancelled":x(c.filter(e=>"cancelled"===e.status));break;case"pending_payment":x(c.filter(e=>"pending"===e.payment_status));break;case"verified_payment":x(c.filter(e=>"completed"===e.payment_status));break;default:x(c)}},T=e=>{w(e),f(!0)},D=async e=>{try{let t=await r.default.post("/api/admin/verify-payment",{orderId:e,verificationNote:k||"Pago verificado por administrador"});t.data.success?(i.toast.success("Pago verificado correctamente"),f(!1),b(!1),S()):i.toast.error(t.data.message||"Error al verificar el pago")}catch(e){console.error("Error al verificar pago:",e),i.toast.error("Error al verificar el pago")}},I=async e=>{if(!k)return void i.toast.error("Por favor, proporciona un motivo para el rechazo");try{let t=await r.default.post("/api/admin/reject-payment",{orderId:e,rejectionReason:k});t.data.success?(i.toast.success("Pago rechazado"),f(!1),b(!1),S()):i.toast.error(t.data.message||"Error al rechazar el pago")}catch(e){console.error("Error al rechazar pago:",e),i.toast.error("Error al rechazar el pago")}},O=async(e,t)=>{try{let a=await r.default.post("/api/admin/update-order-status",{orderId:e,status:t,statusNote:C});a.data.success?(i.toast.success(`Estado actualizado a ${V(t)}`),v(!1),h&&u&&g({...u,status:t}),S()):i.toast.error(a.data.message||"Error al actualizar el estado")}catch(e){console.error("Error al actualizar estado:",e),i.toast.error("Error al actualizar el estado de la orden")}},L=e=>{g(e),P(e.status),E(""),v(!0)},V=e=>{switch(e){case"pending":return"Pendiente";case"processing":return"Procesando";case"shipped":return"Enviado";case"in_transit":return"En camino";case"delivered":return"Entregado";case"completed":return"Completada";case"cancelled":return"Cancelada";default:return e}};return(0,t.jsxs)(l.default,{title:"Administración de Órdenes",children:[(0,t.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold mb-6",children:"Administración de Órdenes"}),(0,t.jsxs)("div",{className:"mb-6 flex flex-wrap gap-2",children:[(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"all"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("all"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Todas"]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 border-l pl-2 ml-2 border-gray-300",children:[(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"mercadopago"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("mercadopago"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Mercado Pago"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"paypal"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("paypal"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," PayPal"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"card"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("card"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Tarjeta"]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 border-l pl-2 ml-2 border-gray-300",children:[(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"pending_payment"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("pending_payment"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Pago Pendiente"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"verified_payment"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("verified_payment"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Pago Verificado"]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 border-l pl-2 ml-2 border-gray-300",children:[(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"pending"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("pending"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Pendientes"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"processing"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("processing"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Procesando"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"shipped"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("shipped"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Enviado"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"in_transit"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("in_transit"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," En camino"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"delivered"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("delivered"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Entregado"]}),(0,t.jsxs)("button",{className:`px-3 py-2 rounded-md flex items-center text-sm ${"cancelled"===$?"bg-blue-500 text-white":"bg-gray-100"}`,onClick:()=>z("cancelled"),children:[(0,t.jsx)(n.FiFilter,{className:"mr-1"})," Cancelado"]})]})]}),e?(0,t.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):p.length>0?(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"min-w-full bg-white border border-gray-200",children:[(0,t.jsx)("thead",{className:"bg-gray-50",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Orden ID"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Cliente"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Método"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Total"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Estado"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Pago"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Fecha"}),(0,t.jsx)("th",{className:"py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Acciones"})]})}),(0,t.jsx)("tbody",{className:"divide-y divide-gray-200",children:p.map(e=>(0,t.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,t.jsx)("td",{className:"py-4 px-4 text-sm",children:e.id}),(0,t.jsxs)("td",{className:"py-4 px-4",children:[(0,t.jsx)("div",{className:"text-sm font-medium",children:e.name}),(0,t.jsx)("div",{className:"text-sm text-gray-500",children:e.email})]}),(0,t.jsx)("td",{className:"py-4 px-4 text-sm",children:"mercadopago"===e.payment_method?"Mercado Pago":"paypal"===e.payment_method?"PayPal":"Tarjeta"}),(0,t.jsxs)("td",{className:"py-4 px-4 text-sm",children:["$",e.total_amount?parseFloat(e.total_amount).toFixed(2):"0.00"]}),(0,t.jsx)("td",{className:"py-4 px-4",children:(0,t.jsx)("span",{className:`px-2 py-1 text-xs rounded ${"pending"===e.status?"bg-yellow-100 text-yellow-800":"processing"===e.status?"bg-blue-100 text-blue-800":"shipped"===e.status?"bg-indigo-100 text-indigo-800":"in_transit"===e.status?"bg-purple-100 text-purple-800":"delivered"===e.status||"completed"===e.status?"bg-green-100 text-green-800":"cancelled"===e.status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:V(e.status)})}),(0,t.jsx)("td",{className:"py-4 px-4",children:(0,t.jsx)("span",{className:`px-2 py-1 text-xs rounded ${"pending"===e.payment_status?"bg-yellow-100 text-yellow-800":"completed"===e.payment_status?"bg-green-100 text-green-800":"rejected"===e.payment_status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:"pending"===e.payment_status?"Pendiente":"completed"===e.payment_status?"Verificado":"rejected"===e.payment_status?"Rechazado":e.payment_status})}),(0,t.jsx)("td",{className:"py-4 px-4 text-sm",children:new Date(e.created_at).toLocaleDateString()}),(0,t.jsx)("td",{className:"py-4 px-4",children:(0,t.jsxs)("div",{className:"flex space-x-2",children:[(0,t.jsx)("button",{onClick:()=>{g(e),b(!0)},className:"text-blue-500 hover:text-blue-700",title:"Ver detalles",children:(0,t.jsx)(n.FiEye,{size:18})}),e.receipt&&(0,t.jsx)("button",{onClick:()=>T(e.receipt),className:"text-green-500 hover:text-green-700",title:"Ver comprobante",children:(0,t.jsx)(n.FiImage,{size:18})}),(0,t.jsx)("button",{onClick:()=>L(e),className:"text-purple-500 hover:text-purple-700",title:"Cambiar estado",children:(0,t.jsx)(n.FiTruck,{size:18})})]})})]},e.id))})]})}):(0,t.jsx)("div",{className:"text-center p-8 bg-gray-50 rounded-md",children:(0,t.jsx)("p",{className:"text-gray-500",children:"No hay órdenes que coincidan con el filtro seleccionado"})})]}),h&&u&&(0,t.jsx)(o.default,{title:"Detalles de la Orden",onClose:()=>b(!1),children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"ID de Orden:"}),(0,t.jsx)("p",{className:"font-medium",children:u.id})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Fecha:"}),(0,t.jsx)("p",{className:"font-medium",children:new Date(u.created_at).toLocaleString()})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Estado:"}),(0,t.jsx)("p",{className:"font-medium",children:(0,t.jsx)("span",{className:`px-2 py-1 text-xs rounded ${"pending"===u.status?"bg-yellow-100 text-yellow-800":"processing"===u.status?"bg-blue-100 text-blue-800":"shipped"===u.status?"bg-indigo-100 text-indigo-800":"in_transit"===u.status?"bg-purple-100 text-purple-800":"delivered"===u.status||"completed"===u.status?"bg-green-100 text-green-800":"cancelled"===u.status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:V(u.status)})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Estado de Pago:"}),(0,t.jsx)("p",{className:"font-medium",children:(0,t.jsx)("span",{className:`px-2 py-1 text-xs rounded ${"pending"===u.payment_status?"bg-yellow-100 text-yellow-800":"completed"===u.payment_status?"bg-green-100 text-green-800":"rejected"===u.payment_status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:"pending"===u.payment_status?"Pendiente":"completed"===u.payment_status?"Verificado":"rejected"===u.payment_status?"Rechazado":u.payment_status})})]})]}),(0,t.jsxs)("div",{className:"border-t border-gray-200 pt-4 mb-4",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-2",children:"Información del Cliente"}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Nombre:"}),(0,t.jsx)("p",{className:"font-medium",children:u.name})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Email:"}),(0,t.jsx)("p",{className:"font-medium",children:u.email})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Teléfono:"}),(0,t.jsx)("p",{className:"font-medium",children:u.phone})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Dirección:"}),(0,t.jsxs)("p",{className:"font-medium",children:[u.address,", ",u.city,", ",u.state," ",u.postal_code]})]})]})]}),(0,t.jsxs)("div",{className:"border-t border-gray-200 pt-4 mb-4",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-2",children:"Productos"}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,t.jsx)("thead",{className:"bg-gray-50",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Producto"}),(0,t.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Cantidad"}),(0,t.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Precio"}),(0,t.jsx)("th",{className:"px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Subtotal"})]})}),(0,t.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:u.items.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"px-4 py-2 whitespace-nowrap",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"h-10 w-10 flex-shrink-0",children:(0,t.jsx)("img",{className:"h-10 w-10 rounded object-cover",src:e.image,alt:e.product_name})}),(0,t.jsx)("div",{className:"ml-4",children:(0,t.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.product_name})})]})}),(0,t.jsx)("td",{className:"px-4 py-2 whitespace-nowrap text-sm text-gray-500",children:e.quantity}),(0,t.jsxs)("td",{className:"px-4 py-2 whitespace-nowrap text-sm text-gray-500",children:["$",e.price?parseFloat(e.price).toFixed(2):"0.00"]}),(0,t.jsxs)("td",{className:"px-4 py-2 whitespace-nowrap text-sm text-gray-500",children:["$",e.price?(parseFloat(e.price)*e.quantity).toFixed(2):"0.00"]})]},e.id))}),(0,t.jsx)("tfoot",{children:(0,t.jsxs)("tr",{className:"bg-gray-50",children:[(0,t.jsx)("td",{colSpan:"3",className:"px-4 py-2 text-right text-sm font-medium",children:"Total:"}),(0,t.jsxs)("td",{className:"px-4 py-2 whitespace-nowrap text-sm font-bold",children:["$",u.total_amount?parseFloat(u.total_amount).toFixed(2):"0.00"]})]})})]})})]}),(0,t.jsxs)("div",{className:"border-t border-gray-200 pt-4 mb-4",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-2",children:"Información de Pago"}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Método de Pago:"}),(0,t.jsx)("p",{className:"font-medium",children:"mercadopago"===u.payment_method?"Mercado Pago":"paypal"===u.payment_method?"PayPal":"Tarjeta"})]}),u.receipt&&(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Comprobante:"}),(0,t.jsxs)("button",{onClick:()=>T(u.receipt),className:"text-blue-500 hover:text-blue-700 flex items-center",children:[(0,t.jsx)(n.FiImage,{className:"mr-1"})," Ver comprobante"]})]})]})]}),(0,t.jsxs)("div",{className:"flex justify-end mt-6 space-x-3",children:[(0,t.jsx)("button",{onClick:()=>b(!1),className:"px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:"Cerrar"}),(0,t.jsxs)("button",{onClick:()=>L(u),className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center",children:[(0,t.jsx)(n.FiTruck,{className:"mr-1"})," Actualizar Estado"]}),"pending"===u.payment_status&&u.receipt&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{onClick:()=>D(u.id),className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700",children:"Aprobar Pago"}),(0,t.jsx)("button",{onClick:()=>_("")||f(!0),className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700",children:"Rechazar Pago"})]})]})]})}),y&&N&&(0,t.jsx)(o.default,{title:"Comprobante de Pago",onClose:()=>f(!1),children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)("img",{src:N.receipt_image,alt:"Comprobante de pago",className:"w-full max-h-96 object-contain rounded-md"})}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Fecha de Subida:"}),(0,t.jsx)("p",{className:"font-medium",children:new Date(N.upload_date).toLocaleString()})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-500",children:"Estado:"}),(0,t.jsx)("p",{className:"font-medium",children:(0,t.jsx)("span",{className:`px-2 py-1 text-xs rounded ${"pending"===N.verification_status?"bg-yellow-100 text-yellow-800":"verified"===N.verification_status?"bg-green-100 text-green-800":"rejected"===N.verification_status?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800"}`,children:"pending"===N.verification_status?"Pendiente":"verified"===N.verification_status?"Verificado":"rejected"===N.verification_status?"Rechazado":N.verification_status})})]})]}),"pending"===N.verification_status&&(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Notas de Verificación:"}),(0,t.jsx)("textarea",{value:k,onChange:e=>_(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",rows:"3",placeholder:"Ingresa notas sobre la verificación o razón de rechazo..."})]}),(0,t.jsxs)("div",{className:"flex justify-end mt-4 space-x-3",children:[(0,t.jsx)("button",{onClick:()=>f(!1),className:"px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:"Cerrar"}),"pending"===N.verification_status&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",{onClick:()=>D(N.order_id),className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 flex items-center",children:[(0,t.jsx)(n.FiCheck,{className:"mr-1"})," Aprobar Pago"]}),(0,t.jsxs)("button",{onClick:()=>I(N.order_id),className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 flex items-center",children:[(0,t.jsx)(n.FiX,{className:"mr-1"})," Rechazar Pago"]})]}),(0,t.jsxs)("a",{href:N.receipt_image,download:!0,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center",children:[(0,t.jsx)(n.FiDownload,{className:"mr-1"})," Descargar"]})]})]})}),j&&u&&(0,t.jsx)(o.default,{title:"Actualizar Estado de la Orden",onClose:()=>v(!1),children:(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Orden ID:"})," ",u.id]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Cliente:"})," ",u.name]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Estado actual:"})," ",V(u.status)]})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Nuevo Estado:"}),(0,t.jsxs)("select",{value:F,onChange:e=>P(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",children:[(0,t.jsx)("option",{value:"pending",children:"Pendiente"}),(0,t.jsx)("option",{value:"processing",children:"Procesando"}),(0,t.jsx)("option",{value:"shipped",children:"Enviado"}),(0,t.jsx)("option",{value:"in_transit",children:"En camino"}),(0,t.jsx)("option",{value:"delivered",children:"Entregado"}),(0,t.jsx)("option",{value:"cancelled",children:"Cancelado"})]})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Notas (opcional):"}),(0,t.jsx)("textarea",{value:C,onChange:e=>E(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",rows:"3",placeholder:"Ingresa notas sobre el cambio de estado..."})]}),(0,t.jsxs)("div",{className:"flex justify-end mt-4 space-x-3",children:[(0,t.jsx)("button",{onClick:()=>v(!1),className:"px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50",children:"Cancelar"}),(0,t.jsx)("button",{onClick:()=>O(u.id,F),className:"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700",children:"Actualizar Estado"})]})]})})]})}])},22648,(e,t,a)=>{let s="/admin/orders";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(80142)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})},60357,e=>{e.v(t=>Promise.all(["static/chunks/15iwp8io~zw56.js"].map(t=>e.l(t))).then(()=>t(66597)))},31469,e=>{e.v(t=>Promise.all(["static/chunks/025j~jt76k4jn.js"].map(t=>e.l(t))).then(()=>t(48996)))}]);