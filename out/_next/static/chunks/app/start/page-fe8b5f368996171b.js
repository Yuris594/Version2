(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1397],{26931:(e,t,s)=>{Promise.resolve().then(s.bind(s,86438))},86438:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>D});var i=s(95155),n=s(74676),o=s(92080),a=s(96212),r=s(6069),l=s(9581),c=s(43677),d=s(35761),u=s(86898),x=s(75436),h=s(11451),m=s(46805),g=s(9561),p=s(2295),f=s(78562),j=s(42479),S=s(69841),A=s(2241),C=s(4918),b=s(41983),N=s(36017),w=s(2091),y=s(60391),I=s(81894),v=s(91888),k=s(85067),O=s(70689),P=s(2138),E=s(73592),J=s.n(E),T=s(12115);s(5565);var B=s(78897),z=s.n(B),_=s(48173),R=s.n(_);let D=()=>{let{auth:e,logout:t}=(0,O.A)(),[s,E]=(0,T.useState)(null),[B,_]=(0,T.useState)(!1),D=(0,d.default)(),F=(0,u.A)(D.breakpoints.down("sm")),L=()=>{_(!1),E(null)},U=[{title:"USUARIOS",url:"../start/usuarios",icon:(0,i.jsx)(n.A,{})},{title:"PEDIDOS",url:"../start/pedidos",icon:(0,i.jsx)(o.A,{})},{title:"CLIENTES",url:"../start/clients",icon:(0,i.jsx)(a.A,{})},{title:"PRODUCTOS",icon:(0,i.jsx)(r.A,{}),onClick:e=>{_(!0),E(e.currentTarget)}},{title:"FACTURAS",url:"../start/facturas",icon:(0,i.jsx)(l.A,{})},{title:"CAJA",url:"../start/pedidos/pedidosCaja",icon:(0,i.jsx)(c.A,{})}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.default,{sx:{flexGrow:1},children:(0,i.jsx)(h.A,{position:"static",sx:{bgcolor:"#262626"},children:(0,i.jsxs)(m.A,{children:[(0,i.jsx)(x.default,{sx:{alignItems:"center",marginBottom:"20px",width:{xs:"50px",sm:"80px",md:"100px"},height:"auto"},children:(0,i.jsx)("img",{src:"/logo2.png",alt:"imagenmg",style:{width:"100%",height:"auto",objectFit:"contain"}})}),(0,i.jsx)(g.default,{variant:"h6",sx:{flexGrow:1}}),(0,i.jsx)(p.default,{component:R(),href:"../start",color:"inherit",children:(0,i.jsx)(P.A,{fontSize:"large"})}),(0,i.jsxs)(p.default,{className:J().className,variant:"h5",color:"inherit",sx:{fontSize:"15px"},children:[(0,i.jsx)(a.A,{fontSize:"large"})," ",e&&e.PER_Nom]}),(0,i.jsx)(p.default,{color:"inherit",onClick:()=>{z().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,i.jsx)(k.A,{fontSize:"large"})})]})})}),(0,i.jsx)(x.default,{className:"containers",sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:F?"column":"row",padding:F?2:0,mt:F?2:0},children:(0,i.jsxs)(f.A,{id:"wave",sx:{width:F?"90%":"40%",maxWidth:"600px",height:F?600:750,border:6,overflow:"auto"},children:[(0,i.jsxs)(j.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",bgcolor:"#262626",borderColor:"#262626",padding:2},children:[(0,i.jsx)(x.default,{sx:{alignItems:"center",marginBottom:"20px",width:{xs:"100px",sm:"150px",md:"230px"},height:"auto"},children:(0,i.jsx)("img",{src:"/logo2.png",alt:"imagenmg",style:{width:"100%",height:"auto",objectFit:"contain"}})}),(0,i.jsx)(g.default,{className:J().className,variant:"h6",sx:{marginTop:4,marginBottom:2},color:"white",children:e&&e.PER_Nom})]}),(0,i.jsxs)(S.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",mt:2},children:[(0,i.jsx)(x.default,{sx:{alignItems:"center",marginBottom:"20px",width:{xs:"100px",sm:"150px",md:"200px"},height:"auto"},children:(0,i.jsx)("img",{src:"/truperLogo.png",alt:"imagenmg",style:{width:"100%",height:"auto",objectFit:"contain"}})}),(0,i.jsx)(A.A,{sx:{width:"80%",my:2}}),(0,i.jsx)(C.A,{sx:{width:"100%",padding:0},children:U.map(e=>(0,i.jsx)(b.Ay,{disablePadding:!0,children:(0,i.jsxs)(N.A,{LinkComponent:R(),href:e.url,onClick:e.onClick,children:[(0,i.jsx)(w.A,{sx:{fontSize:20},children:e.icon}),(0,i.jsx)(y.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",textAlign:"center"},children:e.title})]})},e.title))})]})]})}),(0,i.jsxs)(I.A,{id:"basic-menu",anchorEl:s,open:B,onClose:L,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,i.jsx)(v.A,{onClick:L,component:R(),href:"/start/productosMG",variant:"body1",sx:{fontSize:"15px"},children:"Productos"}),(0,i.jsx)(v.A,{onClick:L,component:R(),href:"/start/buscarProd",variant:"body1",sx:{fontSize:"15px"},children:"Buscar Referencias"})]})]})}},70689:(e,t,s)=>{"use strict";s.d(t,{A:()=>c,AuthProvider:()=>l});var i=s(95155),n=s(12115),o=s(76046),a=s(89208);let r=(0,n.createContext)({login:e=>{},logout:()=>{}}),l=e=>{let{children:t}=e,s=(0,o.useRouter)(),[l]=(0,n.useState)(!0),[c,d]=(0,n.useState)({}),[u,x]=(0,n.useState)(null),[h,m]=(0,n.useState)({}),[g,p]=(0,n.useState)({}),[f,j]=(0,n.useState)({}),[S,A]=(0,n.useState)({}),[C,b]=(0,n.useState)({}),N=(0,n.useCallback)(function(e){a.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),x(e)},[]),w=(0,n.useCallback)(function(){a.A.remove("authTokens"),localStorage.removeItem("auth"),x(null),s.push("/")},[]);(0,n.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),s=localStorage.getItem("pedido"),i=localStorage.getItem("pedidoV"),n=localStorage.getItem("cartera"),o=localStorage.getItem("cliente"),a=localStorage.getItem("clienteV");a&&j(JSON.parse(a)),i&&A(JSON.parse(i)),n&&b(JSON.parse(n)),e&&x(JSON.parse(e)),o&&p(JSON.parse(o)),s&&m(JSON.parse(s)),t&&d(JSON.parse(t))},[]);let y=(0,n.useMemo)(()=>({auth:u,cliente:g,setCliente:p,pedido:h,setPedido:m,caja:c,setCaja:d,clienteV:f,setClienteV:j,pedidosV:S,setPedidosV:A,carteraV:C,setCarteraV:b,loading:l,login:N,logout:w}),[u,g,h,c,f,S,C,N,w]);return(0,i.jsx)(r.Provider,{value:y,children:t})},c=()=>(0,n.useContext)(r)}},e=>{var t=t=>e(e.s=t);e.O(0,[9829,8320,6058,5854,994,5975,1260,8173,2670,7493,1257,8441,1517,7358],()=>t(26931)),_N_E=e.O()}]);