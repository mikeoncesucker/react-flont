(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{757:function(e,t,n){"use strict";n(774);var a=n(777),o=(n(173),n(15)),c=(n(763),n(765)),s=(n(766),n(767)),i=(n(775),n(776)),r=n(29),l=n(30),u=n(32),m=n(31),d=n(238),p=n(33),_=n(0),h=n(55),g=n(758),f=n.n(g),b=n(4),y=n.n(b),N=n(34),v=n.n(N),E=n(112),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).notice_timer=void 0,n.getUnreadNoticeList=function(){var e=v.a.get("local_language"),t=n.props,a=t.getUnreadNoticeList,o=t.getAppCodeList;a({language:"zh"===e?"chinese":"english",cb:null}),o({cb:null})},n.resetNoticeRead=function(){(0,n.props.resetNoticeRead)({cb:function(){n.getUnreadNoticeList()}})},n.goNoticeList=function(){n.props.history.push("/notice")},n.toDetail=function(e){n.props.history.push({pathname:"/notice/detail",state:{id:e}})},n.list=function(){var e=n.props,t=e.unreadNoticeList,a=e.appCodeList,r=e.intl,l=r.formatMessage,u=["#02B583","#08ABF8","#FFC000","#FC5B5B"];return t&&!t.count?_.createElement("div",{className:f.a.content},_.createElement("div",{className:f.a.notice_kong},l(E.a.no_message)),_.createElement(s.a,{className:f.a.listFooter},_.createElement(i.a,{style:{textAlign:"right",cursor:"pointer"},span:24,onClick:n.goNoticeList},l(E.a.read_all)," >"))):_.createElement("div",{className:f.a.content},_.createElement("div",{className:f.a.listBox},t&&t.noticeEntities.map(function(e,t){return t<5&&_.createElement(s.a,{className:f.a.noticItem,key:t,onClick:n.toDetail.bind(Object(d.a)(n),e.id)},_.createElement(i.a,{span:1},_.createElement(c.a,{color:u[e.level]})),_.createElement(i.a,{span:23},_.createElement(i.a,{className:y()(f.a.title,"haveRead"===e.status?f.a.readed:f.a.title_unread),span:24},e.title),_.createElement("p",{className:y()(f.a.txt,"haveRead"===e.status?f.a.readed:f.a.txt_unread)},e.message),_.createElement(s.a,{className:f.a.noticeBtm},_.createElement(i.a,{span:12,className:f.a.origin},l(E.a.origin),":",a.filter(function(t){return t.code===e.appCode}).map(function(e){return"zh"===r.locale?e.name:e.english})),_.createElement(i.a,{span:12,className:f.a.noticeTime},e.occurTime))))}),_.createElement(s.a,{className:f.a.listFooter},_.createElement(i.a,{style:{textAlign:"left",cursor:"pointer"},span:12},_.createElement(o.a,{type:"check",className:f.a.font}),_.createElement("span",{onClick:n.resetNoticeRead},l(E.a.readed))),_.createElement(i.a,{style:{textAlign:"right",cursor:"pointer"},span:12,onClick:n.goNoticeList},l(E.a.read_all)," >"))))},n.state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getUnreadNoticeList(),this.notice_timer=setInterval(function(){e.getUnreadNoticeList()},6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.notice_timer),this.props.resetNoticeLists()}},{key:"render",value:function(){var e=this.props,t=e.unreadNoticeList,n=e.show,o=_.createElement("span",{className:y()("iconfont icon-notice",f.a.ml18,f.a.icon_notice)},t&&t.count?t.count<=99?_.createElement("label",{className:f.a.notice_num},t.count):_.createElement("label",{className:f.a.notice_num},"99+"):null);return _.createElement("div",null,n?o:_.createElement(a.a,{placement:"bottomLeft",content:this.list(),trigger:"hover"},o))}}]),t}(_.Component);t.a=Object(h.b)(function(e){return{unreadNoticeList:e.common.unreadNoticeList,appCodeList:e.search.appCodeList}},function(e){var t=e.common,n=t.getUnreadNoticeList,a=t.resetNoticeRead,o=t.resetNoticeLists;return{getUnreadNoticeList:n,getAppCodeList:e.search.getAppCodeList,resetNoticeRead:a,resetNoticeLists:o}})(k)},758:function(e,t,n){e.exports={icon_notice:"src-components-news-style-module__icon_notice--1apwh",notice_num:"src-components-news-style-module__notice_num--1LpjW","ant-popover-inner-content":"src-components-news-style-module__ant-popover-inner-content--1xqbl",content:"src-components-news-style-module__content--2eOU0",notice_kong:"src-components-news-style-module__notice_kong--J6ON5",listFooter:"src-components-news-style-module__listFooter--2G9Na",noticItem:"src-components-news-style-module__noticItem--3meZw",title:"src-components-news-style-module__title--KoMJa",title_unread:"src-components-news-style-module__title_unread--1FyOT",readed:"src-components-news-style-module__readed--m0ljQ",txt_unread:"src-components-news-style-module__txt_unread--2ydLy",txt:"src-components-news-style-module__txt--21dUm",noticeBtm:"src-components-news-style-module__noticeBtm--2DUkT",noticeTime:"src-components-news-style-module__noticeTime--1nZkX",origin:"src-components-news-style-module__origin--2tQb5",font:"src-components-news-style-module__font--NyWzg"}},759:function(e,t,n){"use strict";n(768);var a=n(782),o=(n(773),n(772)),c=(n(173),n(15)),s=(n(174),n(40)),i=n(29),r=n(30),l=n(32),u=n(31),m=n(33),d=(n(769),n(771)),p=n(0),_=n(55),h=n(34),g=n.n(h),f=n(760),b=n.n(f),y=n(112),N=d.a.confirm,v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).logout=function(){var e=n.props,t=e.logout,a=e.history,o=g.a.get("accessToken"),c=n.props.intl.formatMessage;N({title:c(y.a.confirm_txt),okText:c(y.a.btn_sure),cancelText:c(y.a.btn_cancel),onOk:function(){t({params:{accessToken:o},cb:function(e,t){t&&"200"===t.status.code?(g.a.remove("accessToken"),s.a.success(c(y.a.message_back)),a.push("/login")):(g.a.remove("accessToken"),a.push("/login"))}})},onCancel:function(){}})},n.state={},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.intl.formatMessage,n=this.props,s=n.user,i=n.show,r=s?s.data.user.account:"",l=p.createElement(o.b,{className:b.a.menu,selectedKeys:[]},p.createElement(o.b.Item,{key:"password",onClick:function(){e.props.history.push("/password")}},p.createElement(c.a,{type:"lock"}),t(y.a.change_psw)),p.createElement(o.b.Item,{key:"logout",onClick:this.logout},p.createElement(c.a,{type:"logout"}),t(y.a.logout))),u=p.createElement("label",{className:"".concat(b.a.action," ").concat(b.a.account)},p.createElement("span",{className:"iconfont icon-principal"}),p.createElement("span",{className:b.a.text_hide},r),p.createElement("span",{className:"iconfont icon-down"}));return p.createElement("div",null,i?u:p.createElement(a.a,{overlay:l},u))}}]),t}(p.Component);t.a=Object(_.b)(function(e){return{user:e.user.user}},function(e){return{logout:e.user.logout}})(v)},760:function(e,t,n){e.exports={action:"src-components-center-style-module__action--1i1TO",text_hide:"src-components-center-style-module__text_hide--1GPmT",account:"src-components-center-style-module__account--3kvlp"}},761:function(e,t,n){"use strict";var a=n(29),o=n(30),c=n(32),s=n(31),i=n(33),r=n(0),l=n(759),u=n(764),m=n.n(u),d=n(757),p=n(139),_=n(113),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.intl,o=e.show;return r.createElement("header",{className:m.a.header},r.createElement(_.b,{to:"/dashboard"},r.createElement("img",{alt:"logo",src:n(333)})),r.createElement("div",{className:m.a.right},r.createElement(p.a,{styles:{color:"#fff",fontSize:"14px",marginRight:"18px"}}),r.createElement(d.a,{history:t,intl:a,show:o}),r.createElement(l.a,{history:t,intl:a})))}}]),t}(r.Component);t.a=h},762:function(e,t,n){"use strict";n(783);var a=n(787),o=n(29),c=n(30),s=n(32),i=n(31),r=n(33),l=n(0),u=n(859),m=n(113),d=n(112),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={},n}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.name,o=e.intl,c=e.title,s=e.jump,i=o.formatMessage;return l.createElement("div",null,l.createElement("div",{className:t.navbar},l.createElement(a.a,null,l.createElement(a.a.Item,null,l.createElement(m.b,{to:"/dashboard"},i(d.a.portal))),l.createElement(a.a.Item,null,s?l.createElement(m.b,{to:"/".concat(s)},i(n)):i(n))),l.createElement("h2",{className:"title"},i(c||n))),l.createElement("div",{style:{border:"10px solid #f1f3f9"}}))}}]),t}(l.Component);t.a=Object(u.a)(function(e){return{navbar:{height:"98px",padding:"16px 0 0 47px",backgroundColor:"#fff",color:"#5E616F","& .title":{fontSize:"20px",color:"#33353D",lineHeight:"60px"},"& .ant-breadcrumb .ant-breadcrumb-link a":{color:"#5E616F"},"& .ant-breadcrumb .ant-breadcrumb-link a:hover":{color:"#08ABF8"}}}})(p)},764:function(e,t,n){e.exports={header:"src-components-header_bar-style-module__header--2Q1Ap",right:"src-components-header_bar-style-module__right--3pigd"}},786:function(e,t,n){e.exports={message:"src-routes-notice-style-module__message--5olnN",result:"src-routes-notice-style-module__result--3a-NC",content:"src-routes-notice-style-module__content--3ObQ0",readed_delete:"src-routes-notice-style-module__readed_delete--TqjTJ",font:"src-routes-notice-style-module__font--3YPe4",notice_item:"src-routes-notice-style-module__notice_item--1s6GM",delete:"src-routes-notice-style-module__delete--pcIiq",notice_item_title:"src-routes-notice-style-module__notice_item_title--1No-B",notice_item_title_readed:"src-routes-notice-style-module__notice_item_title_readed--SchMd",notice_item_desc:"src-routes-notice-style-module__notice_item_desc--29aBe",item_create_at:"src-routes-notice-style-module__item_create_at--2WhSV",item_source:"src-routes-notice-style-module__item_source--1GhKw",item_warn:"src-routes-notice-style-module__item_warn--2xsrt",detail_item:"src-routes-notice-style-module__detail_item--2P_6A",detail_title:"src-routes-notice-style-module__detail_title--P2P7J",detail_des:"src-routes-notice-style-module__detail_des--3Q0ZQ",source_time:"src-routes-notice-style-module__source_time--GqPqa",deletes:"src-routes-notice-style-module__deletes--3iI7L",page:"src-routes-notice-style-module__page--2ZxHI",footer:"src-routes-notice-style-module__footer--1l3bp"}},861:function(e,t,n){"use strict";n.r(t);n(796);var a=n(797),o=(n(173),n(15)),c=(n(174),n(40)),s=n(29),i=n(30),r=n(32),l=n(31),u=n(33),m=(n(778),n(780)),d=(n(769),n(771)),p=n(0),_=n(55),h=(n(763),n(765)),g=n(786),f=n.n(g),b=n(112),y=["#02B583","#08ABF8","#FFC000","#FC5B5B"],N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).delete=function(e,t){t.stopPropagation();var a=n.props,o=a.getUnreadNoticeList,c=a.putDeleteById,s=a.intl;c({id:e,cb:function(){n.props.getData(),o({language:"zh"===s.locale?"chinese":"english",cb:null})}})},n.toDetail=function(e,t){t.preventDefault(),n.props.history.push({pathname:"notice/detail",state:{id:e}})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.appCodeList,a=e.intl,o=a.formatMessage;return p.createElement("div",{onClick:this.toDetail.bind(this,t.id),className:f.a.notice_item},p.createElement("div",{className:"haveRead"===t.status?f.a.notice_item_title_readed:f.a.notice_item_title},p.createElement(h.a,{color:y[t.level]})," ",t.title||""),p.createElement("div",{className:f.a.notice_item_desc},p.createElement("div",{className:"haveRead"===t.status?"":f.a.item_warn},t.message||""),p.createElement("div",{className:f.a.item_source},o(b.a.origin),": ",n.filter(function(e){return e.code===t.appCode}).map(function(e){return"zh"===a.locale?e.name:e.english})),p.createElement("div",{className:f.a.item_create_at},t.occurTime),p.createElement("div",{className:f.a.delete,onClick:this.delete.bind(this,t.id)},o(b.a.delete))))}}]),t}(p.PureComponent),v=Object(_.b)(function(e){return{appCodeList:e.search.appCodeList}},function(e){return{putDeleteById:e.notice.putDeleteById,getUnreadNoticeList:e.common.getUnreadNoticeList}})(N),E=n(762),k=n(761),O=n(34),j=n.n(O),w=n(4),L=n.n(w),C=n(44),x=Object(C.c)({message:{id:"message",defaultMessage:"Message"},msg_list:{id:"msg_list",defaultMessage:"Message List"},notice_null:{id:"notice_null",defaultMessage:"No news to be cleared"}}),T=d.a.confirm,D=m.a.Footer,B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).getData=function(){var e=n.props.getNoticeList,t=n.state.pageNumber;e({query:{language:"zh"===j.a.get("local_language")?"chinese":"english",pageNumber:t,pageSize:5},cb:function(e,t){}})},n.onChange=function(e){n.setState({pageNumber:e},function(){n.getData()})},n.resetNoticeRead=function(){(0,n.props.resetNoticeRead)({cb:function(){n.getData()}})},n.clearList=function(){var e=n.props,t=e.deleteNotice,a=e.notice,o=e.intl.formatMessage;a.count?T({title:"".concat(o(b.a.confirm_reset_notice),"?"),okText:o(b.a.btn_sure),cancelText:o(b.a.btn_cancel),onOk:function(){t({cb:null})},onCancel:function(){}}):c.a.warn(o(x.notice_null))},n.state={pageNumber:1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.props.resetQuerys()}},{key:"componentWillUnmount",value:function(){(0,this.props.resetNoticeLists)()}},{key:"render",value:function(){var e=this,t=this.props,n=t.notice,c=t.history,s=t.intl,i=s.formatMessage;return p.createElement(m.a,{className:"layout"},p.createElement(k.a,{history:c,intl:s,show:!0}),p.createElement("div",{style:{minHeight:"".concat(window.innerHeight-64-32,"px"),backgroundColor:"#fff"}},p.createElement(E.a,{name:x.message,title:x.msg_list,intl:s}),p.createElement("div",{className:f.a.result},p.createElement("div",{className:f.a.content},p.createElement("div",{className:f.a.readed_delete},p.createElement("span",{onClick:this.resetNoticeRead},p.createElement(o.a,{type:"check",className:f.a.font}),i(b.a.readed)),p.createElement("span",{onClick:this.clearList.bind(this)},p.createElement("span",{className:L()("iconfont icon-lajitong",f.a.font)}),i(b.a.clear))),(n.noticeEntities||[]).map(function(t,n){return p.createElement(v,{data:t,key:n,getData:e.getData,history:c,intl:s})}))),n.count?p.createElement("div",{className:f.a.page},p.createElement(a.a,{total:n&&n.count,showTotal:function(e){return"".concat(i(b.a.total)," ").concat(e," ").concat(i(b.a.count))},onChange:this.onChange,current:parseInt(this.state.pageNumber),pageSize:5})):null),p.createElement(D,{className:f.a.footer},"Copyright \xa9\ufe0f 2019 ",i(b.a.corpright)))}}]),t}(p.Component);t.default=Object(_.b)(function(e){return{notice:e.notice.notice}},function(e){var t=e.common.resetNoticeRead,n=e.notice;return{getNoticeList:n.getNoticeList,deleteNotice:n.deleteNotice,resetNoticeRead:t,resetNoticeLists:n.resetNoticeLists,resetQuerys:e.search.resetQuerys}})(Object(C.d)(B))}}]);
//# sourceMappingURL=notice.cfc98c9c.chunk.js.map