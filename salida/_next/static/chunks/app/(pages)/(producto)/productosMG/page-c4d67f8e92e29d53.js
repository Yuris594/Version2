(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9622],{20067:function(){},72061:function(){},38469:function(e,t,a){Promise.resolve().then(a.bind(a,49119))},77699:function(e,t,a){"use strict";var l=a(23963);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(19118)),r=a(57437);t.default=(0,i.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},49119:function(e,t,a){"use strict";a.r(t);var l=a(57437),i=a(83719),r=a(31193),n=a(99128),o=a(28027),d=a(74275),s=a(60335),c=a(92355),u=a(97183),h=a(2265),f=a(77699),x=a(52610),m=a(41448),g=a.n(m),p=a(13726),j=a(10416),C=a(15408);a(85935);let S=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),w=[{field:"ARTICULO",headerName:"Cod",width:130},{field:"DESCRIPCION",headerName:"Referencia",width:700},{field:"SUBLINEA",headerName:"Sublinea",width:300},{field:"TOTAL_DISP",headerName:"Disp",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_IMPUESTO",headerName:"IVA",width:130},{field:"PRECIOMASIVA",headerName:"Masiva",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_DCTO",headerName:"D1",width:130},{field:"UNIDAD_EMPAQUE",headerName:"Emp",width:130},{field:"EXIST_REAL",headerName:"Existreal",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}];console.log("Datos que se estan pasando al DataGrid",w);let N=[{field:"FECHA",headerName:"Fecha",width:250,renderCell:e=>S(e.value)},{field:"CLIENTE",headerName:"Cliente",width:180},{field:"PEDIDO",headerName:"Pedido",width:150},{field:"VE",headerName:"VEND",width:80,align:"right"},{field:"PED",headerName:"Ped",width:50,align:"right"},{field:"DESP",headerName:"Desp",width:100,align:"right"},{field:"PEND",headerName:"Pend",width:100,align:"right"},{field:"ESTADO",headerName:"Estado",width:160},{field:"AUTORIZADONOM",headerName:"Autortizado",width:200,renderCell:e=>{let t=e.row.AUTORIZADONOM;return(0,l.jsx)(i.default,{style:{color:"APROBADO"===t?"#00FC00":"RETENIDO"===t?"#FF1507":"#000000",backgroundColor:"transparent"},children:t})}}],E=[{field:"FACTURA",headerName:"Factura",width:130},{field:"FECHA_DESPACHO",headerName:"Fecha",width:190,renderCell:e=>S(e.value)},{field:"ANULADA",headerName:"AN",width:50},{field:"PRECIO_TOTAL",headerName:"V.fact",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ARTICULO",headerName:"Articulo",width:130},{field:"DESCRIPCION",headerName:"Descripcion",width:700},{field:"CANTIDAD",headerName:"Cant",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PRECIO_UNITARIO",headerName:"PrecioUni",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORCIVA",headerName:"IVA",width:130,align:"right"},{field:"PORDESC",headerName:"Desc",width:130,align:"right"},{field:"VDESC",headerName:"VDesc",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"IDRUTERO",headerName:"IdRutero",width:130},{field:"FECHARUT",headerName:"FechaRut",width:300},{field:"IDGUIA",headerName:"IdGuia",width:130},{field:"FECHAGUIA",headerName:"FechaGuia",width:250,renderCell:e=>S(e.value)},{field:"OBSERVACIONES",headerName:"Observaciones",width:800},{field:"RUBRO1",headerName:"Docs2",width:500}];function b(e){let{children:t,value:a,index:i,...n}=e;return(0,l.jsx)("div",{role:"tabpanel",hidden:a!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i),...n,children:a===i&&(0,l.jsx)(r.default,{sx:{p:3},children:t})})}function O(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}b.propTypes={children:g().node,index:g().number.isRequired,value:g().number.isRequired},t.default=()=>{let[e,t]=(0,h.useState)(0),[a,m]=(0,h.useState)([]),[g,S]=(0,h.useState)([]),[I,A]=(0,h.useState)([]),[D,v]=(0,h.useState)(""),[P,R]=(0,h.useState)(!0),[T,F]=(0,h.useState)([]),[Z,y]=(0,h.useState)(!0),[L,_]=(0,h.useState)([]),[U,k]=(0,h.useState)([]);(0,h.useEffect)(()=>{R(!0)},[e]),(0,h.useEffect)(()=>{M()},[]);let M=async()=>{try{let{datos:e}=await (0,C.Z)("/api/productos/listar_solo_para_mg","GET");e?(F(e),k(e)):F([]),y(!1)}catch(e){console.log("Error al obtener usuarios",e)}},G=(0,h.useMemo)(()=>M,[]);(0,h.useEffect)(()=>{G()},[G]);let B=async()=>{S([]);try{let{datos:e}=await (0,C.Z)("/api/productos/facturas/"+D.ARTICULO,"GET");console.log(e),e?S(e):S([]),R(!1)}catch(e){console.log("Error al obtener usuarios",e)}},V=async()=>{m([]);try{let{datos:e}=await (0,C.Z)("/api/productos/pedidos/"+D.ARTICULO,"GET");e?m(e):m([]),R(!1)}catch(e){console.log("Error al obtener usuarios",e)}},z=e=>{F(U.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},H=(0,h.useCallback)(e=>{_(e),e.length>0&&v(U.filter(t=>{let a=t.ARTICULO;return!!a&&a.toString().includes(e[0])})[0])},[T]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.default,{marginBottom:"50px",children:[" ",(0,l.jsx)(p.Z,{})," "]}),!0===Z?(0,l.jsx)(r.default,{sx:{height:"auto",width:"100%"},children:(0,l.jsx)(n.Z,{})}):(0,l.jsxs)("div",{style:{height:"auto",width:"100%"},children:[(0,l.jsxs)(r.default,{children:[(0,l.jsx)(i.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000000"},children:"PRODUCTOS MG"}),(0,l.jsxs)(r.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,l.jsx)(r.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:(0,l.jsx)(j.Z,{datos:T})}),(0,l.jsx)(r.default,{children:(0,l.jsx)(i.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#920b0d"},children:D.DESCRIPCION})}),(0,l.jsxs)(o.default,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,l.jsx)(d.default,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:I,onChange:e=>{e.preventDefault(),A(e.target.value),z(e.target.value)}}),(0,l.jsx)(s.default,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(f.default,{})})]})]})]}),(0,l.jsxs)(r.default,{sx:{width:"100%"},children:[(0,l.jsx)(r.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,l.jsxs)(c.Z,{value:e,onChange:(e,a)=>{t(a)},"aria-label":"basic tabs example",children:[(0,l.jsx)(u.Z,{label:"Articulos",...O(0)}),(0,l.jsx)(u.Z,{label:"Pedidos:".concat(a.length),...O(1),onClick:V}),(0,l.jsx)(u.Z,{label:"Facturas:".concat(g.length),...O(2),onClick:B})]})}),(0,l.jsx)(b,{componente:r.default,value:e,index:0,children:(0,l.jsx)(r.default,{sx:{width:"100%",height:850},children:(0,l.jsx)(x._,{rows:T,columns:w,getRowId:e=>e.ARTICULO,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},rowSelectionModel:L,onRowSelectionModelChange:H,pageSizeOptions:[5,18,20]})})}),(0,l.jsx)(b,{component:r.default,value:e,index:1,children:!0===P?(0,l.jsx)(r.default,{sx:{width:"100%"},children:(0,l.jsx)(n.Z,{})}):a.length<=0?(0,l.jsx)("h1",{children:"NO HAY PEDIDOS"}):(0,l.jsx)(r.default,{sx:{width:"100%",height:850},children:(0,l.jsx)(x._,{rows:a,columns:N,getRowId:e=>e.PEDIDO,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},pageSizeOptions:[5,18,20]})})}),(0,l.jsx)(b,{component:r.default,value:e,index:2,children:!0===P?(0,l.jsx)(r.default,{sx:{width:"100%"},children:(0,l.jsx)(n.Z,{})}):g.length<=0?(0,l.jsx)("h1",{children:"NO HAY FACTURAS"}):(0,l.jsx)(r.default,{sx:{width:"100%",height:850},children:(0,l.jsx)(x._,{rows:g,columns:E,getRowId:e=>e.ID,initialState:{pagination:{paginationModel:{page:0,pageSize:18}}},pageSizeOptions:[5,18,20]})})})]})]})]})}},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return L}});var l=a(57437),i=a(20124),r=a(31193),n=a(71733),o=a(79806),d=a(60335),s=a(60091),c=a(83719),u=a(62501),h=a(6291),f=a(11656),x=a(85465),m=a(66325),g=a(90922),p=a(26032),j=a(55693),C=a(42188),S=a(66299),w=a(78457),N=a(21704),E=a(66246),b=a(9504),O=a(16463),I=a(39987),A=a(2265),D=a(32184),v=a(7547),P=a(57300),R=a(86917),T=a(47905),F=a(87138),Z=e=>{let{page:t}=e;return(0,l.jsx)(r.default,{sx:{width:250},children:(0,l.jsx)("nav",{children:(0,l.jsx)(D.Z,{children:t.map(e=>(0,l.jsx)(v.ZP,{disablePadding:!0,children:(0,l.jsxs)(P.Z,{LinkComponent:F.default,href:e.url,onClick:e.onClick,children:[(0,l.jsx)(R.Z,{children:e.icon}),(0,l.jsx)(T.Z,{children:e.title})]})},e.title))})})})};let y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var L=()=>{let e=(0,O.useRouter)(),{auth:t}=(0,I.Z)(),[a,D]=(0,A.useState)(!1),[v,P]=(0,A.useState)(null),[R,T]=(0,A.useState)(!1),[L,_]=(0,A.useState)(null),U=()=>{T(!1),P(null)},k=[{title:"USUARIOS ",url:"../../usuarios",icon:(0,l.jsx)(m.Z,{})},{title:"PEDIDOS",url:"../../pedidos",icon:(0,l.jsx)(g.Z,{})},{title:"CLIENTES",url:"../../clients",icon:(0,l.jsx)(p.Z,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(j.Z,{}),onClick:e=>{T(!0),P(e.currentTarget)}},{title:"FACTURAS",url:"../../facturas",icon:(0,l.jsx)(C.Z,{})},{title:"CAJA",url:"../../pedidos/pedidosCaja",icon:(0,l.jsx)(S.Z,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{}),(0,l.jsxs)(r.default,{sx:{flexGrow:1},children:[(0,l.jsx)(n.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(d.default,{color:"inherit",size:"large",onClick:e=>{_(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(b.default,{})}),(0,l.jsx)(r.default,{sx:{display:{xs:"none",md:"flex"}},children:k.map(e=>(0,l.jsx)(s.default,{color:"inherit",LinkComponent:F.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(s.default,{component:F.default,href:"/start",color:"inherit",children:(0,l.jsx)(E.Z,{})}),(0,l.jsxs)(s.default,{color:"inherit",children:[(0,l.jsx)(N.Z,{}),t.PER_Nom]}),(0,l.jsx)(s.default,{color:"inherit",onClick:()=>D(!0),children:(0,l.jsx)(w.Z,{})})]})}),(0,l.jsx)(u.Z,{open:a,onClose:()=>D(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(r.default,{sx:y,children:[(0,l.jsx)(c.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,l.jsx)(r.default,{children:(0,l.jsx)(s.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{e.push("/")},children:"SALIR"})})]})}),(0,l.jsxs)(h.Z,{id:"basic-menu",anchorEl:v,open:R,onClose:U,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(f.Z,{onClick:U,component:F.default,href:"../../productos",children:"Productos Por Bodega"}),(0,l.jsx)(f.Z,{onClick:U,component:F.default,href:"../../productosMG",children:"Productos-MG"})]}),(0,l.jsx)(x.ZP,{open:!!L,onClose:()=>{_(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(Z,{page:k})})]})]})}},39987:function(e,t,a){"use strict";a.d(t,{a:function(){return r}});var l=a(85800),i=a(2265);let r=()=>(0,i.useContext)(l.default);t.Z=r},10416:function(e,t,a){"use strict";var l=a(57437),i=a(27800),r=a(2265),n=a(60091);t.Z=e=>{let{datos:t}=e,[a,o]=(0,r.useState)(!1);return(0,l.jsx)(n.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}o(!0);try{let e=i.P6.book_new(),a=i.P6.json_to_sheet(t);i.P6.book_append_sheet(e,a,"Datos"),i.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{o(!1)}},disabled:a,children:a?"Loading...":"Excel"})}},85935:function(e,t,a){"use strict";a.d(t,{x:function(){return l}});let l={url:a(20357).env.NEXT_PUBLIC_API_URL}},15408:function(e,t){"use strict";let a=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3?arguments[3]:void 0;try{let i=!0,r={method:"GET"};("GET"===t||"DELETE"===t)&&(r={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(a),l?r={method:t,body:a}:r.body=JSON.stringify(a));let n=await fetch(e,r);if(!n.ok)return{error:"Error en la solicitud Fetch",status:n.status,cargando:!1};let o=await n.json();return i=!1,{datos:o,cargando:i}}catch(e){return{datos:null,cargando:!1}}};t.Z=a},85800:function(e,t,a){"use strict";a.d(t,{AuthProvider:function(){return n}});var l=a(57437),i=a(2265);let r=(0,i.createContext)(),n=e=>{let{children:t}=e,[a,n]=(0,i.useState)({}),[o,d]=(0,i.useState)({}),[s,c]=(0,i.useState)({}),[u,h]=(0,i.useState)({}),[f,x]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),a=localStorage.getItem("pedidoTemp"),l=localStorage.getItem("caja");e&&n(JSON.parse(e)),t&&d(JSON.parse(t)),a&&c(JSON.parse(a)),l&&h(JSON.parse(l))},[]),(0,l.jsx)(r.Provider,{value:{auth:a,setAuth:n,cliente:o,setCliente:d,pedido:s,setPedido:c,caja:u,setCaja:h,loading:f},children:t})};t.default=r}},function(e){e.O(0,[1425,4797,4129,6291,2561,4275,1450,6540,1878,4486,2610,1631,2971,7023,1744],function(){return e(e.s=38469)}),_N_E=e.O()}]);