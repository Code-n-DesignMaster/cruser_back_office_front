(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(e,t,r){var n=r(459);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(50)(n,a);n.locals&&(e.exports=n.locals)},207:function(e){e.exports=[{brand:"JIGUL",partNum:"547857480",description:"Litronic Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay","amazon"],categories:"category",chips:["tag","tagtwo"],showTable:!0},{brand:"BEHA",partNum:"547857480",description:"Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay"],categories:"category",chips:["tag"]},{brand:"DEVYATKA",partNum:"547857480",description:"Litronic",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["amazon","magento"],categories:"category",chips:["tag"]},{brand:"JIGUL",partNum:"547857480",description:"Litronic Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay","amazon"],categories:"category",chips:["tag"]},{brand:"BEHA",partNum:"547857480",description:"Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay"],categories:"category",chips:["tag"]},{brand:"DEVYATKA",partNum:"547857480",description:"Litronic",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["amazon","magento"],categories:"category",chips:["tag"]},{brand:"JIGUL",partNum:"547857480",description:"Litronic Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay","amazon"],categories:"category",chips:["tag"]},{brand:"BEHA",partNum:"547857480",description:"Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay"],categories:"category",chips:["tag"]},{brand:"DEVYATKA",partNum:"547857480",description:"Litronic",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["amazon","magento"],categories:"category",chips:["tag"]},{brand:"JIGUL",partNum:"547857480",description:"Litronic Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay","amazon"],categories:"category",chips:["tag"]},{brand:"BEHA",partNum:"547857480",description:"Industries",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["ebay"],categories:"category",chips:["tag"]},{brand:"DEVYATKA",partNum:"547857480",description:"Litronic",minStock:"0",minPrice:"0",maxPrice:"0",location:"B2-017",listPrice:"160.50",stores:["amazon","magento"],categories:"category",chips:["tag"]}]},272:function(e,t,r){"use strict";var n={name:"cellRenderer"},a=r(13);Object(a.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("button",[this._v("Invoke Parent")])])}],!1,null,"47a64394",null).exports},458:function(e,t,r){"use strict";var n=r(201);r.n(n).a},459:function(e,t,r){(e.exports=r(49)(!1)).push([e.i,'.ag-header-cell-label {\n  justify-content: center !important;\n}\n.ag-header-cell {\n  padding: 0 !important;\n}\n.ag-header-cell:first-child {\n  padding: 0 24px !important;\n}\n.ag-theme-material .ag-cell {\n  line-height: 0 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.customHeaderMenuButton {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customHeaderLabel {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customSortDownLabel {\n  float: left;\n  margin: 0 0 0 3px;\n}\n.customSortUpLabel {\n  float: left;\n  margin: 0;\n}\n.customSortRemoveLabel {\n  float: left;\n  margin: 0 0 0 3px;\n  font-size: 11px;\n}\n.active {\n  color: cornflowerblue;\n}\n.ag-header-row:last-child{\n  display: none;\n}\n.ag-header{\n  min-height: 50px!important;\n  height: 50px!important;\n}\n.ag-theme-material .ag-icon-checkbox-checked{\n  color: white;\n}\n#content-area.content-area-reduced{\n  margin-left: 40px;\n}\n.ag-theme-material .ag-ltr .ag-cell[col-id="description_english"]{\n  /* width: 200px; */\n  justify-content: flex-start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n#app{\n  height: calc(100% - 3.5rem);\n}\n.content-wrapper{\n  height: calc(100% - 3.5rem);\n}\n.router-view,.router-content, .vx-card__body,.content-area__content{\n  height: 100%!important;\n}\n#ag-grid-demo, .vx-card, .vx-card__collapsible-content, .ag-grid-table{\n  height: 96%!important;\n}\n.router-content{\n  margin-top: 3em!important;\n}\n',""])},736:function(e,t,r){"use strict";r.r(t);var n=r(208),a=r(207),i=r(132),o=(r(272),r(24)),s=r(97);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=o.default.extend({template:'<vs-chip color="primary" @click="test(params)">{{params.valueFormatted}}</vs-chip>',methods:{test:function(e){console.log(e)}}}),d=o.default.extend({template:'\n    <div style="width: 100%; display: flex; justify-content: center" @click="onSortChanged(1, $event)">\n        <div>\n            <div class="customHeaderLabel" >{{params.displayName}}</div>\n            <div v-if="params.column.colId == order.name && order.by === \'asc\'"  :class="ascSort" class="customSortDownLabel"><span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" aria-hidden="true"><span class="ag-icon ag-icon-asc" unselectable="on"></span></span></i></div>\n            <div v-if="params.column.colId == order.name && order.by === \'desc\'" :class="descSort" class="customSortUpLabel"><span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" aria-hidden="true"><span class="ag-icon ag-icon-desc" unselectable="on"></span></span></div>\n\n        </div>\n    </div>\n',data:function(){return{ascSort:null,descSort:null,noSort:null}},computed:{order:function(){return this.$store.getters["stockCaModule/GET_DATA_STOCK_ORDER"]}},mounted:function(){},methods:{onSortChanged:function(){var e;if(this.params.column.colId==this.order.name)switch(this.order.by){case"asc":e="desc";break;case"desc":e="";break;case"":e="asc"}else e="desc";this.$store.commit("stockCaModule/SET_VARIABLE",{name:"order",value:{by:e,name:this.params.column.colId,searchBrand:this.order.searchBrand,searchNumber:this.order.searchNumber}}),this.$parent.$parent.$parent.getDataStockCa()},onSortRequested:function(e,t){}}}),u={components:{AgGridVue:n.AgGridVue,singlebundle:i.a},data:function(){return{searchBrand:"",searchNumber:"",gridOptions:{},maxPageNumbers:7,gridApi:null,defaultColDef:{sortable:!0,editable:!1,resizable:!0,suppressMenu:!0},frameworkComponents:null,columnDefs:null,contacts:a,context:null,timeout:null,isNoActive:!1}},beforeMount:function(){this.RELOAD(),this.columnDefs=[{width:75,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0,suppressMenu:!0,pinned:"left"},{headerName:"Brand",field:"brand_name",pinned:"left",suppressMenu:!0},{headerName:"PartNumber",field:"part_number",pinned:"left",suppressMenu:!0},{headerName:"Description",field:"description_english",pinned:"left",suppressMenu:!0},{headerName:"Qty",field:"qty",suppressMenu:!0},{headerName:"Min Stock",field:"min_stock",suppressMenu:!0},{headerName:"List price",field:"price",suppressMenu:!0},{headerName:"Min price",field:"min_price",suppressMenu:!0},{headerName:"Max price",field:"max_price",suppressMenu:!0},{headerName:"Last Modified",field:"updated_at",suppressMenu:!0},{headerName:"Location",field:"location",suppressMenu:!0,width:125},{headerName:"Categories",field:"categories",suppressMenu:!0,width:125},{headerName:"Tags",field:"tags",cellRenderer:"test",suppressMenu:!0,width:125}],this.context={componentParent:this},this.frameworkComponents={test:l,agColumnHeader:d}},computed:{getDataStock:function(){return this.$store.getters["stockCaModule/GET_STOCK_DATA"]},getData:function(){var e=this.getDataStock;return e?e.data:[]},totalPages:function(){var e=this.getDataStock;return e?e.last_page:1},order:function(){return this.$store.getters["stockCaModule/GET_DATA_STOCK_ORDER"]},currentPage:{get:function(){var e=this.getDataStock;return e?e.current_page:1},set:function(e){this.getDataStockCa(e)}}},methods:{updateSearchQuery:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.getDataStockCa(1),clearTimeout(e.timeout)},300)},getDataStockCa:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$store.dispatch("stockCaModule/GET_DATA_STOCK_FROM_SERVER",{page:e||this.currentPage,searchBrand:this.order.searchBrand,searchNumber:this.order.searchNumber,orderName:this.order.name,orderBy:this.order.by})},setOrder:function(e,t){this.$store.commit("stockCaModule/SET_VARIABLE",{name:"order",value:{by:this.order.by,name:this.order.name,searchBrand:"searchBrand"==t?e:this.order.searchBrand,searchNumber:"searchNumber"==t?e:this.order.searchNumber}})},test:function(e){"PartNumber"===e.colDef.headerName&&(e.data.showTable?this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!0}):this.$store.dispatch("GET_SHOW_BUNDLE_SINGLE",{module:!0,showTable:!1}),e.data.action="update",this.$store.dispatch("GET_EDIT_STORE",e.data))},select:function(){var e=this.gridApi?this.gridApi.getSelectedNodes():[];return c(e=e.map(function(e){return{brand_name:e.data.brand_name,part_number:e.data.part_number}}))},RELOAD:function(){var e=this;this.$store.commit("isNoActive",!0),s.a.reload().then(function(t){return e.$store.commit("isNoActive",!1)})}},mounted:function(){window.document.body.style.zoom=.7,this.gridApi=this.gridOptions.api},destroyed:function(){window.document.body.style.zoom=1}},m=(r(458),r(13)),p=Object(m.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"ag-grid-demo"}},[r("vx-card",[r("div",{staticClass:"flex flex-wrap justify-between items-center"},[r("div",{staticClass:"mb-4 md:mb-0 mr-4 ag-grid-table-actions-left",staticStyle:{display:"flex","align-items":"center"}},[r("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}}),e._v(" "),r("singlebundle",{attrs:{select:e.select}}),e._v(" "),r("vs-button",{attrs:{color:"success",type:"relief",icon:"icon-plus","icon-pack":"feather"},on:{click:function(t){return e.RELOAD()}}},[e._v("\n                    RELOAD\n                ")])],1),e._v(" "),r("div",{staticClass:"flex flex-wrap items-center justify-between ag-grid-table-actions-right"},[r("vs-pagination",{staticStyle:{"margin-right":"20px"},attrs:{total:e.totalPages,max:7},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._v(" "),r("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{value:e.order.searchBrand,placeholder:"Search brand"},on:{input:function(t){return e.setOrder(t,"searchBrand")},change:e.updateSearchQuery}}),e._v(" "),r("vs-input",{staticClass:"mb-4 md:mb-0 mr-4",attrs:{value:e.order.searchNumber,placeholder:"Search part number"},on:{input:function(t){return e.setOrder(t,"searchNumber")},change:e.updateSearchQuery}})],1)]),e._v(" "),r("ag-grid-vue",{ref:"test",staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{gridOptions:e.gridOptions,columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowData:e.getData,rowSelection:"multiple",colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,context:e.context,suppressMenuHide:!0,frameworkComponents:e.frameworkComponents,suppressPaginationPanel:!0},on:{cellClicked:function(t){return e.test(t)}}})],1)],1)},[],!1,null,null,null);t.default=p.exports}}]);