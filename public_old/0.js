(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,s){var a=s(477);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(52)(a,n);a.locals&&(e.exports=a.locals)},202:function(e,t,s){var a=s(481);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(52)(a,n);a.locals&&(e.exports=a.locals)},208:function(e,t,s){"use strict";var a=s(276),n=s.n(a);function o(e,t,s,a,n,o,r){try{var i=e[o](r),l=i.value}catch(e){return void s(e)}i.done?t(l):Promise.resolve(l).then(a,n)}var r,i,l={name:"deleteConfirm",data:function(){return{password:"",confirm_password:"",test:!1}},computed:{showConfirmDelete:{set:function(e){this.test=e},get:function(){return this.$store.getters.SHOWDELETE}}},methods:{deleteThis:(r=n.a.mark(function e(){var t,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("stockCaModule/DELETE_DATA_STOCK",{array:this.$store.getters["stockCaModule/GET_STOCK_DATA_DELETE"],password:this.password});case 2:return t=this.$store.getters["stockCaModule/GET_DATA_STOCK_ORDER"],s=this.$store.getters["stockCaModule/GET_STOCK_DATA"],e.next=6,this.$store.dispatch("stockCaModule/GET_DATA_STOCK_FROM_SERVER",{page:s?s.current_page:1,searchBrand:t.searchBrand,searchNumber:t.searchNumber,orderName:t.name,orderBy:t.by});case 6:this.$store.dispatch("GET_DELETE_MODULE",!1);case 7:case"end":return e.stop()}},e,this)}),i=function(){var e=this,t=arguments;return new Promise(function(s,a){var n=r.apply(e,t);function i(e){o(n,s,a,i,l,"next",e)}function l(e){o(n,s,a,i,l,"throw",e)}i(void 0)})},function(){return i.apply(this,arguments)}),clearDelete:function(){this.$store.dispatch("GET_DELETE_MODULE",!1),this.password="",this.confirm_password=""}}},c=(s(476),s(13)),d=Object(c.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-prompt",{attrs:{"vs-title":"Confirm password","vs-accept-text":"Delete","vs-active":e.showConfirmDelete},on:{"vs-cancel":e.clearDelete,"vs-accept":e.deleteThis,"vs-close":e.clearDelete,"update:vsActive":function(t){e.showConfirmDelete=t},"update:vs-active":function(t){e.showConfirmDelete=t}}},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),e._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password"},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}}),e._v(" "),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))])],1)},[],!1,null,"6f6dc60d",null).exports,u=s(132),p=s.n(u),m=s(412),v=(s(478),s(277)),h=s.n(v),_={name:"formElse",data:function(){return{obj_store:{brand_name:"Paste desc to search",description:"Paste desc to search",parts_number:"Paste desc to search",qty:"Qty"}}},props:{table_store:Array},methods:{saveChanges:function(){this.$emit("saveChanges",this.table_store)},deleteRow:function(e){this.table_store.splice(e,1);for(var t=0;t<this.table_store.length;t++)this.table_store[t].id=t},addRow:function(){this.table_store.push({id:null,brand_name:"",description:"",parts_number:"",qty:"",stock_qty:"0"});for(var e=0;e<this.table_store.length;e++)this.table_store[e].id=e}}},f=Object(c.a)(_,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vs-button",{attrs:{color:"success",type:"relief",icon:"icon-save","icon-pack":"feather"},on:{click:e.saveChanges}},[e._v("Save Changes")]),e._v(" "),s("vs-table",{staticClass:"mt-5 mb-5",attrs:{data:e.table_store},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,function(t,n){return s("vs-tr",{key:n},[s("vs-td",{attrs:{data:a[n].brand_name}},[s("vs-input",{staticStyle:{width:"117px","margin-top":"0"},attrs:{"label-placeholder":e.obj_store.brand_name},model:{value:a[n].brand_name,callback:function(t){e.$set(a[n],"brand_name",t)},expression:"data[elem].brand_name"}})],1),e._v(" "),s("vs-td",{attrs:{data:a[n].description}},[s("vs-input",{staticStyle:{width:"117px","margin-top":"0"},attrs:{"label-placeholder":e.obj_store.description},model:{value:a[n].description,callback:function(t){e.$set(a[n],"description",t)},expression:"data[elem].description"}})],1),e._v(" "),s("vs-td",{attrs:{data:a[n].parts_number}},[s("vs-input",{staticStyle:{width:"117px","margin-top":"0"},attrs:{"label-placeholder":e.obj_store.parts_number},model:{value:a[n].parts_number,callback:function(t){e.$set(a[n],"parts_number",t)},expression:"data[elem].parts_number"}})],1),e._v(" "),s("vs-td",{attrs:{data:a[n].qty}},[s("vs-input",{staticStyle:{width:"40px","margin-top":"0"},attrs:{"label-placeholder":e.obj_store.qty},model:{value:a[n].qty,callback:function(t){e.$set(a[n],"qty",t)},expression:"data[elem].qty"}})],1),e._v(" "),s("vs-td",{attrs:{data:a[n].stock_qty,align:"center"}},[s("p",[e._v(e._s(a[n].stock_qty))])]),e._v(" "),s("vs-td",[s("vs-button",{attrs:{color:"danger",radius:"",icon:"icon-trash","icon-pack":"feather"},on:{click:function(t){return e.deleteRow(a[n].id)}}})],1)],1)})}}])},[s("template",{slot:"thead"},[s("vs-th",[e._v("Brand Name")]),e._v(" "),s("vs-th",[e._v("Description")]),e._v(" "),s("vs-th",[e._v("Parts Number")]),e._v(" "),s("vs-th",[e._v("Qty")]),e._v(" "),s("vs-th",[e._v("Stock Qty")]),e._v(" "),s("vs-th",[e._v("Delete")])],1)],2),e._v(" "),s("vs-button",{attrs:{color:"success",type:"relief",icon:"icon-plus","icon-pack":"feather"},on:{click:e.addRow}},[e._v("Add row")])],1)},[],!1,null,"0fc7e9f8",null).exports,b=s(209);function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function S(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var k={name:"showModulSingleBungle",components:{VueSimpleSuggest:m.a,VuePerfectScrollbar:p.a,"v-select":h.a,"form-else":f},data:function(){return{fillTable:!1,settings:{maxScrollbarLength:60,wheelSpeed:.3},tag:"",test:!1,table_store:[],moduleStock:null}},created:function(){this.moduleStock=Object.assign({},this.$store.getters.STORE_EDIT),this.moduleStock.tags=this.moduleStock.tags?JSON.parse(this.moduleStock.tags):[]},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(s,!0).forEach(function(t){S(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},Object(b.b)({showTable:"SHOWTABLE"}),{showBundleSingle:{set:function(e){this.test=e},get:function(){return this.$store.getters.SHOWBUNDLESINGLE}}}),methods:{simpleSuggestionList:function(){return["TOYOTA","RENAULT","PEUGEUT"]},saveChanges:function(e){this.table_store=e,this.fillTable=!1},clearFields:function(){this.fillTable=!1,this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!1,showTable:!1})},addChip:function(){!this.moduleStock.tags&&(this.moduleStock.tags=[]),this.moduleStock.tags.push(this.tag),this.tag=""},removeChip:function(e){this.moduleStock.tags.splice(this.moduleStock.tags.indexOf(e),1)},create:function(){var e=this,t=JSON.parse(JSON.stringify(this.moduleStock));t.part_number_without_to_much=t.part_number.replace(/[- )(]/g,"");var s=this.$store.getters["stockCaModule/GET_STOCK_DATA"],a=this.$store.getters["stockCaModule/GET_DATA_STOCK_ORDER"];"update"==this.moduleStock.action?(t&&delete t.brand,t&&delete t.action,t&&delete t.id,t&&delete t.unique_hash,t&&(t.tags=JSON.stringify(t.tags)),this.$store.dispatch("stockCaModule/UPDATE_DATA_STOCK",t).then(function(){return e.$store.dispatch("stockCaModule/GET_DATA_STOCK_FROM_SERVER",{page:s?s.current_page:1,searchBrand:a.searchBrand,searchNumber:a.searchNumber,orderName:a.name,orderBy:a.by})}).then(function(){return e.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!1,showTable:!1})})):(t&&(t.tags=JSON.stringify(t.tags)),this.$store.dispatch("stockCaModule/CREATE_DATA_STOCK",t).then(function(){return e.$store.dispatch("stockCaModule/GET_DATA_STOCK_FROM_SERVER",{page:s?s.current_page:1,searchBrand:a.searchBrand,searchNumber:a.searchNumber,orderName:a.name,orderBy:a.by})}).then(function(){return e.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!1,showTable:!1})}))}}},w=(s(480),{components:{deleteConfirm:d,showModulSingleBungle:Object(c.a)(k,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-prompt",{attrs:{"vs-title":"Create Single","vs-accept-text":"update"!=e.moduleStock.action?"Create":"Save","vs-active":e.showBundleSingle},on:{"vs-cancel":e.clearFields,"vs-accept":e.create,"vs-close":e.clearFields,"update:vsActive":function(t){e.showBundleSingle=t},"update:vs-active":function(t){e.showBundleSingle=t}}},[s("VuePerfectScrollbar",{staticClass:"scroll-area p-4",staticStyle:{"max-height":"75vh"},attrs:{settings:e.settings}},[!1===e.fillTable?s("div",[s("form",{staticClass:"display: flex; flex-direction: column",on:{submit:function(e){e.preventDefault()}}},[s("vue-simple-suggest",{attrs:{placeholder:"Brand name",list:e.simpleSuggestionList,"filter-by-query":!0},model:{value:e.moduleStock.brand_name,callback:function(t){e.$set(e.moduleStock,"brand_name",t)},expression:"moduleStock.brand_name"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"partNum","label-placeholder":"Part Number"},model:{value:e.moduleStock.part_number,callback:function(t){e.$set(e.moduleStock,"part_number",t)},expression:"moduleStock.part_number"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"description","label-placeholder":"Description"},model:{value:e.moduleStock.description_full,callback:function(t){e.$set(e.moduleStock,"description_full",t)},expression:"moduleStock.description_full"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"descriptionFull","label-placeholder":"Description Full"},model:{value:e.moduleStock.description_english,callback:function(t){e.$set(e.moduleStock,"description_english",t)},expression:"moduleStock.description_english"}}),e._v(" "),!0===e.showTable?s("div",{staticClass:"w-full mb-6 mt-6"},[s("vs-button",{attrs:{color:"success",icon:"icon-plus","icon-pack":"feather",type:"relief"},on:{click:function(t){e.fillTable=!0}}},[e._v("Edit bundle Item")])],1):e._e(),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"minStock","label-placeholder":"Min Stock"},model:{value:e.moduleStock.min_stock,callback:function(t){e.$set(e.moduleStock,"min_stock",t)},expression:"moduleStock.min_stock"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"current Stock","label-placeholder":"Current"},model:{value:e.moduleStock.qty,callback:function(t){e.$set(e.moduleStock,"qty",t)},expression:"moduleStock.qty"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"listPrice","label-placeholder":"List Price"},model:{value:e.moduleStock.price,callback:function(t){e.$set(e.moduleStock,"price",t)},expression:"moduleStock.price"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"minPrice","label-placeholder":"Min Price"},model:{value:e.moduleStock.min_price,callback:function(t){e.$set(e.moduleStock,"min_price",t)},expression:"moduleStock.min_price"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"maxPrice","label-placeholder":"Max Price"},model:{value:e.moduleStock.max_price,callback:function(t){e.$set(e.moduleStock,"max_price",t)},expression:"moduleStock.max_price"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",attrs:{name:"location","label-placeholder":"Location"},model:{value:e.moduleStock.location,callback:function(t){e.$set(e.moduleStock,"location",t)},expression:"moduleStock.location"}}),e._v(" "),s("vs-input",{staticClass:"w-full mb-6",staticStyle:{width:"100%!important"},attrs:{name:"categories","label-placeholder":"Categories"},model:{value:e.moduleStock.categories,callback:function(t){e.$set(e.moduleStock,"categories",t)},expression:"moduleStock.categories"}}),e._v(" "),s("div",{staticClass:"w-full mb-6"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("vs-input",{staticClass:"mt-0",attrs:{name:"chips","label-placeholder":"Find & add tags"},model:{value:e.tag,callback:function(t){e.tag=t},expression:"tag"}}),e._v(" "),s("vs-button",{staticStyle:{"box-sizing":"content-box"},attrs:{color:"primary",type:"filled"},on:{click:e.addChip}},[e._v("Add")])],1),e._v(" "),e._l(e.moduleStock.tags,function(t){return s("vs-chip",{key:t,staticStyle:{margin:"15px 5px"},attrs:{color:"primary",closable:""},on:{click:function(s){return e.removeChip(t)}}},[e._v("\n                        "+e._s(t)+"\n                    ")])})],2)],1)]):s("div",[s("vs-button",{staticClass:"mr-5",staticStyle:{float:"left"},attrs:{type:"line",color:"dark"},on:{click:function(t){e.fillTable=!1}}},[e._v("Cancel")]),e._v(" "),s("form-else",{attrs:{table_store:e.table_store},on:{saveChanges:e.saveChanges}})],1)])],1)},[],!1,null,null,null).exports},data:function(){return{showTable:!1}},computed:{show:function(){return this.$store.getters.SHOWBUNDLESINGLE}},props:["select"],methods:{createBundle:function(){this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!0})},createSingle:function(){var e={is_stock_ca:1,warehouse:"canada",action:"create"};["brand_name","categories","description_english","description_full","tags","price","weight_physical","weight_volumetric"].forEach(function(t){return e[t]=""}),["color","image","part_fits"].forEach(function(t){return e[t]=null}),["is_bundle","qty","subst_for"].forEach(function(t){return e[t]=0}),this.$store.dispatch("GET_EDIT_STORE",e),this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!1})},deleteItem:function(){this.$store.dispatch("GET_DELETE_MODULE",!0),this.$store.commit("stockCaModule/SET_VARIABLE",{name:"deletedData",value:this.select()})}}}),x=Object(c.a)(w,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("vs-dropdown",{staticClass:"ml-auto md:block hidden cursor-pointer",staticStyle:{"margin-left":"15px!important"},attrs:{"vs-trigger-click":""}},[s("vs-button",{attrs:{radius:"",icon:"icon-edit","icon-pack":"feather"}}),e._v(" "),s("vs-dropdown-menu",{staticClass:"w-32"},[s("vs-dropdown-item",[s("div",{staticClass:"flex items-center",on:{click:e.createSingle}},[s("span",[e._v("Create Single item")])])]),e._v(" "),s("vs-dropdown-item",[s("div",{staticClass:"flex items-center",on:{click:e.deleteItem}},[s("span",[e._v("Delete item")])])])],1)],1),e._v(" "),s("deleteConfirm"),e._v(" "),!0===e.show?s("div",[s("showModulSingleBungle")],1):e._e()],1)},[],!1,null,null,null);t.a=x.exports},476:function(e,t,s){"use strict";var a=s(201);s.n(a).a},477:function(e,t,s){(e.exports=s(51)(!1)).push([e.i,".l[data-v-6f6dc60d]{\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n",""])},480:function(e,t,s){"use strict";var a=s(202);s.n(a).a},481:function(e,t,s){(e.exports=s(51)(!1)).push([e.i,"/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\npre.selected.hljs {\n  margin: 8px 0;\n  height: 295px;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 1rem;\n}\n.vue-simple-suggest.designed .input-wrapper input {\n  color: inherit;\n  position: relative;\n  padding: 0.7rem;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}\n.vue-simple-suggest.designed .suggestions {\n  border-radius: 5px;\n}\n.vue-simple-suggest.designed .suggestions .suggest-item {\n  padding: 0.8rem 1rem;\n}\n.vue-simple-suggest.designed .suggestions .suggest-item.hover, .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n.theme-dark .vx-card .vue-simple-suggest input {\n  background: #262c49 !important;\n}\n.theme-dark .vx-card .vue-simple-suggest .suggestions {\n  background: #262c49 !important;\n}\n.theme-dark .vx-card pre.selected.hljs {\n  border-color: #414561 !important;\n}\n.theme-dark .vue-simple-suggest input {\n  background: #10163a !important;\n}\n.theme-dark .vue-simple-suggest .suggestions {\n  background: #10163a !important;\n}\n.theme-dark pre.selected.hljs {\n  border-color: #414561 !important;\n}\nbody .vs-component .vs-dialog {\n  max-width: 650px !important;\n}\n.demo-alignment > * {\n  margin-top: 0 !important;\n}\n\n/*.my_table{*/\n\n/*    border: 1px solid;*/\n\n/*}*/\n\n/*.my_table_header{*/\n\n/*    display: flex;*/\n\n/*}*/",""])}}]);