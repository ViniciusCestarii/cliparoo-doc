var $e=Object.defineProperty;var de=e=>{throw TypeError(e)};var je=(e,r,t)=>r in e?$e(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var ue=(e,r,t)=>je(e,typeof r!="symbol"?r+"":r,t),Ve=(e,r,t)=>r.has(e)||de("Cannot "+t);var X=(e,r,t)=>(Ve(e,r,"read from private field"),t?t.call(e):r.get(e)),fe=(e,r,t)=>r.has(e)?de("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t);import{U as A,E as Z,Q as We,F as Be,a2 as _e,a1 as Fe,N as ke,a6 as Ue,a7 as pe,D as ee,G as V,ag as Q,a3 as Ce,T as ne,a4 as He,ah as Ae,w as ge,ai as ae,aj as be,ak as ie,al as qe,M as Ye,am as Je,an as Se,ao as ze,z as De,I as Ke,ap as Xe,aq as Qe,v as Ze,Y as te,ar as er,A as rr,a5 as tr,as as or,at as sr,au as nr,a0 as he,av as ar,h as ir,e as D,af as lr}from"./runtime.DQU9NMDr.js";import{l as cr,m as dr,n as me,k as ur,o as fr,p as pr,q as gr}from"./disclose-version.YydW0z3b.js";import{p as br}from"./if.B-s68eOv.js";function lt(e,r){return r}function hr(e,r,t,o){for(var n=[],s=r.length,i=0;i<s;i++)qe(r[i].e,n,!0);var a=s>0&&n.length===0&&t!==null;if(a){var v=t.parentNode;Ye(v),v.append(t),o.clear(),G(e,r[0].prev,r[s-1].next)}Je(n,()=>{for(var y=0;y<s;y++){var h=r[y];a||(o.delete(h.k),G(e,h.prev,h.next)),Se(h.e,!a)}})}function ct(e,r,t,o,n,s=null){var i=e,a={flags:r,items:new Map,first:null},v=(r&ze)!==0;if(v){var y=e;i=A?Z(De(y)):y.appendChild(We())}A&&Be();var h=null,C=!1;_e(()=>{var c=t(),m=Fe(c)?c:c==null?[]:ke(c),b=m.length;if(C&&b===0)return;C=b===0;let x=!1;if(A){var u=i.data===Ue;u!==(b===0)&&(i=pe(),Z(i),ee(!1),x=!0)}if(A){for(var l=null,d,_=0;_<b;_++){if(V.nodeType===8&&V.data===Ke){i=V,x=!0,ee(!1);break}var f=m[_],g=o(f,_);d=Ee(V,a,l,null,f,g,_,n,r),a.items.set(g,d),l=d}b>0&&Z(pe())}if(!A){var z=Xe;mr(m,a,i,n,r,(z.f&Q)!==0,o)}s!==null&&(b===0?h?Ce(h):h=ne(()=>s(i)):h!==null&&He(h,()=>{h=null})),x&&ee(!0),t()}),A&&(i=V)}function mr(e,r,t,o,n,s,i){var L,U,O,H;var a=(n&Qe)!==0,v=(n&(ae|ie))!==0,y=e.length,h=r.items,C=r.first,c=C,m,b=null,x,u=[],l=[],d,_,f,g;if(a)for(g=0;g<y;g+=1)d=e[g],_=i(d,g),f=h.get(_),f!==void 0&&((L=f.a)==null||L.measure(),(x??(x=new Set)).add(f));for(g=0;g<y;g+=1){if(d=e[g],_=i(d,g),f=h.get(_),f===void 0){var z=c?c.e.nodes_start:t;b=Ee(z,r,b,b===null?r.first:b.next,d,_,g,o,n),h.set(_,b),u=[],l=[],c=b.next;continue}if(v&&vr(f,d,g,n),f.e.f&Q&&(Ce(f.e),a&&((U=f.a)==null||U.unfix(),(x??(x=new Set)).delete(f))),f!==c){if(m!==void 0&&m.has(f)){if(u.length<l.length){var E=l[0],S;b=E.prev;var $=u[0],P=u[u.length-1];for(S=0;S<u.length;S+=1)ve(u[S],E,t);for(S=0;S<l.length;S+=1)m.delete(l[S]);G(r,$.prev,P.next),G(r,b,$),G(r,P,E),c=E,b=P,g-=1,u=[],l=[]}else m.delete(f),ve(f,c,t),G(r,f.prev,f.next),G(r,f,b===null?r.first:b.next),G(r,b,f),b=f;continue}for(u=[],l=[];c!==null&&c.k!==_;)(s||!(c.e.f&Q))&&(m??(m=new Set)).add(c),l.push(c),c=c.next;if(c===null)continue;f=c}u.push(f),b=f,c=f.next}if(c!==null||m!==void 0){for(var N=m===void 0?[]:ke(m);c!==null;)(s||!(c.e.f&Q))&&N.push(c),c=c.next;var w=N.length;if(w>0){var K=n&ze&&y===0?t:null;if(a){for(g=0;g<w;g+=1)(O=N[g].a)==null||O.measure();for(g=0;g<w;g+=1)(H=N[g].a)==null||H.fix()}hr(r,N,K,h)}}a&&Ae(()=>{var j;if(x!==void 0)for(f of x)(j=f.a)==null||j.apply()}),ge.first=r.first&&r.first.e,ge.last=b&&b.e}function vr(e,r,t,o){o&ae&&be(e.v,r),o&ie?be(e.i,t):e.i=t}function Ee(e,r,t,o,n,s,i,a,v){var y=(v&ae)!==0,h=(v&er)===0,C=y?h?Ze(n):te(n):n,c=v&ie?te(i):i,m={i:c,v:C,k:s,a:null,e:null,prev:t,next:o};try{return m.e=ne(()=>a(e,C,c),A),m.e.prev=t&&t.e,m.e.next=o&&o.e,t===null?r.first=m:(t.next=m,t.e.next=m.e),o!==null&&(o.prev=m,o.e.prev=m.e),m}finally{}}function ve(e,r,t){for(var o=e.next?e.next.e.nodes_start:t,n=r?r.e.nodes_start:t,s=e.e.nodes_start;s!==o;){var i=rr(s);n.before(s),s=i}}function G(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function dt(e,r,...t){var o=e,n=or,s;_e(()=>{n!==(n=r())&&(s&&(Se(s),s=null),s=ne(()=>n(o,...t)))},tr),A&&(o=V)}function ut(e){if(A){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;oe(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var n=e.checked;oe(e,"checked",null),e.checked=n}}};e.__on_r=t,sr(t),cr()}}function ft(e,r){var t=e.__attributes??(e.__attributes={});t.checked!==(t.checked=r)&&(e.checked=r)}function oe(e,r,t,o){var n=e.__attributes??(e.__attributes={});A&&(n[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||n[r]!==(n[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[nr]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Ne(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function pt(e,r,t,o,n=!1,s=!1,i=!1){var a=r||{},v=e.tagName==="OPTION";for(var y in r)y in t||(t[y]=null);var h=Ne(e),C=e.__attributes??(e.__attributes={}),c=[];for(const l in t){let d=t[l];if(v&&l==="value"&&d==null){e.value=e.__value="",a[l]=d;continue}var m=a[l];if(d!==m){a[l]=d;var b=l[0]+l[1];if(b!=="$$"){if(b==="on"){const _={},f="$$"+l;let g=l.slice(2);var x=gr(g);if(dr(g)&&(g=g.slice(0,-7),_.capture=!0),!x&&m){if(d!=null)continue;e.removeEventListener(g,a[f],_),a[f]=null}if(d!=null)if(x)e[`__${g}`]=d,ur([g]);else{let z=function(E){a[l].call(this,E)};r?a[f]=me(g,e,z,_):c.push([l,d,()=>a[f]=me(g,e,z,_)])}}else if(l==="style"&&d!=null)e.style.cssText=d+"";else if(l==="autofocus")fr(e,!!d);else if(l==="__value"||l==="value"&&d!=null)e.value=e[l]=e.__value=d;else{var u=l;n||(u=pr(u)),d==null&&!s?(C[l]=null,e.removeAttribute(l)):h.includes(u)&&(s||typeof d!="string")?e[u]=d:typeof d!="function"&&(A&&(u==="src"||u==="href"||u==="srcset")||oe(e,u,d))}l==="style"&&"__styles"in e&&(e.__styles={})}}}return r||Ae(()=>{if(e.isConnected)for(const[l,d,_]of c)a[l]===d&&_()}),a}var ye=new Map;function Ne(e){var r=ye.get(e.nodeName);if(r)return r;ye.set(e.nodeName,r=[]);for(var t,o=he(e),n=Element.prototype;n!==o;){t=ar(o);for(var s in t)t[s].set&&r.push(s);o=he(o)}return r}function gt(e,r){var t=e.__className,o=yr(r);A&&e.className===o?e.__className=o:(t!==o||A&&e.className!==o)&&(r==null?e.removeAttribute("class"):e.className=o,e.__className=o)}function yr(e){return e??""}function bt(e){var r=te(0);return function(){return arguments.length===1?(ir(r,D(r)+1),arguments[0]):(D(r),e())}}function Me(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(t=Me(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function xr(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=Me(e))&&(o&&(o+=" "),o+=r);return o}const le="-",wr=e=>{const r=kr(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const a=i.split(le);return a[0]===""&&a.length!==1&&a.shift(),Te(a,r)||_r(i)},getConflictingClassGroupIds:(i,a)=>{const v=t[i]||[];return a&&o[i]?[...v,...o[i]]:v}}},Te=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),n=o?Te(e.slice(1),o):void 0;if(n)return n;if(r.validators.length===0)return;const s=e.join(le);return(i=r.validators.find(({validator:a})=>a(s)))==null?void 0:i.classGroupId},xe=/^\[(.+)\]$/,_r=e=>{if(xe.test(e)){const r=xe.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},kr=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ar(Object.entries(e.classGroups),t).forEach(([s,i])=>{se(i,o,s,r)}),o},se=(e,r,t,o)=>{e.forEach(n=>{if(typeof n=="string"){const s=n===""?r:we(r,n);s.classGroupId=t;return}if(typeof n=="function"){if(Cr(n)){se(n(o),r,t,o);return}r.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(([s,i])=>{se(i,we(r,s),t,o)})})},we=(e,r)=>{let t=e;return r.split(le).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Cr=e=>e.isThemeGetter,Ar=(e,r)=>r?e.map(([t,o])=>{const n=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,a])=>[r+i,a])):s);return[t,n]}):e,Sr=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const n=(s,i)=>{t.set(s,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(s){let i=t.get(s);if(i!==void 0)return i;if((i=o.get(s))!==void 0)return n(s,i),i},set(s,i){t.has(s)?t.set(s,i):n(s,i)}}},Ie="!",zr=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,n=r[0],s=r.length,i=a=>{const v=[];let y=0,h=0,C;for(let u=0;u<a.length;u++){let l=a[u];if(y===0){if(l===n&&(o||a.slice(u,u+s)===r)){v.push(a.slice(h,u)),h=u+s;continue}if(l==="/"){C=u;continue}}l==="["?y++:l==="]"&&y--}const c=v.length===0?a:a.substring(h),m=c.startsWith(Ie),b=m?c.substring(1):c,x=C&&C>h?C-h:void 0;return{modifiers:v,hasImportantModifier:m,baseClassName:b,maybePostfixModifierPosition:x}};return t?a=>t({className:a,parseClassName:i}):i},Er=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Nr=e=>({cache:Sr(e.cacheSize),parseClassName:zr(e),...wr(e)}),Mr=/\s+/,Tr=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,s=[],i=e.trim().split(Mr);let a="";for(let v=i.length-1;v>=0;v-=1){const y=i[v],{modifiers:h,hasImportantModifier:C,baseClassName:c,maybePostfixModifierPosition:m}=t(y);let b=!!m,x=o(b?c.substring(0,m):c);if(!x){if(!b){a=y+(a.length>0?" "+a:a);continue}if(x=o(c),!x){a=y+(a.length>0?" "+a:a);continue}b=!1}const u=Er(h).join(":"),l=C?u+Ie:u,d=l+x;if(s.includes(d))continue;s.push(d);const _=n(x,b);for(let f=0;f<_.length;++f){const g=_[f];s.push(l+g)}a=y+(a.length>0?" "+a:a)}return a};function Ir(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=Re(r))&&(o&&(o+=" "),o+=t);return o}const Re=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=Re(e[o]))&&(t&&(t+=" "),t+=r);return t};function Rr(e,...r){let t,o,n,s=i;function i(v){const y=r.reduce((h,C)=>C(h),e());return t=Nr(y),o=t.cache.get,n=t.cache.set,s=a,a(v)}function a(v){const y=o(v);if(y)return y;const h=Tr(v,t);return n(v,h),h}return function(){return s(Ir.apply(null,arguments))}}const k=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},Ge=/^\[(?:([a-z-]+):)?(.+)\]$/i,Gr=/^\d+\/\d+$/,Pr=new Set(["px","full","screen"]),Lr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Or=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$r=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,jr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,T=e=>W(e)||Pr.has(e)||Gr.test(e),I=e=>F(e,"length",Jr),W=e=>!!e&&!Number.isNaN(Number(e)),re=e=>F(e,"number",W),Y=e=>!!e&&Number.isInteger(Number(e)),Wr=e=>e.endsWith("%")&&W(e.slice(0,-1)),p=e=>Ge.test(e),R=e=>Lr.test(e),Br=new Set(["length","size","percentage"]),Fr=e=>F(e,Br,Pe),Ur=e=>F(e,"position",Pe),Hr=new Set(["image","url"]),qr=e=>F(e,Hr,Kr),Yr=e=>F(e,"",Dr),J=()=>!0,F=(e,r,t)=>{const o=Ge.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Jr=e=>Or.test(e)&&!$r.test(e),Pe=()=>!1,Dr=e=>jr.test(e),Kr=e=>Vr.test(e),Xr=()=>{const e=k("colors"),r=k("spacing"),t=k("blur"),o=k("brightness"),n=k("borderColor"),s=k("borderRadius"),i=k("borderSpacing"),a=k("borderWidth"),v=k("contrast"),y=k("grayscale"),h=k("hueRotate"),C=k("invert"),c=k("gap"),m=k("gradientColorStops"),b=k("gradientColorStopPositions"),x=k("inset"),u=k("margin"),l=k("opacity"),d=k("padding"),_=k("saturate"),f=k("scale"),g=k("sepia"),z=k("skew"),E=k("space"),S=k("translate"),$=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",p,r],w=()=>[p,r],K=()=>["",T,I],L=()=>["auto",W,p],U=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],j=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",p],ce=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[W,p];return{cacheSize:500,separator:":",theme:{colors:[J],spacing:[T,I],blur:["none","",R,p],brightness:M(),borderColor:[e],borderRadius:["none","","full",R,p],borderSpacing:w(),borderWidth:K(),contrast:M(),grayscale:q(),hueRotate:M(),invert:q(),gap:w(),gradientColorStops:[e],gradientColorStopPositions:[Wr,I],inset:N(),margin:N(),opacity:M(),padding:w(),saturate:M(),scale:M(),sepia:q(),skew:M(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",p]}],container:["container"],columns:[{columns:[R]}],"break-after":[{"break-after":ce()}],"break-before":[{"break-before":ce()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...U(),p]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Y,p]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",p]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Y,p]}],"grid-cols":[{"grid-cols":[J]}],"col-start-end":[{col:["auto",{span:["full",Y,p]},p]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[J]}],"row-start-end":[{row:["auto",{span:[Y,p]},p]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",p]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",p]}],gap:[{gap:[c]}],"gap-x":[{"gap-x":[c]}],"gap-y":[{"gap-y":[c]}],"justify-content":[{justify:["normal",...j()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...j(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...j(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[d]}],px:[{px:[d]}],py:[{py:[d]}],ps:[{ps:[d]}],pe:[{pe:[d]}],pt:[{pt:[d]}],pr:[{pr:[d]}],pb:[{pb:[d]}],pl:[{pl:[d]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",p,r]}],"min-w":[{"min-w":[p,r,"min","max","fit"]}],"max-w":[{"max-w":[p,r,"none","full","min","max","fit","prose",{screen:[R]},R]}],h:[{h:[p,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[p,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[p,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[p,r,"auto","min","max","fit"]}],"font-size":[{text:["base",R,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",re]}],"font-family":[{font:[J]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",p]}],"line-clamp":[{"line-clamp":["none",W,re]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",T,p]}],"list-image":[{"list-image":["none",p]}],"list-style-type":[{list:["none","disc","decimal",p]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[l]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[l]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",T,I]}],"underline-offset":[{"underline-offset":["auto",T,p]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",p]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",p]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[l]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...U(),Ur]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Fr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[l]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[l]}],"divide-style":[{divide:O()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[T,p]}],"outline-w":[{outline:[T,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[l]}],"ring-offset-w":[{"ring-offset":[T,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",R,Yr]}],"shadow-color":[{shadow:[J]}],opacity:[{opacity:[l]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[v]}],"drop-shadow":[{"drop-shadow":["","none",R,p]}],grayscale:[{grayscale:[y]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[C]}],saturate:[{saturate:[_]}],sepia:[{sepia:[g]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[v]}],"backdrop-grayscale":[{"backdrop-grayscale":[y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[C]}],"backdrop-opacity":[{"backdrop-opacity":[l]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[g]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",p]}],duration:[{duration:M()}],ease:[{ease:["linear","in","out","in-out",p]}],delay:[{delay:M()}],animate:[{animate:["none","spin","ping","pulse","bounce",p]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[f]}],"scale-x":[{"scale-x":[f]}],"scale-y":[{"scale-y":[f]}],rotate:[{rotate:[Y,p]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",p]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",p]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",p]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[T,I,re]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Qr=Rr(Xr);function ht(...e){return Qr(xr(e))}function Zr(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Le="cliparooDocState";var B;class et{constructor(){fe(this,B,lr(br(tt())));ue(this,"_saveState",()=>ot(D(X(this,B))))}get theme(){return D(X(this,B)).theme}set theme(r){D(X(this,B)).theme=r,Oe(r),this._saveState()}}B=new WeakMap;const rt={theme:Zr()},tt=()=>{const e=localStorage.getItem(Le),r=e?JSON.parse(e):rt;return Oe(r.theme),r},ot=e=>{localStorage.setItem(Le,JSON.stringify(e))},Oe=e=>{document.documentElement.setAttribute("data-theme",e)},mt=new et;export{ut as a,oe as b,gt as c,mt as d,ct as e,ht as f,dt as g,pt as h,lt as i,bt as r,ft as s};
