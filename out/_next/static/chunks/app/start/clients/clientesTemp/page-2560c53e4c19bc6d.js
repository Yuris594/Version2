(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8110],{78217:function(e,t,a){Promise.resolve().then(a.bind(a,41984))},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return P}});var l=a(57437),i=a(20124),r=a(31193),o=a(71733),d=a(79806),n=a(60335),s=a(60091),c=a(83719),h=a(62501),u=a(6291),x=a(11656),f=a(66325),m=a(90922),p=a(26032),j=a(55693),g=a(42188),N=a(66299),C=a(78457),S=a(21704),b=a(66246),E=a(9504),w=a(16463),O=a(85800),A=a(2265),y=a(32184),D=a(7547),I=a(57300),v=a(86917),F=a(47905),Z=a(87138),T=e=>{let{page:t}=e;return(0,l.jsx)(r.default,{children:(0,l.jsx)(y.Z,{children:t.map(e=>(0,l.jsx)(D.ZP,{disablePadding:!0,children:(0,l.jsxs)(I.Z,{LinkComponent:Z.default,href:e.url,onClick:e.onClick,children:[(0,l.jsx)(v.Z,{children:e.icon}),(0,l.jsx)(F.Z,{children:e.title})]})},e.title))})})};let R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var P=()=>{let e=(0,w.useRouter)(),{auth:t,logout:a}=(0,O.a)(),[y,D]=(0,A.useState)(!1),[I,v]=(0,A.useState)(null),[F,P]=(0,A.useState)(!1),L=()=>{P(!1),v(null)},k=[{title:"USUARIOS ",url:"../start/usuarios",icon:(0,l.jsx)(f.Z,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,l.jsx)(m.Z,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,l.jsx)(p.Z,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(j.Z,{}),onClick:e=>{P(!0),v(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,l.jsx)(g.Z,{})},{title:"CAJA",url:"../start/pedidos/pedidosCaja",icon:(0,l.jsx)(N.Z,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{}),(0,l.jsxs)(r.default,{sx:{flexGrow:1},children:[(0,l.jsx)(o.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(n.Z,{color:"inherit",onClick:e=>{v(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(E.Z,{})}),(0,l.jsx)(r.default,{sx:{display:{xs:"none",md:"flex"}},children:k.map(e=>(0,l.jsx)(s.default,{sx:{fontWeight:"bold"},color:"inherit",size:"large",LinkComponent:Z.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(s.default,{component:Z.default,href:"/start",color:"inherit",children:(0,l.jsx)(b.Z,{})}),(0,l.jsxs)(s.default,{color:"inherit",children:[(0,l.jsx)(S.Z,{}),t&&t.PER_Nom]}),(0,l.jsx)(s.default,{color:"inherit",onClick:()=>D(!0),children:(0,l.jsx)(C.Z,{})})]})}),(0,l.jsx)(h.Z,{open:y,onClose:()=>D(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(r.default,{sx:R,children:[(0,l.jsx)(c.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,l.jsx)(r.default,{children:(0,l.jsx)(s.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{a(),e.push("/")},children:"SALIR"})})]})}),(0,l.jsxs)(u.Z,{id:"basic-menu",anchorEl:I,open:F,onClose:L,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(x.Z,{onClick:L,component:Z.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,l.jsx)(x.Z,{onClick:L,component:Z.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,l.jsx)(u.Z,{id:"basic-menu",anchorEl:I,MenuListProps:{"aria-labelledby":"basic-button"},open:!!I,onClose:()=>{v(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(T,{page:k})})]})]})}},41984:function(e,t,a){"use strict";a.r(t);var l=a(57437),i=a(31193),r=a(28027),o=a(60091),d=a(14595),n=a(26460),s=a(83719),c=a(68038),h=a(65786),u=a(58433),x=a(23983),f=a(92355),m=a(97183),p=a(99128),j=a(2265),g=a(52610),N=a(41448),C=a.n(N),S=a(87138),b=a(85800),E=a(13726);function w(e){let{children:t,value:a,index:r,...o}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),...o,children:a===r&&(0,l.jsx)(i.default,{sx:{p:3},children:t})})}function O(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}w.propTypes={children:C().node,index:C().number.isRequired,value:C().number.isRequired};let A=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),y=[{field:"FECHA_PEDIDO",headerName:"Fecha",width:250,renderCell:e=>A(e.value)},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ESTADO",headerName:"Estado",width:130},{field:"AUTORIZADONOM",headerName:"Autorizado",width:130},{field:"TOTAL_A_FACTURAR",headerName:"Total a facturar",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"CreatedBy",headerName:"Creado por",width:230},{field:"U_EDITADOPOR",headerName:"Editado por",width:130},{field:"OBSERVACIONES",headerName:"Notas ",width:130},{field:"COMENTARIO_CXC",headerName:"Comentarios CL",width:300}],D=[{field:"FACTURA",headerName:"Factura",width:130},{field:"FECHA_DESPACHO",headerName:"Fecha",width:190,renderCell:e=>A(e.value)},{field:"ANULADA",headerName:"AN",width:130},{field:"PRECIO_TOTAL",headerName:"V.fact",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ARTICULO",headerName:"Articulo",width:130},{field:"DESCRIPCION",headerName:"Descripcion",width:700},{field:"CANTIDAD",headerName:"Cant",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PRECIO_UNITARIO",headerName:"PrecioUni",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PORCIVA",headerName:"IVA",width:100,align:"right"},{field:"PORDESC",headerName:"Desc",width:130,align:"right"},{field:"VDESC",headerName:"VDesc",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"IDRUTERO",headerName:"IdRutero",width:130},{field:"FECHARUT",headerName:"FechaRut",width:300},{field:"IDGUIA",headerName:"IdGuia",width:130},{field:"FECHAGUIA",headerName:"FechaGuia",width:250,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"OBSERVACIONES",headerName:"Observaciones",width:800},{field:"RUBRO1",headerName:"Docs2",width:500}],I=[{field:"DOC",headerName:"DOC",width:130},{field:"FECHADOC",headerName:"FechaDoc",width:190,renderCell:e=>A(e.value)},{field:"FECHAVENC",headerName:"FechaVenc",width:190,renderCell:e=>A(e.value)},{field:"NUMDOC",headerName:"NumDoc",width:130},{field:"DIASVENC",headerName:"Venc",width:130,align:"right"},{field:"MONTO",headerName:"Monto",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SALDO",headerName:"Saldo",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMenorA30",headerName:"Venc < 30",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMayorA60",headerName:"Venc < 60",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMenorA60",headerName:"Venc > 60",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PLAZO",headerName:"Plazo",width:130,align:"right"},{field:"VENDEDOR",headerName:"VENDEDOR",width:130}],v=async e=>{let t=await fetch("http://172.20.20.3:8001/clientes/pedidos/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay pedidos para este cliente."),[])},F=async e=>{let t=await fetch("http://172.20.20.3:8001/clientes/facturas/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay facturas para este cliente."),[])},Z=async e=>{let t=await fetch("http://172.20.20.3:8001/clientes/cartera/".concat(e.CLIENTE),{method:"GET",headers:{"Content-Type":"application/json"}});return t.ok||404!==t.status?t.json():(console.log("No hay cartera para este cliente."),[])};t.default=()=>{let{cliente:e}=(0,b.a)(),[t]=(0,j.useState)([]),[a,N]=(0,j.useState)(3),[C,A]=(0,j.useState)([]),[T,R]=(0,j.useState)([]),[P,L]=(0,j.useState)([]),[k,M]=(0,j.useState)(!1),[U,_]=(0,j.useState)(e[0]),[V,z]=(0,j.useState)(0),[G,B]=(0,j.useState)(0);(0,j.useEffect)(()=>{M(!0),U&&(H(U.CLIENTE),J(U.CLIENTE),q(U.CLIENTE))},[a]),(0,j.useEffect)(()=>{if(Array.isArray(C)){let e=Number(C.reduce((e,t)=>e+t.SMayorA60,0)).toFixed(0);B("".concat(parseFloat(e).toLocaleString()));let t=Number(C.reduce((e,t)=>e+t.SALDO,0)).toFixed(0);z("".concat(parseFloat(t).toLocaleString()))}},[C]);let H=async()=>{let e=await v(U);e?R(e):(console.log("Error al obtener los datos"),R([])),M(!1)},J=async()=>{let e=await F(U);e?L(e):(console.log("Error al obtener los datos"),L([])),M(!1)},q=async()=>{let e=await Z(U);e?A(e):(console.log("Error al obtener los datos"),A([])),M(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{marginBottom:"40px",children:(0,l.jsx)(E.Z,{})}),(0,l.jsx)(i.default,{className:"container",sx:{paddingTop:1,display:"flex",alignContent:"center",alignItems:"center"},children:(0,l.jsx)(i.default,{style:{backgroundColor:"#eaeaea",width:"65%",height:"auto",paddingTop:0},children:(0,l.jsxs)(r.Z,{sx:{padding:1},children:[(0,l.jsxs)(i.default,{children:[(0,l.jsxs)(i.default,{children:[(0,l.jsx)(S.default,{href:"./",children:(0,l.jsxs)(o.default,{variant:"outlined",sx:{margin:"2px",bgcolor:"#ffa28a"},onClick:()=>{localStorage.removeItem("clientTemp"),_("")},children:[" "," Cerrar "," "]})}),(0,l.jsx)(S.default,{href:".././pedidos/pedidosG/",children:(0,l.jsxs)(o.default,{variant:"outlined",sx:{margin:"2px",bgcolor:"#6cff5d"},children:[" "," Pedido "," "]})})]}),(0,l.jsx)(d.Z,{sx:{},orientation:"horizontal"}),(0,l.jsx)(i.default,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:(0,l.jsxs)(n.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,l.jsxs)(o.default,{sx:{flexDirection:"column"},children:[(0,l.jsx)(s.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:V}),(0,l.jsx)(s.default,{variant:"body2",color:"text.primary",children:"Saldo"})]}),(0,l.jsxs)(o.default,{sx:{flexDirection:"column"},children:[(0,l.jsx)(s.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:G}),(0,l.jsx)(s.default,{variant:"body2",color:"text.primary",children:"Saldo Mayor a 60"})]})]})})]}),(0,l.jsx)(d.Z,{sx:{},orientation:"horizontal"}),(0,l.jsx)(c.Z,{label:"Individual",control:(0,l.jsx)(h.Z,{})}),(0,l.jsx)(c.Z,{label:"Compa\xf1ia",control:(0,l.jsx)(h.Z,{})}),(0,l.jsx)(s.default,{gutterBottom:!0,variant:"h5",component:"div",sx:{fontSize:35},children:(null==U?void 0:U.NOMBREALIAS)||""}),(0,l.jsxs)(u.ZP,{container:!0,rowSpacing:1.5,columnSpacing:{xs:1,sm:2,md:3},children:[(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["NIT",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.CLIENTE)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Cupo",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:Number((null==U?void 0:U.CUPO)||"").toFixed(0)})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Debe",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:Number((null==U?void 0:U.SALDO)||"").toFixed(0)})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Direccion",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.DIRECCION)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Telefono",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.TELEFONO1)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Celular",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.TELEFONO1)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:2,children:["Ciudad",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.CIUDAD)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:3,children:["Departamento",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.DEPARTAMENTO)||""})]}),(0,l.jsxs)(u.ZP,{item:!0,xs:4,children:["Email",(0,l.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==U?void 0:U.E_MAIL)||""})]})]}),(0,l.jsx)(x.Z,{id:"filled-multiline-static",label:"Notas",multiline:!0,rows:4,defaultValue:(null==U?void 0:U.NOTAS)||"",variant:"filled",sx:{width:"100%"}}),(0,l.jsxs)(r.Z,{sx:{width:"100%"},children:[(0,l.jsx)(i.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,l.jsxs)(f.Z,{value:a,onChange:(e,t)=>{N(t)},"aria-label":"basic tabs example",children:[(0,l.jsx)(m.Z,{label:"Pedidos",...O(0),onClick:H}),(0,l.jsx)(m.Z,{label:"Facturas",...O(1),onClick:J}),(0,l.jsx)(m.Z,{label:"Cartera",...O(2),onClick:q}),(0,l.jsx)(m.Z,{label:"",...O(3)})]})}),(0,l.jsx)(w,{value:a,index:0,children:(0,l.jsx)(i.default,{sx:{width:"100%",height:450},children:!0===k?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(p.Z,{})}):T.length<=0?(0,l.jsx)("h1",{children:"NO HAY PEDIDOS"}):(0,l.jsx)(g._,{density:"compact",rows:T,columns:y,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.PEDIDO})})}),(0,l.jsx)(w,{value:a,index:1,children:(0,l.jsx)(i.default,{sx:{width:"100%",height:450},children:!0===k?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(p.Z,{})}):P.length<=0?(0,l.jsx)("h1",{children:"NO HAY FACTURAS"}):(0,l.jsx)(g._,{density:"compact",rows:P,columns:D,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.ID})})}),(0,l.jsx)(w,{value:a,index:2,children:(0,l.jsx)(i.default,{sx:{width:"100%",height:450},children:!0===k?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(p.Z,{})}):C.length<=0?(0,l.jsx)("h1",{children:"NO HAY CARTERA"}):(0,l.jsx)(g._,{density:"compact",rows:C,columns:I,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.NUMDOC})})})]})]})})})]})}},85800:function(e,t,a){"use strict";a.d(t,{AuthProvider:function(){return d},a:function(){return n}});var l=a(57437),i=a(2265),r=a(44785);let o=(0,i.createContext)({login:e=>{},logout:()=>{}}),d=e=>{let{children:t}=e,[a,d]=(0,i.useState)(null),[n,s]=(0,i.useState)({}),[c,h]=(0,i.useState)({}),[u,x]=(0,i.useState)({}),[f]=(0,i.useState)(!0),m=(0,i.useCallback)(function(e){r.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),d(e)},[]),p=(0,i.useCallback)(function(){r.Z.remove("authTokens"),localStorage.removeItem("auth"),d(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),a=localStorage.getItem("pedido"),l=localStorage.getItem("caja");e&&d(JSON.parse(e)),t&&s(JSON.parse(t)),a&&h(JSON.parse(a)),l&&x(JSON.parse(l))},[]);let j=(0,i.useMemo)(()=>({auth:a,cliente:n,setCliente:s,pedido:c,setPedido:h,caja:u,setCaja:x,loading:f,login:m,logout:p}),[a,n,c,u,m,p]);return(0,l.jsx)(o.Provider,{value:j,children:t})},n=()=>(0,i.useContext)(o)}},function(e){e.O(0,[4797,4129,6291,4275,3983,2561,6981,2610,9105,8433,9696,6895,2971,7023,1744],function(){return e(e.s=78217)}),_N_E=e.O()}]);