(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{676:function(e,t,n){"use strict";var r=n(0),o=n(1),a=n(11),i=n.n(a),c=n(55),l=n(107),s=n(23),u=n(27),d=n(704),p=n(137);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=/^[\u4e00-\u9fa5]{2}$/,O=x.test.bind(x);function N(e,t){var n=!1,o=[];return r.Children.forEach(e,function(e){var t=v(e),r="string"===t||"number"===t;if(n&&r){var a=o.length-1,i=o[a];o[a]="".concat(i).concat(e)}else o.push(e);n=r}),r.Children.map(o,function(e){return function(e,t){if(null==e)return;var n=t?" ":"";if("string"!==typeof e&&"number"!==typeof e&&(o=e.type,"string"===typeof o)&&O(e.props.children))return r.cloneElement(e,{},e.props.children.split("").join(n));var o;if("string"===typeof e)return O(e)&&(e=e.split("").join(n)),r.createElement("span",null,e);return e}(e,t)})}Object(p.a)("default","primary","ghost","dashed","danger","link");var k=Object(p.a)("circle","circle-outline","round"),C=Object(p.a)("large","default","small"),S=Object(p.a)("submit","button","reset"),w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).saveButtonRef=function(e){n.buttonNode=e},n.handleClick=function(e){var t=n.state.loading,r=n.props.onClick;t||r&&r(e)},n.renderButton=function(e){var t,o=e.getPrefixCls,a=e.autoInsertSpaceInButton,c=n.props,u=c.prefixCls,p=c.type,m=c.shape,y=c.size,b=c.className,g=c.children,v=c.icon,x=c.ghost,O=(c.loading,c.block),k=E(c,["prefixCls","type","shape","size","className","children","icon","ghost","loading","block"]),C=n.state,S=C.loading,w=C.hasTwoCNChar,T=o("btn",u),j=!1!==a,R="";switch(y){case"large":R="lg";break;case"small":R="sm"}var I=i()(T,b,(h(t={},"".concat(T,"-").concat(p),p),h(t,"".concat(T,"-").concat(m),m),h(t,"".concat(T,"-").concat(R),R),h(t,"".concat(T,"-icon-only"),!g&&0!==g&&v),h(t,"".concat(T,"-loading"),S),h(t,"".concat(T,"-background-ghost"),x),h(t,"".concat(T,"-two-chinese-chars"),w&&j),h(t,"".concat(T,"-block"),O),t)),P=S?"loading":v,A=P?r.createElement(s.a,{type:P}):null,_=g||0===g?N(g,n.isNeedInserted()&&j):null,L=Object(l.a)(k,["htmlType"]);if(void 0!==L.href)return r.createElement("a",f({},L,{className:I,onClick:n.handleClick,ref:n.saveButtonRef}),A,_);var B=k,M=B.htmlType,z=E(B,["htmlType"]),F=r.createElement("button",f({},z,{type:M,className:I,onClick:n.handleClick,ref:n.saveButtonRef}),A,_);return"link"===p?F:r.createElement(d.a,null,F)},n.state={loading:e.loading,hasTwoCNChar:!1},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.loading instanceof Boolean?f({},t,{loading:e.loading}):null}}],(o=[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentDidUpdate",value:function(e){var t=this;this.fixTwoCNChar(),e.loading&&"boolean"!==typeof e.loading&&clearTimeout(this.delayTimeout);var n=this.props.loading;if(n&&"boolean"!==typeof n&&n.delay)this.delayTimeout=window.setTimeout(function(){return t.setState({loading:n})},n.delay);else{if(e.loading===this.props.loading)return;this.setState({loading:n})}}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var e=this.buttonNode.textContent||this.buttonNode.innerText;this.isNeedInserted()&&O(e)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var e=this.props,t=e.icon,n=e.children;return 1===r.Children.count(n)&&!t}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderButton)}}])&&m(n.prototype,o),a&&m(n,a),t}();w.__ANT_BUTTON=!0,w.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},w.propTypes={type:o.string,shape:o.oneOf(k),size:o.oneOf(C),htmlType:o.oneOf(S),onClick:o.func,loading:o.oneOfType([o.bool,o.object]),className:o.string,icon:o.string,block:o.bool},Object(c.polyfill)(w);var T=w;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},I=function(e){return r.createElement(u.a,null,function(t){var n=t.getPrefixCls,o=e.prefixCls,a=e.size,c=e.className,l=R(e,["prefixCls","size","className"]),s=n("btn-group",o),u="";switch(a){case"large":u="lg";break;case"small":u="sm"}var d,p,f,h=i()(s,(d={},p="".concat(s,"-").concat(u),f=u,p in d?Object.defineProperty(d,p,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[p]=f,d),c);return r.createElement("div",j({},l,{className:h}))})};T.Group=I;t.a=T},704:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r,o=n(0),a=n(13),i=n(114),c=n(170),l=n(27);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return!e||null===e.offsetParent}var m=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=d(t).apply(this,arguments),(e=!o||"object"!==s(o)&&"function"!==typeof o?p(n):o).animationStart=!1,e.destroy=!1,e.onClick=function(t,n){if(!(!t||h(t)||t.className.indexOf("-leave")>=0)){var o=e.props.insertExtraNode;e.extraNode=document.createElement("div");var a=e.extraNode;a.className="ant-click-animating-node";var c=e.getAttributeName();t.setAttribute(c,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&e.isNotGrey(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(e.csp&&e.csp.nonce&&(r.nonce=e.csp.nonce),a.style.borderColor=n,r.innerHTML="html body { --antd-wave-shadow-color: ".concat(n,"; }"),document.body.contains(r)||document.body.appendChild(r)),o&&t.appendChild(a),i.a.addStartEventListener(t,e.onTransitionStart),i.a.addEndEventListener(t,e.onTransitionEnd)}},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!h(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,r)},0),c.a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(c.a)(function(){e.animationStart=!1},10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.onTransitionStart=function(t){if(!e.destroy){var n=Object(a.findDOMNode)(p(e));t&&t.target===n&&(e.animationStart||e.resetEffect(n))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.renderWave=function(t){var n=t.csp,r=e.props.children;return e.csp=n,r},e}var n,m,y;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(m=[{key:"isNotGrey",value:function(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,n=this.getAttributeName();e.setAttribute(n,"false"),this.removeExtraStyleNode(),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),i.a.removeStartEventListener(e,this.onTransitionStart),i.a.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"removeExtraStyleNode",value:function(){r&&(r.innerHTML="")}},{key:"componentDidMount",value:function(){var e=Object(a.findDOMNode)(this);e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"render",value:function(){return o.createElement(l.a,null,this.renderWave)}}])&&u(n.prototype,m),y&&u(n,y),t}()},781:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),o=n.n(r);function a(e){var t=[];return o.a.Children.forEach(e,function(e){t.push(e)}),t}},978:function(e,t,n){"use strict";n.r(t);n(322);var r=n(676),o=(n(765),n(767)),a=(n(168),n(23)),i=(n(766),n(768)),c=(n(681),n(753)),l=(n(842),n(843)),s=n(214),u=n(29),d=n(30),p=n(32),f=n(31),h=n(33),m=n(0),y=n.n(m),b=n(673),g=n(34),v=n(62),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).onExpand=function(e){n.setState({expandedKeys:e,autoExpandParent:!1})},n.onChange=function(e){var t=e.target.value,r=n.props.resourceList,o=[];t&&r.map(function(e){return e.name.indexOf(t)>=0&&o.push(e.id+""),e.children&&e.children.length&&e.children.map(function(e){return e.name.indexOf(t)>=0&&o.push(e.id+""),e.children&&e.children.length&&e.children.map(function(e){return e.name.indexOf(t)>=0&&o.push(e.id+""),o}),o}),o}),n.setState({expandedKeys:o,searchValue:t,autoExpandParent:!0})},n.onCheck=function(e,t){var r=n.props.resourceList,o=e.concat(t.halfCheckedKeys),a=n.deal(JSON.parse(JSON.stringify(r)),function(e){return o.indexOf(e.id+"")>=0});n.setState({checkedKeys:e,selectArr:a,resourceIds:o})},n.deal=function(e,t){if(!e||!e.length)return[];var r=[],o=!0,a=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;t(u)?(r.push(u),u.children=n.deal(u.children,t)):r.push.apply(r,Object(s.a)(n.deal(u.children,t)))}}catch(d){a=!0,i=d}finally{try{o||null==l.return||l.return()}finally{if(a)throw i}}return r},n.goBack=function(){var e=n.props,t=e.history,r=e.location;t.push("./",r.state)},n.resourceAuthorization=function(){(0,n.props.addRoleResources)({identifier:sessionStorage.getItem("roleIdentifier"),id:sessionStorage.getItem("roleId"),params:{resourceIds:n.state.resourceIds},cb:function(){n.goBack()}})},n.getResourceIds=function(e,t){return e.children&&e.children.length&&e.children.forEach(function(e,r){t.push(e.id),n.getResourceIds(e,t)}),t},n.filter=function(e){var t=[];return e.map(function(e,n){0===t.length&&t.push(e);var r=t[t.length-1];return-1!==(e+"").indexOf(r)?(t.pop(),t.push(e)):t.push(e),t}),t},n.state={expandedKeys:[],searchValue:"",autoExpandParent:!0,selectArr:[],resourceIds:[],checkedKeys:[],totalResource:Number},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.queryRoleResources,r=t.queryResourcesList,o=t.location;o.state&&(sessionStorage.setItem("roleId",o.state.id),sessionStorage.setItem("roleName",o.state.roleName)),r({identifier:sessionStorage.getItem("roleIdentifier"),cb:function(){var t=e.props.resourceList,n=0;t&&t.forEach(function(e){e.children?n+=e.children&&e.children.length:n+=t.length}),e.setState({totalResource:n})}}),n({identifier:sessionStorage.getItem("roleIdentifier"),id:sessionStorage.getItem("roleId"),cb:function(){var t=e.props.roleResource,n=[];t&&t.length&&t.forEach(function(t,r){n.push(t.id),n=e.getResourceIds(t,n)}),e.setState({selectArr:t,checkedKeys:e.filter(n),resourceIds:n})}})}},{key:"componentWillUnmount",value:function(){(0,this.props.resetRoleResources)()}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,s=t.resourceList;if(s&&0===s.length)return y.a.createElement("div",null);var u=this.state,d=u.searchValue,p=u.expandedKeys,f=u.autoExpandParent,h=u.selectArr,m=u.checkedKeys,b=u.resourceIds,g=u.totalResource,E=b.length,x=function e(t){return t&&t.length&&t.map(function(t){if(!t.name)return y.a.createElement("div",null);var n=t.name.indexOf(d),r=t.name.substr(0,n),o=t.name.substr(n+d.length),a=n>-1?y.a.createElement("span",null,r,y.a.createElement("span",{style:{color:"#f50"}},d),o):y.a.createElement("span",null,t.name);return t.children&&t.children.length>0?y.a.createElement(l.a.TreeNode,{key:t.id,title:a},e(t.children)):y.a.createElement(l.a.TreeNode,{key:t.id,title:a})})};return y.a.createElement("div",{className:n.root},y.a.createElement("p",null,y.a.createElement(v.a,{id:"role.authorizeBusinessSystems",defaultMessage:"Authorize business system"})),y.a.createElement("p",null,sessionStorage.getItem("sysName")," / ",y.a.createElement("span",null,sessionStorage.getItem("path"))),y.a.createElement("br",null),y.a.createElement("p",null,y.a.createElement(v.a,{id:"role.authorizeRole",defaultMessage:"Authorize role"})),y.a.createElement("p",null,sessionStorage.getItem("roleName")," / ",y.a.createElement("span",null,sessionStorage.getItem("roleId"))),y.a.createElement("br",null),y.a.createElement("p",{className:n.lable},y.a.createElement(v.a,{id:"role.resourceSelect",defaultMessage:"ResourceSelect"}),"\xa0",y.a.createElement("span",{className:n.total},"(",y.a.createElement(v.a,{id:"role.totalResource",defaultMessage:"Total ".concat(g," items"),values:{totalResource:g}}),")")),y.a.createElement(o.a,{type:"flex",align:"middle"},y.a.createElement(i.a,{span:11},y.a.createElement(v.a,{id:"role.searchResource",defaultMessage:"Search resource"},function(t){return y.a.createElement(c.a.Search,{className:n.search,placeholder:t.toString(),onChange:e.onChange})}),y.a.createElement(l.a,{checkable:!0,className:n.tree,onExpand:this.onExpand,expandedKeys:p,autoExpandParent:f,checkedKeys:m,onCheck:this.onCheck},x(s||[]))),y.a.createElement(i.a,{span:2,className:n.middleCol},y.a.createElement(a.a,{type:"swap"})),y.a.createElement(i.a,{span:11},y.a.createElement("p",{className:n.lable},y.a.createElement(v.a,{id:"role.selected",defaultMessage:"Selected"}),"\xa0",y.a.createElement("span",{className:n.total},"(",y.a.createElement(v.a,{id:"role.selectNum",defaultMessage:"Total ".concat(E," items"),values:{selectNum:E}}),")")),y.a.createElement(l.a,{className:n.tree,onExpand:this.onExpand,expandedKeys:p,autoExpandParent:f},x(h)))),y.a.createElement("div",{className:n.btnBox},y.a.createElement(r.a,{onClick:this.goBack},y.a.createElement(v.a,{id:"role.cancel",defaultMessage:"Cancel"})),y.a.createElement(r.a,{type:"primary",onClick:this.resourceAuthorization},y.a.createElement(v.a,{id:"role.applyAuthorization",defaultMessage:"Apply authorization"}))))}}]),t}(y.a.Component);t.default=Object(b.a)(function(e){return{root:{margin:"20px",backgroundColor:"#FFFFFF",padding:"30px 20px"},search:{"& input":{borderRadius:"4px 4px 0 0",border:"1px solid rgba(232,232,232,1)",borderBottom:"none"}},middleCol:{textAlign:"center",fontSize:"24px"},tree:{border:"1px solid rgba(232,232,232,1)",height:"350px",overflow:"auto",borderRadius:"0 0 4px 4px"},treeSelect:{border:"1px solid rgba(232,232,232,1)",height:"350px",overflow:"auto",borderRadius:"4px"},lable:{margin:"0 0 10px",fontSize:"14px",color:"#33353D","& span":{color:"#33353D"},"& a span":{color:"rgba(8,171,248,1)"}},total:{color:"#999BA2 !important","& span":{color:"#999BA2 !important"}},item:{display:"inline-block",margin:"10px",borderRadius:"3px",border:"1px solid rgba(204,204,204,1)",height:"42px",lineHeight:"42px",padding:"0 14px","& i":{display:"none",float:"right",lineHeight:"45px",marginLeft:"10px",cursor:"pointer"},"&:hover":{border:"1px solid rgba(8,171,248,1)",color:"rgba(8,171,248,1)","& i":{display:"block"}}},btnBox:{position:"fixed",bottom:"0",left:"220px",height:"54px",width:"calc(100% - 215px)",backgroundColor:"#FFFFFF",padding:"10px 40px",borderTop:"1px solid #CCCCCC","& button":{float:"right",marginLeft:"20px"}}}})(Object(g.b)(function(e){var t=e.resource_and_role;return{roleResource:t.roleResource,resourceList:t.resourceList}},function(e){var t=e.resource_and_role;return{queryRoleResources:t.queryRoleResources,addRoleResources:t.addRoleResources,resetRoleResources:t.resetRoleResources,queryResourcesList:t.queryResourcesList}})(E))}}]);
//# sourceMappingURL=resourceAuthorization.2f37ec5d.chunk.js.map