(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8968],{66696:function(e,t,n){Promise.resolve().then(n.bind(n,27726))},27726:function(e,t,n){"use strict";n.r(t);var i=n(57437),r=n(31193),l=n(13100),a=n(71733),o=n(79806),s=n(60091),c=n(15656),u=n(28027),d=n(20124),h=n(83719),x=n(23983),f=n(26460),g=n(1782),m=n(57312),v=n(2265),p=n(93224),j=n(42716),E=n(64379),C=n.n(E),w=n(66648),b=n(87138),D=n(15408),A=n(85935);let L=()=>{C().fire({title:"\xa1Hora de ENTRADA registrada",icon:"success",button:"Aceptar"})},y=()=>{C().fire({title:"\xa1Hora de SALIDA registrada",icon:"success",button:"Aceptar"})},k=()=>{C().fire({title:"\xa1Por favor verifica la conexion o actualiza la pagina",icon:"warning",buttons:{confirm:"Aceptar"}})},U=()=>{C().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",button:"Aceptar"})},T=()=>{C().fire({title:"\xa1Espere un momento porfavor,estamos procesando",text:"Si esta muy lento,cancele el proceso y verifique su conexion",icon:"warning",button:"cancelar"})},Z=()=>{C().fire({title:"CEDULA no existe!",icon:"error",button:"Aceptar"})};t.default=()=>{let e=(0,v.useRef)(null),[t,n]=(0,v.useState)(!1),[E,C]=(0,v.useState)(navigator.onLine),{form:S,setForm:N,changed:O}=(0,j.c)({cedula:""});(0,v.useEffect)(()=>{C(navigator.onLine);let e=()=>C(!0),t=()=>C(!1);return window.addEventListener("online",e),window.addEventListener("offline",t),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[]),(0,v.useEffect)(()=>{let e=setTimeout(()=>{n(!0)},500);return()=>{clearTimeout(e)}},[]),(0,v.useEffect)(()=>{let t=setTimeout(()=>{e.current.focus()},100);return()=>{clearTimeout(t)}},[]);let _=async e=>{e.preventDefault();let t=S.CEDULA;if(!S.CEDULA){console.info("Por favor, completa todos los campos");return}if(!E){U();return}try{T();let{data:e}=await (0,D.Z)(A.x.url+"/control_entradas/documento/"+t,"POST");!0===E?res.ok?"0"===e.respuesta?(N({CEDULA:""}),L()):"1"===e.respuesta?(N({CEDULA:""}),y()):"3"===e.respuesta&&(N({CEDULA:""}),Z()):(N({CEDULA:""}),k()):U()}catch(e){console.log("Error")}},z=e=>{let t=e.currentTarget.value;N(e=>({...e,CEDULA:e.CEDULA+t}))};return(0,i.jsx)(r.default,{className:"login-content",children:(0,i.jsxs)(r.default,{sx:{height:180},children:[(0,i.jsx)(l.Z,{direction:"down",in:t,mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsx)(a.Z,{position:"static",sx:{bgcolor:"#262626",height:"80px"},children:(0,i.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:(0,i.jsx)(s.default,{component:b.default,href:"/",sx:{color:"white"},children:(0,i.jsx)(g.Z,{sx:{fontSize:60,paddingTop:1}})})})})}),(0,i.jsx)(r.default,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsx)(c.Z,{in:t,children:(0,i.jsxs)(u.default,{className:"",component:"main",children:[(0,i.jsx)(d.default,{}),(0,i.jsxs)(r.default,{sx:{padding:2},children:[E?(0,i.jsx)(p.Z,{sx:{color:"green"}}):(0,i.jsx)(m.Z,{sx:{color:"red"}}),(0,i.jsx)(h.default,{variant:"h6",noWrap:!0,component:"div",sx:{margin:"5px",display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsx)(w.default,{src:"/img/logo_miguelgomez-bglight.png",width:"120",height:"80",alt:"imagenmg",priority:!0})}),(0,i.jsx)(c.Z,{in:t,style:{transitionDelay:t?"700ms":"0ms"},children:(0,i.jsxs)(r.default,{component:"form",onSubmit:_,noValidate:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"CEDULA",name:"CEDULA",placeholder:"Digite su c\xe9dula",autoComplete:"CEDULA",value:S.CEDULA,onChange:O,inputRef:e,sx:{zoom:2.5}}),(0,i.jsx)(r.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:(0,i.jsx)(s.default,{type:"submit",variant:"contained",color:"success",sx:{width:600,height:100,margin:1,fontSize:30},children:"Enviar"})}),(0,i.jsxs)(r.default,{sx:{zoom:4.1},children:[(0,i.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:1,onClick:z,children:"1"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:4,onClick:z,children:"4"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:7,onClick:z,children:"7"})]}),(0,i.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:2,onClick:z,children:"2"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:5,onClick:z,children:"5"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:8,onClick:z,children:"8"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:z,children:"0"})]}),(0,i.jsxs)(f.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:3,onClick:z,children:"3"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:6,onClick:z,children:"6"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%"},value:9,onClick:z,children:"9"}),(0,i.jsx)(s.default,{variant:"outlined",sx:{height:"100%",bgcolor:"#ff615b",color:"black"},onClick:()=>{N(e=>({...e,CEDULA:e.CEDULA.slice(0,-1)}))},children:"X"})]})]})]})})]})]})})})]})})}},42716:function(e,t,n){"use strict";n.d(t,{c:function(){return r}});var i=n(2265);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=(0,i.useState)(e);return{form:t,changed:e=>{let{name:i,value:r}=e.target;n({...t,[i]:r})},setForm:n}}},85935:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});let i={url:"http://172.20.20.3:8001/"}},15408:function(e,t){"use strict";let n=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3?arguments[3]:void 0;try{let r=!0,l={method:"GET"};("GET"===t||"DELETE"===t)&&(l={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(n),i?l={method:t,body:n}:l.body=JSON.stringify(n));let a=await fetch(e,l);if(!a.ok)return{error:"Error en la solicitud Fetch",status:a.status,cargando:!1};let o=await a.json();return r=!1,{datos:o,cargando:r}}catch(e){return{datos:null,cargando:!1}}};t.Z=n}},function(e){e.O(0,[9461,4797,4129,6291,2561,4275,3983,6540,6648,6896,2971,7023,1744],function(){return e(e.s=66696)}),_N_E=e.O()}]);