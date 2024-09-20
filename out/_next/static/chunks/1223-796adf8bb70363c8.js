"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1223],{13726:function(e,t,a){a.d(t,{Z:function(){return A}});var l=a(57437),i=a(33579),n=a.n(i),o=a(20124),s=a(31193),r=a(71733),d=a(79806),u=a(60335),c=a(60091),x=a(83719),h=a(62501),m=a(6291),f=a(11656),p=a(66325),j=a(90922),g=a(26032),C=a(55693),b=a(42188),S=a(66299),P=a(40301),v=a(78457),Z=a(21704),E=a(66246),y=a(16463),O=a(85800),N=a(2265),w=a(32184),D=a(7547),I=a(57300),R=a(86917),k=a(47905),U=a(87138),T=e=>{let{page:t}=e;return(0,l.jsx)(s.default,{children:(0,l.jsx)(w.Z,{children:t.map(e=>(0,l.jsx)(D.ZP,{disablePadding:!0,children:(0,l.jsxs)(I.Z,{LinkComponent:U.default,href:e.url,onClick:e.onClick,children:[(0,l.jsx)(R.Z,{children:e.icon}),(0,l.jsx)(k.Z,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};let _={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,textAlign:"center",pt:2,px:4,pb:3};var A=()=>{let e=(0,y.useRouter)(),{auth:t,logout:a}=(0,O.a)(),[i,w]=(0,N.useState)(!1),[D,I]=(0,N.useState)(null),[R,k]=(0,N.useState)(!1),A=()=>{k(!1),I(null)},J=[{title:"USUARIOS ",url:"/components/usuarios",icon:(0,l.jsx)(p.Z,{})},{title:"PEDIDOS",url:"/components/pedidos",icon:(0,l.jsx)(j.Z,{})},{title:"CLIENTES",url:"/components/clientes",icon:(0,l.jsx)(g.Z,{})},{title:"PRODUCTOS",icon:(0,l.jsx)(C.Z,{}),onClick:e=>{k(!0),I(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,l.jsx)(b.Z,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,l.jsx)(S.Z,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.default,{}),(0,l.jsxs)(s.default,{sx:{flexGrow:1},children:[(0,l.jsx)(r.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(u.Z,{color:"inherit",onClick:e=>{I(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(P.Z,{fontSize:"large"})}),(0,l.jsx)(s.default,{sx:{display:{xs:"none",md:"flex"}},children:J.map(e=>(0,l.jsx)(c.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:U.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,l.jsx)(x.default,{variant:"h6",sx:{flexGrow:1}}),(0,l.jsx)(c.default,{component:U.default,href:"/start",color:"inherit",children:(0,l.jsx)(E.Z,{fontSize:"large"})}),(0,l.jsxs)(c.default,{className:n().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,l.jsx)(Z.Z,{fontSize:"large"}),t&&t.PER_Nom]}),(0,l.jsx)(c.default,{color:"inherit",onClick:()=>w(!0),children:(0,l.jsx)(v.Z,{fontSize:"large"})})]})}),(0,l.jsx)(h.Z,{open:i,onClose:()=>w(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(s.default,{sx:_,children:[(0,l.jsx)(x.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,l.jsx)(s.default,{children:(0,l.jsx)(c.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{a(),e.push("/")},children:"SALIR"})})]})}),(0,l.jsxs)(m.Z,{id:"basic-menu",anchorEl:D,open:R,onClose:A,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,l.jsx)(f.Z,{onClick:A,component:U.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,l.jsx)(f.Z,{onClick:A,component:U.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,l.jsx)(m.Z,{id:"basic-menu",anchorEl:D,MenuListProps:{"aria-labelledby":"basic-button"},open:!!D,onClose:()=>{I(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,l.jsx)(T,{page:J})})]})]})}},41223:function(e,t,a){a.r(t),a.d(t,{conexion:function(){return v}});var l=a(57437),i=a(31193),n=a(62501),o=a(83719),s=a(60091),r=a(28027),d=a(74275),u=a(60335),c=a(2265),x=a(77699),h=a(13726),m=a(68265),f=a(22294),p=a(46182),j=a(3378),g=a(64379),C=a.n(g),b=a(85800),S=a(16463);let P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",height:"auto",bgcolor:"background.paper",boxShadow:24};function v(){C().fire({title:"No existe conexion",text:"Verifique la conexion con la empresa o no tiene internet",icon:"warning",button:"Aceptar"})}let Z=[{field:"PER_Nom",headerName:"Nombre",width:200,editable:!0},{field:"PER_Usuario",headerName:"Usuario",width:150,editable:!0},{field:"PER_Clave",headerName:"Contrase\xf1a",width:150,editable:!0},{field:"IdDiv",headerName:"ID Divisi\xf3n",type:"number",width:120,editable:!0},{field:"PERAUTOPED",headerName:"Auto Pedidos",type:"number",width:130,editable:!0},{field:"CODVEND",headerName:"C\xf3digo Vendedor",width:150,editable:!0},{field:"PREFIJO",headerName:"Prefijo",width:120,editable:!0},{field:"CONSECUTIVOPED",headerName:"Consecutivo Pedidos",type:"number",width:180,editable:!0}];t.default=function(e){let{usuarios:t}=e,[a,g]=(0,c.useState)(),[C,v]=(0,c.useState)(!1),[E,y]=(0,c.useState)(!1),[O,N]=(0,c.useState)([]),{auth:w}=(0,b.a)();(0,S.useRouter)();let[D,I]=(0,c.useState)(!0),[R,k]=(0,c.useState)([]),U=e=>{g(t.filter(t=>Object.values(t).map(e=>e?e.toString().toLowerCase():"").some(t=>t.includes(e))))},T=(0,c.useCallback)(e=>{k(e),e.length>0&&(g(t.filter(t=>{let a=t.IdPer;return!!a&&a.toString().includes(e[0])})),y(!0))},[t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.default,{children:[" "," ",(0,l.jsx)(h.Z,{})," "," "]}),(0,l.jsx)(i.default,{className:"container",children:(0,l.jsxs)(i.default,{style:{height:"auto",width:"100%"},children:[(0,l.jsx)(n.Z,{open:C,onClose:()=>v(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsx)(i.default,{sx:P,children:(0,l.jsx)(p.default,{})})}),(0,l.jsx)(n.Z,{open:E,onClose:()=>{g([]),y(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsx)(i.default,{sx:P,children:(0,l.jsx)(j.default,{usuario:a})})}),(0,l.jsx)(o.default,{variant:"h5",sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",color:"#000000",margin:0},children:"USUARIOS"}),(0,l.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"auto",margin:1},children:[(0,l.jsx)(s.default,{variant:"outlined",onClick:()=>v(!0),sx:{margin:"10px"},color:"primary",children:"Nuevo Usuario"}),(0,l.jsxs)(r.Z,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,l.jsx)(d.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:O,onChange:e=>{e.preventDefault(),N(e.target.value),U(e.target.value)}}),(0,l.jsx)(u.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(x.Z,{})})]})]}),(0,l.jsx)(i.default,{sx:{height:950,width:"100%"},children:(0,l.jsx)(m._,{rows:t,columns:Z,initialState:{pagination:{paginationModel:{page:0,pageSize:16}}},pageSizeOptions:[5,16],getRowId:e=>e.IdPer,onRowSelectionModelChange:T,rowSelectionModel:R,slots:{toolbar:f.n},sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})]})})]})}},46182:function(e,t,a){a.r(t);var l=a(57437),i=a(48801),n=a(20124),o=a(25774),s=a(27270),r=a(31193),d=a(83719),u=a(58433),c=a(23983),x=a(60091),h=a(2265);let m=async e=>(await fetch("/api/usuarios/nuevo",{method:"POST",body:JSON.stringify({form:e}),headers:{"Content-Type":"application/json"}})).json();t.default=()=>{let[e,t]=(0,h.useState)({}),[a,f]=(0,h.useState)(!1),[p,j]=(0,h.useState)(!1),g=a=>{t({...e,[a.target.name]:a.target.value})},C=async t=>{if(t.preventDefault(),!e.PER_Nom||!e.IdDiv){j(!0);return}let a=await m(e);a.ok?(f(!0),console.log("Salida exitosa"),window.location.reload()):(j(!0),console.error("Error al enviar la solicitud: ",a.statusText))},b=e=>{"clickaway"!==e&&(f(!1),j(!1))};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.default,{component:"main",maxWidth:"xs",children:[(0,l.jsx)(n.default,{}),a?(0,l.jsx)(o.Z,{open:a,autoHideDuration:2e3,onClose:b,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,l.jsx)(s.Z,{onClose:b,severity:"success",sx:{width:"100%"},children:"Registro Exitoso"})}):"",p?(0,l.jsx)(o.Z,{open:p,autoHideDuration:2e3,onClose:b,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,l.jsx)(s.Z,{onClose:b,severity:"error",sx:{width:"100%"},children:"Registro denegado"})}):"",(0,l.jsxs)(r.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,l.jsx)(d.default,{component:"h1",variant:"h5",children:"Registro de usuario"}),(0,l.jsxs)(r.default,{component:"form",noValidate:!0,onSubmit:C,sx:{mt:3},children:[(0,l.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{autoComplete:"given-name",name:"PER_Nom",required:!0,fullWidth:!0,id:"PER_Nom",label:"Nombre",autoFocus:!0,value:e.PER_Nom||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Usuario",label:"Usuario",name:"PER_Usuario",autoComplete:"family-name",value:e.PER_Usuario||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,children:(0,l.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Clave",label:"Clave",type:"password",name:"PER_Clave",autoComplete:"email",value:e.PER_Clave||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",autoComplete:"new-password",value:e.IdDiv||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",autoComplete:"email",value:e.PERAUTOPED||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",autoComplete:"email",value:e.CODVEND||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",autoComplete:"email",value:e.PREFIJO||"",onChange:g})}),(0,l.jsx)(u.ZP,{item:!0,xs:12,sm:4,children:(0,l.jsx)(c.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",autoComplete:"email",value:e.CONSECUTIVOPED||"",onChange:g})})]}),(0,l.jsx)(x.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"registrar"})]})]})]})})}},85800:function(e,t,a){a.d(t,{AuthProvider:function(){return s},a:function(){return r}});var l=a(57437),i=a(2265),n=a(44785);let o=(0,i.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,[a,s]=(0,i.useState)(null),[r,d]=(0,i.useState)({}),[u,c]=(0,i.useState)({}),[x,h]=(0,i.useState)({}),[m]=(0,i.useState)(!0),f=(0,i.useCallback)(function(e){n.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),s(e)},[]),p=(0,i.useCallback)(function(){n.Z.remove("authTokens"),localStorage.removeItem("auth"),s(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),a=localStorage.getItem("pedido"),l=localStorage.getItem("caja");e&&s(JSON.parse(e)),t&&d(JSON.parse(t)),a&&c(JSON.parse(a)),l&&h(JSON.parse(l))},[]);let j=(0,i.useMemo)(()=>({auth:a,cliente:r,setCliente:d,pedido:u,setPedido:c,caja:x,setCaja:h,loading:m,login:f,logout:p}),[a,r,u,x,f,p]);return(0,l.jsx)(o.Provider,{value:j,children:t})},r=()=>(0,i.useContext)(o)}}]);