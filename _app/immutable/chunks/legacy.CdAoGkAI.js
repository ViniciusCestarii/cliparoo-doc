import{a8 as d,a9 as l,V as g,u as b,aa as i,e as p,ab as m,ac as v,o as h,ad as k}from"./runtime.DQU9NMDr.js";function x(t=!1){const a=g,e=a.l.u;if(!e)return;let f=()=>v(a.s);if(t){let n=0,s={};const _=h(()=>{let c=!1;const r=a.s;for(const o in r)r[o]!==s[o]&&(s[o]=r[o],c=!0);return c&&n++,n});f=()=>p(_)}e.b.length&&d(()=>{u(a,f),i(e.b)}),l(()=>{const n=b(()=>e.m.map(m));return()=>{for(const s of n)typeof s=="function"&&s()}}),e.a.length&&l(()=>{u(a,f),i(e.a)})}function u(t,a){if(t.l.s)for(const e of t.l.s)p(e);a()}k();export{x as i};