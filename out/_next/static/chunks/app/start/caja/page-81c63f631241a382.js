(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1205],{55867:function(e,t,l){Promise.resolve().then(l.bind(l,71194))},13726:function(e,t,l){"use strict";l.d(t,{Z:function(){return P}});var a=l(57437),i=l(33579),n=l.n(i),r=l(20124),o=l(31193),s=l(71733),d=l(79806),c=l(60335),u=l(60091),x=l(83719),h=l(62501),f=l(6291),p=l(11656),g=l(66325),m=l(90922),j=l(26032),C=l(55693),v=l(42188),S=l(66299),b=l(40301),Z=l(78457),k=l(21704),w=l(66246),N=l(16463),y=l(85800),E=l(2265),I=l(32184),O=l(7547),L=l(57300),R=l(86917),T=l(47905),D=l(87138),A=e=>{let{page:t}=e;return(0,a.jsx)(o.default,{children:(0,a.jsx)(I.Z,{children:t.map(e=>(0,a.jsx)(O.ZP,{disablePadding:!0,children:(0,a.jsxs)(L.Z,{LinkComponent:D.default,href:e.url,onClick:e.onClick,children:[(0,a.jsx)(R.Z,{children:e.icon}),(0,a.jsx)(T.Z,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};let B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,textAlign:"center",pt:2,px:4,pb:3};var P=()=>{let e=(0,N.useRouter)(),{auth:t,logout:l}=(0,y.a)(),[i,I]=(0,E.useState)(!1),[O,L]=(0,E.useState)(null),[R,T]=(0,E.useState)(!1),P=()=>{T(!1),L(null)},z=[{title:"USUARIOS ",url:"/components/usuarios",icon:(0,a.jsx)(g.Z,{})},{title:"PEDIDOS",url:"/components/pedidos",icon:(0,a.jsx)(m.Z,{})},{title:"CLIENTES",url:"/components/clientes",icon:(0,a.jsx)(j.Z,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(C.Z,{}),onClick:e=>{T(!0),L(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(v.Z,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,a.jsx)(S.Z,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),(0,a.jsxs)(o.default,{sx:{flexGrow:1},children:[(0,a.jsx)(s.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(c.Z,{color:"inherit",onClick:e=>{L(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(b.Z,{fontSize:"large"})}),(0,a.jsx)(o.default,{sx:{display:{xs:"none",md:"flex"}},children:z.map(e=>(0,a.jsx)(u.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:D.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(x.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(u.default,{component:D.default,href:"/start",color:"inherit",children:(0,a.jsx)(w.Z,{fontSize:"large"})}),(0,a.jsxs)(u.default,{className:n().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(k.Z,{fontSize:"large"}),t&&t.PER_Nom]}),(0,a.jsx)(u.default,{color:"inherit",onClick:()=>I(!0),children:(0,a.jsx)(Z.Z,{fontSize:"large"})})]})}),(0,a.jsx)(h.Z,{open:i,onClose:()=>I(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(o.default,{sx:B,children:[(0,a.jsx)(x.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,a.jsx)(o.default,{children:(0,a.jsx)(u.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{l(),e.push("/")},children:"SALIR"})})]})}),(0,a.jsxs)(f.Z,{id:"basic-menu",anchorEl:O,open:R,onClose:P,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(p.Z,{onClick:P,component:D.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,a.jsx)(p.Z,{onClick:P,component:D.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,a.jsx)(f.Z,{id:"basic-menu",anchorEl:O,MenuListProps:{"aria-labelledby":"basic-button"},open:!!O,onClose:()=>{L(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(A,{page:z})})]})]})}},71194:function(e,t,l){"use strict";l.r(t);var a=l(57437),i=l(69772),n=l.n(i),r=l(31193),o=l(83719),s=l(14595),d=l(60091),c=l(28027),u=l(32184),x=l(57300),h=l(47905),f=l(7547),p=l(60335),g=l(26460),m=l(62501),j=l(67622),C=l(2265),v=l(87138),S=l(61865),b=l(13726),Z=l(85800);let k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};t.default=()=>{let[e]=(0,C.useState)([]),[t,l]=(0,C.useState)(0),[i,w]=(0,C.useState)(0),[N,y]=(0,C.useState)(!1),[E,I]=(0,C.useState)(0),[O,L]=(0,C.useState)(""),{caja:R,setCaja:T,cliente:D}=(0,Z.a)(),[A,B]=(0,C.useState)(0),[P,z]=(0,C.useState)(0);(0,C.useEffect)(()=>{let e=e=>{let t=e.keyCode||e.which;if(t>=48&&t<=57||13===t){let e;0===P?e=I:1===P?e=l:2===P&&B(R.total),e&&e(e=>0===e?String.fromCharCode(t):e+String.fromCharCode(t))}},t=e=>{8===(e.keyCode||e.which)&&J()};return document.addEventListener("keypress",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("keypress",e),document.removeEventListener("keydown",t)}},[E,P]),(0,C.useEffect)(()=>{let l=[...e,{dinero:E},{dinero:t}].reduce((e,t)=>e+parseInt(t.dinero),0),a=R.total,i=parseInt(a.replace(/\./g,""));if(a===A){if(isNaN(A)||isNaN(i))L(0),w(0);else{let e=i-i,t=i-i;L(e>=0?e:0),w(t>=0?t:0)}}else if(isNaN(l)||isNaN(i))L(0),w(0);else{let e=i-l,t=l-i;console.log("Restante"+e),console.log("Restante"+t),L(e>=0?e:0),w(t>=0?t:0)}},[E,t,A,P]);let M=(e,t)=>{2===t&&B(R.total),z(t)},F=e=>{let t;let a=e.currentTarget.value;0===P?t=I:1===P?t=l:2===P&&B(R.total),t&&t(e=>0===e?a:e+a)},J=()=>{let e;0===P?e=I:1===P?e=l:2===P&&B(0),e&&e(e=>e.length>1?e.slice(0,-1):0)},_=e=>{let t;let a=parseInt(e.currentTarget.value);0===a?t=I:1===a?t=l:2===a&&(t=B),t&&t(e=>e.length>10?e.slice(0,-1):0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{marginBottom:"50px",children:["  ",(0,a.jsx)(b.Z,{})," "]}),(0,a.jsxs)(r.default,{sx:{width:"auto",height:"auto",display:"auto",justifyContent:"center",margin:"10%",alignItems:"center",padding:"auto"},children:[(0,a.jsx)(o.default,{className:n().className,sx:{fontSize:50,alignItems:"center",justifyContent:"center"},gutterBottom:!0,children:" PAGO "}),(0,a.jsx)(s.Z,{}),(0,a.jsx)(d.default,{component:v.default,variant:"outlined",href:"../start/pedidos/pedidosCaja",sx:{margin:"2px",bgcolor:"#B0DDFF",color:"black"},onClick:()=>{localStorage.removeItem("pago"),T({})},children:"Atras"}),(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,a.jsxs)(c.Z,{sx:{width:"100%",bgcolor:"background"},children:[(0,a.jsx)(c.Z,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(o.default,{sx:{fontSize:17},color:"primary",gutterBottom:!0,children:"Metodo de Pago"})}),(0,a.jsx)(c.Z,{children:(0,a.jsxs)(u.Z,{component:"nav","aria-label":"main mailbox folders",children:[(0,a.jsx)(x.Z,{selected:0===P,onClick:e=>M(e,0),children:(0,a.jsx)(h.Z,{primary:"Efectivo"})}),(0,a.jsx)(x.Z,{selected:1===P,onClick:e=>M(e,1),children:(0,a.jsx)(h.Z,{primary:"Banco"})}),(0,a.jsx)(x.Z,{selected:2===P,onClick:e=>M(e,2),children:(0,a.jsx)(h.Z,{primary:"Cuenta Cliente"})})]})}),(0,a.jsx)(c.Z,{sx:{backgroundColor:"#ffffff"},children:(0,a.jsx)(o.default,{sx:{fontSize:17,marginBottom:1},color:"primary",gutterBottom:!0,children:"Resumen"})}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(f.ZP,{secondaryAction:(0,a.jsx)(p.Z,{value:0,onClick:_,edge:"end: ","aria-label":"delete",children:(0,a.jsx)(j.Z,{})}),children:(0,a.jsx)(h.Z,{primary:"Efectivo:  ".concat(E.toLocaleString("es"))})}),(0,a.jsx)(f.ZP,{secondaryAction:(0,a.jsx)(p.Z,{value:1,onClick:_,edge:"end","aria-label":"delete",children:(0,a.jsx)(j.Z,{})}),children:(0,a.jsx)(h.Z,{primary:"Banco:   "+t.toLocaleString("es")})}),(0,a.jsx)(f.ZP,{secondaryAction:(0,a.jsx)(p.Z,{value:2,onClick:_,edge:"end","aria-label":"delete",children:(0,a.jsx)(j.Z,{})}),children:(0,a.jsx)(h.Z,{primary:"Cuenta Cliente: "+A.toLocaleString("es")})})]}),(0,a.jsx)(g.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:0,width:"100%",height:"100%"},children:(0,a.jsx)(d.default,{component:v.default,href:"../start/pedidos/ReciboCaja",variant:"outlined",onClick:()=>{let l=[...e,{efectivo:E},{banco:t},{cuentaCliente:A}],a=JSON.parse(localStorage.getItem("pago"))||{};a.cliente=D,a.tipoPago=l,a.cambio=i,localStorage.setItem("pago",JSON.stringify(a)),T(a)},sx:{width:"100%",height:250,backgroundColor:0===O?"#00796b":"transparent",color:0===O?"white":"black"},children:"Validar"})})]}),(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",width:"50%"},children:[(0,a.jsx)(r.default,{sx:{display:"flex",flexDirection:"column",zoom:2,width:"auto"},children:(0,a.jsxs)(g.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(d.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(o.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Cambio: $ "}),(0,a.jsxs)(o.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",i.toLocaleString("es")," "]})]}),(0,a.jsxs)(d.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(o.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Restante: $ "}),(0,a.jsxs)(o.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",O.toLocaleString("es")," "]})]}),(0,a.jsxs)(d.default,{sx:{flexDirection:"row"},children:[(0,a.jsx)(o.default,{variant:"outline",sx:{display:"flex",paddingRight:2,color:"black",fontSize:"1vw"},gutterBottom:!0,children:" Total: $ "}),(0,a.jsxs)(o.default,{sx:{fontSize:"1vw"},gutterBottom:!0,children:[" ",R.total," "]})]})]})}),(0,a.jsxs)(r.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignContent:"center",width:"100%",height:"100%",zoom:1.5},children:[(0,a.jsxs)(g.Z,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:1,onClick:F,children:"1"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:4,onClick:F,children:"4"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:7,onClick:F,children:"7"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:F,children:"+/-"})]}),(0,a.jsxs)(g.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:2,onClick:F,children:"2"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:5,onClick:F,children:"5"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:8,onClick:F,children:"8"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:0,onClick:F,children:"0"})]}),(0,a.jsxs)(g.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:3,onClick:F,children:"3"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:6,onClick:F,children:"6"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:9,onClick:F,children:"9"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:",",onClick:F,children:","})]}),(0,a.jsxs)(g.Z,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"50%",height:"100%"},children:[(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:10,onClick:F,children:"+10"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:20,onClick:F,children:"+20"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},value:50,onClick:F,children:"+50"}),(0,a.jsx)(d.default,{variant:"outlined",sx:{height:"100px"},onClick:J,children:"X"})]})]})]}),(0,a.jsxs)(c.Z,{sx:{width:"20%",bgcolor:"background.paper"},children:[(0,a.jsxs)(u.Z,{component:"nav","aria-label":"main mailbox folders",sx:{marginTop:-47},children:[(0,a.jsx)(x.Z,{selected:3===P,onClick:()=>y(!0),children:(0,a.jsx)(h.Z,{primary:"Cliente: ".concat(D.NOMBREALIAS)})}),(0,a.jsx)(x.Z,{selected:4===P,onClick:e=>M(e,4),children:(0,a.jsx)(h.Z,{primary:"Factura"})})]}),(0,a.jsx)(m.Z,{open:N,onClose:()=>y(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(r.default,{sx:k,children:(0,a.jsx)(S.default,{setOpen:y})})})]})]})]})]})}},61865:function(e,t,l){"use strict";l.r(t);var a=l(57437),i=l(2265),n=l(77699),r=l(60335),o=l(83719),s=l(74275),d=l(85800),c=l(68265),u=l(60091),x=l(28027),h=l(15656),f=l(31193);let p=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],g=async()=>(await fetch("/api/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}})).json();t.default=e=>{let{setOpen:t}=e,{setCliente:l}=(0,d.a)(),[m,j]=(0,i.useState)(),[C,v]=(0,i.useState)(""),[S,b]=(0,i.useState)(!1),[Z,k]=(0,i.useState)([]),[w,N]=(0,i.useState)([]);(0,i.useEffect)(()=>{y()},[]);let y=async()=>{let e=await g();try{e&&(j(e),k(e)),setTimeout(()=>{b(!0)},100)}catch(e){console.log("Error al obtener los datos",e)}},E=(0,i.useMemo)(()=>y,[]);(0,i.useEffect)(()=>{E()},[E]);let I=e=>{j(Z.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),i=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==i?void 0:i.includes(e.toLowerCase()))?t:null}))},O=(0,i.useCallback)(e=>{if(N(e),e.length>0){let a=Z.filter(t=>{let l=t.CLIENTE;return!!l&&l.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(a)),l(a[0]),t(!1)}},[m]);return setTimeout(()=>{b(!0)},100),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,a.jsx)(o.default,{variant:"h",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"CLIENTES"}),(0,a.jsxs)(f.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsx)(u.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"}),(0,a.jsxs)(x.Z,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:650,margin:"0%"},children:[(0,a.jsx)(s.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:C,onChange:e=>{e.preventDefault(),v(e.target.value),I(e.target.value)}}),(0,a.jsx)(r.Z,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(n.Z,{})})]})]}),(0,a.jsx)(h.Z,{in:S,children:(0,a.jsx)(f.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#00796b",color:"#000000"}},children:(0,a.jsx)(c._,{rows:m,columns:p,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],onRowSelectionModelChange:O,rowSelectionModel:w,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"}})})})]})})}},85800:function(e,t,l){"use strict";l.d(t,{AuthProvider:function(){return o},a:function(){return s}});var a=l(57437),i=l(2265),n=l(44785);let r=(0,i.createContext)({login:e=>{},logout:()=>{}}),o=e=>{let{children:t}=e,[l,o]=(0,i.useState)(null),[s,d]=(0,i.useState)({}),[c,u]=(0,i.useState)({}),[x,h]=(0,i.useState)({}),[f]=(0,i.useState)(!0),p=(0,i.useCallback)(function(e){n.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),o(e)},[]),g=(0,i.useCallback)(function(){n.Z.remove("authTokens"),localStorage.removeItem("auth"),o(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),l=localStorage.getItem("pedido"),a=localStorage.getItem("caja");e&&o(JSON.parse(e)),t&&d(JSON.parse(t)),l&&u(JSON.parse(l)),a&&h(JSON.parse(a))},[]);let m=(0,i.useMemo)(()=>({auth:l,cliente:s,setCliente:d,pedido:c,setPedido:u,caja:x,setCaja:h,loading:f,login:p,logout:g}),[l,s,c,x,p,g]);return(0,a.jsx)(r.Provider,{value:m,children:t})},s=()=>(0,i.useContext)(r)}},function(e){e.O(0,[4488,6571,4797,4129,6291,4275,3983,2561,6981,9105,8265,8022,2971,7023,1744],function(){return e(e.s=55867)}),_N_E=e.O()}]);