(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9901],{46880:function(e,t,a){Promise.resolve().then(a.bind(a,40343))},26460:function(e,t,a){"use strict";a.d(t,{Z:function(){return j}});var o=a(2265),r=a(44839),i=a(76990),l=a(6031),n=a(12272),d=a(48024),s=a(339),c=a(95885),u=a(72296),h=a(70587);function x(e){return(0,h.ZP)("MuiButtonGroup",e)}let m=(0,u.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","horizontal","vertical","colorPrimary","colorSecondary","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var p=a(8550),f=a(61304),g=a(57437);let v=e=>{let{classes:t,color:a,disabled:o,disableElevation:r,fullWidth:l,orientation:d,variant:s}=e,c={root:["root",s,d,l&&"fullWidth",r&&"disableElevation","color".concat((0,n.Z)(a))],grouped:["grouped","grouped".concat((0,n.Z)(d)),"grouped".concat((0,n.Z)(s)),"grouped".concat((0,n.Z)(s)).concat((0,n.Z)(d)),"grouped".concat((0,n.Z)(s)).concat((0,n.Z)(a)),o&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,i.Z)(c,x,t)},b=(0,d.default)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{["& .".concat(m.grouped)]:t.grouped},{["& .".concat(m.grouped)]:t["grouped".concat((0,n.Z)(a.orientation))]},{["& .".concat(m.grouped)]:t["grouped".concat((0,n.Z)(a.variant))]},{["& .".concat(m.grouped)]:t["grouped".concat((0,n.Z)(a.variant)).concat((0,n.Z)(a.orientation))]},{["& .".concat(m.grouped)]:t["grouped".concat((0,n.Z)(a.variant)).concat((0,n.Z)(a.color))]},{["& .".concat(m.firstButton)]:t.firstButton},{["& .".concat(m.lastButton)]:t.lastButton},{["& .".concat(m.middleButton)]:t.middleButton},t.root,t[a.variant],!0===a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth,"vertical"===a.orientation&&t.vertical]}})((0,s.Z)(e=>{let{theme:t}=e;return{display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius,variants:[{props:{variant:"contained"},style:{boxShadow:(t.vars||t).shadows[2]}},{props:{disableElevation:!0},style:{boxShadow:"none"}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"vertical"},style:{flexDirection:"column",["& .".concat(m.lastButton,",& .").concat(m.middleButton)]:{borderTopRightRadius:0,borderTopLeftRadius:0},["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderBottomRightRadius:0,borderBottomLeftRadius:0}}},{props:{orientation:"horizontal"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderTopRightRadius:0,borderBottomRightRadius:0},["& .".concat(m.lastButton,",& .").concat(m.middleButton)]:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}},{props:{variant:"text",orientation:"horizontal"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderRight:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(m.disabled)]:{borderRight:"1px solid ".concat((t.vars||t).palette.action.disabled)}}}},{props:{variant:"text",orientation:"vertical"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderBottom:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(m.disabled)]:{borderBottom:"1px solid ".concat((t.vars||t).palette.action.disabled)}}}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main}).flatMap(e=>{let[a]=e;return[{props:{variant:"text",color:a},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderColor:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / 0.5)"):(0,l.Fq)(t.palette[a].main,.5)}}}]}),{props:{variant:"outlined",orientation:"horizontal"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderRightColor:"transparent","&:hover":{borderRightColor:"currentColor"}},["& .".concat(m.lastButton,",& .").concat(m.middleButton)]:{marginLeft:-1}}},{props:{variant:"outlined",orientation:"vertical"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderBottomColor:"transparent","&:hover":{borderBottomColor:"currentColor"}},["& .".concat(m.lastButton,",& .").concat(m.middleButton)]:{marginTop:-1}}},{props:{variant:"contained",orientation:"horizontal"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderRight:"1px solid ".concat((t.vars||t).palette.grey[400]),["&.".concat(m.disabled)]:{borderRight:"1px solid ".concat((t.vars||t).palette.action.disabled)}}}},{props:{variant:"contained",orientation:"vertical"},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderBottom:"1px solid ".concat((t.vars||t).palette.grey[400]),["&.".concat(m.disabled)]:{borderBottom:"1px solid ".concat((t.vars||t).palette.action.disabled)}}}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.dark}).map(e=>{let[a]=e;return{props:{variant:"contained",color:a},style:{["& .".concat(m.firstButton,",& .").concat(m.middleButton)]:{borderColor:(t.vars||t).palette[a].dark}}}})],["& .".concat(m.grouped)]:{minWidth:40,boxShadow:"none",props:{variant:"contained"},style:{"&:hover":{boxShadow:"none"}}}}}));var j=o.forwardRef(function(e,t){let a=(0,c.i)({props:e,name:"MuiButtonGroup"}),{children:i,className:l,color:n="primary",component:d="div",disabled:s=!1,disableElevation:u=!1,disableFocusRipple:h=!1,disableRipple:x=!1,fullWidth:m=!1,orientation:j="horizontal",size:S="medium",variant:C="outlined",...N}=a,y={...a,color:n,component:d,disabled:s,disableElevation:u,disableFocusRipple:h,disableRipple:x,fullWidth:m,orientation:j,size:S,variant:C},w=v(y),E=o.useMemo(()=>({className:w.grouped,color:n,disabled:s,disableElevation:u,disableFocusRipple:h,disableRipple:x,fullWidth:m,size:S,variant:C}),[n,s,u,h,x,m,S,C,w.grouped]),O=o.Children.toArray(i).filter(e=>o.isValidElement(e)),Z=O.length,B=e=>{let t=0===e,a=e===Z-1;return t&&a?"":t?w.firstButton:a?w.lastButton:w.middleButton};return(0,g.jsx)(b,{as:d,role:"group",className:(0,r.Z)(w.root,l),ref:t,ownerState:y,...N,children:(0,g.jsx)(p.Z.Provider,{value:E,children:O.map((e,t)=>(0,g.jsx)(f.Z.Provider,{value:B(t),children:e},t))})})})},40343:function(e,t,a){"use strict";a.r(t);var o=a(57437),r=a(31193),i=a(28027),l=a(60091),n=a(14595),d=a(26460),s=a(83719),c=a(68038),u=a(65786),h=a(58433),x=a(23983),m=a(92355),p=a(97183),f=a(99128),g=a(2265),v=a(52610),b=a(41448),j=a.n(b),S=a(87138),C=a(39987),N=a(13726),y=a(15408),w=a(85935);function E(e){let{children:t,value:a,index:i,...l}=e;return(0,o.jsx)("div",{role:"tabpanel",hidden:a!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i),...l,children:a===i&&(0,o.jsx)(r.default,{sx:{p:3},children:t})})}function O(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}E.propTypes={children:j().node,index:j().number.isRequired,value:j().number.isRequired};let Z=[{field:"FECHA_PEDIDO",headerName:"Fecha",width:250,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ESTADO",headerName:"Estado",width:130},{field:"AUTORIZADONOM",headerName:"Autorizado",width:130},{field:"TOTAL_A_FACTURAR",headerName:"Total a facturar",width:130,valueFormatter:e=>{if(e.value)return"";let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"CreatedBy",headerName:"Creado por",width:230},{field:"U_EDITADOPOR",headerName:"Editado por",width:130},{field:"OBSERVACIONES",headerName:"Notas ",width:130},{field:"COMENTARIO_CXC",headerName:"Comentarios CL",width:300}],B=[{field:"FACTURA",headerName:"Factura",width:130},{field:"FECHA_DESPACHO",headerName:"Fecha",width:190,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"ANULADA",headerName:"AN",width:130},{field:"PRECIO_TOTAL",headerName:"V.fact",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PEDIDO",headerName:"Pedido",width:130},{field:"ARTICULO",headerName:"Articulo",width:130},{field:"DESCRIPCION",headerName:"Descripcion",width:700},{field:"CANTIDAD",headerName:"Cant",width:130,valueFormatter:e=>Number(e.value).toFixed(1),align:"right"},{field:"PRECIO_UNITARIO",headerName:"PrecioUni",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORCIVA",headerName:"IVA",width:130,align:"right"},{field:"PORDESC",headerName:"Desc",width:130,align:"right"},{field:"VDESC",headerName:"VDesc",width:130},{field:"TOTAL_MERCADERIA",headerName:"VTotal ",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"IDRUTERO",headerName:"IdRutero",width:130},{field:"FECHARUT",headerName:"FechaRut",width:300},{field:"IDGUIA",headerName:"IdGuia",width:130},{field:"FECHAGUIA",headerName:"FechaGuia",width:250,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"OBSERVACIONES",headerName:"Observaciones",width:800},{field:"RUBRO1",headerName:"Docs2",width:500}],A=[{field:"DOC",headerName:"DOC",width:130},{field:"FECHADOC",headerName:"FechaDoc",width:190,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"FECHAVENC",headerName:"FechaVenc",width:190,valueFormatter:e=>new Date(e.value).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},{field:"NUMDOC",headerName:"NumDoc",width:130},{field:"DIASVENC",headerName:"Venc",width:130,align:"right"},{field:"MONTO",headerName:"Monto",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SALDO",headerName:"Saldo",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMenorA30",headerName:"Venc < 30",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMayorA60",headerName:"Venc < 60",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"SMenorA60",headerName:"Venc > 60",width:130,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PLAZO",headerName:"Plazo",width:130,align:"right"},{field:"VENDEDOR",headerName:"VENDEDOR",width:130}];t.default=()=>{let{cliente:e}=(0,C.Z)(),[t]=(0,g.useState)([]),[a,b]=(0,g.useState)(3),[j,D]=(0,g.useState)([]),[R,F]=(0,g.useState)([]),[T,I]=(0,g.useState)([]),[P,L]=(0,g.useState)(!1),[M,k]=(0,g.useState)(e[0]),[z,U]=(0,g.useState)(0),[V,_]=(0,g.useState)(0);(0,g.useEffect)(()=>{L(!0)},[a]),(0,g.useEffect)(()=>{let e=Number(j.reduce((e,t)=>e+t.SMayorA60,0)).toFixed(0);_("".concat(parseFloat(e).toLocaleString()));let t=Number(j.reduce((e,t)=>e+t.SALDO,0)).toFixed(0);U("".concat(parseFloat(t).toLocaleString()))},[j]);let G=async()=>{try{let{datos:e}=await (0,y.Z)(w.x.url+"clientes/pedidos"+M.CLIENTE,"GET");e&&(F(e),L(!1))}catch(e){console.error("Error al obtener los datos",e),F([]),L(!1)}},H=async()=>{let{datos:e}=await (0,y.Z)(w.x.url+"clientes/facturas"+M.CLIENTE,"GET");e?I(e):(console.log("Error al obtener los datos"),I([])),L(!1)},J=async()=>{let{datos:e}=await (0,y.Z)(w.x.url+"clientes/carteras"+M.CLIENTE,"GET");e?D(e):(console.log("Error al obtener los datos"),D([])),L(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.default,{marginBottom:"40px",children:(0,o.jsx)(N.Z,{})}),(0,o.jsx)(r.default,{className:"container",sx:{paddingTop:1,display:"flex",alignContent:"center",alignItems:"center"},children:(0,o.jsx)(r.default,{style:{backgroundColor:"#eaeaea",width:"65%",height:"auto",paddingTop:0},children:(0,o.jsxs)(i.default,{sx:{padding:1},children:[(0,o.jsxs)(r.default,{children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)(S.default,{href:"./",children:(0,o.jsxs)(l.default,{variant:"outlined",sx:{margin:"2px",bgcolor:"#ffa28a"},onClick:()=>{localStorage.removeItem("clientTemp"),k("")},children:[" "," Cerrar "," "]})}),(0,o.jsx)(S.default,{href:".././pedidos/pedidosG/",children:(0,o.jsxs)(l.default,{variant:"outlined",sx:{margin:"2px",bgcolor:"#6cff5d"},children:[" "," Pedido "," "]})})]}),(0,o.jsx)(n.default,{sx:{},orientation:"horizontal"}),(0,o.jsx)(r.default,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:(0,o.jsxs)(d.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,o.jsxs)(l.default,{sx:{flexDirection:"column"},children:[(0,o.jsx)(s.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:z}),(0,o.jsx)(s.default,{variant:"body2",color:"text.primary",children:"Saldo"})]}),(0,o.jsxs)(l.default,{sx:{flexDirection:"column"},children:[(0,o.jsx)(s.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:V}),(0,o.jsx)(s.default,{variant:"body2",color:"text.primary",children:"Saldo Mayor a 60"})]})]})})]}),(0,o.jsx)(n.default,{sx:{},orientation:"horizontal"}),(0,o.jsx)(c.Z,{label:"Individual",control:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(c.Z,{label:"Compa\xf1ia",control:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(s.default,{gutterBottom:!0,variant:"h5",component:"div",sx:{fontSize:35},children:(null==M?void 0:M.NOMBREALIAS)||""}),(0,o.jsxs)(h.ZP,{container:!0,rowSpacing:1.5,columnSpacing:{xs:1,sm:2,md:3},children:[(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["NIT",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.CLIENTE)||""})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["Cupo",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:Number((null==M?void 0:M.CUPO)||"").toFixed(0)})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["Debe",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:Number((null==M?void 0:M.SALDO)||"").toFixed(0)})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["Direccion",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.DIRECCION)||""})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["Telefono",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.TELEFONO1)||""})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["Celular",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.TELEFONO1)||""})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:2,children:["Ciudad",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.CIUDAD)||""})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:3,children:["Departamento",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.DEPARTAMENTO)||""})]}),(0,o.jsxs)(h.ZP,{item:!0,xs:4,children:["Email",(0,o.jsx)(s.default,{sx:{mb:1.5,display:"flex"},color:"text.secondary",children:(null==M?void 0:M.E_MAIL)||""})]})]}),(0,o.jsx)(x.Z,{id:"filled-multiline-static",label:"Notas",multiline:!0,rows:4,defaultValue:(null==M?void 0:M.NOTAS)||"",variant:"filled",sx:{width:"100%"}}),(0,o.jsxs)(i.default,{sx:{width:"100%"},children:[(0,o.jsx)(r.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(m.Z,{value:a,onChange:(e,t)=>{b(t)},"aria-label":"basic tabs example",children:[(0,o.jsx)(p.Z,{label:"Pedidos",...O(0),onClick:G}),(0,o.jsx)(p.Z,{label:"Facturas",...O(1),onClick:H}),(0,o.jsx)(p.Z,{label:"Cartera",...O(2),onClick:J}),(0,o.jsx)(p.Z,{label:"",...O(3)})]})}),(0,o.jsx)(E,{value:a,index:0,children:(0,o.jsx)(r.default,{sx:{width:"100%",height:450},children:!0===P?(0,o.jsx)(r.default,{sx:{width:"100%"},children:(0,o.jsx)(f.Z,{})}):R.length<=0?(0,o.jsx)("h1",{children:"NO HAY PEDIDOS"}):(0,o.jsx)(v._,{density:"compact",rows:R,columns:Z,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.PEDIDO})})}),(0,o.jsx)(E,{value:a,index:1,children:(0,o.jsx)(r.default,{sx:{width:"100%",height:450},children:!0===P?(0,o.jsx)(r.default,{sx:{width:"100%"},children:(0,o.jsx)(f.Z,{})}):T.length<=0?(0,o.jsx)("h1",{children:"NO HAY FACTURAS"}):(0,o.jsx)(v._,{density:"compact",rows:T,columns:B,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.ID})})}),(0,o.jsx)(E,{value:a,index:2,children:(0,o.jsx)(r.default,{sx:{width:"100%",height:450},children:!0===P?(0,o.jsx)(r.default,{sx:{width:"100%"},children:(0,o.jsx)(f.Z,{})}):0===j.length?(0,o.jsx)("h1",{children:"NO HAY CARTERA"}):(0,o.jsx)(v._,{density:"compact",rows:j,columns:A,initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[5,10],rowSelectionModel:t,getRowId:e=>e.NUMDOC})})})]})]})})})]})}},13726:function(e,t,a){"use strict";a.d(t,{Z:function(){return P}});var o=a(57437),r=a(20124),i=a(31193),l=a(71733),n=a(79806),d=a(60335),s=a(60091),c=a(83719),u=a(62501),h=a(6291),x=a(11656),m=a(85465),p=a(66325),f=a(90922),g=a(26032),v=a(55693),b=a(42188),j=a(66299),S=a(78457),C=a(21704),N=a(66246),y=a(9504),w=a(16463),E=a(39987),O=a(2265),Z=a(32184),B=a(7547),A=a(57300),D=a(86917),R=a(47905),F=a(87138),T=e=>{let{page:t}=e;return(0,o.jsx)(i.default,{sx:{width:250},children:(0,o.jsx)("nav",{children:(0,o.jsx)(Z.Z,{children:t.map(e=>(0,o.jsx)(B.ZP,{disablePadding:!0,children:(0,o.jsxs)(A.Z,{LinkComponent:F.default,href:e.url,onClick:e.onClick,children:[(0,o.jsx)(D.Z,{children:e.icon}),(0,o.jsx)(R.Z,{children:e.title})]})},e.title))})})})};let I={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,pt:2,px:4,pb:3};var P=()=>{let e=(0,w.useRouter)(),{auth:t}=(0,E.Z)(),[a,Z]=(0,O.useState)(!1),[B,A]=(0,O.useState)(null),[D,R]=(0,O.useState)(!1),[P,L]=(0,O.useState)(null),M=()=>{R(!1),A(null)},k=[{title:"USUARIOS ",url:"../../usuarios",icon:(0,o.jsx)(p.Z,{})},{title:"PEDIDOS",url:"../../pedidos",icon:(0,o.jsx)(f.Z,{})},{title:"CLIENTES",url:"../../clients",icon:(0,o.jsx)(g.Z,{})},{title:"PRODUCTOS",icon:(0,o.jsx)(v.Z,{}),onClick:e=>{R(!0),A(e.currentTarget)}},{title:"FACTURAS",url:"../../facturas",icon:(0,o.jsx)(b.Z,{})},{title:"CAJA",url:"../../pedidos/pedidosCaja",icon:(0,o.jsx)(j.Z,{})}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.default,{}),(0,o.jsxs)(i.default,{sx:{flexGrow:1},children:[(0,o.jsx)(l.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,o.jsxs)(n.Z,{children:[(0,o.jsx)(d.default,{color:"inherit",size:"large",onClick:e=>{L(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,o.jsx)(y.default,{})}),(0,o.jsx)(i.default,{sx:{display:{xs:"none",md:"flex"}},children:k.map(e=>(0,o.jsx)(s.default,{color:"inherit",LinkComponent:F.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,o.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,o.jsx)(s.default,{component:F.default,href:"/start",color:"inherit",children:(0,o.jsx)(N.Z,{})}),(0,o.jsxs)(s.default,{color:"inherit",children:[(0,o.jsx)(C.Z,{}),t.PER_Nom]}),(0,o.jsx)(s.default,{color:"inherit",onClick:()=>Z(!0),children:(0,o.jsx)(S.Z,{})})]})}),(0,o.jsx)(u.Z,{open:a,onClose:()=>Z(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,o.jsxs)(i.default,{sx:I,children:[(0,o.jsx)(c.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,o.jsx)(i.default,{children:(0,o.jsx)(s.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{e.push("/")},children:"SALIR"})})]})}),(0,o.jsxs)(h.Z,{id:"basic-menu",anchorEl:B,open:D,onClose:M,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,o.jsx)(x.Z,{onClick:M,component:F.default,href:"../../productos",children:"Productos Por Bodega"}),(0,o.jsx)(x.Z,{onClick:M,component:F.default,href:"../../productosMG",children:"Productos-MG"})]}),(0,o.jsx)(m.ZP,{open:!!P,onClose:()=>{L(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,o.jsx)(T,{page:k})})]})]})}},39987:function(e,t,a){"use strict";a.d(t,{a:function(){return i}});var o=a(85800),r=a(2265);let i=()=>(0,r.useContext)(o.default);t.Z=i},85935:function(e,t,a){"use strict";a.d(t,{x:function(){return o}});let o={url:"http://172.20.20.3:8001/"}},15408:function(e,t){"use strict";let a=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3?arguments[3]:void 0;try{let r=!0,i={method:"GET"};("GET"===t||"DELETE"===t)&&(i={method:t}),("POST"===t||"PUT"===t)&&(JSON.stringify(a),o?i={method:t,body:a}:i.body=JSON.stringify(a));let l=await fetch(e,i);if(!l.ok)return{error:"Error en la solicitud Fetch",status:l.status,cargando:!1};let n=await l.json();return r=!1,{datos:n,cargando:r}}catch(e){return{datos:null,cargando:!1}}};t.Z=a},85800:function(e,t,a){"use strict";a.d(t,{AuthProvider:function(){return l}});var o=a(57437),r=a(2265);let i=(0,r.createContext)(),l=e=>{let{children:t}=e,[a,l]=(0,r.useState)({}),[n,d]=(0,r.useState)({}),[s,c]=(0,r.useState)({}),[u,h]=(0,r.useState)({}),[x,m]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=localStorage.getItem("datos"),t=localStorage.getItem("clientTemp"),a=localStorage.getItem("pedidoTemp"),o=localStorage.getItem("caja");e&&l(JSON.parse(e)),t&&d(JSON.parse(t)),a&&c(JSON.parse(a)),o&&h(JSON.parse(o))},[]),(0,o.jsx)(i.Provider,{value:{auth:a,setAuth:l,cliente:n,setCliente:d,pedido:s,setPedido:c,caja:u,setCaja:h,loading:x},children:t})};t.default=i}},function(e){e.O(0,[4797,4129,6291,2561,4275,3983,6540,1878,4486,2610,8433,1631,2971,7023,1744],function(){return e(e.s=46880)}),_N_E=e.O()}]);