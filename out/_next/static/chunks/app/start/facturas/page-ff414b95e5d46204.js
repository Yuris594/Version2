(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6175],{12206:(e,t,o)=>{Promise.resolve().then(o.bind(o,68736))},85244:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var a=o(12983),r=o(95155);let l=(0,a.A)((0,r.jsx)("path",{d:"m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83zM9 5v4H5V5zm10 10v4h-4v-4zM9 15v4H5v-4zm7.66-13.31L11 7.34 16.66 13l5.66-5.66zM11 3H3v8h8zm10 10h-8v8h8zm-10 0H3v8h8z"}),"WidgetsOutlined")},20457:(e,t,o)=>{"use strict";o.d(t,{default:()=>m});var a=o(12115),r=o(15438),l=o(12567),n=o(95155);let i="function"==typeof(0,r.Dp)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),c=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),d=function(e){var t,o;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={};a&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var o,a;let[l,n]=t,i=e.getColorSchemeSelector(l);i.startsWith("@")?r[i]={":root":{colorScheme:null===(o=n.palette)||void 0===o?void 0:o.mode}}:r[i.replace(/\s*&/,"")]={colorScheme:null===(a=n.palette)||void 0===a?void 0:a.mode}});let l={html:s(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...c(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...r},n=null===(o=e.components)||void 0===o?void 0:null===(t=o.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return n&&(l=[l,n]),l},u="mui-ecs",_=e=>{let t=d(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[":root:has(".concat(u,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var a,r;let[l,n]=t,i=e.getColorSchemeSelector(l);i.startsWith("@")?o[i]={[":root:not(:has(.".concat(u,"))")]:{colorScheme:null===(a=n.palette)||void 0===a?void 0:a.mode}}:o[i.replace(/\s*&/,"")]={["&:not(:has(.".concat(u,"))")]:{colorScheme:null===(r=n.palette)||void 0===r?void 0:r.mode}}}),t},p=(0,r.Dp)(i?e=>{let{theme:t,enableColorScheme:o}=e;return d(t,o)}:e=>{let{theme:t}=e;return _(t)}),m=function(e){let{children:t,enableColorScheme:o=!1}=(0,l.b)({props:e,name:"MuiCssBaseline"});return(0,n.jsxs)(a.Fragment,{children:[i&&(0,n.jsx)(p,{enableColorScheme:o}),!i&&!o&&(0,n.jsx)("span",{className:u,style:{display:"none"}}),t]})}},894:(e,t,o)=>{"use strict";o.d(t,{A:()=>A});var a=o(12115),r=o(43463),l=o(7123),n=o(17280),i=o(89142),s=o(98330),c=o(31628),d=o(12567),u=o(89679),_=o(37410),p=o(81045),m=o(37157);function h(e){return(0,m.Ay)("MuiIconButton",e)}let f=(0,p.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var g=o(95155);let x=e=>{let{classes:t,disabled:o,color:a,edge:r,size:n}=e,i={root:["root",o&&"disabled","default"!==a&&"color".concat((0,_.A)(a)),r&&"edge".concat((0,_.A)(r)),"size".concat((0,_.A)(n))]};return(0,l.A)(i,h,t)},S=(0,i.default)(u.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,"default"!==o.color&&t["color".concat((0,_.A)(o.color))],o.edge&&t["edge".concat((0,_.A)(o.edge))],t["size".concat((0,_.A)(o.size))]]}})((0,s.A)(e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,n.X4)(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}}),(0,s.A)(e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter((0,c.A)()).map(e=>{let[o]=e;return{props:{color:o},style:{color:(t.vars||t).palette[o].main}}}),...Object.entries(t.palette).filter((0,c.A)()).map(e=>{let[o]=e;return{props:{color:o},style:{"--IconButton-hoverBg":t.vars?"rgba(".concat((t.vars||t).palette[o].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,n.X4)((t.vars||t).palette[o].main,t.palette.action.hoverOpacity)}}}),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],["&.".concat(f.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}})),A=a.forwardRef(function(e,t){let o=(0,d.b)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:l,className:n,color:i="default",disabled:s=!1,disableFocusRipple:c=!1,size:u="medium",..._}=o,p={...o,edge:a,color:i,disabled:s,disableFocusRipple:c,size:u},m=x(p);return(0,g.jsx)(S,{className:(0,r.A)(m.root,n),centerRipple:!0,focusRipple:!c,disabled:s,ref:t,..._,ownerState:p,children:l})})},65068:(e,t,o)=>{"use strict";o.d(t,{A:()=>k});var a=o(95155),r=o(48173),l=o.n(r),n=o(75436),i=o(4918),s=o(41983),c=o(36017),d=o(2091),u=o(60391);let _=e=>{let{page:t}=e;return(0,a.jsx)(n.default,{children:(0,a.jsx)(i.A,{children:t.map(e=>(0,a.jsx)(s.Ay,{disablePadding:!0,children:(0,a.jsxs)(c.A,{LinkComponent:l(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(d.A,{children:e.icon}),(0,a.jsx)(u.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var p=o(78897),m=o.n(p),h=o(12115),f=o(79046),g=o.n(f),x=o(2138),S=o(70689),A=o(96212),C=o(85067),y=o(85244),v=o(74676),b=o(92080),T=o(6069),E=o(9581),O=o(43677),I=o(20457),N=o(11451),j=o(46805),R=o(894),L=o(2295),z=o(9561),D=o(81894),P=o(91888);let k=()=>{let{auth:e,logout:t}=(0,S.A)(),[o,r]=(0,h.useState)(null),[i,s]=(0,h.useState)(!1),c=()=>{s(!1),r(null)},d=[{title:"USUARIOS ",url:"/start/usuarios/",icon:(0,a.jsx)(v.A,{})},{title:"PEDIDOS",url:"/start/pedidos/",icon:(0,a.jsx)(b.A,{})},{title:"CLIENTES",url:"/start/clients/",icon:(0,a.jsx)(A.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(T.A,{}),onClick:e=>{s(!0),r(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas/",icon:(0,a.jsx)(E.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja/",icon:(0,a.jsx)(O.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I.default,{}),(0,a.jsxs)(n.default,{sx:{flexGrow:1},children:[(0,a.jsx)(N.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(j.A,{children:[(0,a.jsx)(R.A,{color:"inherit",onClick:e=>{r(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(y.A,{})}),(0,a.jsx)(n.default,{sx:{display:{xs:"none",md:"flex"}},children:d.map(e=>(0,a.jsx)(L.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:l(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(z.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(L.default,{component:l(),href:"/start",color:"inherit",children:(0,a.jsx)(x.A,{})}),(0,a.jsxs)(L.default,{className:g().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(A.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(L.default,{color:"inherit",onClick:()=>{m().fire({title:"\xbfQuieres terminar la Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#09ff00",cancelButtonColor:"#fa0000",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(C.A,{})})]})}),(0,a.jsxs)(D.A,{id:"basic-menu",anchorEl:o,open:i,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(P.A,{onClick:c,component:l(),href:"/start/buscarProd/",children:"Buscar Por Referencias"}),(0,a.jsx)(P.A,{onClick:c,component:l(),href:"/start/productosMG/",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(D.A,{id:"basic-menu",anchorEl:o,MenuListProps:{"aria-labelledby":"basic-button"},open:!!o,onClose:()=>{r(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(_,{page:d})})]})]})}},11434:(e,t,o)=>{"use strict";o.d(t,{m:()=>r});var a=o(12115);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,o]=(0,a.useState)(e);return{form:t,changed:e=>{let{name:a,value:r}=e.target;o({...t,[a]:r})},setForm:o}}},68736:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>C});var a=o(95155);o(92340);var r=o(10142),l=o(78897),n=o.n(l),i=o(89100),s=o(8889),c=o(76290),d=o.n(c),u=o(12115),_=o(11434),p=o(65068),m=o(75436),h=o(78562),f=o(9561),g=o(70152),x=o(2295);let S=()=>{n().fire({title:"Factura Solicitada No Existe!",icon:"info"})},A=async e=>(await fetch(s.c.url+"/clientes/factura_lineas/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}})).json(),C=()=>{let[e,t]=(0,u.useState)(null),{form:o,changed:l}=(0,_.m)({}),[n,s]=(0,u.useState)({}),[c,C]=(0,u.useState)([]),[y]=(0,u.useState)((0,i.GP)(new Date,"dd/MM/yyyy HH:mm:ss")),v=async e=>{e.preventDefault();let a=o.factura,r=await A(a);try{if(r){t(r[0]);let e=["ARTICULO","CANTIDAD","DESCRIPCION","PORCIVA","PORDESC","PRECIO_UNITARIO","PRECIO_TOTAL","TOTAL_IMPUESTO1","DESC_TOT_LINEA","TOTAL_MERCADERIA"],o=r.map(t=>{let o=Object.fromEntries(Object.entries(t).filter(t=>{let[o]=t;return e.includes(o)}));return"PRECIO_TOTAL"in o&&(o.PRECIO_TOTAL=Math.floor(o.PRECIO_TOTAL)),"DESC_TOT_LINEA"in o&&(o.DESC_TOT_LINEA=Math.floor(o.DESC_TOT_LINEA)),o});C(o);let a=0,l=0;o.forEach(e=>{a+=e.PRECIO_TOTAL||0,l+=e.DESC_TOT_LINEA||0});let n=.19*a,i=a+n;s({sumatotal:a.toLocaleString("es-ES"),descuento:l.toLocaleString("es-ES"),impuesto:n.toLocaleString("es-ES"),totalConImpuesto:i.toLocaleString("es-ES")})}else S()}catch(e){console.error("Error al realizar la peticion;",e),S()}};(0,u.useEffect)(()=>{e&&c&&(b(),t(),C([]))},[e,c]);let b=()=>{let t=new r.default("portrait","pt","letter"),o=[{field:"ARTICULO",headerName:"REF.",width:200},{field:"CANTIDAD",headerName:"CANT",width:200,align:"right"},{field:"CPed",headerName:"UND",width:200,type:"number",align:"right"},{field:"DESCRIPCION",headerName:"DESCRIPCI\xd3N",width:1e3},{field:"PORCIVA",headerName:"IVA",width:200,align:"right"},{field:"PORDESC",headerName:"DTO",width:200,align:"right"},{field:"PRECIO_UNITARIO",headerName:"VALOR UNI",width:200,align:"right"},{field:"PRECIO_TOTAL",headerName:"TOTAL",width:250,type:"number",align:"right"}],a=c.map(e=>{let t=[];return o.forEach(o=>{let a=e[o.field];("PRECIO_UNITARIO"===o.field||"PRECIO_TOTAL"===o.field)&&(a=parseFloat(Number(a).toFixed(0)).toLocaleString()),t.push(a)}),t});t.setFontSize(11),t.setFont("times","italic"),t.text("Nuestra direcci\xf3n y lineas de atenci\xf3n han cambiado:(4) 604 3380 - 3203509705",100,17),t.setFontSize(13),t.text("_________________________________________________________________________________",12,20),t.setFontSize(13),t.addImage("/logo_factura.png","PNG",10,30,200,25),t.setFontSize(15),t.text("REMISI\xd3N N\xb0:   ".concat(e.FACTURA),350,45),t.setFontSize(9),t.text(" ".concat(e.FECHA_DESPACHO),500,65),t.setFontSize(11),t.text("FECHA",460,65),t.text("NIT: 830.900.137-1",50,65),t.setFontSize(13),t.text("_____________________________________________________________________________",12,20),t.setFontSize(9),t.text("CLIENTE:    ".concat(e.CLIENTE),12,85),t.text("NIT/CEDULA:    ".concat(e.CreatedBy),12,98),t.text("TEL:    ".concat(e.CreatedBy),300,98),t.text("VENDEDOR:    ".concat(e.CreatedBy),440,98),t.text("MUNICIPIO:    ".concat(e.CreatedBy,"-").concat(e.CreatedBy),12,112),t.text("PEDIDO:    ".concat(e.PEDIDO),300,112),t.text("CREADO:    ".concat(e.CreatedBy),440,112),t.text("DIRECCION:    ".concat(e.CreatedBy),12,125),t.text("NOTA:   ".concat(e.OBSERVACIONES),12,139),t.autoTable({head:[o.map(e=>e.headerName)],body:a,startY:150,theme:"plain",columnStyles:{cellWidth:"auto"},styles:{theme:"plain",tableWidth:"auto",lineColor:[200,200,200],lineWidth:.1,font:"times",fontStyle:"normal",textColor:[0,0,0],display:"flex",fontSize:8},tableWidth:t.internal.pageSize.width-30,margin:{left:12,right:16}}),t.setFontSize(10),t.setFont("times","italic"),t.text("TOTAL ITEMS:        ".concat(c.length),350,t.autoTable.previous.finalY+20),t.text("SubTotal:     ".concat(e.TOTAL_MERCADERIA.toLocaleString("es-ES")),470,t.autoTable.previous.finalY+20),t.text("Desc:           ".concat(n.descuento.toLocaleString("es-ES")),470,t.autoTable.previous.finalY+40),t.text("IVA:              ".concat(n.impuesto),470,t.autoTable.previous.finalY+60),t.text("TOTAL:        ".concat(n.totalConImpuesto),470,t.autoTable.previous.finalY+80),t.setFontSize(11),t.text("ACEPTO este documento y declaro haber recibido real y \n materialmente los articulos arriba descritos ",12,t.autoTable.previous.finalY+20),t.text("FECHA RECIBIDO_____________",280,t.autoTable.previous.finalY+72),t.text("FIRMA Y SELLO",12,t.autoTable.previous.finalY+90),t.text("HORA:____:____",280,t.autoTable.previous.finalY+86),t.text("".concat(y),12,t.autoTable.previous.finalY+106),t.rect(10,t.autoTable.previous.finalY+9,450,88),t.rect(463,t.autoTable.previous.finalY+9,120,88),t.output("dataurlnewwindow")};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.default,{children:[" ",(0,a.jsx)(p.A,{})," "]}),(0,a.jsx)(m.default,{className:"container",children:(0,a.jsx)(m.default,{className:d().className,sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"44vw"},children:(0,a.jsxs)(h.A,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",bgcolor:"#eeee",padding:2},children:[(0,a.jsx)(f.default,{className:d().className,component:"h1",variant:"h5",children:"Digite el n\xfamero de la Factura"}),(0,a.jsxs)(m.default,{component:"form",noValidate:!0,sx:{mt:1},children:[(0,a.jsx)(g.A,{required:!0,fullWidth:!0,id:"factura",name:"factura",autoComplete:"factura",autoFocus:!0,value:o.factura||"",onChange:l}),(0,a.jsx)(x.default,{className:d().className,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:v,children:"Buscar"})]})]})})})]})}},8889:(e,t,o)=>{"use strict";o.d(t,{c:()=>a,m:()=>r});let a={url:"http://172.20.20.3:8001"},r={url:"http://192.168.1.3:3010/api"}},70689:(e,t,o)=>{"use strict";o.d(t,{A:()=>c,AuthProvider:()=>s});var a=o(95155),r=o(12115),l=o(76046),n=o(89208);let i=(0,r.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,o=(0,l.useRouter)(),[s]=(0,r.useState)(!0),[c,d]=(0,r.useState)(null),[u,_]=(0,r.useState)({}),[p,m]=(0,r.useState)({}),[h,f]=(0,r.useState)({}),g=(0,r.useCallback)(function(e){n.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),d(e)},[]),x=(0,r.useCallback)(function(){o.push("/"),n.A.remove("authTokens"),localStorage.removeItem("auth"),d(null)},[]);(0,r.useEffect)(()=>{let e=localStorage.getItem("auth")||n.A.get("authTokens"),t=localStorage.getItem("pedido"),o=localStorage.getItem("caja"),a=localStorage.getItem("cliente");a&&_(JSON.parse(a)),t&&m(JSON.parse(t)),o&&f(JSON.parse(o)),e&&d(JSON.parse(e))},[]);let S=(0,r.useMemo)(()=>({auth:c,cliente:u,setCliente:_,pedido:p,setPedido:m,caja:h,setCaja:f,loading:s,login:g,logout:x}),[c,u,p,h,g,x]);return(0,a.jsx)(i.Provider,{value:S,children:t})},c=()=>(0,r.useContext)(i)},79046:e=>{e.exports={style:{fontFamily:"'Lora', 'Lora Fallback'",fontStyle:"normal"},className:"__className_d48d41"}},76290:e=>{e.exports={style:{fontFamily:"'Lora', 'Lora Fallback'",fontStyle:"normal"},className:"__className_d48d41"}},21855:(e,t,o)=>{"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.d(t,{A:()=>a})}},e=>{var t=t=>e(e.s=t);e.O(0,[7199,339,8320,3930,9754,1083,1260,6403,152,3685,2670,7493,1229,8441,1517,7358],()=>t(12206)),_N_E=e.O()}]);