(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1267],{47739:(e,t,l)=>{Promise.resolve().then(l.bind(l,28932))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>z});var a=l(95155),i=l(48173),n=l.n(i),r=l(75436),o=l(4918),s=l(41983),d=l(36017),c=l(2091),u=l(60391);let x=e=>{let{page:t}=e;return(0,a.jsx)(r.default,{children:(0,a.jsx)(o.A,{children:t.map(e=>(0,a.jsx)(s.Ay,{disablePadding:!0,children:(0,a.jsxs)(d.A,{LinkComponent:n(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(c.A,{children:e.icon}),(0,a.jsx)(u.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var h=l(78897),f=l.n(h),p=l(12115),g=l(79046),m=l.n(g),j=l(2138),C=l(70689),A=l(96212),v=l(85067),S=l(85244),b=l(74676),k=l(92080),N=l(6069),w=l(9581),y=l(43677),E=l(20457),I=l(11451),L=l(46805),O=l(894),R=l(2295),T=l(9561),D=l(81894),B=l(91888);let z=()=>{let{auth:e,logout:t}=(0,C.A)(),[l,i]=(0,p.useState)(null),[o,s]=(0,p.useState)(!1),d=()=>{s(!1),i(null)},c=[{title:"USUARIOS ",url:"/start/usuarios/",icon:(0,a.jsx)(b.A,{})},{title:"PEDIDOS",url:"/start/pedidos/",icon:(0,a.jsx)(k.A,{})},{title:"CLIENTES",url:"/start/clients/",icon:(0,a.jsx)(A.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(N.A,{}),onClick:e=>{s(!0),i(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas/",icon:(0,a.jsx)(w.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja/",icon:(0,a.jsx)(y.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E.default,{}),(0,a.jsxs)(r.default,{sx:{flexGrow:1},children:[(0,a.jsx)(I.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(L.A,{children:[(0,a.jsx)(O.A,{color:"inherit",onClick:e=>{i(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(S.A,{})}),(0,a.jsx)(r.default,{sx:{display:{xs:"none",md:"flex"}},children:c.map(e=>(0,a.jsx)(R.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:n(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(T.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(R.default,{component:n(),href:"/start",color:"inherit",children:(0,a.jsx)(j.A,{})}),(0,a.jsxs)(R.default,{className:m().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(A.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(R.default,{color:"inherit",onClick:()=>{f().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(v.A,{})})]})}),(0,a.jsxs)(D.A,{id:"basic-menu",anchorEl:l,open:o,onClose:d,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(B.A,{onClick:d,component:n(),href:"/start/buscarProd/",children:"Buscar Por Referencias"}),(0,a.jsx)(B.A,{onClick:d,component:n(),href:"/start/productosMG/",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(D.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{i(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(x,{page:c})})]})]})}},28932:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>w});var a=l(95155),i=l(48173),n=l.n(i),r=l(7190),o=l.n(r),s=l(12115),d=l(70689),c=l(65068),u=l(450),x=l(58896),h=l(75436),f=l(2295),p=l(2241),g=l(78562),m=l(9561),j=l(4918),C=l(36017),A=l(60391),v=l(41983),S=l(894),b=l(62347),k=l(23613);let N={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90vh",maxWidth:"80vw",overflowY:"auto",overflowX:"hidden",padding:"16px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:24},w=()=>{let[e]=(0,s.useState)([]),[t,l]=(0,s.useState)(0),[i,r]=(0,s.useState)(0),[w,y]=(0,s.useState)(!1),[E,I]=(0,s.useState)(0),[L,O]=(0,s.useState)(""),{caja:R,setCaja:T,cliente:D}=(0,d.A)(),[B,z]=(0,s.useState)(0),[P,M]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=e=>{let t=e.keyCode||e.which;if(t>=48&&t<=57||13===t){let e;0===P?e=I:1===P?e=l:2===P&&z(R.total),e&&e(e=>0===e?String.fromCharCode(t):e+String.fromCharCode(t))}},t=e=>{8===(e.keyCode||e.which)&&_()};return document.addEventListener("keypress",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("keypress",e),document.removeEventListener("keydown",t)}},[E,P]),(0,s.useEffect)(()=>{let l=[...e,{dinero:E},{dinero:t}].reduce((e,t)=>e+parseInt(t.dinero),0),a=R.total,i=parseInt(a.replace(/\./g,""));if(a===B){if(isNaN(B)||isNaN(i))O(0),r(0);else{let e=i-i,t=i-i;O(e>=0?e:0),r(t>=0?t:0)}}else if(isNaN(l)||isNaN(i))O(0),r(0);else{let e=i-l,t=l-i;console.log("Restante"+e),console.log("Restante"+t),O(e>=0?e:0),r(t>=0?t:0)}},[E,t,B,P]);let F=(e,t)=>{2===t&&z(R.total),M(t)},J=e=>{let t;let a=e.currentTarget.value;0===P?t=I:1===P?t=l:2===P&&z(R.total),t&&t(e=>0===e?a:e+a)},_=()=>{let e;0===P?e=I:1===P?e=l:2===P&&z(0),e&&e(e=>e.length>1?e.slice(0,-1):0)},G=e=>{let t;let a=parseInt(e.currentTarget.value);0===a?t=I:1===a?t=l:2===a&&(t=z),t&&t(e=>e.length>10?e.slice(0,-1):0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(h.default,{children:[" "," "," ",(0,a.jsx)(c.A,{})," "," "," "]}),(0,a.jsxs)(h.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"0px 4px 12px rgba(0,0,0,0.1)"},children:[(0,a.jsxs)(h.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"90%",margin:1},children:[(0,a.jsxs)("h2",{className:o().className,style:{fontSize:"2rem",alignItems:"center",justifyContent:"center"},children:[" "," PAGO "," "]}),(0,a.jsx)(f.default,{component:n(),variant:"outlined",href:"../start/pedidos/pedidosCaja",sx:{bgcolor:"#B0DDFF",color:"black"},onClick:()=>{localStorage.removeItem("pago"),T({})},children:"Atras"})]}),(0,a.jsx)(p.A,{}),(0,a.jsxs)(g.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(g.A,{sx:{width:"50%",bgcolor:"background"},children:[(0,a.jsx)(g.A,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(m.default,{sx:{fontSize:17},color:"primary",gutterBottom:!0,children:"Metodo de Pago"})}),(0,a.jsx)(g.A,{children:(0,a.jsxs)(j.A,{component:"nav","aria-label":"main mailbox folders",children:[(0,a.jsx)(C.A,{selected:0===P,onClick:e=>F(e,0),children:(0,a.jsx)(A.A,{primary:"Efectivo"})}),(0,a.jsx)(C.A,{selected:1===P,onClick:e=>F(e,1),children:(0,a.jsx)(A.A,{primary:"Banco"})}),(0,a.jsx)(C.A,{selected:2===P,onClick:e=>F(e,2),children:(0,a.jsx)(A.A,{primary:"Cuenta Cliente"})})]})}),(0,a.jsx)(g.A,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(m.default,{sx:{fontSize:17,marginBottom:1},color:"primary",gutterBottom:!0,children:"Resumen"})}),(0,a.jsxs)(g.A,{children:[(0,a.jsx)(v.Ay,{secondaryAction:(0,a.jsx)(S.A,{value:0,onClick:G,edge:"end: ","aria-label":"delete",children:(0,a.jsx)(u.A,{})}),children:(0,a.jsx)(A.A,{primary:"Efectivo:  ".concat(E.toLocaleString("es"))})}),(0,a.jsx)(v.Ay,{secondaryAction:(0,a.jsx)(S.A,{value:1,onClick:G,edge:"end","aria-label":"delete",children:(0,a.jsx)(u.A,{})}),children:(0,a.jsx)(A.A,{primary:"Banco:   "+t.toLocaleString("es")})}),(0,a.jsx)(v.Ay,{secondaryAction:(0,a.jsx)(S.A,{value:2,onClick:G,edge:"end","aria-label":"delete",children:(0,a.jsx)(u.A,{})}),children:(0,a.jsx)(A.A,{primary:"Cuenta Cliente: "+B.toLocaleString("es")})})]}),(0,a.jsx)(b.A,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:0,width:"100%",height:"100%"},children:(0,a.jsx)(f.default,{component:n(),href:"../pedidos/ReciboCaja/",variant:"outlined",onClick:()=>{let l=[...e,{efectivo:E},{banco:t},{cuentaCliente:B}],a=JSON.parse(localStorage.getItem("pago"))||{};a.cliente=D,a.tipoPago=l,a.cambio=i,localStorage.setItem("pago",JSON.stringify(a)),T(a)},sx:{width:"100%",height:250,backgroundColor:0===L?"#00796b":"transparent",color:0===L?"white":"black"},children:"Validar"})})]}),(0,a.jsxs)(g.A,{sx:{display:"flex",flexDirection:"column",width:"50%"},children:[(0,a.jsx)(h.default,{sx:{display:"flex",flexDirection:"column",zoom:2,width:"auto"},children:(0,a.jsxs)(b.A,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(f.default,{sx:{flexDirection:"row"},children:[(0,a.jsxs)(m.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"8px"},gutterBottom:!0,children:[" ","Cambio: "," "]}),(0,a.jsxs)(m.default,{sx:{fontSize:"8px"},gutterBottom:!0,children:[" ","$",i.toLocaleString("es")," "]})]}),(0,a.jsxs)(f.default,{sx:{flexDirection:"row"},children:[(0,a.jsxs)(m.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"8px"},gutterBottom:!0,children:[" ","Restante: "," "]}),(0,a.jsxs)(m.default,{sx:{fontSize:"8px"},gutterBottom:!0,children:[" ","$",L.toLocaleString("es")," "]})]}),(0,a.jsxs)(f.default,{sx:{flexDirection:"row"},children:[(0,a.jsxs)(m.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"8px"},gutterBottom:!0,children:[" ","Total: "," "]}),(0,a.jsxs)(m.default,{sx:{fontSize:"8px"},gutterBottom:!0,children:[" ","$",R.total," "]})]})]})}),(0,a.jsxs)(h.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignContent:"center",width:"100%",height:"100%",zoom:1.5},children:[(0,a.jsxs)(b.A,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:1,onClick:J,children:"1"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:4,onClick:J,children:"4"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:7,onClick:J,children:"7"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:J,children:"+/-"})]}),(0,a.jsxs)(b.A,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:2,onClick:J,children:"2"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:5,onClick:J,children:"5"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:8,onClick:J,children:"8"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:J,children:"0"})]}),(0,a.jsxs)(b.A,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:3,onClick:J,children:"3"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:6,onClick:J,children:"6"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:9,onClick:J,children:"9"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:",",onClick:J,children:","})]}),(0,a.jsxs)(b.A,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:10,onClick:J,children:"+10"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:20,onClick:J,children:"+20"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},value:50,onClick:J,children:"+50"}),(0,a.jsx)(f.default,{variant:"outlined",sx:{height:"100px"},onClick:_,children:"X"})]})]})]}),(0,a.jsxs)(g.A,{sx:{width:"20%",bgcolor:"background.paper"},children:[(0,a.jsxs)(j.A,{component:"nav","aria-label":"main mailbox folders",sx:{marginTop:-47},children:[(0,a.jsx)(C.A,{selected:3===P,onClick:()=>y(!0),children:(0,a.jsx)(A.A,{primary:"CLIENTE: ".concat(D.NOMBREALIAS)})}),(0,a.jsx)(C.A,{selected:4===P,onClick:e=>F(e,4),children:(0,a.jsx)(A.A,{primary:"FACTURA"})})]}),(0,a.jsx)(k.A,{open:w,onClose:()=>y(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(h.default,{sx:N,children:(0,a.jsx)(x.default,{setOpen:y})})})]})]})]})]})}},58896:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>p});var a=l(95155),i=l(75436),n=l(8889),r=l(78562),o=l(74205),s=l(6403),d=l(70689),c=l(894),u=l(78205),x=l(12115);let h=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],f=async()=>{try{let e=await fetch(n.c.url+"/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Network response was not ok");return await e.json()}catch(e){return console.error("Error fetching clients:",e),[]}},p=e=>{let{setOpen:t}=e,{setCliente:l}=(0,d.A)(),[n,p]=(0,x.useState)(""),[g,m]=(0,x.useState)([]),[j,C]=(0,x.useState)([]),[A,v]=(0,x.useState)([]);(0,x.useEffect)(()=>{(async()=>{let e=await f();e&&e.length>0?(v(e),C(e)):console.log("No se encontraron clientes")})()},[]);let S=e=>{v(j.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),i=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==i?void 0:i.includes(e.toLowerCase()))}))},b=(0,x.useCallback)(e=>{if(m(e),e.length>0){let a=j.filter(t=>{let l=t.CLIENTE;return l&&l.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(a)),l(a[0]),t(!1)}},[j]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsx)("h2",{children:(0,a.jsx)("strong",{children:"CLIENTES"})}),(0,a.jsxs)(r.A,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-right",width:600,margin:"0%"},children:[(0,a.jsx)(s.Ay,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:n,onChange:e=>{e.preventDefault(),p(e.target.value),S(e.target.value)}}),(0,a.jsx)(c.A,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(u.A,{})})]})]}),(0,a.jsx)(i.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#00796b",color:"#000000"}},children:(0,a.jsx)(o.z,{rows:A,columns:h,pageSizeOptions:[5,10],onRowSelectionModelChange:b,rowSelectionModel:g,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}}})})]})})}},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>a});let a={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>d,AuthProvider:()=>s});var a=l(95155),i=l(12115),n=l(76046),r=l(89208);let o=(0,i.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,l=(0,n.useRouter)(),[s]=(0,i.useState)(!0),[d,c]=(0,i.useState)(null),[u,x]=(0,i.useState)({}),[h,f]=(0,i.useState)({}),[p,g]=(0,i.useState)({}),m=(0,i.useCallback)(function(e){r.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),c(e)},[]),j=(0,i.useCallback)(function(){l.push("/"),r.A.remove("authTokens"),localStorage.removeItem("auth"),c(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth")||r.A.get("authTokens"),t=localStorage.getItem("pedido"),l=localStorage.getItem("caja"),a=localStorage.getItem("cliente");a&&x(JSON.parse(a)),t&&f(JSON.parse(t)),l&&g(JSON.parse(l)),e&&c(JSON.parse(e))},[]);let C=(0,i.useMemo)(()=>({auth:d,cliente:u,setCliente:x,pedido:h,setPedido:f,caja:p,setCaja:g,loading:s,login:m,logout:j}),[d,u,h,p,m,j]);return(0,a.jsx)(o.Provider,{value:C,children:t})},d=()=>(0,i.useContext)(o)}},e=>{var t=t=>e(e.s=t);e.O(0,[4659,339,8320,9754,1083,1260,6403,152,8173,2670,7493,4205,8625,8441,1517,7358],()=>t(47739)),_N_E=e.O()}]);