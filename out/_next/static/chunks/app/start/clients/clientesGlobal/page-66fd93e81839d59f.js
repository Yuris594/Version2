(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2883],{66765:(e,t,a)=>{Promise.resolve().then(a.bind(a,58896))},78205:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(12983),l=a(95155);let s=(0,r.A)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},58896:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var r=a(95155),l=a(12115),s=a(78205),o=a(894),i=a(6403),n=a(70689),u=a(74205),h=a(78562),d=a(8889),c=a(75436);let p=[{field:"CLIENTE",headerName:"NIT",width:130,headerClassName:"super-app-theme--header"},{field:"NOMBREALIAS",headerName:"NOMBRE",width:600,headerClassName:"super-app-theme--header"},{field:"DIRECCION",headerName:"DIRECCION",width:300,headerClassName:"super-app-theme--header"},{field:"TELEFONO1",headerName:"TELEFONO",width:190,headerClassName:"super-app-theme--header"},{field:"NOMVENDEDOR",headerName:"VENDEDOR",width:200,headerClassName:"super-app-theme--header"},{field:"SALDO",headerName:"CARTERA",type:"number",width:120,headerClassName:"super-app-theme--header",valueFormatter:e=>{let t=Number(e).toFixed(0);return"".concat(parseFloat(t).toLocaleString())},align:"right"}],g=async()=>{try{let e=await fetch(d.c.url+"/clientes/listar",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Network response was not ok");return await e.json()}catch(e){return console.error("Error fetching clients:",e),[]}},N=e=>{let{setOpen:t}=e,{setCliente:a}=(0,n.A)(),[d,N]=(0,l.useState)(""),[f,m]=(0,l.useState)([]),[C,S]=(0,l.useState)([]),[E,w]=(0,l.useState)([]);(0,l.useEffect)(()=>{(async()=>{let e=await g();e&&e.length>0?(w(e),S(e)):console.log("No se encontraron clientes")})()},[]);let x=e=>{w(C.filter(t=>{let a=t.CLIENTE&&t.CLIENTE.toString().toLowerCase(),r=t.NOMVENDEDOR&&t.NOMVENDEDOR.toString().toLowerCase(),l=t.NOMBREALIAS&&t.NOMBREALIAS.toLowerCase();return(null==a?void 0:a.includes(e.toLowerCase()))||(null==r?void 0:r.includes(e.toLowerCase()))||(null==l?void 0:l.includes(e.toLowerCase()))}))},O=(0,l.useCallback)(e=>{if(m(e),e.length>0){let r=C.filter(t=>{let a=t.CLIENTE;return a&&a.toString().includes(e[0])});localStorage.setItem("clientTemp",JSON.stringify(r)),a(r[0]),t(!1)}},[C]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{height:"auto",width:"100%",backgroundColor:"#ffffff"},children:[(0,r.jsxs)(c.default,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",margin:1},children:[(0,r.jsx)("h2",{children:(0,r.jsx)("strong",{children:"CLIENTES"})}),(0,r.jsxs)(h.A,{elevation:3,sx:{p:"2px 4px",display:"flex",alignItems:"flex-right",width:600,margin:"0%"},children:[(0,r.jsx)(i.Ay,{sx:{ml:1,flex:1},placeholder:"Buscar",inputProps:{"aria-label":"search google maps"},autoComplete:"usuario",autoFocus:!0,value:d,onChange:e=>{e.preventDefault(),N(e.target.value),x(e.target.value)}}),(0,r.jsx)(o.A,{title:"buscar",type:"button",sx:{p:"10px"},"aria-label":"search",children:(0,r.jsx)(s.A,{})})]})]}),(0,r.jsx)(c.default,{sx:{height:640,width:"100%","& .super-app-theme--header":{backgroundColor:"#00796b",color:"#000000"}},children:(0,r.jsx)(u.z,{rows:E,columns:p,pageSizeOptions:[5,10],onRowSelectionModelChange:O,rowSelectionModel:f,getRowId:e=>e.CLIENTE,sx:{backgroundColor:"#ffffff"},initialState:{pagination:{paginationModel:{page:0,pageSize:10}}}})})]})})}},8889:(e,t,a)=>{"use strict";a.d(t,{c:()=>r});let r={url:"http://172.20.20.3:8001"}},70689:(e,t,a)=>{"use strict";a.d(t,{A:()=>u,AuthProvider:()=>n});var r=a(95155),l=a(12115),s=a(76046),o=a(89208);let i=(0,l.createContext)({login:e=>{},logout:()=>{}}),n=e=>{let{children:t}=e,a=(0,s.useRouter)(),[n]=(0,l.useState)(!0),[u,h]=(0,l.useState)(null),[d,c]=(0,l.useState)({}),[p,g]=(0,l.useState)({}),[N,f]=(0,l.useState)({}),m=(0,l.useCallback)(function(e){o.A.set("authTokens",JSON.stringify(e)),localStorage.setItem("auth",JSON.stringify(e)),h(e)},[]),C=(0,l.useCallback)(function(){a.push("/"),o.A.remove("authTokens"),localStorage.removeItem("auth"),h(null)},[]);(0,l.useEffect)(()=>{let e=localStorage.getItem("auth")||o.A.get("authTokens"),t=localStorage.getItem("pedido"),a=localStorage.getItem("caja"),r=localStorage.getItem("cliente");r&&c(JSON.parse(r)),t&&g(JSON.parse(t)),a&&f(JSON.parse(a)),e&&h(JSON.parse(e))},[]);let S=(0,l.useMemo)(()=>({auth:u,cliente:d,setCliente:c,pedido:p,setPedido:g,caja:N,setCaja:f,loading:n,login:m,logout:C}),[u,d,p,N,m,C]);return(0,r.jsx)(i.Provider,{value:S,children:t})},u=()=>(0,l.useContext)(i)}},e=>{var t=t=>e(e.s=t);e.O(0,[9754,1083,1260,6403,152,2670,4205,8441,1517,7358],()=>t(66765)),_N_E=e.O()}]);