webpackJsonp([19],{1925:function(e,n,t){var r=t(1928);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;t(1746)(r,o);r.locals&&(e.exports=r.locals)},1927:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"d",function(){return a}),t.d(n,"h",function(){return c}),t.d(n,"e",function(){return u}),t.d(n,"b",function(){return s}),t.d(n,"c",function(){return l}),t.d(n,"g",function(){return p}),t.d(n,"f",function(){return b});var r=t(51),o=t.n(r),i="DD/MM/YYYY",a=function(e){return(""+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},c=function(e){return e.replace(/\$\s?|(,*)/g,"")},u=function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0"},s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return o()(e).format(n)},l=function(e){var n=o()(e);return n.isValid()?n.format("YYYY-MM-DD"):""},p=function(e){var n=o()(e,"YYYY-MM-DD");return n.isValid()?n:null},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!e)return 0;var t=Math.pow(10,n);return Math.round(e*t)/t}},1928:function(e,n,t){n=e.exports=t(1745)(!0),n.push([e.i,".btnAction{background:0 0;border:none;border-radius:2px;color:#000!important;position:relative;height:35px;line-height:35px;margin:0;min-width:64px;padding:0 10px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);transition:background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);-o-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .2s cubic-bezier(.4,0,1,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;vertical-align:middle;background-color:#eee;border-color:#e1e5ec}.btnAction:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.2),0 3px 6px rgba(0,0,0,.26)!important;box-shadow:0 3px 6px rgba(0,0,0,.2),0 3px 6px rgba(0,0,0,.26)!important}.btnSearch{background-color:#3ac9d6!important;border:1px solid #3ac9d6!important;color:#fff!important}.btnAddNew{background-color:#30a9b4!important;border:1px solid #30a9b4!important}.btnAddNew,.btnEdit{color:#fff!important}.btnEdit{background-color:#188ae2!important;border:1px solid #188ae2!important}.btnDelete{background-color:#f35864!important;border:1px solid #f35864!important}.btnDelete,.btnSave{color:#fff!important}.btnSave{background-color:#ff4081!important;border:1px solid #ff4081!important}.btnSave+.ant-btn{margin-left:10px}.btnCancel,.btnClear{background-color:#e1e5ec!important;border-color:#e1e5ec!important;color:#000!important}.btnView{background-color:#6abf6e!important;border-color:#6abf6e!important}.btnLock,.btnView{color:#fff!important}.btnLock{background-color:#ff4d4f!important;border-color:#ff4d4f!important}","",{version:3,sources:["/Users/anhtran/Working/projects/freelander/eem-fe/src/components/common/button/style.scss"],names:[],mappings:"AAAA,WACE,eAAgB,AAChB,YAAa,AACb,kBAAmB,AACnB,qBAAuB,AACvB,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,SAAU,AACV,eAAgB,AAChB,eAAgB,AAChB,qBAAsB,AACtB,8CAAwD,AACxD,eAAgB,AAChB,gBAAiB,AACjB,yBAA0B,AAC1B,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,gJAAoK,AACpK,wIAA4J,AAC5J,mIAAuJ,AACvJ,gIAAoJ,AACpJ,8KAAwM,AACxM,aAAc,AACd,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,sBAA0B,AAC1B,oBAAsB,CAAE,AACxB,iBACE,gFAA2F,AACnF,uEAAmF,CAAE,AAEjG,WACE,mCAAqC,AACrC,mCAAqC,AACrC,oBAAuB,CAAE,AAE3B,WACE,mCAAqC,AACrC,kCAAqC,CACZ,AAE3B,oBAFE,oBAAuB,CAKE,AAH3B,SACE,mCAAqC,AACrC,kCAAqC,CACZ,AAE3B,WACE,mCAAqC,AACrC,kCAAqC,CACZ,AAE3B,oBAFE,oBAAuB,CAKE,AAH3B,SACE,mCAAqC,AACrC,kCAAqC,CACZ,AACzB,kBACE,gBAAkB,CAAE,AAOxB,qBAJE,mCAAqC,AACrC,+BAAiC,AACjC,oBAAuB,CAKY,AAErC,SAEE,mCAAqC,AACrC,8BAAiC,CAAE,AAErC,kBAJE,oBAA0B,CAOS,AAHrC,SAEE,mCAAqC,AACrC,8BAAiC,CAAE",file:"style.scss",sourcesContent:[".btnAction {\n  background: 0 0;\n  border: none;\n  border-radius: 2px;\n  color: #000 !important;\n  position: relative;\n  height: 35px;\n  line-height: 35px;\n  margin: 0;\n  min-width: 64px;\n  padding: 0 10px;\n  display: inline-block;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  overflow: hidden;\n  will-change: box-shadow;\n  -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  -o-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: middle;\n  background-color: #eeeeee;\n  border-color: #e1e5ec; }\n  .btnAction:hover {\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.26) !important;\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.26) !important; }\n\n.btnSearch {\n  background-color: #3ac9d6 !important;\n  border: 1px solid #3ac9d6 !important;\n  color: #fff !important; }\n\n.btnAddNew {\n  background-color: #30a9b4 !important;\n  border: 1px solid #30a9b4 !important;\n  color: #fff !important; }\n\n.btnEdit {\n  background-color: #188ae2 !important;\n  border: 1px solid #188ae2 !important;\n  color: #fff !important; }\n\n.btnDelete {\n  background-color: #f35864 !important;\n  border: 1px solid #f35864 !important;\n  color: #fff !important; }\n\n.btnSave {\n  background-color: #ff4081 !important;\n  border: 1px solid #ff4081 !important;\n  color: #fff !important; }\n  .btnSave + .ant-btn {\n    margin-left: 10px; }\n\n.btnCancel {\n  background-color: #e1e5ec !important;\n  border-color: #e1e5ec !important;\n  color: #000 !important; }\n\n.btnClear {\n  color: #000 !important;\n  background-color: #e1e5ec !important;\n  border-color: #e1e5ec !important; }\n\n.btnView {\n  color: #FFFFFF !important;\n  background-color: #6abf6e !important;\n  border-color: #6abf6e !important; }\n\n.btnLock {\n  color: #FFFFFF !important;\n  background-color: #ff4d4f !important;\n  border-color: #ff4d4f !important; }\n"],sourceRoot:""}])},1929:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,i){try{var a=n[o](i),c=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var i=t(172),a=t.n(i),c=t(0),u=t.n(c),s=t(27),l=t(1925),p=(t.n(l),this),b=function(){function e(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.a=function(e){var n=e.className,t=void 0===n?"":n,i=e.title,l=void 0===i?"L\u01b0u d\u1eef li\u1ec7u":i,f=o(e,["className","title"]),d=Object(c.useState)(!1),A=b(d,2),m=A[0],h=A[1],g=function(){var e=r(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f.onClick){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,f.onClick();case 5:h(!1);case 6:case"end":return e.stop()}},e,p)}));return function(){return e.apply(this,arguments)}}();return u.a.createElement(s.d,Object.assign({disabled:m,loading:m},f,{onClick:g,className:"btnAction btnSave "+t,icon:"save"}),l)}},1930:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return p});var a=t(0),c=t.n(a),u=t(27),s=t(1925),l=(t.n(s),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),p=function(e){function n(){var e,t,i,a;r(this,n);for(var c=arguments.length,u=Array(c),s=0;s<c;s++)u[s]=arguments[s];return t=i=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),i.states="",a=t,o(i,a)}return i(n,e),l(n,[{key:"render",value:function(){return c.a.createElement(u.d,Object.assign({},this.props,{className:"btnAction btnCancel "+this.props.className,icon:""}),this.props.title)}}]),n}(a.Component);p.defaultProps={className:"",title:"H\u1ee7y"}},1953:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return p});var a=t(0),c=t.n(a),u=t(27),s=t(1927),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),p=function(e){function n(){var e,t,i,a;r(this,n);for(var c=arguments.length,u=Array(c),s=0;s<c;s++)u[s]=arguments[s];return t=i=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),i.state={},a=t,o(i,a)}return i(n,e),l(n,[{key:"render",value:function(){return c.a.createElement(u.n,Object.assign({formatter:s.d,parser:s.h,ref:this.props.refInput},this.props))}}]),n}(a.Component)},2889:function(e,n,t){"use strict";t.d(n,"c",function(){return i}),t.d(n,"d",function(){return a}),t.d(n,"b",function(){return c}),t.d(n,"e",function(){return u}),t.d(n,"a",function(){return s});var r=t(552),o="/api/categories",i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(r.c)({prefix:o,url:"/TrainType",params:{page:e,IsPagingEnabled:n},method:"GET"})},a=function(e){return Object(r.c)({prefix:o,url:"/TrainType/GetById?id="+e,method:"GET"})},c=function(e){return Object(r.c)({prefix:o,url:"/TrainType",data:{id:e},method:"DELETE"})},u=function(e,n){return Object(r.c)({prefix:o,url:"/TrainType",data:{id:n.id,label:n.code,labelInEnglish:n.labelInEnglish||"",regularId:n.regularId||""},method:"PUT"})},s=function(e){return Object(r.c)({prefix:o,url:"/TrainType",data:{id:e.id,label:e.code,labelInEnglish:e.labelInEnglish||"",regularId:e.regularId||"1"},method:"POST"})}},2942:function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}t.d(n,"c",function(){return a}),t.d(n,"d",function(){return c}),t.d(n,"b",function(){return u}),t.d(n,"f",function(){return s}),t.d(n,"a",function(){return l}),t.d(n,"e",function(){return p});var o=t(552),i="/api/categories",a=function(e){var n=e.page,t=e.pageSize,r=void 0===t?10:t,a=e.isPagingEnabled,c=void 0===a||a;return Object(o.c)({prefix:i,url:"/PrizeInTrainType",params:{page:n,pageSize:r,isPagingEnabled:c},method:"GET"})},c=function(e,n){return Object(o.c)({prefix:i,url:"/PrizeInTrainType/GetById",method:"GET",params:{prizeClassId:e,trainTypeId:n}})},u=function(e){return Object(o.c)({prefix:i,url:"/PrizeInTrainType",method:"DELETE",data:Object.assign({},e)})},s=function(e){var n=e.prizeClassId,t=e.traintypeid,a=r(e,["prizeClassId","traintypeid"]);return Object(o.c)({prefix:i,url:"/PrizeInTrainType",data:{prizeClassId:n,traintypeid:t,amount:a.amount},method:"PUT"})},l=function(e){return Object(o.c)({prefix:i,url:"/PrizeInTrainType",data:{trainTypeId:e.trainTypeId,prizeClassId:e.prizeClassId,amount:e.amount},method:"POST"})},p=function(){return Object(o.c)({prefix:i,url:"/PrizeClassification",params:{isPagingEnabled:!1},method:"GET"})}},633:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,i){try{var a=n[o](i),c=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function a(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c,u,s=t(172),l=t.n(s),p=t(0),b=t.n(p),f=t(67),d=t(278),A=t(1929),m=t(1930),h=t(1953),g=t(27),C=t(2942),y=t(2889),v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),x=g.w.Option,w=function(e){var n={code:"",sys:"",grad:"",gradCode:"",fromScores10:"",fromScores4:"",fromTrainingScore:"",amountOfMoney:""};return Object.assign({},n,e)},B=(c=g.k.create({name:"formStipulate"}))(u=function(e){function n(){var e,t,a,c,u=this;o(this,n);for(var s=arguments.length,p=Array(s),b=0;b<s;b++)p[b]=arguments[b];return t=a=i(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(p))),a.state={prizeClassId:!1,traintypeid:"",initialValue:{},listTraningSytems:[],listPrizeClassifications:[]},a.componentDidMount=function(){var e=a.props.match;a.getDataSelect(),e.params.id&&(a.setState({prizeClassId:e.params.id,traintypeid:e.params.code}),a.getDataById(e.params.id,e.params.code))},a.getDataById=function(){var e=r(l.a.mark(function e(n,t){var r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(n,t);case 2:r=e.sent,o=w(r.data),a.setState({initialValue:o});case 5:case"end":return e.stop()}},e,u)}));return function(n,t){return e.apply(this,arguments)}}(),a.getDataSelect=function(){Object(y.c)(1,!1).then(function(e){a.setState({listTraningSytems:e.data.items})}).catch(function(e){console.log("====>",e)}),Object(C.e)().then(function(e){a.setState({listPrizeClassifications:e.data.items})})},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,n){e||a.saveData(n)})},a.saveData=function(){var e=r(l.a.mark(function e(n){var t,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,r=t.prizeClassId,o=t.traintypeid,e.prev=1,r){e.next=8;break}return e.next=5,Object(C.a)(n);case 5:g.D.success("T\u1ea1o th\xe0nh c\xf4ng"),e.next=11;break;case 8:return e.next=10,Object(C.f)(Object.assign({prizeClassId:r,traintypeid:o},n));case 10:g.D.success("Ch\u1ec9nh s\u1eeda th\xe0nh c\xf4ng");case 11:a.props.history.goBack(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}},e,u,[[1,14]])}));return function(n){return e.apply(this,arguments)}}(),c=t,i(a,c)}return a(n,e),v(n,[{key:"render",value:function(){var e=this,n=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}},colon:!1},r=this.state,o=r.prizeClassId,i=r.listTraningSytems,a=r.listPrizeClassifications,c=r.initialValue;return b.a.createElement(g.e,{title:o?"C\u1eadp nh\u1eadt quy \u0111\u1ecbnh s\u1ed1 ti\u1ec1n h\u1ecdc b\u1ed5ng":"Th\xeam quy \u0111\u1ecbnh s\u1ed1 ti\u1ec1n h\u1ecdc b\u1ed5ng"},b.a.createElement(g.v,null,b.a.createElement(g.k,Object.assign({},t,{onSubmit:this.handleSubmit,className:"login-form"}),b.a.createElement(g.k.Item,Object.assign({},t,{label:"H\u1ec7",hasFeedback:!0}),n("trainTypeId",{initialValue:c.trainTypeId,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(b.a.createElement(g.w,{style:{width:"100%"},placeholder:"Ch\u1ecdn h\u1ec7 \u0111\xe0o t\u1ea1o"},i.length>0?i.map(function(e){return b.a.createElement(x,{key:e.id},e.label)}):null))),b.a.createElement(g.k.Item,Object.assign({},t,{label:"X\u1ebfp lo\u1ea1i",hasFeedback:!0}),n("prizeClassId",{initialValue:c.prizeClassId,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(b.a.createElement(g.w,{style:{width:"100%"},placeholder:"Ch\u1ecdn x\u1ebfp lo\u1ea1i"},a.length>0?a.map(function(e){return b.a.createElement(x,{key:e.id},e.label)}):null))),b.a.createElement(g.k.Item,Object.assign({},t,{label:"S\u1ed1 ti\u1ec1n",hasFeedback:!0}),n("amount",{initialValue:c.amount,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp th\xf4ng tin!"}]})(b.a.createElement(h.a,null))),b.a.createElement(g.k.Item,Object.assign({},t,{label:" "}),b.a.createElement(A.a,{htmlType:"submit"}),b.a.createElement(m.a,{onClick:function(){return e.props.history.goBack()}})))))}}]),n}(p.Component))||u;n.default=Object(f.d)(function(e){return b.a.createElement(d.a,e,b.a.createElement(B,e))})}});
//# sourceMappingURL=19.a3969131.chunk.js.map