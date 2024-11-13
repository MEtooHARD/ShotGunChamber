(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2801:(e,t,n)=>{Promise.resolve().then(n.bind(n,8541))},8541:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var r=n(7437),s=n(2265);function l(e){let{children:t,url:n,classOverr:s=""}=e;return(0,r.jsx)("a",{className:"text-gray-500 dark:text-gray-400"+" ".concat(s),href:n,children:t})}function a(e){let{children:t}=e;return(0,r.jsx)("p",{className:"text-gray-400 dark:text-gray-600 font-bold text-3xl select-none",children:t})}function o(e){let{name:t,url:n,title:s=""}=e;return(0,r.jsxs)("p",{className:"flex",children:[s&&(0,r.jsx)("span",{className:"mr-1 text-gray-400",children:s}),(0,r.jsx)(l,{classOverr:"flex",url:n,children:t})]})}let i=function(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=function e(t){var n,r,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(n=0;n<l;n++)t[n]&&(r=e(t[n]))&&(s&&(s+=" "),s+=r)}else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(r&&(r+=" "),r+=t);return r};function c(e){let{onCLick:t,display:n,enabled:s}=e;return(0,r.jsx)("div",{className:i("flex","flex-1","justify-center","items-center","font-medium text-3xl","".concat(s?"border-black dark:border-gendark":"border-disabled"),"border-2","".concat(s?"text-black dark:text-gendark":"text-disabled"),"w-full m-2 aspect-square","rounded-md","select-none cursor-pointer","".concat(s?"transform duration-75 hover:scale-105 active:scale-95":"")),onClick:t,children:n})}function d(e){let{num:t,setNum:n,title:s,L:l,R:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex flex-1 flex-row flex-wrap justify-center   border-black dark:border-gendark dark:bg-gray-700 dark:bg-opacity-90   border-2 p-1 m-2 min-w-40 max-w-60   aspect-video rounded-2xl",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center w-full h-full",children:[s&&(0,r.jsx)("p",{className:"flex font-bold text-xl text-center dark:text-gendark",children:s}),(0,r.jsxs)("div",{className:"flex justify-around w-full h-full items-center",children:[(0,r.jsx)(c,{display:"-1",enabled:l,onCLick:()=>{l&&n(e=>e-1)}}),(0,r.jsx)("div",{className:"flex justify-center   text-4xl font-bold   m-2 w-3 dark:text-gendark   select-none",children:t}),(0,r.jsx)(c,{display:"+1",enabled:a,onCLick:()=>{a&&n(e=>e+1)}})]})]})})})}function x(){let e=_(),t=e.rounds.lives,n=e.rounds.blanks,s=t+n,i=e.set.Lives,c=e.set.Blanks;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{children:"Rounds Counter"}),(0,r.jsxs)(a,{children:["For ",(0,r.jsx)(l,{classOverr:"",url:"https://store.steampowered.com/app/2835570/Buckshot_Roulette/",children:"Buckshot Roulette"})]}),(0,r.jsx)(a,{children:"(Beta)"}),(0,r.jsx)("div",{className:"m-4"}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center items-center   w-full",children:[(0,r.jsx)(d,{title:"Live Rounds",num:t,setNum:i,L:t>1,R:t<10&&s<10}),(0,r.jsx)(d,{title:"Blank Rounds",num:n,setNum:c,L:n>1,R:n<10&&s<10})]}),(0,r.jsx)("div",{className:"m-4"}),(0,r.jsxs)("div",{className:"flex text-gray-400 dark:text-gray-600 text-opacity-70 font-bold text-4xl items-center select-none",children:["Made by ",(0,r.jsxs)("div",{className:"flex flex-col text-gray-500 dark:text-gray-400 text-2xl",children:[(0,r.jsx)(o,{name:"MetooHARD",url:"https://github.com/metoohard",title:""}),(0,r.jsx)(o,{name:"ToiletKing",url:"https://github.com/benjounoou",title:""})]})]})]})}function u(e){let{title:t,value:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center text-center   border-2 border-black rounded-lg   py-1 px-3 h-full dark:text-gendark dark:border-gendark dark:bg-gray-700   font-bold",children:[(0,r.jsx)("p",{className:"text-xl select-none",children:t}),(0,r.jsx)("p",{className:i("text-2xl select-none","".concat(0>Number(n)?"text-red-500 dark:text-red-400":"")),children:n})]})})}class f{set type(e){this._type=e}get type(){return this._type}constructor(){this._type=f.Type.Unknown}}!function(e){var t;(t=e.Type||(e.Type={}))[t.Blank=0]="Blank",t[t.Live=1]="Live",t[t.Unknown=2]="Unknown"}(f||(f={}));class h{shots_of(e){return this._shots.reduce((t,n)=>t+=n.type==e?1:0,0)}get live(){return this._live}get blank(){return this._blank}get known_live(){return this.shots_of(f.Type.Live)}get known_blank(){return this.shots_of(f.Type.Blank)}get unknown_live(){return this._live-this.known_live}get unknown_blank(){return this._blank-this.known_blank}get unknown_shots(){return this.shots_of(f.Type.Unknown)}next_live_chance(e){return e<this.live+this.blank-1?this._shots[e+1].type===f.Type.Unknown?this.unknown_shots>0?this.unknown_live/this.unknown_shots:0:this._shots[e+1].type===f.Type.Live?1:0:0}get shots(){return this._shots}shot(e){return this._shots[e]}constructor(e,t,n){this._shots=e,this._live=t,this._blank=n}}let m={[f.Type.Unknown]:"bg-gradient-to-br from-45% from-gray-600 to-gray-900",[f.Type.Live]:"bg-gradient-to-br from-45% from-red-600 to-red-900",[f.Type.Blank]:"bg-gradient-to-br from-45% from-blue-600 to-blue-900"},k={[f.Type.Unknown]:f.Type.Live,[f.Type.Live]:f.Type.Blank,[f.Type.Blank]:f.Type.Unknown};function b(e){let{type:t,setType:n,i:s,highlight:l=!1}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:i("flex justify-center items-center select-none","w-16 max-w-16 min-w-8 aspect-[3/5] m-1 rounded-sm","".concat(l?"text-black dark:text-[]":"text-[#707070] dark:text-[#adadad]"),"font-extrabold text-5xl","".concat(m[t]),"cursor-pointer transform duration-75 hover:scale-105 active:scale-95"),onClick:()=>n(k[t]),children:s+1})})}function v(e){let{live:t,blank:n,title:s}=e;return(0,r.jsxs)("div",{className:"flex flex-col justify-around   aspect-video m-1 border-2 min-w-48 max-w-64  basis-5/12   rounded-xl    border-black dark:border-gendark dark:text-gendark dark:bg-gray-700",children:[(0,r.jsx)("p",{className:"flex justify-center items-center font-bold text-2xl select-none",children:s}),(0,r.jsx)("div",{className:"flex w-full",children:[0,1].map(e=>(0,r.jsx)("div",{className:"flex-1 w-full m-1",children:(0,r.jsx)(u,{title:["Live","Blank"][e],value:[t,n][e]})},e))})]})}let g=e=>(Math.round(1e4*e)/100).toFixed(2),j=(e,t)=>(e+t)%t;function p(){let e=_(),[t,n]=(0,s.useState)(Array.from({length:e.rounds.lives+e.rounds.blanks},()=>new f)),[l,a]=(0,s.useState)(0),o=e.rounds.lives+e.rounds.blanks,i=new h(t,e.rounds.lives,e.rounds.blanks),c=(e,r)=>{let s=[...t];s[e].type=r,n(s)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center   w-full my-1",children:[(0,r.jsxs)("div",{className:"flex flex-wrap justify-center w-full",children:[(0,r.jsx)(v,{live:i.live,blank:i.blank,title:"Initial"}),(0,r.jsx)(v,{live:i.unknown_live,blank:i.unknown_blank,title:"Unkown"})]}),(0,r.jsxs)("div",{className:"flex m-1 h-20 items-center",children:[(0,r.jsx)("svg",{className:"h-14 aspect-square cursor-pointer transform duration-75 hover:scale-110 active:scale-95",onClick:()=>{a(e=>j(e-1,o))},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("polygon",{fillRule:"evenodd",fill:"#ededed",points:"9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707"})}),(0,r.jsx)(u,{title:"Next Live",value:"".concat(g(i.next_live_chance(l))," %")}),(0,r.jsx)("svg",{className:"h-14 aspect-square cursor-pointer transform duration-75 hover:scale-110 active:scale-95",onClick:()=>{a(e=>j(e+1,o))},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("polygon",{fillRule:"evenodd",fill:"#ededed",points:"14.586 12 7.293 4.707 8.707 3.293 17.414 12 8.707 20.707 7.293 19.293"})})]})]}),(0,r.jsx)("div",{className:"flex flex-wrap justify-around items-center   border-[3px] border-black dark:border-gendark dark:bg-gray-700 dark:bg-opacity-75   rounded-2xl   w-[95%] my-1 p-2 max-w-[72rem]",children:i.shots.map((e,t)=>(0,r.jsx)(b,{highlight:t===l,i:t,type:e.type,setType:e=>{c(t,e)}},t))})]})}function y(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("theme");t(n?"dark"===n:e)},[]),{darkMode:e,toggleTheme:()=>{let n=e?"light":"dark";document.documentElement.classList.toggle("dark","dark"===n),t("dark"===n),localStorage.setItem("theme",n)}}}function w(){let{darkMode:e,toggleTheme:t}=y();return(0,r.jsx)("div",{onClick:t,className:"p-1 m-1 rounded-md border-1 w-14 flex justify-center items-center   border-black font-bold dark:text-gendark dark:border-gendark dark:border-2",children:e?"Dark":"Light"})}let N=(0,s.createContext)(void 0),_=()=>{let e=(0,s.useContext)(N);if(!e)throw Error("couldn't get round data");return e};function T(){let[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)(2),[a,o]=(0,s.useState)(2),c=(0,s.useMemo)(()=>({lives:n,blanks:a}),[n,a]),{darkMode:d,toggleTheme:u}=y();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"fixed w-min",children:(0,r.jsx)(w,{})}),(0,r.jsxs)("div",{className:"flex flex-col w-screen h-screen",children:[(0,r.jsx)("div",{className:"flex flex-col justify-center items-center w-full h-full overflow-auto pb-2 pt-28",children:(0,r.jsx)(N.Provider,{value:{rounds:c,set:{Lives:l,Blanks:o}},children:e?(0,r.jsx)(p,{}):(0,r.jsx)(x,{})})}),(0,r.jsx)("div",{className:"h-12"})]}),(0,r.jsxs)("div",{className:"fixed bottom-0 left-0 w-full h-12 flex",children:[(0,r.jsx)("div",{className:i("flex-1 flex items-center justify-center","bg-green-400","select-none","text-2xl","".concat(e?"text-disabled":"text-black"),"font-bold","h-full"),onClick:()=>{t(!0)},children:"Start"}),(0,r.jsx)("div",{className:i("flex-1 flex items-center justify-center","bg-black","select-none","text-2xl","".concat(e?"text-red-500":"text-disabled"),"font-bold","h-full"),onClick:()=>{t(!1),l(2),o(2)},children:"Reset"})]})]})}function L(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(T,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(2801)),_N_E=e.O()}]);