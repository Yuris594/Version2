(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2842],{21678:(e,t,l)=>{Promise.resolve().then(l.bind(l,87300))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>L});var a=l(95155),i=l(20457),o=l(75436),r=l(11451),n=l(46805),s=l(894),d=l(2295),c=l(9561),u=l(81894),_=l(91888),x=l(74676),h=l(92080),f=l(96212),A=l(6069),p=l(9581),m=l(43677),C=l(85244),j=l(85067),O=l(2138);l(76046);var g=l(70689),E=l(12115),S=l(4918),I=l(41983),D=l(36017),b=l(2091),R=l(60391),v=l(48173),T=l.n(v);let N=e=>{let{page:t}=e;return(0,a.jsx)(o.default,{children:(0,a.jsx)(S.A,{children:t.map(e=>(0,a.jsx)(I.Ay,{disablePadding:!0,children:(0,a.jsxs)(D.A,{LinkComponent:T(),href:e.url,onClick:e.onClick,children:[(0,a.jsx)(b.A,{children:e.icon}),(0,a.jsx)(R.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var P=l(78897),w=l.n(P),y=l(79046),F=l.n(y);let L=()=>{let{auth:e,logout:t}=(0,g.A)(),[l,S]=(0,E.useState)(null),[I,D]=(0,E.useState)(!1),b=()=>{D(!1),S(null)},R=[{title:"USUARIOS ",url:"./usuarios",icon:(0,a.jsx)(x.A,{})},{title:"PEDIDOS",url:"./pedidos",icon:(0,a.jsx)(h.A,{})},{title:"CLIENTES",url:"./clients",icon:(0,a.jsx)(f.A,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(A.A,{}),onClick:e=>{D(!0),S(e.currentTarget)}},{title:"FACTURAS",url:"./facturas",icon:(0,a.jsx)(p.A,{})},{title:"CAJA",url:"./pedidos/pedidosCaja",icon:(0,a.jsx)(m.A,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),(0,a.jsxs)(o.default,{sx:{flexGrow:1},children:[(0,a.jsx)(r.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(n.A,{children:[(0,a.jsx)(s.A,{color:"inherit",onClick:e=>{S(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(C.A,{})}),(0,a.jsx)(o.default,{sx:{display:{xs:"none",md:"flex"}},children:R.map(e=>(0,a.jsx)(d.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:T(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(d.default,{component:T(),href:"/start",color:"inherit",children:(0,a.jsx)(O.A,{})}),(0,a.jsxs)(d.default,{className:F().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(f.A,{}),e&&e.PER_Nom]}),(0,a.jsx)(d.default,{color:"inherit",onClick:()=>{w().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,a.jsx)(j.A,{})})]})}),(0,a.jsxs)(u.A,{id:"basic-menu",anchorEl:l,open:I,onClose:b,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(_.A,{onClick:b,component:T(),href:"./buscarProd",children:"Buscar Por Referencias"}),(0,a.jsx)(_.A,{onClick:b,component:T(),href:"./productosMG",children:"Lista de Todos Los Productos"})]}),(0,a.jsx)(u.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{S(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(N,{page:R})})]})]})}},11434:(e,t,l)=>{"use strict";l.d(t,{m:()=>i});var a=l(12115);let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,l]=(0,a.useState)(e);return{form:t,changed:e=>{let{name:a,value:i}=e.target;l({...t,[a]:i})},setForm:l}}},87300:(e,t,l)=>{"use strict";l.r(t),l.d(t,{PedidosC:()=>X,default:()=>q});var a=l(95155),i=l(75436),o=l(86898),r=l(70152),n=l(78562),s=l(2295),d=l(22678),c=l(90507),u=l(97975),_=l(9561),x=l(73378),h=l(79987),f=l(62347),A=l(23613),p=l(75293),m=l(48803),C=l(21831),j=l(74205),O=l(12115),g=l(70689),E=l(11434),S=l(39241),I=l(8889);let D=(e,t,l)=>{let[a,i]=(0,O.useState)(0),[o,r]=(0,O.useState)(0);return(0,O.useEffect)(()=>{let a=0===l?e:t;if(Array.isArray(a)){let e=a.reduce((e,t)=>e+t.CPed*t.PRECIO,0),t=a.reduce((e,t)=>{let l=t.PRECIO*(1-t.PORC_DCTO/100)*(1+t.PORC_IMPUESTO/100);return e+t.CPed*l},0),l=Number(e).toFixed(0),o=Number(t).toFixed(0);i("".concat(parseFloat(l).toLocaleString())),r("".concat(parseFloat(o).toLocaleString()))}},[e,t,l]),{sumaSaldoTotal:a,sumaSaldoTotalDESC:o}};var b=l(6171),R=l.n(b),v=l(10142);l(92340);var T=l(89100);let N=e=>{{let t=document.createElement("canvas");return R()(t,e,{format:"CODE128"}),t.toDataURL("image/png")}},P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},[a]=(0,O.useState)((0,T.GP)(new Date,"dd/MM/yyyy HH:mm:ss")),i=N(null==e?void 0:e.PEDIDO);return{generarPDF:()=>{let o=new v.default("portrait","pt","letter"),r=[{field:"ARTICULO",headerName:"CODIGO",width:200},{field:"DESCRIPCION",headerName:"REFERENCIA",width:500},{field:"PRECIO",headerName:"PRECIO",width:200},{field:"CPed",headerName:"CANT",width:200,type:"number"},{field:"DESP",headerName:"DESP",width:250,type:"number"},{field:"EMPA",headerName:"EMPA",width:200,type:"number"}],n=t.map(e=>{let t=[];return r.forEach(l=>{let a=e[l.field];"PRECIO"===l.field&&(a=parseFloat(Number(a).toFixed(0)).toLocaleString()),t.push(a)}),t});o.setFontSize(20),o.addImage("".concat(i),220,10,130,60),o.setFont("helvetica","italic"),o.setFontSize(13),o.text("PREFACTURA",12,30),"S"===e.IMPRESO&&o.text("DUPLICADO",12,55),o.setFontSize(13),o.text("FACTURA N\xb0________",450,30),o.setFontSize(9),o.text(" ".concat(e.FECHA_PEDIDO),500,65),o.setFontSize(13),o.text("FECHA",450,65),o.text("________________________________________________________________________________",12,70),o.setFontSize(9),o.text("CLIENTE:    ".concat(e.NOMBRE_RAZON),12,85),o.text("NIT/CEDULA:    ".concat(e.CLIENTE),12,98),o.text("DOC2:    ".concat(e.PEDIDO),340,98),o.text("PEORI:    ".concat(e.PEDIDO),450,98),o.text("CIUDAD PPAL:    ".concat(e.CIUDAD,"-").concat(e.DEPTO),12,112),o.text("TEL:    ".concat(e.PEDIDO),340,112),o.text("D'UNA:    ".concat(e.PEDIDO),450,112),o.text("DIRECCION Y CIDUAD DE DESPACHO:    ".concat(e.PEDIDO),12,125),o.text("SOLICITA:   ".concat(e.PEDIDO),340,125),o.autoTable({head:[r.map(e=>e.headerName)],body:n,styles:{theme:"plain",tableWidth:"auto",lineColor:[200,200,200],lineWight:.1,font:"times",fontStyle:"normal",textColor:[0,0,0],display:"flex",cellWidth:"auto",fontSize:8},startY:150,theme:"plain",columnStyles:{cellWidth:"auto"}}),o.setFontSize(10),o.text("TOTAL ITEMS: ".concat(t.length),350,o.autoTable.previous.finalY+20),o.text("Total: ".concat(l),470,o.autoTable.previous.finalY+20),o.text("SEPARADO POR_____________________________________",12,o.autoTable.previous.finalY+20),o.text("REVISADO POR______________________________________",12,o.autoTable.previous.finalY+40),o.text("DESPACHADO POR______________________",350,o.autoTable.previous.finalY+40),o.setFontSize(8),o.text("VENDEDOR: ".concat(e.VENDEDOR),12,o.autoTable.previous.finalY+65),o.text("MODIFICADO POR: ".concat(e.U_EDITADOPOR),350,o.autoTable.previous.finalY+65),o.text("AUTORIZADO EN CARTERA POR: ".concat(e.VENDEDOR),12,o.autoTable.previous.finalY+80),o.text("FECHA AUTORIZADO: ".concat(e.U_EDITADOPOR),350,o.autoTable.previous.finalY+80),o.text("___________________________________________________________________________________________________________________",12,o.autoTable.previous.finalY+90),o.text("".concat(a),12,o.autoTable.previous.finalY+103),o.output("dataurlnewwindow")}}};var w=l(65068),y=l(81996),F=l.n(y),L=l(95156),U=l(7495),z=l(42035),k=l(29056),M=l(52035),B=l(450),V=l(73440),W=l(79545),G=l(6748),Y=l(77097);let Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90vh",maxWidth:"80vw",overflowY:"auto",overflowX:"hidden",padding:"16px",backgroundColor:"#fff",border:"2px solid #000",boxShadow:24};function H(e){let{children:t,value:l,index:o,...r}=e;return(0,a.jsx)("div",{role:"tabpanel",hidden:l!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o),...r,children:l===o&&(0,a.jsx)(i.default,{sx:{p:3},children:t})})}function J(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}H.propTypes={children:F().node,index:F().number.isRequired,value:F().number.isRequired};let X=()=>{let e=(0,O.useRef)(),{form:t,changed:l}=(0,E.m)({}),{pedido:b,setPedido:R}=(0,g.A)(),[v,T]=(0,O.useState)([]),[N,y]=(0,O.useState)([]),[F,X]=(0,O.useState)([]),[q,Q]=(0,O.useState)(b[0]),[$,K]=(0,O.useState)([]),[ee,et]=(0,O.useState)({}),[el,ea]=(0,O.useState)([]),[ei,eo]=(0,O.useState)({}),[er,en]=(0,O.useState)([]),es=(0,o.A)("(max-width: 600px)"),[ed,ec]=(0,O.useState)(!1),[eu,e_]=(0,O.useState)(!1),[ex,eh]=(0,O.useState)(!1),[ef,eA]=(0,O.useState)(0),ep=0===ef?F:er,{sumaSaldoTotal:em,sumaSaldoTotalDESC:eC}=D(F,er,ef),{generarPDF:ej}=P(q,ep,eC),eO=()=>ec(!1);(0,O.useEffect)(()=>{eg(),eE(),eS()},[]);let eg=async()=>{try{let e=await fetch(I.c.url+"/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();t&&(y(t),ea(t))}catch(e){console.log("error")}},eE=async()=>{try{let e=await fetch(I.c.url+"/pedidos/detalle_lineas/".concat(q.PEDIDO),{method:"GET",headers:{"Content-Type":"application"}}),t=await e.json();t&&X(t)}catch(e){console.log("error")}},eS=async()=>{try{let e=await fetch(I.c.url+"/pedidos/articulos_pendientes/".concat(q.PEDIDO),{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();t&&en(t)}catch(e){console.log("error")}},eI=async e=>{e.preventDefault();let l={...q,ARTICULOS:F,OBSERVACIONES:t.OBSERVACIONES};try{let e=await fetch(I.c.url+"/pedido/crear/",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});e.ok?e_(!0):(console.error("Error al enviar la solicitud:",e.statusText),eh(!0))}catch(e){console.error("Error de red:",e),eh(!0)}},eD=async()=>{let e={...q,ARTICULOS:er};try{let t=await fetch(I.c.url+"/pedido/crear/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});t.ok||console.error("Error al enviar la solicitud:",t.statusText)}catch(e){console.log("error"),console.error("Error de red:",e)}},eb=e=>{y(el.filter(t=>{let l=t.ARTICULO&&t.ARTICULO.toString().toLowerCase(),a=t.DESCRIPCION&&t.DESCRIPCION.toString().toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))?t:null}).filter(e=>null!==e))},eR=(e,t)=>{e.reason===p.q.rowFocusOut&&(t.defaultMuiPrevented=!0)},ev=e=>()=>{et({...ee,[e]:{mode:m.V_.Edit}})},eT=e=>()=>{et({...ee,[e]:{mode:m.V_.View}})},eN=e=>()=>{X(F.filter(t=>t.ARTICULO!==e))},eP=e=>()=>{et({...ee,[e]:{mode:m.V_.View,ignoreModifications:!0}}),F.find(t=>t.ARTICULO===e).isNew&&X(F.filter(t=>t.ARTICULO!==e))},ew=e=>{let t=F.findIndex(t=>t.ARTICULO===e.ARTICULO);if(-1===t)return console.error("ARTICULO NO ENCONTRADO"),e;let l={...e,isNew:!1},a=[...F];return a[t]=l,X(a),l},ey=e=>{et(e)},eF=[{field:"ARTICULO",headerName:"CODIGO",width:100},{field:"DESCRIPCION",headerName:"REFERENCIA",width:500},{field:"PRECIO",headerName:"PRECIO",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},editable:!0,type:"number"},{field:"CPed",headerName:"CANT",width:80,type:"number",editable:!0},{field:"PORC_DCTO",headerName:"D1",width:70,valueFormatter:e=>{let t=parseFloat(e).toLocaleString();return"".concat(parseFloat(t).toFixed(1))},editable:!0,type:"number"},{field:"DISP",headerName:"DISP",width:70,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},type:"number",cellClassName:e=>0===e.value?"red-text":""},{field:"PORC_IMPUESTO",headerName:"IVA",width:40,valueFormatter:e=>{let t=parseFloat(e).toLocaleString();return"".concat(parseFloat(t).toFixed(1))},type:"number"},{field:"Em",headerName:"EMP",width:80},{field:"EXIST_REAL",headerName:"EXIST-REAL",width:90,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},type:"number"},{field:"actions",type:"actions",headerName:"ACTIONS",width:100,cellClassName:"actions",getActions:e=>{var t;let{id:l}=e;return(null===(t=ee[l])||void 0===t?void 0:t.mode)===m.V_.Edit?[(0,a.jsx)(C.Z,{icon:(0,a.jsx)(G.A,{}),label:"Save",sx:{color:"primary.main"},onClick:eT(l)}),(0,a.jsx)(C.Z,{icon:(0,a.jsx)(M.A,{}),label:"Cancel",className:"textPrimary",onClick:eP(l),color:"inherit"})]:[(0,a.jsx)(C.Z,{icon:(0,a.jsx)(W.A,{}),label:"Edit",className:"textPrimary",onClick:ev(l),color:"inherit"}),(0,a.jsx)(C.Z,{icon:(0,a.jsx)(B.A,{}),label:"Delete",onClick:eN(l),color:"inherit"})]}}],eL=(e,t)=>{eo({...ei,[e]:t})},eU=[{field:"ARTICULO",headerName:"CODIGO",width:100},{field:"DESCRIPCION",headerName:"REFERENCIA",width:500,editable:!0},{field:"SUBLINEA",headerName:"SUBLINEA",width:300},{field:"PRECIO",headerName:"PRECIO",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString("es-CO"))},editable:!0,type:"number"},{field:"CANTIDAD",headerName:"CANT",width:80,type:"number",editable:!0,renderCell:e=>(0,a.jsx)(r.A,{sx:{width:"70px"},variant:"outlined",size:"small",value:ei[e.id]||"",onChange:t=>eL(e.id,t.target.value)})},{field:"PORC_IMPUESTO",headerName:"IVA",width:40},{field:"PRECIOMASIVA",headerName:"MASIVA",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString("es-CO"))},editable:!0},{field:"PORC_DCTO",headerName:"D1",width:40},{field:"TOTAL_DISP",headerName:"DISP",width:70},{field:"UNIDAD_EMPAQUE",headerName:"EMP",width:80},{field:"EXIST_REAL",headerName:"EXISTREAL",width:90}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.default,{children:[" "," "," ",(0,a.jsx)(w.A,{})," "," "]}),(0,a.jsxs)(i.default,{sx:{padding:"20px"},children:[(0,a.jsx)(n.A,{elevation:3,sx:{padding:1,marginBottom:1},children:(0,a.jsxs)(S.A,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(S.A,{size:{xs:12,sm:8,md:6},children:(0,a.jsx)("h2",{style:{margin:0},children:(0,a.jsx)("strong",{children:"PEDIDOS"})})}),(0,a.jsxs)(S.A,{size:{xs:12,sm:8,md:6},children:[(null==q?void 0:q.AUTORIZADONOM)==="APROBADO"?(0,a.jsxs)(s.default,{variant:"filled",sx:{bgcolor:"#fa4f4f"},onClick:ej,children:[" ",(0,a.jsx)(V.A,{})," "]}):(0,a.jsxs)(s.default,{variant:"filled",sx:{margin:1,bgcolor:"#fff64"},disabled:!0,children:[" ",(0,a.jsx)(V.A,{})," "]}),(0,a.jsxs)(s.default,{variant:"filled",sx:{margin:1,bgcolor:"#fff694"},onClick:()=>{let e="SI"===b.U_COMPESPECIAL?null:"SI",t={...q,U_COMPESPECIAL:e};R(t),Q(t)},children:[" ",(0,a.jsx)(Y.A,{})," "]}),(0,a.jsx)(s.default,{variant:"filled",sx:{margin:1,bgcolor:"#b6ff91"},onClick:()=>ec(!0),children:"MG"}),(0,a.jsxs)(s.default,{variant:"filled",sx:{margin:1,bgcolor:"#f145af"},children:[" ",(0,a.jsx)(U.A,{})," "]}),(0,a.jsxs)(s.default,{variant:"filled",sx:{margin:1,bgcolor:"#eabafe"},onClick:eI,children:[" ",(0,a.jsx)(k.A,{})," "]}),(0,a.jsx)(s.default,{variant:"filled",sx:{margin:1,bgcolor:"#84D8F4"},onClick:eD,children:(0,a.jsx)(z.A,{})}),(0,a.jsxs)(s.default,{variant:"filled",sx:{bgcolor:"#ffa28a"},onClick:()=>{window.history.back(),localStorage.removeItem("pedidoTemp")},children:[" ",(0,a.jsx)(L.A,{})," "]})]})]})}),(0,a.jsx)(i.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",p:2,zoom:.8},children:(0,a.jsx)(n.A,{sx:{width:{xs:"90%",sm:"70%",md:"50%",lg:"40%"}},children:(0,a.jsxs)(S.A,{container:!0,spacing:2,children:[(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsx)(c.A,{children:"Estado"}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.ESTADO)||"",label:"Estado"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsxs)(c.A,{children:[" ","Authorizacion"," "]}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.AUTORIZADONOM)||"",label:"Authorizacion"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsxs)(c.A,{children:[" ","Impreso"," "]}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.IMPRESO)||"",label:"Impreso"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsx)(c.A,{children:"Nro"}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.PEDIDO)||"",label:"Nro"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsxs)(c.A,{children:[" ","Cliente"," "]}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.CLIENTE)||"",label:"Cliente"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:9},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsx)(c.A,{}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.NOMBRE_RAZON)||""})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsx)(c.A,{children:"Fecha"}),(0,a.jsx)(u.A,{label:"Fecha"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsxs)(c.A,{children:[" ","Direccion de Envio"," "]}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.DEPTO)||"",label:"Direccion Envio"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsx)(c.A,{}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.CIUDAD)||""})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:3},children:(0,a.jsxs)(d.A,{fullWidth:!0,children:[(0,a.jsx)(c.A,{children:"Vend"}),(0,a.jsx)(u.A,{value:(null==q?void 0:q.VENDEDOR)||"",label:"Vend"})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:1},children:(0,a.jsxs)(n.A,{children:[(0,a.jsxs)(_.default,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[" ","Especial"," "]}),(0,a.jsxs)(_.default,{sx:{fontSize:20,padding:.5,color:"red"},variant:"body2",color:"text.primary",children:[" ",(null==q?void 0:q.U_COMPESPECIAL)||""," "]})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:6},children:(0,a.jsxs)(d.A,{sx:{margin:.5,display:"flex"},children:[(0,a.jsxs)(c.A,{htmlFor:"component-disabled",children:[" ","Nota Factura (Doc2)"," "]}),(0,a.jsx)(u.A,{label:"Nota Factura (Doc2)",id:"OBSERVACIONES",name:"OBSERVACIONES",autoComplete:"OBSERVACIONES",autoFocus:!0,value:t.OBSERVACIONES||"",onChange:l})]})}),(0,a.jsx)(S.A,{size:{xs:12,sm:5},children:(0,a.jsxs)(d.A,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(c.A,{htmlFor:"component-disabled"}),(0,a.jsx)(r.A,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:1,defaultValue:(null==q?void 0:q.OBSERVACIONES)||""})]})})]})})}),(0,a.jsx)(S.A,{size:{xs:12},children:(0,a.jsxs)(n.A,{sx:{width:"100%"},children:[(0,a.jsxs)(x.A,{value:ef,onChange:(e,t)=>{eA(t)},"aria-label":"basic tabs example",children:[(0,a.jsx)(h.A,{label:"Detalles Lineas",...J(0)}),(0,a.jsx)(h.A,{label:"Articulos Pendientes",...J(1)})]}),(0,a.jsx)(H,{value:ef,index:0,children:(0,a.jsx)(i.default,{sx:{height:"auto",width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#275126":"#e1e1e1"}}},children:(0,a.jsx)(i.default,{sx:{height:"auto",width:"100%"},children:(0,a.jsx)(j.z,{density:"compact",rows:F,columns:eF,getRowId:e=>e.ARTICULO,editMode:"row",onRowModesModelChange:ey,onRowEditStop:eR,processRowUpdate:ew,slotProps:{toolbar:{setProductosP:X,setRowModesModel:et}},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10]})})})}),(0,a.jsx)(H,{value:ef,index:1,children:(0,a.jsx)(i.default,{sx:{height:"auto",width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#275126":"#e1e1e1"}}},children:(0,a.jsx)(i.default,{sx:{height:"auto",width:"100%"},children:(0,a.jsx)(j.z,{density:"compact",rows:er,columns:eF,getRowId:e=>e.ARTICULO,onRowSelectionModelChange:ey,onRowEditStop:eR,processRowUpdate:ew,slotProps:{toolbar:{setProductosP:X,setRowModesModel:et}},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10]})})})})]})})]}),(0,a.jsx)(n.A,{elevation:3,sx:{padding:3,margin:3,marginTop:3},children:(0,a.jsx)(i.default,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,a.jsxs)(f.A,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(s.default,{sx:{flexDirection:"column"},children:[(0,a.jsxs)(_.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ","$",em," "]}),(0,a.jsxs)("strong",{children:[" ","SUB-TOTAL"," "]})]}),(0,a.jsxs)(s.default,{sx:{flexDirection:"column"},children:[(0,a.jsxs)(_.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ","$",eC," "]}),(0,a.jsxs)("strong",{children:[" ","TOTAL"," "]})]})]})})}),(0,a.jsxs)(i.default,{sx:{flexDirection:"row",display:"flex",justifyContent:"flex-end"},children:[(0,a.jsxs)("strong",{children:[" ","Editado por:"," "]}),(0,a.jsxs)(_.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ",(null==q?void 0:q.createdBy)||""," "]})]}),(0,a.jsx)(A.A,{open:ed,onClose:eO,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsx)(i.default,{sx:Z,children:(0,a.jsxs)(i.default,{sx:{padding:2,display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(i.default,{sx:{display:"flex",flexDirection:es?"column":"row",justifyContent:"space-between",alignItems:"center",gap:2},children:[(0,a.jsx)("h2",{children:(0,a.jsx)("strong",{children:"PRODUCTOS"})}),(0,a.jsxs)(i.default,{display:"flex",gap:1,children:[(0,a.jsx)(s.default,{variant:"contained",color:"success",onClick:()=>{let e=$.map(e=>{let t=N.find(t=>t.ARTICULO===e);return t&&ei[e]?{...t,CANTIDAD:ei[e]}:null}).filter(Boolean);X(t=>{let l=[...t];return e.forEach(e=>{let t=l.find(t=>t.ARTICULO===e.ARTICULO);t?t.CANTIDAD+=e.CANTIDAD:l.push(e)}),l}),K([]),eo({}),eO()},children:"Agregar"}),(0,a.jsx)(s.default,{variant:"contained",color:"error",onClick:eO,children:"Cerrar"})]})]}),(0,a.jsx)(i.default,{sx:{display:"flex",flexDirection:es?"column":"row",gap:2,alignItems:"center"},children:(0,a.jsx)(r.A,{id:"outlined-basic",placeholder:"Buscar Producto",value:v,onChange:e=>{e.preventDefault(),T(e.target.value),eb(e.target.value)},inputRef:e,sx:{width:"100%"}})}),(0,a.jsx)(i.default,{sx:{width:"100%",height:480},children:(0,a.jsx)(j.z,{density:"compact",rows:N,columns:eU,getRowId:e=>e.ARTICULO,pageSize:10,rowSelectionModel:$,processRowUpdate:ew,onRowSelectionModelChange:e=>{K(e)},sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})]})})})]})},q=X},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>a});let a={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>d,AuthProvider:()=>s});var a=l(95155),i=l(12115),o=l(76046),r=l(89208);let n=(0,i.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,l=(0,o.useRouter)(),[s]=(0,i.useState)(!0),[d,c]=(0,i.useState)(null),[u,_]=(0,i.useState)({}),[x,h]=(0,i.useState)({}),[f,A]=(0,i.useState)({}),p=(0,i.useCallback)(function(e){r.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),c(e)},[]),m=(0,i.useCallback)(function(){l.push("/"),r.A.remove("authTokens"),localStorage.removeItem("auth"),c(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth")||r.A.get("authTokens"),t=localStorage.getItem("pedido"),l=localStorage.getItem("caja"),a=localStorage.getItem("cliente");a&&_(JSON.parse(a)),t&&h(JSON.parse(t)),l&&A(JSON.parse(l)),e&&c(JSON.parse(e))},[]);let C=(0,i.useMemo)(()=>({auth:d,cliente:u,setCliente:_,pedido:x,setPedido:h,caja:f,setCaja:A,loading:s,login:p,logout:m}),[d,u,x,f,p,m]);return(0,a.jsx)(n.Provider,{value:C,children:t})},d=()=>(0,i.useContext)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,3930,9754,1083,1260,6403,152,8173,2670,7493,4205,6899,914,1229,8256,136,8441,1517,7358],()=>t(21678)),_N_E=e.O()}]);