(this["webpackJsonpltijs-demo-grade"]=this["webpackJsonpltijs-demo-grade"]||[]).push([[0],{278:function(e,a,t){e.exports=t(313)},283:function(e,a,t){},313:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),l=(t(283),t(11)),i=t.n(l),s=t(19),m=t(35),u=t(57),p=t(339),g=t(340),d=t(83),b=t.n(d),h=t(175),f=t(338),v=t(342),E=t(263),w=t.n(E),x=t(264),k=t.n(x),y=t(72),j=t(247),C=t(243),O=t(244),N=t(246),S=t(341),T=t(245),F=t(140),B=(t(294),t(56)),_=t(48),I=Object(h.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"},submit:{margin:e.spacing(3,0,2)},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer",width:"300px",maxWidth:"100%"},logo1:{cursor:"pointer",margin:"auto","@media (max-height: 700px)":{maxWidth:"80%"}},slider:{backgroundColor:"#013b6c"},sliderstyle:{marginTop:e.spacing(3)},margin:{marginTop:e.spacing(4),marginRight:e.spacing(2),marginLeft:e.spacing(2),backgroundColor:"#013b6c"},table1:{marginBottom:e.spacing(4)},table2:{marginTop:e.spacing(4)}}}));function R(){var e=I(),a=Object(_.b)().enqueueSnackbar,t=Object(n.useState)(),o=Object(m.a)(t,2),c=o[0],l=o[1],d=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},E=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://cvmcosta.me/ltijs","_blank").focus();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("http://localcvm.com:3000/info",{credentials:"include",headers:{Authorization:"Bearer "+h()}}).json();case 3:a=e.sent,console.log(a),l(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),d("Failed trying to retrieve custom parameters! "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(f.a,{component:"main",maxWidth:"sm"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{container:!0,className:e.logo},r.a.createElement(g.a,{item:!0,xs:!0,className:e.logo1+" blank"},r.a.createElement(b.a,{className:e.logo,src:"https://raw.githubusercontent.com/Cvmcosta/ltijs/master/docs/logo-300.svg",onClick:E,disableSpinner:!0}))),c?[r.a.createElement(r.a.Fragment,null,c.email||c.name?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"body1"},"User Info"),r.a.createElement(S.a,{className:e.table1+" animate__animated animate__fadeIn",component:F.a},r.a.createElement(C.a,{"aria-label":"simple table"},r.a.createElement(O.a,null,c.name?r.a.createElement(T.a,{key:"name"},r.a.createElement(N.a,{component:"th",scope:"row"},"Name"),r.a.createElement(N.a,{align:"right"},c.name)):r.a.createElement(r.a.Fragment,null),c.email?r.a.createElement(T.a,{key:"email"},r.a.createElement(N.a,{component:"th",scope:"row"},"Email"),r.a.createElement(N.a,{align:"right"},c.email)):r.a.createElement(r.a.Fragment,null))))):r.a.createElement(r.a.Fragment,null)),r.a.createElement(r.a.Fragment,null,c.roles?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"body1"},"Roles"),r.a.createElement(S.a,{className:e.table1+" animate__animated animate__fadeIn",component:F.a},r.a.createElement(C.a,{"aria-label":"simple table"},r.a.createElement(O.a,null,c.roles.map((function(e){return r.a.createElement(T.a,{key:"name"},r.a.createElement(N.a,{component:"th",scope:"row"},e))})))))):r.a.createElement(r.a.Fragment,null)),r.a.createElement(r.a.Fragment,null,c.context?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"body1"},"Context"),r.a.createElement(S.a,{className:e.table1+" animate__animated animate__fadeIn",component:F.a},r.a.createElement(C.a,{"aria-label":"simple table"},r.a.createElement(O.a,null,Object.entries(c.context).map((function(e,a){return r.a.createElement(T.a,{key:"context"+a},r.a.createElement(N.a,{component:"th",scope:"row"},e[0]),r.a.createElement(N.a,{align:"right"},e[1]))})))))):r.a.createElement(r.a.Fragment,null))]:r.a.createElement(r.a.Fragment,null),r.a.createElement(y.a,{variant:"body1"},"Services"),r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(j.a,{title:"Grades Service","aria-label":"grades"},r.a.createElement(u.b,{to:{pathname:"/grades",search:document.location.search}},r.a.createElement(v.a,{color:"primary","aria-label":"add",className:e.margin},r.a.createElement(w.a,null)))),r.a.createElement(j.a,{title:"Names and Roles Service","aria-label":"namesandroles"},r.a.createElement(u.b,{to:{pathname:"/namesandroles",search:document.location.search}},r.a.createElement(v.a,{color:"primary","aria-label":"add",className:e.margin},r.a.createElement(k.a,null)))))))}var P=t(343),W=t(144),D=t(145),z=t.n(D),A=t(146),L=t.n(A),M=Object(h.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"},submit:{margin:e.spacing(3,0,2)},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},logo1:{cursor:"pointer",margin:"auto","@media (max-height: 700px)":{maxWidth:"80%"}},slider:{backgroundColor:"#013b6c"},sliderstyle:{marginTop:e.spacing(3)},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:e.spacing(4)},home:{backgroundColor:"#013b6c",position:"fixed",bottom:"1vh",left:"1vh"}}}));function U(){var e=M(),a=Object(_.b)().enqueueSnackbar,t=Object(n.useState)(70),o=Object(m.a)(t,2),c=o[0],l=o[1],d=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},h=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a("Grade "+t+" succesfully sent!",{variant:"success"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c,e.prev=1,a.preventDefault(),n={grade:t},e.next=6,B.a.post("http://localcvm.com:3000/grade",{json:n,headers:{Authorization:"Bearer "+d()}});case 6:h(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),E("Failed sending grade to platform! "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://cvmcosta.me/ltijs","_blank").focus();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{container:!0,className:e.logo},r.a.createElement(g.a,{item:!0,xs:!0,className:e.logo1+" blank"},r.a.createElement(b.a,{className:e.logo,src:"https://raw.githubusercontent.com/Cvmcosta/ltijs/master/docs/logo-300.svg",onClick:x,disableSpinner:!0}))),r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Select your grade:"),r.a.createElement(g.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(P.a,{value:"number"===typeof c?c:0,onChange:function(e,a){l(a)},"aria-labelledby":"input-slider",color:"primary",classes:{thumbColorPrimary:e.slider,rail:e.slider,track:e.slider},className:e.sliderstyle})),r.a.createElement(g.a,{item:!0},r.a.createElement(W.a,{className:e.input,value:c,margin:"none",onChange:function(e){l(""===e.target.value?"":Number(e.target.value))},onBlur:function(){c<0?l(0):c>100&&l(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))),r.a.createElement(v.a,{variant:"extended",color:"primary","aria-label":"add",className:e.margin,onClick:w},r.a.createElement(z.a,{className:e.extendedIcon}),"Submit")),r.a.createElement(u.b,{to:{pathname:"/",search:document.location.search}},r.a.createElement(v.a,{color:"primary","aria-label":"home",className:e.home},r.a.createElement(L.a,null))))}var q=t(147),G=t.n(q),H=Object(h.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{overflow:"hidden",width:"100%",display:"flex",justifyContent:"center"},fab:{marginTop:e.spacing(4)},btnDiv:{display:"flex",justifyContent:"center"},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:"10%"},home:{backgroundColor:"#013b6c",position:"fixed",bottom:"1vh",left:"1vh"}}}));function J(){var e=H(),a=Object(_.b)().enqueueSnackbar,t=Object(n.useState)(),o=Object(m.a)(t,2),c=o[0],l=o[1],d=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},b=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("http://localcvm.com:3000/members",{headers:{Authorization:"Bearer "+d()}}).json();case 3:a=e.sent,console.log(a),l(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),b("Failed retrieving members! "+e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(f.a,{component:"main",maxWidth:"lg"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12,className:e.table},r.a.createElement(G.a,{title:"Members:",data:c,columns:[{name:"name",label:"Name"},{name:"roles",label:"Role"}],options:{filterType:"checkbox",selectableRows:"none",disableToolbarSelect:!0,download:!1,print:!1,searchOpen:!1,viewColumns:!1,filter:!1,selectableRowsOnClick:!1,rowsPerPage:5,responsive:"scrollFullHeight"}})))),r.a.createElement(u.b,{to:{pathname:"/",search:document.location.search}},r.a.createElement(v.a,{color:"primary","aria-label":"home",className:e.home},r.a.createElement(L.a,null))))}var V=t(267),$=t.n(V),K=Object(h.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{overflow:"hidden",width:"100%",display:"flex",justifyContent:"center"},fab:{marginTop:e.spacing(4)},btnDiv:{display:"flex",justifyContent:"center"},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:"10%"}}}));function Q(){var e=K(),a=Object(_.b)().enqueueSnackbar,t=Object(n.useState)(!1),o=Object(m.a)(t,2),c=o[0],l=o[1],u=Object(n.useState)([]),d=Object(m.a)(u,2),b=d[0],h=d[1],E=Object(n.useState)([]),w=Object(m.a)(E,2),x=w[0],k=w[1],y=function(){var e=new URLSearchParams(window.location.search).get("ltik");if(!e)throw new Error("Missing lti key.");return e},j=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t,{variant:"error"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("http://localcvm.com:3000/resources",{headers:{Authorization:"Bearer "+y()}}).json();case 3:a=e.sent,h(a),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),j("Failed retrieving example resources! "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1!==c){e.next=4;break}return j("Please select a resource."),e.abrupt("return");case 4:return e.next=6,B.a.post("http://localcvm.com:3000/deeplink",{json:b[c],headers:{Authorization:"Bearer "+y()}}).text();case 6:a=e.sent,$()("body").append(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),j("Failed creating deep link! "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O={filterType:"checkbox",selectableRows:"single",disableToolbarSelect:!0,download:!1,print:!1,searchOpen:!1,search:!1,viewColumns:!1,filter:!1,selectableRowsOnClick:!0,onRowsSelect:function(e,a){l(e[0].dataIndex),k(a.map((function(e){return e.dataIndex})))},rowsSelected:x,rowsPerPage:5,responsive:"scrollFullHeight"};return r.a.createElement(f.a,{component:"main",maxWidth:"lg"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12,className:e.table},r.a.createElement(G.a,{title:"Example custom resources:",data:b,columns:[{name:"name",label:"Name"},{name:"value",label:"Value"}],options:O}),r.a.createElement(g.a,{item:!0,xs:!0,className:e.btnDiv},r.a.createElement(v.a,{variant:"extended",color:"primary","aria-label":"add",className:e.fab,onClick:C},r.a.createElement(z.a,{className:e.extendedIcon}),"Submit"))))))}var X=Object(h.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center",alignContent:"center"},submit:{margin:e.spacing(3,0,2)},logodiv:{marginBottom:e.spacing(8),backgroundColor:"transparent "},logo:{cursor:"pointer"},logo1:{cursor:"pointer",margin:"auto","@media (max-height: 700px)":{maxWidth:"80%"}},slider:{backgroundColor:"#013b6c"},sliderstyle:{marginTop:e.spacing(3)},margin:{marginTop:e.spacing(4),backgroundColor:"#013b6c"},table:{marginTop:e.spacing(4)},home:{backgroundColor:"#013b6c",position:"fixed",bottom:"1vh",left:"1vh"},maindiv:{display:"flex",flexDirection:"column",justifyContent:"center"}}}));function Y(){var e=X(),a=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://cvmcosta.me/ltijs","_blank").focus();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{className:e.maindiv,component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(g.a,{container:!0,className:e.logo},r.a.createElement(g.a,{item:!0,xs:!0,className:e.logo1+" blank"},r.a.createElement(b.a,{className:e.logo,src:"https://raw.githubusercontent.com/Cvmcosta/ltijs/master/docs/logo-300.svg",onClick:a,disableSpinner:!0})))))}var Z=t(21);function ee(){return r.a.createElement(u.a,null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{exact:!0,path:"/"},r.a.createElement(R,null)),r.a.createElement(Z.a,{path:"/grades"},r.a.createElement(U,null)),r.a.createElement(Z.a,{path:"/namesandroles"},r.a.createElement(J,null)),r.a.createElement(Z.a,{path:"/deeplink"},r.a.createElement(Q,null)),r.a.createElement(Z.a,{path:"/nolti"},r.a.createElement(Y,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_.a,{maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[278,1,2]]]);
//# sourceMappingURL=main.4f173559.chunk.js.map