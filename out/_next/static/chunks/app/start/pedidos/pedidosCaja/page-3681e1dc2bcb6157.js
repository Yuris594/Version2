(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8648],{66868:(e,t,l)=>{Promise.resolve().then(l.bind(l,77256))},78205:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});var a=l(12983),o=l(95155);let r=(0,a.A)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},85244:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});var a=l(12983),o=l(95155);let r=(0,a.A)((0,o.jsx)("path",{d:"m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83zM9 5v4H5V5zm10 10v4h-4v-4zM9 15v4H5v-4zm7.66-13.31L11 7.34 16.66 13l5.66-5.66zM11 3H3v8h8zm10 10h-8v8h8zm-10 0H3v8h8z"}),"WidgetsOutlined")},20457:(e,t,l)=>{"use strict";l.d(t,{default:()=>p});var a=l(12115),o=l(15438),r=l(12567),i=l(95155);let n="function"==typeof(0,o.Dp)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),d=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=function(e){var t,l;let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={};a&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var l,a;let[r,i]=t,n=e.getColorSchemeSelector(r);n.startsWith("@")?o[n]={":root":{colorScheme:null===(l=i.palette)||void 0===l?void 0:l.mode}}:o[n.replace(/\s*&/,"")]={colorScheme:null===(a=i.palette)||void 0===a?void 0:a.mode}});let r={html:s(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...d(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o},i=null===(l=e.components)||void 0===l?void 0:null===(t=l.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return i&&(r=[r,i]),r},u="mui-ecs",h=e=>{let t=c(e,!1),l=Array.isArray(t)?t[0]:t;return!e.vars&&l&&(l.html[":root:has(".concat(u,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var a,o;let[r,i]=t,n=e.getColorSchemeSelector(r);n.startsWith("@")?l[n]={[":root:not(:has(.".concat(u,"))")]:{colorScheme:null===(a=i.palette)||void 0===a?void 0:a.mode}}:l[n.replace(/\s*&/,"")]={["&:not(:has(.".concat(u,"))")]:{colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}}}),t},x=(0,o.Dp)(n?e=>{let{theme:t,enableColorScheme:l}=e;return c(t,l)}:e=>{let{theme:t}=e;return h(t)}),p=function(e){let{children:t,enableColorScheme:l=!1}=(0,r.b)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(a.Fragment,{children:[n&&(0,i.jsx)(x,{enableColorScheme:l}),!n&&!l&&(0,i.jsx)("span",{className:u,style:{display:"none"}}),t]})}},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>M});var a=l(95155),o=l(20457),r=l(75436),i=l(11451),n=l(46805),s=l(894),d=l(2295),c=l(9561),u=l(81894),h=l(91888),x=l(74676),p=l(92080),f=l(96212),m=l(6069),C=l(9581),g=l(43677),v=l(85244),j=l(85067),S=l(2138),b=l(70689),w=l(79046),A=l.n(w),O=l(12115),N=l(78897),E=l.n(N),I=l(4918),y=l(41983),k=l(36017),R=l(2091),L=l(60391),T=l(48173),P=l.n(T);let D=e=>{let{page:t}=e;return(0,a.jsx)(r.default,{children:(0,a.jsx)(I.A,{children:t.map(e=>(0,a.jsx)(y.Ay,{disablePadding:!0,children:(0,a.jsxs)(k.A,{LinkComponent:P(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(R.A,{children:e.icon}),(0,a.jsx)(L.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})},M=()=>{let{auth:e,logout:t}=(0,b.A)(),[l,w]=(0,O.useState)(null),[N,I]=(0,O.useState)(!1),y=()=>{I(!1),w(null)},k=[{title:"USUARIOS ",url:"/start/usuarios",icon:(0,a.jsx)(x.A,{})},{title:"PEDIDOS",url:"/start/pedidos",icon:(0,a.jsx)(p.A,{})},{title:"CLIENTES",url:"/start/clients",icon:(0,a.jsx)(f.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(m.A,{}),onClick:e=>{I(!0),w(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(C.A,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,a.jsx)(g.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{}),(0,a.jsxs)(r.default,{sx:{flexGrow:1},children:[(0,a.jsx)(i.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(n.A,{children:[(0,a.jsx)(s.A,{color:"inherit",onClick:e=>{w(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(v.A,{})}),(0,a.jsx)(r.default,{sx:{display:{xs:"none",md:"flex"}},children:k.map(e=>(0,a.jsx)(d.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:P(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(d.default,{component:P(),href:"/start",color:"inherit",children:(0,a.jsx)(S.A,{})}),(0,a.jsxs)(d.default,{className:A().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(f.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(d.default,{color:"inherit",onClick:()=>{E().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(j.A,{})})]})}),(0,a.jsxs)(u.A,{id:"basic-menu",anchorEl:l,open:N,onClose:y,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(h.A,{onClick:y,component:P(),href:"/start/buscarProd",children:"Buscar Por Referencias"}),(0,a.jsx)(h.A,{onClick:y,component:P(),href:"/start/productosMG",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(u.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{w(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(D,{page:k})})]})]})}},58896:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>f});var a=l(95155),o=l(12115),r=l(78205),i=l(894),n=l(6403),s=l(70689),d=l(74205),c=l(78562),u=l(8889),h=l(75436);let x=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],p=async()=>{try{let e=await fetch(u.c.url+"/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Network response was not ok");return await e.json()}catch(e){return console.error("Error fetching clients:",e),[]}},f=e=>{let{setOpen:t}=e,{setCliente:l}=(0,s.A)(),[u,f]=(0,o.useState)(""),[m,C]=(0,o.useState)([]),[g,v]=(0,o.useState)([]),[j,S]=(0,o.useState)([]);(0,o.useEffect)(()=>{(async()=>{let e=await p();e&&e.length>0?(S(e),v(e)):console.log("No se encontraron clientes")})()},[]);let b=e=>{S(g.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),o=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==o?void 0:o.includes(e.toLowerCase()))}))},w=(0,o.useCallback)(e=>{if(C(e),e.length>0){let a=g.filter(t=>{let l=t.CLIENTE;return l&&l.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(a)),l(a[0]),t(!1)}},[g]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,a.jsxs)(h.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsx)("h2",{children:(0,a.jsx)("strong",{children:"CLIENTES"})}),(0,a.jsxs)(c.A,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-right",width:600,margin:"0%"},children:[(0,a.jsx)(n.Ay,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:u,onChange:e=>{e.preventDefault(),f(e.target.value),b(e.target.value)}}),(0,a.jsx)(i.A,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(r.A,{})})]})]}),(0,a.jsx)(h.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#00796b",color:"#000000"}},children:(0,a.jsx)(d.z,{rows:j,columns:x,pageSizeOptions:[5,10],onRowSelectionModelChange:w,rowSelectionModel:m,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}}})})]})})}},77256:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>T});var a=l(95155),o=l(6748),r=l(12983);let i=(0,r.A)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var n=l(79545);let s=(0,r.A)((0,a.jsx)("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined");var d=l(75293),c=l(48803),u=l(21831),h=l(74205),x=l(75436),p=l(6403),f=l(62347),m=l(2295),C=l(9561),g=l(23613),v=l(54255),j=l(58896),S=l(12115);let b=(e,t,l,a)=>{(0,S.useEffect)(()=>{let o=o=>{let r=o.keyCode||o.which;if(r>=48&&r<=57||13===r){let o=String.fromCharCode(r),i=e.findIndex(e=>e.ARTICULO===l[0]);if(-1!==parseFloat(i)){let l=[...e],r=l[i][a];"0"===r||""===r?l[i][a]=o:l[i][a]="".concat(r).concat(o),console.log(r),t(l)}}},r=o=>{if(8===(o.keyCode||o.which)){let o=e.findIndex(e=>e.ARTICULO===l[0]);if(-1!==o&&e[o][a]){let l=[...e],r=l[o][a];l[o][a]=r.slice(0,-1),""===l[o][a]&&(l[o][a]="0"),t(l)}}};return document.addEventListener("keypress",o),document.addEventListener("keydown",r),()=>{document.removeEventListener("keypress",o),document.removeEventListener("keydown",r)}},[e,l,a])};var w=l(65068),A=l(70689),O=l(81996),N=l.n(O),E=l(48173),I=l.n(E),y=l(8889);N().node,N().number.isRequired,N().number.isRequired;let k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90vh",maxWidth:"80vw",overflowY:"auto",overflowX:"hidden",padding:"16px",bgcolor:"#ffffff",border:"2px solid #000",boxShadow:24},R=[{field:"DESCRIPCION",headerName:"REFERENCIA",width:500,headerClassName:"header-bold"},{field:"SUBLINEA",headerName:"SUBLINEA",width:300,headerClassName:"header-bold"},{field:"TOTAL_DISP",headerName:"DISP",width:70,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},type:"number",headerClassName:"header-bold"},{field:"PRECIO",headerName:"PRECIO",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},editable:!0,type:"number",headerClassName:"header-bold"},{field:"CANTIDAD",headerName:"",width:50,type:"number",headerClassName:"header-bold"},{field:"EXIST_REAL",headerName:"EXISTREAL",width:90,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},type:"number",headerClassName:"header-bold"}],L=async()=>(await fetch(y.c.url+"/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}})).json(),T=()=>{let{setCaja:e,cliente:t}=(0,A.A)(),[l,r]=(0,S.useState)(!1),[O,N]=(0,S.useState)("CPed"),[E,y]=(0,S.useState)([]),[T,P]=(0,S.useState)(),[D,M]=(0,S.useState)(!0),[F,z]=(0,S.useState)([]),[U,_]=(0,S.useState)([]),[B,J]=(0,S.useState)([]),[V,W]=(0,S.useState)([]),[G,H]=(0,S.useState)({}),[q,X]=(0,S.useState)(0);b(F,z,B,O),(0,S.useEffect)(()=>{(async()=>{let e=await L();e?(P(e),W(e),M(!1)):console.log("Error")})()},[]),(0,S.useEffect)(()=>{setTimeout(()=>{let e=Number(F.reduce((e,t)=>{let l=t.PRECIO*(1-t.PORC_DCTO/100)*(1+t.PORC_IMPUESTO/100);return e+t.CPed*l},0)).toFixed(0);X("".concat(parseFloat(e).toLocaleString()))},100)},[F,B]),(0,S.useEffect)(()=>{if(void 0!==U){let e={};U.forEach((t,l)=>{let a=T.find(e=>e.ARTICULO===t);if(a){if(a.CPed=1,"string"==typeof a.PRECIO){let e=parseInt(a.PRECIO);a.PRECIO=isNaN(e)?0:Math.round(100*e)/100}else"number"==typeof a.PRECIO&&(a.PRECIO=Math.round(a.PRECIO))}e[l]=a});let t={...JSON.parse(localStorage.getItem("pedidoGTemp"))||{},...e};localStorage.setItem("pedidoTempG",JSON.stringify(t)),void 0!==t&&K()}},[U]);let Z=e=>{P(V.filter(t=>{let l=t.ARTICULO&&t.ARTICULO.toString().toLowerCase(),a=t.DESCRIPCION&&t.DESCRIPCION.toString().toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))?t:null}).filter(e=>null!==e))},K=()=>{let e=JSON.parse(localStorage.getItem("pedidoTempG"));if(e&&e[0]&&e[0].ARTICULO){let t=Object.values(e),l=F.some(e=>e.ARTICULO===t[0].ARTICULO),a=[...F];l||z([...a,...t])}},Q=e=>()=>{H({...G,[e]:{mode:c.V_.Edit}})},Y=e=>()=>{H({...G,[e]:{mode:c.V_.View}})},$=e=>()=>{z(F.filter(t=>t.ARTICULO!==e))},ee=e=>()=>{H({...G,[e]:{mode:c.V_.View,ignoreModifications:!0}}),F.find(t=>t.ARTICULO===e).isNew&&z(F.filter(t=>t.ARTICULO!==e))},et=[{field:"DESCRIPCION",headerName:"Referencia",width:500},{field:"CPed",headerName:"Cant",width:80,type:"number",editable:!0},{field:"PRECIO",headerName:"Precio",width:130},{field:"actions",type:"actions",headerName:"Actions",cellClassName:"actions",getActions:e=>{var t;let{id:l}=e;return(null===(t=G[l])||void 0===t?void 0:t.mode)===c.V_.Edit?[(0,a.jsx)(u.Z,{icon:(0,a.jsx)(o.A,{}),label:"Save",sx:{color:"primary.main"},onClick:Y(l)}),(0,a.jsx)(u.Z,{icon:(0,a.jsx)(i,{}),label:"Cancel",className:"textPrimary",onClick:ee(l),color:"inherit"})]:[(0,a.jsx)(u.Z,{icon:(0,a.jsx)(n.A,{}),label:"Edit",className:"textPrimary",onClick:Q(l),color:"inherit"}),(0,a.jsx)(u.Z,{icon:(0,a.jsx)(s,{}),label:"Delete",className:"textPrimary",onClick:$(l),color:"inherit"})]}}],el=e=>{let t=e.currentTarget.value,l=F.findIndex(e=>e.ARTICULO===B[0]);if(-1!==l){let e=[...F],a=e[l][O];"0"===a||""===a?e[l][O]=t:e[l][O]="".concat(a).concat(t),z(e)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x.default,{children:[" ",(0,a.jsx)(w.A,{})," "]}),(0,a.jsx)(x.default,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:2,flexWrap:"wrap",mt:2,mr:4},children:(0,a.jsx)(p.Ay,{sx:{ml:1,flex:1,maxWidth:"300px",border:"2px solid black",borderRadius:"4px",p:1,mb:2},type:"text",value:E,onChange:e=>{y(e.target.value),Z(e.target.value)},placeholder:"Escanea el c\xf3digo de barras aqu\xed",onKeyDown:e=>{"Enter"===e.key&&""!==E&&(_([E]),J([E]),y([]),console.log(E),console.log(U))},autoFocus:!0})}),(0,a.jsxs)(x.default,{sx:{display:"flex",flexDirection:"row",height:"100%",justifyContent:"space-between"},children:[(0,a.jsxs)(x.default,{sx:{width:"30%",display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsx)(x.default,{sx:{mb:1,height:600,width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#27512":"#e1e1e1"}},"& .super-app-theme--header":{backgroundColor:"rgba(0, 0, 0, 0.541)",color:"#fff"}},children:(0,a.jsx)(h.z,{density:"compact",rows:F,columns:et,editMode:"row",getRowId:e=>e.ARTICULO,rowSelectionModel:B,rowModesModel:G,onRowModesModelChange:e=>{H(e)},onRowSelectionModelChange:e=>{J(e)},onRowEditStop:(e,t)=>{e.reason===d.q.rowFocusOut&&(t.defaultMuiPrevented=!0)},processRowUpdate:e=>{let t={...e,isNew:!1};return t.CPed=t.CPed||0,z(F.map(l=>l.ARTICULO===e.ARTICULO?t:l)),t},pageSizeOptions:[5,16],slotProps:{toolbar:{setProductosP:z,setRowModesModel:H}},initialState:{pagination:{paginationModel:{page:0,pageSize:16}}}})}),(0,a.jsxs)(x.default,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",mt:1},children:[(0,a.jsx)(f.A,{variant:"text","aria-label":"text button group",sx:{height:20},children:(0,a.jsxs)(m.default,{sx:{flexDirection:"row"},children:[(0,a.jsxs)(C.default,{variant:"outline",sx:{paddingRight:2,color:"black"},gutterBottom:!0,children:[" "," Total:$"," "]}),(0,a.jsxs)(C.default,{gutterBottom:!0,children:[" ",q," "]})]})}),(0,a.jsx)(x.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:(0,a.jsxs)(f.A,{variant:"outlined","aria-label":"text button group",children:[(0,a.jsx)(m.default,{sx:{display:"flex",flexDirection:"column"},children:(0,a.jsxs)(C.default,{sx:{display:"flex",color:"black"},gutterBottom:!0,children:[" ","Nota del Cliente"," "]})}),(0,a.jsx)(m.default,{sx:{display:"flex",flexDirection:"column"},children:(0,a.jsxs)(C.default,{sx:{display:"flex",color:"black"},gutterBottom:!0,children:[" ","Reembolso"," "]})}),(0,a.jsx)(m.default,{sx:{display:"flex",flexDirection:"column"},children:(0,a.jsxs)(C.default,{sx:{display:"flex",color:"black"},gutterBottom:!0,children:[" ","Informacion"," "]})})]})}),(0,a.jsxs)(x.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",height:"230px",overflow:"auto"},children:[(0,a.jsxs)(f.A,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"100%",height:"100%"},children:[(0,a.jsxs)(m.default,{variant:"outlined",sx:{width:"100%",height:"30%"},onClick:()=>r(!0),children:["Cliente:",t.NOMBREALIAS]}),(0,a.jsx)(g.A,{open:l,onClose:()=>r(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(x.default,{sx:k,children:(0,a.jsx)(j.default,{setOpen:r})})}),(0,a.jsx)(m.default,{component:I(),variant:"outlined",href:"0"!==q?"../../../start/caja":"",onClick:"0"!==q?()=>{let t={total:q,...F};localStorage.setItem("pago",JSON.stringify(t)),e(t)}:null,sx:{width:"100%",height:"100%",backgroundColor:"0"!==q?"#00796b":"transparent",color:"0"!==q?"white":"black"},children:"Pago"})]}),(0,a.jsxs)(f.A,{orientation:"vertical","aria-label":"vertical outlined button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:1,onClick:el,children:[" ","1"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:4,onClick:el,children:[" ","4"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:7,onClick:el,children:[" ","7"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:el,children:[" ","+/-"," "]})]}),(0,a.jsxs)(f.A,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:2,onClick:el,children:[" ","2"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:5,onClick:el,children:[" ","5"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:8,onClick:el,children:[" ","8"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:el,children:[" ","0"," "]})]}),(0,a.jsxs)(f.A,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:3,onClick:el,children:[" ","3"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:6,onClick:el,children:[" ","6"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:9,onClick:el,children:[" ","9"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},value:0,onClick:el,children:[" ",","," "]})]}),(0,a.jsxs)(f.A,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",sx:{margin:"2px",width:"30%",height:"100%"},children:[(0,a.jsxs)(m.default,{variant:"outlined",sx:{backgroundColor:"CPed"===O?"#606060":"transparent",color:"CPed"===O?"white":"",height:"100%"},onClick:()=>N("CPed"),children:[" ","Ctdad"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{backgroundColor:"PORC_DCTO"===O?"#606060":"transparent",color:"PORC_DCTO"===O?"white":"",height:"100%"},onClick:()=>N("PORC_DCTO"),children:[" ","%Desc"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{backgroundColor:"PRECIO"===O?"#606060":"transparent",color:"PRECIO"===O?"white":"",height:"100%"},onClick:()=>N("PRECIO"),children:[" ","Precio"," "]}),(0,a.jsxs)(m.default,{variant:"outlined",sx:{height:"100%"},onClick:()=>{let e=F.findIndex(e=>e.ARTICULO===B[0]);if(-1!==e&&F[e][O]){let t=[...F],l=t[e][O];t[e][O]=l.slice(0,-1),""===t[e][O]&&(t[e][O]="0"),z(t)}},children:[" ","X"," "]})]})]})]})]}),(0,a.jsx)(x.default,{sx:{display:"flex",width:"70%",alignItems:"center",height:"100%",justifyContent:"space-between",flexDirection:"column"},children:(0,a.jsx)(x.default,{sx:{display:"flex",width:"100%",height:1030,"& .super-app-theme--header":{backgroundColor:"#DCDCDC",color:"#000000"}},children:!0===D?(0,a.jsxs)(x.default,{sx:{width:"100%"},children:[" ",(0,a.jsx)(v.A,{})," "]}):(0,a.jsx)(h.z,{rows:T,columns:R,getRowId:e=>e.ARTICULO,pageSizeOptions:[17],onRowSelectionModelChange:e=>{_(e);let t=F.map(t=>e.includes(t.ARTICULO)?{...t,CPed:t.CPed?t.CPed+1:1}:t);z(t);let l={};e.forEach((e,a)=>{let o=t.find(t=>t.ARTICULO===e);o&&(l[a]=o)});let a={...JSON.parse(localStorage.getItem("pedidoGTemp"))||{},...l};localStorage.setItem("pedidoTemp",JSON.stringify(a)),void 0!==a&&K()},initialState:{pagination:{paginationModel:{page:0,pageSize:17}}},onSelectionModelChange:e=>_(e),rowSelectionModel:U})})})]})]})}},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>a});let a={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>d,AuthProvider:()=>s});var a=l(95155),o=l(12115),r=l(76046),i=l(89208);let n=(0,o.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,l=(0,r.useRouter)(),[s]=(0,o.useState)(!0),[d,c]=(0,o.useState)(null),[u,h]=(0,o.useState)({}),[x,p]=(0,o.useState)({}),[f,m]=(0,o.useState)({}),C=(0,o.useCallback)(function(e){i.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),c(e)},[]),g=(0,o.useCallback)(function(){l.push("/"),i.A.remove("authTokens"),localStorage.removeItem("auth"),c(null)},[]);(0,o.useEffect)(()=>{let e=localStorage.getItem("auth")||i.A.get("authTokens"),t=localStorage.getItem("pedido"),l=localStorage.getItem("caja"),a=localStorage.getItem("cliente");a&&h(JSON.parse(a)),t&&p(JSON.parse(t)),l&&m(JSON.parse(l)),e&&c(JSON.parse(e))},[]);let v=(0,o.useMemo)(()=>({auth:d,cliente:u,setCliente:h,pedido:x,setPedido:p,caja:f,setCaja:m,loading:s,login:C,logout:g}),[d,u,x,f,C,g]);return(0,a.jsx)(n.Provider,{value:v,children:t})},d=()=>(0,o.useContext)(n)},79046:e=>{e.exports={style:{fontFamily:"'Lora', 'Lora Fallback'",fontStyle:"normal"},className:"__className_d48d41"}}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,9754,1083,1260,6403,152,8173,2670,7493,4205,8256,8441,1517,7358],()=>t(66868)),_N_E=e.O()}]);