import{aj as L,ay as p,c as v,ar as k,k as m,az as O,F as x,a6 as T,a2 as E,aA as B,aB as D,K as h,W as s,T as V,M as W}from"./runtime.DrDxZ_7i.js";function J(e,t){if(t){const r=document.body;e.autofocus=!0,L(()=>{document.activeElement===r&&e.focus()})}}let S=!1;function j(){S||(S=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function A(e){var t=k,r=m;p(null),v(null);try{return e()}finally{p(t),v(r)}}function Q(e,t,r,o=r){e.addEventListener(t,()=>A(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o()}:e.__on_r=o,j()}const C=new Set,R=new Set;function X(e,t,r,o){function n(a){if(o.capture||F.call(t,a),!a.cancelBubble)return A(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?L(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Y(e){for(var t=0;t<e.length;t++)C.add(e[t]);for(var r of R)r(e)}function F(e){var w;var t=this,r=t.ownerDocument,o=e.type,n=((w=e.composedPath)==null?void 0:w.call(e))||[],a=n[0]||e.target,i=0,f=e.__root;if(f){var c=n.indexOf(f);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var g=n.indexOf(t);if(g===-1)return;c<=g&&(i=c)}if(a=n[i]||e.target,a!==t){O(e,"currentTarget",{configurable:!0,get(){return a||r}});var M=k,N=m;p(null),v(null);try{for(var l,b=[];a!==null;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+o];if(_!==void 0&&!a.disabled)if(x(_)){var[P,...I]=_;P.apply(a,[e,...I])}else _.call(a,e)}catch(d){l?b.push(d):l=d}if(e.cancelBubble||y===t||y===null)break;a=y}if(l){for(let d of b)queueMicrotask(()=>{throw d});throw l}}finally{e.__root=t,delete e.currentTarget,p(M),v(N)}}}function U(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=m;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Z(e,t){var r=(t&B)!==0,o=(t&D)!==0,n,a=!e.startsWith("<!>");return()=>{if(h)return u(s,null),s;n===void 0&&(n=U(a?e:"<!>"+e),r||(n=T(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=T(i),c=i.lastChild;u(f,c)}else u(i,i);return i}}function $(e=""){if(!h){var t=E(e+"");return u(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=E()),V(r)),u(r,r),r}function ee(){if(h)return u(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=E();return e.append(t,r),u(t,r),e}function te(e,t){if(h){m.nodes_end=s,W();return}e!==null&&e.before(t)}function re(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const q=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ne(e){return q.includes(e)}const z={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function ae(e){return e=e.toLowerCase(),z[e]??e}const G=["touchstart","touchmove"];function oe(e){return G.includes(e)}const H="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(H);export{te as a,C as b,u as c,Y as d,j as e,re as f,X as g,F as h,oe as i,J as j,ne as k,ee as l,$ as m,ae as n,Q as o,R as r,Z as t};
