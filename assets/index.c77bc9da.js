var D=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var L=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&L(e,n,t[n]);if(C)for(var n of C(t))V.call(t,n)&&L(e,n,t[n]);return e},x=(e,t)=>j(e,q(t));import{C as c,s as r,W as U,r as d,G as W,c as f,j as o,a as h,F as G,b as J,l as v,d as K,u as A,e as w,q as Q,S as X,R as P,f as Y,B as ee}from"./vendor.921b6c1a.js";const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};te();const re=c`
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to right, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    transform-origin: center left;
    transform: scale(10, 1);
    opacity: 0;
    transition: transform 0.25s, opacity 0.6s;
  }

  &:active::after {
    transform: scale(0, 1);
    opacity: 0.2;
    transition: 0s;
  }
`,oe=c`
  &:hover::before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.0625;
  }
`,ne=c`
  &:hover {
    color: ${e=>e.theme.colors.highlight};
  }
`,H=c`
  border: none;
  border-radius: ${e=>e.theme.borderRadius};
  outline: none;
  padding: 8px;
  background: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`,B=r.button`
  ${H}
  ${oe}
  ${re}
`,Me=r(B)`
  color: ${e=>e.theme.colors.primary};
`,_e=r(B)`
  background: ${({theme:e})=>e.colors.primary};
  color: ${e=>e.theme.colors.textSecondary};
`,E=r.button`
  ${H}
  border-radius: 0;
  ${ne}
`,Ae=r(E)`
  color: ${e=>e.theme.colors.primary};
`,He=r(E)`
  color: ${e=>e.theme.colors.textSecondary};
`;c`
  &:hover {
    box-shadow: 0 0px 10px 3px ${e=>e.theme.colors.primary};
  }
`;const g=c`
  box-shadow: 2px 2px 4px 1px rgba(0.2, 0.2, 0.2, 0.2);
  transition: all 0.15s ease-in-out;
`,ae=U`

html{
  font-size: ${e=>e.theme.fontSizes.root};
  font-family: Arial, Helvetica;
}
body{
  font-size: 1rem;
}

html,body{
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb{
  -webkit-appearance:none;
  width: 4px;
  border-radius: 4px;
  background-color: ${e=>e.theme.colors.lightPrimary};
  ${g}
}

::-webkit-scrollbar-track{
  -webkit-appearance:none;
  background-color: ${e=>e.theme.colors.hoverLayer};
  border-radius: 4px;
}
`;function ie(e){const t=f(e),n=t.hue(t.hue()+60),i=t.hue(t.hue()+180),a=t.lightness(t.lightness()*1.2),s=f("black"),l=t.lighten(.5),p=t.darken(.2),y=t.lighten(.6).alpha(.15),Z=t.isDark()?f("white"):f("black");return{primary:e,secondary:n.toString(),accent:i.toString(),lightPrimary:l.toString(),darkenPrimary:p.toString(),hoverLayer:y.toString(),highlight:a.toString(),textPrimary:s.toString(),textSecondary:Z.toString()}}function se(){return{colors:ie("#2196F3"),borderRadius:"4px",spacing:{containerMargin:"8px",containerPadding:"8px"},fontSizes:{root:"87.5%",h1:"2.2rem",h2:"2.0rem",h3:"1.8rem",h4:"1.6rem",h5:"1.4rem",h6:"1.2rem"}}}const I=d.exports.createContext(()=>{});function le(e){var i;const[t,n]=d.exports.useState(e.initTheme);return o(I.Provider,{value:n,children:h(G,{theme:t,children:[((i=e.normalize)!=null?i:!0)&&o(ae,{}),e.children]})})}function Be(){return d.exports.useContext(W)}function Ee(){return d.exports.useContext(I)}const R=r.div(e=>{var t,n,i,a;return{position:"absolute",top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(a=e.left)!=null?a:0}}),k=r.div`
  margin: ${e=>e.theme.spacing.containerMargin};
  padding: ${e=>e.theme.spacing.containerPadding};
`;r.div`
  border-left: 1px solid rgba(0.2, 0.2, 0.2, 0.1);
  margin: 0 ${e=>e.theme.spacing.containerMargin};
`;const Ie=r.div`
  border-top: 1px solid rgba(0.2, 0.2, 0.2, 0.1);
  margin: ${e=>e.theme.spacing.containerMargin} 0;
`;r.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`;r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;const Re=r.section`
  margin: ${e=>e.theme.spacing.containerMargin};
  padding: ${e=>e.theme.spacing.containerPadding};
