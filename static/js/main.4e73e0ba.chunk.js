(this["webpackJsonpplanet-gee-order"]=this["webpackJsonpplanet-gee-order"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"name":"planet-gee-order","homepage":"https://ku-glaciology.github.io/planet-gee-order","version":"0.1.0","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","date-fns":"^2.16.1","gh-pages":"^3.1.0","internal-nav-helper":"^3.1.0","money-clip":"^3.0.2","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.0","redux-bundler":"^28.0.0","redux-bundler-react":"^1.2.0","web-vitals":"^0.2.4","xhr":"^2.5.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(3),s=a.n(n),l=a(11),i=a.n(l),r=a(5),o=a(12),d=a(10),u=Object(o.a)({maxAge:864e5,version:"".concat(d.name,"-").concat(d.version)}),b={name:"auth",getReducer:function(){var e={planetApiKey:null};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,c=a.type,n=a.payload;switch(c){case"AUTH_UPDATE":case"AUTH_LOGOUT":return Object.assign({},t,n);default:return t}}},selectAuthIsLoggedIn:function(e){return!!e.auth.planetApiKey},selectAuthPlanetApiKey:function(e){return e.auth.planetApiKey||""},doAuthLogout:function(){return function(e){(0,e.dispatch)({type:"AUTH_LOGOUT",payload:{planetApiKey:null}})}},doAuthSetPlanetApiKey:function(e){return function(t){(0,t.dispatch)({type:"AUTH_UPDATE",payload:{planetApiKey:e}})}},persistActions:["AUTH_UPDATE"]},m={name:"modal",getReducer:function(){var e={content:null,props:null,size:null};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,c=a.type,n=a.payload;return"MODAL_UPDATED"===c?Object.assign({},t,n):t}},doModalOpen:function(e,t,a){return function(a){(0,a.dispatch)({type:"MODAL_UPDATED",payload:{content:e,props:t}})}},doModalClose:function(){return function(e){(0,e.dispatch)({type:"MODAL_UPDATED",payload:{content:null,props:null}})}},selectModalContent:function(e){return e.modal.content},selectModalProps:function(e){return e.modal.props},selectModalSize:function(e){return e.modal.size}},h={name:"order",getReducer:function(){var e={name:"",itemIds:[],itemType:"PSScene4Band",productBundle:"PSScene4Band",workspace:"",collection:""};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,c=a.type,n=a.payload;switch(c){case"ORDERS_SET_STATE":case"ORDER_UPDATE":return Object.assign({},t,n);default:return t}}},selectOrderName:function(e){return e.order.name},selectOrderItemIds:function(e){return e.order.itemIds},selectOrderItemType:function(e){return e.order.itemType},selectOrderProductBundle:function(e){return e.order.productBundle},selectOrderWorkspace:function(e){return e.order.workspace},selectOrderCollection:function(e){return e.order.collection},selectOrderPayload:Object(r.d)("selectOrderName","selectOrderItemType","selectOrderItemIds","selectOrderProductBundle","selectOrderWorkspace","selectOrderCollection",(function(e,t,a,c,n,s){return{name:e,products:[{item_ids:t,item_type:a,product_bundle:c}],delivery:{google_earth_engine:{project:n,collection:s}}}})),doOrderSubmit:function(e){return function(t){t.dispatch;var a=t.store,c=a.selectAuthPlanetApiKey();console.log("posting",e),fetch("https://api.planet.com/compute/ops/orders/v2",{method:"POST",mode:"cors",headers:new Headers({"content-type":"application/json",Authorization:"Basic ".concat(btoa("".concat(c,":")))}),body:JSON.stringify(e)}).then((function(e){return console.log("got something back"),e.json()})).then((function(e){console.log("data: ",e),a.doStatusFetch()}))}}},j={name:"status",getReducer:function(){var e={_links:[],orders:[],is_fetching:!1};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,c=a.type,n=a.payload;switch(c){case"STATUS_UPDATE":return Object.assign({},t,n);case"AUTH_LOGOUT":return Object.assign({},e);default:return t}}},selectStatusIsFetching:function(e){return e.status.is_fetching},selectStatusOrders:function(e){return e.status.orders},selectStatusState:function(e){return e.status},selectStatusOrdersByRoute:Object(r.d)("selectRouteParams","selectStatusState",(function(e,t){return e&&e.orderId?t[e.orderId]:null})),doStatusFetch:function(){return function(e){var t=e.dispatch,a=e.store;t({type:"STATUS_UPDATE",payload:{is_fetching:!0}});var c=a.selectAuthPlanetApiKey();c&&fetch("https://api.planet.com/compute/ops/orders/v2",{method:"GET",mode:"cors",headers:{Authorization:"Basic ".concat(btoa("".concat(c,":")))}}).then((function(e){return e.json()})).then((function(e){e.orders.forEach((function(t){e[t.id]=t})),e.is_fetching=!1,t({type:"STATUS_UPDATE",payload:e})})).catch((function(e){console.log("wtf",e)}))}},init:function(e){e.doStatusFetch()}},p=a(4),_=function(e){return Object.keys(e).map((function(t){return e[t]?t:""})).join(" ")},y=a(33),O=a(32),x=Object(p.b)("doModalClose","selectStatusState",(function(e){var t=e.doModalClose,a=e.statusState[e.orderId];if(!a)return null;var n=Object(O.a)(new Date(a.created_on),"dd-MMM-yyyy HH:mm:ss"),s=Object(O.a)(new Date(a.last_modified),"dd-MMM-yyyy HH:mm:ss");return Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h4",{className:"modal-title",children:a.name}),Object(c.jsx)("button",{onClick:t,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[Object(c.jsx)("span",{className:"float-right",children:n}),"Created:"]}),a.created_on===a.last_modified?null:Object(c.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[Object(c.jsx)("span",{className:"float-right",children:s}),"Last Modified:"]}),Object(c.jsxs)("p",{children:["State: ",a.state]}),Object(c.jsx)("div",{className:"card-text",children:a.last_message}),Object(c.jsx)("div",{className:"hidden",children:a.error_hints.length?Object(c.jsx)("small",{children:a.error_hints}):Object(c.jsx)("small",{children:"No hints available"})}),Object(c.jsx)("p",{children:"Delivery Information"}),Object(c.jsx)("div",{children:Object(c.jsx)("pre",{className:"code",children:JSON.stringify(a.delivery,null,2)})}),Object(c.jsx)("p",{children:"Products Requested"}),Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:JSON.stringify(a.products,null,2)})})]})]})})),f=Object(p.b)("doModalOpen",(function(e){var t=e.doModalOpen,a=e.order,n=_({"mr-2":!0,mdi:!0,"mdi-file-clock":"queued"===a.state,"mdi-file-cog":"running"===a.state,"mdi-file-alert":"failed"===a.state,"mdi-file-check":"success"===a.state,"mdi-file-powerpoint":"partial"===a.state,"mdi-file-cancel":"cancelled"===a.state,"text-primary":"queued"===a.state||"running"===a.state,"text-success":"success"===a.state||"partial"===a.state,"text-danger":"failed"===a.state,"text-light":"cancelled"===a.state}),s=Object(y.a)(new Date(a.created_on));return Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"float-right",children:"created ".concat(s," ago")}),Object(c.jsxs)("span",{title:"".concat(a.name,", delivery status: ").concat(a.state),children:[Object(c.jsx)("i",{className:n}),Object(c.jsx)("span",{className:"text-link",onClick:function(){t(x,{orderId:a.id},"lg")},children:a.name})]})]})})),v=a(6),g=Object(p.b)("doAuthSetPlanetApiKey","doModalClose","doStatusFetch","selectAuthPlanetApiKey",(function(e){var t=e.doAuthSetPlanetApiKey,a=e.doModalClose,s=e.doStatusFetch,l=e.authPlanetApiKey,i=Object(n.useState)(""),r=Object(v.a)(i,2),o=r[0],d=r[1];return Object(c.jsx)("div",{className:"modal-content",children:Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsx)("p",{children:"Enter credentials here for the Planet Orders API"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"form-label",children:"Planet API Key"}),Object(c.jsx)("input",{className:"form-control",type:"text",value:o,onChange:function(e){d(e.target.value)}})]}),Object(c.jsx)("button",{onClick:function(){o&&o!==l&&t(o),a(),s()},className:"btn btn-primary",children:"Save"})]})})})),N={PSScene3Band:["analytic","analytic_dn","analytic_dn_xml","analytic_xml","basic_analytic","basic_analytic_dn","basic_analytic_dn_rpc","basic_analytic_dn_xml","basic_analytic_rpc","basic_analytic_xml","basic_udm","basic_udm2","udm","udm2","visual","visual_xml"],PSScene4Band:["analytic","analytic_dn","analytic_dn_xml","analytic_sr","analytic_xml","basic_analytic","basic_analytic_dn","basic_analytic_dn_nitf","basic_analytic_dn_rpc","basic_analytic_dn_rpc_nitf","basic_analytic_dn_xml","basic_analytic_dn_xml_nitf","basic_analytic_nitf","basic_analytic_rpc","basic_analytic_rpc_nitf","basic_analytic_xml","basic_analytic_xml_nitf","basic_udm","basic_udm2","udm","udm2"],PSOrthoTile:["analytic","analytic_5b","analytic_5b_xml","analytic_dn","analytic_dn_xml","analytic_sr","analytic_xml","visual","visual_xml","udm","udm2"],REOrthoTile:["analytic","analytic_sr","analytic_xml","udm","visual","visual_xml"],REScene:["basic_analytic_b1","basic_analytic_b1_nitf","basic_analytic_b2","basic_analytic_b2_nitf","basic_analytic_b3","basic_analytic_b3_nitf","basic_analytic_b4","basic_analytic_b4_nitf","basic_analytic_b5","basic_analytic_b5_nitf","basic_analytic_xml","basic_analytic_xml_nitf","basic_analytic_sci","basic_analytic_rpc","basic_udm","browse"],SkySatScene:["basic_analytic","basic_analytic_dn","basic_analytic_dn_rpc","basic_analytic_rpc","basic_analytic_udm","basic_analytic_udm2","basic_l1a_panchromatic_dn","basic_l1a_panchromatic_dn_rpc","basic_panchromatic","basic_panchromatic_dn","basic_panchromatic_dn_rpc","basic_panchromatic_rpc","basic_panchromatic_udm2","ortho_analytic","ortho_analytic_dn","ortho_analytic_udm","ortho_analytic_udm2","ortho_panchromatic","ortho_panchromatic_dn","ortho_panchromatic_udm","ortho_panchromatic_udm2","ortho_pansharpened","ortho_pansharpened_udm","ortho_pansharpened_udm2","ortho_visual"],SkySatCollect:["ortho_analytic","ortho_analytic_dn","ortho_analytic_udm","ortho_analytic_udm2","ortho_panchromatic","ortho_panchromatic_dn","ortho_panchromatic_udm","ortho_panchromatic_udm2","ortho_pansharpened","ortho_pansharpened_udm","ortho_pansharpened_udm2","ortho_visual"],SkySatVideo:["video_file","video_frames","video_metadata"],Landsat8L1G:["analytic_b1","analytic_b2","analytic_b3","analytic_b4","analytic_b5","analytic_b6","analytic_b7","analytic_b8","analytic_b9","analytic_b10","analytic_b11","analytic_bqa","metadata_txt","visual"],Sentinel2L1C:["analytic_b1","analytic_b2","analytic_b3","analytic_b4","analytic_b5","analytic_b6","analytic_b7","analytic_b8","analytic_b8a","analytic_b9","analytic_b10","analytic_b11","analytic_b12","metadata_aux","visual"]},S=Object(p.b)("doModalClose","doOrderSubmit",(function(e){var t=e.doModalClose,a=e.doOrderSubmit,s=Object(n.useState)(""),l=Object(v.a)(s,2),i=l[0],r=l[1],o=Object(n.useState)(""),d=Object(v.a)(o,2),u=d[0],b=d[1],m=Object(n.useState)(""),h=Object(v.a)(m,2),j=h[0],p=h[1],_=Object(n.useState)(""),y=Object(v.a)(_,2),O=y[0],x=y[1],f=Object(n.useState)([]),g=Object(v.a)(f,2),S=g[0],A=g[1],k=Object(n.useState)(""),P=Object(v.a)(k,2),C=P[0],T=P[1];return Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h4",{className:"modal-title",children:"New Order"}),Object(c.jsx)("button",{onClick:t,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Order Name"}),Object(c.jsx)("input",{value:i,onChange:function(e){r(e.target.value)},type:"text",className:"form-control",placeholder:"Enter name"}),Object(c.jsx)("small",{className:"form-text text-muted",children:"Name the order so you can keep track of it"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Google Earth Engine Project"}),Object(c.jsx)("input",{className:"form-control",type:"text",value:u,onChange:function(e){b(e.target.value)},placeholder:"Enter GEE project name"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Google Earth Engine Image Collection"}),Object(c.jsx)("input",{className:"form-control",type:"text",value:j,onChange:function(e){p(e.target.value)},placeholder:"Enter GEE image collection"}),Object(c.jsx)("small",{className:"form-text text-muted",children:"The Image Collection must already exist in Earth Engine"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("span",{className:"float-right",children:Object(c.jsx)("a",{href:"https://developers.planet.com/docs/data/items-assets/",rel:"noreferrer",target:"_blank",children:"See Details"})}),Object(c.jsx)("label",{children:"Planet Item Type "}),Object(c.jsxs)("select",{className:"form-control",value:O,onChange:function(e){x(e.target.value),A([])},children:[Object(c.jsx)("option",{value:"",children:"Select an item type..."}),Object.keys(N).map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),Object(c.jsx)("small",{className:"form-text text-muted",children:"** All item types are shown here, but you might not have access to all through your API key"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Planet Product Bundle"}),Object(c.jsx)("select",{multiple:!0,className:"form-control",value:S,onChange:function(e){for(var t=e.target.options,a=[],c=0,n=t.length;c<n;c++)t[c].selected&&a.push(t[c].value);A(a)},children:O?N[O].map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)})):Object(c.jsx)("option",{value:"",children:"Select an Item Type to see bundle options"})}),Object(c.jsx)("small",{className:"form-text text-muted",children:"You may select more than one bundle"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Product IDs"}),Object(c.jsx)("textarea",{className:"form-control",rows:"5",value:C,onChange:function(e){T(e.target.value)}}),Object(c.jsx)("small",{className:"form-text text-muted",children:"Product IDs should be comma delimited"})]})]}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("button",{onClick:t,className:"btn btn-sm btn-outline-primary",children:"Cancel"}),Object(c.jsx)("button",{onClick:function(){var e=C.replace(" ","").split(","),t={name:i,products:S.map((function(t){return{item_ids:e,item_type:O,product_bundle:t}})),delivery:{google_earth_engine:{project:u,collection:j}}};console.log("saving",t),a(t)},className:"btn btn-sm btn-primary",children:"Submit"})]})]})})),A=(a(27),function(){return Object(c.jsxs)("div",{className:"sk-chase",children:[Object(c.jsx)("div",{className:"sk-chase-dot"}),Object(c.jsx)("div",{className:"sk-chase-dot"}),Object(c.jsx)("div",{className:"sk-chase-dot"}),Object(c.jsx)("div",{className:"sk-chase-dot"}),Object(c.jsx)("div",{className:"sk-chase-dot"}),Object(c.jsx)("div",{className:"sk-chase-dot"})]})}),k=Object(p.b)("doAuthLogout","doModalOpen","doStatusFetch","selectAuthPlanetApiKey","selectStatusOrders","selectStatusIsFetching",(function(e){var t=e.doAuthLogout,a=e.doModalOpen,n=e.doStatusFetch,s=e.authPlanetApiKey,l=e.statusOrders,i=e.statusIsFetching,r=function(){a(g)};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"clearfix",children:Object(c.jsx)("div",{className:"float-right",children:s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:t,className:"btn btn-link",children:"Clear API Key"}),Object(c.jsx)("button",{onClick:r,className:"btn btn-link",children:"Edit API Key"})]}):Object(c.jsx)("button",{onClick:r,className:"btn btn-link",children:"Enter API Key"})})}),Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body",children:s?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"mb-2 clearfix",children:Object(c.jsxs)("div",{className:"float-right",children:[Object(c.jsxs)("button",{onClick:function(){a(S)},className:"btn btn-sm btn-primary mr-2",children:[Object(c.jsx)("i",{className:"mdi mdi-plus mr-2"}),"New Order"]}),i?Object(c.jsxs)("button",{className:"btn btn-sm btn-primary mr-2",children:[Object(c.jsxs)("span",{className:"mr-2",style:{display:"inline-block"},children:[Object(c.jsx)(A,{})," "]}),"Refresh"]}):Object(c.jsxs)("button",{onClick:n,className:"btn btn-sm btn-primary mr-2",children:[Object(c.jsx)("i",{className:"mdi mdi-refresh mr-2"}),"Refresh"]})]})}),Object(c.jsx)("ul",{className:"list-group",children:l.map((function(e,t){return Object(c.jsx)(f,{order:e},t)}))})]}):Object(c.jsx)("div",{children:"Please enter your API key to get started."})})})]})})),P=Object(r.c)({"":k,"/":k,"*":k}),C=Object(r.a)(Object(r.b)({cacheFn:u.set}),Object(r.e)(),b,m,h,j,P),T=a(13),E=a(14),I=a(17),M=a(16),w=a(15),U=a(18),D=Object(p.b)("doModalClose","selectModalContent","selectModalProps","selectModalSize",(function(e){var t=e.modalContent,a=e.doModalClose,n=e.modalProps,s=e.modalSize;if(!t)return null;var l=_({"modal-dialog":!0,"modal-dialog-scrollable":!0,"modal-dialog-centered":!0,"modal-sm":"sm"===s,"modal-lg":"lg"===s,"modal-xl":"xl"===s});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{onClick:a,className:"modal fade show",style:{display:"block",backgroundColor:"#ccc",opacity:.5}}),Object(c.jsx)("div",{className:"modal fade show",style:{display:"block"},children:Object(c.jsx)("div",{className:l,children:Object(c.jsx)(t,Object(U.a)({},n))})})]})})),K=Object(p.b)("doUpdateUrl","selectRoute",(function(e){var t=e.doUpdateUrl,a=e.route;return Object(c.jsxs)("div",{onClick:Object(w.a)(t),children:[Object(c.jsx)(a,{}),Object(c.jsx)(D,{})]})})),R=function(e){Object(I.a)(a,e);var t=Object(M.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=this.props.store;return Object(c.jsx)(p.a,{store:e,children:Object(c.jsx)(K,{})})}}]),a}(s.a.Component);a(28),a(29),a(30);window.localStorage.removeItem("debug"),u.getAll().then((function(e){var t=C(e);window.store=t,i.a.render(Object(c.jsx)(R,{store:t}),document.getElementById("root"))}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4e73e0ba.chunk.js.map