(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3274],{81502:(e,t,a)=>{Promise.resolve().then(a.bind(a,82925))},82925:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var l=a(95155),o=a(75436),i=a(78562),n=a(9561),s=a(2241),r=a(2295),c=a(894),d=a(6403),x=a(64665),_=a(42479),u=a(72251),m=a(78205),p=a(71118),f=a(70689),g=a(48173),h=a.n(g),j=a(41517),b=a.n(j),S=a(89100),C=a(12115),y=a(10142);a(92340);let I=function(e,t,a){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},[o,i]=(0,C.useState)(null),n=(0,S.GP)(new Date,"dd/MM/yyyy HH:mm:ss");return{generarPDF:()=>{let o=new y.default,i=[{field:"DESCRIPCION",headerName:"DESCRIPCI\xd3N",width:500},{field:"PRECIO",headerName:"PRECIO",width:200}],s=e.filter(e=>e.DESCRIPCION&&e.PRECIO).map(e=>i.map(t=>{let a=e[t.field];return"PRECIO"===t.field&&(a=parseFloat(Number(a).toFixed(0)).toLocaleString()),a}));o.setFontSize(10),o.setFont("times","italic"),o.text("Miguel Gomez & Cia",10,10),o.text("Tel: 777777",10,15),o.text("Email: miguelgomoz&cia@hotmail.com",10,20),o.text("Website: https://www.miguelgomez.com.co",10,25),o.text("-----------------------------------------------------------------------------------------------------------------------------------------------------------------",10,30),o.setFontSize(8),o.setFont("times","italic"),o.text("Servicio: ".concat(a.PER_Nom||"Desconocido"),160,20),o.autoTable({head:[i.map(e=>e.headerName)],body:s,styles:{theme:"plain",tableWidth:"auto",lineColor:[200,200,200],lineWight:.1,font:"times",fontStyle:"normal",textColor:[0,0,0],display:"flex",cellWidth:"auto",fontSize:8},startY:40,theme:"plain",columnStyles:{cellWidth:"auto"}}),function(){if(o.setFontSize(10),o.text("TOTAL: $".concat(l.total),12,o.autoTable.previous.finalY+20),t.length>0){let e=Object.entries(t[0]).map(e=>{let[t,a]=e;return"".concat(t,": ").concat(a)}).join(", ");o.text("M\xc9TODO DE PAGO: ".concat(e),12,o.autoTable.previous.finalY+30)}else o.text("M\xc9TODO DE PAGO: No especificado",12,o.autoTable.previous.finalY+45);o.text("CAMBIO: $".concat(l.cambio),12,o.autoTable.previous.finalY+40),o.setFontSize(8),o.text("______________________________________________________________________________________________________________________",12,o.autoTable.previous.finalY+55),o.text("".concat(n),12,o.autoTable.previous.finalY+65)}(),o.output("dataurlnewwindow")},pdfDataUrl:o}},v=(0,l.jsx)(o.default,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"}),w=()=>{let{caja:e,auth:t}=(0,f.A)(),a=e?Object.values(e):[],g=e&&e.tipoPago?Object.values(e.tipoPago):[],{generarPDF:j}=I(a,g,t,e);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"0px 4px 12px rgba(0,0,0,0.1)"},children:(0,l.jsxs)(i.A,{className:"container",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",overflow:"auto"},children:[(0,l.jsxs)(n.default,{variant:"body1",textAlign:"center",margin:"20px 0",sx:{fontSize:50,marginBottom:"15px"},color:"#00796b",gutterBottom:!0,children:["Valor a Cancelar: $ ",e.total]}),(0,l.jsx)(s.A,{sx:{fonSize:30},orientation:"horizontal"}),(0,l.jsxs)(o.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,l.jsxs)(o.default,{sx:{with:"50%",margin:5},children:[(0,l.jsx)("h3",{style:{fontSize:40,margin:0,marginBottom:6,padding:0},children:"\xbfComo le gustaria recibir su recibo?"}),(0,l.jsx)(r.default,{variant:"outlined",color:"primary",sx:{width:550,marginBottom:5,backgroundColor:"#00796b",color:"#fff"},onClick:j,children:"Imprimir Recibo"}),(0,l.jsxs)(i.A,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:550,height:100},children:[(0,l.jsx)(c.A,{sx:{p:"10px"},"aria-label":"menu",children:(0,l.jsx)(p.A,{})}),(0,l.jsx)(d.Ay,{sx:{ml:1,flex:1},inputProps:{"aria-label":"search google maps"}}),(0,l.jsx)(c.A,{type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(m.A,{})}),(0,l.jsx)(s.A,{sx:{height:28,m:.5},orientation:"vertical"}),(0,l.jsx)(c.A,{color:"primary",sx:{p:"10px"},"aria-label":"directions",children:(0,l.jsx)(u.A,{})})]})]}),(0,l.jsx)(o.default,{sx:{width:"50%",bord:20},children:(0,l.jsxs)(x.A,{sx:{width:"100%",height:"100%"},children:[(0,l.jsx)(_.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",paddingBotton:0},children:(0,l.jsxs)(n.default,{className:b().className,sx:{fontSize:17,flexDirection:"column"},color:"text.secondary",gutterBottom:!0,children:["...........Miguel G\xf3mez & Cia.................",(0,l.jsx)("br",{}),"...................Tel:777777.................",(0,l.jsx)("br",{}),"........Miguelgomoz&cia@hotmail.com...........",(0,l.jsx)("br",{}),"........https://www.miguelgomez.com.co/.......",(0,l.jsx)("br",{}),"----------------------------------------------",(0,l.jsx)("br",{}),"........ Servicio -  ......."]})}),(0,l.jsx)(_.A,{children:a.map((e,t)=>(0,l.jsxs)(n.default,{component:"div",sx:{display:"flex",justifyContent:"space-between",paddingTop:0},children:[(0,l.jsx)("span",{children:e.DESCRIPCION}),(0,l.jsx)("span",{children:e.PRECIO})]},t))}),(0,l.jsx)(_.A,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between",paddingTop:0},children:(0,l.jsxs)("h3",{children:["-------------------------",(0,l.jsx)("br",{}),"Total ",v," ",e.total]})}),(0,l.jsx)(_.A,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between",paddingTop:0},children:g.map((e,t)=>(0,l.jsx)(n.default,{component:"div",sx:{display:"flex",flexDirection:"column"},children:Object.entries(e).map((e,t)=>{let[a,o]=e;return 0!==o?(0,l.jsxs)("span",{children:[" ",a,": ",o.toString()]},t):null})},t))}),(0,l.jsx)(_.A,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between",paddingTop:0},children:(0,l.jsxs)("h3",{children:["-------------------------",(0,l.jsx)("br",{}),"Cambio ",v," ",e.cambio]})})]})})]}),(0,l.jsx)(o.default,{sx:{width:"100%",padding:0,margin:0,paddingTop:12},children:(0,l.jsx)(r.default,{component:h(),href:"../../pedidos/pedidosCaja",variant:"outlined",sx:{width:"100%",height:300,padding:0,margin:0,backgroundColor:"#00796b",color:"white"},onClick:()=>{localStorage.removeItem("pago"),localStorage.removeItem("pedidoTempG"),localStorage.removeItem("clientTemp"),localStorage.removeItem("pedidoTemp")},children:"Nuevo Pedido"})})]})})})}},70689:(e,t,a)=>{"use strict";a.d(t,{A:()=>c,AuthProvider:()=>r});var l=a(95155),o=a(12115),i=a(76046),n=a(89208);let s=(0,o.createContext)({login:e=>{},logout:()=>{}}),r=e=>{let{children:t}=e,a=(0,i.useRouter)(),[r]=(0,o.useState)(!0),[c,d]=(0,o.useState)({}),[x,_]=(0,o.useState)(null),[u,m]=(0,o.useState)({}),[p,f]=(0,o.useState)({}),[g,h]=(0,o.useState)({}),[j,b]=(0,o.useState)({}),[S,C]=(0,o.useState)({}),y=(0,o.useCallback)(function(e){n.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),_(e)},[]),I=(0,o.useCallback)(function(){n.A.remove("authTokens"),localStorage.removeItem("auth"),_(null),a.push("/")},[]);(0,o.useEffect)(()=>{let e=localStorage.getItem("auth"),t=localStorage.getItem("caja"),a=localStorage.getItem("pedido"),l=localStorage.getItem("pedidoV"),o=localStorage.getItem("cartera"),i=localStorage.getItem("cliente"),n=localStorage.getItem("clienteV");n&&h(JSON.parse(n)),l&&b(JSON.parse(l)),o&&C(JSON.parse(o)),e&&_(JSON.parse(e)),i&&f(JSON.parse(i)),a&&m(JSON.parse(a)),t&&d(JSON.parse(t))},[]);let v=(0,o.useMemo)(()=>({auth:x,cliente:p,setCliente:f,pedido:u,setPedido:m,caja:c,setCaja:d,clienteV:g,setClienteV:h,pedidosV:j,setPedidosV:b,carteraV:S,setCarteraV:C,loading:r,login:y,logout:I}),[x,p,u,c,g,j,S,y,I]);return(0,l.jsx)(s.Provider,{value:v,children:t})},c=()=>(0,o.useContext)(s)}},e=>{var t=t=>e(e.s=t);e.O(0,[4712,3930,6058,5854,994,6403,8173,1229,442,8441,1517,7358],()=>t(81502)),_N_E=e.O()}]);