`,u=c`
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`,ce=r.h1`
  font-size: ${e=>e.theme.fontSizes.h1};
  ${u}
`,Te=r.h2`
  font-size: ${e=>e.theme.fontSizes.h2};
  ${u}
`,Fe=r.h3`
  font-size: ${e=>e.theme.fontSizes.h3};
  ${u}
`,Oe=r.h4`
  font-size: ${e=>e.theme.fontSizes.h4};
  ${u}
`,Ze=r.h5`
  font-size: ${e=>e.theme.fontSizes.h5};
  ${u}
`,De=r.h6`
  font-size: ${e=>e.theme.fontSizes.h6};
  ${u}
`,m=c`
  ${u}
  background-color:${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.textSecondary};
`;r.h1`
  ${m}
`;r.h2`
  ${m}
`;r.h3`
  ${m}
`;r.h4`
  ${m}
`;r.h5`
  ${m}
`;r.h6`
  ${m}
`;const je=r.div`
  padding: ${e=>e.theme.spacing.containerPadding};
  overflow-y: auto;
`,de=c`
  background-color: ${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.textSecondary};
  ${g}
`,he=c`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverLayer};
    color: inherit;
    ${g}
  }
`,ue=r(k)`
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>e.theme.spacing.containerPadding};
  margin: 0;
  cursor: pointer;
  ${e=>e.active?de:he}
`,qe=r(k)`
  border-radius: ${e=>e.theme.borderRadius};
  ${g}
`,z=c`
  -webkit-appearance: none;
  width: 1px;
  height: ${e=>e.theme.spacing.containerPadding};
  background: ${e=>e.theme.colors.primary};
  border: none;
  border-radius: 0;
  cursor: pointer;
  box-shadow: -401px 0 0 400px ${e=>e.theme.colors.primary};
`,M=c`
  border: none;
  border-radius: ${e=>e.theme.borderRadius};
`,T=c`
  outline: none;
  margin: ${e=>e.theme.spacing.containerMargin};
  padding: ${e=>e.theme.spacing.containerPadding};
  background-color: transparent;

  &[type="range"] {
    -webkit-appearance: none;
    padding: 0;
    height: ${e=>e.theme.spacing.containerPadding};
    outline: none;
    overflow: hidden;
    &::-webkit-slider-thumb {
      ${z}
    }
    &::-moz-range-thumb {
      ${z}
    }
  }

  &[type="color"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0;
    height: 0.8rem;
    width: 4rem;
    border: none;
    &::-moz-color-swatch {
      ${M}
    }
    &::-webkit-color-swatch {
      ${M}
    }
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
  }
`,Ne=r.input`
  border: ${e=>e.theme.colors.lightPrimary} 1px solid;
  &:focus {
    border: ${e=>e.theme.colors.primary} 1px solid;
  }
  border-radius: ${e=>e.theme.borderRadius};
  ${T}
`,Ve=r.input`
  border: none;
  border-bottom: ${e=>e.theme.colors.lightPrimary} 1px solid;
  &:focus {
    border-bottom: ${e=>e.theme.colors.primary} 1px solid;
  }
  border-radius: 0;
  ${T}
`;function Ue(e){const[t,n]=d.exports.useState(e),i=d.exports.useMemo(()=>new Proxy({},{get(a,s){return{value:t[s],onChange:l=>n(p=>x($({},p),{[s]:l.target.value}))}}}),[t,n]);return[t,i]}const b=c`
  padding: 8px;
  border-radius: 4px;
  /* border: solid 1px ${({theme:e})=>e.colors.primary}; */
  border: none;
  box-sizing: border-box;
  background: transparent;
`;r.input.attrs(()=>({type:"text"}))`
  ${b}
`;r.input.attrs(()=>({type:"password"}))`
  ${b}
`;r.input.attrs(()=>({type:"tel"}))`
  ${b}
`;r.div`
  ${b}
