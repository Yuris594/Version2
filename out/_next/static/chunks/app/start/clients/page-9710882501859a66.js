(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9026],{83686:()=>{},32383:()=>{},48332:(e,t,l)=>{Promise.resolve().then(l.bind(l,90851))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>P});var s=l(95155),r=l(20457),i=l(75436),n=l(11451),o=l(46805),a=l(894),c=l(2295),d=l(9561),u=l(81894),h=l(91888),x=l(74676),f=l(92080),p=l(96212),m=l(6069),j=l(9581),g=l(43677),A=l(85244),C=l(85067),S=l(2138);l(76046);var E=l(70689),N=l(12115),w=l(4918),O=l(41983),b=l(36017),v=l(2091),L=l(60391),T=l(48173),I=l.n(T);let k=e=>{let{page:t}=e;return(0,s.jsx)(i.default,{children:(0,s.jsx)(w.A,{children:t.map(e=>(0,s.jsx)(O.Ay,{disablePadding:!0,children:(0,s.jsxs)(b.A,{LinkComponent:I(),href:e.url,onClick:e.onClick,children:[(0,s.jsx)(v.A,{children:e.icon}),(0,s.jsx)(L.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var y=l(78897),R=l.n(y),D=l(79046),M=l.n(D);let P=()=>{let{auth:e,logout:t}=(0,E.A)(),[l,w]=(0,N.useState)(null),[O,b]=(0,N.useState)(!1),v=()=>{b(!1),w(null)},L=[{title:"USUARIOS ",url:"./usuarios",icon:(0,s.jsx)(x.A,{})},{title:"PEDIDOS",url:"./pedidos",icon:(0,s.jsx)(f.A,{})},{title:"CLIENTES",url:"./clients",icon:(0,s.jsx)(p.A,{})},{title:"PRODUCTOS",icon:(0,s.jsx)(m.A,{}),onClick:e=>{b(!0),w(e.currentTarget)}},{title:"FACTURAS",url:"./facturas",icon:(0,s.jsx)(j.A,{})},{title:"CAJA",url:"./pedidos/pedidosCaja",icon:(0,s.jsx)(g.A,{})}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.default,{}),(0,s.jsxs)(i.default,{sx:{flexGrow:1},children:[(0,s.jsx)(n.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,s.jsxs)(o.A,{children:[(0,s.jsx)(a.A,{color:"inherit",onClick:e=>{w(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,s.jsx)(A.A,{})}),(0,s.jsx)(i.default,{sx:{display:{xs:"none",md:"flex"}},children:L.map(e=>(0,s.jsx)(c.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:I(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,s.jsx)(d.default,{variant:"h6",sx:{flexGrow:1}}),(0,s.jsx)(c.default,{component:I(),href:"/start",color:"inherit",children:(0,s.jsx)(S.A,{})}),(0,s.jsxs)(c.default,{className:M().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,s.jsx)(p.A,{}),e&&e.PER_Nom]}),(0,s.jsx)(c.default,{color:"inherit",onClick:()=>{R().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,s.jsx)(C.A,{})})]})}),(0,s.jsxs)(u.A,{id:"basic-menu",anchorEl:l,open:O,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,s.jsx)(h.A,{onClick:v,component:I(),href:"./buscarProd",children:"Buscar Por Referencias"}),(0,s.jsx)(h.A,{onClick:v,component:I(),href:"./productosMG",children:"Lista de Todos Los Productos"})]}),(0,s.jsx)(u.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{w(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,s.jsx)(k,{page:L})})]})]})}},76134:(e,t,l)=>{"use strict";l.d(t,{A:()=>o});var s=l(95155),r=l(7660),i=l(12115),n=l(2295);let o=e=>{let{datos:t}=e,[l,o]=(0,i.useState)(!1);return(0,s.jsx)(n.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}o(!0);try{let e=r.Wp.book_new(),l=r.Wp.json_to_sheet(t);r.Wp.book_append_sheet(e,l,"Datos"),r._h(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{o(!1)}},disabled:l,children:l?"Loading...":"Excel"})}},90851:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>E});var s=l(95155),r=l(48173),i=l.n(r),n=l(75436),o=l(8889),a=l(39241),c=l(2295),d=l(76046),u=l(70689),h=l(65068),x=l(76134),f=l(12115),p=l(74205),m=l(49359),j=l(86898),g=l(54255),A=l(70152);let C=[{field:"CLIENTE",headerName:"NIT",width:170},{field:"NOMBREALIAS",headerName:"NOMBRE",width:800},{field:"DIRECCION",headerName:"DIRECCI\xd3N",width:300},{field:"TELEFONO1",headerName:"TELEFONO",width:190},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:450},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],S=async()=>{let e=await fetch(o.c.url+"/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()},E=()=>{let e=(0,d.useRouter)(),{setCliente:t}=(0,u.A)(),[l,r]=(0,f.useState)([]),[o,E]=(0,f.useState)(!0),[N,w]=(0,f.useState)([]),[O,b]=(0,f.useState)(),[v,L]=(0,f.useState)(),T=(0,j.A)("(max-width: 600px)");(0,f.useEffect)(()=>{(async()=>{let e=await S();try{L(e),b(e),E(!1)}catch(e){console.log(e)}})()},[]);let I=e=>{L(O.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),s=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),r=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==s?void 0:s.includes(e.toLowerCase()))||(null==r?void 0:r.includes(e.toLowerCase()))?t:null}))},k=(0,f.useCallback)(l=>{if(w(l),l.length>0){let s=O.filter(e=>{let t=e.CLIENTE;return!!t&&t.toString().includes(l[0])});localStorage.setItem("clientTemp",JSON.stringify(s)),t(s),e.push("/start/clients/clientesTemp")}},[v]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.default,{children:[" ",(0,s.jsx)(h.A,{})," "]}),(0,s.jsx)(n.default,{className:"container",children:!0===o?(0,s.jsx)(n.default,{sx:{width:"100%"},children:(0,s.jsx)(g.A,{})}):(0,s.jsxs)(a.A,{container:!0,direction:"column",sx:{minHeight:"90vh",backfroundColor:"#ffffff",padding:2},children:[(0,s.jsxs)(n.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,s.jsx)(a.A,{size:{xs:12,sm:8,md:6},children:(0,s.jsx)("h2",{children:(0,s.jsx)("strong",{children:"CLIENTES"})})}),(0,s.jsx)(i(),{href:"",children:(0,s.jsx)(c.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"})}),(0,s.jsx)(x.A,{datos:v}),(0,s.jsx)(a.A,{size:{xs:12,sm:8,md:6},sx:{padding:2},children:(0,s.jsx)(A.A,{id:"outlined-basic",multiline:!0,rows:1,variant:"outlined",placeholder:"Buscar...",value:l,onChange:e=>{e.preventDefault(),r(e.target.value),I(e.target.value)},sx:{width:"100%"}})})]}),(0,s.jsx)(a.A,{size:12,sx:{flexGrow:1,marginBottom:2},children:(0,s.jsx)(n.default,{sx:{width:"100%",height:T?500:799},children:(0,s.jsx)(p.z,{rows:v,columns:C,initialState:{pagination:{paginationModel:{page:0,pageSize:12}}},pageSizeOptions:[12,20,30],onRowSelectionModelChange:k,rowSelectionModel:N,getRowId:e=>e.CLIENTE,slots:{toolbar:m.O},sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})})]})})]})}},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>s});let s={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>c,AuthProvider:()=>a});var s=l(95155),r=l(12115),i=l(76046),n=l(89208);let o=(0,r.createContext)({login:e=>{},logout:()=>{}}),a=e=>{let{children:t}=e,l=(0,i.useRouter)(),[a]=(0,r.useState)(!0),[c,d]=(0,r.useState)(null),[u,h]=(0,r.useState)({}),[x,f]=(0,r.useState)({}),[p,m]=(0,r.useState)({}),j=(0,r.useCallback)(function(e){n.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),d(e)},[]),g=(0,r.useCallback)(function(){l.push("/"),n.A.remove("authTokens"),localStorage.removeItem("auth"),d(null)},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("auth")||n.A.get("authTokens"),t=localStorage.getItem("pedido"),l=localStorage.getItem("caja"),s=localStorage.getItem("cliente");s&&h(JSON.parse(s)),t&&f(JSON.parse(t)),l&&m(JSON.parse(l)),e&&d(JSON.parse(e))},[]);let A=(0,r.useMemo)(()=>({auth:c,cliente:u,setCliente:h,pedido:x,setPedido:f,caja:p,setCaja:m,loading:a,login:j,logout:g}),[c,u,x,p,j,g]);return(0,s.jsx)(o.Provider,{value:A,children:t})},c=()=>(0,r.useContext)(o)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,3524,6058,5854,994,5975,1260,6403,152,8173,2670,7493,6675,4205,6899,4366,8441,1517,7358],()=>t(48332)),_N_E=e.O()}]);