(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{ejR0:function(e,t,a){e.exports={container:"container___2f2pr",wapper:"wapper___3TJwD",post:"post___ck1fw",loading:"loading___1V6zA",lincenses:"lincenses___w3Zx4","post-squares":"post-squares___1j0_a"}},p4jX:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("MVZn")),o=n(a("MebM")),l=a("MuoO"),d=r(a("dnEz")),i=r(a("LvDl")),p=r(a("UbMB")),c=a("Kvkj"),u=r(a("20nU")),m=r(a("ejR0")),f=u.default.gitalkOption,v=p.default.bind(m.default);class _ extends o.PureComponent{constructor(){super(...arguments),this.renderGitalk=(()=>{var e=this.props.post,t=new d.default((0,s.default)({},f,{title:e.title}));t.render(`gitalk-${e.id}`)})}componentDidMount(){var e=this.props,t=e.dispatch,a=e.match,n=a.params.number;t({type:"global/queryPost",payload:{number:n}})}componentWillReceiveProps(e){var t=this.props,a=t.dispatch,n=t.post;n.number&&+n.number!==+e.match.params.number&&a({type:"global/queryPost",payload:{number:e.match.params.number}})}componentWillUnmount(){this.props.dispatch({type:"global/updateState",payload:{post:{}}})}render(e){var t=e.post,a=e.prevPost,n=e.nextPost,r=e.loading,s=r||i.default.isEmpty(t);return o.default.createElement("div",{class:v("container")},o.default.createElement("div",{class:v("wapper")},o.default.createElement(c.Transition,{visible:!s,animation:"drop",duration:600,onShow:this.renderGitalk},o.default.createElement("div",{class:v("post")},o.default.createElement(c.PostBody,t),o.default.createElement(c.Reward,null),o.default.createElement("div",{class:v("lincenses")},o.default.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",rel:"noopener noreferrer",target:"_blank"},"\u7f72\u540d-\u975e\u5546\u4e1a\u6027\u4f7f\u7528-\u76f8\u540c\u65b9\u5f0f\u5171\u4eab 4.0 \u56fd\u9645")),o.default.createElement("div",{class:v("post-squares")},o.default.createElement(c.PostPV,a),o.default.createElement(c.PostPV,n)))),s&&o.default.createElement(c.Loading,{className:v("loading")})),!s&&t.id&&o.default.createElement("div",{id:`gitalk-${t.id}`}))}}var b=(0,l.connect)(e=>{var t=e.global,a=e.loading,n=t.post,r=t.prevPost,s=t.nextPost;return{post:n,prevPost:r,nextPost:s,loading:a.effects["global/queryPost"]}})(_);t.default=b}}]);