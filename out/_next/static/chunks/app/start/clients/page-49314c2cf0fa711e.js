(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1532],{20067:function(){},72061:function(){},58795:function(e,t,a){Promise.resolve().then(a.bind(a,42476))},10416:function(e,t,a){"use strict";var l=a(57437),n=a(27800),r=a(2265),i=a(60091);t.Z=e=>{let{datos:t}=e,[a,o]=(0,r.useState)(!1);return(0,l.jsx)(i.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}o(!0);try{let e=n.P6.book_new(),a=n.P6.json_to_sheet(t);n.P6.book_append_sheet(e,a,"Datos"),n.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{o(!1)}},disabled:a,children:a?"Loading...":"Excel"})}},42476:function(e,t,a){"use strict";a.r(t);var l=a(57437),n=a(2265),r=a(52610),i=a(31193),o=a(60091),s=a(83719),c=a(15656),d=a(28027),u=a(74275),h=a(77699),f=a(60335),x=a(99128),g=a(85800),E=a(16463),p=a(87138),N=a(13726),m=a(10416),w=a(41223);let C=[{field:"CLIENTE",headerName:"NIT",width:170},{field:"NOMBREALIAS",headerName:"NOMBRE",width:800},{field:"DIRECCION",headerName:"DIRECCI\xd3N",width:300},{field:"TELEFONO1",headerName:"TELEFONO",width:190},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:450},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],j=async()=>{let e=await fetch("http://172.20.20.3:8001/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}});return await e.json()};t.default=()=>{let e=(0,E.useRouter)(),{setCliente:t}=(0,g.a)(),[a,S]=(0,n.useState)([]),[O,I]=(0,n.useState)([]),[L,v]=(0,n.useState)([]),[y,D]=(0,n.useState)(!1),[b,R]=(0,n.useState)(!0),[T,_]=(0,n.useState)([]);(0,n.useEffect)(()=>{A()},[]);let A=async()=>{let e=await j();try{e&&(R(!1),v(e),S(e)),setTimeout(()=>{D(!0)},100)}catch(e){(0,w.conexion)(),console.log("Error")}},k=e=>{v(a.filter(t=>{let a=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),l=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),n=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==a?void 0:a.includes(e.toLowerCase()))||(null==l?void 0:l.includes(e.toLowerCase()))||(null==n?void 0:n.includes(e.toLowerCase()))?t:null}))},M=(0,n.useCallback)(l=>{if(_(l),l.length>0){let n=a.filter(e=>{let t=e.CLIENTE;return!!t&&t.toString().includes(l[0])});localStorage.setItem("clientTemp",JSON.stringify(n)),t(n),e.push("/start/clients/clientesTemp")}},[L]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{marginBottom:"40px",children:(0,l.jsx)(N.Z,{})}),!0===b?(0,l.jsx)(i.default,{sx:{width:"100%"},children:(0,l.jsx)(x.Z,{})}):(0,l.jsxs)(i.default,{children:[(0,l.jsx)(s.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000"},children:"CLIENTES"}),(0,l.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,l.jsxs)(i.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,l.jsx)(p.default,{href:"",children:(0,l.jsx)(o.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"})}),(0,l.jsx)(m.Z,{datos:L})]}),(0,l.jsxs)(d.Z,{sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,l.jsx)(u.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:O,onChange:e=>{e.preventDefault(),I(e.target.value),k(e.target.value)}}),(0,l.jsx)(f.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,l.jsx)(h.Z,{})})]})]}),(0,l.jsx)(c.Z,{in:y,children:(0,l.jsx)(i.default,{sx:{height:900,width:"100%",backgroundColor:"#d80606"},children:(0,l.jsx)(r._,{rows:L,columns:C,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,15],onRowSelectionModelChange:M,rowSelectionModel:T,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"}})})})]})]})}}},function(e){e.O(0,[1425,9461,4797,4129,6291,4275,3983,2561,6981,2610,9105,7734,8433,3378,1223,2971,7023,1744],function(){return e(e.s=58795)}),_N_E=e.O()}]);