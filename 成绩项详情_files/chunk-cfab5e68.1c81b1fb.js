(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfab5e68"],{"0a39":function(e,s,t){"use strict";var a=t("dc66"),i=t.n(a);i.a},1016:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"header-tabs flex justify flex-1",class:e.theme&&"header-tabs_theme_"+e.theme},[e._l(e.items,function(s,a){return[t("a",{staticClass:"header-tab flex-1",class:{active:a===e.tabIndex},on:{click:function(t){return e.gotoPage(s)}}},[t("span",{staticClass:"tab-text"},[e._v(e._s(s.title))])])]})],2)},i=[],n=(t("a481"),t("c5f6"),{props:{items:{type:Array,default:function(){return[{title:this.$t("动态"),route:{name:"home"}},{title:this.$t("功能中心"),route:{name:"functionCenter"}}]}},tabIndex:{type:Number,default:0}},computed:{theme:function(){return Object({NODE_ENV:"production",VUE_APP_NAME:"chalk",VUE_APP_CLIENT_ID:"3",VUE_APP_UI_NAVBAR_HEIGHT:"50",VUE_APP_HOST_PLATFORM:"https://platform.seiue.com",VUE_APP_HOST_PASSPORT:"https://passport.seiue.com",VUE_APP_HOST_CHALK_NG:"https://chalkng.seiue.com",VUE_APP_HOST_CHALK:"https://api.seiue.com/chalk",VUE_APP_HOST_SSR:"https://ssr.seiue.com",VUE_APP_HOST_REPORTS:"https://reports.seiue.com",VUE_APP_HOST_EVENT:"https://event.seiue.com",VUE_APP_HOST_OPEN_API:"https://open.seiue.com",VUE_APP_HOST_ELECTIVE:"https://chalkng.seiue.com",VUE_APP_HOST_COURSE_DECLARE:"https://course-declaration-api.seiue.com",VUE_APP_HOST_POLL:"https://poll-server.seiue.com",VUE_APP_APP_ELECTIVE:"https://elective.seiue.com",VUE_APP_APP_ATHENA:"https://athena.seiue.com",VUE_APP_APP_COURSE_DECLARE:"https://course-declaration.seiue.com",VUE_APP_APP_POLL:"https://poll.seiue.com",VUE_APP_APP_STRATIFY:"https://fenban.seiue.com",VUE_APP_APP_LANAYA:"https://lanaya.seiue.com",VUE_APP_APP_C3:"https://chalk-c3.seiue.com",BASE_URL:"/"}).THEME}},methods:{gotoPage:function(e){this.$router.replace(e.route)}}}),r=n,c=(t("0a39"),t("2877")),l=Object(c["a"])(r,a,i,!1,null,"9f2a4192",null);s["a"]=l.exports},"12ca":function(e,s,t){"use strict";var a=t("8774"),i=t.n(a);i.a},3020:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[e.classes&&e.assessments?a("pending-self-assessments",{attrs:{classes:e.classes,assessments:e.assessments}}):e._e(),e.classes&&e.assessments?a("periodic-feedbacks",{attrs:{classes:e.classes,assessments:e.assessments}}):e._e(),a("div",{staticClass:"grade-records"},[e._l(e.timelines,function(e){return a("grade-record",{key:e.id,attrs:{timeline:e}})}),a("infinite-loading",{attrs:{"on-infinite":e.loadMoreTimelines}},[a("template",{slot:"no-more"},[e.timelines&&!e.timelines.length?a("empty-alert",{attrs:{text:"居然没有动态？！"}},[a("img",{attrs:{src:t("bf61")}})]):a("span",{staticStyle:{color:"#999"}},[e._v(e._s(e.$t("没有更多了")))])],1)],2)],2)],1)},i=[],n=t("5fdf"),r=t("bbff"),c=t("c75f"),l=t("1016"),d=t("4a54"),o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("router-link",{staticClass:"card grade-card",attrs:{to:e.getLink}},[t("div",{staticClass:"grade-card__header"},[t("div",{staticClass:"flex justify grade-card__title-wrap"},[t("h3",{staticClass:"grade-card__title flex-1"},[e._v(e._s(e.className))]),t("label",{staticClass:"label",class:e.computeTimelineType.labelClass},[e._v(e._s(e.computeTimelineType.name))])]),t("div",{staticClass:"flex justify"},[t("small",{staticClass:"grade-card__course-dimension-name flex-1"},[e.isFinalGrade?[e._v(e._s(e.$t("总成绩")))]:[e._v(e._s(e.timeline.dimension_name)),e.shouldShowItemName?[t("i",{staticClass:"icon icon-caret-right"}),e._v(e._s(e.timeline.assessment_item_name))]:e._e()]],2),t("small",{staticClass:"grade-card__time"},[e._v(e._s(e.computeDate))])])]),t("div",{staticClass:"grade-card__body"},[e.timeline.type===e.TIMELINE_TYPE.assessmentItemScorePublished?[t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("得分")))]),t("div",{staticClass:"grade-card__stats"},[e.isScoreItem?[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e.timeline.score))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e.timeline.full_score))])]:[t("se-rate",{attrs:{value:e.timeline.score,readonly:""}})]],2)]),e.shouldShowRank?t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("排名")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e._f("placeholder")(e.timeline.rank,"-")))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e._f("placeholder")(e.timeline.rank_base,"-")))])])]):e._e()]:e._e(),e.timeline.type===e.TIMELINE_TYPE.assessmentItemScoreWithdrawn?void 0:e._e(),e.timeline.type===e.TIMELINE_TYPE.assessmentItemScoreUpdated?[t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("得分")))]),t("div",{staticClass:"grade-card__stats"},[e.isScoreItem?[e._v(e._s(e.timeline.score))]:[t("se-rate",{attrs:{value:e.timeline.score,readonly:""}})]],2)]),e.shouldShowRank?t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("排名")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e._f("placeholder")(e.timeline.rank,"-")))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e._f("placeholder")(e.timeline.rank_base,"-")))])])]):e._e()]:e._e(),e.timeline.type===e.TIMELINE_TYPE.gradePublished?[t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("得分")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e.timeline.grade_score))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e.timeline.grade_full_score))])])]),e.shouldShowRank?t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("排名")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e._f("placeholder")(e.timeline.grade_rank,"-")))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e._f("placeholder")(e.timeline.grade_rank_base,"-")))])])]):e._e()]:e._e(),e.timeline.type===e.TIMELINE_TYPE.gradeWithdrawn?void 0:e._e(),e.timeline.type===e.TIMELINE_TYPE.gradeUpdated?[t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("得分")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e.timeline.grade_score))])])]),e.shouldShowRank?t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("排名")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e._f("placeholder")(e.timeline.grade_rank,"-")))]),t("small",{staticClass:"grade-card__small-num"},[e._v("/ "+e._s(e._f("placeholder")(e.timeline.grade_rank_base,"-")))])])]):e._e()]:e._e(),e.timeline.type===e.TIMELINE_TYPE.plusAndMinusScorePublished?[t("div",{staticClass:"flex center-top column",staticStyle:{"margin-right":"24px",flex:"1"}},[e._l(e.timeline.pm_scores.slice(0,1),function(s,a){return t("add-subtract-label",{key:a,staticClass:"grade-add-subtract-label",staticStyle:{padding:"0px 5px"},attrs:{name:e.filterRemark(e.timeline,s.item_score_remark),score:s.item_score}})}),e.timeline.pm_scores.length>1?t("small",{staticStyle:{"font-size":"12px",color:"#999","margin-top":"6px"}},[e._v("等"+e._s(e.timeline.pm_scores.length)+"个标签")]):e._e()],2),t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("得分")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e.timeline.score))])])]),e.shouldShowRank?t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("排名")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e._f("placeholder")(e.timeline.rank,"-")))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e._f("placeholder")(e.timeline.rank_base,"-")))])])]):e._e()]:e._e(),e.timeline.type===e.TIMELINE_TYPE.plusAndMinusScoreDeleted?[t("div",{staticClass:"flex center-top column",staticStyle:{"margin-right":"24px",flex:"1"}},[e._l(e.timeline.pm_scores.slice(0,1),function(s,a){return t("add-subtract-label",{key:a,staticClass:"grade-add-subtract-label",staticStyle:{padding:"0px 5px",background:"#EEE",color:"#666"},attrs:{name:e.filterRemark(e.timeline,s.item_score_remark),score:s.item_score}})}),e.timeline.pm_scores.length>1?t("small",{staticStyle:{"font-size":"12px",color:"#999","margin-top":"6px"}},[e._v("等"+e._s(e.timeline.pm_scores.length)+"个标签")]):e._e()],2),t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("得分")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e.timeline.score))])])]),e.shouldShowRank?t("div",{staticClass:"grade-card__info"},[t("span",{staticClass:"grade-card__subtitle"},[e._v(e._s(e.$t("排名")))]),t("div",{staticClass:"grade-card__stats"},[t("span",{staticClass:"grade-card__big-num"},[e._v(e._s(e._f("placeholder")(e.timeline.rank,"-")))]),t("small",{staticClass:"grade-card__small-num"},[e._v(" / "+e._s(e._f("placeholder")(e.timeline.rank_base,"-")))])])]):e._e()]:e._e()],2)])},u=[],m=(t("6762"),t("2fdb"),t("ff55")),p={components:{AddSubtractLabel:m["a"]},mixins:[r["b"]],props:{timeline:Object},data:function(){return{isMobile:!0}},computed:{isAssessmentItem:function(){return _.includes(this.timeline.type,"assessment_item_score")},isPlusAndMinus:function(){return _.includes(this.timeline.type,"plus_and_minus")},isFinalGrade:function(){return _.includes(this.timeline.type,"grade")},shouldShowItemName:function(){return!this.isAttendance&&!this.isPlusAndMinus&&this.timeline.assessment_item_name}}},f=p,v=(t("12ca"),t("2877")),h=Object(v["a"])(f,o,u,!1,null,"a175b654",null),g=h.exports,C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"feedbacks"},[e.classesWithNewReviews&&e.classesWithNewReviews.length?t("div",{staticClass:"cbox full-x np"},[t("div",{staticClass:"feedbacks__replies-count flex justify",on:{click:function(s){e.newRepliesExpanded=!e.newRepliesExpanded}}},[t("span",{staticClass:"pointer"},[e._v(e._s(e.$t("{num}条新的教师回复",{num:e.classesWithNewReviews.length})))]),t("i",{staticClass:"icon",class:e.newRepliesExpanded?"icon-angle-up":"icon-angle-down"})]),e.newRepliesExpanded?t("div",{staticClass:"feedbacks__replies-list"},e._l(e.classesWithNewReviews,function(s){return t("router-link",{key:s.id,staticClass:"feedbacks__reply flex justify",attrs:{to:e.getClassLink(s)}},[t("div",{staticClass:"feedbacks__reply-class ellipsis"},[e._v(e._s(s.fullName))]),t("div",{staticClass:"flex left"},[t("div",{staticClass:"feedbacks__reply-class-count flex center"},[e._v(e._s(s.new_teacher_review_count))]),t("i",{staticClass:"icon icon-angle-right",staticStyle:{color:"#999","margin-left":"8px"}})])])}),1):e._e()]):e._e(),e.todoItems&&e.todoItems.length?t("div",{staticClass:"cbox full-x np"},[t("div",{staticClass:"feedbacks__title"},[e._v(e._s(e.$t("待定期自评班级（{num}）",{num:e.todoItems.length})))]),t("div",{staticClass:"feedbacks__classes"},e._l(e.itemsToDisplay,function(s){return t("router-link",{key:s.id,staticClass:"feedbacks__class flex justify",attrs:{to:e.getItemLink(s)}},[t("div",{staticClass:"feedbacks__item"},[t("div",{staticClass:"feedbacks__item-name ellipsis"},[e._v(e._s(s.name))]),t("div",{staticClass:"feedbacks__class-name ellipsis"},[e._v(e._s(s.class.fullName))])]),t("div",{staticClass:"flex left"},[e.daysBeforeDue(s)<7?t("div",{staticClass:"feedbacks__deadline flex center",class:{feedbacks__deadline_overdue:e.daysBeforeDue(s)<0}},[e.daysBeforeDue(s)<0?[e._v(e._s(e.$t("已过期")))]:[e._v(e._s(e.$t("本周到期")))]],2):e._e(),t("i",{staticClass:"icon icon-angle-right",staticStyle:{color:"#999","margin-left":"8px"}})])])}),1),e.todoItems&&e.todoItems.length>3?t("div",{staticClass:"feedbacks__expand-items",on:{click:function(s){e.itemsExpanded=!e.itemsExpanded}}},[t("span",[e._v(e._s(e.itemsExpanded?"收起":"展开全部"))]),t("i",{staticClass:"icon",class:e.itemsExpanded?"icon-angle-up":"icon-angle-down",staticStyle:{"margin-left":"5px"}})]):e._e()]):e._e()])},b=[],y=t("5fce"),E={mixins:[y["a"]],data:function(){return{itemsExpanded:!1}},computed:{itemsToDisplay:function(){return this.todoItems?this.itemsExpanded?this.todoItems:_.take(this.todoItems,3):[]}},methods:{getItemLink:function(e){return{name:"studentClassGradeItem",params:{student_id:this.currentStudent.id,class_id:e.class.id,id:e.id}}},getClassLink:function(e){return{name:"studentClassGradeItem",params:{student_id:this.currentStudent.id,class_id:e.id,id:e.firstItemWithNewReview.id}}}}},P=E,w=(t("600b"),Object(v["a"])(P,C,b,!1,null,"1c15e68e",null)),k=w.exports,x={components:{HeaderTabs:l["a"],PendingSelfAssessments:d["a"],GradeRecord:g,PeriodicFeedbacks:k},mixins:[r["a"],c["a"]],data:function(){return{query:{assessment_type:n["TYPE"].grade}}},computed:{headerTabItems:function(){return[{title:this.$t("成绩动态"),route:{name:"studentRecentGrade"}},{title:this.$t("全部成绩"),route:{name:"studentAllGrades"}}]}}},A=x,I=Object(v["a"])(A,a,i,!1,null,null,null);s["default"]=I.exports},"4a54":function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"card pending-self-rated",class:{card_rec:e.$isMobileApp}},[e.items.length?t("div",{staticClass:"card",staticStyle:{"margin-bottom":"8px"}},[t("div",{staticClass:"pending-self-rated__header"},[e._v("待自评项目 "+e._s(e.items.length))]),t("div",{staticClass:"pending-self-rated__body"},e._l(e.items,function(s){return t("router-link",{key:s.id,staticClass:"pending-self-rated__item",attrs:{to:e.getItemLink(s)}},[t("h3",{staticClass:"pending-self-rated__item-name"},[e._v(e._s(s.name))]),t("small",{staticClass:"pending-self-rated__course-dimension-name"},[e._v(e._s(s.class&&s.class.fullName)),t("i",{staticClass:"icon icon-caret-right"}),e._v(e._s(s.dimension.name))]),e.$isMobileApp?t("div",{staticClass:"pending-self-rated__goto-rate"},[e._v("去自评  "),t("i",{staticClass:"icon icon-angle-right"})]):e._e()])}),1)]):e._e()])},i=[],n=(t("7514"),t("5d73")),r=t.n(n),c=(t("96cf"),t("3b8d")),l=t("0fea"),d={props:{classes:{type:Array,required:!0},assessments:{type:Array,required:!0}},data:function(){return{items:[]}},computed:{currentStudent:function(){return l["a"].identity.reflection}},created:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var s,t,a,i,n,c,l=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(s=!0,t=!1,a=void 0,e.prev=3,i=function(){var e=c.value,s=!0,t=!1,a=void 0;try{for(var i,n=r()(e.dimensions);!(s=(i=n.next()).done);s=!0){var d=i.value,o=!0,u=!1,m=void 0;try{for(var p,f=r()(d.assessment_items);!(o=(p=f.next()).done);o=!0){var v=p.value;v.option_self_assessment&&!v.has_owner_scores&&"submitted"!==e.status&&"published"!==e.status&&(v.dimension=d,v.class=_.find(l.classes,function(s){return s.id===e.scope_id}),l.items.push(v))}}catch(h){u=!0,m=h}finally{try{o||null==f.return||f.return()}finally{if(u)throw m}}}}catch(h){t=!0,a=h}finally{try{s||null==n.return||n.return()}finally{if(t)throw a}}},n=r()(this.assessments);!(s=(c=n.next()).done);s=!0)i();e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](3),t=!0,a=e.t0;case 12:e.prev=12,e.prev=13,s||null==n.return||n.return();case 15:if(e.prev=15,!t){e.next=18;break}throw a;case 18:return e.finish(15);case 19:return e.finish(12);case 20:case"end":return e.stop()}},e,this,[[3,8,12,20],[13,,15,19]])}));function s(){return e.apply(this,arguments)}return s}(),methods:{getItemLink:function(e){var s=this.$isMobileApp?"studentClassGradeItem":"commonStudentClassGradeItem";return{name:s,params:{student_id:this.currentStudent.id,class_id:e.class.id,id:e.id}}}}},o=d,u=(t("fa87"),t("2877")),m=Object(u["a"])(o,a,i,!1,null,"d55b7d76",null);s["a"]=m.exports},"5fce":function(e,s,t){"use strict";var a=t("5d73"),i=t.n(a),n=(t("7514"),t("ac6a"),t("96cf"),t("3b8d")),r=t("0fea");s["a"]={props:{classes:{type:Array,required:!0},assessments:{type:Array,required:!0}},data:function(){return{newRepliesExpanded:!1,todoItems:null,classesWithNewReviews:[]}},computed:{totalNewReviewCount:function(){return _.sumBy(this.classesWithNewReviews,"new_teacher_review_count")},currentStudent:function(){return r["a"].identity.reflection}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.newReplyCount=_.reduce(this.assessments,function(e,s){return e+s.new_teacher_review_count||0},0),this.todoItems=[],this.assessments.forEach(function(e){var t=_.find(s.classes,{id:e.scope_id});t.new_teacher_review_count=0;var a=!0,n=!1,r=void 0;try{for(var c,l=i()(e.dimensions);!(a=(c=l.next()).done);a=!0){var d=c.value;if(d.isQuestionType){var o=!0,u=!1,m=void 0;try{for(var p,f=i()(d.assessment_items);!(o=(p=f.next()).done);o=!0){var v=p.value,h=+v.new_teacher_review_count;t.new_teacher_review_count+=h,h&&(t.firstItemWithNewReview=t.firstItemWithNewReview||v),v.has_owner_scores||(v.class=t,s.todoItems.push(v))}}catch(g){u=!0,m=g}finally{try{o||null==f.return||f.return()}finally{if(u)throw m}}}}}catch(g){n=!0,r=g}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}t.new_teacher_review_count>0&&s.classesWithNewReviews.push(t)});case 3:case"end":return e.stop()}},e,this)}));function s(){return e.apply(this,arguments)}return s}(),methods:{daysBeforeDue:function(e){return moment(e.end_in).diff(moment(),"days",!0)}}}},"600b":function(e,s,t){"use strict";var a=t("b97b"),i=t.n(a);i.a},8774:function(e,s,t){},b97b:function(e,s,t){},bdc1:function(e,s,t){},bf61:function(e,s,t){e.exports=t.p+"img/grades.9f448ba3.svg"},c75f:function(e,s,t){"use strict";t("96cf");var a=t("3b8d"),i=t("5fdf"),n=t("d1b0"),r=t("170a"),c=t("0fea");s["a"]={data:function(){return{classes:null,assessments:null}},computed:{currentStudent:function(){return c["a"].identity.reflection}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n["default"].findAllForStudent(this.currentStudent.id,{semester_id:r["default"].current.id});case 2:if(this.classes=e.sent,this.classes.length){e.next=7;break}e.t0=[],e.next=10;break;case 7:return e.next=9,i["default"].findAllGradeTyped({scope_id:_.map(this.classes,"id").join(","),scope_type:"class","per-page":99999,is_template:0,expand:["dimensions.assessment_items","dimensions.assessment_items.new_teacher_review_count","dimensions.assessment_items.has_owner_scores"].join(",")});case 9:e.t0=e.sent;case 10:this.assessments=e.t0;case 11:case"end":return e.stop()}},e,this)}));function s(){return e.apply(this,arguments)}return s}()}},dc66:function(e,s,t){},fa87:function(e,s,t){"use strict";var a=t("bdc1"),i=t.n(a);i.a}}]);