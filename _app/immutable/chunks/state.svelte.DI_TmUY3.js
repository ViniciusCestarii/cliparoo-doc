var ye=Object.defineProperty;var re=e=>{throw TypeError(e)};var ve=(e,r,t)=>r in e?ye(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var te=(e,r,t)=>ve(e,typeof r!="symbol"?r+"":r,t),xe=(e,r,t)=>r.has(e)||re("Cannot "+t);var W=(e,r,t)=>(xe(e,r,"read from private field"),t?t.call(e):r.get(e)),oe=(e,r,t)=>r.has(e)?re("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t);import{Q as we,ad as _e,a9 as ke,aa as Ce,ae as Se,V,_ as ze,w as se,af as Ae,ag as Me,ah as Ge,ai as Re,b as Ie,a as j,r as Ne,aj as Te}from"./runtime.CrnGSP9w.js";import{e as Ee,f as Pe,g as ne,d as je,j as Le,n as Oe,k as $e}from"./disclose-version.CiOYprPi.js";import{p as We}from"./proxy.C6hJRSbl.js";function Gr(e,r,...t){var o=e,a=Ce,s;we(()=>{a!==(a=r())&&(s&&(Se(s),s=null),s=ke(()=>a(o,...t)))},_e),V&&(o=ze)}function Rr(e){if(V){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;K(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var a=e.checked;K(e,"checked",null),e.checked=a}}};e.__on_r=t,Ae(t),Ee()}}function Ir(e,r){var t=e.__attributes??(e.__attributes={});t.checked!==(t.checked=r)&&(e.checked=r)}function K(e,r,t,o){var a=e.__attributes??(e.__attributes={});V&&(a[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||a[r]!==(a[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ge]=t),t==null?e.removeAttribute(r):typeof t!="string"&&ce(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function Nr(e,r,t,o,a=!1,s=!1,l=!1){var n=r||{},b=e.tagName==="OPTION";for(var h in r)h in t||(t[h]=null);var m=ce(e),x=e.__attributes??(e.__attributes={}),y=[];for(const c in t){let d=t[c];if(b&&c==="value"&&d==null){e.value=e.__value="",n[c]=d;continue}var _=n[c];if(d!==_){n[c]=d;var w=c[0]+c[1];if(w!=="$$"){if(w==="on"){const k={},C="$$"+c;let v=c.slice(2);var g=$e(v);if(Pe(v)&&(v=v.slice(0,-7),k.capture=!0),!g&&_){if(d!=null)continue;e.removeEventListener(v,n[C],k),n[C]=null}if(d!=null)if(g)e[`__${v}`]=d,je([v]);else{let N=function(L){n[c].call(this,L)};r?n[C]=ne(v,e,N,k):y.push([c,d,()=>n[C]=ne(v,e,N,k)])}}else if(c==="style"&&d!=null)e.style.cssText=d+"";else if(c==="autofocus")Le(e,!!d);else if(c==="__value"||c==="value"&&d!=null)e.value=e[c]=e.__value=d;else{var u=c;a||(u=Oe(u)),d==null&&!s?(x[c]=null,e.removeAttribute(c)):m.includes(u)&&(s||typeof d!="string")?e[u]=d:typeof d!="function"&&(V&&(u==="src"||u==="href"||u==="srcset")||K(e,u,d))}c==="style"&&"__styles"in e&&(e.__styles={})}}}return r||Re(()=>{if(e.isConnected)for(const[c,d,k]of y)n[c]===d&&k()}),n}var ae=new Map;function ce(e){var r=ae.get(e.nodeName);if(r)return r;ae.set(e.nodeName,r=[]);for(var t,o=se(e),a=Element.prototype;a!==o;){t=Me(o);for(var s in t)t[s].set&&r.push(s);o=se(o)}return r}function Tr(e){var r=Ne(0);return function(){return arguments.length===1?(Ie(r,j(r)+1),arguments[0]):(j(r),e())}}function de(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=de(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ve(){for(var e,r,t=0,o="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=de(e))&&(o&&(o+=" "),o+=r);return o}const Q="-",Be=e=>{const r=Ue(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const n=l.split(Q);return n[0]===""&&n.length!==1&&n.shift(),ue(n,r)||Fe(l)},getConflictingClassGroupIds:(l,n)=>{const b=t[l]||[];return n&&o[l]?[...b,...o[l]]:b}}},ue=(e,r)=>{var l;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?ue(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const s=e.join(Q);return(l=r.validators.find(({validator:n})=>n(s)))==null?void 0:l.classGroupId},ie=/^\[(.+)\]$/,Fe=e=>{if(ie.test(e)){const r=ie.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Ue=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Je(Object.entries(e.classGroups),t).forEach(([s,l])=>{Y(l,o,s,r)}),o},Y=(e,r,t,o)=>{e.forEach(a=>{if(typeof a=="string"){const s=a===""?r:le(r,a);s.classGroupId=t;return}if(typeof a=="function"){if(qe(a)){Y(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([s,l])=>{Y(l,le(r,s),t,o)})})},le=(e,r)=>{let t=e;return r.split(Q).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},qe=e=>e.isThemeGetter,Je=(e,r)=>r?e.map(([t,o])=>{const a=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([l,n])=>[r+l,n])):s);return[t,a]}):e,Ke=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const a=(s,l)=>{t.set(s,l),r++,r>e&&(r=0,o=t,t=new Map)};return{get(s){let l=t.get(s);if(l!==void 0)return l;if((l=o.get(s))!==void 0)return a(s,l),l},set(s,l){t.has(s)?t.set(s,l):a(s,l)}}},pe="!",Ye=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],s=r.length,l=n=>{const b=[];let h=0,m=0,x;for(let u=0;u<n.length;u++){let c=n[u];if(h===0){if(c===a&&(o||n.slice(u,u+s)===r)){b.push(n.slice(m,u)),m=u+s;continue}if(c==="/"){x=u;continue}}c==="["?h++:c==="]"&&h--}const y=b.length===0?n:n.substring(m),_=y.startsWith(pe),w=_?y.substring(1):y,g=x&&x>m?x-m:void 0;return{modifiers:b,hasImportantModifier:_,baseClassName:w,maybePostfixModifierPosition:g}};return t?n=>t({className:n,parseClassName:l}):l},Qe=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Xe=e=>({cache:Ke(e.cacheSize),parseClassName:Ye(e),...Be(e)}),Ze=/\s+/,He=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,s=[],l=e.trim().split(Ze);let n="";for(let b=l.length-1;b>=0;b-=1){const h=l[b],{modifiers:m,hasImportantModifier:x,baseClassName:y,maybePostfixModifierPosition:_}=t(h);let w=!!_,g=o(w?y.substring(0,_):y);if(!g){if(!w){n=h+(n.length>0?" "+n:n);continue}if(g=o(y),!g){n=h+(n.length>0?" "+n:n);continue}w=!1}const u=Qe(m).join(":"),c=x?u+pe:u,d=c+g;if(s.includes(d))continue;s.push(d);const k=a(g,w);for(let C=0;C<k.length;++C){const v=k[C];s.push(c+v)}n=h+(n.length>0?" "+n:n)}return n};function De(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=fe(r))&&(o&&(o+=" "),o+=t);return o}const fe=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=fe(e[o]))&&(t&&(t+=" "),t+=r);return t};function er(e,...r){let t,o,a,s=l;function l(b){const h=r.reduce((m,x)=>x(m),e());return t=Xe(h),o=t.cache.get,a=t.cache.set,s=n,n(b)}function n(b){const h=o(b);if(h)return h;const m=He(b,t);return a(b,m),m}return function(){return s(De.apply(null,arguments))}}const p=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},be=/^\[(?:([a-z-]+):)?(.+)\]$/i,rr=/^\d+\/\d+$/,tr=new Set(["px","full","screen"]),or=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,sr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ar=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ir=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>G(e)||tr.has(e)||rr.test(e),A=e=>I(e,"length",gr),G=e=>!!e&&!Number.isNaN(Number(e)),J=e=>I(e,"number",G),E=e=>!!e&&Number.isInteger(Number(e)),lr=e=>e.endsWith("%")&&G(e.slice(0,-1)),i=e=>be.test(e),M=e=>or.test(e),cr=new Set(["length","size","percentage"]),dr=e=>I(e,cr,ge),ur=e=>I(e,"position",ge),pr=new Set(["image","url"]),fr=e=>I(e,pr,mr),br=e=>I(e,"",hr),P=()=>!0,I=(e,r,t)=>{const o=be.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},gr=e=>sr.test(e)&&!nr.test(e),ge=()=>!1,hr=e=>ar.test(e),mr=e=>ir.test(e),yr=()=>{const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),a=p("borderColor"),s=p("borderRadius"),l=p("borderSpacing"),n=p("borderWidth"),b=p("contrast"),h=p("grayscale"),m=p("hueRotate"),x=p("invert"),y=p("gap"),_=p("gradientColorStops"),w=p("gradientColorStopPositions"),g=p("inset"),u=p("margin"),c=p("opacity"),d=p("padding"),k=p("saturate"),C=p("scale"),v=p("sepia"),N=p("skew"),L=p("space"),X=p("translate"),B=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",i,r],f=()=>[i,r],Z=()=>["",z,A],O=()=>["auto",G,i],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",i],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>[G,i];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[z,A],blur:["none","",M,i],brightness:S(),borderColor:[e],borderRadius:["none","","full",M,i],borderSpacing:f(),borderWidth:Z(),contrast:S(),grayscale:T(),hueRotate:S(),invert:T(),gap:f(),gradientColorStops:[e],gradientColorStopPositions:[lr,A],inset:U(),margin:U(),opacity:S(),padding:f(),saturate:S(),scale:S(),sepia:T(),skew:S(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),i]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E,i]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",E,i]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",E,i]},i]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[E,i]},i]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[d]}],px:[{px:[d]}],py:[{py:[d]}],ps:[{ps:[d]}],pe:[{pe:[d]}],pt:[{pt:[d]}],pr:[{pr:[d]}],pb:[{pb:[d]}],pl:[{pl:[d]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,r]}],"min-w":[{"min-w":[i,r,"min","max","fit"]}],"max-w":[{"max-w":[i,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[i,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",J]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",G,J]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[c]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,A]}],"underline-offset":[{"underline-offset":["auto",z,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[c]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),ur]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",dr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},fr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-s":[{"border-s":[n]}],"border-w-e":[{"border-e":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[c]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[c]}],"divide-style":[{divide:$()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[z,i]}],"outline-w":[{outline:[z,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[c]}],"ring-offset-w":[{"ring-offset":[z,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,br]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[c]}],"mix-blend":[{"mix-blend":[...D(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[b]}],"drop-shadow":[{"drop-shadow":["","none",M,i]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[x]}],saturate:[{saturate:[k]}],sepia:[{sepia:[v]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[b]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[c]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[v]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:S()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:S()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[E,i]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,A,J]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vr=er(yr);function Er(...e){return vr(Ve(e))}function xr(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const he="cliparooDocState";var R;class wr{constructor(){oe(this,R,Te(We(kr())));te(this,"_saveState",()=>Cr(j(W(this,R))))}get theme(){return j(W(this,R)).theme}set theme(r){j(W(this,R)).theme=r,me(r),this._saveState()}}R=new WeakMap;const _r={theme:xr()},kr=()=>{const e=localStorage.getItem(he),r=e?JSON.parse(e):_r;return me(r.theme),r},Cr=e=>{localStorage.setItem(he,JSON.stringify(e))},me=e=>{document.documentElement.setAttribute("data-theme",e)},Pr=new wr;export{Rr as a,K as b,Gr as c,Pr as d,Nr as e,Er as f,Tr as r,Ir as s};
