import{S as u,i as v,s as y,k as m,q as x,l as f,m as p,r as _,h as n,n as d,b,G as h,H as g,I as E,o as k}from"../chunks/index.cdd841bc.js";import{p as $}from"../chunks/stores.cc2db92c.js";import{b as V}from"../chunks/publicVar.7d3cef13.js";import{g as w}from"../chunks/navigation.d517bab9.js";import{t as I}from"../chunks/stores.02b74adf.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.60a3931d.js";function M(c){let t,s,a,r;return{c(){t=m("div"),s=m("form"),a=m("h1"),r=x("Verifying email..."),this.h()},l(o){t=f(o,"DIV",{class:!0});var e=p(t);s=f(e,"FORM",{class:!0});var l=p(s);a=f(l,"H1",{class:!0});var i=p(a);r=_(i,"Verifying email..."),i.forEach(n),l.forEach(n),e.forEach(n),this.h()},h(){d(a,"class","btn text-center text-3xl font-bold"),d(s,"class","card p-4 flex flex-col gap-3 w-80"),d(t,"class","container flex justify-center items-center h-screen")},m(o,e){b(o,t,e),h(t,s),h(s,a),h(a,r)},p:g,i:g,o:g,d(o){o&&n(t)}}}function S(c,t,s){let a;E(c,$,e=>s(0,a=e));const r=a.params.token;return console.log(r),k(async()=>{try{const e=await fetch(`${V}/api/user/verify/${r}`);if(e.ok){const l=await e.json(),i={background:"bg-primary-500",message:"Email verified successfully"};I.trigger(i),w("/login")}else console.log("Email verification failed:",e.statusText)}catch(e){console.error("Error verifying email:",e)}}),[]}class C extends u{constructor(t){super(),v(this,t,S,M,y,{})}}export{C as component};
