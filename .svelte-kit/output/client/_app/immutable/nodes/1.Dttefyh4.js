import{a as _,t as h}from"../chunks/disclose-version.CCLMpPl5.js";import{A as $,B as i,x,C as f,D as w,E as y,F as d,G as E,I as a,J as k,K as A,L as B,u as C,y as D,M as F,w as G,N as b,O as p,P as I}from"../chunks/runtime.D1ZXRthU.js";import{s as l}from"../chunks/render.DLYfWhte.js";import{s as J}from"../chunks/entry.D5plPocN.js";function K(){const s=x,e=s.l.u;e&&(e.b.length&&$(()=>{g(s),f(e.b)}),i(()=>{const t=w(()=>e.m.map(y));return()=>{for(const r of t)typeof r=="function"&&r()}}),e.a.length&&i(()=>{g(s),f(e.a)}))}function g(s){if(s.l.s)for(const e of s.l.s)d(e);E(s.s)}function L(s,e,t){if(s==null)return e(void 0),a;const r=s.subscribe(e,t);return r.unsubscribe?()=>r.unsubscribe():r}function M(s,e,t){const r=t[e]??(t[e]={store:null,source:A(void 0),unsubscribe:a});if(r.store!==s)if(r.unsubscribe(),r.store=s??null,s==null)r.source.v=void 0,r.unsubscribe=a;else{var u=!0;r.unsubscribe=L(s,n=>{u?r.source.v=n:B(r.source,n)}),u=!1}return d(r.source)}function N(){const s={};return k(()=>{for(var e in s)s[e].unsubscribe()}),s}const O=()=>{const s=J;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return O().page.subscribe(s)}};var S=h("<h1> </h1> <p> </p>",1);function Q(s,e){C(e,!1);const t=N(),r=()=>M(P,"$page",t);K();var u=S(),n=D(u),m=b(n);p(n);var o=I(n,2),v=b(o);p(o),F(()=>{var c;l(m,r().status),l(v,(c=r().error)==null?void 0:c.message)}),_(s,u),G()}export{Q as component};
