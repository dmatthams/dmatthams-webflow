/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var petite_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! petite-vue */ "./node_modules/petite-vue/dist/petite-vue.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var apiToken = 'skkrDV4A0qbPVIkeVkOHRY97FeVBQ1QKAy0mDTAl1RkEUQDXzry9PdqvFvTFOKSEcepiO4DXu7AGmrqySnsMziM7uzJCWYLY8kvDI9BB8CU2vScb62EXcQlXfCEM24zAnotwrLOfhDq7pu8GA5q3KD9fcqRWBOOXPlfJ8kteRGNfkUTbwpMi';
var apiUrl = 'https://09rbw1iw.api.sanity.io/v2021-06-07/data/query/production';
(0,petite_vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  // exposed to all expressions
  posts: '',
  // getters
  getPosts: function getPosts() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(apiUrl + '?query=*[(_type in ["post"])]');

            case 2:
              request = _context.sent;
              _context.next = 5;
              return request.json();

            case 5:
              _this.posts = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getThumbnail: function getThumbnail(ref) {
    var image = ref['asset']['_ref'];
    image = image.split('-');
    var imageType = image[0];
    var imageId = image[1];
    var imageSize = image[2];
    var imageExt = image[3];
    return 'https://cdn.sanity.io/images/09rbw1iw/production/' + imageId + '-' + imageSize + '.' + imageExt + '?h=80&w=80';
  },
  getUrl: function getUrl(slug) {
    console.log(slug);
    return  false ? 0 : '/post/?slug=' + slug;
  }
}).mount('.posts');

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/petite-vue/dist/petite-vue.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/petite-vue/dist/petite-vue.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": () => (/* binding */ Qe),
/* harmony export */   "nextTick": () => (/* binding */ V),
/* harmony export */   "reactive": () => (/* binding */ D)
/* harmony export */ });
var tt=Object.defineProperty;var nt=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(nt(e,typeof t!="symbol"?t+"":t,n),n);function st(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function de(e){if(y(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=N(s)?it(s):de(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(N(e))return e;if(S(e))return e}}const rt=/;(?![^(]*\))/g,ot=/:(.+)/;function it(e){const t={};return e.split(rt).forEach(n=>{if(n){const s=n.split(ot);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function me(e){let t="";if(N(e))t=e;else if(y(e))for(let n=0;n<e.length;n++){const s=me(e[n]);s&&(t+=s+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ct(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=I(e[s],t[s]);return n}function I(e,t){if(e===t)return!0;let n=ge(e),s=ge(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=y(e),s=y(t),n||s)return n&&s?ct(e,t):!1;if(n=S(e),s=S(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const c in e){const o=e.hasOwnProperty(c),l=t.hasOwnProperty(c);if(o&&!l||!o&&l||!I(e[c],t[c]))return!1}}return String(e)===String(t)}function G(e,t){return e.findIndex(n=>I(n,t))}const lt=Object.assign,ft=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},at=Object.prototype.hasOwnProperty,U=(e,t)=>at.call(e,t),y=Array.isArray,Y=e=>ye(e)==="[object Map]",ge=e=>e instanceof Date,N=e=>typeof e=="string",Q=e=>typeof e=="symbol",S=e=>e!==null&&typeof e=="object",ut=Object.prototype.toString,ye=e=>ut.call(e),pt=e=>ye(e).slice(8,-1),X=e=>N(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,be=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ht=/-(\w)/g,dt=be(e=>e.replace(ht,(t,n)=>n?n.toUpperCase():"")),mt=/\B([A-Z])/g,xe=be(e=>e.replace(mt,"-$1").toLowerCase()),gt=(e,t)=>!Object.is(e,t),ve=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let yt;function we(e,t){t=t||yt,t&&t.active&&t.effects.push(e)}const _e=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ee=e=>(e.w&O)>0,$e=e=>(e.n&O)>0,bt=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=O},xt=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Ee(r)&&!$e(r)?r.delete(e):t[n++]=r,r.w&=~O,r.n&=~O}t.length=n}},ee=new WeakMap;let B=0,O=1;const te=30,z=[];let C;const W=Symbol(""),Se=Symbol("");class vt{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],we(this,s)}run(){if(!this.active)return this.fn();if(!z.includes(this))try{return z.push(C=this),$t(),O=1<<++B,B<=te?bt(this):Oe(this),this.fn()}finally{B<=te&&xt(this),O=1<<--B,ke(),z.pop();const t=z.length;C=t>0?z[t-1]:void 0}}stop(){this.active&&(Oe(this),this.onStop&&this.onStop(),this.active=!1)}}function Oe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function wt(e,t){e.effect&&(e=e.effect.fn);const n=new vt(e);t&&(lt(n,t),t.scope&&we(n,t.scope)),(!t||!t.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function _t(e){e.effect.stop()}let K=!0;const ne=[];function Et(){ne.push(K),K=!1}function $t(){ne.push(K),K=!0}function ke(){const e=ne.pop();K=e===void 0?!0:e}function F(e,t,n){if(!St())return;let s=ee.get(e);s||ee.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=_e()),Ot(r)}function St(){return K&&C!==void 0}function Ot(e,t){let n=!1;B<=te?$e(e)||(e.n|=O,n=!Ee(e)):n=!e.has(C),n&&(e.add(C),C.deps.push(e))}function se(e,t,n,s,r,i){const c=ee.get(e);if(!c)return;let o=[];if(t==="clear")o=[...c.values()];else if(n==="length"&&y(e))c.forEach((l,f)=>{(f==="length"||f>=s)&&o.push(l)});else switch(n!==void 0&&o.push(c.get(n)),t){case"add":y(e)?X(n)&&o.push(c.get("length")):(o.push(c.get(W)),Y(e)&&o.push(c.get(Se)));break;case"delete":y(e)||(o.push(c.get(W)),Y(e)&&o.push(c.get(Se)));break;case"set":Y(e)&&o.push(c.get(W));break}if(o.length===1)o[0]&&Te(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);Te(_e(l))}}function Te(e,t){for(const n of y(e)?e:[...e])(n!==C||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kt=st("__proto__,__v_isRef,__isVue"),Ae=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Q)),Tt=Me(),At=Me(!0),Re=Rt();function Rt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=j(this);for(let i=0,c=this.length;i<c;i++)F(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const s=j(this)[t].apply(this,n);return ke(),s}}),e}function Me(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?zt:je:t?Bt:Ce).get(s))return s;const c=y(s);if(!e&&c&&U(Re,r))return Reflect.get(Re,r,i);const o=Reflect.get(s,r,i);return(Q(r)?Ae.has(r):kt(r))||(e||F(s,"get",r),t)?o:re(o)?!c||!X(r)?o.value:o:S(o)?e?Ht(o):D(o):o}}const Mt=Ct();function Ct(e=!1){return function(n,s,r,i){let c=n[s];if(!e&&!Lt(r)&&(r=j(r),c=j(c),!y(n)&&re(c)&&!re(r)))return c.value=r,!0;const o=y(n)&&X(s)?Number(s)<n.length:U(n,s),l=Reflect.set(n,s,r,i);return n===j(i)&&(o?gt(r,c)&&se(n,"set",s,r):se(n,"add",s,r)),l}}function jt(e,t){const n=U(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&se(e,"delete",t,void 0),s}function Pt(e,t){const n=Reflect.has(e,t);return(!Q(t)||!Ae.has(t))&&F(e,"has",t),n}function It(e){return F(e,"iterate",y(e)?"length":W),Reflect.ownKeys(e)}const Nt={get:Tt,set:Mt,deleteProperty:jt,has:Pt,ownKeys:It},Kt={get:At,set(e,t){return!0},deleteProperty(e,t){return!0}},Ce=new WeakMap,Bt=new WeakMap,je=new WeakMap,zt=new WeakMap;function Dt(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vt(e){return e.__v_skip||!Object.isExtensible(e)?0:Dt(pt(e))}function D(e){return e&&e.__v_isReadonly?e:Pe(e,!1,Nt,null,Ce)}function Ht(e){return Pe(e,!0,Kt,null,je)}function Pe(e,t,n,s,r){if(!S(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const c=Vt(e);if(c===0)return e;const o=new Proxy(e,c===2?s:n);return r.set(e,o),o}function Lt(e){return!!(e&&e.__v_isReadonly)}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function re(e){return Boolean(e&&e.__v_isRef===!0)}Promise.resolve();let oe=!1;const q=[],Wt=Promise.resolve(),V=e=>Wt.then(e),Ie=e=>{q.includes(e)||q.push(e),oe||(oe=!0,V(Ft))},Ft=()=>{for(const e of q)e();q.length=0,oe=!1},qt=/^(spellcheck|draggable|form|list|type)$/,ie=({el:e,get:t,effect:n,arg:s,modifiers:r})=>{let i;s==="class"&&(e._class=e.className),n(()=>{let c=t();if(s)(r==null?void 0:r.camel)&&(s=dt(s)),ce(e,s,c,i);else{for(const o in c)ce(e,o,c[o],i&&i[o]);for(const o in i)(!c||!(o in c))&&ce(e,o,null)}i=c})},ce=(e,t,n,s)=>{if(t==="class")e.setAttribute("class",me(e._class?[e._class,n]:n)||"");else if(t==="style"){n=de(n);const{style:r}=e;if(!n)e.removeAttribute("style");else if(N(n))n!==s&&(r.cssText=n);else{for(const i in n)le(r,i,n[i]);if(s&&!N(s))for(const i in s)n[i]==null&&le(r,i,"")}}else!(e instanceof SVGElement)&&t in e&&!qt.test(t)?(e[t]=n,t==="value"&&(e._value=n)):t==="true-value"?e._trueValue=n:t==="false-value"?e._falseValue=n:n!=null?e.setAttribute(t,n):e.removeAttribute(t)},Ne=/\s*!important$/,le=(e,t,n)=>{y(n)?n.forEach(s=>le(e,t,s)):t.startsWith("--")?e.setProperty(t,n):Ne.test(n)?e.setProperty(xe(t),n.replace(Ne,""),"important"):e[t]=n},k=(e,t)=>{const n=e.getAttribute(t);return n!=null&&e.removeAttribute(t),n},T=(e,t,n,s)=>{e.addEventListener(t,n,s)},Jt=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Zt=["ctrl","shift","alt","meta"],Gt={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zt.some(n=>e[`${n}Key`]&&!t[n])},Ke=({el:e,get:t,exp:n,arg:s,modifiers:r})=>{if(!s)return;let i=Jt.test(n)?t(`(e => ${n}(e))`):t(`($event => { ${n} })`);if(s==="vue:mounted"){V(i);return}else if(s==="vue:unmounted")return()=>i();if(r){s==="click"&&(r.right&&(s="contextmenu"),r.middle&&(s="mouseup"));const c=i;i=o=>{if(!("key"in o&&!(xe(o.key)in r))){for(const l in r){const f=Gt[l];if(f&&f(o,r))return}return c(o)}}}T(e,s,i,r)},Ut=({el:e,get:t,effect:n})=>{const s=e.style.display;n(()=>{e.style.display=t()?s:"none"})},Be=({el:e,get:t,effect:n})=>{n(()=>{e.textContent=ze(t())})},ze=e=>e==null?"":S(e)?JSON.stringify(e,null,2):String(e),Yt=({el:e,get:t,effect:n})=>{n(()=>{e.innerHTML=t()})},Qt=({el:e,exp:t,get:n,effect:s,modifiers:r})=>{const i=e.type,c=n(`(val) => { ${t} = val }`),{trim:o,number:l=i==="number"}=r||{};if(e.tagName==="SELECT"){const f=e;T(e,"change",()=>{const a=Array.prototype.filter.call(f.options,u=>u.selected).map(u=>l?ve(A(u)):A(u));c(f.multiple?a:a[0])}),s(()=>{const a=n(),u=f.multiple;for(let p=0,x=f.options.length;p<x;p++){const b=f.options[p],v=A(b);if(u)y(a)?b.selected=G(a,v)>-1:b.selected=a.has(v);else if(I(A(b),a)){f.selectedIndex!==p&&(f.selectedIndex=p);return}}!u&&f.selectedIndex!==-1&&(f.selectedIndex=-1)})}else if(i==="checkbox"){T(e,"change",()=>{const a=n(),u=e.checked;if(y(a)){const p=A(e),x=G(a,p),b=x!==-1;if(u&&!b)c(a.concat(p));else if(!u&&b){const v=[...a];v.splice(x,1),c(v)}}else c(De(e,u))});let f;s(()=>{const a=n();y(a)?e.checked=G(a,A(e))>-1:a!==f&&(e.checked=I(a,De(e,!0))),f=a})}else if(i==="radio"){T(e,"change",()=>{c(A(e))});let f;s(()=>{const a=n();a!==f&&(e.checked=I(a,A(e)))})}else{const f=a=>o?a.trim():l?ve(a):a;T(e,"compositionstart",Xt),T(e,"compositionend",en),T(e,(r==null?void 0:r.lazy)?"change":"input",()=>{e.composing||c(f(e.value))}),o&&T(e,"change",()=>{e.value=e.value.trim()}),s(()=>{if(e.composing)return;const a=e.value,u=n();document.activeElement===e&&f(a)===u||a!==u&&(e.value=u)})}},A=e=>"_value"in e?e._value:e.value,De=(e,t)=>{const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t},Xt=e=>{e.target.composing=!0},en=e=>{const t=e.target;t.composing&&(t.composing=!1,tn(t,"input"))},tn=(e,t)=>{const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)},Ve=Object.create(null),H=(e,t,n)=>He(e,`return(${t})`,n),He=(e,t,n)=>{const s=Ve[t]||(Ve[t]=nn(t));try{return s(e,n)}catch(r){console.error(r)}},nn=e=>{try{return new Function("$data","$el",`with($data){${e}}`)}catch(t){return console.error(`${t.message} in expression: ${e}`),()=>{}}},sn=({el:e,ctx:t,exp:n,effect:s})=>{V(()=>s(()=>He(t.scope,n,e)))},rn={bind:ie,on:Ke,show:Ut,text:Be,html:Yt,model:Qt,effect:sn},on=(e,t,n)=>{const s=e.parentElement,r=new Comment("v-if");s.insertBefore(r,e);const i=[{exp:t,el:e}];let c,o;for(;(c=e.nextElementSibling)&&(o=null,k(c,"v-else")===""||(o=k(c,"v-else-if")));)s.removeChild(c),i.push({exp:o,el:c});const l=e.nextSibling;s.removeChild(e);let f,a=-1;const u=()=>{f&&(s.insertBefore(r,f.el),f.remove(),f=void 0)};return n.effect(()=>{for(let p=0;p<i.length;p++){const{exp:x,el:b}=i[p];if(!x||H(n.scope,x)){p!==a&&(u(),f=new ue(b,n),f.insert(s,r),s.removeChild(r),a=p);return}}a=-1,u()}),l},cn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Le=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,ln=/^\(|\)$/g,fn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,an=(e,t,n)=>{const s=t.match(cn);if(!s)return;const r=e.nextSibling,i=e.parentElement,c=new Text("");i.insertBefore(c,e),i.removeChild(e);const o=s[2].trim();let l=s[1].trim().replace(ln,"").trim(),f,a=!1,u,p,x="key",b=e.getAttribute(x)||e.getAttribute(x=":key")||e.getAttribute(x="v-bind:key");b&&(e.removeAttribute(x),x==="key"&&(b=JSON.stringify(b)));let v;(v=l.match(Le))&&(l=l.replace(Le,"").trim(),u=v[1].trim(),v[2]&&(p=v[2].trim())),(v=l.match(fn))&&(f=v[1].split(",").map(m=>m.trim()),a=l[0]==="[");let pe=!1,R,L,J;const et=m=>{const w=new Map,h=[];if(y(m))for(let d=0;d<m.length;d++)h.push(Z(w,m[d],d));else if(typeof m=="number")for(let d=0;d<m;d++)h.push(Z(w,d+1,d));else if(S(m)){let d=0;for(const g in m)h.push(Z(w,m[g],d++,g))}return[h,w]},Z=(m,w,h,d)=>{const g={};f?f.forEach((M,E)=>g[M]=w[a?E:M]):g[l]=w,d?(u&&(g[u]=d),p&&(g[p]=h)):u&&(g[u]=h);const P=Ge(n,g),_=b?H(P.scope,b):h;return m.set(_,h),P.key=_,P},he=(m,w)=>{const h=new ue(e,m);return h.key=m.key,h.insert(i,w),h};return n.effect(()=>{const m=H(n.scope,o),w=J;if([L,J]=et(m),!pe)R=L.map(h=>he(h,c)),pe=!0;else{for(let _=0;_<R.length;_++)J.has(R[_].key)||R[_].remove();const h=[];let d=L.length,g,P;for(;d--;){const _=L[d],M=w.get(_.key);let E;M==null?E=he(_,g?g.el:c):(E=R[M],Object.assign(E.ctx.scope,_.scope),M!==d&&(R[M+1]!==g||P===g)&&(P=E,E.insert(i,g?g.el:c))),h.unshift(g=E)}R=h}}),r},We=({el:e,ctx:{scope:{$refs:t}},get:n,effect:s})=>{let r;return s(()=>{const i=n();t[i]=e,r&&i!==r&&delete t[r],r=i}),()=>{r&&delete t[r]}},un=/^(?:v-|:|@)/,pn=/\.([\w-]+)/g;let fe=!1;const Fe=(e,t)=>{const n=e.nodeType;if(n===1){const s=e;if(s.hasAttribute("v-pre"))return;k(s,"v-cloak");let r;if(r=k(s,"v-if"))return on(s,r,t);if(r=k(s,"v-for"))return an(s,r,t);if((r=k(s,"v-scope"))||r===""){const o=r?H(t.scope,r):{};t=Ge(t,o),o.$template&&hn(s,o.$template)}const i=k(s,"v-once")!=null;i&&(fe=!0),(r=k(s,"ref"))&&ae(s,We,`"${r}"`,t),qe(s,t);const c=[];for(const{name:o,value:l}of[...s.attributes])un.test(o)&&o!=="v-cloak"&&(o==="v-model"?c.unshift([o,l]):o[0]==="@"||/^v-on\b/.test(o)?c.push([o,l]):Je(s,o,l,t));for(const[o,l]of c)Je(s,o,l,t);i&&(fe=!1)}else if(n===3){const s=e.data;if(s.includes(t.delimiters[0])){let r=[],i=0,c;for(;c=t.delimitersRE.exec(s);){const o=s.slice(i,c.index);o&&r.push(JSON.stringify(o)),r.push(`$s(${c[1]})`),i=c.index+c[0].length}i<s.length&&r.push(JSON.stringify(s.slice(i))),ae(e,Be,r.join("+"),t)}}else n===11&&qe(e,t)},qe=(e,t)=>{let n=e.firstChild;for(;n;)n=Fe(n,t)||n.nextSibling},Je=(e,t,n,s)=>{let r,i,c;if(t=t.replace(pn,(o,l)=>((c||(c={}))[l]=!0,"")),t[0]===":")r=ie,i=t.slice(1);else if(t[0]==="@")r=Ke,i=t.slice(1);else{const o=t.indexOf(":"),l=o>0?t.slice(2,o):t.slice(2);r=rn[l]||s.dirs[l],i=o>0?t.slice(o+1):void 0}r&&(r===ie&&i==="ref"&&(r=We),ae(e,r,n,s,i,c),e.removeAttribute(t))},ae=(e,t,n,s,r,i)=>{const c=t({el:e,get:(o=n)=>H(s.scope,o,e),effect:s.effect,ctx:s,exp:n,arg:r,modifiers:i});c&&s.cleanups.push(c)},hn=(e,t)=>{if(t[0]==="#"){const n=document.querySelector(t);e.appendChild(n.content.cloneNode(!0));return}e.innerHTML=t},Ze=e=>{const t={delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g,...e,scope:e?e.scope:D({}),dirs:e?e.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(fe)return Ie(n),n;const s=wt(n,{scheduler:()=>Ie(s)});return t.effects.push(s),s}};return t},Ge=(e,t={})=>{const n=e.scope,s=Object.create(n);Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)),s.$refs=Object.create(n.$refs);const r=D(new Proxy(s,{set(i,c,o,l){return l===r&&!i.hasOwnProperty(c)?Reflect.set(n,c,o):Reflect.set(i,c,o,l)}}));return Ue(r),{...e,scope:r}},Ue=e=>{for(const t of Object.keys(e))typeof e[t]=="function"&&(e[t]=e[t].bind(e))};class ue{constructor(t,n,s=!1){$(this,"template");$(this,"ctx");$(this,"key");$(this,"parentCtx");$(this,"isFragment");$(this,"start");$(this,"end");this.isFragment=t instanceof HTMLTemplateElement,s?this.template=t:this.isFragment?this.template=t.content.cloneNode(!0):this.template=t.cloneNode(!0),s?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=Ze(n)),Fe(this.template,this.ctx)}get el(){return this.start||this.template}insert(t,n=null){if(this.isFragment)if(this.start){let s=this.start,r;for(;s&&(r=s.nextSibling,t.insertBefore(s,n),s!==this.end);)s=r}else this.start=new Text(""),this.end=new Text(""),t.insertBefore(this.end,n),t.insertBefore(this.start,this.end),t.insertBefore(this.template,this.end);else t.insertBefore(this.template,n)}remove(){if(this.parentCtx&&ft(this.parentCtx.blocks,this),this.start){const t=this.start.parentNode;let n=this.start,s;for(;n&&(s=n.nextSibling,t.removeChild(n),n!==this.end);)n=s}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(t=>{t.teardown()}),this.ctx.effects.forEach(_t),this.ctx.cleanups.forEach(t=>t())}}const Ye=e=>e.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),Qe=e=>{const t=Ze();if(e&&(t.scope=D(e),Ue(t.scope),e.$delimiters)){const[s,r]=t.delimiters=e.$delimiters;t.delimitersRE=new RegExp(Ye(s)+"([^]+?)"+Ye(r),"g")}t.scope.$s=ze,t.scope.$nextTick=V,t.scope.$refs=Object.create(null);let n;return{directive(s,r){return r?(t.dirs[s]=r,this):t.dirs[s]},mount(s){if(typeof s=="string"&&(s=document.querySelector(s),!s))return;s=s||document.documentElement;let r;return s.hasAttribute("v-scope")?r=[s]:r=[...s.querySelectorAll("[v-scope]")].filter(i=>!i.matches("[v-scope] [v-scope]")),r.length||(r=[s]),n=r.map(i=>new ue(i,t,!0)),this},unmount(){n.forEach(s=>s.teardown())}}},Xe=document.currentScript;Xe&&Xe.hasAttribute("init")&&Qe().mount();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/home": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdmatthams_webflow"] = self["webpackChunkdmatthams_webflow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/home.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;