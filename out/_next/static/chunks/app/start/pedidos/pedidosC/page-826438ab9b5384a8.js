(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3839],{41128:function(e,t,l){Promise.resolve().then(l.bind(l,22952))},13726:function(e,t,l){"use strict";l.d(t,{Z:function(){return L}});var a=l(57437),i=l(33579),o=l.n(i),n=l(20124),s=l(31193),r=l(71733),d=l(79806),c=l(60335),x=l(60091),u=l(83719),h=l(62501),m=l(6291),_=l(11656),p=l(66325),f=l(90922),g=l(26032),j=l(55693),b=l(42188),C=l(66299),S=l(40301),Z=l(78457),O=l(21704),E=l(66246),P=l(16463),I=l(85800),y=l(2265),D=l(32184),v=l(7547),w=l(57300),A=l(86917),N=l(47905),R=l(87138),T=e=>{let{page:t}=e;return(0,a.jsx)(s.default,{children:(0,a.jsx)(D.Z,{children:t.map(e=>(0,a.jsx)(v.ZP,{disablePadding:!0,children:(0,a.jsxs)(w.Z,{LinkComponent:R.default,href:e.url,onClick:e.onClick,children:[(0,a.jsx)(A.Z,{children:e.icon}),(0,a.jsx)(N.Z,{primaryTypographyProps:{fontSize:15,fontWeight:"medium",letterSpacing:0},children:e.title})]})},e.title))})})};let F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",alignItems:"center",justifyContext:"center",boxShadow:24,textAlign:"center",pt:2,px:4,pb:3};var L=()=>{let e=(0,P.useRouter)(),{auth:t,logout:l}=(0,I.a)(),[i,D]=(0,y.useState)(!1),[v,w]=(0,y.useState)(null),[A,N]=(0,y.useState)(!1),L=()=>{N(!1),w(null)},U=[{title:"USUARIOS ",url:"/components/usuarios",icon:(0,a.jsx)(p.Z,{})},{title:"PEDIDOS",url:"/components/pedidos",icon:(0,a.jsx)(f.Z,{})},{title:"CLIENTES",url:"/components/clientes",icon:(0,a.jsx)(g.Z,{})},{title:"PRODUCTOS",icon:(0,a.jsx)(j.Z,{}),onClick:e=>{N(!0),w(e.currentTarget)}},{title:"FACTURAS",url:"/start/facturas",icon:(0,a.jsx)(b.Z,{})},{title:"CAJA",url:"/start/pedidos/pedidosCaja",icon:(0,a.jsx)(C.Z,{})}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{}),(0,a.jsxs)(s.default,{sx:{flexGrow:1},children:[(0,a.jsx)(r.Z,{position:"static",sx:{bgcolor:"#262626",width:"auto"},children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(c.Z,{color:"inherit",onClick:e=>{w(e.currentTarget)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(S.Z,{})}),(0,a.jsx)(s.default,{sx:{display:{xs:"none",md:"flex"}},children:U.map(e=>(0,a.jsx)(x.default,{sx:{fontSize:"15px"},color:"inherit",size:"large",LinkComponent:R.default,href:e.url,onClick:e.onClick,children:e.title},e.title))}),(0,a.jsx)(u.default,{variant:"h6",sx:{flexGrow:1}}),(0,a.jsx)(x.default,{component:R.default,href:"/start",color:"inherit",children:(0,a.jsx)(E.Z,{})}),(0,a.jsxs)(x.default,{className:o().className,color:"inherit",sx:{fontSize:"15px"},children:[(0,a.jsx)(O.Z,{}),t&&t.PER_Nom]}),(0,a.jsx)(x.default,{color:"inherit",onClick:()=>D(!0),children:(0,a.jsx)(Z.Z,{})})]})}),(0,a.jsx)(h.Z,{open:i,onClose:()=>D(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(s.default,{sx:F,children:[(0,a.jsx)(u.default,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\xbfEstas seguro que quiere salir?"}),(0,a.jsx)(s.default,{children:(0,a.jsx)(x.default,{sx:{bgcolor:"red"},variant:"contained",onClick:()=>{l(),e.push("/")},children:"SALIR"})})]})}),(0,a.jsxs)(m.Z,{id:"basic-menu",anchorEl:v,open:A,onClose:L,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,a.jsx)(_.Z,{onClick:L,component:R.default,href:"/start/productos",children:"Productos Por Bodega"}),(0,a.jsx)(_.Z,{onClick:L,component:R.default,href:"/start/productosMG",children:"Productos-MG"})]}),(0,a.jsx)(m.Z,{id:"basic-menu",anchorEl:v,MenuListProps:{"aria-labelledby":"basic-button"},open:!!v,onClose:()=>{w(null)},sx:{display:{xs:"flex",md:"none"}},children:(0,a.jsx)(T,{page:U})})]})]})}},51840:function(e,t,l){"use strict";var a=l(2265);t.Z=(e,t,l)=>{let[i,o]=(0,a.useState)(0),[n,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let a=0===l?e:t;if(!Array.isArray(a)){console.error("PRDCTO no es un array valido",a);return}if(0===a.length){o(0),s(0);return}console.log("ProductosP",e),console.log("ProductosConDISPO",t);let i=a.reduce((e,t)=>e+t.CPed*t.PRECIO,0),n=a.reduce((e,t)=>{let l=t.PRECIO*(1-t.PORC_DCTO/100)*(1+t.PORC_IMPUESTO/100);return e+t.CPed*l},0),r=Number(i).toFixed(0),d=Number(n).toFixed(0);o("".concat(parseFloat(r).toLocaleString())),s("".concat(parseFloat(d).toLocaleString()))},[e,t,l]),{sumaSaldoTotal:i,sumaSaldoTotalDESC:n}}},42716:function(e,t,l){"use strict";l.d(t,{c:function(){return i}});var a=l(2265);let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,l]=(0,a.useState)(e);return{form:t,changed:e=>{let{name:a,value:i}=e.target;l({...t,[a]:i})},setForm:l}}},22952:function(e,t,l){"use strict";l.r(t),l.d(t,{PedidosC:function(){return eo},default:function(){return en}});var a=l(57437),i=l(73423),o=l(19337),n=l(87070),s=l(93062),r=l(39988),d=l(71661),c=l(34517),x=l(89266),u=l(92522),h=l(62436),m=l(59626),_=l(31193),p=l(83719),f=l(28027),g=l(60091),j=l(74275),b=l(60335),C=l(58433),S=l(28549),Z=l(56065),O=l(55677),E=l(23983),P=l(92355),I=l(97183),y=l(15656),D=l(62501),v=l(26460),w=l(25774),A=l(56988),N=l(78056),R=l(42637),T=l(68265),F=l(85800),L=l(42716),U=l(2265),k=l(51840),M=l(24506);l(28364);var V=l(97501);l(27824);var z=l(76235);let B=e=>{};var G=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},[a]=(0,U.useState)(null),[i]=(0,U.useState)((0,z.WU)(new Date,"dd/MM/yyyy HH:mm:ss")),o=B();return{generarPDF:()=>{let a=new V.default("portrait","pt","letter"),n=[{field:"ARTICULO",headerName:"Codigo",width:200},{field:"DESCRIPCION",headerName:"Referencia",width:500},{field:"PRECIO",headerName:"Precio",width:200,valueFormatter:e=>{let t=Number(e.value).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"CPed",headerName:"Cant",width:200,type:"number"},{field:"DESP",headerName:"Desp",width:250,type:"number"},{field:"EMPA",headerName:"EMPA",width:200,type:"number"}],s=t.map(e=>{let t=[];return n.forEach(l=>{t.push(e[l.field])}),t});a.setFontSize(20),a.addImage("".concat(o),220,10,130,60),a.setFontSize(13),a.text("PREFACTURA",12,30),"S"===e.IMPRESO&&a.text("DUPLICADO",12,55),a.setFontSize(13),a.text("FACTURA N\xb0________",450,30),a.setFontSize(9),a.text(" ".concat(e.FECHA_PEDIDO),500,65),a.setFontSize(13),a.text("FECHA",450,65),a.text("________________________________________________________________________________",12,70),a.setFontSize(9),a.text("CLIENTE:    ".concat(e.NOMBRE_RAZON),12,85),a.text("NIT/CEDULA:    ".concat(e.CLIENTE),12,98),a.text("DOC2:    ".concat(e.PEDIDO),200,98),a.text("PEORI:    ".concat(e.PEDIDO),350,98),a.text("CIUDAD PPAL:    ".concat(e.CIUDAD,"-").concat(e.DEPTO),12,112),a.text("TEL:    ".concat(e.PEDIDO),340,112),a.text("D'UNA:    ".concat(e.PEDIDO),450,112),a.text("DIRECCION Y CIDUAD DE DESPACHO:    ".concat(e.PEDIDO),12,125),a.text("SOLICITA:   ".concat(e.PEDIDO),12,139),a.autoTable({head:[n.map(e=>e.headerName)],body:s,styles:{theme:"grid",tableWidth:"auto",lineColor:[200,200,200],lineWight:.1,font:"helvetica",fontStyle:"normal",textColor:[0,0,0],display:"flex",cellWidth:"auto",fontSize:8,tableLineColor:[200,200,200]},startY:148,theme:"plain"}),a.setFontSize(11),a.text("TOTAL ITEMS: ".concat(t.length),350,a.autoTable.previous.finalY+20),a.text("Total: ".concat(l),470,a.autoTable.previous.finalY+20),a.text("SEPARADO POR_____________________________________",12,a.autoTable.previous.finalY+20),a.text("REVISADO POR______________________________________",12,a.autoTable.previous.finalY+40),a.text("DESPACHADO POR______________________",350,a.autoTable.previous.finalY+40),a.setFontSize(9),a.text("VENDEDOR: ".concat(e.VENDEDOR),12,a.autoTable.previous.finalY+65),a.text("MODIFICADO POR: ".concat(e.U_EDITADOPOR),350,a.autoTable.previous.finalY+65),a.text("AUTORIZADO EN CARTERA POR:: ".concat(e.VENDEDOR),12,a.autoTable.previous.finalY+80),a.text("FECHA AUTORIZADO: ".concat(e.U_EDITADOPOR),350,a.autoTable.previous.finalY+80),a.text("___________________________________________________________________________________________________________________",12,a.autoTable.previous.finalY+90),a.text("".concat(i),12,a.autoTable.previous.finalY+103),a.output("dataurlnewwindow")},pdfDataUrl:a}},J=l(13726),Y=l(27270),H=l(41448),W=l.n(H);let q=U.forwardRef(function(e,t){return(0,a.jsx)(Y.Z,{elevation:6,ref:t,variant:"filled",...e})});function X(e){let{children:t,value:l,index:i,...o}=e;return(0,a.jsx)("div",{role:"tabpanel",hidden:l!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i),...o,children:l===i&&(0,a.jsx)(_.default,{sx:{p:3},children:t})})}function Q(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}X.propTypes={children:W().node,index:W().number.isRequired,value:W().number.isRequired};let K=[{field:"DESCRIPCION",headerName:"Referencia",width:500,editable:!0},{field:"SUBLINEA",headerName:"Sublinea",width:300},{field:"TOTAL_DISP",headerName:"Disp",width:70},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right",editable:!0},{field:"CANTIDAD",headerName:"Cant",width:80,type:"number",editable:!0},{field:"PORC_IMPUESTO",headerName:"IVA",width:40},{field:"PRECIOMASIVA",headerName:"Masiva",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"},{field:"PORC_DCTO",headerName:"D1",width:40},{field:"UNIDAD_EMPAQUE",headerName:"Emp",width:80},{field:"EXIST_REAL",headerName:"Existreal",width:90}],$={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"white",width:"90%",height:"80%",boxShadow:24,p:4},ee=async()=>{let e=await fetch("/api/productos/listar_solo_para_mg",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()},et=async e=>{let t=await fetch("/api/pedidos/detalle_lineas/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return await t.json()},el=async e=>{let t=await fetch("/api/pedidos/articulos_pendientes/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});return await t.json()},ea=async e=>{let t=await fetch("/api/pedido/crear/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return await t.json()},ei=async e=>{let t=await fetch("/api/pedido/crear/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await t.json()},eo=()=>{let{form:e,changed:t}=(0,L.c)({}),[l,V]=(0,U.useState)(0),[z,B]=(0,U.useState)(!1),{pedido:Y,setPedido:H}=(0,F.a)(),[W,eo]=(0,U.useState)(!1),[en,es]=(0,U.useState)(!1),[er,ed]=(0,U.useState)(!1),[ec,ex]=(0,U.useState)(""),[eu,eh]=(0,U.useState)(!1),[em,e_]=(0,U.useState)([]),[ep,ef]=(0,U.useState)([]),[eg,ej]=(0,U.useState)(Y[0]),[eb,eC]=(0,U.useState)([]),[eS,eZ]=(0,U.useState)([]),[eO,eE]=(0,U.useState)({}),[eP,eI]=(0,U.useState)([]),ey=0===l?ep:eP,{sumaSaldoTotal:eD,sumaSaldoTotalDESC:ev}=(0,k.Z)(ep,eP,l),{generarPDF:ew}=G(eg,ey,ev,ep);(0,U.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("pedidoTemp"));e&&H(e[0]),eg&&(eA(),eN(eg.PEDIDO),eR(eg.PEDIDO)),setTimeout(()=>{eh(!0)},100)},[eg,H]);let eA=async()=>{let e=await ee();try{e&&(e_(e),eZ(e))}catch(e){console.log("Error al obtener los datos",e)}},eN=async e=>{let t=await et(e);try{t&&ef(t)}catch(e){console.log("Error al obtener los datosP",e)}},eR=async e=>{let t=await el(e);try{t&&eI(t)}catch(e){console.log("Error al obtener los datoscon",e)}},eT=async t=>{t.preventDefault();let l={...eg,ARTICULOS:ep,OBSERVACIONES:e.OBSERVACIONES},a=await ea(l);try{a?(console.log("Crear"),es(!0)):(ed(!0),console.error("Error de red: ",error))}catch(e){ed(!0),console.error("Error de red: ",e)}},eF=async()=>{let e={...eg,ARTICULOS:eP},t=await ei(e);try{t?es(!0):console.error("Error de reed: ",error)}catch(e){ed(!0),console.error("Error de reed: ",e)}},eL=e=>{e.preventDefault(),ex(e.target.value),eU(e.target.value)},eU=e=>{e_(eS.filter(t=>{let l=t.ARTICULO&&t.ARTICULO.toString().toLowerCase(),a=t.DESCRIPCION&&t.DESCRIPCION.toString().toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))?t:null}).filter(e=>null!==e))},ek={};eb.forEach((e,t)=>{let l=em.find(t=>t.ARTICULO===e);ek[t]=l}),(0,U.useEffect)(()=>{{let e={...JSON.parse(localStorage.getItem("pedidoTempG"))||{},...ek};localStorage.setItem("pedidoTempG",JSON.stringify(e))}},[ek]);let eM=()=>{let e=Object.values(JSON.parse(localStorage.getItem("pedidoTempG"))||{});if(ep.some(t=>t.ARTICULO===e[0].ARTICULO))ef([...ep]),eC([]),localStorage.removeItem("pedidoTempG"),alert("ya tienes este producto en el pedido");else{let t=[...ep,...e],a=[...eP,...e];0===l&&ef(t),1===l&&eI(a),B(!1),eC([]),localStorage.removeItem("pedidoTempG")}},eV=(e,t)=>{e.reason===A.U.rowFocusOut&&(t.defaultMuiPrevented=!0)},ez=e=>()=>{eE({...eO,[e]:{mode:N.se.Edit}})},eB=e=>()=>{eE({...eO,[e]:{mode:N.se.View}})},eG=e=>()=>{ef(ep.filter(t=>t.ARTICULO!==e))},eJ=e=>()=>{eE({...eO,[e]:{mode:N.se.View,ignoreModifications:!0}}),ep.find(t=>t.ARTICULO===e).isNew&&ef(ep.filter(t=>t.ARTICULO!==e))},eY=e=>{let t={...e,isNew:!1};return ef(ep.map(l=>l.ARTICULO===e.ARTICULO?t:l)),t},eH=e=>{eE(e)},eW=[{field:"DESCRIPCION",headerName:"Referencia",width:500},{field:"DISP",headerName:"Disp",width:70},{field:"PRECIO",headerName:"Precio",width:130,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"CPed",headerName:"Cant",width:80,type:"number",editable:!0},{field:"PORC_DCTO",headerName:"D1",width:70,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())}},{field:"PORC_IMPUESTO",headerName:"IVA",width:40},{field:"Em",headerName:"Emp",width:80},{field:"EXIST_REAL",headerName:"Existreal",width:90},{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:e=>{var t;let{id:l}=e;return(null===(t=eO[l])||void 0===t?void 0:t.mode)===N.se.Edit?[(0,a.jsx)(R.u,{icon:(0,a.jsx)(i.Z,{}),label:"Save",sx:{color:"primary.main"},onClick:eB(l)}),(0,a.jsx)(R.u,{icon:(0,a.jsx)(o.Z,{}),label:"Cancel",className:"textPrimary",onClick:eJ(l),color:"inherit"})]:[(0,a.jsx)(R.u,{icon:(0,a.jsx)(n.Z,{}),label:"Edit",className:"textPrimary",onClick:ez(l),color:"inherit"}),(0,a.jsx)(R.u,{icon:(0,a.jsx)(s.Z,{}),label:"Delete",className:"textPrimary",onClick:eG(l),color:"inherit"})]}}],eq=(e,t)=>{"clickaway"!==t&&(ed(!1),es(!1))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(_.default,{children:["  ",(0,a.jsx)(J.Z,{}),"  "]}),(0,a.jsx)(p.default,{variant:"h6",component:"h1",gutterBottom:!0,sx:{color:"#000000",textAlign:"center",marginTop:4,marginBottom:2},children:"PEDIDOS"}),(0,a.jsxs)(f.Z,{style:{width:"100%",p:2,boxShadow:3},children:[(0,a.jsxs)(_.default,{style:{width:"100%",mb:2},children:[(0,a.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:1,gap:2,boxShadow:2,backgroundColor:"#f5f5f5"},children:[(0,a.jsxs)(_.default,{sx:{display:"flex"},children:[(null==eg?void 0:eg.AUTORIZADONOM)?(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#fff694"},onClick:ew,children:[" ",(0,a.jsx)(r.Z,{})," "]}):(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#fff64"},disabled:!0,children:[" ",(0,a.jsx)(r.Z,{})," "]}),(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#eabafe"},onClick:eT,children:[" ",(0,a.jsx)(d.Z,{})," "]}),(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#aeefff"},onClick:()=>eo(!0),children:[" ",(0,a.jsx)(c.Z,{})," "]}),(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#fff694"},onClick:()=>{let e="SI"===Y.U_COMPESPECIAL?null:"SI",t={...eg,U_COMPESPECIAL:e};H(t),ej(t)},children:[" ",(0,a.jsx)(x.Z,{})," "]}),(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#ffa28a"},onClick:()=>{window.history.back(),localStorage.removeItem("pedidoTemp")},children:[" ",(0,a.jsx)(u.Z,{})," "]})]}),(0,a.jsxs)(f.Z,{elevation:3,sx:{display:"flex",alignItems:"center",p:"2px 4px",boxShadow:2,backgroundColor:"#fff",width:"100%"},children:[(0,a.jsx)(j.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:ec,onChange:eL}),(0,a.jsx)(b.Z,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(h.Z,{})})]})]}),(0,a.jsx)(_.default,{sx:{display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",zoom:.8,margin:1},children:(0,a.jsx)(f.Z,{sx:{width:"65%",height:"auto",padding:2},children:(0,a.jsxs)(C.ZP,{container:!0,spacing:1,children:[(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:3,md:3,lg:3,children:(0,a.jsxs)(S.Z,{sx:{margin:.5},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-",children:"Estado"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.ESTADO)||"",label:"Estado"})]})})," "," "," ",(0,a.jsx)("br",{}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:2,md:2,lg:2,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsxs)(Z.Z,{htmlFor:"component-disabled",children:[" "," "," Authorizacion "," "," "]}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.AUTORIZADONOM)||"",label:"Authorizacion"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:3,md:3,lg:3,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"",children:" "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:"",label:""})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:2,md:2,lg:2,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Impreso "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.IMPRESO)||"",label:"Impreso"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:2,md:2,lg:2,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:"Nro"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.PEDIDO)||"",label:"Nro"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:2,md:2,lg:2,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Cliente "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.CLIENTE)||"",label:"Cliente"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:8,md:8,lg:8,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.NOMBRE_RAZON)||""})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:2,md:2,lg:2,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:"Fecha"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.FECHA_PEDIDO)||"",label:"Fecha"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:5,md:5,lg:5,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Direccion envio "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.DEPTO)||"",label:"Direccion envio"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:5,md:5,lg:5,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.CIUDAD)||""})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:1,md:1,lg:1,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:"Vend"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:(null==eg?void 0:eg.VENDEDOR)||"",label:"Vend"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:1,md:1,lg:1,children:(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(p.default,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:" Especial "}),(0,a.jsxs)(p.default,{sx:{fontSize:20,padding:.5,color:"red"},variant:"body2",color:"text.primary",children:[" ",(null==eg?void 0:eg.U_COMPESPECIAL)||""," "]})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:6.3,md:6.3,lg:6.3,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Nota Factura (Doc2) "}),(0,a.jsx)(O.Z,{label:"Nota Factura (Doc2)",id:"OBSERVACIONES",name:"OBSERVACIONES",autoComplete:"OBSERVACIONES",autoFocus:!0,value:e.OBSERVACIONES||"",onChange:t})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:.9,md:.9,lg:.9,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Finac %/Dias "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:"Composed TextField",label:"Finac %/Dias"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:.9,md:.9,lg:.9,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:"D'UNA"}),(0,a.jsx)(O.Z,{defaultValue:"Composed TextField",label:"D'UNA"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:2,md:2,lg:2,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Ped.Origen "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:"Composed TextField",label:"Ped.Origen"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:1.9,md:1.9,lg:1.9,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:" Pendiente "}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:"Composed TextField",label:"Pendiente"})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:11,md:11,lg:11,children:(0,a.jsxs)(S.Z,{sx:{margin:.5},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled"}),(0,a.jsx)(E.Z,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:1,defaultValue:(null==eg?void 0:eg.OBSERVACIONES)||"",sx:{width:760}})]})}),(0,a.jsx)(C.ZP,{item:!0,xs:12,sm:1,md:1,lg:1,children:(0,a.jsxs)(S.Z,{sx:{margin:.5,display:"flex"},children:[(0,a.jsx)(Z.Z,{htmlFor:"component-disabled",children:"Plazo"}),(0,a.jsx)(O.Z,{id:"component-disabled",defaultValue:"Composed TextField",label:"Plazo"})]})})]})})}),(0,a.jsx)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#b6ff91"},onClick:()=>B(!0),children:(0,a.jsx)(m.Z,{})})]}),(0,a.jsxs)(f.Z,{sx:{width:"100%"},children:[(0,a.jsx)(_.default,{sx:{borderBottom:1,borderColor:"divider"},children:(0,a.jsxs)(P.Z,{value:l,onChange:(e,t)=>{V(t)},"aria-label":"basic tabs example",children:[(0,a.jsx)(I.Z,{label:"Detalles Lineas",...Q(0)}),(0,a.jsx)(I.Z,{label:"Articulos Pendiente",...Q(1)})]})}),(0,a.jsx)(X,{value:l,index:0,children:(0,a.jsx)(y.Z,{in:eu,children:(0,a.jsx)(_.default,{sx:{height:"auto",width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#275126":"#e1e1e1"}}},children:(0,a.jsx)(_.default,{sx:{height:350,width:"100%"},children:(0,a.jsx)(T._,{density:"compact",rows:ep,columns:eW,getRowId:e=>e.ARTICULO,editMode:"row",onRowModesModelChange:eH,onRowEditStop:eV,processRowUpdate:eY,slotProps:{toolbar:{setProductosP:ef,setRowModesModel:eE}},initialState:{pagination:{paginationModel:{page:0,pageSize:20}}},pageSizeOptions:[20,40]})})})})}),(0,a.jsx)(X,{value:l,index:1,children:(0,a.jsx)(y.Z,{in:eu,children:(0,a.jsxs)(_.default,{sx:{height:"auto",width:"100%","& .MuiDataGrid-cell--editable":{bgcolor:e=>"dark"===e.palette.mode?"#376331":"#f5f5f5","&:hover":{backgroundColor:e=>"dark"===e.palette.mode?"#275126":"#e1e1e1"}}},children:[(0,a.jsx)(_.default,{sx:{height:350,width:"100%"},children:(0,a.jsx)(T._,{rows:eP,columns:eW,getRowId:e=>e.ARTICULO,onRowSelectionModelChange:eH,onRowEditStop:eV,processRowUpdate:eY,slotProps:{toolbar:{setProductosP:ef,setRowModesModel:eE}},initialState:{pagination:{paginationModel:{page:0,pageSize:20}}},pageSizeOptions:[20,40]})}),(0,a.jsx)(_.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#84D8F4"},onClick:eF,children:(0,a.jsx)(m.Z,{})})})]})})})]})]}),(0,a.jsx)(D.Z,{open:W,onClose:()=>eo(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(_.default,{sx:$,children:[" ",(0,a.jsx)(M.default,{})," "]})}),(0,a.jsx)(D.Z,{open:z,onClose:eM,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",BackdropProps:{style:{pointerEvents:"none"}},children:(0,a.jsxs)(_.default,{sx:$,children:[(0,a.jsxs)(_.default,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:5,flexDirection:"row",width:"100%",gap:"70px"},children:[(0,a.jsxs)(_.default,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#b6ff91"},onClick:eM,children:" Agregar "}),(0,a.jsxs)(g.default,{variant:"filled",sx:{margin:"2px",bgcolor:"#ffa28a"},onClick:()=>{B(!1),eC([]),localStorage.removeItem("pedidoTempG")},children:[" ",(0,a.jsx)(u.Z,{})," "]})]}),(0,a.jsxs)(f.Z,{sx:{p:"2px 4px",display:"flex",alignItems:"center",width:500,margin:"0%"},children:[(0,a.jsx)(j.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:ec,onChange:eL}),(0,a.jsx)(b.Z,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(h.Z,{})})]})]}),(0,a.jsx)(_.default,{sx:{height:750,width:"100%"},children:(0,a.jsx)(T._,{rows:em,columns:K,getRowId:e=>e.ARTICULO,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[15,30],onRowSelectionModelChange:e=>{eC(e)},onSelectionModelChange:e=>eC(e),rowSelectionModel:eb})})]})}),(0,a.jsx)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:(0,a.jsxs)(v.Z,{variant:"text","aria-label":"text button group",sx:{height:60},children:[(0,a.jsxs)(g.default,{sx:{flexDirection:"column"},children:[(0,a.jsxs)(p.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ",eD," "]}),(0,a.jsx)(p.default,{variant:"body2",color:"text.primary",children:" Sub-Total "})]}),(0,a.jsxs)(g.default,{sx:{flexDirection:"column"},children:[(0,a.jsxs)(p.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ",ev," "]}),(0,a.jsx)(p.default,{variant:"body2",color:"text.primary",children:" Total-Pedido "})]})]})}),(0,a.jsxs)(_.default,{sx:{flexDirection:"row",display:"flex"},children:[(0,a.jsx)(p.default,{variant:"body2",color:"text.primary",children:" Editado por: "}),(0,a.jsxs)(p.default,{sx:{display:"flex",fontSize:14,paddingRight:5},gutterBottom:!0,children:[" ",(null==eg?void 0:eg.createdBy)||""," "]})]}),en?(0,a.jsx)(w.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:en,autoHideDuration:2e3,onClose:eq,children:(0,a.jsx)(q,{onClose:eq,severity:"success",sx:{width:"400px",height:"100px"},children:"Guardado exitosamente"})}):"",er?(0,a.jsx)(w.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:en,autoHideDuration:2e3,onClose:eq,children:(0,a.jsx)(q,{onClose:eq,severity:"error",sx:{width:"400px",height:"100px"},children:"No se pudo guardar"})}):""]})};var en=eo},85800:function(e,t,l){"use strict";l.d(t,{AuthProvider:function(){return s},a:function(){return r}});var a=l(57437),i=l(2265),o=l(44785);let n=(0,i.createContext)({login:e=>{},logout:()=>{}}),s=e=>{let{children:t}=e,[l,s]=(0,i.useState)(null),[r,d]=(0,i.useState)({}),[c,x]=(0,i.useState)({}),[u,h]=(0,i.useState)({}),[m]=(0,i.useState)(!0),_=(0,i.useCallback)(function(e){o.Z.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),s(e)},[]),p=(0,i.useCallback)(function(){o.Z.remove("authTokens"),localStorage.removeItem("auth"),s(null)},[]);(0,i.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("cliente"),l=localStorage.getItem("pedido"),a=localStorage.getItem("caja");e&&s(JSON.parse(e)),t&&d(JSON.parse(t)),l&&x(JSON.parse(l)),a&&h(JSON.parse(a))},[]);let f=(0,i.useMemo)(()=>({auth:l,cliente:r,setCliente:d,pedido:c,setPedido:x,caja:u,setCaja:h,loading:m,login:_,logout:p}),[l,r,c,u,_,p]);return(0,a.jsx)(n.Provider,{value:f,children:t})},r=()=>(0,i.useContext)(n)}},function(e){e.O(0,[4488,1425,2505,4797,4129,6291,2561,4275,3983,6981,9105,8265,7734,8433,9696,4936,3155,3449,9580,2971,7023,1744],function(){return e(e.s=41128)}),_N_E=e.O()}]);