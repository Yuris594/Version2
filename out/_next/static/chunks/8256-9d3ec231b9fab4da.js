"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8256],{79545:(t,o,e)=>{e.d(o,{A:()=>a});var r=e(12983),n=e(95155);let a=(0,r.A)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},6748:(t,o,e)=>{e.d(o,{A:()=>a});var r=e(12983),n=e(95155);let a=(0,r.A)((0,n.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},62347:(t,o,e)=>{e.d(o,{A:()=>x});var r=e(12115),n=e(43463),a=e(7123),i=e(17280),l=e(37410),d=e(89142),c=e(98330),u=e(31628),s=e(12567),p=e(81045),g=e(37157);function m(t){return(0,g.Ay)("MuiButtonGroup",t)}let B=(0,p.A)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","horizontal","vertical","colorPrimary","colorSecondary","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var b=e(96532),v=e(3388),h=e(95155);let f=t=>{let{classes:o,color:e,disabled:r,disableElevation:n,fullWidth:i,orientation:d,variant:c}=t,u={root:["root",c,d,i&&"fullWidth",n&&"disableElevation","color".concat((0,l.A)(e))],grouped:["grouped","grouped".concat((0,l.A)(d)),"grouped".concat((0,l.A)(c)),"grouped".concat((0,l.A)(c)).concat((0,l.A)(d)),"grouped".concat((0,l.A)(c)).concat((0,l.A)(e)),r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,a.A)(u,m,o)},A=(0,d.default)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,o)=>{let{ownerState:e}=t;return[{["& .".concat(B.grouped)]:o.grouped},{["& .".concat(B.grouped)]:o["grouped".concat((0,l.A)(e.orientation))]},{["& .".concat(B.grouped)]:o["grouped".concat((0,l.A)(e.variant))]},{["& .".concat(B.grouped)]:o["grouped".concat((0,l.A)(e.variant)).concat((0,l.A)(e.orientation))]},{["& .".concat(B.grouped)]:o["grouped".concat((0,l.A)(e.variant)).concat((0,l.A)(e.color))]},{["& .".concat(B.firstButton)]:o.firstButton},{["& .".concat(B.lastButton)]:o.lastButton},{["& .".concat(B.middleButton)]:o.middleButton},o.root,o[e.variant],!0===e.disableElevation&&o.disableElevation,e.fullWidth&&o.fullWidth,"vertical"===e.orientation&&o.vertical]}})((0,c.A)(t=>{let{theme:o}=t;return{display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius,variants:[{props:{variant:"contained"},style:{boxShadow:(o.vars||o).shadows[2]}},{props:{disableElevation:!0},style:{boxShadow:"none"}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"vertical"},style:{flexDirection:"column",["& .".concat(B.lastButton,",& .").concat(B.middleButton)]:{borderTopRightRadius:0,borderTopLeftRadius:0},["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderBottomRightRadius:0,borderBottomLeftRadius:0}}},{props:{orientation:"horizontal"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderTopRightRadius:0,borderBottomRightRadius:0},["& .".concat(B.lastButton,",& .").concat(B.middleButton)]:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}},{props:{variant:"text",orientation:"horizontal"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderRight:o.vars?"1px solid rgba(".concat(o.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(B.disabled)]:{borderRight:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},{props:{variant:"text",orientation:"vertical"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderBottom:o.vars?"1px solid rgba(".concat(o.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(B.disabled)]:{borderBottom:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},...Object.entries(o.palette).filter((0,u.A)()).flatMap(t=>{let[e]=t;return[{props:{variant:"text",color:e},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderColor:o.vars?"rgba(".concat(o.vars.palette[e].mainChannel," / 0.5)"):(0,i.X4)(o.palette[e].main,.5)}}}]}),{props:{variant:"outlined",orientation:"horizontal"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderRightColor:"transparent","&:hover":{borderRightColor:"currentColor"}},["& .".concat(B.lastButton,",& .").concat(B.middleButton)]:{marginLeft:-1}}},{props:{variant:"outlined",orientation:"vertical"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderBottomColor:"transparent","&:hover":{borderBottomColor:"currentColor"}},["& .".concat(B.lastButton,",& .").concat(B.middleButton)]:{marginTop:-1}}},{props:{variant:"contained",orientation:"horizontal"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderRight:"1px solid ".concat((o.vars||o).palette.grey[400]),["&.".concat(B.disabled)]:{borderRight:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},{props:{variant:"contained",orientation:"vertical"},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderBottom:"1px solid ".concat((o.vars||o).palette.grey[400]),["&.".concat(B.disabled)]:{borderBottom:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},...Object.entries(o.palette).filter((0,u.A)(["dark"])).map(t=>{let[e]=t;return{props:{variant:"contained",color:e},style:{["& .".concat(B.firstButton,",& .").concat(B.middleButton)]:{borderColor:(o.vars||o).palette[e].dark}}}})],["& .".concat(B.grouped)]:{minWidth:40,boxShadow:"none",props:{variant:"contained"},style:{"&:hover":{boxShadow:"none"}}}}})),x=r.forwardRef(function(t,o){let e=(0,s.b)({props:t,name:"MuiButtonGroup"}),{children:a,className:i,color:l="primary",component:d="div",disabled:c=!1,disableElevation:u=!1,disableFocusRipple:p=!1,disableRipple:g=!1,fullWidth:m=!1,orientation:B="horizontal",size:x="medium",variant:y="outlined",...C}=e,R={...e,color:l,component:d,disabled:c,disableElevation:u,disableFocusRipple:p,disableRipple:g,fullWidth:m,orientation:B,size:x,variant:y},z=f(R),w=r.useMemo(()=>({className:z.grouped,color:l,disabled:c,disableElevation:u,disableFocusRipple:p,disableRipple:g,fullWidth:m,size:x,variant:y}),[l,c,u,p,g,m,x,y,z.grouped]),M=r.Children.toArray(a).filter(t=>r.isValidElement(t)),k=M.length,S=t=>{let o=0===t,e=t===k-1;return o&&e?"":o?z.firstButton:e?z.lastButton:z.middleButton};return(0,h.jsx)(A,{as:d,role:"group",className:(0,n.A)(z.root,i),ref:o,ownerState:R,...C,children:(0,h.jsx)(b.A.Provider,{value:w,children:M.map((t,o)=>(0,h.jsx)(v.A.Provider,{value:S(o),children:t},o))})})})},21831:(t,o,e)=>{e.d(o,{Z:()=>p});var r=e(85407),n=e(60160),a=e(12115),i=e(91888),l=e(2091),d=e(59175),c=e(95155);let u=["label","icon","showInMenu","onClick"],s=["label","icon","showInMenu","onClick","closeMenuOnClick","closeMenu"],p=a.forwardRef((t,o)=>{let e=(0,d.A)();if(!t.showInMenu){let{label:i,icon:l,onClick:d}=t,s=(0,n.A)(t,u);return(0,c.jsx)(e.slots.baseIconButton,(0,r.A)({ref:o,size:"small",role:"menuitem","aria-label":i},s,{onClick:t=>{d?.(t)}},e.slotProps?.baseIconButton,{children:a.cloneElement(l,{fontSize:"small"})}))}let{label:p,icon:g,onClick:m,closeMenuOnClick:B=!0,closeMenu:b}=t,v=(0,n.A)(t,s);return(0,c.jsxs)(i.A,(0,r.A)({ref:o},v,{onClick:t=>{m?.(t),B&&b?.()},children:[g&&(0,c.jsx)(l.A,{children:g}),p]}))})}}]);