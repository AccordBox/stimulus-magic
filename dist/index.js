var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function r(t){return t.replace(/(?:[_-])([a-z0-9])/g,((t,e)=>e.toUpperCase()))}function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function o(t,e){const r=i(t);return Array.from(r.reduce(((t,r)=>(function(t,e){const r=t[e];return Array.isArray(r)?r:[]}(r,e).forEach((e=>t.add(e))),t)),new Set))}function i(t){const e=[];for(;t;)e.push(t),t=Object.getPrototypeOf(t);return e.reverse()}function s(t){return t.reduce(((t,[e,r])=>Object.assign(Object.assign({},t),{[e]:r})),{})}function a([t,e],n){return function(t){const e=`${function(t){return t.replace(/([A-Z])/g,((t,e)=>`-${e.toLowerCase()}`))}(t.token)}-value`,n=function(t){const e=function(t){const e=c(t.typeObject.type);if(!e)return;const r=u(t.typeObject.default);if(e!==r){throw new Error(`The specified default value for the Stimulus Value "${t.controller?`${t.controller}.${t.token}`:t.token}" must match the defined type "${e}". The provided default value of "${t.typeObject.default}" is of type "${r}".`)}return e}({controller:t.controller,token:t.token,typeObject:t.typeDefinition}),r=u(t.typeDefinition),n=c(t.typeDefinition),o=e||r||n;if(o)return o;throw new Error(`Unknown value type "${t.controller?`${t.controller}.${t.typeDefinition}`:t.token}" for "${t.token}" value`)}(t);return{type:n,key:e,name:r(e),get defaultValue(){return function(t){const e=c(t);if(e)return l[e];const r=t.default;return void 0!==r?r:t}(t.typeDefinition)},get hasCustomDefaultValue(){return void 0!==u(t.typeDefinition)},reader:f[n],writer:g[n]||g.default}}({controller:n,token:t,typeDefinition:e})}function c(t){switch(t){case Array:return"array";case Boolean:return"boolean";case Number:return"number";case Object:return"object";case String:return"string"}}function u(t){switch(typeof t){case"boolean":return"boolean";case"number":return"number";case"string":return"string"}return Array.isArray(t)?"array":"[object Object]"===Object.prototype.toString.call(t)?"object":void 0}t.d(e,{t:()=>$,l:()=>O}),"function"==typeof Object.getOwnPropertySymbols||Object.getOwnPropertyNames,(()=>{function t(t){function e(){return Reflect.construct(t,arguments,new.target)}return e.prototype=Object.create(t.prototype,{constructor:{value:e}}),Reflect.setPrototypeOf(e,t),e}try{return function(){const e=t((function(){this.a.call(this)}));e.prototype.a=function(){},new e}(),t}catch(t){return t=>class extends t{}}})(),Object.assign(Object.assign({enter:"Enter",tab:"Tab",esc:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",home:"Home",end:"End"},s("abcdefghijklmnopqrstuvwxyz".split("").map((t=>[t,t])))),s("0123456789".split("").map((t=>[t,t]))));const l={get array(){return[]},boolean:!1,number:0,get object(){return{}},string:""},f={array(t){const e=JSON.parse(t);if(!Array.isArray(e))throw new TypeError(`expected value of type "array" but instead got value "${t}" of type "${u(e)}"`);return e},boolean:t=>!("0"==t||"false"==String(t).toLowerCase()),number:t=>Number(t),object(t){const e=JSON.parse(t);if(null===e||"object"!=typeof e||Array.isArray(e))throw new TypeError(`expected value of type "object" but instead got value "${t}" of type "${u(e)}"`);return e},string:t=>t},g={default:function(t){return`${t}`},array:d,object:d};function d(t){return JSON.stringify(t)}class p{constructor(t){this.context=t}static get shouldLoad(){return!0}static afterLoad(t,e){}get application(){return this.context.application}get scope(){return this.context.scope}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get targets(){return this.scope.targets}get outlets(){return this.scope.outlets}get classes(){return this.scope.classes}get data(){return this.scope.data}initialize(){}connect(){}disconnect(){}dispatch(t,{target:e=this.element,detail:r={},prefix:n=this.identifier,bubbles:o=!0,cancelable:i=!0}={}){const s=new CustomEvent(n?`${n}:${t}`:t,{detail:r,bubbles:o,cancelable:i});return e.dispatchEvent(s),s}}function h(t){return t.charAt(0).toUpperCase()+t.slice(1)}function v(t){return t.replace(/([A-Z])/g,((t,e)=>"-".concat(e.toLowerCase())))}p.blessings=[function(t){return o(t,"classes").reduce(((t,e)=>{return Object.assign(t,{[`${r=e}Class`]:{get(){const{classes:t}=this;if(t.has(r))return t.get(r);{const e=t.getAttributeName(r);throw new Error(`Missing attribute "${e}"`)}}},[`${r}Classes`]:{get(){return this.classes.getAll(r)}},[`has${n(r)}Class`]:{get(){return this.classes.has(r)}}});var r}),{})},function(t){return o(t,"targets").reduce(((t,e)=>{return Object.assign(t,{[`${r=e}Target`]:{get(){const t=this.targets.find(r);if(t)return t;throw new Error(`Missing target element "${r}" for "${this.identifier}" controller`)}},[`${r}Targets`]:{get(){return this.targets.findAll(r)}},[`has${n(r)}Target`]:{get(){return this.targets.has(r)}}});var r}),{})},function(t){const e=function(t,e){return i(t).reduce(((t,r)=>(t.push(...function(t,e){const r=t[e];return r?Object.keys(r).map((t=>[t,r[t]])):[]}(r,e)),t)),[])}(t,"values"),r={valueDescriptorMap:{get(){return e.reduce(((t,e)=>{const r=a(e,this.identifier),n=this.data.getAttributeNameForKey(r.key);return Object.assign(t,{[n]:r})}),{})}}};return e.reduce(((t,e)=>Object.assign(t,function(t,e){const r=a(t,void 0),{key:o,name:i,reader:s,writer:c}=r;return{[i]:{get(){const t=this.data.get(o);return null!==t?s(t):r.defaultValue},set(t){void 0===t?this.data.delete(o):this.data.set(o,c(t))}},[`has${n(i)}`]:{get(){return this.data.has(o)||r.hasCustomDefaultValue}}}}(e))),r)},function(t){return o(t,"outlets").reduce(((t,e)=>Object.assign(t,function(t){const e=function(t){return r(t.replace(/--/g,"-").replace(/__/g,"_"))}(t);return{[`${e}Outlet`]:{get(){const e=this.outlets.find(t);if(e){const r=this.application.getControllerForElementAndIdentifier(e,t);if(r)return r;throw new Error(`Missing "data-controller=${t}" attribute on outlet element for "${this.identifier}" controller`)}throw new Error(`Missing outlet element "${t}" for "${this.identifier}" controller`)}},[`${e}Outlets`]:{get(){const e=this.outlets.findAll(t);return e.length>0?e.map((e=>{const r=this.application.getControllerForElementAndIdentifier(e,t);if(r)return r;console.warn(`The provided outlet element is missing the outlet controller "${t}" for "${this.identifier}"`,e)})).filter((t=>t)):[]}},[`${e}OutletElement`]:{get(){const e=this.outlets.find(t);if(e)return e;throw new Error(`Missing outlet element "${t}" for "${this.identifier}" controller`)}},[`${e}OutletElements`]:{get(){return this.outlets.findAll(t)}},[`has${n(e)}Outlet`]:{get(){return this.outlets.has(t)}}}}(e))),{})}],p.targets=[],p.outlets=[],p.values={};var b,y,w,m={prop:"magic",verbose:!0},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{prop:r,verbose:n}=Object.assign({},m,e);if(t[r]={targets:new window.Proxy(t,{get(t,e){var r,n,o="".concat(e,"Targets");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}}),target:new window.Proxy(t,{get(t,e){var r,n,o="".concat(e,"Target");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}}),hasTarget:new window.Proxy(t,{get(t,e){var r,n,o="has".concat(h(e),"Target");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}}),value:new window.Proxy(t,{get(t,e){var r,n,o="".concat(e,"Value");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0},set:(t,e,r)=>t["".concat(e,"Value")]=r}),hasValue:new window.Proxy(t,{get(t,e){var r,n,o="has".concat(h(e),"Value");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}}),classes:new window.Proxy(t,{get(t,e){var r,n,o="".concat(e,"Classes");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}}),class:new window.Proxy(t,{get(t,e){var r,n,o="".concat(e,"Class");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}}),hasClass:new window.Proxy(t,{get(t,e){var r,n,o="has".concat(h(e),"Class");return null!==(r=null!==(n=t[o])&&void 0!==n?n:t.getItem(o))&&void 0!==r?r:void 0}})},n){var o=t.scope.identifier;for(var[i,s]of Object.entries(t.constructor.targets||[]))console.log("".concat(o," target: data-").concat(o,"-").concat(v(s)));for(var[a,c]of Object.entries(t.constructor.values||[]))console.log("".concat(o," value: data-").concat(o,"-").concat(v(a))),console.log("".concat(o," value changed: ").concat(a,"ValueChanged"));for(var[u,l]of Object.entries(t.constructor.classes||[]))console.log("data-".concat(o,"-").concat(v(u)))}};class $ extends p{constructor(t){super(t),O(this,this.constructor.magicOptions)}}b=$,w=void 0,(y=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(y="magicOptions"))in b?Object.defineProperty(b,y,{value:w,enumerable:!0,configurable:!0,writable:!0}):b[y]=w;var j=e.t,A=e.l;export{j as MagicController,A as useMagic};