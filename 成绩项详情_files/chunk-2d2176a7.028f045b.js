(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2176a7"],{c741:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.polls,function(e){return n("div",{staticClass:"poll-banner"},[n("div",{staticClass:"box-card"},[n("div",{staticClass:"card-body card-green"},[n("div",[n("h2",[n("a",{attrs:{href:t.getPollLink(e),target:"_blank"}},[t._v(t._s(e.name)+"\n"+t._s(t.hasPollStarted(e)?"已经开始":"即将开始"))])]),n("p",[t._v(t._s(t.pollStartAt(e))+" ~ "+t._s(t.pollEndAt(e)))])]),n("a",{staticClass:"btn btn-default",attrs:{href:t.getPollLink(e),target:"_blank"}},[t._v("参加调研")])])])])}),0)},a=[],o=(n("96cf"),n("3b8d")),s=n("3fa7"),l={props:{data:{type:Object,required:!0}},data:function(){return{polls:[]}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e="".concat("https://poll-server.seiue.com","/polls/not-ended"),t.next=4,s["a"].$http.get(e);case 4:this.polls=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("error getting polls",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{getPollLink:function(t){return"".concat("https://poll.seiue.com","/student/polls/").concat(t._id)},hasPollStarted:function(t){return moment().isAfter(moment(t.startAt,"X"))},pollStartAt:function(t){return moment(t.startAt,"X").format("YYYY-MM-DD HH:mm")},pollEndAt:function(t){return t.endAt?moment(t.endAt,"X").format("YYYY-MM-DD HH:mm"):"待定"}}},c=l,i=n("2877"),u=Object(i["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports}}]);