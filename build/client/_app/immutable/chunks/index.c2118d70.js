import{d as $}from"./index.ac833752.js";import{ai as w}from"./index.cdd841bc.js";function O(p,{from:t,to:s},d={}){const a=getComputedStyle(p),l=a.transform==="none"?"":a.transform,[c,h]=a.transformOrigin.split(" ").map(parseFloat),o=t.left+t.width*c/s.width-(s.left+c),r=t.top+t.height*h/s.height-(s.top+h),{delay:f=0,duration:e=n=>Math.sqrt(n)*120,easing:g=$}=d;return{delay:f,duration:w(e)?e(Math.sqrt(o*o+r*r)):e,easing:g,css:(n,i)=>{const x=i*o,y=i*r,m=n+i*t.width/s.width,u=n+i*t.height/s.height;return`transform: ${l} translate(${x}px, ${y}px) scale(${m}, ${u});`}}}export{O as f};