(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{681:function(e,t,a){"use strict";a(68),a(782),a(322)},704:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n,r=a(0),o=a(13),i=a(114),l=a(170),c=a(27);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return!e||null===e.offsetParent}var h=function(e){function t(){var e,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=d(t).apply(this,arguments),(e=!r||"object"!==s(r)&&"function"!==typeof r?m(a):r).animationStart=!1,e.destroy=!1,e.onClick=function(t,a){if(!(!t||f(t)||t.className.indexOf("-leave")>=0)){var r=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=e.extraNode;o.className="ant-click-animating-node";var l=e.getAttributeName();t.setAttribute(l,"true"),n=n||document.createElement("style"),a&&"#ffffff"!==a&&"rgb(255, 255, 255)"!==a&&e.isNotGrey(a)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(a)&&"transparent"!==a&&(e.csp&&e.csp.nonce&&(n.nonce=e.csp.nonce),o.style.borderColor=a,n.innerHTML="html body { --antd-wave-shadow-color: ".concat(a,"; }"),document.body.contains(n)||document.body.appendChild(n)),r&&t.appendChild(o),i.a.addStartEventListener(t,e.onTransitionStart),i.a.addEndEventListener(t,e.onTransitionEnd)}},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var a=function(a){if("INPUT"!==a.target.tagName&&!f(a.target)){e.resetEffect(t);var n=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,n)},0),l.a.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(l.a)(function(){e.animationStart=!1},10)}};return t.addEventListener("click",a,!0),{cancel:function(){t.removeEventListener("click",a,!0)}}}},e.onTransitionStart=function(t){if(!e.destroy){var a=Object(o.findDOMNode)(m(e));t&&t.target===a&&(e.animationStart||e.resetEffect(a))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.renderWave=function(t){var a=t.csp,n=e.props.children;return e.csp=a,n},e}var a,h,y;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),a=t,(h=[{key:"isNotGrey",value:function(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,a=this.getAttributeName();e.setAttribute(a,"false"),this.removeExtraStyleNode(),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),i.a.removeStartEventListener(e,this.onTransitionStart),i.a.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"removeExtraStyleNode",value:function(){n&&(n.innerHTML="")}},{key:"componentDidMount",value:function(){var e=Object(o.findDOMNode)(this);e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"render",value:function(){return r.createElement(c.a,null,this.renderWave)}}])&&u(a.prototype,h),y&&u(a,y),t}()},782:function(e,t,a){},993:function(e,t,a){"use strict";a.r(t);a(699);var n=a(679),r=(a(755),a(693)),o=a(111),i=a(29),l=a(30),c=a(32),s=a(31),u=a(33),d=(a(754),a(752)),m=a(0),p=a.n(m),f=a(673),h=a(34),y=a(46),b=a(229),g=a.n(b),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).defaultLabelRender=function(e,t){return t.point.payType+": "+e},a.formatNum=function(e){return(e+"").replace(/\B(?=(\d{3})+(?!\d))/g,",")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=void 0===a?[]:a,r=t.classes,o=t.label,i=t.value,l=t.locale,c=new(0,g.a.DataView);c.source(n).transform({type:"percent",field:i,dimension:o,as:"percent"});return p.a.createElement("div",{className:r.root},n.length?p.a.createElement(y.Chart,{height:330,data:c,scale:{percent:{formatter:function(e,t){return e=100*e+"%"}}},padding:[0,80,60,80],forceFit:!0},p.a.createElement(y.Coord,{type:"theta",radius:.75,innerRadius:.6}),p.a.createElement(y.Axis,{name:"percent"}),p.a.createElement(y.Legend,null),p.a.createElement(y.Tooltip,{showTitle:!1,itemTpl:'<li> <span style="background-color:{color};" class="g2-tooltip-marker"></span> {name}: {value} </li>'}),p.a.createElement(y.Geom,{type:"intervalStack",position:"percent",color:[o,["#08ABF8","#FFC000","#27DA99","#FC5B5B","#3A5DDF"]],tooltip:["percent*english*bookValue*label",function(t,a,n,r){return n="zh"===l?"\u91d1\u989d:"+e.formatNum(n)+"\u5143":"Amounts: "+e.formatNum(n)+" yuan",t=(100*t).toFixed(2)+"%",{name:"zh"===l?r:a,value:t+"<br>"+n}}],style:{lineWidth:1,stroke:"#fff"}},p.a.createElement(y.Label,{content:"percent",htmlTemplate:function(e,t,a){var n=t.point,r="zh"===l?n[o]:n.english,i=(100*n.percent).toFixed(2)+"%";return'<span class="tip">'.concat(r,":").concat(i,"</span>")}}))):p.a.createElement("p",{style:{minHeight:"300px",color:"red",textAlign:"center",lineHeight:"300px"}},p.a.createElement("span",null,"en"===l?"No Data":"\u6682\u65e0\u6570\u636e")))}}]),t}(p.a.Component),E=Object(f.a)(function(e){return{root:{"& .tip":{fontSize:"12px",whiteSpace:"nowrap"}}}})(Object(h.b)(function(e){return{locale:e.intl.locale}})(v)),N=a(227),S=a(62),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).formatNum=function(e){return(e+"").replace(/\B(?=(\d{3})+(?!\d))/g,",")},a.state={sort:"day"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.type,n=e.data;"week"===a?this.setState({sort:"week"}):n.forEach(function(e,a){-1!==e.payDate.indexOf(":")?t.setState({sort:"day"}):t.setState({sort:"month"})})}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.classes,r=a.data,o=this.state.sort;r&&r.map(function(e,t){return null===e.bookValue&&(e.bookValue=0),e});var i=(e={},Object(N.a)(e,"payDate",{ticks:"day"===o&&[0,2,4,6,8,10,12,14,16,18,20,22]}),Object(N.a)(e,"bookValue",{formatter:function(e){return t.formatNum(e)}}),e),l={name:"bookValue",label:{formatter:function(e){return"".concat(e)},autoRotate:!1}},c={name:"payDate",label:{formatter:function(e,t,a){return e}}};return p.a.createElement("div",{className:n.root},p.a.createElement("div",{className:n.label},p.a.createElement(S.a,{id:"pay.amount",defaultMessage:"Amount(yuan)"})),p.a.createElement(y.Chart,{padding:[50,80,50,80],height:400,data:r,scale:i,forceFit:!0},p.a.createElement(y.Legend,{position:"bottom",marker:"square"}),p.a.createElement(y.Axis,Object.assign({grid:{type:"line",lineStyle:{lineDash:[1,0]}}},l)),p.a.createElement(y.Axis,c),p.a.createElement(y.Tooltip,{crosshairs:{type:"y"},containerTpl:'<div class="g2-tooltip" style="color:#999BA1; ">\n                '.concat("zh"===this.props.locale?"\u65f6\u95f4":"Time",'\uff1a\n                <span\n                  class="g2-tooltip-title"\n                  style="white-space:nowrap;vertical-align:middle;width:80px;overflow:hidden;display:inline-block;"></span>\n                <table class="g2-tooltip-list"></table>\n              </div>'),itemTpl:'<tr class="g2-tooltip-list-item">\n                <td>\n                  <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:{color};"></span>\n                  '.concat("zh"===this.props.locale?"\u6536\u5165":"Income",":\n                </td>\n                <td>\n                  <span>{value}</span>").concat("zh"===this.props.locale?"\u5143":" yuan","\n                </td>\n              </tr>")}),p.a.createElement(y.Geom,{type:"line",position:"".concat("payDate","*").concat("bookValue"),size:2,color:"#FC5B5B"})))}}]),t}(p.a.Component),w=Object(f.a)(function(e){return{root:{paddingTop:"16px"},label:{paddingLeft:"20px",color:"#bfbfbf",fontSize:"12px",marginBottom:"-38px"}}})(Object(h.b)(function(e){return{locale:e.intl.locale}})(k)),x=a(106),O=a.n(x),T=d.a.RangePicker,j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).formatNum=function(e){return(e+"").replace(/\B(?=(\d{3})+(?!\d))/g,",")},a.getData=function(){var e=a.state,t=e.source,n=e.source1,r=e.time,i=e.startTime,l=e.endTime,c={source:"all"===t?"":t,source1:"all"===n?"":n,time:r};if("auto"===r){if(!i||!l)return;c=Object(o.a)({startTime:"".concat(i),endTime:"".concat(l)},c,{time:""})}a.props.paymentAmounts({params:c})},a.disabledDate=function(e){return e>O()()},a.searchChange=function(e){var t=e.target.value,n={time:t};"auto"===t&&(n.startTime=void 0,n.endTime=void 0),a.setState(n,function(){return a.getData()})},a.state={time:"day",source:"all",source1:"all",startTime:void 0,endTime:void 0,rangeDateState:[],buttonWidth:130},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.props.getStatBySystem();var e=this.props.locale;this.setState({buttonWidth:"zh"===e?96:130})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,i=t.chartData,l=t.statBySystem,c=t.locale,s=this.state,u=s.time,d=s.source1,m=s.source,f=s.buttonWidth,h=i[1],y=i[2],b=(i[0]||[]).map(function(e){return Object(o.a)({},e,{typy:"\u6536\u5165"})}),g=(h||[]).reduce(function(e,t){return e+t.bookValue},0),v=(y||[]).reduce(function(e,t){return e+t.bookValue},0),N="auto"!==u;return p.a.createElement("div",{className:a.root},p.a.createElement("div",{className:"panel-wrap"},p.a.createElement("h3",{className:"title"},p.a.createElement(S.a,{id:"pay.paymentTrendAnalysis",defaultMessage:"Trend Analysis"})),p.a.createElement("div",{className:"content"},p.a.createElement("div",{className:N?"":"clear-border"},p.a.createElement(r.a.Group,{defaultValue:u,onChange:this.searchChange,buttonStyle:"solid"},p.a.createElement(r.a.Button,{style:{width:f,textAlign:"center"},value:"day"},p.a.createElement(S.a,{id:"order.day",defaultMessage:"Yesterday"})),p.a.createElement(r.a.Button,{style:{width:f,textAlign:"center"},value:"week"},p.a.createElement(S.a,{id:"order.week",defaultMessage:"Last 7 days"})),p.a.createElement(r.a.Button,{style:{width:f,textAlign:"center"},value:"month"},p.a.createElement(S.a,{id:"order.month",defaultMessage:"Last 30 days"})),N&&p.a.createElement(r.a.Button,{style:{width:f,textAlign:"center"},value:"auto"},p.a.createElement(S.a,{id:"order.customize",defaultMessage:"Customize"}))),!N&&p.a.createElement(T,{disabledDate:this.disabledDate,showTime:{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",onChange:function(t,a){e.setState({startTime:a[0],endTime:a[1]})},onOk:this.getData}),p.a.createElement("div",{className:"right-search"},p.a.createElement("span",{className:a.navSpan},p.a.createElement(S.a,{id:"pay.source",defaultMessage:"Source"}),"\uff1a"),p.a.createElement(n.a,{value:m,style:"zh"===c?{width:190}:{width:120},className:a.link,defaultValue:m,getPopupContainer:function(e){return e},onChange:function(t){return e.setState({source:t},function(){return e.getData()})}},p.a.createElement(n.a.Option,{value:"all"},p.a.createElement(S.a,{id:"pay.allSystems",defaultMessage:"All Systems"})),l.map(function(e,t){return p.a.createElement(n.a.Option,{key:t,value:e.english},"zh"===c?e.label:e.english)})))),p.a.createElement("div",null,p.a.createElement(w,{type:u,data:b})))),p.a.createElement("div",{className:a.loopCharts},p.a.createElement("div",{className:"panel-wrap"},p.a.createElement("div",{className:"title-bar"},p.a.createElement("h3",{className:"title"},p.a.createElement(S.a,{id:"pay.paymentMethodAnalysis",defaultMessage:"Payment Methods Analysis"})),p.a.createElement("div",{className:"right-search"},p.a.createElement("span",null,p.a.createElement(S.a,{id:"pay.source",defaultMessage:"Source"}),"\uff1a"),p.a.createElement(n.a,{value:d,style:"zh"===c?{width:190}:{width:120},className:a.link,defaultValue:d,getPopupContainer:function(e){return e},onChange:function(t){return e.setState({source1:t},function(){return e.getData()})}},p.a.createElement(n.a.Option,{value:"all"},p.a.createElement(S.a,{id:"pay.allSystems",defaultMessage:"All Systems"})),l.map(function(e,t){return p.a.createElement(n.a.Option,{key:t,value:e.english},"zh"===c?e.label:e.english)})))),p.a.createElement("div",{className:"total-money"},p.a.createElement(S.a,{id:"pay.totalAmount",defaultMessage:"Total Amount(yuan)"})," \uff1a",this.formatNum(g.toFixed(2))),p.a.createElement("div",{className:"content"},p.a.createElement(E,{data:h,label:"zh"===c?"label":"english",value:"percent"}))),p.a.createElement("div",{className:"panel-wrap"},p.a.createElement("div",{className:"title-bar"},p.a.createElement("h3",{className:"title"},p.a.createElement(S.a,{id:"pay.percentageOfPayment",defaultMessage:"Payment Percentage"}))),p.a.createElement("div",{className:"total-money"},p.a.createElement(S.a,{id:"pay.totalAmount",defaultMessage:"Total Amount(\xa5)"})," \uff1a",this.formatNum(v.toFixed(2))),p.a.createElement("div",{className:"content"},p.a.createElement(E,{data:y,label:"zh"===c?"label":"english",value:"percent"})))))}}]),t}(p.a.Component);t.default=Object(f.a)(function(e){return{root:{"& .panel-wrap":{overflow:"hidden",margin:"20px",padding:"20px",backgroundColor:"#ffffff","& .title-bar":{display:"flex",justifyContent:"space-between",alignItems:"center"},"& .title":{fontSize:"20px",color:"#33353D"},"& .right-search":{display:"flex",alignItems:"center",float:"right"},"& .total-money":{color:"#5E616F",fontSize:"14px"},"& .content":{"& .item":{display:"flex",whiteSpace:"nowrap",alignItems:"center",height:"30px","& .label":{paddingRight:"20px"},"& .num":{paddingLeft:"20px"}},"& .clear-border":{"& .ant-radio-button-wrapper:last-of-type":{borderRadius:0,borderRight:"none"},"& .ant-calendar-picker-input":{borderTopLeftRadius:0,borderBottomLeftRadius:0}}}}},loopCharts:{display:"flex","& .panel-wrap":{width:"50%",flex:"1",marginTop:0,"&:first-of-type":{marginRight:"0"}}}}})(Object(h.b)(function(e){var t=e.pay;return{chartData:t.chartData,PayMethod:t.PayMethod,statBySystem:t.statBySystem,locale:e.intl.locale}},function(e){var t=e.pay;return{getList:t.getList,payDetail:t.payDetail,paymentAmounts:t.paymentAmounts,getStatBySystem:t.getStatBySystem,getPayMethod:t.getPayMethod}})(j))}}]);
//# sourceMappingURL=payAnalyze.2bcff745.chunk.js.map