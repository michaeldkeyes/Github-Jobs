(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Github-Jobs/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-4",attrs:{id:"app"}},[a("h1",{staticClass:"mb-4"},[t._v("Github Jobs")]),a("SearchForm",{on:{fetchJobs:t.fetchJobs,setPage:t.setPage}}),t.loading?a("h1",[t._v("Loading...")]):t._e(),t.error?a("h1",[t._v("Error. Try Refreshing")]):t._e(),a("JobsPagination",{attrs:{page:t.page,hasNextPage:t.hasNextPage},on:{setPage:t.setPage,adjustPage:t.adjustPage}}),t._l(t.jobs,(function(t){return a("Job",{key:t.id,attrs:{job:t}})})),a("JobsPagination",{attrs:{page:t.page,hasNextPage:t.hasNextPage}})],2)},i=[],o=a("5530"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between"},[a("div",[a("div",{staticClass:"card-title"},[t._v(" "+t._s(t.job.title)+" - "),a("span",{staticClass:"text-muted font-weight-light"},[t._v(t._s(t.job.company))])]),a("div",{staticClass:"card-subtitle text-muted mb-2"},[t._v(t._s(new Date(t.job.created_at).toLocaleDateString()))]),a("div",{staticClass:"badge badge-secondary mr-2"},[t._v(t._s(t.job.type))]),a("div",{staticClass:"badge badge-secondary"},[t._v(t._s(t.job.location))]),a("div",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.job.how_to_apply))])]),a("img",{staticClass:"d-none d-md-block",attrs:{height:"50",src:t.job.company_logo,alt:t.job.company}})]),a("div",{staticClass:"card-text"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.open=!t.open}}},[t._v(t._s(t.open?"Hide Details":"View Details"))])]),t.open?a("div",[a("div",{staticClass:"mt-4"},[t._v(t._s(t.job.description))])]):t._e()])])},c=[],l={props:{job:Object},data:function(){return{open:!1}}},u=l,p=a("2877"),d=Object(p["a"])(u,r,c,!1,null,null,null),f=d.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination"},[1!==t.page?a("li",{staticClass:"page-item",on:{click:function(e){return t.adjustPage(-1)}}},[t._m(0)]):t._e(),1!==t.page?a("li",{staticClass:"page-item",on:{click:function(e){return t.setPage(1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]):t._e(),t.page>2?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("...")])]):t._e(),t.page>2?a("li",{staticClass:"page-item",on:{click:function(e){return t.adjustPage(-1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page-1))])]):t._e(),a("li",{staticClass:"page-item active"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page))])]),t.hasNextPage?a("li",{staticClass:"page-item",on:{click:function(e){return t.adjustPage(1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(t.page+1))])]):t._e(),t.hasNextPage?a("li",{staticClass:"page-item",on:{click:function(e){return t.adjustPage(1)}}},[t._m(1)]):t._e()])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],h=(a("a9e3"),{props:{page:Number,hasNextPage:Boolean},methods:{adjustPage:function(t){this.$emit("adjustPage",t)},setPage:function(t){this.$emit("setPage",t)}}}),b=h,_=Object(p["a"])(b,g,m,!1,null,null,null),v=_.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"form-row align-items-end"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"description"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{name:"description",type:"text"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"location"}},[t._v("Location")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"form-control",attrs:{name:"location",type:"text"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),a("div",{staticClass:"form-group col-md-2 ml-2"},[a("div",{staticClass:"form-check mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.full_time,expression:"full_time"}],staticClass:"form-check-input",attrs:{type:"checkbox",name:"full_time"},domProps:{checked:Array.isArray(t.full_time)?t._i(t.full_time,null)>-1:t.full_time},on:{change:function(e){var a=t.full_time,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);s.checked?o<0&&(t.full_time=a.concat([i])):o>-1&&(t.full_time=a.slice(0,o).concat(a.slice(o+1)))}else t.full_time=n}}}),a("label",{staticClass:"form-check-label",attrs:{for:"full_time"}},[t._v("Only Full Time")])])]),a("div",{staticClass:"form-group col-md-2"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.search(t.params)}}},[t._v("Search")])])])])},C=[],y=(a("a4d3"),a("e01a"),{data:function(){return{description:"",location:"",full_time:!1}},methods:{search:function(t){this.$emit("setPage",1),this.$emit("fetchJobs",t)}},computed:{params:function(){return{description:this.description,location:this.location,full_time:this.full_time}}}}),P=y,k=Object(p["a"])(P,j,C,!1,null,null,null),x=k.exports,w=a("bc3a"),O={name:"App",components:{Job:f,JobsPagination:v,SearchForm:x},data:function(){return{jobs:[],loading:!1,error:!1,params:{},page:1,hasNextPage:!1,BASE_URL:"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"}},methods:{fetchJobs:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=w.CancelToken.source();this.loading=!0,this.jobs=[],this.hasNextPage=!1,w.get(this.BASE_URL,{cancelToken:s.token,params:Object(o["a"])({markdown:!0,page:a},t)}).then((function(t){e.loading=!1,e.jobs=t.data})).catch((function(t){w.isCancel(t)||(e.loading=!1,e.error=!0,e.jobs=[],console.log(t))}));var n=w.CancelToken.source();return w.get(this.BASE_URL,{cancelToken:n.token,params:Object(o["a"])({markdown:!0,page:a+1},t)}).then((function(t){0!==t.data.length&&(e.hasNextPage=!0)})).catch((function(t){w.isCancel(t)||(e.loading=!1,e.error=!0,console.log(t))})),function(){s.cancel(),n.cancel()}},adjustPage:function(t){this.page+=t},setPage:function(t){this.page=t}},created:function(){this.fetchJobs(this.params,this.page)},watch:{page:function(){this.fetchJobs(this.params,this.page)}}},J=O,N=Object(p["a"])(J,n,i,!1,null,null,null),S=N.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.721ea417.js.map