(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9973],{8919:function(e,t,r){Promise.resolve().then(r.bind(r,46182))},24134:function(e,t,r){"use strict";r.d(t,{d:function(){return d}});var n=r(2265),a=r(7740),o=r(45590),i=r(70021),s=r(92384),l=r(57437);function u(e){return e.substring(2).toLowerCase()}function d(e){let{children:t,disableReactTree:r=!1,mouseEvent:d="onClick",onClickAway:c,touchEvent:p="onTouchEnd"}=e,m=n.useRef(!1),h=n.useRef(null),f=n.useRef(!1),v=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);let x=(0,a.default)((0,s.Z)(t),h),g=(0,o.default)(e=>{let t=v.current;v.current=!1;let n=(0,i.Z)(h.current);if(f.current&&h.current&&(!("clientX"in e)||!(n.documentElement.clientWidth<e.clientX)&&!(n.documentElement.clientHeight<e.clientY))){if(m.current){m.current=!1;return}(e.composedPath?e.composedPath().indexOf(h.current)>-1:!n.documentElement.contains(e.target)||h.current.contains(e.target))||!r&&t||c(e)}}),b=e=>r=>{v.current=!0;let n=t.props[e];n&&n(r)},C={ref:x};return!1!==p&&(C[p]=b(p)),n.useEffect(()=>{if(!1!==p){let e=u(p),t=(0,i.Z)(h.current),r=()=>{m.current=!0};return t.addEventListener(e,g),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,g),t.removeEventListener("touchmove",r)}}},[g,p]),!1!==d&&(C[d]=b(d)),n.useEffect(()=>{if(!1!==d){let e=u(d),t=(0,i.Z)(h.current);return t.addEventListener(e,g),()=>{t.removeEventListener(e,g)}}},[g,d]),(0,l.jsx)(n.Fragment,{children:n.cloneElement(t,C)})}},48801:function(e,t,r){"use strict";var n=r(55357),a=r(12272),o=r(48024),i=r(69281);let s=(0,n.Z)({createStyledComponent:(0,o.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,a.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,i.default)({props:e,name:"MuiContainer"})});t.default=s},60335:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(2265),a=r(44839),o=r(76990),i=r(6031),s=r(48024),l=r(339),u=r(95885),d=r(60781),c=r(12272),p=r(72296),m=r(70587);function h(e){return(0,m.ZP)("MuiIconButton",e)}let f=(0,p.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var v=r(57437);let x=e=>{let{classes:t,disabled:r,color:n,edge:a,size:i}=e,s={root:["root",r&&"disabled","default"!==n&&"color".concat((0,c.Z)(n)),a&&"edge".concat((0,c.Z)(a)),"size".concat((0,c.Z)(i))]};return(0,o.Z)(s,h,t)},g=(0,s.default)(d.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t["color".concat((0,c.Z)(r.color))],r.edge&&t["edge".concat((0,c.Z)(r.edge))],t["size".concat((0,c.Z)(r.size))]]}})((0,l.Z)(e=>{let{theme:t}=e;return{textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]}}),(0,l.Z)(e=>{let{theme:t}=e;return{variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{let[r]=e;return{props:{color:r},style:{color:(t.vars||t).palette[r].main}}}),...Object.entries(t.palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{let[r]=e;return{props:{color:r,disableRipple:!1},style:{"&:hover":{backgroundColor:t.vars?"rgba(".concat((t.vars||t).palette[r].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)((t.vars||t).palette[r].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],["&.".concat(f.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}}));var b=n.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:o,className:i,color:s="default",disabled:l=!1,disableFocusRipple:d=!1,disableRipple:c=!1,size:p="medium",...m}=r,h={...r,edge:n,color:s,disabled:l,disableFocusRipple:d,disableRipple:c,size:p},f=x(h);return(0,v.jsx)(g,{className:(0,a.Z)(f.root,i),centerRipple:!0,focusRipple:!d,disabled:l,disableRipple:c,ref:t,...m,ownerState:h,children:o})})},69056:function(e,t,r){"use strict";r(2265);var n=r(59018),a=r(57437);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},55357:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(2265),a=r(44839),o=r(70587),i=r(76990),s=r(97434),l=r(13820),u=r(49134),d=r(7173),c=r(57437);let p=(0,d.Z)(),m=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),h=e=>(0,l.default)({props:e,name:"MuiContainer",defaultTheme:p}),f=(e,t)=>{let{classes:r,fixed:n,disableGutters:a,maxWidth:l}=e,u={root:["root",l&&`maxWidth${(0,s.Z)(String(l))}`,n&&"fixed",a&&"disableGutters"]};return(0,i.Z)(u,e=>(0,o.ZP)(t,e),r)};function v(e={}){let{createStyledComponent:t=m,useThemeProps:r=h,componentName:o="MuiContainer"}=e,i=t(({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:`${n}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}));return n.forwardRef(function(e,t){let n=r(e),{className:s,component:l="div",disableGutters:u=!1,fixed:d=!1,maxWidth:p="lg",classes:m,...h}=n,v={...n,component:l,disableGutters:u,fixed:d,maxWidth:p},x=f(v,o);return(0,c.jsx)(i,{as:l,ownerState:v,className:(0,a.Z)(x.root,s),ref:t,...h})})}},49134:function(e,t,r){"use strict";let n=(0,r(52902).ZP)();t.Z=n},46182:function(e,t,r){"use strict";r.r(t);var n=r(57437),a=r(48801),o=r(20124),i=r(25774),s=r(27270),l=r(31193),u=r(83719),d=r(58433),c=r(23983),p=r(60091),m=r(2265);let h=async e=>(await fetch("http://172.20.20.3:8001/usuarios/nuevo",{method:"POST",body:JSON.stringify({form:e}),headers:{"Content-Type":"application/json"}})).json();t.default=()=>{let[e,t]=(0,m.useState)({}),[r,f]=(0,m.useState)(!1),[v,x]=(0,m.useState)(!1),g=r=>{t({...e,[r.target.name]:r.target.value})},b=async t=>{if(t.preventDefault(),!e.PER_Nom||!e.IdDiv){x(!0);return}let r=await h(e);r.ok?(f(!0),console.log("Salida exitosa"),window.location.reload()):(x(!0),console.error("Error al enviar la solicitud: ",r.statusText))},C=e=>{"clickaway"!==e&&(f(!1),x(!1))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.default,{component:"main",maxWidth:"xs",children:[(0,n.jsx)(o.default,{}),r?(0,n.jsx)(i.Z,{open:r,autoHideDuration:2e3,onClose:C,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,n.jsx)(s.Z,{onClose:C,severity:"success",sx:{width:"100%"},children:"Registro Exitoso"})}):"",v?(0,n.jsx)(i.Z,{open:v,autoHideDuration:2e3,onClose:C,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,n.jsx)(s.Z,{onClose:C,severity:"error",sx:{width:"100%"},children:"Registro denegado"})}):"",(0,n.jsxs)(l.default,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2},children:[(0,n.jsx)(u.default,{component:"h1",variant:"h5",children:"Registro de usuario"}),(0,n.jsxs)(l.default,{component:"form",noValidate:!0,onSubmit:b,sx:{mt:3},children:[(0,n.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(c.Z,{autoComplete:"given-name",name:"PER_Nom",required:!0,fullWidth:!0,id:"PER_Nom",label:"Nombre",autoFocus:!0,value:e.PER_Nom||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Usuario",label:"Usuario",name:"PER_Usuario",autoComplete:"family-name",value:e.PER_Usuario||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,children:(0,n.jsx)(c.Z,{required:!0,fullWidth:!0,id:"Clave",label:"Clave",type:"password",name:"PER_Clave",autoComplete:"email",value:e.PER_Clave||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(c.Z,{required:!0,fullWidth:!0,name:"IdDiv",label:"IdDiv",type:"number",id:"IdDiv",autoComplete:"new-password",value:e.IdDiv||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsx)(c.Z,{fullWidth:!0,id:"PERAUTOPED",label:"PERAUTOPED",type:"number",name:"PERAUTOPED",autoComplete:"email",value:e.PERAUTOPED||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,n.jsx)(c.Z,{fullWidth:!0,id:"CODVEND",label:"CODVEND",name:"CODVEND",autoComplete:"email",value:e.CODVEND||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,n.jsx)(c.Z,{fullWidth:!0,id:"PREFIJO",label:"PREFIJO",name:"PREFIJO",autoComplete:"email",value:e.PREFIJO||"",onChange:g})}),(0,n.jsx)(d.ZP,{item:!0,xs:12,sm:4,children:(0,n.jsx)(c.Z,{fullWidth:!0,id:"CONSECUTIVOPED",label:"CONSECUTIVOPED",type:"number",name:"CONSECUTIVOPED",autoComplete:"email",value:e.CONSECUTIVOPED||"",onChange:g})})]}),(0,n.jsx)(p.default,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"registrar"})]})]})]})})}}},function(e){e.O(0,[4797,4129,6291,4275,3983,7734,8433,2971,7023,1744],function(){return e(e.s=8919)}),_N_E=e.O()}]);