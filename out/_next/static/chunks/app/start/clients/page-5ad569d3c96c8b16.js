(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1532],{20067:function(){},72061:function(){},58795:function(e,t,l){Promise.resolve().then(l.bind(l,42476))},10416:function(e,t,l){"use strict";var a=l(57437),n=l(27800),r=l(2265),i=l(60091);t.Z=e=>{let{datos:t}=e,[l,o]=(0,r.useState)(!1);return(0,a.jsx)(i.default,{variant:"outlined",color:"success",onClick:()=>{if(!Array.isArray(t)||0===t.length){console.error("Datos no est\xe1n en el formato correcto o est\xe1n vac\xedos.");return}o(!0);try{let e=n.P6.book_new(),l=n.P6.json_to_sheet(t);n.P6.book_append_sheet(e,l,"Datos"),n.NC(e,"datos.xlsx")}catch(e){console.error("Error al generar el archivo Excel",e)}finally{o(!1)}},disabled:l,children:l?"Loading...":"Excel"})}},42476:function(e,t,l){"use strict";l.r(t);var a=l(57437),n=l(2265),r=l(68265),i=l(22294),o=l(31193),s=l(60091),d=l(83719),c=l(28027),u=l(74275),h=l(77699),f=l(60335),x=l(85800),g=l(16463),E=l(87138),N=l(13726),p=l(10416);l(41223);let m=[{field:"CLIENTE",headerName:"NIT",width:170},{field:"NOMBREALIAS",headerName:"NOMBRE",width:800},{field:"DIRECCION",headerName:"DIRECCI\xd3N",width:300},{field:"TELEFONO1",headerName:"TELEFONO",width:190},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:450},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}];t.default=e=>{let{clientes:t}=e,l=(0,g.useRouter)(),{setCliente:C}=(0,x.a)(),[w,j]=(0,n.useState)([]),[O,I]=(0,n.useState)(!1),[L,S]=(0,n.useState)([]),v=e=>{setClientes(t.filter(t=>{let l=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),a=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),n=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==l?void 0:l.includes(e.toLowerCase()))||(null==a?void 0:a.includes(e.toLowerCase()))||(null==n?void 0:n.includes(e.toLowerCase()))?t:null}))},D=(0,n.useCallback)(e=>{if(S(e),e.length>0){let a=t.filter(t=>{let l=t.CLIENTE;return!!l&&l.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(a)),C(a),l.push("/start/clients/clientesTemp")}},[t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.default,{children:[" ",(0,a.jsx)(N.Z,{})," "]}),(0,a.jsx)(o.default,{className:"container",children:(0,a.jsxs)(o.default,{children:[(0,a.jsx)(d.default,{variant:"h5",component:"h1",gutterBottom:!0,sx:{display:"flex",justifyContent:"column",alignItems:"center",width:"auto",margin:0,color:"#000"},children:"CLIENTES"}),(0,a.jsxs)(o.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,a.jsxs)(o.default,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.jsx)(E.default,{href:"",children:(0,a.jsx)(s.default,{variant:"outlined",sx:{margin:"2px"},children:"Nuevo"})}),(0,a.jsx)(p.Z,{datos:t})]}),(0,a.jsxs)(c.Z,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-rigth",width:1100,margin:"10px"},children:[(0,a.jsx)(u.ZP,{sx:{ml:1,flex:1},placeholder:"Buscar...",inputProps:{"aria-label":"search google maps"},autoFocus:!0,value:w,onChange:e=>{e.preventDefault(),j(e.target.value),v(e.target.value)}}),(0,a.jsx)(f.Z,{title:"buscar",sx:{p:"10px"},"aria-label":"search",children:(0,a.jsx)(h.Z,{})})]})]}),(0,a.jsx)(o.default,{sx:{height:990,width:"100%"},children:(0,a.jsx)(r._,{rows:t,columns:m,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,15],onRowSelectionModelChange:D,rowSelectionModel:L,getRowId:e=>e.CLIENTE,slots:{toolbar:i.n},sx:{backgroundColor:"#ffffff"}})})]})})]})}}},function(e){e.O(0,[4488,1425,9461,4797,4129,6291,2561,4275,3983,6981,9105,8265,7734,8433,7283,3378,1223,2971,7023,1744],function(){return e(e.s=58795)}),_N_E=e.O()}]);