`;r.div``;function F(e){return h("svg",x($({viewBox:"0 0 1561.3 1585.13"},e),{children:[o("title",{children:"logo"}),o("polygon",{points:"326.24 724 329.24 775 336.24 816 346.24 864 354.24 901 364.24 940 373.24 974 381.24 995 393.74 1011.5 397.74 988.5 398.74 960.5 396.24 907.5 387.24 860.5 381.74 828.5 376.74 813.86 358.24 759.5 331.74 664.5 323.78 624.25 321.24 654 326.24 724",fill:"currentColor"}),o("path",{d:"M598,1447.5",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("line",{x1:"383.24",y1:"1039",x2:"393.74",y2:"1011.5",fill:"currentColor"}),o("line",{x1:"317.24",y1:"1127.5",x2:"348.24",y2:"1092",fill:"currentColor"}),o("path",{d:"M598,1447.5l-23,8.5-8.38,7.17a16.18,16.18,0,0,1-13,3.7l-5.69-.87-1.46-1.05a27.2,27.2,0,0,0-21.23-4.64l-3.5.69a15.87,15.87,0,0,1-11.28-16.41l0.35-4.58a28.18,28.18,0,0,1,.74-4.63l7.18-29c2.33-33.67,4.25-41.3-20.75-12.3l-12,22.06-6.42,27.61a714.19,714.19,0,0,0,40.61,75.74c5.4-4.14,11-8.74,16.81-13.81L557,1485l41-37.5",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M458.33,1174.33l22.67-28L504.33,1117,528,1082l24-47,16-40,14-44,11-44,2.15-10.23-0.65-3.27-5.25-40L586,821V798l3.55-25s6.82-46.49,11.82-98.54l3.19-16.91A713.72,713.72,0,0,0,414.1,1144.09q0,35.51,3.42,70.15L431,1201.67Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M1443.5,1418c2.12,13.37.83,10.67,4.5,30.5s7,16,7-1-0.5-25,0-38.5-1.5-30.17-2-46.67c-0.47-15.62.33-18.46-3-34.67-6-29.17-2.7-11.56-8-36.67-5-23.67-20.5-36-12,5,3.69,17.79,6,40.33,7,51.33s1,26.17,2.5,38.17S1441.33,1404.33,1443.5,1418Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M616,688l-7.5,48-5,65.5,1,50,0,0.42L606,845l12-47,24-65,22-50,29-55,32.64-74.95a717.8,717.8,0,0,0-98,80.79L623,652.33Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M1557,898c-17.5-26.5-10-19-41-56.5-30.42-36.8-26.37-33.08-47.5-48-8.5-6-29.5-15.5-12.5,8.5,0,0,3,6,23.5,30.5s29.5,33,39.5,42.5,15.5,17,26.5,30c14.08,16.64,17,19,26,33.5s23,21,7-6S1574.5,924.5,1557,898Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M1842.06,1144.09c0-395.14-319.65-715.46-714-715.46A709.52,709.52,0,0,0,745.72,539.79L745,541l-41,98-17,39-20,43-23,53-20,61-14.75,56.06,1.25,10.44,19,104.5,18.5,74.5,14.5,41.5,12,34,10.5,24,17,32.5,18.5,28.5,22,26.5,25,22.5,21,15,24.5,16,31.5,14,30.5,11.5,37,8.5,35.5,5.5,33,2.75L1007,1366h26s19.5-7.75,24-7.75,15.5-3.62,15.5-3.62l17-7.06,18-6c23.5-3.17,19.5,7.48,19.5,14.82s-0.67-6.67,2.67,5.33c2.21,7.95-3.33,8.66-2,27.33q0.89,12.44,1.31,19.35a42.2,42.2,0,0,1-2.31,16.69l-2.42,8.1a36.12,36.12,0,0,0-.09,13.05s0.12,6.23-1.22,9c-1.56,3.27-4.1,10.51-5,12.7-2.92,7-19.91,26.55-19.91,26.55l-5.5,26.5-14.5,27c-12.33,15.67-7.67,26.33-11,33s-12.67,22.67-16.67,24.67-12,5.33-23.33,18.67-30,36-34.67,42.67S989,1685.67,971,1685s-22.67-2.67-26,3l-15,2a21.09,21.09,0,0,1-18.81-.38L910,1689l-11.5-1.5-12-11c-23.17-41.83-58.83-128.17-33.5-7.5,0.31,1.47-7,13-7,13l-16.47,4.57a7.63,7.63,0,0,0-2.77,1.43,27.67,27.67,0,0,0-9.16,13.88L815,1711l-15,6.5-15-3.5-12.5,7.5-13,10-23-5.5-20-11-13,4.35a714,714,0,0,0,654.25,102.37L1362,1812l5-15,7-29-17.5,25.5a33.25,33.25,0,0,1-7,6.56c-58.26,40.37-59.33,28.39-28.77,4.3a191.73,191.73,0,0,0,28.05-27.2l20.74-24.67c1.44-1.73,15.51-26.48,16.5-28.5l15-33,18-48.5c7-18.5,11.84-34.82,12.41-37.24,6-25.35,7.52-40.46,6.09-86.26-0.22-7,0-61-16.5-101l-8-25-11-29-6-17-4-16c-5.5-14-8-23.5-12,3l-4,17c-14.67,36-14.33,26.33-13.5,5l4.25-19,5-25,0.25-28v-13l-4.51-19c-13.24-58-1.12-108-1.12-108,13-77.5,29.45-58,74.38-18,0,0,4.88,5.62,10.88,14s7,12,13,22.67S1478,1200,1478,1200a298.52,298.52,0,0,1,11.5,59l10.5,25,10,32,9,33c2.5,25,6,43-13-2l-9-24-10-22c-11.33-14.67-12-20.67-9,14l1,29,3,39.3c0.48,13.7,1.06,25.62.23,38.41l-2,31.54a282.56,282.56,0,0,1-4.9,37.16L1462,1557l-19,67-15,41-19,49-11,28-5,14-7,24-10.2,35.31C1648,1714.39,1842.06,1452,1842.06,1144.09ZM1623,1334l-7.5,31.5L1607,1394l-10,30-15,31-7,16a13.62,13.62,0,0,0-.7,1.58L1562,1499c-9,20-15,36-10,8l7.27-29.66a5.29,5.29,0,0,1,.23-0.84l3.5-9.5,9-24,8-21,12-35,11-37,10-34,7-43,3.75-26,2.25-33v-52l-1.35-24.35a16.81,16.81,0,0,0-.27-3.65l-3.69-26-7.72-34-7-24-9-25-12-26-13-24-16-20-11-14-19-19-14-13-18-16-21-16-20-14-24-21,13,23c7,22,4.33,35.33-16.33,4.67s-16-25.33-27.68-54.67l-19-20-21-23c-95-127,27-99.67,49-86,38.51,23.92,51.33,39,67,54l19,17,22,15,26,16c34,25.67,36.67,31.67,36.67,31.67s19.33,24.67-9.33,8.67-34.83-16.83-34.83-16.83L1544,826l13,21,10,18,18,26,10,19,13,23,13,31,14,53,7,55,7,54,4,64,1,49-1,50-2,28-4,40-4,37c-1,23.5-4.5,24.5-9-2l-0.5-15-0.5-24-1-22,1-34Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M520.19,1519.48c-13.05,10-25.12,17.28-37.86,21.52l-33.67,13.33s-9,20.67,8.83,30.67l17.5,16.5,15.5,18,7.5,3.5c14,8.67,12,17.33,16,28.67,0.29,0.82.58,1.84,0.87,2.55a15.55,15.55,0,0,0,14.21,9.78H544c22.67,14,25,25.58,30.5,30.75l13.5,11.38,12,13.44,12.5,8.44H622l9,4h42l17.5-3.27,12.49-9.08,0.54-.24A718.93,718.93,0,0,1,520.19,1519.48Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M627.63,633.84l11-44,9.69-30.69,15.1-37.1L676,486.55l17-31L708.49,424c-4.51-5-1.49-16.68-21.82-34s-17-11.67-8.67,6.5l-1.75,18L668,443l-17,47-17.5,53.5-16,44.5-12.86,69.55Q615.85,645.43,627.63,633.84Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M401,1229.67l-32.67,28.67-32.67,19.33L304,1298c-44.33,16.33-15,37.67,4,59l19.5,15.5,25,10.5c18,20,29,35,29,35l10.5,7c22.5,6.5,32.5,21,32.5,21l16,12H473l6-11.5,0.58-2.64a712.38,712.38,0,0,1-62.06-229.56Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("path",{d:"M785.94,472l24-36,22-33,26-30,2-39-13-14-5,8v16l-8.75,24-29.62,45-30.81,50-47.18,90v0.05q9.92-6.8,20.08-13.26Z",transform:"translate(-280.76 -320)",fill:"currentColor"}),o("polygon",{points:"314.39 576.77 323.78 624.25 328.24 572 328.49 571.06 323.79 531.92 314.39 576.77",fill:"currentColor"}),o("path",{d:"M1352,1835l-15,22c-56.5,69-41,55,9,13l15-21,12-24,2.8-9.69q-9,3.32-18,6.41Z",transform:"translate(-280.76 -320)",fill:"currentColor"})]}))}const me=r(R)`
  background-image: linear-gradient(
    -45deg,
    ${e=>e.theme.colors.primary},
    ${e=>e.theme.colors.lightPrimary}
  );
  color: ${e=>e.theme.colors.textSecondary};
