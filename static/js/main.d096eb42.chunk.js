(this["webpackJsonpmm-cosmos"]=this["webpackJsonpmm-cosmos"]||[]).push([[0],{32:function(n,t,e){},33:function(n,t,e){},34:function(n,t,e){"use strict";e.r(t);var i,o,a,r,c,s,p,d,b,g,u,l,x,j,h,f,m,O,A,w,z,M,y,C,D,v=e(0),k=e.n(v),E=e(4),Y=e.n(E),G=e(2),I=e(5),N=e(3),P=e(39),R=e.p+"static/media/arrowDown.975c5406.svg",S=e.p+"static/media/arrowUp.a7a3814b.svg",J=e.p+"static/media/arrows.f5148926.svg",H=e.p+"static/media/x.59dc4710.svg",T=e(1),B=function(n){var t=n.content,e=n.closeHandler,i=n.open,o=n.data,a=Object(v.useState)(null),r=Object(I.a)(a,2),c=r[0],s=r[1],p=Object(v.useState)(["unsorted","unsorted"]),d=Object(I.a)(p,2),b=d[0],g=d[1],u=Object(v.useState)([J,J]),l=Object(I.a)(u,2),x=l[0],j=l[1];Object(v.useEffect)((function(){if(void 0!==o)switch(t){case"Crew":s(o.map((function(n){return[n.name,n.status]})));break;case"Rockets":s(o.map((function(n){return[n.name,n.type]})));break;case"Capsules":s(o.map((function(n){return[n.serial,n.status]})));break;case"Starlink":s(o.map((function(n){return[n.spaceTrack.OBJECT_NAME,n.spaceTrack.LAUNCH_DATE]})));break;default:throw new Error("No content passed")}}),[o,t]);var h=function(n){var t=["unsorted","unsorted"],e=[J,J];"ascending"===b[n]?(s(c.sort((function(t,e){return t[n]>e[n]?-1:1}))),t.splice(n,1,"descending"),e.splice(n,1,R)):(b[0],s(c.sort((function(t,e){return t[n]>e[n]?1:-1}))),t.splice(n,1,"ascending"),e.splice(n,1,S)),g(t),j(e)};return Object(T.jsx)(P.a,{open:i,onClose:e,children:Object(T.jsxs)(q,{children:[Object(T.jsxs)(W,{children:[Object(T.jsx)("div",{children:t}),Object(T.jsx)("button",{onClick:e,children:Object(T.jsx)("img",{src:H,alt:"close"})})]}),Object(T.jsxs)(L,{children:[Object(T.jsxs)(U,{onClick:function(){return h(0)},sortedBy:b[0],children:[Object(T.jsx)("div",{children:"Type"}),Object(T.jsx)("img",{src:x[0],alt:"ascending or descending icon"})]}),Object(T.jsxs)(U,{onClick:function(){return h(1)},sortedBy:b[1],children:[Object(T.jsx)("div",{children:"Status"}),Object(T.jsx)("img",{src:x[1],alt:"ascending or descending icon"})]})]}),c?Object(T.jsx)(Z,{elementsNum:c.length,children:c.map((function(n,t){return Object(T.jsxs)(F,{children:[Object(T.jsx)(Q,{children:n[0]}),Object(T.jsx)(X,{children:n[1]})]},t)}))}):Object(T.jsx)(V,{})]})})},q=N.a.div(i||(i=Object(G.a)(["\n  position: absolute;\n  width: 540px;\n  height: 360px;\n  padding: 20px 24px 24px 24px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  background: linear-gradient(0deg, #2b224a, #2b224a), #ffffff;\n  border: 1px solid #342957;\n  box-shadow: 0px 12px 32px rgba(22, 13, 49, 0.4);\n  border-radius: 16px;\n"]))),K=Object(N.b)(o||(o=Object(G.a)(["\nfrom{\n  transform: rotate(0deg);\n}to{\n  transform: rotate(360deg);\n}\n"]))),V=N.a.div(a||(a=Object(G.a)(["\n  width: 2rem;\n  height: 2rem;\n  border: 5px solid #f3f3f3;\n  border-top: 6px solid #9c41f2;\n  border-radius: 100%;\n  margin: auto;\n  animation: "," 1s infinite linear;\n"])),K),W=N.a.div(r||(r=Object(G.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  width: 492px;\n  height: 32px;\n  left: 490px;\n  top: 216px;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 32px;\n\n  button {\n    background-color: transparent;\n    border: none;\n    color: #c3b8e8;\n    font-size: 1em;\n    text-align: center;\n    cursor: pointer;\n  }\n"]))),U=N.a.button(c||(c=Object(G.a)(["\n  width: 50%;\n  height: 40px;\n  color: #a094c6;\n  border-radius: 4px;\n  border: 0px;\n  text-align: left;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  background-color: #342a56;\n  padding: 10px 16px 10px 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  :hover {\n    background-color: #251d42;\n\n    img {\n      display: block;\n    }\n  }\n  img {\n    display: ",";\n  }\n"])),(function(n){return"unsorted"===n.sortedBy?"none":"block"})),L=N.a.div(s||(s=Object(G.a)(["\n  display: flex;\n  height: 40px;\n  margin-top: 16px;\n  background-color: #342a56;\n  border-radius: 4px;\n"]))),Z=N.a.div(p||(p=Object(G.a)(["\n  height: 210px;\n  margin-top: 16px;\n  overflow-y: ",";\n"])),(function(n){return n.elementsNum>5?"scroll":"hidden"})),F=N.a.li(d||(d=Object(G.a)(["\n  display: flex;\n  padding: 0 14px 28px 14px;\n  div {\n    font-family: Inter;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 20px;\n    color: #d2cbe9;\n  }\n"]))),Q=N.a.div(b||(b=Object(G.a)(["\n  width: 50%;\n"]))),X=N.a.div(g||(g=Object(G.a)(["\n  width: 50%;\n  padding: 0 20px 0 20px;\n"]))),_=function(n){var t=n.content,e=n.img,i=Object(v.useState)(),o=Object(I.a)(i,2),a=o[0],r=o[1],c=Object(v.useState)(!1),s=Object(I.a)(c,2),p=s[0],d=s[1];return Object(T.jsxs)($,{content:t,alt:t,children:[Object(T.jsx)(nn,{onClick:function(){d(!0),fetch("https://api.spacexdata.com/v4/".concat(t)).then((function(n){return n.json()})).then((function(n){return r(n)})).catch((function(n){return console.log(n)}))},img:e,children:t}),Object(T.jsx)(B,{content:t,data:a,open:p,closeHandler:function(){d(!1)}})]})},$=N.a.div(u||(u=Object(G.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 208px;\n  width: 160px;\n  border-radius: 16px;\n"]))),nn=N.a.button(l||(l=Object(G.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  background: linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%),\n    url(",');\n  background-size: 100% 100%;\n  border: none;\n  color: white;\n  padding-top: 120px;\n  position: relative;\n  z-index: 1;\n\n  ::before {\n    position: absolute;\n    content: "";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    border-radius: 16px;\n    z-index: -1;\n    transition: opacity 0.5s linear;\n    opacity: 0;\n\n    background: linear-gradient(\n        0deg,\n        rgba(43, 34, 74, 0.92) 7.69%,\n        rgba(70, 58, 113, 0.92) 100%\n      ),\n      url(',');\n    background-size: 100% 100%;\n    backdrop-filter: blur(4px);\n  }\n\n  :hover::before {\n    opacity: 1;\n  }\n\n  ::after {\n    opacity: 0;\n    transition: opacity 0.5s linear;\n    transition: top 0.3s linear;\n    content: "Details";\n    color: white;\n    position: absolute;\n    top: 80%;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  :hover::after {\n    opacity: 1;\n    top: 50%;\n    padding-top: 0;\n  }\n  :hover {\n    padding-top: 0px;\n    color: transparent;\n    cursor: pointer;\n  }\n'])),(function(n){return n.img}),(function(n){return n.img})),tn=e.p+"static/media/Planet.3fb29cc0.png",en=e.p+"static/media/Crew.3cff2cc2.png",on=e.p+"static/media/Capsules.488256f3.png",an=e.p+"static/media/Rockets.cc2a885a.png",rn=e.p+"static/media/Starlink.da38db64.png",cn=e.p+"static/media/logo1.4af4f39e.svg",sn=e.p+"static/media/logo2.90816553.svg",pn=e.p+"static/media/rightCloud.b185472f.svg",dn=e.p+"static/media/leftCloud.558330cc.svg",bn=e.p+"static/media/landingGear.5a568f7c.svg";var gn,un,ln,xn=function(){var n=[on,en,an,rn],t=Object(v.useState)(!1),e=Object(I.a)(t,2),i=e[0],o=e[1];return Object(T.jsxs)("div",{children:[Object(T.jsxs)(jn,{children:[Object(T.jsx)(hn,{src:cn,alt:"logo part1"}),Object(T.jsx)(fn,{src:sn,alt:"logo part2"})]}),Object(T.jsx)(mn,{children:["Capsules","Crew","Rockets","Starlink"].map((function(t,e){return Object(T.jsx)(_,{content:t,img:n[e]},e)}))}),Object(T.jsx)(Dn,{src:tn,alt:"planet"}),Object(T.jsxs)(Cn,{startAnimation:i,children:[Object(T.jsx)("img",{src:dn,alt:"cloud",width:"65px",height:"62px"}),Object(T.jsx)("img",{src:bn,alt:"Landing gear",width:"68px",height:"23px"}),Object(T.jsx)("img",{src:pn,alt:"cloud",width:"52px",height:"50px"})]}),Object(T.jsx)(zn,{startAnimation:i,children:Object(T.jsx)(Mn,{startAnimation:i,src:"data:image/png;base64,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",alt:"rocket"})}),Object(T.jsx)(On,{onClick:function(){o(!0),setTimeout((function(){o(!1)}),15e3)},disabled:i,children:"Launch Rocket!"}),Object(T.jsxs)(vn,{children:[Object(T.jsx)("div",{children:"Copyright \xa9 Usertive & SpaceX API"}),Object(T.jsx)("div",{children:"Recruiment Task / Summer 2021"})]})]})},jn=N.a.header(x||(x=Object(G.a)(["\n  position: absolute;\n  width: 116px;\n  height: 23.98px;\n  left: 11.4%;\n  top: 4%;\n"]))),hn=N.a.img(j||(j=Object(G.a)(["\n  position: absolute;\n  top: 7px;\n"]))),fn=N.a.img(h||(h=Object(G.a)(["\n  position: absolute;\n"]))),mn=N.a.div(f||(f=Object(G.a)(["\n  position: absolute;\n  width: 350px;\n  height: 448px;\n  left: 18%;\n  top: 20%;\n  display: grid;\n  grid-template-columns: 160px 160px;\n  grid-column-gap: 30px;\n  grid-row-gap: 32px;\n"]))),On=N.a.button(m||(m=Object(G.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 32px;\n  cursor: pointer;\n\n  position: absolute;\n  left: 64.31%;\n  right: 22.92%;\n  top: 72.92%;\n  bottom: 20.83%;\n\n  background: #7860d7;\n  border-radius: 8px;\n  font-style: normal;\n  font-weight: 500;\n  color: #ffffff;\n  border: none;\n  transition: background-color 0.2s linear;\n\n  :hover {\n    background-color: #544396;\n  }\n  :disabled {\n    background-color: #635c80;\n    color: black;\n    cursor: unset;\n  }\n"]))),An=Object(N.b)(O||(O=Object(G.a)(["\n0%,100% {\n  transform: translateX(-1px);\n}50%{\n  transform: translateX(1px)\n}\n"]))),wn=Object(N.b)(A||(A=Object(G.a)(["\n0%,100% {\n  transform: translateY(0);\n}40%,60%{\n  transform: translateY(-600px)\n}\n"]))),zn=N.a.div(w||(w=Object(G.a)(["\n  position: absolute;\n  left: 67%;\n  top: 12%;\n  animation: ",";\n  animation-duration: 15s;\n  animation-timing-function: ease;\n\n  ::before {\n    display: ",';\n    content: "";\n    position: absolute;\n    bottom: -100px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 10px;\n    height: 100px;\n    background: linear-gradient(#544396, transparent);\n  }\n'])),(function(n){return n.startAnimation?wn:" none"}),(function(n){return n.startAnimation?"block":" none"})),Mn=N.a.img(z||(z=Object(G.a)(["\n  width: 102px;\n  height: 140px;\n  animation: ",";\n  animation-duration: 0.2s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease;\n"])),(function(n){return n.startAnimation?An:" none"})),yn=Object(N.b)(M||(M=Object(G.a)(["\n  0%,100%{ opacity: 1; }\n  20%,80% { opacity: 0; }\n"]))),Cn=N.a.div(y||(y=Object(G.a)(["\n  position: absolute;\n  left: 63.5%;\n  top: 24%;\n  width: 190px;\n  height: 62px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  animation: ",";\n  animation-duration: 15s;\n  animation-timing-function: ease;\n  img {\n    width: auto;\n    height: auto;\n  }\n"])),(function(n){return n.startAnimation?yn:" none"})),Dn=N.a.img(C||(C=Object(G.a)(["\n  position: absolute;\n  height: 372px;\n  width: 375px;\n  left: 58%;\n  top: 21%;\n  border-radius: 0px;\n"]))),vn=N.a.footer(D||(D=Object(G.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: absolute;\n  left: 11.4%;\n  top: 94%;\n  width: 77%;\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n\n  letter-spacing: 0.4px;\n\n  color: #8d7fbc;\n"])));function kn(){return Object(T.jsxs)(En,{children:[Object(T.jsx)(Gn,{x:"-12%",y:"42%"}),Object(T.jsx)(Gn,{x:"33%",y:"-26%"}),Object(T.jsx)(Gn,{x:"88%",y:"15%"}),Object(T.jsx)(Yn,{x:"6%",y:"19%",color:"#E34A67"}),Object(T.jsx)(Yn,{x:"60%",y:"10%",color:"#00C9B7"}),Object(T.jsx)(Yn,{x:"87%",y:"71%",color:"#E34A67"}),Object(T.jsx)(Yn,{x:"53%",y:"85%",color:"#7860D7"}),Object(T.jsx)(xn,{})]})}var En=N.a.div(gn||(gn=Object(G.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n"]))),Yn=N.a.div(un||(un=Object(G.a)(["\n  position: absolute;\n  left: ",";\n  top: ",";\n  width: 8px;\n  height: 8px;\n  border: none;\n  background-color: ",";\n  border-radius: 50%;\n"])),(function(n){return n.x}),(function(n){return n.y}),(function(n){return n.color})),Gn=N.a.div(ln||(ln=Object(G.a)(["\n  position: absolute;\n  left: ",";\n  top: ",';\n  height: 300px;\n  width: 300px;\n  background-image: linear-gradient(135deg, #2b2347 0%, #221b3a 100%);\n  border-radius: 50%;\n\n  ::after {\n    content: "";\n    position: absolute;\n    top: calc(50% - 115px);\n    left: calc(50% - 115px);\n    height: 230px;\n    width: 230px;\n    background-color: #221b3a;\n    border-radius: 50%;\n  }\n'])),(function(n){return n.x}),(function(n){return n.y})),In=(e(32),e(33),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,40)).then((function(t){var e=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;e(n),i(n),o(n),a(n),r(n)}))});Y.a.render(Object(T.jsx)(k.a.StrictMode,{children:Object(T.jsx)(kn,{})}),document.getElementById("root")),In()}},[[34,1,2]]]);
//# sourceMappingURL=main.d096eb42.chunk.js.map