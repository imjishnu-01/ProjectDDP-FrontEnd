import{S as oe,i as ae,s as ce,k as g,q as C,a as P,l as b,m as y,r as H,h as f,c as j,n as v,p as de,b as R,G as a,aa as U,M,H as L,V as he,I as ue,e as X,o as me,u as z,ab as fe,X as ve,_ as ge}from"../chunks/index.cdd841bc.js";import{p as pe}from"../chunks/stores.cc2db92c.js";import{g as be}from"../chunks/navigation.d517bab9.js";import{m as W}from"../chunks/stores.5e681e6c.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.60a3931d.js";import{t as G}from"../chunks/stores.02b74adf.js";import{b as _e}from"../chunks/publicVar.7d3cef13.js";import{g as K}from"../chunks/cookies.28f49f6b.js";function ke(n){let e,r,l,t,i,s,u,o,c,_,T,d,p,h,w,E,x;return{c(){e=g("div"),r=g("form"),l=g("h2"),t=C("Send Invite"),i=P(),s=g("input"),u=P(),o=g("input"),c=P(),_=g("input"),T=P(),d=g("textarea"),p=P(),h=g("button"),w=C("Send Invite"),this.h()},l(N){e=b(N,"DIV",{class:!0});var S=y(e);r=b(S,"FORM",{class:!0});var V=y(r);l=b(V,"H2",{});var O=y(l);t=H(O,"Send Invite"),O.forEach(f),i=j(V),s=b(V,"INPUT",{class:!0,type:!0,placeholder:!0}),u=j(V),o=b(V,"INPUT",{class:!0,type:!0,placeholder:!0}),c=j(V),_=b(V,"INPUT",{class:!0,type:!0,placeholder:!0}),T=j(V),d=b(V,"TEXTAREA",{class:!0,rows:!0,placeholder:!0}),y(d).forEach(f),p=j(V),h=b(V,"BUTTON",{type:!0,class:!0,style:!0});var q=y(h);w=H(q,"Send Invite"),q.forEach(f),V.forEach(f),S.forEach(f),this.h()},h(){v(s,"class","input"),v(s,"type","text"),v(s,"placeholder","Company"),v(o,"class","input"),v(o,"type","text"),v(o,"placeholder","Role"),v(_,"class","input"),v(_,"type","text"),v(_,"placeholder","Jd Link (optional)"),v(d,"class","textarea"),v(d,"rows","8"),v(d,"placeholder","Message"),v(h,"type","button"),v(h,"class","btn bg-primary-500 ml-auto"),de(h,"width","10rem"),v(r,"class","card p-4 flex flex-col gap-3"),v(e,"class","container")},m(N,S){R(N,e,S),a(e,r),a(r,l),a(l,t),a(r,i),a(r,s),U(s,n[0]),a(r,u),a(r,o),U(o,n[1]),a(r,c),a(r,_),U(_,n[2]),a(r,T),a(r,d),U(d,n[3]),a(r,p),a(r,h),a(h,w),E||(x=[M(s,"input",n[5]),M(o,"input",n[6]),M(_,"input",n[7]),M(d,"input",n[8]),M(h,"click",n[4])],E=!0)},p(N,[S]){S&1&&s.value!==N[0]&&U(s,N[0]),S&2&&o.value!==N[1]&&U(o,N[1]),S&4&&_.value!==N[2]&&U(_,N[2]),S&8&&U(d,N[3])},i:L,o:L,d(N){N&&f(e),E=!1,he(x)}}}function ye(n,e,r){let l;ue(n,pe,E=>r(9,l=E));const t=K("userID"),i=K("token");let s=l.params.slug,u="",o="",c="",_="";const T=async()=>{try{const E=await fetch(`${_e}/api/invite`,{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({user_id:s,sender_id:t,company_name:u,role:o,jdLink:c,message:_})});if(E.ok){const x={background:"bg-primary-500",message:"Invitent sent sucseefully"};W.close(),G.trigger(x)}else{console.error("Error sending job invitation:",E.statusText);const x={background:"bg-surface-500",message:"Error sending job invitation. Please full required fields again."};W.close(),G.trigger(x)}}catch(E){console.error("Error sending job invitation:",E);const x={background:"bg-surface-500",message:"Error sending job invitation. Please try again."};W.close(),G.trigger(x)}};function d(){u=this.value,r(0,u)}function p(){o=this.value,r(1,o)}function h(){c=this.value,r(2,c)}function w(){_=this.value,r(3,_)}return[u,o,c,_,T,d,p,h,w]}class Ee extends oe{constructor(e){super(),ae(this,e,ye,ke,ce,{})}}function le(n,e,r){const l=n.slice();return l[6]=e[r],l}function re(n,e,r){const l=n.slice();return l[9]=e[r],l}function Ie(n){let e,r;return{c(){e=g("p"),r=C("Loading user details...")},l(l){e=b(l,"P",{});var t=y(e);r=H(t,"Loading user details..."),t.forEach(f)},m(l,t){R(l,e,t),a(e,r)},p:L,d(l){l&&f(e)}}}function we(n){let e,r,l,t=n[0].firstName+"",i,s,u=n[0].lastName+"",o,c,_,T,d,p,h,w,E,x,N,S,V,O,q,B=n[0].user_skills.split(","),D=[];for(let m=0;m<B.length;m+=1)D[m]=se(re(n,B,m));function Q(m,I){return m[0].total_years_of_experience||m[0].user_companies?Se:Ne}let J=Q(n),F=J(n);return{c(){e=g("div"),r=g("div"),l=g("h1"),i=C(t),s=P(),o=C(u),c=P(),_=g("button"),T=C("Send Invite"),d=P(),p=g("hr"),h=P(),w=g("div"),E=g("h2"),x=C("Skills"),N=P(),S=g("div");for(let m=0;m<D.length;m+=1)D[m].c();V=P(),F.c(),this.h()},l(m){e=b(m,"DIV",{class:!0});var I=y(e);r=b(I,"DIV",{class:!0});var k=y(r);l=b(k,"H1",{class:!0});var A=y(l);i=H(A,t),s=j(A),o=H(A,u),A.forEach(f),c=j(k),_=b(k,"BUTTON",{class:!0});var Z=y(_);T=H(Z,"Send Invite"),Z.forEach(f),k.forEach(f),d=j(I),p=b(I,"HR",{}),h=j(I),w=b(I,"DIV",{class:!0});var $=y(w);E=b($,"H2",{});var ee=y(E);x=H(ee,"Skills"),ee.forEach(f),$.forEach(f),N=j(I),S=b(I,"DIV",{class:!0});var te=y(S);for(let Y=0;Y<D.length;Y+=1)D[Y].l(te);te.forEach(f),V=j(I),F.l(I),I.forEach(f),this.h()},h(){v(l,"class","text-xl font-bold"),v(_,"class","btn bg-secondary-500"),v(r,"class","flex items-center justify-between"),v(w,"class","flex items-center justify-between"),v(S,"class","grid grid-cols-1 md:grid-cols-3 gap-4"),v(e,"class","container h-full mx-auto flex gap-8 flex flex-col")},m(m,I){R(m,e,I),a(e,r),a(r,l),a(l,i),a(l,s),a(l,o),a(r,c),a(r,_),a(_,T),a(e,d),a(e,p),a(e,h),a(e,w),a(w,E),a(E,x),a(e,N),a(e,S);for(let k=0;k<D.length;k+=1)D[k]&&D[k].m(S,null);a(e,V),F.m(e,null),O||(q=M(_,"click",n[3]),O=!0)},p(m,I){if(I&1&&t!==(t=m[0].firstName+"")&&z(i,t),I&1&&u!==(u=m[0].lastName+"")&&z(o,u),I&1){B=m[0].user_skills.split(",");let k;for(k=0;k<B.length;k+=1){const A=re(m,B,k);D[k]?D[k].p(A,I):(D[k]=se(A),D[k].c(),D[k].m(S,null))}for(;k<D.length;k+=1)D[k].d(1);D.length=B.length}J===(J=Q(m))&&F?F.p(m,I):(F.d(1),F=J(m),F&&(F.c(),F.m(e,null)))},d(m){m&&f(e),fe(D,m),F.d(),O=!1,q()}}}function se(n){let e,r,l=n[9].split("|")[0]+"",t,i;return{c(){e=g("div"),r=g("div"),t=C(l),i=P(),this.h()},l(s){e=b(s,"DIV",{class:!0});var u=y(e);r=b(u,"DIV",{});var o=y(r);t=H(o,l),o.forEach(f),i=j(u),u.forEach(f),this.h()},h(){v(e,"class","card p-4 bg-primary-warning flex flex-col gap-10 relative")},m(s,u){R(s,e,u),a(e,r),a(r,t),a(e,i)},p(s,u){u&1&&l!==(l=s[9].split("|")[0]+"")&&z(t,l)},d(s){s&&f(e)}}}function Ne(n){let e,r;return{c(){e=g("p"),r=C("No work experience available.")},l(l){e=b(l,"P",{});var t=y(e);r=H(t,"No work experience available."),t.forEach(f)},m(l,t){R(l,e,t),a(e,r)},p:L,d(l){l&&f(e)}}}function Se(n){let e,r,l,t=(n[0].total_years_of_experience||0)+"",i,s,u,o,c;function _(p,h){return h&1&&(c=null),c==null&&(c=!!(p[0].user_companies&&p[0].user_companies.trim()!=="")),c?Te:De}let T=_(n,-1),d=T(n);return{c(){e=g("div"),r=g("h2"),l=C("Work Experience - "),i=C(t),s=C(" Years"),u=P(),o=g("div"),d.c(),this.h()},l(p){e=b(p,"DIV",{class:!0});var h=y(e);r=b(h,"H2",{});var w=y(r);l=H(w,"Work Experience - "),i=H(w,t),s=H(w," Years"),w.forEach(f),h.forEach(f),u=j(p),o=b(p,"DIV",{class:!0});var E=y(o);d.l(E),E.forEach(f),this.h()},h(){v(e,"class","flex items-center justify-between mt-8"),v(o,"class","grid grid-cols-1 md:grid-cols-3 gap-4")},m(p,h){R(p,e,h),a(e,r),a(r,l),a(r,i),a(r,s),R(p,u,h),R(p,o,h),d.m(o,null)},p(p,h){h&1&&t!==(t=(p[0].total_years_of_experience||0)+"")&&z(i,t),T===(T=_(p,h))&&d?d.p(p,h):(d.d(1),d=T(p),d&&(d.c(),d.m(o,null)))},d(p){p&&f(e),p&&f(u),p&&f(o),d.d()}}}function De(n){let e,r;return{c(){e=g("p"),r=C("No work experience available.")},l(l){e=b(l,"P",{});var t=y(e);r=H(t,"No work experience available."),t.forEach(f)},m(l,t){R(l,e,t),a(e,r)},p:L,d(l){l&&f(e)}}}function Te(n){let e,r=n[0].user_companies_with_experience.split(","),l=[];for(let t=0;t<r.length;t+=1)l[t]=ne(le(n,r,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=X()},l(t){for(let i=0;i<l.length;i+=1)l[i].l(t);e=X()},m(t,i){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,i);R(t,e,i)},p(t,i){if(i&1){r=t[0].user_companies_with_experience.split(",");let s;for(s=0;s<r.length;s+=1){const u=le(t,r,s);l[s]?l[s].p(u,i):(l[s]=ne(u),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=r.length}},d(t){fe(l,t),t&&f(e)}}}function ie(n){let e,r=n[6].split("|")[0]+"",l,t,i,s=n[6].split("||")[1]+"",u;return{c(){e=new ve(!1),l=P(),t=g("div"),i=C("Role: "),u=C(s),this.h()},l(o){e=ge(o,!1),l=j(o),t=b(o,"DIV",{});var c=y(t);i=H(c,"Role: "),u=H(c,s),c.forEach(f),this.h()},h(){e.a=l},m(o,c){e.m(r,o,c),R(o,l,c),R(o,t,c),a(t,i),a(t,u)},p(o,c){c&1&&r!==(r=o[6].split("|")[0]+"")&&e.p(r),c&1&&s!==(s=o[6].split("||")[1]+"")&&z(u,s)},d(o){o&&e.d(),o&&f(l),o&&f(t)}}}function ne(n){let e,r=n[6].includes("||"),l,t=r&&ie(n);return{c(){e=g("div"),t&&t.c(),l=P(),this.h()},l(i){e=b(i,"DIV",{class:!0});var s=y(e);t&&t.l(s),l=j(s),s.forEach(f),this.h()},h(){v(e,"class","card p-4 bg-primary-warning flex flex-col gap-10 relative")},m(i,s){R(i,e,s),t&&t.m(e,null),a(e,l)},p(i,s){s&1&&(r=i[6].includes("||")),r?t?t.p(i,s):(t=ie(i),t.c(),t.m(e,l)):t&&(t.d(1),t=null)},d(i){i&&f(e),t&&t.d()}}}function Ve(n){let e;function r(i,s){return i[0]?we:Ie}let l=r(n),t=l(n);return{c(){t.c(),e=X()},l(i){t.l(i),e=X()},m(i,s){t.m(i,s),R(i,e,s)},p(i,[s]){l===(l=r(i))&&t?t.p(i,s):(t.d(1),t=l(i),t&&(t.c(),t.m(e.parentNode,e)))},i:L,o:L,d(i){t.d(i),i&&f(e)}}}function Pe(n,e,r){let l;ue(n,pe,c=>r(4,l=c));const t=K("token");me(async()=>{try{if(!t){be("/login");return}const c=await fetch(`${_e}/api/user/${i}`,{headers:{Authorization:`Bearer ${t}`}});c.ok?(r(0,s=await c.json()),console.log(s)):console.error("Error fetching user:",c.statusText)}catch(c){console.error("Error fetching user:",c)}});let{id:i=l.params.slug}=e,s=null;function u(){const _={type:"component",component:{ref:Ee},title:"Custom Form Component",body:"Complete the form below and then press submit.",response:T=>console.log("response:",T)};W.trigger(_)}const o=()=>u();return n.$$set=c=>{"id"in c&&r(2,i=c.id)},[s,u,i,o]}class Le extends oe{constructor(e){super(),ae(this,e,Pe,Ve,ce,{id:2})}}export{Le as component};