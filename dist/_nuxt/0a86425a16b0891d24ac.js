(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{362:function(e,t,r){"use strict";var n="http://localhost:3000",l={memberSearch:n+"/member",login:"http://localhost:8080/api/login",drowpDownSelect:n+"/drowpDownSelect",memberDetail:n+"/memberDetail?userId="};t.a=l},436:function(e,t,r){"use strict";r.r(t);r(5);var n=r(85),l=r.n(n),c=r(362),o={name:"member-table",data:function(){return{search:"",headers:[{text:"Action",align:"center",sortable:!0,value:"action"},{text:"員工編號",align:"center",sortable:!0,value:"member_id"},{text:"角色等級",align:"center",sortable:!1,value:"member_level"},{text:"姓名",align:"center",sortable:!0,value:"member_name"}],member:[]}},methods:{setCriteria:function(param){console.log("setCriteria",param)},queryData:function(e){var t={path:"/audit/member/memberDetail",query:{userId:e}};this.$router.push(t)},queryRows:function(){var e=this;l.a.get(c.a.memberSearch).then((function(t){e.member=t.data})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){return e.loading=!1}))}},mounted:function(){this.queryRows()}},m=r(24),d=r(35),v=r.n(d),h=r(347),_=r(345),f=r(434),x=r(372),w=r(126),y=r(357),C=r(429),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("v-card-title",[e._v("\n      會員專區\n      "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.member,"items-per-page":5,"sort-by":["員工編號","姓名"],"sort-desc":[!1,!0],"multi-sort":"",search:e.search},scopedSlots:e._u([{key:"item",fn:function(t){return[r("tr",[r("td",{staticClass:"text-xs-right",attrs:{align:"center"}},[r("a",{on:{click:function(r){return e.queryData(t.item.member_id)}}},[r("v-icon",[e._v("mdi-lead-pencil")])],1)]),e._v(" "),r("td",{staticClass:"text-xs-right",attrs:{align:"center"}},[e._v("\n              "+e._s(t.item.member_id)+"\n          ")]),e._v(" "),r("td",{staticClass:"text-xs-right",attrs:{align:"center"}},[e._v("\n             "+e._s(t.item.member_level)+"\n          ")]),e._v(" "),r("td",{staticClass:"text-xs-right",attrs:{align:"center"}},[e._v("\n             "+e._s(t.item.member_name)+"\n          ")])])]}}])}),e._v(" "),r("v-divider")],1)],1)}),[],!1,null,null,null),D=component.exports;v()(component,{VCard:h.a,VCardText:_.b,VCardTitle:_.c,VDataTable:f.a,VDivider:x.a,VIcon:w.a,VSpacer:y.a,VTextField:C.a});var V={middleware:"authenticated",layout:"audit/template",components:{MemberTable:D},data:function(){return{memberSearch:{select:"",search:""},Select:{type:"角色類別",val:"CI"},memberType:[{type:"管理者",val:"S"},{type:"一般使用者",val:"A"}]}},methods:{addData:function(){this.$router.push("/audit/member/memberDetail")}}},S=r(349),k=r(355),T=(r(114),r(99)),I=Object(T.a)("flex"),$=r(356),j=Object(m.a)(V,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs11:"",sm5:"",lg3:""}},[t("v-btn",{attrs:{color:"primary",dark:""},on:{click:this.addData}},[this._v("新增")])],1)],1),this._v(" "),t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm12:"",lg12:""}},[t("member-table",{ref:"txnTable"})],1)],1)],1)],1)}),[],!1,null,"042dea4e",null);t.default=j.exports;v()(j,{VBtn:S.a,VContainer:k.a,VFlex:I,VLayout:$.a})}}]);