`;function pe(){return h(me,{children:[o(J,{children:o("title",{children:"Autui - Personal UI Lib of Autumn"})}),o(R,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:h(ce,{style:{flex:"0 1 auto"},children:[o(F,{style:{width:100,height:100}}),"Autui"]})})]})}const ge="modulepreload",_={},fe="/autui/",S=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${fe}${i}`,i in _)return;_[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ge,a||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),a)return new Promise((p,y)=>{l.addEventListener("load",p),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},O=[{path:"/docs",title:"Docs",component:v(()=>S(()=>import("./index.b596a2f2.js"),["assets/index.b596a2f2.js","assets/vendor.921b6c1a.js","assets/masterDetailPage.9f98d21c.js"]))},{path:"/components",title:"Components",component:v(()=>S(()=>import("./index.eda960ca.js"),["assets/index.eda960ca.js","assets/masterDetailPage.9f98d21c.js","assets/vendor.921b6c1a.js"]))},{path:"/configuration",title:o(K,{}),component:v(()=>S(()=>import("./Configuartion.434262e2.js"),["assets/Configuartion.434262e2.js","assets/vendor.921b6c1a.js"]))}];function be(e){const t=A(),n=w({path:e,exact:!0});return d.exports.useCallback(()=>!n&&t.push(e),[e,n])}function ye(){const e=w({path:"/",exact:!0});return o(we,{children:h(Se,{"data-home":!!e,children:[o($e,{}),o("div",{style:{display:"flex",margin:"0 8px"},children:O.map(t=>o(ve,{path:t.path,title:t.title},t.path))})]})})}function $e(){const e=A(),t=w({path:"/",exact:!0});return h(xe,{"data-home":!!t,onClick:()=>!t&&e.push("/"),children:[o(F,{}),o("span",{children:"Autui"})]})}const xe=r(k)`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  & > svg {
    width: 1em;
    height: 1em;
  }
  & > span {
    margin: 0 4px;
  }
  &:not([data-home="true"]) {
    & > svg {
      color: ${e=>e.theme.colors.primary};
    }
  }
`;function ve({path:e,title:t}){const n=be(e);return o(ue,{onClick:n,children:t})}const Se=r.div`
  transition: all 0.3s ease-in-out;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  &[data-home="true"] {
    max-width: 1000px;
    color: ${e=>e.theme.colors.textSecondary};

    @media screen and (min-width: 1600px) {
      max-width: 1200px;
    }
  }
`,we=r.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  ${g}
  z-index: 20;
`,ke=se();function Ce(){return o(Q,{children:h(le,{initTheme:ke,children:[h(X,{children:[O.map(e=>o(P,{path:e.path,component:e.component},e.path)),o(P,{path:"/",component:pe})]}),o(ye,{})]})})}const Le="autui";Y.render(o(d.exports.StrictMode,{children:o(ee,{basename:`/${Le}`,children:o(Ce,{})})}),document.getElementById("root"));export{R as A,k as C,B as F,ce as H,_e as I,je as L,Ne as O,E as P,Re as S,Ve as U,Ie as V,S as _,Te as a,Fe as b,Oe as c,Ze as d,De as e,ue as f,Me as g,qe as h,Ee as i,Ue as j,ie as k,Ae as l,He as m,Be as u};
