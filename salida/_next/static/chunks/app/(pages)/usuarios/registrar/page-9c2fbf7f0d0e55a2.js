(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{56579:function(e,t,r){Promise.resolve().then(r.bind(r,73716))},24134:function(e,t,r){"use strict";r.d(t,{d:function(){return u}});var o=r(2265),n=r(7740),a=r(45590),i=r(70021),l=r(92384),s=r(57437);function c(e){return e.substring(2).toLowerCase()}function u(e){let{children:t,disableReactTree:r=!1,mouseEvent:u="onClick",onClickAway:d,touchEvent:m="onTouchEnd"}=e,p=o.useRef(!1),h=o.useRef(null),f=o.useRef(!1),v=o.useRef(!1);o.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);let g=(0,n.default)((0,l.Z)(t),h),x=(0,a.default)(e=>{let t=v.current;v.current=!1;let o=(0,i.Z)(h.current);if(f.current&&h.current&&(!("clientX"in e)||!(o.documentElement.clientWidth<e.clientX)&&!(o.documentElement.clientHeight<e.clientY))){if(p.current){p.current=!1;return}(e.composedPath?e.composedPath().indexOf(h.current)>-1:!o.documentElement.contains(e.target)||h.current.contains(e.target))||!r&&t||d(e)}}),b=e=>r=>{v.current=!0;let o=t.props[e];o&&o(r)},C={ref:g};return!1!==m&&(C[m]=b(m)),o.useEffect(()=>{if(!1!==m){let e=c(m),t=(0,i.Z)(h.current),r=()=>{p.current=!0};return t.addEventListener(e,x),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,x),t.removeEventListener("touchmove",r)}}},[x,m]),!1!==u&&(C[u]=b(u)),o.useEffect(()=>{if(!1!==u){let e=c(u),t=(0,i.Z)(h.current);return t.addEventListener(e,x),()=>{t.removeEventListener(e,x)}}},[x,u]),(0,s.jsx)(o.Fragment,{children:o.cloneElement(t,C)})}},48801:function(e,t,r){"use strict";var o=r(55357),n=r(12272),a=r(48024),i=r(69281);let l=(0,o.Z)({createStyledComponent:(0,a.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,n.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,i.default)({props:e,name:"MuiContainer"})});t.default=l},20124:function(e,t,r){"use strict";var o=r(2265),n=r(89211),a=r(95885),i=r(57437);let l="function"==typeof(0,n.zY)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),c=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),u=function(e){var t,r;let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};o&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var r,o;let[a,i]=t,l=e.getColorSchemeSelector(a);l.startsWith("@")?n[l]={":root":{colorScheme:null===(r=i.palette)||void 0===r?void 0:r.mode}}:n[l.replace(/\s*&/,"")]={colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}});let a={html:s(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...c(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},i=null===(r=e.components)||void 0===r?void 0:null===(t=r.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return i&&(a=[a,i]),a},d="mui-ecs",m=e=>{let t=u(e,!1),r=Array.isArray(t)?t[0]:t;return!e.vars&&r&&(r.html[":root:has(".concat(d,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var o,n;let[a,i]=t,l=e.getColorSchemeSelector(a);l.startsWith("@")?r[l]={[":root:not(:has(.".concat(d,"))")]:{colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}}:r[l.replace(/\s*&/,"")]={["&:not(:has(.".concat(d,"))")]:{colorScheme:null===(n=i.palette)||void 0===n?void 0:n.mode}}}),t},p=(0,n.zY)(l?e=>{let{theme:t,enableColorScheme:r}=e;return u(t,r)}:e=>{let{theme:t}=e;return m(t)});t.default=function(e){let{children:t,enableColorScheme:r=!1}=(0,a.i)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(o.Fragment,{children:[l&&(0,i.jsx)(p,{enableColorScheme:r}),!l&&!r&&(0,i.jsx)("span",{className:d,style:{display:"none"}}),t]})}},60335:function(e,t,r){"use strict";r.d(t,{default:function(){return b}});var o=r(2265),n=r(44839),a=r(76990),i=r(6031),l=r(48024),s=r(339),c=r(95885),u=r(60781),d=r(12272),m=r(72296),p=r(70587);function h(e){return(0,p.ZP)("MuiIconButton",e)}let f=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=r(57437);let g=e=>{let{classes:t,disabled:r,color:o,edge:n,size:i}=e,l={root:["root",r&&"disabled","default"!==o&&"color".concat((0,d.Z)(o)),n&&"edge".concat((0,d.Z)(n)),"size".concat((0,d.Z)(i))]};return(0,a.Z)(l,h,t)},x=(0,l.default)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t["color".concat((0,d.Z)(r.color))],r.edge&&t["edge".concat((0,d.Z)(r.edge))],t["size".concat((0,d.Z)(r.size))]]}})((0,s.Z)(e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}}),(0,s.Z)(e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{let[r]=e;return{props:{color:r},style:{color:(t.vars||t).palette[r].main}}}),...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{let[r]=e;return{props:{color:r,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat((t.vars||t).palette[r].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)((t.vars||t).palette[r].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],["&.".concat(f.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}}));var b=o.forwardRef(function(e,t){let r=(0,c.i)({props:e,name:"MuiIconButton"}),{edge:o=!1,children:a,className:i,color:l="default",disabled:s=!1,disableFocusRipple:u=!1,disableRipple:d=!1,size:m="medium",...p}=r,h={...r,edge:o,color:l,disabled:s,disableFocusRipple:u,disableRipple:d,size:m},f=g(h);return(0,v.jsx)(x,{className:(0,n.Z)(f.root,i),centerRipple:!0,focusRipple:!u,disabled:s,disableRipple:d,ref:t,...p,ownerState:h,children:a})})},69056:function(e,t,r){"use strict";r(2265);var o=r(59018),n=r(57437);t.Z=(0,o.Z)((0,n.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},55357:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var o=r(2265),n=r(44839),a=r(70587),i=r(76990),l=r(97434),s=r(13820),c=r(49134),u=r(7173),d=r(57437);let m=(0,u.Z)(),p=(0,c.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),h=e=>(0,s.default)({props:e,name:"MuiContainer",defaultTheme:m}),f=(e,t)=>{let{classes:r,fixed:o,disableGutters:n,maxWidth:s}=e,c={root:["root",s&&`maxWidth${(0,l.Z)(String(s))}`,o&&"fixed",n&&"disableGutters"]};return(0,i.Z)(c,e=>(0,a.ZP)(t,e),r)};function v(e={}){let{createStyledComponent:t=p,useThemeProps:r=h,componentName:a="MuiContainer"}=e,i=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return o.forwardRef(function(e,t){let o=r(e),{className:l,component:s="div",disableGutters:c=!1,fixed:u=!1,maxWidth:m="lg",classes:p,...h}=o,v={...o,component:s,disableGutters:c,fixed:u,maxWidth:m},g=f(v,a);return(0,d.jsx)(i,{as:s,ownerState:v,className:(0,n.Z)(g.root,l),ref:t,...h})})}},49134:function(e,t,r){"use strict";let o=(0,r(52902).ZP)();t.Z=o},73716:function(e,t,r){"use strict";r.r(t);var o=r(57437),n=r(85935),a=r(48801),i=r(20124),l=r(25774),s=r(27270),c=r(31193),u=r(83719),d=r(58433),m=r(23983),p=r(60091),h=r(2265);t.default=()=>{let[e,t]=(0,h.useState)({}),[r,f]=(0,h.useState)(!1),[v,g]=(0,h.useState)(!1),x=r=>{t({...e,[r.target.name]:r.target.value})},b=async t=>{if(t.preventDefault(),!e.PER_Nom||!e.IdDiv){g(!0);return}let r=await fetch(n.x.url+"/usuarios/nuevo",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});r.ok?(f(!0),console.log("Salida exitosa"),window.location.reload()):(g(!0),console.error("Error al enviar la solicitud: ",r.statusText))},C=e=>{"clickaway"!==e&&(f(!1),g(!1))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(a.default,{component:"main",maxWidth:"xs",children:[(0,o.jsx)(i.default,{}),r?(0,o.jsx)(l.Z,{open:r,autoHideDuration:2e3,onClose:C,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,o.jsx)(s.Z,{onClose:C,severity:"success",sx:{width:"100%"},children:"Registro Exitoso"})}):"",v?(0,o.jsx)(l.Z,{open:v,autoHideDuration:2e3,onClose:C,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,o.jsx)(s.Z,{onClose:C,severity:"error",sx:{width:"100%"},children:"Registro denegado"})}):"",(0,o.jsxs)(c.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,o.jsx)(u.default,{component:"h1",variant:"h5",children:"Registro de usuario"}),(0,o.jsxs)(c.default,{component:"form",noValidate:!0,onSubmit:b,sx:{mt:3},children:[(0,o.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsx)(m.Z,{autoComplete:"given-name",name:"PER_Nom",required:!0,fullWidth:!0,id:"PER_Nom",label:"Nombre",autoFocus:!0,value:e.PER_Nom||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsx)(m.Z,{required:!0,fullWidth:!0,id:"Usuario",label:"Usuario",name:"PER_Usuario",autoComplete:"family-name",value:e.PER_Usuario||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,children:(0,o.jsx)(m.Z,{required:!0,fullWidth:!0,id:"Clave",label:"Clave",type:"password",name:"PER_Clave",autoComplete:"email",value:e.PER_Clave||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsx)(m.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",autoComplete:"new-password",value:e.IdDiv||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsx)(m.Z,{fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",autoComplete:"email",value:e.PERAUTOPED||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,o.jsx)(m.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",autoComplete:"email",value:e.CODVEND||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,o.jsx)(m.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",autoComplete:"email",value:e.PREFIJO||"",onChange:x})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,o.jsx)(m.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",autoComplete:"email",value:e.CONSECUTIVOPED||"",onChange:x})})]}),(0,o.jsx)(p.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"registrar"})]})]})]})})}},85935:function(e,t,r){"use strict";r.d(t,{x:function(){return o}});let o={url:"http://172.20.20.3:8001/"}}},function(e){e.O(0,[4797,4129,6291,4275,3983,8249,8433,2971,7023,1744],function(){return e(e.s=56579)}),_N_E=e.O()}]);