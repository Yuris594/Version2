(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2842],{21678:(e,t,l)=>{Promise.resolve().then(l.bind(l,87300))},65068:(e,t,l)=>{"use strict";l.d(t,{A:()=>U});var i=l(95155),a=l(20457),o=l(75436),s=l(11451),n=l(46805),r=l(894),d=l(2295),c=l(9561),u=l(81894),_=l(91888),x=l(74676),h=l(92080),f=l(96212),A=l(6069),p=l(9581),m=l(43677),C=l(85244),j=l(85067),O=l(2138);l(76046);var g=l(70689),E=l(12115),S=l(4918),I=l(41983),D=l(36017),b=l(2091),R=l(60391),v=l(48173),T=l.n(v);let P=e=>{let{page:t}=e;return(0,i.jsx)(o.default,{children:(0,i.jsx)(S.A,{children:t.map(e=>(0,i.jsx)(I.Ay,{disablePadding:!0,children:(0,i.jsxs)(D.A,{LinkComponent:T(),href:e.url,onClick:e.onClick,children:[(0,i.jsx)(b.A,{children:e.icon}),(0,i.jsx)(R.A,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};var N=l(78897),w=l.n(N),y=l(79046),L=l.n(y);let U=()=>{let{auth:e,logout:t}=(0,g.A)(),[l,S]=(0,E.useState)(null),[I,D]=(0,E.useState)(!1),b=()=>{D(!1),S(null)},R=[{title:"USUARIOS ",url:"./usuarios",icon:(0,i.jsx)(x.A,{})},{title:"PEDIDOS",url:"./pedidos",icon:(0,i.jsx)(h.A,{})},{title:"CLIENTES",url:"./clients",icon:(0,i.jsx)(f.A,{})},{title:"PRODUCTOS",icon:(0,i.jsx)(A.A,{}),onClick:e=>{D(!0),S(e.currentTarget)}},{title:"FACTURAS",url:"./facturas",icon:(0,i.jsx)(p.A,{})},{title:"CAJA",url:"./pedidos/pedidosCaja",icon:(0,i.jsx)(m.A,{})}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{}),(0,i.jsxs)(o.default,{sx:{flexGrow:1},children:[(0,i.jsx)(s.A,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,i.jsxs)(n.A,{children:[(0,i.jsx)(r.A,{color:"inherit",onClick:e=>{S(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,i.jsx)(C.A,{})}),(0,i.jsx)(o.default,{sx:{display:{xs:"none",md:"flex"}},children:R.map(e=>(0,i.jsx)(d.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:T(),href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,i.jsx)(c.default,{variant:"h6",sx:{flexGrow:1}}),(0,i.jsx)(d.default,{component:T(),href:"/start",color:"inherit",children:(0,i.jsx)(O.A,{})}),(0,i.jsxs)(d.default,{className:L().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,i.jsx)(f.A,{}),e&&e.PER_Nom]}),(0,i.jsx)(d.default,{color:"inherit",onClick:()=>{w().fire({title:"\xbfQuieres Terminar La Sesi\xf3n?",icon:"question",showCancelButton:!0,confirmButtonColor:"#28ee32",cancelButtonColor:"#f12260",confirmButtonText:"Aceptar"}).then(e=>{e.isConfirmed&&t()})},children:(0,i.jsx)(j.A,{})})]})}),(0,i.jsxs)(u.A,{id:"basic-menu",anchorEl:l,open:I,onClose:b,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,i.jsx)(_.A,{onClick:b,component:T(),href:"./buscarProd",children:"Buscar Por Referencias"}),(0,i.jsx)(_.A,{onClick:b,component:T(),href:"./productosMG",children:"Lista de Todos Los Productos"})]}),(0,i.jsx)(u.A,{id:"basic-menu",anchorEl:l,MenuListProps:{"aria-labelledby":"basic-button"},open:!!l,onClose:()=>{S(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,i.jsx)(P,{page:R})})]})]})}},11434:(e,t,l)=>{"use strict";l.d(t,{m:()=>a});var i=l(12115);let a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,l]=(0,i.useState)(e);return{form:t,changed:e=>{let{name:i,value:a}=e.target;l({...t,[i]:a})},setForm:l}}},87300:(e,t,l)=>{"use strict";l.r(t),l.d(t,{PedidosC:()=>$,default:()=>q});var i=l(95155),a=l(75436),o=l(86898),s=l(70152),n=l(78562),r=l(2295),d=l(22678),c=l(90507),u=l(97975),_=l(9561),x=l(73378),h=l(79987),f=l(62347),A=l(23613),p=l(75293),m=l(48803),C=l(21831),j=l(74205),O=l(12115),g=l(70689),E=l(11434),S=l(39241),I=l(8889);let D=(e,t,l)=>{let[i,a]=(0,O.useState)(0),[o,s]=(0,O.useState)(0);return(0,O.useEffect)(()=>{let i=0===l?e:t;if(Array.isArray(i)){let e=i.reduce((e,t)=>e+t.CPed*t.PRECIO,0),t=i.reduce((e,t)=>{let l=t.PRECIO*(1-t.PORC_DCTO/100)*(1+t.PORC_IMPUESTO/100);return e+t.CPed*l},0),l=Number(e).toFixed(0),o=Number(t).toFixed(0);a("".concat(parseFloat(l).toLocaleString())),s("".concat(parseFloat(o).toLocaleString()))}},[e,t,l]),{sumaSaldoTotal:i,sumaSaldoTotalDESC:o}};var b=l(6171),R=l.n(b),v=l(10142);l(92340);var T=l(89100);let P=e=>{{let t=document.createElement("canvas");return R()(t,e,{format:"CODE128"}),t.toDataURL("image/png")}},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},[i]=(0,O.useState)((0,T.GP)(new Date,"dd/MM/yyyy HH:mm:ss")),a=P(null==e?void 0:e.PEDIDO);return{generarPDF:()=>{let o=new v.default("portrait","pt","letter"),s=[{field:"ARTICULO",headerName:"CODIGO",width:200},{field:"DESCRIPCION",headerName:"REFERENCIA",width:500},{field:"PRECIO",headerName:"PRECIO",width:200},{field:"CPed",headerName:"CANT",width:200,type:"number"},{field:"DESP",headerName:"DESP",width:250,type:"number"},{field:"EMPA",headerName:"EMPA",width:200,type:"number"}],n=t.map(e=>{let t=[];return s.forEach(l=>{let i=e[l.field];"PRECIO"===l.field&&(i=parseFloat(Number(i).toFixed(0)).toLocaleString()),t.push(i)}),t});o.setFontSize(20),o.addImage("".concat(a),220,10,130,60),o.setFont("helvetica","italic"),o.setFontSize(13),o.text("PREFACTURA",12,30),"S"===e.IMPRESO&&o.text("DUPLICADO",12,55),o.setFontSize(13),o.text("FACTURA N\xb0________",450,30),o.setFontSize(9),o.text(" ".concat(e.FECHA_PEDIDO),500,65),o.setFontSize(13),o.text("FECHA",450,65),o.text("________________________________________________________________________________",12,70),o.setFontSize(9),o.text("CLIENTE:    ".concat(e.NOMBRE_RAZON),12,85),o.text("NIT/CEDULA:    ".concat(e.CLIENTE),12,98),o.text("DOC2:    ".concat(e.PEDIDO),340,98),o.text("PEORI:    ".concat(e.PEDIDO),450,98),o.text("CIUDAD PPAL:    ".concat(e.CIUDAD,"-").concat(e.DEPTO),12,112),o.text("TEL:    ".concat(e.PEDIDO),340,112),o.text("D'UNA:    ".concat(e.PEDIDO),450,112),o.text("DIRECCION Y CIDUAD DE DESPACHO:    ".concat(e.PEDIDO),12,125),o.text("SOLICITA:   ".concat(e.PEDIDO),340,125),o.autoTable({head:[s.map(e=>e.headerName)],body:n,styles:{theme:"plain",tableWidth:"auto",lineColor:[200,200,200],lineWight:.1,font:"times",fontStyle:"normal",textColor:[0,0,0],display:"flex",cellWidth:"auto",fontSize:8},startY:150,theme:"plain",columnStyles:{cellWidth:"auto"}}),o.setFontSize(10),o.text("TOTAL ITEMS: ".concat(t.length),350,o.autoTable.previous.finalY+20),o.text("Total: ".concat(l),470,o.autoTable.previous.finalY+20),o.text("SEPARADO POR_____________________________________",12,o.autoTable.previous.finalY+20),o.text("REVISADO POR______________________________________",12,o.autoTable.previous.finalY+40),o.text("DESPACHADO POR______________________",350,o.autoTable.previous.finalY+40),o.setFontSize(8),o.text("VENDEDOR: ".concat(e.VENDEDOR),12,o.autoTable.previous.finalY+65),o.text("MODIFICADO POR: ".concat(e.U_EDITADOPOR),350,o.autoTable.previous.finalY+65),o.text("AUTORIZADO EN CARTERA POR: ".concat(e.VENDEDOR),12,o.autoTable.previous.finalY+80),o.text("FECHA AUTORIZADO: ".concat(e.U_EDITADOPOR),350,o.autoTable.previous.finalY+80),o.text("___________________________________________________________________________________________________________________",12,o.autoTable.previous.finalY+90),o.text("".concat(i),12,o.autoTable.previous.finalY+103),o.output("dataurlnewwindow")}}};var w=l(65068),y=l(81996),L=l.n(y),U=l(95156),F=l(7495),z=l(42035),k=l(29056),M=l(52035),B=l(450),V=l(73440),W=l(79545),G=l(6748),Y=l(77097);let Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"90vh",maxWidth:"80vw",overflowY:"auto",overflowX:"hidden",padding:"16px",backgroundColor:"#fff",border:"2px solid #000",boxShadow:24};function H(e){let{children:t,value:l,index:o,...s}=e;return(0,i.jsx)("div",{role:"tabpanel",hidden:l!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o),...s,children:l===o&&(0,i.jsx)(a.default,{sx:{p:3},children:t})})}function J(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}H.propTypes={children:L().node,index:L().number.isRequired,value:L().number.isRequired};let $=()=>{let e=(0,O.useRef)(),{form:t,changed:l}=(0,E.m)({}),{pedido:b,setPedido:R}=(0,g.A)(),[v,T]=(0,O.useState)([]),[P,y]=(0,O.useState)([]),[L,$]=(0,O.useState)([]),[q,X]=(0,O.useState)(b[0]),[Q,K]=(0,O.useState)([]),[ee,et]=(0,O.useState)({}),[el,ei]=(0,O.useState)([]),[ea,eo]=(0,O.useState)({}),[es,en]=(0,O.useState)([]),er=(0,o.A)("(max-width: 600px)"),[ed,ec]=(0,O.useState)(!1),[eu,e_]=(0,O.useState)(!1),[ex,eh]=(0,O.useState)(!1),[ef,eA]=(0,O.useState)(0),ep=0===ef?L:es,{sumaSaldoTotal:em,sumaSaldoTotalDESC:eC}=D(L,es,ef),{generarPDF:ej}=N(q,ep,eC),eO=()=>ec(!1);(0,O.useEffect)(()=>{eg(),eE(),eS()},[]);let eg=async()=>{try{let e=await fetch(I.c.url+"/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();t&&(y(t),ei(t))}catch(e){console.log("error")}},eE=async()=>{try{let e=await fetch(I.c.url+"/pedidos/detalle_lineas/".concat(q.PEDIDO),{method:"GET",headers:{"Content-Type":"application"}}),t=await e.json();t&&$(t)}catch(e){console.log("error")}},eS=async()=>{try{let e=await fetch(I.c.url+"/pedidos/articulos_pendientes/".concat(q.PEDIDO),{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();t&&en(t)}catch(e){console.log("error")}},eI=async e=>{e.preventDefault();let l={...q,ARTICULOS:L,OBSERVACIONES:t.OBSERVACIONES};try{let e=await fetch(I.c.url+"/pedido/crear/",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});e.ok?e_(!0):(console.error("Error al enviar la solicitud:",e.statusText),eh(!0))}catch(e){console.error("Error de red:",e),eh(!0)}},eD=async()=>{let e={...q,ARTICULOS:es};try{let t=await fetch(I.c.url+"/pedido/crear/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});t.ok||console.error("Error al enviar la solicitud:",t.statusText)}catch(e){console.log("error"),console.error("Error de red:",e)}},eb=e=>{y(el.filter(t=>{let l=t.ARTICULO&&t.ARTICULO.toString().toLowerCase(),i=t.DESCRIPCION&&t.DESCRIPCION.toString().toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==i?void 0:i.includes(e.toLowerCase()))?t:null}).filter(e=>null!==e))},eR=(e,t)=>{e.reason===p.q.rowFocusOut&&(t.defaultMuiPrevented=!0)},ev=e=>()=>{et({...ee,[e]:{mode:m.V_.Edit}})},eT=e=>()=>{et({...ee,[e]:{mode:m.V_.View}})},eP=e=>()=>{$(L.filter(t=>t.ARTICULO!==e))},eN=e=>()=>{et({...ee,[e]:{mode:m.V_.View,ignoreModifications:!0}}),L.find(t=>t.ARTICULO===e).isNew&&$(L.filter(t=>t.ARTICULO!==e))},ew=e=>{let t=L.findIndex(t=>t.ARTICULO===e.ARTICULO);if(-1===t)return console.error("ARTICULO NO ENCONTRADO"),e;let l={...e,isNew:!1},i=[...L];return i[t]=l,$(i),l},ey=e=>{et(e)},eL=[{field:"ARTICULO",headerName:"CODIGO",width:100},{field:"DESCRIPCION",headerName:"Referencia",width:500},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))},editable:!0,type:"number"},{field:"CPed",headerName:"Cant",width:80,type:"number",editable:!0},{field:"PORC_DCTO",headerName:"D1",width:70,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))},editable:!0,type:"number"},{field:"DISP",headerName:"Disp",width:70,cellClassName:e=>0===e.value?"red-text":""},{field:"PORC_IMPUESTO",headerName:"IVA",width:40},{field:"Em",headerName:"Emp",width:80},{field:"EXIST_REAL",headerName:"Existreal",width:90},{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:e=>{var t;let{id:l}=e;return(null===(t=ee[l])||void 0===t?void 0:t.mode)===m.V_.Edit?[(0,i.jsx)(C.Z,{icon:(0,i.jsx)(G.A,{}),label:"Save",sx:{color:"primary.main"},onClick:eT(l)}),(0,i.jsx)(C.Z,{icon:(0,i.jsx)(M.A,{}),label:"Cancel",className:"textPrimary",onClick:eN(l),color:"inherit"})]:[(0,i.jsx)(C.Z,{icon:(0,i.jsx)(W.A,{}),label:"Edit",className:"textPrimary",onClick:ev(l),color:"inherit"}),(0,i.jsx)(C.Z,{icon:(0,i.jsx)(B.A,{}),label:"Delete",onClick:eP(l),color:"inherit"})]}}],eU=(e,t)=>{eo({...ea,[e]:t})},eF=[{field:"ARTICULO",headerName:"CODIGO",width:100},{field:"DESCRIPCION",headerName:"REFERENCIA",width:500,editable:!0},{field:"SUBLINEA",headerName:"SUBLINEA",width:300},{field:"PRECIO",headerName:"PRECIO",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))},editable:!0},{field:"CANTIDAD",headerName:"CANT",width:80,type:"number",editable:!0,renderCell:e=>(0,i.jsx)(s.A,{sx:{width:"70px"},variant:"outlined",size:"small",value:ea[e.id]||"",onChange:t=>eU(e.id,t.target.value)})},{field:"PORC_IMPUESTO",headerName:"IVA",width:40},{field:"PRECIOMASIVA",headerName:"MASIVA",width:130,valueFormatter:e=>{let t=parseFloat(e).toFixed(0);return"$".concat(parseFloat(t).toLocaleString("es-CO"))},editable:!0},{field:"PORC_DCTO",headerName:"D1",width:40},{field:"TOTAL_DISP",headerName:"DISP",width:70},{field:"UNIDAD_EMPAQUE",headerName:"EMP",width:80},{field:"EXIST_REAL",headerName:"EXISTREAL",width:90}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.default,{children:[" "," "," ",(0,i.jsx)(w.A,{})," "," "]}),(0,i.jsxs)(a.default,{sx:{padding:"20px"},children:[(0,i.jsx)(n.A,{elevation:3,sx:{padding:1,marginBottom:1},children:(0,i.jsxs)(S.A,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(S.A,{size:{xs:12,sm:8,md:6},children:(0,i.jsx)("h2",{style:{margin:0},children:(0,i.jsx)("strong",{children:"PEDIDOS"})})}),(0,i.jsxs)(S.A,{size:{xs:12,sm:8,md:6},children:[(null==q?void 0:q.AUTORIZADONOM)==="APROBADO"?(0,i.jsxs)(r.default,{variant:"filled",sx:{bgcolor:"#fa4f4f"},onClick:ej,children:[" ",(0,i.jsx)(V.A,{})," "]}):(0,i.jsxs)(r.default,{variant:"filled",sx:{margin:1,bgcolor:"#fff64"},disabled:!0,children:[" ",(0,i.jsx)(V.A,{})," "]}),(0,i.jsxs)(r.default,{variant:"filled",sx:{margin:1,bgcolor:"#fff694"},onClick:()=>{let e="SI"===b.U_COMPESPECIAL?null:"SI",t={...q,U_COMPESPECIAL:e};R(t),X(t)},children:[" ",(0,i.jsx)(Y.A,{})," "]}),(0,i.jsx)(r.default,{variant:"filled",sx:{margin:1,bgcolor:"#b6ff91"},onClick:()=>ec(!0),children:"MG"}),(0,i.jsxs)(r.default,{variant:"filled",sx:{margin:1,bgcolor:"#f145af"},children:[" ",(0,i.jsx)(F.A,{})," "]}),(0,i.jsxs)(r.default,{variant:"filled",sx:{margin:1,bgcolor:"#eabafe"},onClick:eI,children:[" ",(0,i.jsx)(k.A,{})," "]}),(0,i.jsx)(r.default,{variant:"filled",sx:{margin:1,bgcolor:"#84D8F4"},onClick:eD,children:(0,i.jsx)(z.A,{})}),(0,i.jsxs)(r.default,{variant:"filled",sx:{bgcolor:"#ffa28a"},onClick:()=>{window.history.back(),localStorage.removeItem("pedidoTemp")},children:[" ",(0,i.jsx)(U.A,{})," "]})]})]})}),(0,i.jsx)(a.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",p:2,zoom:.8},children:(0,i.jsx)(n.A,{sx:{width:{xs:"90%",sm:"70%",md:"50%",lg:"40%"}},children:(0,i.jsxs)(S.A,{container:!0,spacing:2,children:[(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsx)(c.A,{children:"Estado"}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.ESTADO)||"",label:"Estado"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsxs)(c.A,{children:[" ","Authorizacion"," "]}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.AUTORIZADONOM)||"",label:"Authorizacion"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsxs)(c.A,{children:[" ","Impreso"," "]}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.IMPRESO)||"",label:"Impreso"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsx)(c.A,{children:"Nro"}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.PEDIDO)||"",label:"Nro"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsxs)(c.A,{children:[" ","Cliente"," "]}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.CLIENTE)||"",label:"Cliente"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:9},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsx)(c.A,{}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.NOMBRE_RAZON)||""})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsx)(c.A,{children:"Fecha"}),(0,i.jsx)(u.A,{label:"Fecha"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsxs)(c.A,{children:[" ","Direccion de Envio"," "]}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.DEPTO)||"",label:"Direccion Envio"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsx)(c.A,{}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.CIUDAD)||""})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:3},children:(0,i.jsxs)(d.A,{fullWidth:!0,children:[(0,i.jsx)(c.A,{children:"Vend"}),(0,i.jsx)(u.A,{value:(null==q?void 0:q.VENDEDOR)||"",label:"Vend"})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:1},children:(0,i.jsxs)(n.A,{children:[(0,i.jsxs)(_.default,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[" ","Especial"," "]}),(0,i.jsxs)(_.default,{sx:{fontSize:20,padding:.5,color:"red"},variant:"body2",color:"text.primary",children:[" ",(null==q?void 0:q.U_COMPESPECIAL)||""," "]})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:6},children:(0,i.jsxs)(d.A,{sx:{margin:.5,display:"flex"},children:[(0,i.jsxs)(c.A,{htmlFor:"component-disabled",children:[" ","Nota Factura (Doc2)"," "]}),(0,i.jsx)(u.A,{label:"Nota Factura (Doc2)",id:"OBSERVACIONES",name:"OBSERVACIONES",autoComplete:"OBSERVACIONES",autoFocus:!0,value:t.OBSERVACIONES||"",onChange:l})]})}),(0,i.jsx)(S.A,{size:{xs:12,sm:5},children:(0,i.jsxs)(d.A,{sx:{margin:.5,display:"flex"},children:[(0,i.jsx)(c.A,{htmlFor:"component-disabled"}),(0,i.jsx)(s.A,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:1,defaultValue:(null==q?void 0:q.OBSERVACIONES)||""})]})})]})})}),(0,i.jsx)(S.A,{size:{xs:12},children:(0,i.jsxs)(n.A,{sx:{width:"100%"},children:[(0,i.jsxs)(x.A,{value:ef,onChange:(e,t)=>{eA(t)},"aria-label":"basic tabs example",children:[(0,i.jsx)(h.A,{label:"Detalles Lineas",...J(0)}),(0,i.jsx)(h.A,{label:"Articulos Pendientes",...J(1)})]}),(0,i.jsx)(H,{value:ef,index:0,children:(0,i.jsx)(a.default,{sx:{height:"auto",width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#275126":"#e1e1e1"}}},children:(0,i.jsx)(a.default,{sx:{height:"auto",width:"100%"},children:(0,i.jsx)(j.z,{density:"compact",rows:L,columns:eL,getRowId:e=>e.ARTICULO,editMode:"row",onRowModesModelChange:ey,onRowEditStop:eR,processRowUpdate:ew,slotProps:{toolbar:{setProductosP:$,setRowModesModel:et}},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10]})})})}),(0,i.jsx)(H,{value:ef,index:1,children:(0,i.jsx)(a.default,{sx:{height:"auto",width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#275126":"#e1e1e1"}}},children:(0,i.jsx)(a.default,{sx:{height:"auto",width:"100%"},children:(0,i.jsx)(j.z,{density:"compact",rows:es,columns:eL,getRowId:e=>e.ARTICULO,onRowSelectionModelChange:ey,onRowEditStop:eR,processRowUpdate:ew,slotProps:{toolbar:{setProductosP:$,setRowModesModel:et}},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}},pageSizeOptions:[10]})})})})]})})]}),(0,i.jsx)(n.A,{elevation:3,sx:{padding:3,margin:3,marginTop:3},children:(0,i.jsx)(a.default,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,i.jsxs)(f.A,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,i.jsxs)(r.default,{sx:{flexDirection:"column"},children:[(0,i.jsxs)(_.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ","$",em," "]}),(0,i.jsxs)("strong",{children:[" ","SUB-TOTAL"," "]})]}),(0,i.jsxs)(r.default,{sx:{flexDirection:"column"},children:[(0,i.jsxs)(_.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ","$",eC," "]}),(0,i.jsxs)("strong",{children:[" ","TOTAL"," "]})]})]})})}),(0,i.jsxs)(a.default,{sx:{flexDirection:"row",display:"flex",justifyContent:"flex-end"},children:[(0,i.jsxs)("strong",{children:[" ","Editado por:"," "]}),(0,i.jsxs)(_.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ",(null==q?void 0:q.createdBy)||""," "]})]}),(0,i.jsx)(A.A,{open:ed,onClose:eO,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsx)(a.default,{sx:Z,children:(0,i.jsxs)(a.default,{sx:{padding:2,display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(a.default,{sx:{display:"flex",flexDirection:er?"column":"row",justifyContent:"space-between",alignItems:"center",gap:2},children:[(0,i.jsx)("h2",{children:(0,i.jsx)("strong",{children:"PRODUCTOS"})}),(0,i.jsxs)(a.default,{display:"flex",gap:1,children:[(0,i.jsx)(r.default,{variant:"contained",color:"success",onClick:()=>{let e=Q.map(e=>{let t=P.find(t=>t.ARTICULO===e);return t&&ea[e]?{...t,CANTIDAD:ea[e]}:null}).filter(Boolean);$(t=>{let l=[...t];return e.forEach(e=>{let t=l.find(t=>t.ARTICULO===e.ARTICULO);t?t.CANTIDAD+=e.CANTIDAD:l.push(e)}),l}),K([]),eo({}),eO()},children:"Agregar"}),(0,i.jsx)(r.default,{variant:"contained",color:"error",onClick:eO,children:"Cerrar"})]})]}),(0,i.jsx)(a.default,{sx:{display:"flex",flexDirection:er?"column":"row",gap:2,alignItems:"center"},children:(0,i.jsx)(s.A,{id:"outlined-basic",placeholder:"Buscar Producto",value:v,onChange:e=>{e.preventDefault(),T(e.target.value),eb(e.target.value)},inputRef:e,sx:{width:"100%"}})}),(0,i.jsx)(a.default,{sx:{width:"100%",height:480},children:(0,i.jsx)(j.z,{density:"compact",rows:P,columns:eF,getRowId:e=>e.ARTICULO,pageSize:10,rowSelectionModel:Q,processRowUpdate:ew,onRowSelectionModelChange:e=>{K(e)},sx:{"& .MuiDataGrid-columnHeaderTitle":{fontWeight:"bold"}}})})]})})})]})},q=$},8889:(e,t,l)=>{"use strict";l.d(t,{c:()=>i});let i={url:"http://172.20.20.3:8001"}},70689:(e,t,l)=>{"use strict";l.d(t,{A:()=>d,AuthProvider:()=>r});var i=l(95155),a=l(12115),o=l(76046),s=l(89208);let n=(0,a.createContext)({login:e=>{},logout:()=>{}}),r=e=>{let{children:t}=e,l=(0,o.useRouter)(),[r]=(0,a.useState)(!0),[d,c]=(0,a.useState)(null),[u,_]=(0,a.useState)({}),[x,h]=(0,a.useState)({}),[f,A]=(0,a.useState)({}),p=(0,a.useCallback)(function(e){s.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),c(e)},[]),m=(0,a.useCallback)(function(){l.push("/"),s.A.remove("authTokens"),localStorage.removeItem("auth"),c(null)},[]);(0,a.useEffect)(()=>{let e=localStorage.getItem("auth")||s.A.get("authTokens"),t=localStorage.getItem("pedido"),l=localStorage.getItem("caja"),i=localStorage.getItem("cliente");i&&_(JSON.parse(i)),t&&h(JSON.parse(t)),l&&A(JSON.parse(l)),e&&c(JSON.parse(e))},[]);let C=(0,a.useMemo)(()=>({auth:d,cliente:u,setCliente:_,pedido:x,setPedido:h,caja:f,setCaja:A,loading:r,login:p,logout:m}),[d,u,x,f,p,m]);return(0,i.jsx)(n.Provider,{value:C,children:t})},d=()=>(0,a.useContext)(n)}},e=>{var t=t=>e(e.s=t);e.O(0,[339,8320,3930,6058,5854,994,5975,1260,6403,152,8173,2670,7493,6675,4205,6899,914,1229,8256,136,8441,1517,7358],()=>t(21678)),_N_E=e.O()}]);