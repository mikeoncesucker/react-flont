(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{759:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAABn0lEQVQ4T63TP0gcQRgF8Pf2WHctLCwkRRqNHjYqqULKSBCEYCTFKkFRQZRTkoiEgE2KWNpYBO6UIASr6IEgNnZCKgv/gJbnv1ZDINi4K3f7ZBYOzLF7eOB0M3zz430fM8QjLRqnPh9sCuoDEO1rWCK4deM5/dFFN++HIEcUarcGBLT4EtKq77lWGZKEdDDgnmTP9BbCqEVsZp5xtRrsrPttJAq+5/I/KNvlXAY2Li0iFwpTxRCdn9I8jcNW/qhheid4EgutvHaurv/hisQPCZMW0JFpZaESyp1qTsDQ7H7wLhYyrS0V1C8LwyS24lqLEOJLWELP58PgOhGqNpP7yIc0DxJnZBIZKHuhNyjhq53C+4lmnpuzSsScVYUiJMQagSMJT+0UXhVLGCy3Y5KUUydCiy+cdoNYxDj/YqPUiF8AukHIzOQ+kpjITqF94bnzm8RMpoVrpnB5T3axEfNWCutTzTysnF9iorkm5+JbN4sPfd1x0C2InxKOH4qYOhKdEMZ8z62LXraT9z+S7IVU26clJWk78NzvtV2sEvfRoDui8/QSbQm+4gAAAABJRU5ErkJggg=="},760:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAABVklEQVQ4T61TsUoDQRB9b+8SG39BrIQIET9BxCtUSDoLKwsrUSzsBYONjQjRziKVXRoP1OYaP0GMELAWgpDGIGhytyN7yd3FiEcObppl2bdv5s28IXIKGp6+69wQsg0wvE8fIiQbdsXbDT8OXMcXylEB6sUX8WyxFtLIfAavNuloyKIILuyqV4iIJPpsQIWql1rZwHX+4PMnAng6lCPHUUXyfD6H8scbWdPjUk1Fk/i4IgCPI/BKQnR5B2IeGjUsHTRJyqin5vyFT5WmW/V7CDZGCZ5Ia53l/U7mHiVE8inCK9XtnnC19pVKNN6DWFqrfq219JQUz7i89x5hhj1KwuATaaRjnoyPphr/BD7/8QcSlGZQDLIY8ht9y6LVjqX5rtMD5EGg2sZHCjhMWxEN1I2PCF0CuWlXvNlQmn+7tgPFLRGq6Rc2NK+QaNoVr5Fx2/9PkxvRD7HW7hLWAq8mAAAAAElFTkSuQmCC"},761:function(e,t,n){"use strict";n(776);var a=n(781),c=(n(174),n(15)),o=(n(767),n(771)),s=(n(777),n(779)),i=(n(778),n(780)),r=n(26),l=n(27),u=n(29),m=n(28),d=n(240),p=n(30),_=n(0),g=n(55),h=n(762),f=n.n(h),y=n(4),N=n.n(y),E=n(31),b=n.n(E),v=n(112),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).notice_timer=void 0,a.getUnreadNoticeList=function(){var e=b.a.get("local_language"),t=a.props,n=t.getUnreadNoticeList,c=t.getAppCodeList;n({language:"zh"===e?"chinese":"english",cb:null}),c({cb:null})},a.resetNoticeRead=function(){(0,a.props.resetNoticeRead)({cb:function(){a.getUnreadNoticeList()}})},a.goNoticeList=function(){a.props.history.push("/notice")},a.toDetail=function(e){a.props.history.push({pathname:"/notice/detail",state:{id:e}})},a.list=function(){var e=a.props,t=e.unreadNoticeList,r=e.appCodeList,l=e.intl,u=l.formatMessage,m=["#02B583","#08ABF8","#FFC000","#FC5B5B"];return t&&!t.count?_.createElement("div",{className:f.a.content},_.createElement("div",{className:f.a.notice_kong},u(v.a.no_message)),_.createElement(s.a,{className:f.a.listFooter},_.createElement(i.a,{style:{textAlign:"right",cursor:"pointer"},span:24,onClick:a.goNoticeList},u(v.a.read_all)," >"))):_.createElement("div",{className:f.a.content},_.createElement("div",{className:f.a.listBox},t&&t.noticeEntities.map(function(e,t){var c=r.find(function(t){return t.code===e.appCode})||{};return t<5&&_.createElement(s.a,{className:f.a.noticItem,key:t,onClick:a.toDetail.bind(Object(d.a)(a),e.id)},_.createElement(i.a,{span:1},_.createElement(o.a,{color:m[e.level]})),_.createElement(i.a,{span:23},_.createElement(i.a,{className:N()(f.a.title,"haveRead"===e.status?f.a.readed:f.a.title_unread),span:24},_.createElement("span",{className:f.a.name},e.title),e.images?_.createElement("img",{src:n(759),alt:""}):null,"[]"!==e.videos?_.createElement("img",{src:n(760),alt:""}):null),_.createElement("p",{className:N()(f.a.txt,"haveRead"===e.status?f.a.readed:f.a.txt_unread)},e.message),_.createElement(s.a,{className:f.a.noticeBtm},_.createElement(i.a,{span:12,className:f.a.origin},u(v.a.origin),":","zh"===l.locale?c.name:c.english),_.createElement(i.a,{span:12,className:f.a.noticeTime},e.occurTime))))}),_.createElement(s.a,{className:f.a.listFooter},_.createElement(i.a,{style:{textAlign:"left",cursor:"pointer"},span:12},_.createElement("p",null,_.createElement(c.a,{type:"check",className:f.a.font}),_.createElement("span",{onClick:a.resetNoticeRead},u(v.a.readed)))),_.createElement(i.a,{style:{textAlign:"right",cursor:"pointer"},span:12,onClick:a.goNoticeList},_.createElement("p",null,u(v.a.read_all)," >")))))},a.state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getUnreadNoticeList(),this.notice_timer=setInterval(function(){e.getUnreadNoticeList()},6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.notice_timer),this.props.resetNoticeLists()}},{key:"render",value:function(){var e=this.props,t=e.unreadNoticeList,n=e.show,c=_.createElement("span",{className:N()("iconfont icon-notice",f.a.ml18,f.a.icon_notice)},t&&t.count?t.count<=99?_.createElement("label",{className:f.a.notice_num},t.count):_.createElement("label",{className:f.a.notice_num},"99+"):null);return _.createElement("div",null,n?c:_.createElement(a.a,{placement:"bottomLeft",content:this.list(),trigger:"hover"},c))}}]),t}(_.Component);t.a=Object(g.b)(function(e){return{unreadNoticeList:e.common.unreadNoticeList,appCodeList:e.search.appCodeList}},function(e){var t=e.common,n=t.getUnreadNoticeList,a=t.resetNoticeRead,c=t.resetNoticeLists;return{getUnreadNoticeList:n,getAppCodeList:e.search.getAppCodeList,resetNoticeRead:a,resetNoticeLists:c}})(C)},762:function(e,t,n){e.exports={icon_notice:"src-components-news-style-module__icon_notice--1apwh",notice_num:"src-components-news-style-module__notice_num--1LpjW","ant-popover-inner-content":"src-components-news-style-module__ant-popover-inner-content--1xqbl",content:"src-components-news-style-module__content--2eOU0",notice_kong:"src-components-news-style-module__notice_kong--J6ON5",listFooter:"src-components-news-style-module__listFooter--2G9Na",noticItem:"src-components-news-style-module__noticItem--3meZw",title:"src-components-news-style-module__title--KoMJa",name:"src-components-news-style-module__name--2y33O",title_unread:"src-components-news-style-module__title_unread--1FyOT",readed:"src-components-news-style-module__readed--m0ljQ",txt_unread:"src-components-news-style-module__txt_unread--2ydLy",txt:"src-components-news-style-module__txt--21dUm",noticeBtm:"src-components-news-style-module__noticeBtm--2DUkT",noticeTime:"src-components-news-style-module__noticeTime--1nZkX",origin:"src-components-news-style-module__origin--2tQb5",font:"src-components-news-style-module__font--NyWzg"}},763:function(e,t,n){"use strict";n(772);var a=n(788),c=(n(775),n(774)),o=(n(174),n(15)),s=(n(175),n(43)),i=n(26),r=n(27),l=n(29),u=n(28),m=n(30),d=(n(768),n(770)),p=n(0),_=n(55),g=n(31),h=n.n(g),f=n(764),y=n.n(f),N=n(112),E=d.a.confirm,b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).logout=function(){var e=n.props,t=e.logout,a=e.history,c=h.a.get("accessToken")||"",o=n.props.intl.formatMessage;E({title:o(N.a.confirm_txt),okText:o(N.a.btn_sure),cancelText:o(N.a.btn_cancel),onOk:function(){t({params:{accessToken:c},cb:function(e,t){t&&"200"===t.status.code?(h.a.remove("accessToken"),s.a.success(o(N.a.message_back)),a.push("/login")):(h.a.remove("accessToken"),a.push("/login"))}})},onCancel:function(){}})},n.state={},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.intl.formatMessage,n=this.props,s=n.user,i=n.show,r=p.createElement(c.b,{selectedKeys:[]},p.createElement(c.b.Item,{key:"password",onClick:function(){e.props.history.push("/password")}},p.createElement(o.a,{type:"lock"}),t(N.a.change_psw)),p.createElement(c.b.Item,{key:"logout",onClick:this.logout},p.createElement(o.a,{type:"logout"}),t(N.a.logout))),l=p.createElement("label",{className:"".concat(y.a.action," ").concat(y.a.account)},p.createElement("span",{className:"iconfont icon-principal"}),p.createElement("span",{className:y.a.text_hide},s.data.user.name),p.createElement("span",{className:"iconfont icon-down"}));return p.createElement("div",null,i?l:p.createElement(a.a,{overlay:r},l))}}]),t}(p.Component);t.a=Object(_.b)(function(e){return{user:e.user.user}},function(e){return{logout:e.user.logout}})(b)},764:function(e,t,n){e.exports={action:"src-components-center-style-module__action--1i1TO",text_hide:"src-components-center-style-module__text_hide--1GPmT",account:"src-components-center-style-module__account--3kvlp"}},765:function(e,t,n){"use strict";var a=n(26),c=n(27),o=n(29),s=n(28),i=n(30),r=n(0),l=n(763),u=n(769),m=n.n(u),d=n(761),p=n(139),_=n(113),g=n(239),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).resetQuery=function(){g.a.dispatch.notice.resetQuery()},n.state={},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.intl,c=e.show;return r.createElement("header",{className:m.a.header},r.createElement(_.b,{onClick:this.resetQuery,to:"/dashboard"},r.createElement("img",{alt:"logo",src:n(335)})),r.createElement("div",{className:m.a.right},r.createElement(p.a,{styles:{color:"#fff",fontSize:"14px",marginRight:"18px"}}),r.createElement(d.a,{history:t,intl:a,show:c}),r.createElement(l.a,{history:t,intl:a})))}}]),t}(r.Component);t.a=h},766:function(e,t,n){"use strict";n(789);var a=n(793),c=n(26),o=n(27),s=n(29),i=n(28),r=n(30),l=n(0),u=n(946),m=n(113),d=n(112),p=n(239),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).resetQuery=function(){p.a.dispatch.notice.resetQuery()},n.state={},n}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.name,c=e.intl,o=e.title,s=e.jump,i=c.formatMessage;return l.createElement("div",null,l.createElement("div",{className:t.navbar},l.createElement(a.a,null,l.createElement(a.a.Item,null,l.createElement(m.b,{to:"/dashboard",onClick:this.resetQuery},i(d.a.portal))),l.createElement(a.a.Item,null,s?l.createElement(m.b,{to:"/".concat(s)},i(n)):i(n))),l.createElement("h2",{className:"title"},i(o||n))),l.createElement("div",{style:{border:".1rem solid #f1f3f9"}}))}}]),t}(l.Component);t.a=Object(u.a)(function(e){return{navbar:{height:"98px",padding:"16px 0 0 47px",backgroundColor:"#fff",color:"#5E616F","& .title":{fontSize:"20px",color:"#33353D",lineHeight:"60px"},"& .ant-breadcrumb .ant-breadcrumb-link a":{color:"#5E616F"},"& .ant-breadcrumb .ant-breadcrumb-link a:hover":{color:"#08ABF8"}}}})(_)},769:function(e,t,n){e.exports={header:"src-components-header_bar-style-module__header--2Q1Ap",right:"src-components-header_bar-style-module__right--3pigd"}},792:function(e,t,n){e.exports={message:"src-routes-notice-style-module__message--5olnN",noticeContent:"src-routes-notice-style-module__noticeContent--ED59N",result:"src-routes-notice-style-module__result--3a-NC",content:"src-routes-notice-style-module__content--3ObQ0",readed_delete:"src-routes-notice-style-module__readed_delete--TqjTJ",font:"src-routes-notice-style-module__font--3YPe4",notice_item:"src-routes-notice-style-module__notice_item--1s6GM",delete:"src-routes-notice-style-module__delete--pcIiq",notice_item_title:"src-routes-notice-style-module__notice_item_title--1No-B",notice_item_title_readed:"src-routes-notice-style-module__notice_item_title_readed--SchMd",notice_item_desc:"src-routes-notice-style-module__notice_item_desc--29aBe",item_create_at:"src-routes-notice-style-module__item_create_at--2WhSV",item_source:"src-routes-notice-style-module__item_source--1GhKw",item_warn:"src-routes-notice-style-module__item_warn--2xsrt",detail_item:"src-routes-notice-style-module__detail_item--2P_6A",detail_title:"src-routes-notice-style-module__detail_title--P2P7J",detail_des:"src-routes-notice-style-module__detail_des--3Q0ZQ",source_time:"src-routes-notice-style-module__source_time--GqPqa",deletes:"src-routes-notice-style-module__deletes--3iI7L",page:"src-routes-notice-style-module__page--2ZxHI"}},949:function(e,t,n){"use strict";n.r(t);n(782);var a=n(784),c=(n(806),n(822)),o=(n(174),n(15)),s=(n(175),n(43)),i=n(26),r=n(27),l=n(29),u=n(28),m=n(30),d=(n(768),n(770)),p=n(0),_=n(55),g=(n(767),n(771)),h=n(792),f=n.n(h),y=n(112),N=d.a.confirm,E=["#02B583","#08ABF8","#FFC000","#FC5B5B"],b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).delete=function(e,t){t.stopPropagation();var a=n.props,c=a.getUnreadNoticeList,o=a.putDeleteById,s=a.getData,i=a.intl,r=i.formatMessage;N({title:"".concat(r(y.a.confirm_delete_notice),"?"),okText:r(y.a.btn_sure),cancelText:r(y.a.btn_cancel),onOk:function(){o({id:e,cb:function(){s(),c({language:"zh"===i.locale?"chinese":"english",cb:null})}})},onCancel:function(){}})},n.toDetail=function(e,t){t.preventDefault(),n.props.history.push({pathname:"notice/detail",state:{id:e}})},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.appCodeList,c=e.intl,o=c.formatMessage,s=a.find(function(e){return e.code===t.appCode})||{};return p.createElement("div",{onClick:this.toDetail.bind(this,t.id),className:f.a.notice_item},p.createElement("div",{className:"haveRead"===t.status?f.a.notice_item_title_readed:f.a.notice_item_title},p.createElement(g.a,{color:E[t.level]})," ",t.title||"",t.images?p.createElement("img",{src:n(759),alt:""}):null,"[]"!==t.videos?p.createElement("img",{src:n(760),alt:""}):null),p.createElement("div",{className:f.a.notice_item_desc},p.createElement("div",{className:"haveRead"===t.status?"":f.a.item_warn},t.message||""),p.createElement("div",{className:f.a.item_source},o(y.a.origin),": ","zh"===c.locale?s.name:s.english),p.createElement("div",{className:f.a.item_create_at},t.occurTime),p.createElement("div",{className:f.a.delete,onClick:this.delete.bind(this,t.id)},o(y.a.delete))))}}]),t}(p.PureComponent),v=Object(_.b)(function(e){return{appCodeList:e.search.appCodeList}},function(e){return{putDeleteById:e.notice.putDeleteById,getUnreadNoticeList:e.common.getUnreadNoticeList}})(b),C=n(766),A=n(765),k=n(140),L=n(31),O=n.n(L),j=n(4),w=n.n(j),x=n(39),I=Object(x.c)({message:{id:"message",defaultMessage:"Message"},msg_list:{id:"msg_list",defaultMessage:"Message List"},notice_null:{id:"notice_null",defaultMessage:"No news to clear"}}),T=d.a.confirm,Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getData=function(){var e=n.props.getNoticeList,t=n.state.pageNumber;e({query:{language:"zh"===O.a.get("local_language")?"chinese":"english",pageNumber:t,pageSize:5},cb:function(e,t){}})},n.onChange=function(e){n.setState({pageNumber:e},function(){n.getData()})},n.resetNoticeRead=function(){(0,n.props.resetNoticeRead)({cb:function(){n.getData()}})},n.clearList=function(){var e=n.props,t=e.deleteNotice,a=e.notice,c=e.intl.formatMessage;a.count?T({title:"".concat(c(y.a.confirm_reset_notice),"?"),okText:c(y.a.btn_sure),cancelText:c(y.a.btn_cancel),onOk:function(){t({cb:null})},onCancel:function(){}}):s.a.warn(c(I.notice_null))},n.state={pageNumber:1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.query,n=e.resetQuerys;this.onChange(t.pageNumber||this.state.pageNumber),n()}},{key:"componentWillUnmount",value:function(){(0,this.props.resetNoticeLists)()}},{key:"componentWillReceiveProps",value:function(e){if(e){var t=e.notice.noticeEntities||[],n=e.notice.count;!t.length&&n&&this.onChange(this.state.pageNumber-1)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.notice,s=t.history,i=t.intl,r=i.formatMessage;return p.createElement(a.a,{className:"layout"},p.createElement(A.a,{history:s,intl:i,show:!0}),p.createElement("div",{className:f.a.noticeContent},p.createElement(C.a,{name:I.message,title:I.msg_list,intl:i}),p.createElement("div",{className:f.a.result},p.createElement("div",{className:f.a.content},p.createElement("div",{className:f.a.readed_delete},p.createElement("span",{onClick:this.resetNoticeRead},p.createElement(o.a,{type:"check",className:f.a.font}),r(y.a.readed)),p.createElement("span",{onClick:this.clearList.bind(this)},p.createElement("span",{className:w()("iconfont icon-lajitong",f.a.font)}),r(y.a.clear))),(n.noticeEntities||[]).map(function(t,n){return p.createElement(v,{data:t,key:n,getData:e.getData,history:s,intl:i})}))),n.count?p.createElement("div",{className:f.a.page},p.createElement(c.a,{total:n&&n.count,showTotal:function(e){return"".concat(r(y.a.total)," ").concat(e," ").concat(r(y.a.count))},onChange:this.onChange,current:this.state.pageNumber,pageSize:5})):null),p.createElement(k.a,{intl:i,bg:"#213571"}))}}]),t}(p.Component);t.default=Object(_.b)(function(e){var t=e.notice;return{notice:t.notice,query:t.query}},function(e){var t=e.common.resetNoticeRead,n=e.notice;return{getNoticeList:n.getNoticeList,deleteNotice:n.deleteNotice,resetNoticeRead:t,resetNoticeLists:n.resetNoticeLists,resetQuerys:e.search.resetQuerys}})(Object(x.d)(Q))}}]);
//# sourceMappingURL=notice.6816fd4b.chunk.js.map