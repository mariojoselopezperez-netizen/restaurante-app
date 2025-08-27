(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function AA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zd={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function SA(){if(P_)return Vl;P_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Vl.Fragment=e,Vl.jsx=n,Vl.jsxs=n,Vl}var k_;function wA(){return k_||(k_=1,zd.exports=SA()),zd.exports}var A=wA(),qd={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function RA(){if(U_)return Ce;U_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=C&&N[C]||N["@@iterator"],typeof N=="function"?N:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,se={};function W(N,Z,re){this.props=N,this.context=Z,this.refs=se,this.updater=re||F}W.prototype.isReactComponent={},W.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},W.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Ae(){}Ae.prototype=W.prototype;function ye(N,Z,re){this.props=N,this.context=Z,this.refs=se,this.updater=re||F}var me=ye.prototype=new Ae;me.constructor=ye,J(me,W.prototype),me.isPureReactComponent=!0;var ze=Array.isArray,Se={H:null,A:null,T:null,S:null,V:null},oe=Object.prototype.hasOwnProperty;function V(N,Z,re,ee,he,Ie){return re=Ie.ref,{$$typeof:r,type:N,key:Z,ref:re!==void 0?re:null,props:Ie}}function S(N,Z){return V(N.type,Z,void 0,void 0,void 0,N.props)}function I(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function O(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(re){return Z[re]})}var M=/\/+/g;function P(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):Z.toString(36)}function R(){}function xt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(R,R):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function dt(N,Z,re,ee,he){var Ie=typeof N;(Ie==="undefined"||Ie==="boolean")&&(N=null);var Te=!1;if(N===null)Te=!0;else switch(Ie){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(N.$$typeof){case r:case e:Te=!0;break;case T:return Te=N._init,dt(Te(N._payload),Z,re,ee,he)}}if(Te)return he=he(N),Te=ee===""?"."+P(N,0):ee,ze(he)?(re="",Te!=null&&(re=Te.replace(M,"$&/")+"/"),dt(he,Z,re,"",function(Tn){return Tn})):he!=null&&(I(he)&&(he=S(he,re+(he.key==null||N&&N.key===he.key?"":(""+he.key).replace(M,"$&/")+"/")+Te)),Z.push(he)),1;Te=0;var vt=ee===""?".":ee+":";if(ze(N))for(var Xe=0;Xe<N.length;Xe++)ee=N[Xe],Ie=vt+P(ee,Xe),Te+=dt(ee,Z,re,Ie,he);else if(Xe=x(N),typeof Xe=="function")for(N=Xe.call(N),Xe=0;!(ee=N.next()).done;)ee=ee.value,Ie=vt+P(ee,Xe++),Te+=dt(ee,Z,re,Ie,he);else if(Ie==="object"){if(typeof N.then=="function")return dt(xt(N),Z,re,ee,he);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Te}function G(N,Z,re){if(N==null)return N;var ee=[],he=0;return dt(N,ee,"","",function(Ie){return Z.call(re,Ie,he++)}),ee}function ie(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(re){(N._status===0||N._status===-1)&&(N._status=1,N._result=re)},function(re){(N._status===0||N._status===-1)&&(N._status=2,N._result=re)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ke(){}return Ce.Children={map:G,forEach:function(N,Z,re){G(N,function(){Z.apply(this,arguments)},re)},count:function(N){var Z=0;return G(N,function(){Z++}),Z},toArray:function(N){return G(N,function(Z){return Z})||[]},only:function(N){if(!I(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ce.Component=W,Ce.Fragment=n,Ce.Profiler=l,Ce.PureComponent=ye,Ce.StrictMode=s,Ce.Suspense=g,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return Se.H.useMemoCache(N)}},Ce.cache=function(N){return function(){return N.apply(null,arguments)}},Ce.cloneElement=function(N,Z,re){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ee=J({},N.props),he=N.key,Ie=void 0;if(Z!=null)for(Te in Z.ref!==void 0&&(Ie=void 0),Z.key!==void 0&&(he=""+Z.key),Z)!oe.call(Z,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&Z.ref===void 0||(ee[Te]=Z[Te]);var Te=arguments.length-2;if(Te===1)ee.children=re;else if(1<Te){for(var vt=Array(Te),Xe=0;Xe<Te;Xe++)vt[Xe]=arguments[Xe+2];ee.children=vt}return V(N.type,he,void 0,void 0,Ie,ee)},Ce.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},Ce.createElement=function(N,Z,re){var ee,he={},Ie=null;if(Z!=null)for(ee in Z.key!==void 0&&(Ie=""+Z.key),Z)oe.call(Z,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(he[ee]=Z[ee]);var Te=arguments.length-2;if(Te===1)he.children=re;else if(1<Te){for(var vt=Array(Te),Xe=0;Xe<Te;Xe++)vt[Xe]=arguments[Xe+2];he.children=vt}if(N&&N.defaultProps)for(ee in Te=N.defaultProps,Te)he[ee]===void 0&&(he[ee]=Te[ee]);return V(N,Ie,void 0,void 0,null,he)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(N){return{$$typeof:p,render:N}},Ce.isValidElement=I,Ce.lazy=function(N){return{$$typeof:T,_payload:{_status:-1,_result:N},_init:ie}},Ce.memo=function(N,Z){return{$$typeof:y,type:N,compare:Z===void 0?null:Z}},Ce.startTransition=function(N){var Z=Se.T,re={};Se.T=re;try{var ee=N(),he=Se.S;he!==null&&he(re,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(ke,ce)}catch(Ie){ce(Ie)}finally{Se.T=Z}},Ce.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()},Ce.use=function(N){return Se.H.use(N)},Ce.useActionState=function(N,Z,re){return Se.H.useActionState(N,Z,re)},Ce.useCallback=function(N,Z){return Se.H.useCallback(N,Z)},Ce.useContext=function(N){return Se.H.useContext(N)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(N,Z){return Se.H.useDeferredValue(N,Z)},Ce.useEffect=function(N,Z,re){var ee=Se.H;if(typeof re=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(N,Z)},Ce.useId=function(){return Se.H.useId()},Ce.useImperativeHandle=function(N,Z,re){return Se.H.useImperativeHandle(N,Z,re)},Ce.useInsertionEffect=function(N,Z){return Se.H.useInsertionEffect(N,Z)},Ce.useLayoutEffect=function(N,Z){return Se.H.useLayoutEffect(N,Z)},Ce.useMemo=function(N,Z){return Se.H.useMemo(N,Z)},Ce.useOptimistic=function(N,Z){return Se.H.useOptimistic(N,Z)},Ce.useReducer=function(N,Z,re){return Se.H.useReducer(N,Z,re)},Ce.useRef=function(N){return Se.H.useRef(N)},Ce.useState=function(N){return Se.H.useState(N)},Ce.useSyncExternalStore=function(N,Z,re){return Se.H.useSyncExternalStore(N,Z,re)},Ce.useTransition=function(){return Se.H.useTransition()},Ce.version="19.1.1",Ce}var L_;function Dm(){return L_||(L_=1,qd.exports=RA()),qd.exports}var Oe=Dm();const IA=AA(Oe);var Bd={exports:{}},Ml={},Hd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function CA(){return j_||(j_=1,(function(r){function e(G,ie){var ce=G.length;G.push(ie);e:for(;0<ce;){var ke=ce-1>>>1,N=G[ke];if(0<l(N,ie))G[ke]=ie,G[ce]=N,ce=ke;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ie=G[0],ce=G.pop();if(ce!==ie){G[0]=ce;e:for(var ke=0,N=G.length,Z=N>>>1;ke<Z;){var re=2*(ke+1)-1,ee=G[re],he=re+1,Ie=G[he];if(0>l(ee,ce))he<N&&0>l(Ie,ee)?(G[ke]=Ie,G[he]=ce,ke=he):(G[ke]=ee,G[re]=ce,ke=re);else if(he<N&&0>l(Ie,ce))G[ke]=Ie,G[he]=ce,ke=he;else break e}}return ie}function l(G,ie){var ce=G.sortIndex-ie.sortIndex;return ce!==0?ce:G.id-ie.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],y=[],T=1,C=null,x=3,F=!1,J=!1,se=!1,W=!1,Ae=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function ze(G){for(var ie=n(y);ie!==null;){if(ie.callback===null)s(y);else if(ie.startTime<=G)s(y),ie.sortIndex=ie.expirationTime,e(g,ie);else break;ie=n(y)}}function Se(G){if(se=!1,ze(G),!J)if(n(g)!==null)J=!0,oe||(oe=!0,P());else{var ie=n(y);ie!==null&&dt(Se,ie.startTime-G)}}var oe=!1,V=-1,S=5,I=-1;function O(){return W?!0:!(r.unstable_now()-I<S)}function M(){if(W=!1,oe){var G=r.unstable_now();I=G;var ie=!0;try{e:{J=!1,se&&(se=!1,ye(V),V=-1),F=!0;var ce=x;try{t:{for(ze(G),C=n(g);C!==null&&!(C.expirationTime>G&&O());){var ke=C.callback;if(typeof ke=="function"){C.callback=null,x=C.priorityLevel;var N=ke(C.expirationTime<=G);if(G=r.unstable_now(),typeof N=="function"){C.callback=N,ze(G),ie=!0;break t}C===n(g)&&s(g),ze(G)}else s(g);C=n(g)}if(C!==null)ie=!0;else{var Z=n(y);Z!==null&&dt(Se,Z.startTime-G),ie=!1}}break e}finally{C=null,x=ce,F=!1}ie=void 0}}finally{ie?P():oe=!1}}}var P;if(typeof me=="function")P=function(){me(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,xt=R.port2;R.port1.onmessage=M,P=function(){xt.postMessage(null)}}else P=function(){Ae(M,0)};function dt(G,ie){V=Ae(function(){G(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(G){switch(x){case 1:case 2:case 3:var ie=3;break;default:ie=x}var ce=x;x=ie;try{return G()}finally{x=ce}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(G,ie){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ce=x;x=G;try{return ie()}finally{x=ce}},r.unstable_scheduleCallback=function(G,ie,ce){var ke=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?ke+ce:ke):ce=ke,G){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ce+N,G={id:T++,callback:ie,priorityLevel:G,startTime:ce,expirationTime:N,sortIndex:-1},ce>ke?(G.sortIndex=ce,e(y,G),n(g)===null&&G===n(y)&&(se?(ye(V),V=-1):se=!0,dt(Se,ce-ke))):(G.sortIndex=N,e(g,G),J||F||(J=!0,oe||(oe=!0,P()))),G},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(G){var ie=x;return function(){var ce=x;x=ie;try{return G.apply(this,arguments)}finally{x=ce}}}})(Fd)),Fd}var z_;function xA(){return z_||(z_=1,Hd.exports=CA()),Hd.exports}var Gd={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function NA(){if(q_)return un;q_=1;var r=Dm();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,y,T){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:C==null?null:""+C,children:g,containerInfo:y,implementation:T}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,T)},un.flushSync=function(g){var y=d.T,T=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=y,s.p=T,s.d.f()}},un.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},un.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},un.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,C=p(T,y.crossOrigin),x=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:x,fetchPriority:F}):T==="script"&&s.d.X(g,{crossOrigin:C,integrity:x,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},un.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},un.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,C=p(T,y.crossOrigin);s.d.L(g,T,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},un.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},un.requestFormReset=function(g){s.d.r(g)},un.unstable_batchedUpdates=function(g,y){return g(y)},un.useFormState=function(g,y,T){return d.H.useFormState(g,y,T)},un.useFormStatus=function(){return d.H.useHostTransitionStatus()},un.version="19.1.1",un}var B_;function DA(){if(B_)return Gd.exports;B_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gd.exports=NA(),Gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function OA(){if(H_)return Ml;H_=1;var r=xA(),e=Dm(),n=DA();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function d(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,o=i;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return p(h),t;if(f===o)return p(h),i;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=f;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,o=f;break}if(E===o){v=!0,o=h,a=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===a){v=!0,a=f,o=h;break}if(E===o){v=!0,o=f,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var T=Object.assign,C=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),Ae=Symbol.for("react.provider"),ye=Symbol.for("react.consumer"),me=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function xt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case W:return"Profiler";case se:return"StrictMode";case Se:return"Suspense";case oe:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case me:return(t.displayName||"Context")+".Provider";case ye:return(t._context.displayName||"Context")+".Consumer";case ze:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return i=t.displayName||null,i!==null?i:xt(t.type)||"Memo";case S:i=t._payload,t=t._init;try{return xt(t(i))}catch{}}return null}var dt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ke=[],N=-1;function Z(t){return{current:t}}function re(t){0>N||(t.current=ke[N],ke[N]=null,N--)}function ee(t,i){N++,ke[N]=t.current,t.current=i}var he=Z(null),Ie=Z(null),Te=Z(null),vt=Z(null);function Xe(t,i){switch(ee(Te,i),ee(Ie,t),ee(he,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=u_(i),t=c_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(he),ee(he,t)}function Tn(){re(he),re(Ie),re(Te)}function _i(t){t.memoizedState!==null&&ee(vt,t);var i=he.current,a=c_(i,t.type);i!==a&&(ee(Ie,t),ee(he,a))}function In(t){Ie.current===t&&(re(he),re(Ie)),vt.current===t&&(re(vt),Cl._currentValue=ce)}var an=Object.prototype.hasOwnProperty,vi=r.unstable_scheduleCallback,Gi=r.unstable_cancelCallback,xr=r.unstable_shouldYield,ws=r.unstable_requestPaint,dn=r.unstable_now,Do=r.unstable_getCurrentPriorityLevel,Nr=r.unstable_ImmediatePriority,Dr=r.unstable_UserBlockingPriority,Qi=r.unstable_NormalPriority,Oo=r.unstable_LowPriority,Or=r.unstable_IdlePriority,Rs=r.log,ma=r.unstable_setDisableYieldValue,mt=null,$e=null;function mn(t){if(typeof Rs=="function"&&ma(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(mt,t)}catch{}}var qt=Math.clz32?Math.clz32:Ki,pa=Math.log,Vo=Math.LN2;function Ki(t){return t>>>=0,t===0?32:31-(pa(t)/Vo|0)|0}var Yi=256,Ei=4194304;function Cn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ti(t,i,a){var o=t.pendingLanes;if(o===0)return 0;var h=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?h=Cn(o):(v&=E,v!==0?h=Cn(v):a||(a=E&~t,a!==0&&(h=Cn(a))))):(E=o&~f,E!==0?h=Cn(E):v!==0?h=Cn(v):a||(a=o&~t,a!==0&&(h=Cn(a)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:h}function Xi(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Is(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cs(){var t=Yi;return Yi<<=1,(Yi&4194048)===0&&(Yi=256),t}function xs(){var t=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),t}function Fn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ui(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ns(t,i,a,o,h,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,w=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-qt(a),X=1<<Q;E[Q]=0,w[Q]=-1;var q=j[Q];if(q!==null)for(j[Q]=null,Q=0;Q<q.length;Q++){var B=q[Q];B!==null&&(B.lane&=-536870913)}a&=~X}o!==0&&Gn(t,o,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~i))}function Gn(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-qt(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function z(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var o=31-qt(a),h=1<<o;h&i|t[o]&i&&(t[o]|=i),a&=~h}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Re(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=ie.p;return t!==0?t:(t=window.event,t===void 0?32:x_(t.type))}function Et(t,i){var a=ie.p;try{return ie.p=t,i()}finally{ie.p=a}}var Ne=Math.random().toString(36).slice(2),ot="__reactFiber$"+Ne,Ke="__reactProps$"+Ne,ct="__reactContainer$"+Ne,pn="__reactEvents$"+Ne,Mo="__reactListeners$"+Ne,ci="__reactHandles$"+Ne,Ds="__reactResources$"+Ne,Qn="__reactMarker$"+Ne;function bi(t){delete t[ot],delete t[Ke],delete t[pn],delete t[Mo],delete t[ci]}function Kn(t){var i=t[ot];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ct]||a[ot]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=m_(t);t!==null;){if(a=t[ot])return a;t=m_(t)}return i}t=a,a=t.parentNode}return null}function xn(t){if(t=t[ot]||t[ct]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function gn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function on(t){var i=t[Ds];return i||(i=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ht(t){t[Qn]=!0}var $t=new Set,Yn={};function Bt(t,i){Nn(t,i),Nn(t+"Capture",i)}function Nn(t,i){for(Yn[t]=i,t=0;t<i.length;t++)$t.add(i[t])}var ga=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},$i={};function Ai(t){return an.call($i,t)?!0:an.call(Xn,t)?!1:ga.test(t)?$i[t]=!0:(Xn[t]=!0,!1)}function Si(t,i,a){if(Ai(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function $n(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function At(t,i,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+o)}}var tt,Dn;function Zi(t){if(tt===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);tt=i&&i[1]||"",Dn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+t+Dn}var ya=!1;function _a(t,i){if(!t||ya)return"";ya=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(B){var q=B}Reflect.construct(t,[],X)}else{try{X.call()}catch(B){q=B}t.call(X.prototype)}}else{try{throw Error()}catch(B){q=B}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(B){if(B&&q&&typeof B.stack=="string")return[B.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var w=v.split(`
`),j=E.split(`
`);for(h=o=0;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(o===w.length||h===j.length)for(o=w.length-1,h=j.length-1;1<=o&&0<=h&&w[o]!==j[h];)h--;for(;1<=o&&0<=h;o--,h--)if(w[o]!==j[h]){if(o!==1||h!==1)do if(o--,h--,0>h||w[o]!==j[h]){var Q=`
`+w[o].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=o&&0<=h);break}}}finally{ya=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zi(a):""}function Po(t){switch(t.tag){case 26:case 27:case 5:return Zi(t.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 15:return _a(t.type,!1);case 11:return _a(t.type.render,!1);case 1:return _a(t.type,!0);case 31:return Zi("Activity");default:return""}}function va(t){try{var i="";do i+=Po(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ko(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Hh(t){var i=ko(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,f=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,f.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ea(t){t._valueTracker||(t._valueTracker=Hh(t))}function Uo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return t&&(o=ko(t)?t.checked?"true":"false":t.value),t=o,t!==a?(i.setValue(t),!0):!1}function Os(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fh=/[\n"\\]/g;function Nt(t){return t.replace(Fh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function On(t,i,a,o,h,f,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+yn(i)):t.value!==""+yn(i)&&(t.value=""+yn(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?Vr(t,v,yn(i)):a!=null?Vr(t,v,yn(a)):o!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+yn(E):t.removeAttribute("name")}function Vs(t,i,a,o,h,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;a=a!=null?""+yn(a):"",i=i!=null?""+yn(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Vr(t,i,a){i==="number"&&Os(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ji(t,i,a,o){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&o&&(t[a].defaultSelected=!0)}else{for(a=""+yn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,o&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function nt(t,i,a){if(i!=null&&(i=""+yn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+yn(a):""}function Ms(t,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=yn(i),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Zn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ps=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tu(t,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,a):typeof a!="number"||a===0||Ps.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Lo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&Tu(t,h,o)}else for(var f in i)i.hasOwnProperty(f)&&Tu(t,f,i[f])}function jo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ta(t){return Qh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Wi=null;function Jn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var er=null,tr=null;function zo(t){var i=xn(t);if(i&&(t=i.stateNode)){var a=t[Ke]||null;e:switch(t=i.stateNode,i.type){case"input":if(On(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==t&&o.form===t.form){var h=o[Ke]||null;if(!h)throw Error(s(90));On(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===t.form&&Uo(o)}break e;case"textarea":nt(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ji(t,!!a.multiple,i,!1)}}}var wi=!1;function bu(t,i,a){if(wi)return t(i,a);wi=!0;try{var o=t(i);return o}finally{if(wi=!1,(er!==null||tr!==null)&&(pc(),er&&(i=er,t=tr,tr=er=null,zo(i),t)))for(i=0;i<t.length;i++)zo(t[i])}}function ks(t,i){var a=t.stateNode;if(a===null)return null;var o=a[Ke]||null;if(o===null)return null;a=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wn=!1;if(hi)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Wn=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Wn=!1}var Ri=null,Mr=null,nr=null;function qo(){if(nr)return nr;var t,i=Mr,a=i.length,o,h="value"in Ri?Ri.value:Ri.textContent,f=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(o=1;o<=v&&i[a-o]===h[f-o];o++);return nr=h.slice(t,1<o?1-o:void 0)}function Ii(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ci(){return!0}function Bo(){return!1}function Ht(t){function i(a,o,h,f,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ci:Bo,this.isPropagationStopped=Bo,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),i}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Ht(Je),Ls=T({},Je,{view:0,detail:0}),Au=Ht(Ls),Aa,Sa,xi,js=T({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(Aa=t.screenX-xi.screenX,Sa=t.screenY-xi.screenY):Sa=Aa=0,xi=t),Aa)},movementY:function(t){return"movementY"in t?t.movementY:Sa}}),ei=Ht(js),Su=T({},js,{dataTransfer:0}),Kh=Ht(Su),zs=T({},Ls,{relatedTarget:0}),wa=Ht(zs),Ho=T({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),Ra=Ht(Ho),wu=T({},Je,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ia=Ht(wu),Yh=T({},Je,{data:0}),Fo=Ht(Yh),qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Go(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Iu[t])?!!i[t]:!1}function Bs(){return Go}var Cu=T({},Ls,{key:function(t){if(t.key){var i=qs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ii(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ru[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(t){return t.type==="keypress"?Ii(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ii(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ca=Ht(Cu),xu=T({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=Ht(xu),ir=T({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),Nu=Ht(ir),Du=T({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ou=Ht(Du),Vu=T({},js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xa=Ht(Vu),_n=T({},Je,{newState:0,oldState:0}),Mu=Ht(_n),Pu=[9,13,27,32],Ni=hi&&"CompositionEvent"in window,u=null;hi&&"documentMode"in document&&(u=document.documentMode);var m=hi&&"TextEvent"in window&&!u,_=hi&&(!Ni||u&&8<u&&11>=u),b=" ",U=!1;function H(t,i){switch(t){case"keyup":return Pu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Be=!1;function kt(t,i){switch(t){case"compositionend":return te(i);case"keypress":return i.which!==32?null:(U=!0,b);case"textInput":return t=i.data,t===b&&U?null:t;default:return null}}function He(t,i){if(Be)return t==="compositionend"||!Ni&&H(t,i)?(t=qo(),nr=Mr=Ri=null,Be=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ft={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ut(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ft[t.type]:i==="textarea"}function rr(t,i,a,o){er?tr?tr.push(o):tr=[o]:er=o,i=Tc(i,"onChange"),0<i.length&&(a=new ba("onChange","change",null,a,o),t.push({event:a,listeners:i}))}var Zt=null,Di=null;function Ko(t){r_(t,0)}function ku(t){var i=gn(t);if(Uo(i))return t}function wp(t,i){if(t==="change")return i}var Rp=!1;if(hi){var Xh;if(hi){var $h="oninput"in document;if(!$h){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),$h=typeof Ip.oninput=="function"}Xh=$h}else Xh=!1;Rp=Xh&&(!document.documentMode||9<document.documentMode)}function Cp(){Zt&&(Zt.detachEvent("onpropertychange",xp),Di=Zt=null)}function xp(t){if(t.propertyName==="value"&&ku(Di)){var i=[];rr(i,Di,t,Jn(t)),bu(Ko,i)}}function WT(t,i,a){t==="focusin"?(Cp(),Zt=i,Di=a,Zt.attachEvent("onpropertychange",xp)):t==="focusout"&&Cp()}function eb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(Di)}function tb(t,i){if(t==="click")return ku(i)}function nb(t,i){if(t==="input"||t==="change")return ku(i)}function ib(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Vn=typeof Object.is=="function"?Object.is:ib;function Yo(t,i){if(Vn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!an.call(i,h)||!Vn(t[h],i[h]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dp(t,i){var a=Np(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=i&&o>=i)return{node:a,offset:i-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Op(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Op(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Os(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Os(t.document)}return i}function Zh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var rb=hi&&"documentMode"in document&&11>=document.documentMode,Na=null,Jh=null,Xo=null,Wh=!1;function Mp(t,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wh||Na==null||Na!==Os(o)||(o=Na,"selectionStart"in o&&Zh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xo&&Yo(Xo,o)||(Xo=o,o=Tc(Jh,"onSelect"),0<o.length&&(i=new ba("onSelect","select",null,i,a),t.push({event:i,listeners:o}),i.target=Na)))}function Hs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Da={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},ef={},Pp={};hi&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function Fs(t){if(ef[t])return ef[t];if(!Da[t])return t;var i=Da[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Pp)return ef[t]=i[a];return t}var kp=Fs("animationend"),Up=Fs("animationiteration"),Lp=Fs("animationstart"),sb=Fs("transitionrun"),ab=Fs("transitionstart"),ob=Fs("transitioncancel"),jp=Fs("transitionend"),zp=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function fi(t,i){zp.set(t,i),Bt(i,[t])}var qp=new WeakMap;function ti(t,i){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(i={value:t,source:i,stack:va(i)},qp.set(t,i),i)}return{value:t,source:i,stack:va(i)}}var ni=[],Oa=0,nf=0;function Uu(){for(var t=Oa,i=nf=Oa=0;i<t;){var a=ni[i];ni[i++]=null;var o=ni[i];ni[i++]=null;var h=ni[i];ni[i++]=null;var f=ni[i];if(ni[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}f!==0&&Bp(a,h,f)}}function Lu(t,i,a,o){ni[Oa++]=t,ni[Oa++]=i,ni[Oa++]=a,ni[Oa++]=o,nf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function rf(t,i,a,o){return Lu(t,i,a,o),ju(t)}function Va(t,i){return Lu(t,null,null,i),ju(t)}function Bp(t,i,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var h=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&i!==null&&(h=31-qt(a),t=f.hiddenUpdates,o=t[h],o===null?t[h]=[i]:o.push(i),i.lane=a|536870912),f):null}function ju(t){if(50<El)throw El=0,cd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ma={};function lb(t,i,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,i,a,o){return new lb(t,i,a,o)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sr(t,i){var a=t.alternate;return a===null?(a=Mn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function zu(t,i,a,o,h,f){var v=0;if(o=t,typeof t=="function")sf(t)&&(v=1);else if(typeof t=="string")v=cA(t,a,he.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=Mn(31,a,i,h),t.elementType=I,t.lanes=f,t;case J:return Gs(a.children,h,f,i);case se:v=8,h|=24;break;case W:return t=Mn(12,a,i,h|2),t.elementType=W,t.lanes=f,t;case Se:return t=Mn(13,a,i,h),t.elementType=Se,t.lanes=f,t;case oe:return t=Mn(19,a,i,h),t.elementType=oe,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ae:case me:v=10;break e;case ye:v=9;break e;case ze:v=11;break e;case V:v=14;break e;case S:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return i=Mn(v,a,i,h),i.elementType=t,i.type=o,i.lanes=f,i}function Gs(t,i,a,o){return t=Mn(7,t,o,i),t.lanes=a,t}function af(t,i,a){return t=Mn(6,t,null,i),t.lanes=a,t}function of(t,i,a){return i=Mn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Pa=[],ka=0,qu=null,Bu=0,ii=[],ri=0,Qs=null,ar=1,or="";function Ks(t,i){Pa[ka++]=Bu,Pa[ka++]=qu,qu=t,Bu=i}function Fp(t,i,a){ii[ri++]=ar,ii[ri++]=or,ii[ri++]=Qs,Qs=t;var o=ar;t=or;var h=32-qt(o)-1;o&=~(1<<h),a+=1;var f=32-qt(i)+h;if(30<f){var v=h-h%5;f=(o&(1<<v)-1).toString(32),o>>=v,h-=v,ar=1<<32-qt(i)+h|a<<h|o,or=f+t}else ar=1<<f|a<<h|o,or=t}function lf(t){t.return!==null&&(Ks(t,1),Fp(t,1,0))}function uf(t){for(;t===qu;)qu=Pa[--ka],Pa[ka]=null,Bu=Pa[--ka],Pa[ka]=null;for(;t===Qs;)Qs=ii[--ri],ii[ri]=null,or=ii[--ri],ii[ri]=null,ar=ii[--ri],ii[ri]=null}var vn=null,Tt=null,Ze=!1,Ys=null,Oi=!1,cf=Error(s(519));function Xs(t){var i=Error(s(418,""));throw Jo(ti(i,t)),cf}function Gp(t){var i=t.stateNode,a=t.type,o=t.memoizedProps;switch(i[ot]=t,i[Ke]=o,a){case"dialog":Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":case"embed":Pe("load",i);break;case"video":case"audio":for(a=0;a<bl.length;a++)Pe(bl[a],i);break;case"source":Pe("error",i);break;case"img":case"image":case"link":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"input":Pe("invalid",i),Vs(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ea(i);break;case"select":Pe("invalid",i);break;case"textarea":Pe("invalid",i),Ms(i,o.value,o.defaultValue,o.children),Ea(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||l_(i.textContent,a)?(o.popover!=null&&(Pe("beforetoggle",i),Pe("toggle",i)),o.onScroll!=null&&Pe("scroll",i),o.onScrollEnd!=null&&Pe("scrollend",i),o.onClick!=null&&(i.onclick=bc),i=!0):i=!1,i||Xs(t)}function Qp(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:vn=vn.return}}function $o(t){if(t!==vn)return!1;if(!Ze)return Qp(t),Ze=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rd(t.type,t.memoizedProps)),a=!a),a&&Tt&&Xs(t),Qp(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Tt=mi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Tt=null}}else i===27?(i=Tt,$r(t.type)?(t=Nd,Nd=null,Tt=t):Tt=i):Tt=vn?mi(t.stateNode.nextSibling):null;return!0}function Zo(){Tt=vn=null,Ze=!1}function Kp(){var t=Ys;return t!==null&&(Sn===null?Sn=t:Sn.push.apply(Sn,t),Ys=null),t}function Jo(t){Ys===null?Ys=[t]:Ys.push(t)}var hf=Z(null),$s=null,lr=null;function Pr(t,i,a){ee(hf,i._currentValue),i._currentValue=a}function ur(t){t._currentValue=hf.current,re(hf)}function ff(t,i,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===a)break;t=t.return}}function df(t,i,a,o){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var v=h.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ff(f.return,a,t),o||(v=null);break e}f=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),ff(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Wo(t,i,a,o){t=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;Vn(h.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(h===vt.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Cl):t=[Cl])}h=h.return}t!==null&&df(i,t,a,o),i.flags|=262144}function Hu(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zs(t){$s=t,lr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ln(t){return Yp($s,t)}function Fu(t,i){return $s===null&&Zs(t),Yp(t,i)}function Yp(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},lr===null){if(t===null)throw Error(s(308));lr=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else lr=lr.next=i;return a}var ub=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},cb=r.unstable_scheduleCallback,hb=r.unstable_NormalPriority,Lt={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new ub,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&cb(hb,function(){t.controller.abort()})}var tl=null,pf=0,Ua=0,La=null;function fb(t,i){if(tl===null){var a=tl=[];pf=0,Ua=yd(),La={status:"pending",value:void 0,then:function(o){a.push(o)}}}return pf++,i.then(Xp,Xp),i}function Xp(){if(--pf===0&&tl!==null){La!==null&&(La.status="fulfilled");var t=tl;tl=null,Ua=0,La=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function db(t,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var $p=G.S;G.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&fb(t,i),$p!==null&&$p(t,i)};var Js=Z(null);function gf(){var t=Js.current;return t!==null?t:ut.pooledCache}function Gu(t,i){i===null?ee(Js,Js.current):ee(Js,i.pool)}function Zp(){var t=gf();return t===null?null:{parent:Lt._currentValue,pool:t}}var nl=Error(s(460)),Jp=Error(s(474)),Qu=Error(s(542)),yf={then:function(){}};function Wp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ku(){}function eg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Ku,Ku),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ng(t),t;default:if(typeof i.status=="string")i.then(Ku,Ku);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ng(t),t}throw il=i,nl}}var il=null;function tg(){if(il===null)throw Error(s(459));var t=il;return il=null,t}function ng(t){if(t===nl||t===Qu)throw Error(s(483))}var kr=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ur(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(t,i,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(We&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=ju(t),Bp(t,null,a),i}return Lu(t,o,i,a),ju(t)}function rl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,z(t,a)}}function Ef(t,i){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?h=f=i:f=f.next=i}else h=f=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Tf=!1;function sl(){if(Tf){var t=La;if(t!==null)throw t}}function al(t,i,a,o){Tf=!1;var h=t.updateQueue;kr=!1;var f=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,j=w.next;w.next=null,v===null?f=j:v.next=j,v=w;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==v&&(E===null?Q.firstBaseUpdate=j:E.next=j,Q.lastBaseUpdate=w))}if(f!==null){var X=h.baseState;v=0,Q=j=w=null,E=f;do{var q=E.lane&-536870913,B=q!==E.lane;if(B?(Fe&q)===q:(o&q)===q){q!==0&&q===Ua&&(Tf=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var be=t,ge=E;q=i;var st=a;switch(ge.tag){case 1:if(be=ge.payload,typeof be=="function"){X=be.call(st,X,q);break e}X=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ge.payload,q=typeof be=="function"?be.call(st,X,q):be,q==null)break e;X=T({},X,q);break e;case 2:kr=!0}}q=E.callback,q!==null&&(t.flags|=64,B&&(t.flags|=8192),B=h.callbacks,B===null?h.callbacks=[q]:B.push(q))}else B={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(j=Q=B,w=X):Q=Q.next=B,v|=q;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);Q===null&&(w=X),h.baseState=w,h.firstBaseUpdate=j,h.lastBaseUpdate=Q,f===null&&(h.shared.lanes=0),Qr|=v,t.lanes=v,t.memoizedState=X}}function ig(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function rg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ig(a[t],i)}var ja=Z(null),Yu=Z(0);function sg(t,i){t=gr,ee(Yu,t),ee(ja,i),gr=t|i.baseLanes}function bf(){ee(Yu,gr),ee(ja,ja.current)}function Af(){gr=Yu.current,re(ja),re(Yu)}var jr=0,De=null,it=null,Dt=null,Xu=!1,za=!1,Ws=!1,$u=0,ol=0,qa=null,mb=0;function St(){throw Error(s(321))}function Sf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Vn(t[a],i[a]))return!1;return!0}function wf(t,i,a,o,h,f){return jr=f,De=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?Bg:Hg,Ws=!1,f=a(o,h),Ws=!1,za&&(f=og(i,a,o,h)),ag(t),f}function ag(t){G.H=nc;var i=it!==null&&it.next!==null;if(jr=0,Dt=it=De=null,Xu=!1,ol=0,qa=null,i)throw Error(s(300));t===null||Gt||(t=t.dependencies,t!==null&&Hu(t)&&(Gt=!0))}function og(t,i,a,o){De=t;var h=0;do{if(za&&(qa=null),ol=0,za=!1,25<=h)throw Error(s(301));if(h+=1,Dt=it=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=Tb,f=i(a,o)}while(za);return f}function pb(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?ll(i):i,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(De.flags|=1024),i}function Rf(){var t=$u!==0;return $u=0,t}function If(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Cf(t){if(Xu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Xu=!1}jr=0,Dt=it=De=null,za=!1,ol=$u=0,qa=null}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?De.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Ot(){if(it===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var i=Dt===null?De.memoizedState:Dt.next;if(i!==null)Dt=i,it=t;else{if(t===null)throw De.alternate===null?Error(s(467)):Error(s(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Dt===null?De.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function xf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(t){var i=ol;return ol+=1,qa===null&&(qa=[]),t=eg(qa,t,i),i=De,(Dt===null?i.memoizedState:Dt.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Bg:Hg),t}function Zu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ll(t);if(t.$$typeof===me)return ln(t)}throw Error(s(438,String(t)))}function Nf(t){var i=null,a=De.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=De.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=xf(),De.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),o=0;o<t;o++)a[o]=O;return i.index++,a}function cr(t,i){return typeof i=="function"?i(t):i}function Ju(t){var i=Ot();return Df(i,it,t)}function Df(t,i,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=t.baseQueue,f=o.pending;if(f!==null){if(h!==null){var v=h.next;h.next=f.next,f.next=v}i.baseQueue=h=f,o.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{i=h.next;var E=v=null,w=null,j=i,Q=!1;do{var X=j.lane&-536870913;if(X!==j.lane?(Fe&X)===X:(jr&X)===X){var q=j.revertLane;if(q===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),X===Ua&&(Q=!0);else if((jr&q)===q){j=j.next,q===Ua&&(Q=!0);continue}else X={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},w===null?(E=w=X,v=f):w=w.next=X,De.lanes|=q,Qr|=q;X=j.action,Ws&&a(f,X),f=j.hasEagerState?j.eagerState:a(f,X)}else q={lane:X,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},w===null?(E=w=q,v=f):w=w.next=q,De.lanes|=X,Qr|=X;j=j.next}while(j!==null&&j!==i);if(w===null?v=f:w.next=E,!Vn(f,t.memoizedState)&&(Gt=!0,Q&&(a=La,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=w,o.lastRenderedState=f}return h===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Of(t){var i=Ot(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,h=a.pending,f=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do f=t(f,v.action),v=v.next;while(v!==h);Vn(f,i.memoizedState)||(Gt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function lg(t,i,a){var o=De,h=Ot(),f=Ze;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!Vn((it||h).memoizedState,a);v&&(h.memoizedState=a,Gt=!0),h=h.queue;var E=hg.bind(null,o,h,t);if(ul(2048,8,E,[t]),h.getSnapshot!==i||v||Dt!==null&&Dt.memoizedState.tag&1){if(o.flags|=2048,Ba(9,Wu(),cg.bind(null,o,h,a,i),null),ut===null)throw Error(s(349));f||(jr&124)!==0||ug(o,i,a)}return a}function ug(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=De.updateQueue,i===null?(i=xf(),De.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function cg(t,i,a,o){i.value=a,i.getSnapshot=o,fg(i)&&dg(t)}function hg(t,i,a){return a(function(){fg(i)&&dg(t)})}function fg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Vn(t,a)}catch{return!0}}function dg(t){var i=Va(t,2);i!==null&&jn(i,t,2)}function Vf(t){var i=bn();if(typeof t=="function"){var a=t;if(t=a(),Ws){mn(!0);try{a()}finally{mn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:t},i}function mg(t,i,a,o){return t.baseState=a,Df(t,it,typeof o=="function"?o:cr)}function gb(t,i,a,o,h){if(tc(t))throw Error(s(485));if(t=i.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};G.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,pg(i,f)):(f.next=a.next,i.pending=a.next=f)}}function pg(t,i){var a=i.action,o=i.payload,h=t.state;if(i.isTransition){var f=G.T,v={};G.T=v;try{var E=a(h,o),w=G.S;w!==null&&w(v,E),gg(t,i,E)}catch(j){Mf(t,i,j)}finally{G.T=f}}else try{f=a(h,o),gg(t,i,f)}catch(j){Mf(t,i,j)}}function gg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){yg(t,i,o)},function(o){return Mf(t,i,o)}):yg(t,i,a)}function yg(t,i,a){i.status="fulfilled",i.value=a,_g(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,pg(t,a)))}function Mf(t,i,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,_g(i),i=i.next;while(i!==o)}t.action=null}function _g(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function vg(t,i){return i}function Eg(t,i){if(Ze){var a=ut.formState;if(a!==null){e:{var o=De;if(Ze){if(Tt){t:{for(var h=Tt,f=Oi;h.nodeType!==8;){if(!f){h=null;break t}if(h=mi(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){Tt=mi(h.nextSibling),o=h.data==="F!";break e}}Xs(o)}o=!1}o&&(i=a[0])}}return a=bn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:i},a.queue=o,a=jg.bind(null,De,o),o.dispatch=a,o=Vf(!1),f=jf.bind(null,De,!1,o.queue),o=bn(),h={state:i,dispatch:null,action:t,pending:null},o.queue=h,a=gb.bind(null,De,h,f,a),h.dispatch=a,o.memoizedState=t,[i,a,!1]}function Tg(t){var i=Ot();return bg(i,it,t)}function bg(t,i,a){if(i=Df(t,i,vg)[0],t=Ju(cr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=ll(i)}catch(v){throw v===nl?Qu:v}else o=i;i=Ot();var h=i.queue,f=h.dispatch;return a!==i.memoizedState&&(De.flags|=2048,Ba(9,Wu(),yb.bind(null,h,a),null)),[o,f,t]}function yb(t,i){t.action=i}function Ag(t){var i=Ot(),a=it;if(a!==null)return bg(i,a,t);Ot(),i=i.memoizedState,a=Ot();var o=a.queue.dispatch;return a.memoizedState=t,[i,o,!1]}function Ba(t,i,a,o){return t={tag:t,create:a,deps:o,inst:i,next:null},i=De.updateQueue,i===null&&(i=xf(),De.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,i.lastEffect=t),t}function Wu(){return{destroy:void 0,resource:void 0}}function Sg(){return Ot().memoizedState}function ec(t,i,a,o){var h=bn();o=o===void 0?null:o,De.flags|=t,h.memoizedState=Ba(1|i,Wu(),a,o)}function ul(t,i,a,o){var h=Ot();o=o===void 0?null:o;var f=h.memoizedState.inst;it!==null&&o!==null&&Sf(o,it.memoizedState.deps)?h.memoizedState=Ba(i,f,a,o):(De.flags|=t,h.memoizedState=Ba(1|i,f,a,o))}function wg(t,i){ec(8390656,8,t,i)}function Rg(t,i){ul(2048,8,t,i)}function Ig(t,i){return ul(4,2,t,i)}function Cg(t,i){return ul(4,4,t,i)}function xg(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ng(t,i,a){a=a!=null?a.concat([t]):null,ul(4,4,xg.bind(null,i,t),a)}function Pf(){}function Dg(t,i){var a=Ot();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Sf(i,o[1])?o[0]:(a.memoizedState=[t,i],t)}function Og(t,i){var a=Ot();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Sf(i,o[1]))return o[0];if(o=t(),Ws){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[o,i],o}function kf(t,i,a){return a===void 0||(jr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=Py(),De.lanes|=t,Qr|=t,a)}function Vg(t,i,a,o){return Vn(a,i)?a:ja.current!==null?(t=kf(t,a,o),Vn(t,i)||(Gt=!0),t):(jr&42)===0?(Gt=!0,t.memoizedState=a):(t=Py(),De.lanes|=t,Qr|=t,i)}function Mg(t,i,a,o,h){var f=ie.p;ie.p=f!==0&&8>f?f:8;var v=G.T,E={};G.T=E,jf(t,!1,i,a);try{var w=h(),j=G.S;if(j!==null&&j(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var Q=db(w,o);cl(t,i,Q,Ln(t))}else cl(t,i,o,Ln(t))}catch(X){cl(t,i,{then:function(){},status:"rejected",reason:X},Ln())}finally{ie.p=f,G.T=v}}function _b(){}function Uf(t,i,a,o){if(t.tag!==5)throw Error(s(476));var h=Pg(t).queue;Mg(t,h,i,ce,a===null?_b:function(){return kg(t),a(o)})}function Pg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:ce},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function kg(t){var i=Pg(t).next.queue;cl(t,i,{},Ln())}function Lf(){return ln(Cl)}function Ug(){return Ot().memoizedState}function Lg(){return Ot().memoizedState}function vb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Ln();t=Ur(a);var o=Lr(i,t,a);o!==null&&(jn(o,i,a),rl(o,i,a)),i={cache:mf()},t.payload=i;return}i=i.return}}function Eb(t,i,a){var o=Ln();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},tc(t)?zg(i,a):(a=rf(t,i,a,o),a!==null&&(jn(a,t,o),qg(a,i,o)))}function jg(t,i,a){var o=Ln();cl(t,i,a,o)}function cl(t,i,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(t))zg(i,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,E=f(v,a);if(h.hasEagerState=!0,h.eagerState=E,Vn(E,v))return Lu(t,i,h,0),ut===null&&Uu(),!1}catch{}finally{}if(a=rf(t,i,h,o),a!==null)return jn(a,t,o),qg(a,i,o),!0}return!1}function jf(t,i,a,o){if(o={lane:2,revertLane:yd(),action:o,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(i)throw Error(s(479))}else i=rf(t,a,o,2),i!==null&&jn(i,t,2)}function tc(t){var i=t.alternate;return t===De||i!==null&&i===De}function zg(t,i){za=Xu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function qg(t,i,a){if((a&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,z(t,a)}}var nc={readContext:ln,use:Zu,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},Bg={readContext:ln,use:Zu,useCallback:function(t,i){return bn().memoizedState=[t,i===void 0?null:i],t},useContext:ln,useEffect:wg,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,ec(4194308,4,xg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ec(4194308,4,t,i)},useInsertionEffect:function(t,i){ec(4,2,t,i)},useMemo:function(t,i){var a=bn();i=i===void 0?null:i;var o=t();if(Ws){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[o,i],o},useReducer:function(t,i,a){var o=bn();if(a!==void 0){var h=a(i);if(Ws){mn(!0);try{a(i)}finally{mn(!1)}}}else h=i;return o.memoizedState=o.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},o.queue=t,t=t.dispatch=Eb.bind(null,De,t),[o.memoizedState,t]},useRef:function(t){var i=bn();return t={current:t},i.memoizedState=t},useState:function(t){t=Vf(t);var i=t.queue,a=jg.bind(null,De,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(t,i){var a=bn();return kf(a,t,i)},useTransition:function(){var t=Vf(!1);return t=Mg.bind(null,De,t.queue,!0,!1),bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var o=De,h=bn();if(Ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ut===null)throw Error(s(349));(Fe&124)!==0||ug(o,i,a)}h.memoizedState=a;var f={value:a,getSnapshot:i};return h.queue=f,wg(hg.bind(null,o,f,t),[t]),o.flags|=2048,Ba(9,Wu(),cg.bind(null,o,f,a,i),null),a},useId:function(){var t=bn(),i=ut.identifierPrefix;if(Ze){var a=or,o=ar;a=(o&~(1<<32-qt(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=$u++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=mb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Lf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t){var i=bn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=jf.bind(null,De,!0,a),a.dispatch=i,[t,i]},useMemoCache:Nf,useCacheRefresh:function(){return bn().memoizedState=vb.bind(null,De)}},Hg={readContext:ln,use:Zu,useCallback:Dg,useContext:ln,useEffect:Rg,useImperativeHandle:Ng,useInsertionEffect:Ig,useLayoutEffect:Cg,useMemo:Og,useReducer:Ju,useRef:Sg,useState:function(){return Ju(cr)},useDebugValue:Pf,useDeferredValue:function(t,i){var a=Ot();return Vg(a,it.memoizedState,t,i)},useTransition:function(){var t=Ju(cr)[0],i=Ot().memoizedState;return[typeof t=="boolean"?t:ll(t),i]},useSyncExternalStore:lg,useId:Ug,useHostTransitionStatus:Lf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,i){var a=Ot();return mg(a,it,t,i)},useMemoCache:Nf,useCacheRefresh:Lg},Tb={readContext:ln,use:Zu,useCallback:Dg,useContext:ln,useEffect:Rg,useImperativeHandle:Ng,useInsertionEffect:Ig,useLayoutEffect:Cg,useMemo:Og,useReducer:Of,useRef:Sg,useState:function(){return Of(cr)},useDebugValue:Pf,useDeferredValue:function(t,i){var a=Ot();return it===null?kf(a,t,i):Vg(a,it.memoizedState,t,i)},useTransition:function(){var t=Of(cr)[0],i=Ot().memoizedState;return[typeof t=="boolean"?t:ll(t),i]},useSyncExternalStore:lg,useId:Ug,useHostTransitionStatus:Lf,useFormState:Ag,useActionState:Ag,useOptimistic:function(t,i){var a=Ot();return it!==null?mg(a,it,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:Lg},Ha=null,hl=0;function ic(t){var i=hl;return hl+=1,Ha===null&&(Ha=[]),eg(Ha,t,i)}function fl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function rc(t,i){throw i.$$typeof===C?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Fg(t){var i=t._init;return i(t._payload)}function Gg(t){function i(k,D){if(t){var L=k.deletions;L===null?(k.deletions=[D],k.flags|=16):L.push(D)}}function a(k,D){if(!t)return null;for(;D!==null;)i(k,D),D=D.sibling;return null}function o(k){for(var D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function h(k,D){return k=sr(k,D),k.index=0,k.sibling=null,k}function f(k,D,L){return k.index=L,t?(L=k.alternate,L!==null?(L=L.index,L<D?(k.flags|=67108866,D):L):(k.flags|=67108866,D)):(k.flags|=1048576,D)}function v(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function E(k,D,L,Y){return D===null||D.tag!==6?(D=af(L,k.mode,Y),D.return=k,D):(D=h(D,L),D.return=k,D)}function w(k,D,L,Y){var ue=L.type;return ue===J?Q(k,D,L.props.children,Y,L.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===S&&Fg(ue)===D.type)?(D=h(D,L.props),fl(D,L),D.return=k,D):(D=zu(L.type,L.key,L.props,null,k.mode,Y),fl(D,L),D.return=k,D)}function j(k,D,L,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=of(L,k.mode,Y),D.return=k,D):(D=h(D,L.children||[]),D.return=k,D)}function Q(k,D,L,Y,ue){return D===null||D.tag!==7?(D=Gs(L,k.mode,Y,ue),D.return=k,D):(D=h(D,L),D.return=k,D)}function X(k,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=af(""+D,k.mode,L),D.return=k,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return L=zu(D.type,D.key,D.props,null,k.mode,L),fl(L,D),L.return=k,L;case F:return D=of(D,k.mode,L),D.return=k,D;case S:var Y=D._init;return D=Y(D._payload),X(k,D,L)}if(dt(D)||P(D))return D=Gs(D,k.mode,L,null),D.return=k,D;if(typeof D.then=="function")return X(k,ic(D),L);if(D.$$typeof===me)return X(k,Fu(k,D),L);rc(k,D)}return null}function q(k,D,L,Y){var ue=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ue!==null?null:E(k,D,""+L,Y);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return L.key===ue?w(k,D,L,Y):null;case F:return L.key===ue?j(k,D,L,Y):null;case S:return ue=L._init,L=ue(L._payload),q(k,D,L,Y)}if(dt(L)||P(L))return ue!==null?null:Q(k,D,L,Y,null);if(typeof L.then=="function")return q(k,D,ic(L),Y);if(L.$$typeof===me)return q(k,D,Fu(k,L),Y);rc(k,L)}return null}function B(k,D,L,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return k=k.get(L)||null,E(D,k,""+Y,ue);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return k=k.get(Y.key===null?L:Y.key)||null,w(D,k,Y,ue);case F:return k=k.get(Y.key===null?L:Y.key)||null,j(D,k,Y,ue);case S:var Ve=Y._init;return Y=Ve(Y._payload),B(k,D,L,Y,ue)}if(dt(Y)||P(Y))return k=k.get(L)||null,Q(D,k,Y,ue,null);if(typeof Y.then=="function")return B(k,D,L,ic(Y),ue);if(Y.$$typeof===me)return B(k,D,L,Fu(D,Y),ue);rc(D,Y)}return null}function be(k,D,L,Y){for(var ue=null,Ve=null,fe=D,_e=D=0,Kt=null;fe!==null&&_e<L.length;_e++){fe.index>_e?(Kt=fe,fe=null):Kt=fe.sibling;var Ye=q(k,fe,L[_e],Y);if(Ye===null){fe===null&&(fe=Kt);break}t&&fe&&Ye.alternate===null&&i(k,fe),D=f(Ye,D,_e),Ve===null?ue=Ye:Ve.sibling=Ye,Ve=Ye,fe=Kt}if(_e===L.length)return a(k,fe),Ze&&Ks(k,_e),ue;if(fe===null){for(;_e<L.length;_e++)fe=X(k,L[_e],Y),fe!==null&&(D=f(fe,D,_e),Ve===null?ue=fe:Ve.sibling=fe,Ve=fe);return Ze&&Ks(k,_e),ue}for(fe=o(fe);_e<L.length;_e++)Kt=B(fe,k,_e,L[_e],Y),Kt!==null&&(t&&Kt.alternate!==null&&fe.delete(Kt.key===null?_e:Kt.key),D=f(Kt,D,_e),Ve===null?ue=Kt:Ve.sibling=Kt,Ve=Kt);return t&&fe.forEach(function(ts){return i(k,ts)}),Ze&&Ks(k,_e),ue}function ge(k,D,L,Y){if(L==null)throw Error(s(151));for(var ue=null,Ve=null,fe=D,_e=D=0,Kt=null,Ye=L.next();fe!==null&&!Ye.done;_e++,Ye=L.next()){fe.index>_e?(Kt=fe,fe=null):Kt=fe.sibling;var ts=q(k,fe,Ye.value,Y);if(ts===null){fe===null&&(fe=Kt);break}t&&fe&&ts.alternate===null&&i(k,fe),D=f(ts,D,_e),Ve===null?ue=ts:Ve.sibling=ts,Ve=ts,fe=Kt}if(Ye.done)return a(k,fe),Ze&&Ks(k,_e),ue;if(fe===null){for(;!Ye.done;_e++,Ye=L.next())Ye=X(k,Ye.value,Y),Ye!==null&&(D=f(Ye,D,_e),Ve===null?ue=Ye:Ve.sibling=Ye,Ve=Ye);return Ze&&Ks(k,_e),ue}for(fe=o(fe);!Ye.done;_e++,Ye=L.next())Ye=B(fe,k,_e,Ye.value,Y),Ye!==null&&(t&&Ye.alternate!==null&&fe.delete(Ye.key===null?_e:Ye.key),D=f(Ye,D,_e),Ve===null?ue=Ye:Ve.sibling=Ye,Ve=Ye);return t&&fe.forEach(function(bA){return i(k,bA)}),Ze&&Ks(k,_e),ue}function st(k,D,L,Y){if(typeof L=="object"&&L!==null&&L.type===J&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case x:e:{for(var ue=L.key;D!==null;){if(D.key===ue){if(ue=L.type,ue===J){if(D.tag===7){a(k,D.sibling),Y=h(D,L.props.children),Y.return=k,k=Y;break e}}else if(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===S&&Fg(ue)===D.type){a(k,D.sibling),Y=h(D,L.props),fl(Y,L),Y.return=k,k=Y;break e}a(k,D);break}else i(k,D);D=D.sibling}L.type===J?(Y=Gs(L.props.children,k.mode,Y,L.key),Y.return=k,k=Y):(Y=zu(L.type,L.key,L.props,null,k.mode,Y),fl(Y,L),Y.return=k,k=Y)}return v(k);case F:e:{for(ue=L.key;D!==null;){if(D.key===ue)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){a(k,D.sibling),Y=h(D,L.children||[]),Y.return=k,k=Y;break e}else{a(k,D);break}else i(k,D);D=D.sibling}Y=of(L,k.mode,Y),Y.return=k,k=Y}return v(k);case S:return ue=L._init,L=ue(L._payload),st(k,D,L,Y)}if(dt(L))return be(k,D,L,Y);if(P(L)){if(ue=P(L),typeof ue!="function")throw Error(s(150));return L=ue.call(L),ge(k,D,L,Y)}if(typeof L.then=="function")return st(k,D,ic(L),Y);if(L.$$typeof===me)return st(k,D,Fu(k,L),Y);rc(k,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(a(k,D.sibling),Y=h(D,L),Y.return=k,k=Y):(a(k,D),Y=af(L,k.mode,Y),Y.return=k,k=Y),v(k)):a(k,D)}return function(k,D,L,Y){try{hl=0;var ue=st(k,D,L,Y);return Ha=null,ue}catch(fe){if(fe===nl||fe===Qu)throw fe;var Ve=Mn(29,fe,null,k.mode);return Ve.lanes=Y,Ve.return=k,Ve}finally{}}}var Fa=Gg(!0),Qg=Gg(!1),si=Z(null),Vi=null;function zr(t){var i=t.alternate;ee(jt,jt.current&1),ee(si,t),Vi===null&&(i===null||ja.current!==null||i.memoizedState!==null)&&(Vi=t)}function Kg(t){if(t.tag===22){if(ee(jt,jt.current),ee(si,t),Vi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Vi=t)}}else qr()}function qr(){ee(jt,jt.current),ee(si,si.current)}function hr(t){re(si),Vi===t&&(Vi=null),re(jt)}var jt=Z(0);function sc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||xd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function zf(t,i,a,o){i=t.memoizedState,a=a(o,i),a=a==null?i:T({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qf={enqueueSetState:function(t,i,a){t=t._reactInternals;var o=Ln(),h=Ur(o);h.payload=i,a!=null&&(h.callback=a),i=Lr(t,h,o),i!==null&&(jn(i,t,o),rl(i,t,o))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var o=Ln(),h=Ur(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Lr(t,h,o),i!==null&&(jn(i,t,o),rl(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Ln(),o=Ur(a);o.tag=2,i!=null&&(o.callback=i),i=Lr(t,o,a),i!==null&&(jn(i,t,a),rl(i,t,a))}};function Yg(t,i,a,o,h,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):i.prototype&&i.prototype.isPureReactComponent?!Yo(a,o)||!Yo(h,f):!0}function Xg(t,i,a,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==t&&qf.enqueueReplaceState(i,i.state,null)}function ea(t,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(t=t.defaultProps){a===i&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var ac=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $g(t){ac(t)}function Zg(t){console.error(t)}function Jg(t){ac(t)}function oc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Wg(t,i,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Bf(t,i,a){return a=Ur(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(t,i)},a}function ey(t){return t=Ur(t),t.tag=3,t}function ty(t,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;t.payload=function(){return h(f)},t.callback=function(){Wg(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Wg(i,a,o),typeof h!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function bb(t,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Wo(i,a,h,!0),a=si.current,a!==null){switch(a.tag){case 13:return Vi===null?fd():a.alternate===null&&bt===0&&(bt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===yf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),md(t,o,h)),!1;case 22:return a.flags|=65536,o===yf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),md(t,o,h)),!1}throw Error(s(435,a.tag))}return md(t,o,h),fd(),!1}if(Ze)return i=si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==cf&&(t=Error(s(422),{cause:o}),Jo(ti(t,a)))):(o!==cf&&(i=Error(s(423),{cause:o}),Jo(ti(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,o=ti(o,a),h=Bf(t.stateNode,o,h),Ef(t,h),bt!==4&&(bt=2)),!1;var f=Error(s(520),{cause:o});if(f=ti(f,a),vl===null?vl=[f]:vl.push(f),bt!==4&&(bt=2),i===null)return!0;o=ti(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Bf(a.stateNode,o,t),Ef(a,t),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Kr===null||!Kr.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ey(h),ty(h,t,a,o),Ef(a,h),!1}a=a.return}while(a!==null);return!1}var ny=Error(s(461)),Gt=!1;function Jt(t,i,a,o){i.child=t===null?Qg(i,null,a,o):Fa(i,t.child,a,o)}function iy(t,i,a,o,h){a=a.render;var f=i.ref;if("ref"in o){var v={};for(var E in o)E!=="ref"&&(v[E]=o[E])}else v=o;return Zs(i),o=wf(t,i,a,v,f,h),E=Rf(),t!==null&&!Gt?(If(t,i,h),fr(t,i,h)):(Ze&&E&&lf(i),i.flags|=1,Jt(t,i,o,h),i.child)}function ry(t,i,a,o,h){if(t===null){var f=a.type;return typeof f=="function"&&!sf(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,sy(t,i,f,o,h)):(t=zu(a.type,null,o,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!$f(t,h)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(v,o)&&t.ref===i.ref)return fr(t,i,h)}return i.flags|=1,t=sr(f,o),t.ref=i.ref,t.return=i,i.child=t}function sy(t,i,a,o,h){if(t!==null){var f=t.memoizedProps;if(Yo(f,o)&&t.ref===i.ref)if(Gt=!1,i.pendingProps=o=f,$f(t,h))(t.flags&131072)!==0&&(Gt=!0);else return i.lanes=t.lanes,fr(t,i,h)}return Hf(t,i,a,o,h)}function ay(t,i,a){var o=i.pendingProps,h=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(h=i.child=t.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~o}else i.childLanes=0,i.child=null;return oy(t,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gu(i,f!==null?f.cachePool:null),f!==null?sg(i,f):bf(),Kg(i);else return i.lanes=i.childLanes=536870912,oy(t,i,f!==null?f.baseLanes|a:a,a)}else f!==null?(Gu(i,f.cachePool),sg(i,f),qr(),i.memoizedState=null):(t!==null&&Gu(i,null),bf(),qr());return Jt(t,i,h,a),i.child}function oy(t,i,a,o){var h=gf();return h=h===null?null:{parent:Lt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Gu(i,null),bf(),Kg(i),t!==null&&Wo(t,i,o,!0),null}function lc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function Hf(t,i,a,o,h){return Zs(i),a=wf(t,i,a,o,void 0,h),o=Rf(),t!==null&&!Gt?(If(t,i,h),fr(t,i,h)):(Ze&&o&&lf(i),i.flags|=1,Jt(t,i,a,h),i.child)}function ly(t,i,a,o,h,f){return Zs(i),i.updateQueue=null,a=og(i,o,a,h),ag(t),o=Rf(),t!==null&&!Gt?(If(t,i,f),fr(t,i,f)):(Ze&&o&&lf(i),i.flags|=1,Jt(t,i,a,f),i.child)}function uy(t,i,a,o,h){if(Zs(i),i.stateNode===null){var f=Ma,v=a.contextType;typeof v=="object"&&v!==null&&(f=ln(v)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},_f(i),v=a.contextType,f.context=typeof v=="object"&&v!==null?ln(v):Ma,f.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(zf(i,a,v,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&qf.enqueueReplaceState(f,f.state,null),al(i,o,f,h),sl(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){f=i.stateNode;var E=i.memoizedProps,w=ea(a,E);f.props=w;var j=f.context,Q=a.contextType;v=Ma,typeof Q=="object"&&Q!==null&&(v=ln(Q));var X=a.getDerivedStateFromProps;Q=typeof X=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,Q||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||j!==v)&&Xg(i,f,o,v),kr=!1;var q=i.memoizedState;f.state=q,al(i,o,f,h),sl(),j=i.memoizedState,E||q!==j||kr?(typeof X=="function"&&(zf(i,a,X,o),j=i.memoizedState),(w=kr||Yg(i,a,w,o,q,j,v))?(Q||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=j),f.props=o,f.state=j,f.context=v,o=w):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,vf(t,i),v=i.memoizedProps,Q=ea(a,v),f.props=Q,X=i.pendingProps,q=f.context,j=a.contextType,w=Ma,typeof j=="object"&&j!==null&&(w=ln(j)),E=a.getDerivedStateFromProps,(j=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==X||q!==w)&&Xg(i,f,o,w),kr=!1,q=i.memoizedState,f.state=q,al(i,o,f,h),sl();var B=i.memoizedState;v!==X||q!==B||kr||t!==null&&t.dependencies!==null&&Hu(t.dependencies)?(typeof E=="function"&&(zf(i,a,E,o),B=i.memoizedState),(Q=kr||Yg(i,a,Q,o,q,B,w)||t!==null&&t.dependencies!==null&&Hu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,w)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),f.props=o,f.state=B,f.context=w,o=Q):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),o=!1)}return f=o,lc(t,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,t!==null&&o?(i.child=Fa(i,t.child,null,h),i.child=Fa(i,null,a,h)):Jt(t,i,a,h),i.memoizedState=f.state,t=i.child):t=fr(t,i,h),t}function cy(t,i,a,o){return Zo(),i.flags|=256,Jt(t,i,a,o),i.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gf(t){return{baseLanes:t,cachePool:Zp()}}function Qf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=ai),t}function hy(t,i,a){var o=i.pendingProps,h=!1,f=(i.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(jt.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ze){if(h?zr(i):qr(),Ze){var E=Tt,w;if(w=E){e:{for(w=E,E=Oi;w.nodeType!==8;){if(!E){E=null;break e}if(w=mi(w.nextSibling),w===null){E=null;break e}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:Qs!==null?{id:ar,overflow:or}:null,retryLane:536870912,hydrationErrors:null},w=Mn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,vn=i,Tt=null,w=!0):w=!1}w||Xs(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return xd(E)?i.lanes=32:i.lanes=536870912,null;hr(i)}return E=o.children,o=o.fallback,h?(qr(),h=i.mode,E=uc({mode:"hidden",children:E},h),o=Gs(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,h=i.child,h.memoizedState=Gf(a),h.childLanes=Qf(t,v,a),i.memoizedState=Ff,o):(zr(i),Kf(i,E))}if(w=t.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(f)i.flags&256?(zr(i),i.flags&=-257,i=Yf(t,i,a)):i.memoizedState!==null?(qr(),i.child=t.child,i.flags|=128,i=null):(qr(),h=o.fallback,E=i.mode,o=uc({mode:"visible",children:o.children},E),h=Gs(h,E,a,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,Fa(i,t.child,null,a),o=i.child,o.memoizedState=Gf(a),o.childLanes=Qf(t,v,a),i.memoizedState=Ff,i=h);else if(zr(i),xd(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var j=v.dgst;v=j,o=Error(s(419)),o.stack="",o.digest=v,Jo({value:o,source:null,stack:null}),i=Yf(t,i,a)}else if(Gt||Wo(t,i,a,!1),v=(a&t.childLanes)!==0,Gt||v){if(v=ut,v!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==w.retryLane))throw w.retryLane=o,Va(t,o),jn(v,t,o),ny;E.data==="$?"||fd(),i=Yf(t,i,a)}else E.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=w.treeContext,Tt=mi(E.nextSibling),vn=i,Ze=!0,Ys=null,Oi=!1,t!==null&&(ii[ri++]=ar,ii[ri++]=or,ii[ri++]=Qs,ar=t.id,or=t.overflow,Qs=i),i=Kf(i,o.children),i.flags|=4096);return i}return h?(qr(),h=o.fallback,E=i.mode,w=t.child,j=w.sibling,o=sr(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&65011712,j!==null?h=sr(j,h):(h=Gs(h,E,a,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,E=t.child.memoizedState,E===null?E=Gf(a):(w=E.cachePool,w!==null?(j=Lt._currentValue,w=w.parent!==j?{parent:j,pool:j}:w):w=Zp(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Qf(t,v,a),i.memoizedState=Ff,o):(zr(i),a=t.child,t=a.sibling,a=sr(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function Kf(t,i){return i=uc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function uc(t,i){return t=Mn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yf(t,i,a){return Fa(i,t.child,null,a),t=Kf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function fy(t,i,a){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),ff(t.return,i,a)}function Xf(t,i,a,o,h){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=h)}function dy(t,i,a){var o=i.pendingProps,h=o.revealOrder,f=o.tail;if(Jt(t,i,o.children,a),o=jt.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,a,i);else if(t.tag===19)fy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ee(jt,o),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&sc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Xf(i,!1,h,a,f);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&sc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Xf(i,!0,a,null,f);break;case"together":Xf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fr(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Qr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Wo(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function $f(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Hu(t)))}function Ab(t,i,a){switch(i.tag){case 3:Xe(i,i.stateNode.containerInfo),Pr(i,Lt,t.memoizedState.cache),Zo();break;case 27:case 5:_i(i);break;case 4:Xe(i,i.stateNode.containerInfo);break;case 10:Pr(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(zr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?hy(t,i,a):(zr(i),t=fr(t,i,a),t!==null?t.sibling:null);zr(i);break;case 19:var h=(t.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Wo(t,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return dy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ee(jt,jt.current),o)break;return null;case 22:case 23:return i.lanes=0,ay(t,i,a);case 24:Pr(i,Lt,t.memoizedState.cache)}return fr(t,i,a)}function my(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Gt=!0;else{if(!$f(t,a)&&(i.flags&128)===0)return Gt=!1,Ab(t,i,a);Gt=(t.flags&131072)!==0}else Gt=!1,Ze&&(i.flags&1048576)!==0&&Fp(i,Bu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")sf(o)?(t=ea(o,t),i.tag=1,i=uy(null,i,o,t,a)):(i.tag=0,i=Hf(null,i,o,t,a));else{if(o!=null){if(h=o.$$typeof,h===ze){i.tag=11,i=iy(null,i,o,t,a);break e}else if(h===V){i.tag=14,i=ry(null,i,o,t,a);break e}}throw i=xt(o)||o,Error(s(306,i,""))}}return i;case 0:return Hf(t,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=ea(o,i.pendingProps),uy(t,i,o,h,a);case 3:e:{if(Xe(i,i.stateNode.containerInfo),t===null)throw Error(s(387));o=i.pendingProps;var f=i.memoizedState;h=f.element,vf(t,i),al(i,o,null,a);var v=i.memoizedState;if(o=v.cache,Pr(i,Lt,o),o!==f.cache&&df(i,[Lt],a,!0),sl(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=cy(t,i,o,a);break e}else if(o!==h){h=ti(Error(s(424)),i),Jo(h),i=cy(t,i,o,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Tt=mi(t.firstChild),vn=i,Ze=!0,Ys=null,Oi=!0,a=Qg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zo(),o===h){i=fr(t,i,a);break e}Jt(t,i,o,a)}i=i.child}return i;case 26:return lc(t,i),t===null?(a=__(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ze||(a=i.type,t=i.pendingProps,o=Ac(Te.current).createElement(a),o[ot]=i,o[Ke]=t,en(o,a,t),ht(o),i.stateNode=o):i.memoizedState=__(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return _i(i),t===null&&Ze&&(o=i.stateNode=p_(i.type,i.pendingProps,Te.current),vn=i,Oi=!0,h=Tt,$r(i.type)?(Nd=h,Tt=mi(o.firstChild)):Tt=h),Jt(t,i,i.pendingProps.children,a),lc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ze&&((h=o=Tt)&&(o=Zb(o,i.type,i.pendingProps,Oi),o!==null?(i.stateNode=o,vn=i,Tt=mi(o.firstChild),Oi=!1,h=!0):h=!1),h||Xs(i)),_i(i),h=i.type,f=i.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,Rd(h,f)?o=null:v!==null&&Rd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=wf(t,i,pb,null,null,a),Cl._currentValue=h),lc(t,i),Jt(t,i,o,a),i.child;case 6:return t===null&&Ze&&((t=a=Tt)&&(a=Jb(a,i.pendingProps,Oi),a!==null?(i.stateNode=a,vn=i,Tt=null,t=!0):t=!1),t||Xs(i)),null;case 13:return hy(t,i,a);case 4:return Xe(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=Fa(i,null,o,a):Jt(t,i,o,a),i.child;case 11:return iy(t,i,i.type,i.pendingProps,a);case 7:return Jt(t,i,i.pendingProps,a),i.child;case 8:return Jt(t,i,i.pendingProps.children,a),i.child;case 12:return Jt(t,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Pr(i,i.type,o.value),Jt(t,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Zs(i),h=ln(h),o=o(h),i.flags|=1,Jt(t,i,o,a),i.child;case 14:return ry(t,i,i.type,i.pendingProps,a);case 15:return sy(t,i,i.type,i.pendingProps,a);case 19:return dy(t,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},t===null?(a=uc(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=sr(t.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ay(t,i,a);case 24:return Zs(i),o=ln(Lt),t===null?(h=gf(),h===null&&(h=ut,f=mf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),i.memoizedState={parent:o,cache:h},_f(i),Pr(i,Lt,h)):((t.lanes&a)!==0&&(vf(t,i),al(i,null,null,a),sl()),h=t.memoizedState,f=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Pr(i,Lt,o)):(o=f.cache,Pr(i,Lt,o),o!==h.cache&&df(i,[Lt],a,!0))),Jt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function dr(t){t.flags|=4}function py(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!A_(i)){if(i=si.current,i!==null&&((Fe&4194048)===Fe?Vi!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||i!==Vi))throw il=yf,Jp;t.flags|=8192}}function cc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?xs():536870912,t.lanes|=i,Ya|=i)}function dl(t,i){if(!Ze)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function gt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=o,t.childLanes=a,i}function Sb(t,i,a){var o=i.pendingProps;switch(uf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(i),null;case 1:return gt(i),null;case 3:return a=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ur(Lt),Tn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&($o(i)?dr(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kp())),gt(i),null;case 26:return a=i.memoizedState,t===null?(dr(i),a!==null?(gt(i),py(i,a)):(gt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(dr(i),gt(i),py(i,a)):(gt(i),i.flags&=-16777217):(t.memoizedProps!==o&&dr(i),gt(i),i.flags&=-16777217),null;case 27:In(i),a=Te.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&dr(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return gt(i),null}t=he.current,$o(i)?Gp(i):(t=p_(h,o,a),i.stateNode=t,dr(i))}return gt(i),null;case 5:if(In(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&dr(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return gt(i),null}if(t=he.current,$o(i))Gp(i);else{switch(h=Ac(Te.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}t[ot]=i,t[Ke]=o;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(en(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&dr(i)}}return gt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&dr(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(t=Te.current,$o(i)){if(t=i.stateNode,a=i.memoizedProps,o=null,h=vn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}t[ot]=i,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||l_(t.nodeValue,a)),t||Xs(i)}else t=Ac(t).createTextNode(o),t[ot]=i,i.stateNode=t}return gt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=$o(i),o!==null&&o.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ot]=i}else Zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gt(i),h=!1}else h=Kp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(hr(i),i):(hr(i),null)}if(hr(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),cc(i,i.updateQueue),gt(i),null;case 4:return Tn(),t===null&&Td(i.stateNode.containerInfo),gt(i),null;case 10:return ur(i.type),gt(i),null;case 19:if(re(jt),h=i.memoizedState,h===null)return gt(i),null;if(o=(i.flags&128)!==0,f=h.rendering,f===null)if(o)dl(h,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(f=sc(t),f!==null){for(i.flags|=128,dl(h,!1),t=f.updateQueue,i.updateQueue=t,cc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Hp(a,t),a=a.sibling;return ee(jt,jt.current&1|2),i.child}t=t.sibling}h.tail!==null&&dn()>dc&&(i.flags|=128,o=!0,dl(h,!1),i.lanes=4194304)}else{if(!o)if(t=sc(f),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,cc(i,t),dl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Ze)return gt(i),null}else 2*dn()-h.renderingStartTime>dc&&a!==536870912&&(i.flags|=128,o=!0,dl(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(t=h.last,t!==null?t.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=dn(),i.sibling=null,t=jt.current,ee(jt,o?t&1|2:t&1),i):(gt(i),null);case 22:case 23:return hr(i),Af(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(gt(i),i.subtreeFlags&6&&(i.flags|=8192)):gt(i),a=i.updateQueue,a!==null&&cc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),t!==null&&re(Js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ur(Lt),gt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function wb(t,i){switch(uf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ur(Lt),Tn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return In(i),null;case 13:if(hr(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Zo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return re(jt),null;case 4:return Tn(),null;case 10:return ur(i.type),null;case 22:case 23:return hr(i),Af(),t!==null&&re(Js),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ur(Lt),null;case 25:return null;default:return null}}function gy(t,i){switch(uf(i),i.tag){case 3:ur(Lt),Tn();break;case 26:case 27:case 5:In(i);break;case 4:Tn();break;case 13:hr(i);break;case 19:re(jt);break;case 10:ur(i.type);break;case 22:case 23:hr(i),Af(),t!==null&&re(Js);break;case 24:ur(Lt)}}function ml(t,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==h)}}catch(E){lt(i,i.return,E)}}function Br(t,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&t)===t){var v=o.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,j=E;try{j()}catch(Q){lt(h,w,Q)}}}o=o.next}while(o!==f)}}catch(Q){lt(i,i.return,Q)}}function yy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{rg(i,a)}catch(o){lt(t,t.return,o)}}}function _y(t,i,a){a.props=ea(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){lt(t,i,o)}}function pl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(h){lt(t,i,h)}}function Mi(t,i){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){lt(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){lt(t,i,h)}else a.current=null}function vy(t){var i=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){lt(t,t.return,h)}}function Zf(t,i,a){try{var o=t.stateNode;Qb(o,t.type,a,i),o[Ke]=i}catch(h){lt(t,t.return,h)}}function Ey(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$r(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ey(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$r(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bc));else if(o!==4&&(o===27&&$r(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Wf(t,i,a),t=t.sibling;t!==null;)Wf(t,i,a),t=t.sibling}function hc(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(o!==4&&(o===27&&$r(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(hc(t,i,a),t=t.sibling;t!==null;)hc(t,i,a),t=t.sibling}function Ty(t){var i=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);en(i,o,a),i[ot]=t,i[Ke]=a}catch(f){lt(t,t.return,f)}}var mr=!1,wt=!1,ed=!1,by=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function Rb(t,i){if(t=t.containerInfo,Sd=xc,t=Vp(t),Zh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,E=-1,w=-1,j=0,Q=0,X=t,q=null;t:for(;;){for(var B;X!==a||h!==0&&X.nodeType!==3||(E=v+h),X!==f||o!==0&&X.nodeType!==3||(w=v+o),X.nodeType===3&&(v+=X.nodeValue.length),(B=X.firstChild)!==null;)q=X,X=B;for(;;){if(X===t)break t;if(q===a&&++j===h&&(E=v),q===f&&++Q===o&&(w=v),(B=X.nextSibling)!==null)break;X=q,q=X.parentNode}X=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(wd={focusedElem:t,selectionRange:a},xc=!1,Qt=i;Qt!==null;)if(i=Qt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Qt=t;else for(;Qt!==null;){switch(i=Qt,f=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=i,h=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var be=ea(a.type,h,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(be,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ge){lt(a,a.return,ge)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Cd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Qt=t;break}Qt=i.return}}function Ay(t,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Hr(t,a),o&4&&ml(5,a);break;case 1:if(Hr(t,a),o&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(v){lt(a,a.return,v)}else{var h=ea(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){lt(a,a.return,v)}}o&64&&yy(a),o&512&&pl(a,a.return);break;case 3:if(Hr(t,a),o&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{rg(t,i)}catch(v){lt(a,a.return,v)}}break;case 27:i===null&&o&4&&Ty(a);case 26:case 5:Hr(t,a),i===null&&o&4&&vy(a),o&512&&pl(a,a.return);break;case 12:Hr(t,a);break;case 13:Hr(t,a),o&4&&Ry(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Pb.bind(null,a),Wb(t,a))));break;case 22:if(o=a.memoizedState!==null||mr,!o){i=i!==null&&i.memoizedState!==null||wt,h=mr;var f=wt;mr=o,(wt=i)&&!f?Fr(t,a,(a.subtreeFlags&8772)!==0):Hr(t,a),mr=h,wt=f}break;case 30:break;default:Hr(t,a)}}function Sy(t){var i=t.alternate;i!==null&&(t.alternate=null,Sy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&bi(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,An=!1;function pr(t,i,a){for(a=a.child;a!==null;)wy(t,i,a),a=a.sibling}function wy(t,i,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(mt,a)}catch{}switch(a.tag){case 26:wt||Mi(a,i),pr(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:wt||Mi(a,i);var o=pt,h=An;$r(a.type)&&(pt=a.stateNode,An=!1),pr(t,i,a),Sl(a.stateNode),pt=o,An=h;break;case 5:wt||Mi(a,i);case 6:if(o=pt,h=An,pt=null,pr(t,i,a),pt=o,An=h,pt!==null)if(An)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(a.stateNode)}catch(f){lt(a,i,f)}else try{pt.removeChild(a.stateNode)}catch(f){lt(a,i,f)}break;case 18:pt!==null&&(An?(t=pt,d_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ol(t)):d_(pt,a.stateNode));break;case 4:o=pt,h=An,pt=a.stateNode.containerInfo,An=!0,pr(t,i,a),pt=o,An=h;break;case 0:case 11:case 14:case 15:wt||Br(2,a,i),wt||Br(4,a,i),pr(t,i,a);break;case 1:wt||(Mi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&_y(a,i,o)),pr(t,i,a);break;case 21:pr(t,i,a);break;case 22:wt=(o=wt)||a.memoizedState!==null,pr(t,i,a),wt=o;break;default:pr(t,i,a)}}function Ry(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ol(t)}catch(a){lt(i,i.return,a)}}function Ib(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new by),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new by),i;default:throw Error(s(435,t.tag))}}function td(t,i){var a=Ib(t);i.forEach(function(o){var h=kb.bind(null,t,o);a.has(o)||(a.add(o),o.then(h,h))})}function Pn(t,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],f=t,v=i,E=v;e:for(;E!==null;){switch(E.tag){case 27:if($r(E.type)){pt=E.stateNode,An=!1;break e}break;case 5:pt=E.stateNode,An=!1;break e;case 3:case 4:pt=E.stateNode.containerInfo,An=!0;break e}E=E.return}if(pt===null)throw Error(s(160));wy(f,v,h),pt=null,An=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Iy(i,t),i=i.sibling}var di=null;function Iy(t,i){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pn(i,t),kn(t),o&4&&(Br(3,t,t.return),ml(3,t),Br(5,t,t.return));break;case 1:Pn(i,t),kn(t),o&512&&(wt||a===null||Mi(a,a.return)),o&64&&mr&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=di;if(Pn(i,t),kn(t),o&512&&(wt||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Qn]||f[ot]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),en(f,o,a),f[ot]=t,ht(f),o=f;break e;case"link":var v=T_("link","href",h).get(o+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break t}}f=h.createElement(o),en(f,o,a),h.head.appendChild(f);break;case"meta":if(v=T_("meta","content",h).get(o+(a.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break t}}f=h.createElement(o),en(f,o,a),h.head.appendChild(f);break;default:throw Error(s(468,o))}f[ot]=t,ht(f),o=f}t.stateNode=o}else b_(h,t.type,t.stateNode);else t.stateNode=E_(h,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?b_(h,t.type,t.stateNode):E_(h,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pn(i,t),kn(t),o&512&&(wt||a===null||Mi(a,a.return)),a!==null&&o&4&&Zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pn(i,t),kn(t),o&512&&(wt||a===null||Mi(a,a.return)),t.flags&32){h=t.stateNode;try{Zn(h,"")}catch(B){lt(t,t.return,B)}}o&4&&t.stateNode!=null&&(h=t.memoizedProps,Zf(t,h,a!==null?a.memoizedProps:h)),o&1024&&(ed=!0);break;case 6:if(Pn(i,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(B){lt(t,t.return,B)}}break;case 3:if(Rc=null,h=di,di=Sc(i.containerInfo),Pn(i,t),di=h,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(i.containerInfo)}catch(B){lt(t,t.return,B)}ed&&(ed=!1,Cy(t));break;case 4:o=di,di=Sc(t.stateNode.containerInfo),Pn(i,t),kn(t),di=o;break;case 12:Pn(i,t),kn(t);break;case 13:Pn(i,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(od=dn()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,td(t,o)));break;case 22:h=t.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,j=mr,Q=wt;if(mr=j||h,wt=Q||w,Pn(i,t),wt=Q,mr=j,kn(t),o&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||mr||wt||ta(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(f=w.stateNode,h)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var X=w.memoizedProps.style,q=X!=null&&X.hasOwnProperty("display")?X.display:null;E.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(B){lt(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){lt(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,td(t,a))));break;case 19:Pn(i,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,td(t,o)));break;case 30:break;case 21:break;default:Pn(i,t),kn(t)}}function kn(t){var i=t.flags;if(i&2){try{for(var a,o=t.return;o!==null;){if(Ey(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=Jf(t);hc(t,f,h);break;case 5:var v=a.stateNode;a.flags&32&&(Zn(v,""),a.flags&=-33);var E=Jf(t);hc(t,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,j=Jf(t);Wf(t,j,w);break;default:throw Error(s(161))}}catch(Q){lt(t,t.return,Q)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Cy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Cy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Hr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ay(t,i.alternate,i),i=i.sibling}function ta(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Br(4,i,i.return),ta(i);break;case 1:Mi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&_y(i,i.return,a),ta(i);break;case 27:Sl(i.stateNode);case 26:case 5:Mi(i,i.return),ta(i);break;case 22:i.memoizedState===null&&ta(i);break;case 30:ta(i);break;default:ta(i)}t=t.sibling}}function Fr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=t,f=i,v=f.flags;switch(f.tag){case 0:case 11:case 15:Fr(h,f,a),ml(4,f);break;case 1:if(Fr(h,f,a),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){lt(o,o.return,j)}if(o=f,h=o.updateQueue,h!==null){var E=o.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)ig(w[h],E)}catch(j){lt(o,o.return,j)}}a&&v&64&&yy(f),pl(f,f.return);break;case 27:Ty(f);case 26:case 5:Fr(h,f,a),a&&o===null&&v&4&&vy(f),pl(f,f.return);break;case 12:Fr(h,f,a);break;case 13:Fr(h,f,a),a&&v&4&&Ry(h,f);break;case 22:f.memoizedState===null&&Fr(h,f,a),pl(f,f.return);break;case 30:break;default:Fr(h,f,a)}i=i.sibling}}function nd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&el(a))}function id(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&el(t))}function Pi(t,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)xy(t,i,a,o),i=i.sibling}function xy(t,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,a,o),h&2048&&ml(9,i);break;case 1:Pi(t,i,a,o);break;case 3:Pi(t,i,a,o),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&el(t)));break;case 12:if(h&2048){Pi(t,i,a,o),t=i.stateNode;try{var f=i.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){lt(i,i.return,w)}}else Pi(t,i,a,o);break;case 13:Pi(t,i,a,o);break;case 23:break;case 22:f=i.stateNode,v=i.alternate,i.memoizedState!==null?f._visibility&2?Pi(t,i,a,o):gl(t,i):f._visibility&2?Pi(t,i,a,o):(f._visibility|=2,Ga(t,i,a,o,(i.subtreeFlags&10256)!==0)),h&2048&&nd(v,i);break;case 24:Pi(t,i,a,o),h&2048&&id(i.alternate,i);break;default:Pi(t,i,a,o)}}function Ga(t,i,a,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=t,v=i,E=a,w=o,j=v.flags;switch(v.tag){case 0:case 11:case 15:Ga(f,v,E,w,h),ml(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&2?Ga(f,v,E,w,h):gl(f,v):(Q._visibility|=2,Ga(f,v,E,w,h)),h&&j&2048&&nd(v.alternate,v);break;case 24:Ga(f,v,E,w,h),h&&j&2048&&id(v.alternate,v);break;default:Ga(f,v,E,w,h)}i=i.sibling}}function gl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,o=i,h=o.flags;switch(o.tag){case 22:gl(a,o),h&2048&&nd(o.alternate,o);break;case 24:gl(a,o),h&2048&&id(o.alternate,o);break;default:gl(a,o)}i=i.sibling}}var yl=8192;function Qa(t){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)Ny(t),t=t.sibling}function Ny(t){switch(t.tag){case 26:Qa(t),t.flags&yl&&t.memoizedState!==null&&fA(di,t.memoizedState,t.memoizedProps);break;case 5:Qa(t);break;case 3:case 4:var i=di;di=Sc(t.stateNode.containerInfo),Qa(t),di=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=yl,yl=16777216,Qa(t),yl=i):Qa(t));break;default:Qa(t)}}function Dy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function _l(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Qt=o,Vy(o,t)}Dy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oy(t),t=t.sibling}function Oy(t){switch(t.tag){case 0:case 11:case 15:_l(t),t.flags&2048&&Br(9,t,t.return);break;case 3:_l(t);break;case 12:_l(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,fc(t)):_l(t);break;default:_l(t)}}function fc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Qt=o,Vy(o,t)}Dy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Br(8,i,i.return),fc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,fc(i));break;default:fc(i)}t=t.sibling}}function Vy(t,i){for(;Qt!==null;){var a=Qt;switch(a.tag){case 0:case 11:case 15:Br(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:el(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Qt=o;else e:for(a=t;Qt!==null;){o=Qt;var h=o.sibling,f=o.return;if(Sy(o),o===a){Qt=null;break e}if(h!==null){h.return=f,Qt=h;break e}Qt=f}}}var Cb={getCacheForType:function(t){var i=ln(Lt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},xb=typeof WeakMap=="function"?WeakMap:Map,We=0,ut=null,Me=null,Fe=0,et=0,Un=null,Gr=!1,Ka=!1,rd=!1,gr=0,bt=0,Qr=0,na=0,sd=0,ai=0,Ya=0,vl=null,Sn=null,ad=!1,od=0,dc=1/0,mc=null,Kr=null,Wt=0,Yr=null,Xa=null,$a=0,ld=0,ud=null,My=null,El=0,cd=null;function Ln(){if((We&2)!==0&&Fe!==0)return Fe&-Fe;if(G.T!==null){var t=Ua;return t!==0?t:yd()}return xe()}function Py(){ai===0&&(ai=(Fe&536870912)===0||Ze?Cs():536870912);var t=si.current;return t!==null&&(t.flags|=32),ai}function jn(t,i,a){(t===ut&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(Za(t,0),Xr(t,Fe,ai,!1)),ui(t,a),((We&2)===0||t!==ut)&&(t===ut&&((We&2)===0&&(na|=a),bt===4&&Xr(t,Fe,ai,!1)),ki(t))}function ky(t,i,a){if((We&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&t.expiredLanes)===0||Xi(t,i),h=o?Ob(t,i):dd(t,i,!0),f=o;do{if(h===0){Ka&&!o&&Xr(t,i,0,!1);break}else{if(a=t.current.alternate,f&&!Nb(a)){h=dd(t,i,!1),f=!1;continue}if(h===2){if(f=i,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var E=t;h=vl;var w=E.current.memoizedState.isDehydrated;if(w&&(Za(E,v).flags|=256),v=dd(E,v,!1),v!==2){if(rd&&!w){E.errorRecoveryDisabledLanes|=f,na|=f,h=4;break e}f=Sn,Sn=h,f!==null&&(Sn===null?Sn=f:Sn.push.apply(Sn,f))}h=v}if(f=!1,h!==2)continue}}if(h===1){Za(t,0),Xr(t,i,0,!0);break}e:{switch(o=t,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Xr(o,i,ai,!Gr);break e;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=od+300-dn(),10<h)){if(Xr(o,i,ai,!Gr),Ti(o,0,!0)!==0)break e;o.timeoutHandle=h_(Uy.bind(null,o,a,Sn,mc,ad,i,ai,na,Ya,Gr,f,2,-0,0),h);break e}Uy(o,a,Sn,mc,ad,i,ai,na,Ya,Gr,f,0,-0,0)}}break}while(!0);ki(t)}function Uy(t,i,a,o,h,f,v,E,w,j,Q,X,q,B){if(t.timeoutHandle=-1,X=i.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:hA},Ny(i),X=dA(),X!==null)){t.cancelPendingCommit=X(Fy.bind(null,t,i,f,a,o,h,v,E,w,Q,1,q,B)),Xr(t,f,v,!j);return}Fy(t,i,f,a,o,h,v,E,w)}function Nb(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],f=h.getSnapshot;h=h.value;try{if(!Vn(f(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xr(t,i,a,o){i&=~sd,i&=~na,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var h=i;0<h;){var f=31-qt(h),v=1<<f;o[f]=-1,h&=~v}a!==0&&Gn(t,a,i)}function pc(){return(We&6)===0?(Tl(0),!1):!0}function hd(){if(Me!==null){if(et===0)var t=Me.return;else t=Me,lr=$s=null,Cf(t),Ha=null,hl=0,t=Me;for(;t!==null;)gy(t.alternate,t),t=t.return;Me=null}}function Za(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Yb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),hd(),ut=t,Me=a=sr(t.current,null),Fe=i,et=0,Un=null,Gr=!1,Ka=Xi(t,i),rd=!1,Ya=ai=sd=na=Qr=bt=0,Sn=vl=null,ad=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var h=31-qt(o),f=1<<h;i|=t[h],o&=~f}return gr=i,Uu(),a}function Ly(t,i){De=null,G.H=nc,i===nl||i===Qu?(i=tg(),et=3):i===Jp?(i=tg(),et=4):et=i===ny?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Un=i,Me===null&&(bt=1,oc(t,ti(i,t.current)))}function jy(){var t=G.H;return G.H=nc,t===null?nc:t}function zy(){var t=G.A;return G.A=Cb,t}function fd(){bt=4,Gr||(Fe&4194048)!==Fe&&si.current!==null||(Ka=!0),(Qr&134217727)===0&&(na&134217727)===0||ut===null||Xr(ut,Fe,ai,!1)}function dd(t,i,a){var o=We;We|=2;var h=jy(),f=zy();(ut!==t||Fe!==i)&&(mc=null,Za(t,i)),i=!1;var v=bt;e:do try{if(et!==0&&Me!==null){var E=Me,w=Un;switch(et){case 8:hd(),v=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(i=!0);var j=et;if(et=0,Un=null,Ja(t,E,w,j),a&&Ka){v=0;break e}break;default:j=et,et=0,Un=null,Ja(t,E,w,j)}}Db(),v=bt;break}catch(Q){Ly(t,Q)}while(!0);return i&&t.shellSuspendCounter++,lr=$s=null,We=o,G.H=h,G.A=f,Me===null&&(ut=null,Fe=0,Uu()),v}function Db(){for(;Me!==null;)qy(Me)}function Ob(t,i){var a=We;We|=2;var o=jy(),h=zy();ut!==t||Fe!==i?(mc=null,dc=dn()+500,Za(t,i)):Ka=Xi(t,i);e:do try{if(et!==0&&Me!==null){i=Me;var f=Un;t:switch(et){case 1:et=0,Un=null,Ja(t,i,f,1);break;case 2:case 9:if(Wp(f)){et=0,Un=null,By(i);break}i=function(){et!==2&&et!==9||ut!==t||(et=7),ki(t)},f.then(i,i);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:Wp(f)?(et=0,Un=null,By(i)):(et=0,Un=null,Ja(t,i,f,7));break;case 5:var v=null;switch(Me.tag){case 26:v=Me.memoizedState;case 5:case 27:var E=Me;if(!v||A_(v)){et=0,Un=null;var w=E.sibling;if(w!==null)Me=w;else{var j=E.return;j!==null?(Me=j,gc(j)):Me=null}break t}}et=0,Un=null,Ja(t,i,f,5);break;case 6:et=0,Un=null,Ja(t,i,f,6);break;case 8:hd(),bt=6;break e;default:throw Error(s(462))}}Vb();break}catch(Q){Ly(t,Q)}while(!0);return lr=$s=null,G.H=o,G.A=h,We=a,Me!==null?0:(ut=null,Fe=0,Uu(),bt)}function Vb(){for(;Me!==null&&!xr();)qy(Me)}function qy(t){var i=my(t.alternate,t,gr);t.memoizedProps=t.pendingProps,i===null?gc(t):Me=i}function By(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=ly(a,i,i.pendingProps,i.type,void 0,Fe);break;case 11:i=ly(a,i,i.pendingProps,i.type.render,i.ref,Fe);break;case 5:Cf(i);default:gy(a,i),i=Me=Hp(i,gr),i=my(a,i,gr)}t.memoizedProps=t.pendingProps,i===null?gc(t):Me=i}function Ja(t,i,a,o){lr=$s=null,Cf(i),Ha=null,hl=0;var h=i.return;try{if(bb(t,h,i,a,Fe)){bt=1,oc(t,ti(a,t.current)),Me=null;return}}catch(f){if(h!==null)throw Me=h,f;bt=1,oc(t,ti(a,t.current)),Me=null;return}i.flags&32768?(Ze||o===1?t=!0:Ka||(Fe&536870912)!==0?t=!1:(Gr=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hy(i,t)):gc(i)}function gc(t){var i=t;do{if((i.flags&32768)!==0){Hy(i,Gr);return}t=i.return;var a=Sb(i.alternate,i,gr);if(a!==null){Me=a;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=t}while(i!==null);bt===0&&(bt=5)}function Hy(t,i){do{var a=wb(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);bt=6,Me=null}function Fy(t,i,a,o,h,f,v,E,w){t.cancelPendingCommit=null;do yc();while(Wt!==0);if((We&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=nf,Ns(t,a,f,v,E,w),t===ut&&(Me=ut=null,Fe=0),Xa=i,Yr=t,$a=a,ld=f,ud=h,My=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ub(Qi,function(){return Xy(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,h=ie.p,ie.p=2,v=We,We|=4;try{Rb(t,i,a)}finally{We=v,ie.p=h,G.T=o}}Wt=1,Gy(),Qy(),Ky()}}function Gy(){if(Wt===1){Wt=0;var t=Yr,i=Xa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=ie.p;ie.p=2;var h=We;We|=4;try{Iy(i,t);var f=wd,v=Vp(t.containerInfo),E=f.focusedElem,w=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&Op(E.ownerDocument.documentElement,E)){if(w!==null&&Zh(E)){var j=w.start,Q=w.end;if(Q===void 0&&(Q=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(Q,E.value.length);else{var X=E.ownerDocument||document,q=X&&X.defaultView||window;if(q.getSelection){var B=q.getSelection(),be=E.textContent.length,ge=Math.min(w.start,be),st=w.end===void 0?ge:Math.min(w.end,be);!B.extend&&ge>st&&(v=st,st=ge,ge=v);var k=Dp(E,ge),D=Dp(E,st);if(k&&D&&(B.rangeCount!==1||B.anchorNode!==k.node||B.anchorOffset!==k.offset||B.focusNode!==D.node||B.focusOffset!==D.offset)){var L=X.createRange();L.setStart(k.node,k.offset),B.removeAllRanges(),ge>st?(B.addRange(L),B.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),B.addRange(L))}}}}for(X=[],B=E;B=B.parentNode;)B.nodeType===1&&X.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<X.length;E++){var Y=X[E];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}xc=!!Sd,wd=Sd=null}finally{We=h,ie.p=o,G.T=a}}t.current=i,Wt=2}}function Qy(){if(Wt===2){Wt=0;var t=Yr,i=Xa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=ie.p;ie.p=2;var h=We;We|=4;try{Ay(t,i.alternate,i)}finally{We=h,ie.p=o,G.T=a}}Wt=3}}function Ky(){if(Wt===4||Wt===3){Wt=0,ws();var t=Yr,i=Xa,a=$a,o=My;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Wt=5:(Wt=0,Xa=Yr=null,Yy(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Kr=null),Re(a),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(mt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=G.T,h=ie.p,ie.p=2,G.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var E=o[v];f(E.value,{componentStack:E.stack})}}finally{G.T=i,ie.p=h}}($a&3)!==0&&yc(),ki(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===cd?El++:(El=0,cd=t):El=0,Tl(0)}}function Yy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,el(i)))}function yc(t){return Gy(),Qy(),Ky(),Xy()}function Xy(){if(Wt!==5)return!1;var t=Yr,i=ld;ld=0;var a=Re($a),o=G.T,h=ie.p;try{ie.p=32>a?32:a,G.T=null,a=ud,ud=null;var f=Yr,v=$a;if(Wt=0,Xa=Yr=null,$a=0,(We&6)!==0)throw Error(s(331));var E=We;if(We|=4,Oy(f.current),xy(f,f.current,v,a),We=E,Tl(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(mt,f)}catch{}return!0}finally{ie.p=h,G.T=o,Yy(t,i)}}function $y(t,i,a){i=ti(a,i),i=Bf(t.stateNode,i,2),t=Lr(t,i,2),t!==null&&(ui(t,2),ki(t))}function lt(t,i,a){if(t.tag===3)$y(t,t,a);else for(;i!==null;){if(i.tag===3){$y(i,t,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kr===null||!Kr.has(o))){t=ti(a,t),a=ey(2),o=Lr(i,a,2),o!==null&&(ty(a,o,i,t),ui(o,2),ki(o));break}}i=i.return}}function md(t,i,a){var o=t.pingCache;if(o===null){o=t.pingCache=new xb;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(rd=!0,h.add(a),t=Mb.bind(null,t,i,a),i.then(t,t))}function Mb(t,i,a){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(Fe&a)===a&&(bt===4||bt===3&&(Fe&62914560)===Fe&&300>dn()-od?(We&2)===0&&Za(t,0):sd|=a,Ya===Fe&&(Ya=0)),ki(t)}function Zy(t,i){i===0&&(i=xs()),t=Va(t,i),t!==null&&(ui(t,i),ki(t))}function Pb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Zy(t,a)}function kb(t,i){var a=0;switch(t.tag){case 13:var o=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Zy(t,a)}function Ub(t,i){return vi(t,i)}var _c=null,Wa=null,pd=!1,vc=!1,gd=!1,ia=0;function ki(t){t!==Wa&&t.next===null&&(Wa===null?_c=Wa=t:Wa=Wa.next=t),vc=!0,pd||(pd=!0,jb())}function Tl(t,i){if(!gd&&vc){gd=!0;do for(var a=!1,o=_c;o!==null;){if(t!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var v=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-qt(42|t)+1)-1,f&=h&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,t_(o,f))}else f=Fe,f=Ti(o,o===ut?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Xi(o,f)||(a=!0,t_(o,f));o=o.next}while(a);gd=!1}}function Lb(){Jy()}function Jy(){vc=pd=!1;var t=0;ia!==0&&(Kb()&&(t=ia),ia=0);for(var i=dn(),a=null,o=_c;o!==null;){var h=o.next,f=Wy(o,i);f===0?(o.next=null,a===null?_c=h:a.next=h,h===null&&(Wa=a)):(a=o,(t!==0||(f&3)!==0)&&(vc=!0)),o=h}Tl(t)}function Wy(t,i){for(var a=t.suspendedLanes,o=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-qt(f),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&o)!==0)&&(h[v]=Is(E,i)):w<=i&&(t.expiredLanes|=E),f&=~E}if(i=ut,a=Fe,a=Ti(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===i&&(et===2||et===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Gi(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xi(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(o!==null&&Gi(o),Re(a)){case 2:case 8:a=Dr;break;case 32:a=Qi;break;case 268435456:a=Or;break;default:a=Qi}return o=e_.bind(null,t),a=vi(a,o),t.callbackPriority=i,t.callbackNode=a,i}return o!==null&&o!==null&&Gi(o),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,i){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(yc()&&t.callbackNode!==a)return null;var o=Fe;return o=Ti(t,t===ut?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ky(t,o,i),Wy(t,dn()),t.callbackNode!=null&&t.callbackNode===a?e_.bind(null,t):null)}function t_(t,i){if(yc())return null;ky(t,i,!0)}function jb(){Xb(function(){(We&6)!==0?vi(Nr,Lb):Jy()})}function yd(){return ia===0&&(ia=Cs()),ia}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ta(""+t)}function i_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function zb(t,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var f=n_((h[Ke]||null).action),v=o.submitter;v&&(i=(i=v[Ke]||null)?n_(i.formAction):v.getAttribute("formAction"),i!==null&&(f=i,v=null));var E=new ba("action","action",null,o,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ia!==0){var w=v?i_(h,v):new FormData(h);Uf(a,{pending:!0,data:w,method:h.method,action:f},null,w)}}else typeof f=="function"&&(E.preventDefault(),w=v?i_(h,v):new FormData(h),Uf(a,{pending:!0,data:w,method:h.method,action:f},f,w))},currentTarget:h}]})}}for(var _d=0;_d<tf.length;_d++){var vd=tf[_d],qb=vd.toLowerCase(),Bb=vd[0].toUpperCase()+vd.slice(1);fi(qb,"on"+Bb)}fi(kp,"onAnimationEnd"),fi(Up,"onAnimationIteration"),fi(Lp,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(sb,"onTransitionRun"),fi(ab,"onTransitionStart"),fi(ob,"onTransitionCancel"),fi(jp,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function r_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],h=o.event;o=o.listeners;e:{var f=void 0;if(i)for(var v=o.length-1;0<=v;v--){var E=o[v],w=E.instance,j=E.currentTarget;if(E=E.listener,w!==f&&h.isPropagationStopped())break e;f=E,h.currentTarget=j;try{f(h)}catch(Q){ac(Q)}h.currentTarget=null,f=w}else for(v=0;v<o.length;v++){if(E=o[v],w=E.instance,j=E.currentTarget,E=E.listener,w!==f&&h.isPropagationStopped())break e;f=E,h.currentTarget=j;try{f(h)}catch(Q){ac(Q)}h.currentTarget=null,f=w}}}}function Pe(t,i){var a=i[pn];a===void 0&&(a=i[pn]=new Set);var o=t+"__bubble";a.has(o)||(s_(i,t,2,!1),a.add(o))}function Ed(t,i,a){var o=0;i&&(o|=4),s_(a,t,o,i)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Td(t){if(!t[Ec]){t[Ec]=!0,$t.forEach(function(a){a!=="selectionchange"&&(Hb.has(a)||Ed(a,!1,t),Ed(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ec]||(i[Ec]=!0,Ed("selectionchange",!1,i))}}function s_(t,i,a,o){switch(x_(i)){case 2:var h=gA;break;case 8:h=yA;break;default:h=Pd}a=h.bind(null,i,a,t),h=void 0,!Wn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function bd(t,i,a,o,h){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var E=o.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=o.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Kn(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){o=f=v;continue e}E=E.parentNode}}o=o.return}bu(function(){var j=f,Q=Jn(a),X=[];e:{var q=zp.get(t);if(q!==void 0){var B=ba,be=t;switch(t){case"keypress":if(Ii(a)===0)break e;case"keydown":case"keyup":B=Ca;break;case"focusin":be="focus",B=wa;break;case"focusout":be="blur",B=wa;break;case"beforeblur":case"afterblur":B=wa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Nu;break;case kp:case Up:case Lp:B=Ra;break;case jp:B=Ou;break;case"scroll":case"scrollend":B=Au;break;case"wheel":B=xa;break;case"copy":case"cut":case"paste":B=Ia;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Qo;break;case"toggle":case"beforetoggle":B=Mu}var ge=(i&4)!==0,st=!ge&&(t==="scroll"||t==="scrollend"),k=ge?q!==null?q+"Capture":null:q;ge=[];for(var D=j,L;D!==null;){var Y=D;if(L=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||L===null||k===null||(Y=ks(D,k),Y!=null&&ge.push(Al(D,Y,L))),st)break;D=D.return}0<ge.length&&(q=new B(q,be,null,a,Q),X.push({event:q,listeners:ge}))}}if((i&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",q&&a!==Wi&&(be=a.relatedTarget||a.fromElement)&&(Kn(be)||be[ct]))break e;if((B||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,B?(be=a.relatedTarget||a.toElement,B=j,be=be?Kn(be):null,be!==null&&(st=c(be),ge=be.tag,be!==st||ge!==5&&ge!==27&&ge!==6)&&(be=null)):(B=null,be=j),B!==be)){if(ge=ei,Y="onMouseLeave",k="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ge=Qo,Y="onPointerLeave",k="onPointerEnter",D="pointer"),st=B==null?q:gn(B),L=be==null?q:gn(be),q=new ge(Y,D+"leave",B,a,Q),q.target=st,q.relatedTarget=L,Y=null,Kn(Q)===j&&(ge=new ge(k,D+"enter",be,a,Q),ge.target=L,ge.relatedTarget=st,Y=ge),st=Y,B&&be)t:{for(ge=B,k=be,D=0,L=ge;L;L=eo(L))D++;for(L=0,Y=k;Y;Y=eo(Y))L++;for(;0<D-L;)ge=eo(ge),D--;for(;0<L-D;)k=eo(k),L--;for(;D--;){if(ge===k||k!==null&&ge===k.alternate)break t;ge=eo(ge),k=eo(k)}ge=null}else ge=null;B!==null&&a_(X,q,B,ge,!1),be!==null&&st!==null&&a_(X,st,be,ge,!0)}}e:{if(q=j?gn(j):window,B=q.nodeName&&q.nodeName.toLowerCase(),B==="select"||B==="input"&&q.type==="file")var ue=wp;else if(Ut(q))if(Rp)ue=nb;else{ue=eb;var Ve=WT}else B=q.nodeName,!B||B.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&jo(j.elementType)&&(ue=wp):ue=tb;if(ue&&(ue=ue(t,j))){rr(X,ue,a,Q);break e}Ve&&Ve(t,q,j),t==="focusout"&&j&&q.type==="number"&&j.memoizedProps.value!=null&&Vr(q,"number",q.value)}switch(Ve=j?gn(j):window,t){case"focusin":(Ut(Ve)||Ve.contentEditable==="true")&&(Na=Ve,Jh=j,Xo=null);break;case"focusout":Xo=Jh=Na=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,Mp(X,a,Q);break;case"selectionchange":if(rb)break;case"keydown":case"keyup":Mp(X,a,Q)}var fe;if(Ni)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Be?H(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_&&a.locale!=="ko"&&(Be||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Be&&(fe=qo()):(Ri=Q,Mr="value"in Ri?Ri.value:Ri.textContent,Be=!0)),Ve=Tc(j,_e),0<Ve.length&&(_e=new Fo(_e,t,null,a,Q),X.push({event:_e,listeners:Ve}),fe?_e.data=fe:(fe=te(a),fe!==null&&(_e.data=fe)))),(fe=m?kt(t,a):He(t,a))&&(_e=Tc(j,"onBeforeInput"),0<_e.length&&(Ve=new Fo("onBeforeInput","beforeinput",null,a,Q),X.push({event:Ve,listeners:_e}),Ve.data=fe)),zb(X,t,j,a,Q)}r_(X,i)})}function Al(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Tc(t,i){for(var a=i+"Capture",o=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=ks(t,a),h!=null&&o.unshift(Al(t,h,f)),h=ks(t,i),h!=null&&o.push(Al(t,h,f))),t.tag===3)return o;t=t.return}return[]}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function a_(t,i,a,o,h){for(var f=i._reactName,v=[];a!==null&&a!==o;){var E=a,w=E.alternate,j=E.stateNode;if(E=E.tag,w!==null&&w===o)break;E!==5&&E!==26&&E!==27||j===null||(w=j,h?(j=ks(a,f),j!=null&&v.unshift(Al(a,j,w))):h||(j=ks(a,f),j!=null&&v.push(Al(a,j,w)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var Fb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function o_(t){return(typeof t=="string"?t:""+t).replace(Fb,`
`).replace(Gb,"")}function l_(t,i){return i=o_(i),o_(t)===i}function bc(){}function rt(t,i,a,o,h,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Zn(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Zn(t,""+o);break;case"className":$n(t,"class",o);break;case"tabIndex":$n(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(t,a,o);break;case"style":Lo(t,o,f);break;case"data":if(i!=="object"){$n(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ta(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&rt(t,i,"name",h.name,h,null),rt(t,i,"formEncType",h.formEncType,h,null),rt(t,i,"formMethod",h.formMethod,h,null),rt(t,i,"formTarget",h.formTarget,h,null)):(rt(t,i,"encType",h.encType,h,null),rt(t,i,"method",h.method,h,null),rt(t,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ta(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=bc);break;case"onScroll":o!=null&&Pe("scroll",t);break;case"onScrollEnd":o!=null&&Pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ta(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Pe("beforetoggle",t),Pe("toggle",t),Si(t,"popover",o);break;case"xlinkActuate":At(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":At(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":At(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":At(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":At(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":At(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":At(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":At(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":At(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Si(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gh.get(a)||a,Si(t,a,o))}}function Ad(t,i,a,o,h,f){switch(a){case"style":Lo(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Zn(t,o):(typeof o=="number"||typeof o=="bigint")&&Zn(t,""+o);break;case"onScroll":o!=null&&Pe("scroll",t);break;case"onScrollEnd":o!=null&&Pe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),f=t[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(i,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,o,h);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Si(t,a,o)}}}function en(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",t),Pe("load",t);var o=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:rt(t,i,f,v,a,null)}}h&&rt(t,i,"srcSet",a.srcSet,a,null),o&&rt(t,i,"src",a.src,a,null);return;case"input":Pe("invalid",t);var E=f=v=h=null,w=null,j=null;for(o in a)if(a.hasOwnProperty(o)){var Q=a[o];if(Q!=null)switch(o){case"name":h=Q;break;case"type":v=Q;break;case"checked":w=Q;break;case"defaultChecked":j=Q;break;case"value":f=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:rt(t,i,o,Q,a,null)}}Vs(t,f,E,w,j,v,h,!1),Ea(t);return;case"select":Pe("invalid",t),o=v=f=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":o=E;default:rt(t,i,h,E,a,null)}i=f,a=v,t.multiple=!!o,i!=null?Ji(t,!!o,i,!1):a!=null&&Ji(t,!!o,a,!0);return;case"textarea":Pe("invalid",t),f=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":o=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:rt(t,i,v,E,a,null)}Ms(t,o,h,f),Ea(t);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(o=a[w],o!=null))switch(w){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:rt(t,i,w,o,a,null)}return;case"dialog":Pe("beforetoggle",t),Pe("toggle",t),Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":Pe("load",t);break;case"video":case"audio":for(o=0;o<bl.length;o++)Pe(bl[o],t);break;case"image":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"embed":case"source":case"link":Pe("error",t),Pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:rt(t,i,j,o,a,null)}return;default:if(jo(i)){for(Q in a)a.hasOwnProperty(Q)&&(o=a[Q],o!==void 0&&Ad(t,i,Q,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&rt(t,i,E,o,a,null))}function Qb(t,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,v=null,E=null,w=null,j=null,Q=null;for(B in a){var X=a[B];if(a.hasOwnProperty(B)&&X!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=X;default:o.hasOwnProperty(B)||rt(t,i,B,null,o,X)}}for(var q in o){var B=o[q];if(X=a[q],o.hasOwnProperty(q)&&(B!=null||X!=null))switch(q){case"type":f=B;break;case"name":h=B;break;case"checked":j=B;break;case"defaultChecked":Q=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==X&&rt(t,i,q,B,o,X)}}On(t,v,E,w,j,Q,f,h);return;case"select":B=v=E=q=null;for(f in a)if(w=a[f],a.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":B=w;default:o.hasOwnProperty(f)||rt(t,i,f,null,o,w)}for(h in o)if(f=o[h],w=a[h],o.hasOwnProperty(h)&&(f!=null||w!=null))switch(h){case"value":q=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==w&&rt(t,i,h,f,o,w)}i=E,a=v,o=B,q!=null?Ji(t,!!a,q,!1):!!o!=!!a&&(i!=null?Ji(t,!!a,i,!0):Ji(t,!!a,a?[]:"",!1));return;case"textarea":B=q=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:rt(t,i,E,null,o,h)}for(v in o)if(h=o[v],f=a[v],o.hasOwnProperty(v)&&(h!=null||f!=null))switch(v){case"value":q=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&rt(t,i,v,h,o,f)}nt(t,q,B);return;case"option":for(var be in a)if(q=a[be],a.hasOwnProperty(be)&&q!=null&&!o.hasOwnProperty(be))switch(be){case"selected":t.selected=!1;break;default:rt(t,i,be,null,o,q)}for(w in o)if(q=o[w],B=a[w],o.hasOwnProperty(w)&&q!==B&&(q!=null||B!=null))switch(w){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:rt(t,i,w,q,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)q=a[ge],a.hasOwnProperty(ge)&&q!=null&&!o.hasOwnProperty(ge)&&rt(t,i,ge,null,o,q);for(j in o)if(q=o[j],B=a[j],o.hasOwnProperty(j)&&q!==B&&(q!=null||B!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:rt(t,i,j,q,o,B)}return;default:if(jo(i)){for(var st in a)q=a[st],a.hasOwnProperty(st)&&q!==void 0&&!o.hasOwnProperty(st)&&Ad(t,i,st,void 0,o,q);for(Q in o)q=o[Q],B=a[Q],!o.hasOwnProperty(Q)||q===B||q===void 0&&B===void 0||Ad(t,i,Q,q,o,B);return}}for(var k in a)q=a[k],a.hasOwnProperty(k)&&q!=null&&!o.hasOwnProperty(k)&&rt(t,i,k,null,o,q);for(X in o)q=o[X],B=a[X],!o.hasOwnProperty(X)||q===B||q==null&&B==null||rt(t,i,X,q,o,B)}var Sd=null,wd=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Rd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Id=null;function Kb(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,Yb=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,Xb=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(t){return f_.resolve(null).then(t).catch($b)}:h_;function $b(t){setTimeout(function(){throw t})}function $r(t){return t==="head"}function d_(t,i){var a=i,o=0,h=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var v=t.ownerDocument;if(a&1&&Sl(v.documentElement),a&2&&Sl(v.body),a&4)for(a=v.head,Sl(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[Qn]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){t.removeChild(f),Ol(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ol(i)}function Cd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cd(a),bi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zb(t,i,a,o){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Qn])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function Jb(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function xd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Wb(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Nd=null;function m_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function p_(t,i,a){switch(i=Ac(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Sl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);bi(t)}var oi=new Map,g_=new Set;function Sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yr=ie.d;ie.d={f:eA,r:tA,D:nA,C:iA,L:rA,m:sA,X:oA,S:aA,M:lA};function eA(){var t=yr.f(),i=pc();return t||i}function tA(t){var i=xn(t);i!==null&&i.tag===5&&i.type==="form"?kg(i):yr.r(t)}var to=typeof document>"u"?null:document;function y_(t,i,a){var o=to;if(o&&typeof i=="string"&&i){var h=Nt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),g_.has(h)||(g_.add(h),t={rel:t,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),en(i,"link",t),ht(i),o.head.appendChild(i)))}}function nA(t){yr.D(t),y_("dns-prefetch",t,null)}function iA(t,i){yr.C(t,i),y_("preconnect",t,i)}function rA(t,i,a){yr.L(t,i,a);var o=to;if(o&&t&&i){var h='link[rel="preload"][as="'+Nt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Nt(a.imageSizes)+'"]')):h+='[href="'+Nt(t)+'"]';var f=h;switch(i){case"style":f=no(t);break;case"script":f=io(t)}oi.has(f)||(t=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),oi.set(f,t),o.querySelector(h)!==null||i==="style"&&o.querySelector(wl(f))||i==="script"&&o.querySelector(Rl(f))||(i=o.createElement("link"),en(i,"link",t),ht(i),o.head.appendChild(i)))}}function sA(t,i){yr.m(t,i);var a=to;if(a&&t){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Nt(o)+'"][href="'+Nt(t)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=io(t)}if(!oi.has(f)&&(t=T({rel:"modulepreload",href:t},i),oi.set(f,t),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rl(f)))return}o=a.createElement("link"),en(o,"link",t),ht(o),a.head.appendChild(o)}}}function aA(t,i,a){yr.S(t,i,a);var o=to;if(o&&t){var h=on(o).hoistableStyles,f=no(t);i=i||"default";var v=h.get(f);if(!v){var E={loading:0,preload:null};if(v=o.querySelector(wl(f)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":i},a),(a=oi.get(f))&&Dd(t,a);var w=v=o.createElement("link");ht(w),en(w,"link",t),w._p=new Promise(function(j,Q){w.onload=j,w.onerror=Q}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,wc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(f,v)}}}function oA(t,i){yr.X(t,i);var a=to;if(a&&t){var o=on(a).hoistableScripts,h=io(t),f=o.get(h);f||(f=a.querySelector(Rl(h)),f||(t=T({src:t,async:!0},i),(i=oi.get(h))&&Od(t,i),f=a.createElement("script"),ht(f),en(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function lA(t,i){yr.M(t,i);var a=to;if(a&&t){var o=on(a).hoistableScripts,h=io(t),f=o.get(h);f||(f=a.querySelector(Rl(h)),f||(t=T({src:t,async:!0,type:"module"},i),(i=oi.get(h))&&Od(t,i),f=a.createElement("script"),ht(f),en(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function __(t,i,a,o){var h=(h=Te.current)?Sc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=no(a.href),a=on(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=no(a.href);var f=on(h).hoistableStyles,v=f.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=h.querySelector(wl(t)))&&!f._p&&(v.instance=f,v.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||uA(h,t,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=io(a),a=on(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function no(t){return'href="'+Nt(t)+'"'}function wl(t){return'link[rel="stylesheet"]['+t+"]"}function v_(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function uA(t,i,a,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),en(i,"link",a),ht(i),t.head.appendChild(i))}function io(t){return'[src="'+Nt(t)+'"]'}function Rl(t){return"script[async]"+t}function E_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(o)return i.instance=o,ht(o),o;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ht(o),en(o,"style",h),wc(o,a.precedence,t),i.instance=o;case"stylesheet":h=no(a.href);var f=t.querySelector(wl(h));if(f)return i.state.loading|=4,i.instance=f,ht(f),f;o=v_(a),(h=oi.get(h))&&Dd(o,h),f=(t.ownerDocument||t).createElement("link"),ht(f);var v=f;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),en(f,"link",o),i.state.loading|=4,wc(f,a.precedence,t),i.instance=f;case"script":return f=io(a.src),(h=t.querySelector(Rl(f)))?(i.instance=h,ht(h),h):(o=a,(h=oi.get(f))&&(o=T({},a),Od(o,h)),t=t.ownerDocument||t,h=t.createElement("script"),ht(h),en(h,"link",o),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,wc(o,a.precedence,t));return i.instance}function wc(t,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,v=0;v<o.length;v++){var E=o[v];if(E.dataset.precedence===i)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Dd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Od(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Rc=null;function T_(t,i,a){if(Rc===null){var o=new Map,h=Rc=new Map;h.set(a,o)}else h=Rc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var f=a[h];if(!(f[Qn]||f[ot]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(i)||"";v=t+v;var E=o.get(v);E?E.push(f):o.set(v,[f])}}return o}function b_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function cA(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function A_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Il=null;function hA(){}function fA(t,i,a){if(Il===null)throw Error(s(475));var o=Il;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=no(a.href),f=t.querySelector(wl(h));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Ic.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=f,ht(f);return}f=t.ownerDocument||t,a=v_(a),(h=oi.get(h))&&Dd(a,h),f=f.createElement("link"),ht(f);var v=f;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),en(f,"link",a),i.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Ic.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function dA(){if(Il===null)throw Error(s(475));var t=Il;return t.stylesheets&&t.count===0&&Vd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&Vd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ic(){if(this.count--,this.count===0){if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cc=null;function Vd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cc=new Map,i.forEach(mA,t),Cc=null,Ic.call(t))}function mA(t,i){if(!(i.state.loading&4)){var a=Cc.get(t);if(a)var o=a.get(null);else{a=new Map,Cc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var v=h[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,h),a.set(v,h),this.count++,o=Ic.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Cl={$$typeof:me,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function pA(t,i,a,o,h,f,v,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.hiddenUpdates=Fn(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function S_(t,i,a,o,h,f,v,E,w,j,Q,X){return t=new pA(t,i,a,v,E,w,j,X),i=1,f===!0&&(i|=24),f=Mn(3,null,null,i),t.current=f,f.stateNode=t,i=mf(),i.refCount++,t.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},_f(f),t}function w_(t){return t?(t=Ma,t):Ma}function R_(t,i,a,o,h,f){h=w_(h),o.context===null?o.context=h:o.pendingContext=h,o=Ur(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Lr(t,o,i),a!==null&&(jn(a,t,i),rl(a,t,i))}function I_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Md(t,i){I_(t,i),(t=t.alternate)&&I_(t,i)}function C_(t){if(t.tag===13){var i=Va(t,67108864);i!==null&&jn(i,t,67108864),Md(t,67108864)}}var xc=!0;function gA(t,i,a,o){var h=G.T;G.T=null;var f=ie.p;try{ie.p=2,Pd(t,i,a,o)}finally{ie.p=f,G.T=h}}function yA(t,i,a,o){var h=G.T;G.T=null;var f=ie.p;try{ie.p=8,Pd(t,i,a,o)}finally{ie.p=f,G.T=h}}function Pd(t,i,a,o){if(xc){var h=kd(o);if(h===null)bd(t,i,o,Nc,a),N_(t,o);else if(vA(h,t,i,a,o))o.stopPropagation();else if(N_(t,o),i&4&&-1<_A.indexOf(t)){for(;h!==null;){var f=xn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Cn(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-qt(v);E.entanglements[1]|=w,v&=~w}ki(f),(We&6)===0&&(dc=dn()+500,Tl(0))}}break;case 13:E=Va(f,2),E!==null&&jn(E,f,2),pc(),Md(f,2)}if(f=kd(o),f===null&&bd(t,i,o,Nc,a),f===h)break;h=f}h!==null&&o.stopPropagation()}else bd(t,i,o,null,a)}}function kd(t){return t=Jn(t),Ud(t)}var Nc=null;function Ud(t){if(Nc=null,t=Kn(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=d(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Nc=t,null}function x_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Do()){case Nr:return 2;case Dr:return 8;case Qi:case Oo:return 32;case Or:return 268435456;default:return 32}default:return 32}}var Ld=!1,Zr=null,Jr=null,Wr=null,xl=new Map,Nl=new Map,es=[],_A="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N_(t,i){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":xl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(i.pointerId)}}function Dl(t,i,a,o,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},i!==null&&(i=xn(i),i!==null&&C_(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function vA(t,i,a,o,h){switch(i){case"focusin":return Zr=Dl(Zr,t,i,a,o,h),!0;case"dragenter":return Jr=Dl(Jr,t,i,a,o,h),!0;case"mouseover":return Wr=Dl(Wr,t,i,a,o,h),!0;case"pointerover":var f=h.pointerId;return xl.set(f,Dl(xl.get(f)||null,t,i,a,o,h)),!0;case"gotpointercapture":return f=h.pointerId,Nl.set(f,Dl(Nl.get(f)||null,t,i,a,o,h)),!0}return!1}function D_(t){var i=Kn(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=d(a),i!==null){t.blockedOn=i,Et(t.priority,function(){if(a.tag===13){var o=Ln();o=ne(o);var h=Va(a,o);h!==null&&jn(h,a,o),Md(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=kd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Wi=o,a.target.dispatchEvent(o),Wi=null}else return i=xn(a),i!==null&&C_(i),t.blockedOn=a,!1;i.shift()}return!0}function O_(t,i,a){Dc(t)&&a.delete(i)}function EA(){Ld=!1,Zr!==null&&Dc(Zr)&&(Zr=null),Jr!==null&&Dc(Jr)&&(Jr=null),Wr!==null&&Dc(Wr)&&(Wr=null),xl.forEach(O_),Nl.forEach(O_)}function Oc(t,i){t.blockedOn===i&&(t.blockedOn=null,Ld||(Ld=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,EA)))}var Vc=null;function V_(t){Vc!==t&&(Vc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Vc===t&&(Vc=null);for(var i=0;i<t.length;i+=3){var a=t[i],o=t[i+1],h=t[i+2];if(typeof o!="function"){if(Ud(o||a)===null)continue;break}var f=xn(a);f!==null&&(t.splice(i,3),i-=3,Uf(f,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function Ol(t){function i(w){return Oc(w,t)}Zr!==null&&Oc(Zr,t),Jr!==null&&Oc(Jr,t),Wr!==null&&Oc(Wr,t),xl.forEach(i),Nl.forEach(i);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)D_(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],f=a[o+1],v=h[Ke]||null;if(typeof f=="function")v||V_(a);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,v=f[Ke]||null)E=v.formAction;else if(Ud(h)!==null)continue}else E=v.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),V_(a)}}}function jd(t){this._internalRoot=t}Mc.prototype.render=jd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Ln();R_(a,o,t,i,null,null)},Mc.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;R_(t.current,2,null,t,null,null),pc(),i[ct]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var i=xe();t={blockedOn:null,target:t,priority:i};for(var a=0;a<es.length&&i!==0&&i<es[a].priority;a++);es.splice(a,0,t),a===0&&D_(t)}};var M_=e.version;if(M_!=="19.1.1")throw Error(s(527,M_,"19.1.1"));ie.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var TA={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{mt=Pc.inject(TA),$e=Pc}catch{}}return Ml.createRoot=function(t,i){if(!l(t))throw Error(s(299));var a=!1,o="",h=$g,f=Zg,v=Jg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=S_(t,1,!1,null,null,a,o,h,f,v,E,null),t[ct]=i.current,Td(t),new jd(i)},Ml.hydrateRoot=function(t,i,a){if(!l(t))throw Error(s(299));var o=!1,h="",f=$g,v=Zg,E=Jg,w=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),i=S_(t,1,!0,i,a??null,o,h,f,v,E,w,j),i.context=w_(null),a=i.current,o=Ln(),o=ne(o),h=Ur(o),h.callback=null,Lr(a,h,o),a=o,i.current.lanes=a,ui(i,a),ki(i),t[ct]=i.current,Td(t),new Mc(i)},Ml.version="19.1.1",Ml}var F_;function VA(){if(F_)return Bd.exports;F_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bd.exports=OA(),Bd.exports}var MA=VA();const PA=()=>{};var G_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},kA=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],d=r[n++],p=r[n++],g=((l&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,p=d?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,T=c>>2,C=(c&3)<<4|p>>4;let x=(p&15)<<2|y>>6,F=y&63;g||(F=64,d||(x=64)),s.push(n[T],n[C],n[x],n[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(R0(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):kA(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const y=l<r.length?n[r.charAt(l)]:64;++l;const C=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||p==null||y==null||C==null)throw new UA;const x=c<<2|p>>4;if(s.push(x),y!==64){const F=p<<4&240|y>>2;if(s.push(F),C!==64){const J=y<<6&192|C;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class UA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LA=function(r){const e=R0(r);return I0.encodeByteArray(e,!0)},eh=function(r){return LA(r).replace(/\./g,"")},C0=function(r){try{return I0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=()=>jA().__FIREBASE_DEFAULTS__,qA=()=>{if(typeof process>"u"||typeof G_>"u")return;const r=G_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},BA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&C0(r[1]);return e&&JSON.parse(e)},Th=()=>{try{return PA()||zA()||qA()||BA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},x0=r=>Th()?.emulatorHosts?.[r],HA=r=>{const e=x0(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},N0=()=>Th()?.config,D0=r=>Th()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function O0(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[eh(JSON.stringify(n)),eh(JSON.stringify(d)),""].join(".")}const Bl={};function QA(){const r={prod:[],emulator:[]};for(const e of Object.keys(Bl))Bl[e]?r.emulator.push(e):r.prod.push(e);return r}function KA(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let Q_=!1;function V0(r,e){if(typeof window>"u"||typeof document>"u"||!Ao(window.location.host)||Bl[r]===e||Bl[r]||Q_)return;Bl[r]=e;function n(x){return`__firebase__banner__${x}`}const s="__firebase__banner",c=QA().prod.length>0;function d(){const x=document.getElementById(s);x&&x.remove()}function p(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function g(x,F){x.setAttribute("width","24"),x.setAttribute("id",F),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function y(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Q_=!0,d()},x}function T(x,F){x.setAttribute("id",F),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function C(){const x=KA(s),F=n("text"),J=document.getElementById(F)||document.createElement("span"),se=n("learnmore"),W=document.getElementById(se)||document.createElement("a"),Ae=n("preprendIcon"),ye=document.getElementById(Ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const me=x.element;p(me),T(W,se);const ze=y();g(ye,Ae),me.append(ye,J,W,ze),document.body.appendChild(me)}c?(J.innerText="Preview backend disconnected.",ye.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ye.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function XA(){const r=Th()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $A(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function JA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WA(){const r=fn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function e1(){return!XA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function t1(){try{return typeof indexedDB=="object"}catch{return!1}}function n1(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="FirebaseError";class Cr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=i1,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,su.prototype.create)}}class su{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],d=c?r1(c,s):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new Cr(l,p,s)}}function r1(r,e){return r.replace(s1,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const s1=/\{\$([^}]+)}/g;function a1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function aa(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],d=e[l];if(K_(c)&&K_(d)){if(!aa(c,d))return!1}else if(c!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function K_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,c]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(c)}}),e}function Ul(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function o1(r,e){const n=new l1(r,e);return n.subscribe.bind(n)}class l1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");u1(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Qd),l.error===void 0&&(l.error=Qd),l.complete===void 0&&(l.complete=Qd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u1(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Qd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(r){return r&&r._delegate?r._delegate:r}class oa{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new FA;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f1(e))try{this.getOrInitializeService({instanceIdentifier:ra})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=ra){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ra){return this.instances.has(e)}getOptions(e=ra){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:h1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ra){return this.component?this.component.multipleInstances?e:ra:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(r){return r===ra?void 0:r}function f1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new c1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ue||(Ue={}));const m1={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},p1=Ue.INFO,g1={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},y1=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=g1[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Om{constructor(e){this.name=e,this._logLevel=p1,this._logHandler=y1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const _1=(r,e)=>e.some(n=>r instanceof n);let Y_,X_;function v1(){return Y_||(Y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E1(){return X_||(X_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M0=new WeakMap,sm=new WeakMap,P0=new WeakMap,Kd=new WeakMap,Vm=new WeakMap;function T1(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(ls(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&M0.set(n,r)}).catch(()=>{}),Vm.set(e,r),e}function b1(r){if(sm.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});sm.set(r,e)}let am={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return sm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||P0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ls(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function A1(r){am=r(am)}function S1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Yd(this),e,...n);return P0.set(s,e.sort?e.sort():[e]),ls(s)}:E1().includes(r)?function(...e){return r.apply(Yd(this),e),ls(M0.get(this))}:function(...e){return ls(r.apply(Yd(this),e))}}function w1(r){return typeof r=="function"?S1(r):(r instanceof IDBTransaction&&b1(r),_1(r,v1())?new Proxy(r,am):r)}function ls(r){if(r instanceof IDBRequest)return T1(r);if(Kd.has(r))return Kd.get(r);const e=w1(r);return e!==r&&(Kd.set(r,e),Vm.set(e,r)),e}const Yd=r=>Vm.get(r);function R1(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const d=indexedDB.open(r,e),p=ls(d);return s&&d.addEventListener("upgradeneeded",g=>{s(ls(d.result),g.oldVersion,g.newVersion,ls(d.transaction),g)}),n&&d.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const I1=["get","getKey","getAll","getAllKeys","count"],C1=["put","add","delete","clear"],Xd=new Map;function $_(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=C1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||I1.includes(n)))return;const c=async function(d,...p){const g=this.transaction(d,l?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),l&&g.done]))[0]};return Xd.set(e,c),c}A1(r=>({...r,get:(e,n,s)=>$_(e,n)||r.get(e,n,s),has:(e,n)=>!!$_(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function N1(r){return r.getComponent()?.type==="VERSION"}const om="@firebase/app",Z_="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Om("@firebase/app"),D1="@firebase/app-compat",O1="@firebase/analytics-compat",V1="@firebase/analytics",M1="@firebase/app-check-compat",P1="@firebase/app-check",k1="@firebase/auth",U1="@firebase/auth-compat",L1="@firebase/database",j1="@firebase/data-connect",z1="@firebase/database-compat",q1="@firebase/functions",B1="@firebase/functions-compat",H1="@firebase/installations",F1="@firebase/installations-compat",G1="@firebase/messaging",Q1="@firebase/messaging-compat",K1="@firebase/performance",Y1="@firebase/performance-compat",X1="@firebase/remote-config",$1="@firebase/remote-config-compat",Z1="@firebase/storage",J1="@firebase/storage-compat",W1="@firebase/firestore",eS="@firebase/ai",tS="@firebase/firestore-compat",nS="firebase",iS="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="[DEFAULT]",rS={[om]:"fire-core",[D1]:"fire-core-compat",[V1]:"fire-analytics",[O1]:"fire-analytics-compat",[P1]:"fire-app-check",[M1]:"fire-app-check-compat",[k1]:"fire-auth",[U1]:"fire-auth-compat",[L1]:"fire-rtdb",[j1]:"fire-data-connect",[z1]:"fire-rtdb-compat",[q1]:"fire-fn",[B1]:"fire-fn-compat",[H1]:"fire-iid",[F1]:"fire-iid-compat",[G1]:"fire-fcm",[Q1]:"fire-fcm-compat",[K1]:"fire-perf",[Y1]:"fire-perf-compat",[X1]:"fire-rc",[$1]:"fire-rc-compat",[Z1]:"fire-gcs",[J1]:"fire-gcs-compat",[W1]:"fire-fst",[tS]:"fire-fst-compat",[eS]:"fire-vertex","fire-js":"fire-js",[nS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Map,sS=new Map,um=new Map;function J_(r,e){try{r.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function go(r){const e=r.name;if(um.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;um.set(e,r);for(const n of th.values())J_(n,r);for(const n of sS.values())J_(n,r);return!0}function Mm(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function li(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},us=new su("app","Firebase",aS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=iS;function k0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:lm,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw us.create("bad-app-name",{appName:String(l)});if(n||(n=N0()),!n)throw us.create("no-options");const c=th.get(l);if(c){if(aa(n,c.options)&&aa(s,c.config))return c;throw us.create("duplicate-app",{appName:l})}const d=new d1(l);for(const g of um.values())d.addComponent(g);const p=new oS(n,s,d);return th.set(l,p),p}function U0(r=lm){const e=th.get(r);if(!e&&r===lm&&N0())return k0();if(!e)throw us.create("no-app",{appName:r});return e}function cs(r,e,n){let s=rS[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(d.join(" "));return}go(new oa(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="firebase-heartbeat-database",uS=1,Xl="firebase-heartbeat-store";let $d=null;function L0(){return $d||($d=R1(lS,uS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xl)}catch(n){console.warn(n)}}}}).catch(r=>{throw us.create("idb-open",{originalErrorMessage:r.message})})),$d}async function cS(r){try{const n=(await L0()).transaction(Xl),s=await n.objectStore(Xl).get(j0(r));return await n.done,s}catch(e){if(e instanceof Cr)Ar.warn(e.message);else{const n=us.create("idb-get",{originalErrorMessage:e?.message});Ar.warn(n.message)}}}async function W_(r,e){try{const s=(await L0()).transaction(Xl,"readwrite");await s.objectStore(Xl).put(e,j0(r)),await s.done}catch(n){if(n instanceof Cr)Ar.warn(n.message);else{const s=us.create("idb-set",{originalErrorMessage:n?.message});Ar.warn(s.message)}}}function j0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=1024,fS=30;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ev();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>fS){const l=gS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ar.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ev(),{heartbeatsToSend:n,unsentEntries:s}=mS(this._heartbeatsCache.heartbeats),l=eh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return Ar.warn(e),""}}}function ev(){return new Date().toISOString().substring(0,10)}function mS(r,e=hS){const n=[];let s=r.slice();for(const l of r){const c=n.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),tv(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),tv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t1()?n1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cS(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return W_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return W_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tv(r){return eh(JSON.stringify({version:2,heartbeats:r})).length}function gS(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(r){go(new oa("platform-logger",e=>new x1(e),"PRIVATE")),go(new oa("heartbeat",e=>new dS(e),"PRIVATE")),cs(om,Z_,r),cs(om,Z_,"esm2020"),cs("fire-js","")}yS("");var _S="firebase",vS="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cs(_S,vS,"app");function z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ES=z0,q0=new su("auth","Firebase",z0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Om("@firebase/auth");function TS(r,...e){nh.logLevel<=Ue.WARN&&nh.warn(`Auth (${So}): ${r}`,...e)}function Fc(r,...e){nh.logLevel<=Ue.ERROR&&nh.error(`Auth (${So}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r,...e){throw Pm(r,...e)}function ji(r,...e){return Pm(r,...e)}function B0(r,e,n){const s={...ES(),[e]:n};return new su("auth","Firebase",s).create(e,{appName:r.name})}function Tr(r){return B0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return q0.create(r,...e)}function Ee(r,e,...n){if(!r)throw Pm(e,...n)}function vr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Fc(e),new Error(e)}function Sr(r,e){r||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return typeof self<"u"&&self.location?.href||""}function bS(){return nv()==="http:"||nv()==="https:"}function nv(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bS()||ZA()||"connection"in navigator)?navigator.onLine:!0}function SS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=YA()||JA()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(r,e){Sr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IS=new ou(3e4,6e4);function Ts(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function bs(r,e,n,s,l={}){return F0(r,l,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const p=au({key:r.config.apiKey,...d}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:g,...c};return $A()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Ao(r.emulatorConfig.host)&&(y.credentials="include"),H0.fetch()(await G0(r,r.config.apiHost,n,p),y)})}async function F0(r,e,n){r._canInitEmulator=!1;const s={...wS,...e};try{const l=new xS(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw kc(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const p=c.ok?d.errorMessage:d.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw kc(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw kc(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw kc(r,"user-disabled",d);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw B0(r,T,y);gi(r,T)}}catch(l){if(l instanceof Cr)throw l;gi(r,"network-request-failed",{message:String(l)})}}async function lu(r,e,n,s,l={}){const c=await bs(r,e,n,s,l);return"mfaPendingCredential"in c&&gi(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function G0(r,e,n,s){const l=`${e}${n}?${s}`,c=r,d=c.config.emulator?km(r.config,l):`${r.config.apiScheme}://${l}`;return RS.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function CS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ji(this.auth,"network-request-failed")),IS.get())})}}function kc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=ji(r,e,s);return l.customData._tokenResponse=n,l}function iv(r){return r!==void 0&&r.enterprise!==void 0}class NS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DS(r,e){return bs(r,"GET","/v2/recaptchaConfig",Ts(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(r,e){return bs(r,"POST","/v1/accounts:delete",e)}async function ih(r,e){return bs(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(r,e=!1){const n=Ct(r),s=await n.getIdToken(e),l=Um(s);Ee(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:s,authTime:Hl(Zd(l.auth_time)),issuedAtTime:Hl(Zd(l.iat)),expirationTime:Hl(Zd(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Zd(r){return Number(r)*1e3}function Um(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Fc("JWT malformed, contained fewer than 3 sections"),null;try{const l=C0(n);return l?JSON.parse(l):(Fc("Failed to decode base64 JWT payload"),null)}catch(l){return Fc("Caught error parsing JWT payload as JSON",l?.toString()),null}}function rv(r){const e=Um(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cr&&MS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function MS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hl(this.lastLoginAt),this.creationTime=Hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(r){const e=r.auth,n=await r.getIdToken(),s=await $l(r,ih(e,{idToken:n}));Ee(s?.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?Q0(l.providerUserInfo):[],d=US(r.providerData,c),p=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!d?.length,y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new hm(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,T)}async function kS(r){const e=Ct(r);await rh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Q0(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(r,e){const n=await F0(r,{},async()=>{const s=au({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await G0(r,l,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Ao(r.emulatorConfig.host)&&(g.credentials="include"),H0.fetch()(d,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jS(r,e){return bs(r,"POST","/v2/accounts:revokeToken",Ts(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=rv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await LS(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,d=new co;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Ee(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),c&&(Ee(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class pi{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new PS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new hm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await $l(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return kS(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await rh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(li(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await $l(this,OS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:C,emailVerified:x,isAnonymous:F,providerData:J,stsTokenManager:se}=n;Ee(C&&se,e,"internal-error");const W=co.fromJSON(this.name,se);Ee(typeof C=="string",e,"internal-error"),ns(s,e.name),ns(l,e.name),Ee(typeof x=="boolean",e,"internal-error"),Ee(typeof F=="boolean",e,"internal-error"),ns(c,e.name),ns(d,e.name),ns(p,e.name),ns(g,e.name),ns(y,e.name),ns(T,e.name);const Ae=new pi({uid:C,auth:e,email:l,emailVerified:x,displayName:s,isAnonymous:F,photoURL:d,phoneNumber:c,tenantId:p,stsTokenManager:W,createdAt:y,lastLoginAt:T});return J&&Array.isArray(J)&&(Ae.providerData=J.map(ye=>({...ye}))),g&&(Ae._redirectEventId=g),Ae}static async _fromIdTokenResponse(e,n,s=!1){const l=new co;l.updateFromServerResponse(n);const c=new pi({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await rh(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Ee(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?Q0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,p=new co;p.updateFromIdToken(s);const g=new pi({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:d}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new hm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;function Er(r){Sr(r instanceof Function,"Expected a class definition");let e=sv.get(r);return e?(Sr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,sv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K0.type="NONE";const av=K0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(r,e,n){return`firebase:${r}:${e}:${n}`}class ho{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Gc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Gc("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ih(this.auth,{idToken:e}).catch(()=>{});return n?pi._fromGetAccountInfoResponse(this.auth,n,e):null}return pi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ho(Er(av),e,s);const l=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||Er(av);const d=Gc(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const T=await y._get(d);if(T){let C;if(typeof T=="string"){const x=await ih(e,{idToken:T}).catch(()=>{});if(!x)break;C=await pi._fromGetAccountInfoResponse(e,x,T)}else C=pi._fromJSON(e,T);y!==c&&(p=C),c=y;break}}catch{}const g=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new ho(c,e,s):(c=g[0],p&&await c._set(d,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new ho(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(eE(e))return"Webos";if(X0(e))return"Safari";if((e.includes("chrome/")||$0(e))&&!e.includes("edge/"))return"Chrome";if(J0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function Y0(r=fn()){return/firefox\//i.test(r)}function X0(r=fn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $0(r=fn()){return/crios\//i.test(r)}function Z0(r=fn()){return/iemobile/i.test(r)}function J0(r=fn()){return/android/i.test(r)}function W0(r=fn()){return/blackberry/i.test(r)}function eE(r=fn()){return/webos/i.test(r)}function Lm(r=fn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function zS(r=fn()){return Lm(r)&&!!window.navigator?.standalone}function qS(){return WA()&&document.documentMode===10}function tE(r=fn()){return Lm(r)||J0(r)||eE(r)||W0(r)||/windows phone/i.test(r)||Z0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(r,e=[]){let n;switch(r){case"Browser":n=ov(fn());break;case"Worker":n=`${ov(fn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${So}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,p)=>{try{const g=e(c);d(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(r,e={}){return bs(r,"GET","/v2/passwordPolicy",Ts(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=6;class GS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??FS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lv(this),this.idTokenSubscription=new lv(this),this.beforeStateQueue=new BS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ih(this,{idToken:e}),s=await pi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(li(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&p?.user&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(li(this.app))return Promise.reject(Tr(this));const n=e?Ct(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return li(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return li(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HS(this),n=new GS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new su("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await jS(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(p,this,"internal-error"),p.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,l);return()=>{d=!0,g()}}else{const g=e.addObserver(n);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(li(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&TS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ha(r){return Ct(r)}class lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=o1(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KS(r){bh=r}function iE(r){return bh.loadJS(r)}function YS(){return bh.recaptchaEnterpriseScript}function XS(){return bh.gapiScript}function $S(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ZS{constructor(){this.enterprise=new JS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WS="recaptcha-enterprise",rE="NO_RECAPTCHA";class ew{constructor(e){this.type=WS,this.auth=ha(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,p)=>{DS(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new NS(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,d(y.siteKey)}}).catch(g=>{p(g)})})}function l(c,d,p){const g=window.grecaptcha;iv(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(y=>{d(y)}).catch(()=>{d(rE)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ZS().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{s(this.auth).then(p=>{if(!n&&iv(window.grecaptcha))l(p,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=YS();g.length!==0&&(g+=p),iE(g).then(()=>{l(p,c,d)}).catch(y=>{d(y)})}}).catch(p=>{d(p)})})}}async function uv(r,e,n,s=!1,l=!1){const c=new ew(r);let d;if(l)d=rE;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function cv(r,e,n,s,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await uv(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await uv(r,e,n,n==="getOobCode");return s(r,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(r,e){const n=Mm(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(aa(c,e??{}))return l;gi(l,"already-initialized")}return n.initialize({options:e})}function nw(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Er);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function iw(r,e,n){const s=ha(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=sE(e),{host:d,port:p}=rw(e),g=p===null?"":`:${p}`,y={url:`${c}//${d}${g}/`},T=Object.freeze({host:d,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(aa(y,s.config.emulator)&&aa(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Ao(d)?(O0(`${c}//${d}${g}`),V0("Auth",!0)):sw()}function sE(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function rw(r){const e=sE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:hv(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:hv(d)}}}function hv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function sw(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function aw(r,e){return bs(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(r,e){return lu(r,"POST","/v1/accounts:signInWithPassword",Ts(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(r,e){return lu(r,"POST","/v1/accounts:signInWithEmailLink",Ts(r,e))}async function uw(r,e){return lu(r,"POST","/v1/accounts:signInWithEmailLink",Ts(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends jm{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Zl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Zl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cv(e,n,"signInWithPassword",ow);case"emailLink":return lw(e,{email:this._email,oobCode:this._password});default:gi(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cv(e,s,"signUpPassword",aw);case"emailLink":return uw(e,{idToken:n,email:this._email,oobCode:this._password});default:gi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(r,e){return lu(r,"POST","/v1/accounts:signInWithIdp",Ts(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="http://localhost";class la extends jm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new la(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const d=new la(s,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:cw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=au(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fw(r){const e=kl(Ul(r)).link,n=e?kl(Ul(e)).deep_link_id:null,s=kl(Ul(r)).deep_link_id;return(s?kl(Ul(s)).link:null)||s||n||e||r}class zm{constructor(e){const n=kl(Ul(e)),s=n.apiKey??null,l=n.oobCode??null,c=hw(n.mode??null);Ee(s&&l&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=fw(e);try{return new zm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.providerId=wo.PROVIDER_ID}static credential(e,n){return Zl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zm.parseLink(n);return Ee(s,"argument-error"),Zl._fromEmailAndCode(e,s.code,s.tenantId)}}wo.PROVIDER_ID="password";wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends aE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends uu{constructor(){super("facebook.com")}static credential(e){return la._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends uu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return la._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rs.credential(n,s)}catch{return null}}}rs.GOOGLE_SIGN_IN_METHOD="google.com";rs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends uu{constructor(){super("github.com")}static credential(e){return la._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends uu{constructor(){super("twitter.com")}static credential(e,n){return la._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return as.credential(n,s)}catch{return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(r,e){return lu(r,"POST","/v1/accounts:signUp",Ts(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const c=await pi._fromIdTokenResponse(e,s,l),d=fv(s);return new ms({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=fv(s);return new ms({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function fv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(r){if(li(r.app))return Promise.reject(Tr(r));const e=ha(r);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new ms({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await dw(e,{returnSecureToken:!0}),s=await ms._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends Cr{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,sh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new sh(e,n,s,l)}}function oE(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?sh._fromErrorAndOperation(r,c,e,s):c})}async function pw(r,e,n=!1){const s=await $l(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ms._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(r,e,n=!1){const{auth:s}=r;if(li(s.app))return Promise.reject(Tr(s));const l="reauthenticate";try{const c=await $l(r,oE(s,l,e,r),n);Ee(c.idToken,s,"internal-error");const d=Um(c.idToken);Ee(d,s,"internal-error");const{sub:p}=d;return Ee(r.uid===p,s,"user-mismatch"),ms._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&gi(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(r,e,n=!1){if(li(r.app))return Promise.reject(Tr(r));const s="signIn",l=await oE(r,s,e),c=await ms._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}async function yw(r,e){return lE(ha(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(r){const e=ha(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vw(r,e,n){return li(r.app)?Promise.reject(Tr(r)):yw(Ct(r),wo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_w(r),s})}function Ew(r,e,n,s){return Ct(r).onIdTokenChanged(e,n,s)}function Tw(r,e,n){return Ct(r).beforeAuthStateChanged(e,n)}function bw(r,e,n,s){return Ct(r).onAuthStateChanged(e,n,s)}function Aw(r){return Ct(r).signOut()}const ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=1e3,ww=10;class cE extends uE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,p,g)=>{this.notifyListeners(d,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);qS()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,ww):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cE.type="LOCAL";const Rw=cE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends uE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hE.type="SESSION";const fE=hE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Ah(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,d=this.handlersMap[l];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(d).map(async y=>y(n.origin,c)),g=await Iw(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((p,g)=>{const y=qm("",20);l.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(C){const x=C;if(x.data.eventId===y)switch(x.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(x.data.response);break;default:clearTimeout(T),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return window}function xw(r){zi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){return typeof zi().WorkerGlobalScope<"u"&&typeof zi().importScripts=="function"}async function Nw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dw(){return navigator?.serviceWorker?.controller||null}function Ow(){return dE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="firebaseLocalStorageDb",Vw=1,oh="firebaseLocalStorage",pE="fbase_key";class cu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sh(r,e){return r.transaction([oh],e?"readwrite":"readonly").objectStore(oh)}function Mw(){const r=indexedDB.deleteDatabase(mE);return new cu(r).toPromise()}function fm(){const r=indexedDB.open(mE,Vw);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(oh,{keyPath:pE})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(oh)?e(s):(s.close(),await Mw(),e(await fm()))})})}async function dv(r,e,n){const s=Sh(r,!0).put({[pE]:e,value:n});return new cu(s).toPromise()}async function Pw(r,e){const n=Sh(r,!1).get(e),s=await new cu(n).toPromise();return s===void 0?null:s.value}function mv(r,e){const n=Sh(r,!0).delete(e);return new cu(n).toPromise()}const kw=800,Uw=3;class gE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Uw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(Ow()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Nw(),!this.activeServiceWorker)return;this.sender=new Cw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fm();return await dv(e,ah,"1"),await mv(e,ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Pw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Sh(l,!1).getAll();return new cu(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gE.type="LOCAL";const Lw=gE;new ou(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(r,e){return e?Er(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm extends jm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zw(r){return lE(r.auth,new Bm(r),r.bypassAuthState)}function qw(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),gw(n,new Bm(r),r.bypassAuthState)}async function Bw(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),pw(n,new Bm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:d,type:p}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zw;case"linkViaPopup":case"linkViaRedirect":return Bw;case"reauthViaPopup":case"reauthViaRedirect":return qw;default:gi(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new ou(2e3,1e4);class lo extends yE{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ji(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ji(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ji(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hw.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="pendingRedirect",Qc=new Map;class Gw extends yE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qc.get(this.auth._key());if(!e){try{const s=await Qw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qc.set(this.auth._key(),e)}return this.bypassAuthState||Qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qw(r,e){const n=Xw(e),s=Yw(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function Kw(r,e){Qc.set(r._key(),e)}function Yw(r){return Er(r._redirectPersistence)}function Xw(r){return Gc(Fw,r.config.apiKey,r.name)}async function $w(r,e,n=!1){if(li(r.app))return Promise.reject(Tr(r));const s=ha(r),l=jw(s,e),d=await new Gw(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=600*1e3;class Jw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ww(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!_E(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ji(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zw&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(e))}saveEventToCache(e){this.cachedEventUids.add(pv(e)),this.lastProcessedEventTime=Date.now()}}function pv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function _E({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Ww(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _E(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(r,e={}){return bs(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nR=/^https?/;async function iR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await eR(r);for(const n of e)try{if(rR(n))return}catch{}gi(r,"unauthorized-domain")}function rR(r){const e=cm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!nR.test(n))return!1;if(tR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new ou(3e4,6e4);function gv(){const r=zi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function aR(r){return new Promise((e,n)=>{function s(){gv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gv(),n(ji(r,"network-request-failed"))},timeout:sR.get()})}if(zi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(zi().gapi?.load)s();else{const l=$S("iframefcb");return zi()[l]=()=>{gapi.load?s():n(ji(r,"network-request-failed"))},iE(`${XS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Kc=null,e})}let Kc=null;function oR(r){return Kc=Kc||aR(r),Kc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new ou(5e3,15e3),uR="__/auth/iframe",cR="emulator/auth/iframe",hR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dR(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?km(e,cR):`https://${r.config.authDomain}/${uR}`,s={apiKey:e.apiKey,appName:r.name,v:So},l=fR.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${au(s).slice(1)}`}async function mR(r){const e=await oR(r),n=zi().gapi;return Ee(n,r,"internal-error"),e.open({where:document.body,url:dR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hR,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const d=ji(r,"network-request-failed"),p=zi().setTimeout(()=>{c(d)},lR.get());function g(){zi().clearTimeout(p),l(s)}s.ping(g).then(g,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gR=500,yR=600,_R="_blank",vR="http://localhost";class yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ER(r,e,n,s=gR,l=yR){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...pR,width:s.toString(),height:l.toString(),top:c,left:d},y=fn().toLowerCase();n&&(p=$0(y)?_R:n),Y0(y)&&(e=e||vR,g.scrollbars="yes");const T=Object.entries(g).reduce((x,[F,J])=>`${x}${F}=${J},`,"");if(zS(y)&&p!=="_self")return TR(e||"",p),new yv(null);const C=window.open(e||"",p,T);Ee(C,r,"popup-blocked");try{C.focus()}catch{}return new yv(C)}function TR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="__/auth/handler",AR="emulator/auth/handler",SR=encodeURIComponent("fac");async function _v(r,e,n,s,l,c){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:So,eventId:l};if(e instanceof aE){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",a1(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,C]of Object.entries({}))d[T]=C}if(e instanceof uu){const T=e.getScopes().filter(C=>C!=="");T.length>0&&(d.scopes=T.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const g=await r._getAppCheckToken(),y=g?`#${SR}=${encodeURIComponent(g)}`:"";return`${wR(r)}?${au(p).slice(1)}${y}`}function wR({config:r}){return r.emulator?km(r,AR):`https://${r.authDomain}/${bR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class RR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fE,this._completeRedirectFn=$w,this._overrideRedirectResult=Kw}async _openPopup(e,n,s,l){Sr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await _v(e,n,s,cm(),l);return ER(e,c,qm())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await _v(e,n,s,cm(),l);return xw(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(Sr(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mR(e),s=new Jw(e);return n.register("authEvent",l=>(Ee(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},l=>{const c=l?.[0]?.[Jd];c!==void 0&&n(!!c),gi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tE()||X0()||Lm()}}const IR=RR;var vv="@firebase/auth",Ev="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NR(r){go(new oa("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=s.options;Ee(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nE(r)},y=new QS(s,l,c,g);return nw(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),go(new oa("auth-internal",e=>{const n=ha(e.getProvider("auth").getImmediate());return(s=>new CR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cs(vv,Ev,xR(r)),cs(vv,Ev,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=300,OR=D0("authIdTokenMaxAge")||DR;let Tv=null;const VR=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>OR)return;const l=n?.token;Tv!==l&&(Tv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function MR(r=U0()){const e=Mm(r,"auth");if(e.isInitialized())return e.getImmediate();const n=tw(r,{popupRedirectResolver:IR,persistence:[Lw,Rw,fE]}),s=D0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=VR(c.toString());Tw(n,d,()=>d(n.currentUser)),Ew(n,p=>d(p))}}const l=x0("auth");return l&&iw(n,`http://${l}`),n}function PR(){return document.getElementsByTagName("head")?.[0]??document}KS({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=ji("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",PR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NR("Browser");var bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hs,vE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,S){function I(){}I.prototype=S.prototype,V.D=S.prototype,V.prototype=new I,V.prototype.constructor=V,V.C=function(O,M,P){for(var R=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)R[xt-2]=arguments[xt];return S.prototype[M].apply(O,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,S,I){I||(I=0);var O=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)O[M]=S.charCodeAt(I++)|S.charCodeAt(I++)<<8|S.charCodeAt(I++)<<16|S.charCodeAt(I++)<<24;else for(M=0;16>M;++M)O[M]=S[I++]|S[I++]<<8|S[I++]<<16|S[I++]<<24;S=V.g[0],I=V.g[1],M=V.g[2];var P=V.g[3],R=S+(P^I&(M^P))+O[0]+3614090360&4294967295;S=I+(R<<7&4294967295|R>>>25),R=P+(M^S&(I^M))+O[1]+3905402710&4294967295,P=S+(R<<12&4294967295|R>>>20),R=M+(I^P&(S^I))+O[2]+606105819&4294967295,M=P+(R<<17&4294967295|R>>>15),R=I+(S^M&(P^S))+O[3]+3250441966&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(P^I&(M^P))+O[4]+4118548399&4294967295,S=I+(R<<7&4294967295|R>>>25),R=P+(M^S&(I^M))+O[5]+1200080426&4294967295,P=S+(R<<12&4294967295|R>>>20),R=M+(I^P&(S^I))+O[6]+2821735955&4294967295,M=P+(R<<17&4294967295|R>>>15),R=I+(S^M&(P^S))+O[7]+4249261313&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(P^I&(M^P))+O[8]+1770035416&4294967295,S=I+(R<<7&4294967295|R>>>25),R=P+(M^S&(I^M))+O[9]+2336552879&4294967295,P=S+(R<<12&4294967295|R>>>20),R=M+(I^P&(S^I))+O[10]+4294925233&4294967295,M=P+(R<<17&4294967295|R>>>15),R=I+(S^M&(P^S))+O[11]+2304563134&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(P^I&(M^P))+O[12]+1804603682&4294967295,S=I+(R<<7&4294967295|R>>>25),R=P+(M^S&(I^M))+O[13]+4254626195&4294967295,P=S+(R<<12&4294967295|R>>>20),R=M+(I^P&(S^I))+O[14]+2792965006&4294967295,M=P+(R<<17&4294967295|R>>>15),R=I+(S^M&(P^S))+O[15]+1236535329&4294967295,I=M+(R<<22&4294967295|R>>>10),R=S+(M^P&(I^M))+O[1]+4129170786&4294967295,S=I+(R<<5&4294967295|R>>>27),R=P+(I^M&(S^I))+O[6]+3225465664&4294967295,P=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(P^S))+O[11]+643717713&4294967295,M=P+(R<<14&4294967295|R>>>18),R=I+(P^S&(M^P))+O[0]+3921069994&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(M^P&(I^M))+O[5]+3593408605&4294967295,S=I+(R<<5&4294967295|R>>>27),R=P+(I^M&(S^I))+O[10]+38016083&4294967295,P=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(P^S))+O[15]+3634488961&4294967295,M=P+(R<<14&4294967295|R>>>18),R=I+(P^S&(M^P))+O[4]+3889429448&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(M^P&(I^M))+O[9]+568446438&4294967295,S=I+(R<<5&4294967295|R>>>27),R=P+(I^M&(S^I))+O[14]+3275163606&4294967295,P=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(P^S))+O[3]+4107603335&4294967295,M=P+(R<<14&4294967295|R>>>18),R=I+(P^S&(M^P))+O[8]+1163531501&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(M^P&(I^M))+O[13]+2850285829&4294967295,S=I+(R<<5&4294967295|R>>>27),R=P+(I^M&(S^I))+O[2]+4243563512&4294967295,P=S+(R<<9&4294967295|R>>>23),R=M+(S^I&(P^S))+O[7]+1735328473&4294967295,M=P+(R<<14&4294967295|R>>>18),R=I+(P^S&(M^P))+O[12]+2368359562&4294967295,I=M+(R<<20&4294967295|R>>>12),R=S+(I^M^P)+O[5]+4294588738&4294967295,S=I+(R<<4&4294967295|R>>>28),R=P+(S^I^M)+O[8]+2272392833&4294967295,P=S+(R<<11&4294967295|R>>>21),R=M+(P^S^I)+O[11]+1839030562&4294967295,M=P+(R<<16&4294967295|R>>>16),R=I+(M^P^S)+O[14]+4259657740&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(I^M^P)+O[1]+2763975236&4294967295,S=I+(R<<4&4294967295|R>>>28),R=P+(S^I^M)+O[4]+1272893353&4294967295,P=S+(R<<11&4294967295|R>>>21),R=M+(P^S^I)+O[7]+4139469664&4294967295,M=P+(R<<16&4294967295|R>>>16),R=I+(M^P^S)+O[10]+3200236656&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(I^M^P)+O[13]+681279174&4294967295,S=I+(R<<4&4294967295|R>>>28),R=P+(S^I^M)+O[0]+3936430074&4294967295,P=S+(R<<11&4294967295|R>>>21),R=M+(P^S^I)+O[3]+3572445317&4294967295,M=P+(R<<16&4294967295|R>>>16),R=I+(M^P^S)+O[6]+76029189&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(I^M^P)+O[9]+3654602809&4294967295,S=I+(R<<4&4294967295|R>>>28),R=P+(S^I^M)+O[12]+3873151461&4294967295,P=S+(R<<11&4294967295|R>>>21),R=M+(P^S^I)+O[15]+530742520&4294967295,M=P+(R<<16&4294967295|R>>>16),R=I+(M^P^S)+O[2]+3299628645&4294967295,I=M+(R<<23&4294967295|R>>>9),R=S+(M^(I|~P))+O[0]+4096336452&4294967295,S=I+(R<<6&4294967295|R>>>26),R=P+(I^(S|~M))+O[7]+1126891415&4294967295,P=S+(R<<10&4294967295|R>>>22),R=M+(S^(P|~I))+O[14]+2878612391&4294967295,M=P+(R<<15&4294967295|R>>>17),R=I+(P^(M|~S))+O[5]+4237533241&4294967295,I=M+(R<<21&4294967295|R>>>11),R=S+(M^(I|~P))+O[12]+1700485571&4294967295,S=I+(R<<6&4294967295|R>>>26),R=P+(I^(S|~M))+O[3]+2399980690&4294967295,P=S+(R<<10&4294967295|R>>>22),R=M+(S^(P|~I))+O[10]+4293915773&4294967295,M=P+(R<<15&4294967295|R>>>17),R=I+(P^(M|~S))+O[1]+2240044497&4294967295,I=M+(R<<21&4294967295|R>>>11),R=S+(M^(I|~P))+O[8]+1873313359&4294967295,S=I+(R<<6&4294967295|R>>>26),R=P+(I^(S|~M))+O[15]+4264355552&4294967295,P=S+(R<<10&4294967295|R>>>22),R=M+(S^(P|~I))+O[6]+2734768916&4294967295,M=P+(R<<15&4294967295|R>>>17),R=I+(P^(M|~S))+O[13]+1309151649&4294967295,I=M+(R<<21&4294967295|R>>>11),R=S+(M^(I|~P))+O[4]+4149444226&4294967295,S=I+(R<<6&4294967295|R>>>26),R=P+(I^(S|~M))+O[11]+3174756917&4294967295,P=S+(R<<10&4294967295|R>>>22),R=M+(S^(P|~I))+O[2]+718787259&4294967295,M=P+(R<<15&4294967295|R>>>17),R=I+(P^(M|~S))+O[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+P&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var I=S-this.blockSize,O=this.B,M=this.h,P=0;P<S;){if(M==0)for(;P<=I;)l(this,V,P),P+=this.blockSize;if(typeof V=="string"){for(;P<S;)if(O[M++]=V.charCodeAt(P++),M==this.blockSize){l(this,O),M=0;break}}else for(;P<S;)if(O[M++]=V[P++],M==this.blockSize){l(this,O),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var I=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=I&255,I/=256;for(this.u(V),V=Array(16),S=I=0;4>S;++S)for(var O=0;32>O;O+=8)V[I++]=this.g[S]>>>O&255;return V};function c(V,S){var I=p;return Object.prototype.hasOwnProperty.call(I,V)?I[V]:I[V]=S(V)}function d(V,S){this.h=S;for(var I=[],O=!0,M=V.length-1;0<=M;M--){var P=V[M]|0;O&&P==S||(I[M]=P,O=!1)}this.g=I}var p={};function g(V){return-128<=V&&128>V?c(V,function(S){return new d([S|0],0>S?-1:0)}):new d([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return C;if(0>V)return W(y(-V));for(var S=[],I=1,O=0;V>=I;O++)S[O]=V/I|0,I*=4294967296;return new d(S,0)}function T(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return W(T(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(S,8)),O=C,M=0;M<V.length;M+=8){var P=Math.min(8,V.length-M),R=parseInt(V.substring(M,M+P),S);8>P?(P=y(Math.pow(S,P)),O=O.j(P).add(y(R))):(O=O.j(I),O=O.add(y(R)))}return O}var C=g(0),x=g(1),F=g(16777216);r=d.prototype,r.m=function(){if(se(this))return-W(this).m();for(var V=0,S=1,I=0;I<this.g.length;I++){var O=this.i(I);V+=(0<=O?O:4294967296+O)*S,S*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(J(this))return"0";if(se(this))return"-"+W(this).toString(V);for(var S=y(Math.pow(V,6)),I=this,O="";;){var M=ze(I,S).g;I=Ae(I,M.j(S));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(V);if(I=M,J(I))return P+O;for(;6>P.length;)P="0"+P;O=P+O}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function J(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function se(V){return V.h==-1}r.l=function(V){return V=Ae(this,V),se(V)?-1:J(V)?0:1};function W(V){for(var S=V.g.length,I=[],O=0;O<S;O++)I[O]=~V.g[O];return new d(I,~V.h).add(x)}r.abs=function(){return se(this)?W(this):this},r.add=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],O=0,M=0;M<=S;M++){var P=O+(this.i(M)&65535)+(V.i(M)&65535),R=(P>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);O=R>>>16,P&=65535,R&=65535,I[M]=R<<16|P}return new d(I,I[I.length-1]&-2147483648?-1:0)};function Ae(V,S){return V.add(W(S))}r.j=function(V){if(J(this)||J(V))return C;if(se(this))return se(V)?W(this).j(W(V)):W(W(this).j(V));if(se(V))return W(this.j(W(V)));if(0>this.l(F)&&0>V.l(F))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,I=[],O=0;O<2*S;O++)I[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<V.g.length;M++){var P=this.i(O)>>>16,R=this.i(O)&65535,xt=V.i(M)>>>16,dt=V.i(M)&65535;I[2*O+2*M]+=R*dt,ye(I,2*O+2*M),I[2*O+2*M+1]+=P*dt,ye(I,2*O+2*M+1),I[2*O+2*M+1]+=R*xt,ye(I,2*O+2*M+1),I[2*O+2*M+2]+=P*xt,ye(I,2*O+2*M+2)}for(O=0;O<S;O++)I[O]=I[2*O+1]<<16|I[2*O];for(O=S;O<2*S;O++)I[O]=0;return new d(I,0)};function ye(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function me(V,S){this.g=V,this.h=S}function ze(V,S){if(J(S))throw Error("division by zero");if(J(V))return new me(C,C);if(se(V))return S=ze(W(V),S),new me(W(S.g),W(S.h));if(se(S))return S=ze(V,W(S)),new me(W(S.g),S.h);if(30<V.g.length){if(se(V)||se(S))throw Error("slowDivide_ only works with positive integers.");for(var I=x,O=S;0>=O.l(V);)I=Se(I),O=Se(O);var M=oe(I,1),P=oe(O,1);for(O=oe(O,2),I=oe(I,2);!J(O);){var R=P.add(O);0>=R.l(V)&&(M=M.add(I),P=R),O=oe(O,1),I=oe(I,1)}return S=Ae(V,M.j(S)),new me(M,S)}for(M=C;0<=V.l(S);){for(I=Math.max(1,Math.floor(V.m()/S.m())),O=Math.ceil(Math.log(I)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),P=y(I),R=P.j(S);se(R)||0<R.l(V);)I-=O,P=y(I),R=P.j(S);J(P)&&(P=x),M=M.add(P),V=Ae(V,R)}return new me(M,V)}r.A=function(V){return ze(this,V).h},r.and=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],O=0;O<S;O++)I[O]=this.i(O)&V.i(O);return new d(I,this.h&V.h)},r.or=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],O=0;O<S;O++)I[O]=this.i(O)|V.i(O);return new d(I,this.h|V.h)},r.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),I=[],O=0;O<S;O++)I[O]=this.i(O)^V.i(O);return new d(I,this.h^V.h)};function Se(V){for(var S=V.g.length+1,I=[],O=0;O<S;O++)I[O]=V.i(O)<<1|V.i(O-1)>>>31;return new d(I,V.h)}function oe(V,S){var I=S>>5;S%=32;for(var O=V.g.length-I,M=[],P=0;P<O;P++)M[P]=0<S?V.i(P+I)>>>S|V.i(P+I+1)<<32-S:V.i(P+I);return new d(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,vE=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=T,hs=d}).apply(typeof bv<"u"?bv:typeof self<"u"?self:typeof window<"u"?window:{});var Uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var EE,Ll,TE,Yc,dm,bE,AE,SE;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uc=="object"&&Uc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function l(u,m){if(m)e:{var _=s;u=u.split(".");for(var b=0;b<u.length-1;b++){var U=u[b];if(!(U in _))break e;_=_[U]}u=u[u.length-1],b=_[u],m=m(b),m!=b&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,b=!1,U={next:function(){if(!b&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function g(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function T(u,m,_){return u.call.apply(u.bind,arguments)}function C(u,m,_){if(!u)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function x(u,m,_){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:C,x.apply(null,arguments)}function F(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var b=_.slice();return b.push.apply(b,arguments),u.apply(this,b)}}function J(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(b,U,H){for(var te=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)te[Be-2]=arguments[Be];return m.prototype[U].apply(b,te)}}function se(u){const m=u.length;if(0<m){const _=Array(m);for(let b=0;b<m;b++)_[b]=u[b];return _}return[]}function W(u,m){for(let _=1;_<arguments.length;_++){const b=arguments[_];if(g(b)){const U=u.length||0,H=b.length||0;u.length=U+H;for(let te=0;te<H;te++)u[U+te]=b[te]}else u.push(b)}}class Ae{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ye(u){return/^[\s\xa0]*$/.test(u)}function me(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function ze(u){return ze[" "](u),u}ze[" "]=function(){};var Se=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function oe(u,m,_){for(const b in u)m.call(_,u[b],b,u)}function V(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let _,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(_ in b)u[_]=b[_];for(let H=0;H<I.length;H++)_=I[H],Object.prototype.hasOwnProperty.call(b,_)&&(u[_]=b[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function P(u){p.setTimeout(()=>{throw u},0)}function R(){var u=ke;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class xt{constructor(){this.h=this.g=null}add(m,_){const b=dt.get();b.set(m,_),this.h?this.h.next=b:this.g=b,this.h=b}}var dt=new Ae(()=>new G,u=>u.reset());class G{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,ce=!1,ke=new xt,N=()=>{const u=p.Promise.resolve(void 0);ie=()=>{u.then(Z)}};var Z=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){P(_)}var m=dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ce=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var he=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};p.addEventListener("test",_,m),p.removeEventListener("test",_,m)}catch{}return u})();function Ie(u,m){if(ee.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,b=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{ze(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Te[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ie.aa.h.call(this)}}J(Ie,ee);var Te={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var vt="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function Tn(u,m,_,b,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!b,this.ha=U,this.key=++Xe,this.da=this.fa=!1}function _i(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function In(u){this.src=u,this.g={},this.h=0}In.prototype.add=function(u,m,_,b,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var te=vi(u,m,b,U);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new Tn(m,this.src,H,!!b,U),m.fa=_,u.push(m)),m};function an(u,m){var _=m.type;if(_ in u.g){var b=u.g[_],U=Array.prototype.indexOf.call(b,m,void 0),H;(H=0<=U)&&Array.prototype.splice.call(b,U,1),H&&(_i(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function vi(u,m,_,b){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==b)return U}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),xr={};function ws(u,m,_,b,U){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ws(u,m[H],_,b,U);return null}return _=ma(_),u&&u[vt]?u.K(m,_,y(b)?!!b.capture:!1,U):dn(u,m,_,!1,b,U)}function dn(u,m,_,b,U,H){if(!m)throw Error("Invalid event type");var te=y(U)?!!U.capture:!!U,Be=Or(u);if(Be||(u[Gi]=Be=new In(u)),_=Be.add(m,_,b,te,H),_.proxy)return _;if(b=Do(),_.proxy=b,b.src=u,b.listener=_,u.addEventListener)he||(U=te),U===void 0&&(U=!1),u.addEventListener(m.toString(),b,U);else if(u.attachEvent)u.attachEvent(Qi(m.toString()),b);else if(u.addListener&&u.removeListener)u.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Do(){function u(_){return m.call(u.src,u.listener,_)}const m=Oo;return u}function Nr(u,m,_,b,U){if(Array.isArray(m))for(var H=0;H<m.length;H++)Nr(u,m[H],_,b,U);else b=y(b)?!!b.capture:!!b,_=ma(_),u&&u[vt]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=vi(H,_,b,U),-1<_&&(_i(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Or(u))&&(m=u.g[m.toString()],u=-1,m&&(u=vi(m,_,b,U)),(_=-1<u?m[u]:null)&&Dr(_))}function Dr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[vt])an(m.i,u);else{var _=u.type,b=u.proxy;m.removeEventListener?m.removeEventListener(_,b,u.capture):m.detachEvent?m.detachEvent(Qi(_),b):m.addListener&&m.removeListener&&m.removeListener(b),(_=Or(m))?(an(_,u),_.h==0&&(_.src=null,m[Gi]=null)):_i(u)}}}function Qi(u){return u in xr?xr[u]:xr[u]="on"+u}function Oo(u,m){if(u.da)u=!0;else{m=new Ie(m,this);var _=u.listener,b=u.ha||u.src;u.fa&&Dr(u),u=_.call(b,m)}return u}function Or(u){return u=u[Gi],u instanceof In?u:null}var Rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ma(u){return typeof u=="function"?u:(u[Rs]||(u[Rs]=function(m){return u.handleEvent(m)}),u[Rs])}function mt(){re.call(this),this.i=new In(this),this.M=this,this.F=null}J(mt,re),mt.prototype[vt]=!0,mt.prototype.removeEventListener=function(u,m,_,b){Nr(this,u,m,_,b)};function $e(u,m){var _,b=u.F;if(b)for(_=[];b;b=b.F)_.push(b);if(u=u.M,b=m.type||m,typeof m=="string")m=new ee(m,u);else if(m instanceof ee)m.target=m.target||u;else{var U=m;m=new ee(b,u),O(m,U)}if(U=!0,_)for(var H=_.length-1;0<=H;H--){var te=m.g=_[H];U=mn(te,b,!0,m)&&U}if(te=m.g=u,U=mn(te,b,!0,m)&&U,U=mn(te,b,!1,m)&&U,_)for(H=0;H<_.length;H++)te=m.g=_[H],U=mn(te,b,!1,m)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],b=0;b<_.length;b++)_i(_[b]);delete u.g[m],u.h--}}this.F=null},mt.prototype.K=function(u,m,_,b){return this.i.add(String(u),m,!1,_,b)},mt.prototype.L=function(u,m,_,b){return this.i.add(String(u),m,!0,_,b)};function mn(u,m,_,b){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,H=0;H<m.length;++H){var te=m[H];if(te&&!te.da&&te.capture==_){var Be=te.listener,kt=te.ha||te.src;te.fa&&an(u.i,te),U=Be.call(kt,b)!==!1&&U}}return U&&!b.defaultPrevented}function qt(u,m,_){if(typeof u=="function")_&&(u=x(u,_));else if(u&&typeof u.handleEvent=="function")u=x(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function pa(u){u.g=qt(()=>{u.g=null,u.i&&(u.i=!1,pa(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Vo extends re{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:pa(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(u){re.call(this),this.h=u,this.g={}}J(Ki,re);var Yi=[];function Ei(u){oe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Dr(m)},u),u.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),Ei(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cn=p.JSON.stringify,Ti=p.JSON.parse,Xi=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Is(){}Is.prototype.h=null;function Cs(u){return u.h||(u.h=u.i())}function xs(){}var Fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ui(){ee.call(this,"d")}J(ui,ee);function Ns(){ee.call(this,"c")}J(Ns,ee);var Gn={},z=null;function ne(){return z=z||new mt}Gn.La="serverreachability";function Re(u){ee.call(this,Gn.La,u)}J(Re,ee);function xe(u){const m=ne();$e(m,new Re(m))}Gn.STAT_EVENT="statevent";function Et(u,m){ee.call(this,Gn.STAT_EVENT,u),this.stat=m}J(Et,ee);function Ne(u){const m=ne();$e(m,new Et(m,u))}Gn.Ma="timingevent";function ot(u,m){ee.call(this,Gn.Ma,u),this.size=m}J(ot,ee);function Ke(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function ct(){this.g=!0}ct.prototype.xa=function(){this.g=!1};function pn(u,m,_,b,U,H){u.info(function(){if(u.g)if(H)for(var te="",Be=H.split("&"),kt=0;kt<Be.length;kt++){var He=Be[kt].split("=");if(1<He.length){var Ft=He[0];He=He[1];var Ut=Ft.split("_");te=2<=Ut.length&&Ut[1]=="type"?te+(Ft+"="+He+"&"):te+(Ft+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+m+`
`+_+`
`+te})}function Mo(u,m,_,b,U,H,te){u.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+m+`
`+_+`
`+H+" "+te})}function ci(u,m,_,b){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Qn(u,_)+(b?" "+b:"")})}function Ds(u,m){u.info(function(){return"TIMEOUT: "+m})}ct.prototype.info=function(){};function Qn(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var b=_[u];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return Cn(_)}catch{return m}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function gn(){}J(gn,Is),gn.prototype.g=function(){return new XMLHttpRequest},gn.prototype.i=function(){return{}},xn=new gn;function on(u,m,_,b){this.j=u,this.i=m,this.l=_,this.R=b||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ht}function ht(){this.i=null,this.g="",this.h=!1}var $t={},Yn={};function Bt(u,m,_){u.L=1,u.v=Ms(On(m)),u.m=_,u.P=!0,Nn(u,null)}function Nn(u,m){u.F=Date.now(),$i(u),u.A=On(u.v);var _=u.A,b=u.R;Array.isArray(b)||(b=[String(b)]),zo(_.i,"t",b),u.C=0,_=u.j.J,u.h=new ht,u.g=Ou(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Vo(x(u.Y,u,u.g),u.O)),m=u.U,_=u.g,b=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Yi[0]=U.toString()),U=Yi);for(var H=0;H<U.length;H++){var te=ws(_,U[H],b||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),xe(),pn(u.i,u.u,u.A,u.l,u.R,u.m)}on.prototype.ca=function(u){u=u.target;const m=this.M;m&&ei(u)==3?m.j():this.Y(u)},on.prototype.Y=function(u){try{if(u==this.g)e:{const Ut=ei(this.g);var m=this.g.Ba();const rr=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Su(this.g)))){this.J||Ut!=4||m==7||(m==8||0>=rr?xe(3):xe(2)),Si(this);var _=this.g.Z();this.X=_;t:if(ga(this)){var b=Su(this.g);u="";var U=b.length,H=ei(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),$n(this);var te="";break t}this.h.i=new p.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(b[m],{stream:!(H&&m==U-1)});b.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Mo(this.i,this.u,this.A,this.l,this.R,Ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,kt=this.g;if((Be=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(Be)){var He=Be;break t}}He=null}if(_=He)ci(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tt(this,_);else{this.o=!1,this.s=3,Ne(12),At(this),$n(this);break e}}if(this.P){_=!0;let Zt;for(;!this.J&&this.C<te.length;)if(Zt=Xn(this,te),Zt==Yn){Ut==4&&(this.s=4,Ne(14),_=!1),ci(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==$t){this.s=4,Ne(15),ci(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else ci(this.i,this.l,Zt,null),tt(this,Zt);if(ga(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||te.length!=0||this.h.h||(this.s=1,Ne(16),_=!1),this.o=this.o&&_,!_)ci(this.i,this.l,te,"[Invalid Chunked Response]"),At(this),$n(this);else if(0<te.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Bs(Ft),Ft.M=!0,Ne(11))}}else ci(this.i,this.l,te,null),tt(this,te);Ut==4&&At(this),this.o&&!this.J&&(Ut==4?xu(this.j,this):(this.o=!1,$i(this)))}else Kh(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),At(this),$n(this)}}}catch{}finally{}};function ga(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Xn(u,m){var _=u.C,b=m.indexOf(`
`,_);return b==-1?Yn:(_=Number(m.substring(_,b)),isNaN(_)?$t:(b+=1,b+_>m.length?Yn:(m=m.slice(b,b+_),u.C=b+_,m)))}on.prototype.cancel=function(){this.J=!0,At(this)};function $i(u){u.S=Date.now()+u.I,Ai(u,u.I)}function Ai(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ke(x(u.ba,u),m)}function Si(u){u.B&&(p.clearTimeout(u.B),u.B=null)}on.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ds(this.i,this.A),this.L!=2&&(xe(),Ne(17)),At(this),this.s=2,$n(this)):Ai(this,this.S-u)};function $n(u){u.j.G==0||u.J||xu(u.j,u)}function At(u){Si(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Ei(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function tt(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Po(_.h,u))){if(!u.K&&Po(_.h,u)&&_.G==3){try{var b=_.Da.g.parse(m)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ca(_),Ra(_);else break e;Go(_),Ne(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Ke(x(_.Za,_),6e3));if(1>=_a(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ir(_,11)}else if((u.K||_.g==u)&&Ca(_),!ye(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let He=U[m];if(_.T=He[0],He=He[1],_.G==2)if(He[0]=="c"){_.K=He[1],_.ia=He[2];const Ft=He[3];Ft!=null&&(_.la=Ft,_.j.info("VER="+_.la));const Ut=He[4];Ut!=null&&(_.Aa=Ut,_.j.info("SVER="+_.Aa));const rr=He[5];rr!=null&&typeof rr=="number"&&0<rr&&(b=1.5*rr,_.L=b,_.j.info("backChannelRequestTimeoutMs_="+b)),b=_;const Zt=u.g;if(Zt){const Di=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var H=b.h;H.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(va(H,H.h),H.h=null))}if(b.D){const Ko=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ko&&(b.ya=Ko,nt(b.I,b.D,Ko))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),b=_;var te=u;if(b.qa=Du(b,b.J?b.ia:null,b.W),te.K){yn(b.h,te);var Be=te,kt=b.L;kt&&(Be.I=kt),Be.B&&(Si(Be),$i(Be)),b.g=te}else Iu(b);0<_.i.length&&Ia(_)}else He[0]!="stop"&&He[0]!="close"||ir(_,7);else _.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?ir(_,7):Ho(_):He[0]!="noop"&&_.l&&_.l.ta(He),_.v=0)}}xe(4)}catch{}}var Dn=class{constructor(u,m){this.g=u,this.map=m}};function Zi(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ya(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function _a(u){return u.h?1:u.g?u.g.size:0}function Po(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function va(u,m){u.g?u.g.add(m):u.h=m}function yn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Zi.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ko(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return se(u.i)}function Hh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var m=[],_=u.length,b=0;b<_;b++)m.push(u[b]);return m}m=[],_=0;for(b in u)m[_++]=u[b];return m}function Ea(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const b in u)m[_++]=b;return m}}}function Uo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ea(u),b=Hh(u),U=b.length,H=0;H<U;H++)m.call(void 0,b[H],_&&_[H],u)}var Os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var b=u[_].indexOf("="),U=null;if(0<=b){var H=u[_].substring(0,b);U=u[_].substring(b+1)}else H=u[_];m(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Nt(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Nt){this.h=u.h,Vs(this,u.j),this.o=u.o,this.g=u.g,Vr(this,u.s),this.l=u.l;var m=u.i,_=new Wi;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ji(this,_),this.m=u.m}else u&&(m=String(u).match(Os))?(this.h=!1,Vs(this,m[1]||"",!0),this.o=Zn(m[2]||""),this.g=Zn(m[3]||"",!0),Vr(this,m[4]),this.l=Zn(m[5]||"",!0),Ji(this,m[6]||"",!0),this.m=Zn(m[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}Nt.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Ps(m,Lo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ps(m,Lo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ps(_,_.charAt(0)=="/"?Gh:jo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ps(_,Ta)),u.join("")};function On(u){return new Nt(u)}function Vs(u,m,_){u.j=_?Zn(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Vr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Ji(u,m,_){m instanceof Wi?(u.i=m,bu(u.i,u.h)):(_||(m=Ps(m,Qh)),u.i=new Wi(m,u.h))}function nt(u,m,_){u.i.set(m,_)}function Ms(u){return nt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Zn(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ps(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Tu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Tu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Lo=/[#\/\?@]/g,jo=/[#\?:]/g,Gh=/[#\?]/g,Qh=/[#\?@]/g,Ta=/#/g;function Wi(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Jn(u){u.g||(u.g=new Map,u.h=0,u.i&&Fh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Wi.prototype,r.add=function(u,m){Jn(this),this.i=null,u=wi(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function er(u,m){Jn(u),m=wi(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function tr(u,m){return Jn(u),m=wi(u,m),u.g.has(m)}r.forEach=function(u,m){Jn(this),this.g.forEach(function(_,b){_.forEach(function(U){u.call(m,U,b,this)},this)},this)},r.na=function(){Jn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let b=0;b<m.length;b++){const U=u[b];for(let H=0;H<U.length;H++)_.push(m[b])}return _},r.V=function(u){Jn(this);let m=[];if(typeof u=="string")tr(this,u)&&(m=m.concat(this.g.get(wi(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return Jn(this),this.i=null,u=wi(this,u),tr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function zo(u,m,_){er(u,m),0<_.length&&(u.i=null,u.g.set(wi(u,m),se(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var b=m[_];const H=encodeURIComponent(String(b)),te=this.V(b);for(b=0;b<te.length;b++){var U=H;te[b]!==""&&(U+="="+encodeURIComponent(String(te[b]))),u.push(U)}}return this.i=u.join("&")};function wi(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function bu(u,m){m&&!u.j&&(Jn(u),u.i=null,u.g.forEach(function(_,b){var U=b.toLowerCase();b!=U&&(er(this,b),zo(this,U,_))},u)),u.j=m}function ks(u,m){const _=new ct;if(p.Image){const b=new Image;b.onload=F(Wn,_,"TestLoadImage: loaded",!0,m,b),b.onerror=F(Wn,_,"TestLoadImage: error",!1,m,b),b.onabort=F(Wn,_,"TestLoadImage: abort",!1,m,b),b.ontimeout=F(Wn,_,"TestLoadImage: timeout",!1,m,b),p.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=u}else m(!1)}function hi(u,m){const _=new ct,b=new AbortController,U=setTimeout(()=>{b.abort(),Wn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:b.signal}).then(H=>{clearTimeout(U),H.ok?Wn(_,"TestPingServer: ok",!0,m):Wn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Wn(_,"TestPingServer: error",!1,m)})}function Wn(u,m,_,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(_)}catch{}}function Us(){this.g=new Xi}function Ri(u,m,_){const b=_||"";try{Uo(u,function(U,H){let te=U;y(U)&&(te=Cn(U)),m.push(b+H+"="+encodeURIComponent(te))})}catch(U){throw m.push(b+"type="+encodeURIComponent("_badmap")),U}}function Mr(u){this.l=u.Ub||null,this.j=u.eb||!1}J(Mr,Is),Mr.prototype.g=function(){return new nr(this.l,this.j)},Mr.prototype.i=(function(u){return function(){return u}})({});function nr(u,m){mt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}J(nr,mt),r=nr.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ci(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Ii(this):Ci(this),this.readyState==3&&qo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Ii(this))},r.Qa=function(u){this.g&&(this.response=u,Ii(this))},r.ga=function(){this.g&&Ii(this)};function Ii(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ci(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ci(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Bo(u){let m="";return oe(u,function(_,b){m+=b,m+=":",m+=_,m+=`\r
`}),m}function Ht(u,m,_){e:{for(b in _){var b=!1;break e}b=!0}b||(_=Bo(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):nt(u,m,_))}function Je(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}J(Je,mt);var ba=/^https?$/i,Ls=["POST","PUT"];r=Je.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?Cs(this.o):Cs(xn),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){Au(this,H);return}if(u=_||"",_=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)_.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())_.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),U=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ls,m,void 0))||b||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of _)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Au(this,H)}};function Au(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Aa(u),xi(u)}function Aa(u){u.A||(u.A=!0,$e(u,"complete"),$e(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,$e(this,"complete"),$e(this,"abort"),xi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),Je.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Sa(this):this.bb())},r.bb=function(){Sa(this)};function Sa(u){if(u.h&&typeof d<"u"&&(!u.v[1]||ei(u)!=4||u.Z()!=2)){if(u.u&&ei(u)==4)qt(u.Ea,0,u);else if($e(u,"readystatechange"),ei(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var b;if(b=te===0){var U=String(u.D).match(Os)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),b=!ba.test(U?U.toLowerCase():"")}_=b}if(_)$e(u,"complete"),$e(u,"success");else{u.m=6;try{var H=2<ei(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Aa(u)}}finally{xi(u)}}}}function xi(u,m){if(u.g){js(u);const _=u.g,b=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||$e(u,"ready");try{_.onreadystatechange=b}catch{}}}function js(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function ei(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<ei(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ti(m)}};function Su(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Kh(u){const m={};u=(u.g&&2<=ei(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<u.length;b++){if(ye(u[b]))continue;var _=M(u[b]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[U]||[];m[U]=H,H.push(_)}V(m,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function wa(u){this.Aa=0,this.i=[],this.j=new ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,u),this.cb=zs("retryDelaySeedMs",1e4,u),this.Wa=zs("forwardChannelMaxRetries",2,u),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(u&&u.concurrentRequestLimit),this.Da=new Us,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=wa.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,b){Ne(0),this.W=u,this.H=m||{},_&&b!==void 0&&(this.H.OSID=_,this.H.OAID=b),this.F=this.X,this.I=Du(this,null,this.W),Ia(this)};function Ho(u){if(wu(u),u.G==3){var m=u.U++,_=On(u.I);if(nt(_,"SID",u.K),nt(_,"RID",m),nt(_,"TYPE","terminate"),qs(u,_),m=new on(u,u.j,m),m.L=2,m.v=Ms(On(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=m.v,_=!0),_||(m.g=Ou(m.j,null),m.g.ea(m.v)),m.F=Date.now(),$i(m)}Nu(u)}function Ra(u){u.g&&(Bs(u),u.g.cancel(),u.g=null)}function wu(u){Ra(u),u.u&&(p.clearTimeout(u.u),u.u=null),Ca(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Ia(u){if(!ya(u.h)&&!u.s){u.s=!0;var m=u.Ga;ie||N(),ce||(ie(),ce=!0),ke.add(m,u),u.B=0}}function Yh(u,m){return _a(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ke(x(u.Ga,u,m),Qo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new on(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),O(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var b=this.i[_];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(m+=b,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Ru(this,U,m),_=On(this.I),nt(_,"RID",u),nt(_,"CVER",22),this.D&&nt(_,"X-HTTP-Session-Id",this.D),qs(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Bo(H)))+"&"+m:this.m&&Ht(_,this.m,H)),va(this.h,U),this.Ua&&nt(_,"TYPE","init"),this.P?(nt(_,"$req",m),nt(_,"SID","null"),U.T=!0,Bt(U,_,null)):Bt(U,_,m),this.G=2}}else this.G==3&&(u?Fo(this,u):this.i.length==0||ya(this.h)||Fo(this))};function Fo(u,m){var _;m?_=m.l:_=u.U++;const b=On(u.I);nt(b,"SID",u.K),nt(b,"RID",_),nt(b,"AID",u.T),qs(u,b),u.m&&u.o&&Ht(b,u.m,u.o),_=new on(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Ru(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),va(u.h,_),Bt(_,b,m)}function qs(u,m){u.H&&oe(u.H,function(_,b){nt(m,b,_)}),u.l&&Uo({},function(_,b){nt(m,b,_)})}function Ru(u,m,_){_=Math.min(u.i.length,_);var b=u.l?x(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const te=["count="+_];H==-1?0<_?(H=U[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let Be=!0;for(let kt=0;kt<_;kt++){let He=U[kt].g;const Ft=U[kt].map;if(He-=H,0>He)H=Math.max(0,U[kt].g-100),Be=!1;else try{Ri(Ft,te,"req"+He+"_")}catch{b&&b(Ft)}}if(Be){b=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,b}function Iu(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ie||N(),ce||(ie(),ce=!0),ke.add(m,u),u.v=0}}function Go(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ke(x(u.Fa,u),Qo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ke(x(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Ra(this),Cu(this))};function Bs(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Cu(u){u.g=new on(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=On(u.qa);nt(m,"RID","rpc"),nt(m,"SID",u.K),nt(m,"AID",u.T),nt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&nt(m,"TO",u.ja),nt(m,"TYPE","xmlhttp"),qs(u,m),u.m&&u.o&&Ht(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Ms(On(m)),_.m=null,_.P=!0,Nn(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Ra(this),Go(this),Ne(19))};function Ca(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function xu(u,m){var _=null;if(u.g==m){Ca(u),Bs(u),u.g=null;var b=2}else if(Po(u.h,m))_=m.D,yn(u.h,m),b=1;else return;if(u.G!=0){if(m.o)if(b==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;b=ne(),$e(b,new ot(b,_)),Ia(u)}else Iu(u);else if(U=m.s,U==3||U==0&&0<m.X||!(b==1&&Yh(u,m)||b==2&&Go(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:ir(u,5);break;case 4:ir(u,10);break;case 3:ir(u,6);break;default:ir(u,2)}}}function Qo(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function ir(u,m){if(u.j.info("Error code "+m),m==2){var _=x(u.fb,u),b=u.Xa;const U=!b;b=new Nt(b||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Vs(b,"https"),Ms(b),U?ks(b.toString(),_):hi(b.toString(),_)}else Ne(2);u.G=0,u.l&&u.l.sa(m),Nu(u),wu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Nu(u){if(u.G=0,u.ka=[],u.l){const m=ko(u.h);(m.length!=0||u.i.length!=0)&&(W(u.ka,m),W(u.ka,u.i),u.h.i.length=0,se(u.i),u.i.length=0),u.l.ra()}}function Du(u,m,_){var b=_ instanceof Nt?On(_):new Nt(_);if(b.g!="")m&&(b.g=m+"."+b.g),Vr(b,b.s);else{var U=p.location;b=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var H=new Nt(null);b&&Vs(H,b),m&&(H.g=m),U&&Vr(H,U),_&&(H.l=_),b=H}return _=u.D,m=u.ya,_&&m&&nt(b,_,m),nt(b,"VER",u.la),qs(u,b),b}function Ou(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Je(new Mr({eb:_})):new Je(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vu(){}r=Vu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function xa(){}xa.prototype.g=function(u,m){return new _n(u,m)};function _n(u,m){mt.call(this),this.g=new wa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ye(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ye(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Ni(this)}J(_n,mt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Ho(this.g)},_n.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Cn(u),u=_);m.i.push(new Dn(m.Ya++,u)),m.G==3&&Ia(m)},_n.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,_n.aa.N.call(this)};function Mu(u){ui.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}J(Mu,ui);function Pu(){Ns.call(this),this.status=1}J(Pu,Ns);function Ni(u){this.g=u}J(Ni,Vu),Ni.prototype.ua=function(){$e(this.g,"a")},Ni.prototype.ta=function(u){$e(this.g,new Mu(u))},Ni.prototype.sa=function(u){$e(this.g,new Pu)},Ni.prototype.ra=function(){$e(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,SE=function(){return new xa},AE=function(){return ne()},bE=Gn,dm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Yc=bi,Kn.COMPLETE="complete",TE=Kn,xs.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ll=xs,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,EE=Je}).apply(typeof Uc<"u"?Uc:typeof self<"u"?self:typeof window<"u"?window:{});const Av="@firebase/firestore",Sv="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}hn.UNAUTHENTICATED=new hn(null),hn.GOOGLE_CREDENTIALS=new hn("google-credentials-uid"),hn.FIRST_PARTY=new hn("first-party-uid"),hn.MOCK_USER=new hn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Om("@firebase/firestore");function ro(){return ua.logLevel}function le(r,...e){if(ua.logLevel<=Ue.DEBUG){const n=e.map(Hm);ua.debug(`Firestore (${Ro}): ${r}`,...n)}}function wr(r,...e){if(ua.logLevel<=Ue.ERROR){const n=e.map(Hm);ua.error(`Firestore (${Ro}): ${r}`,...n)}}function yo(r,...e){if(ua.logLevel<=Ue.WARN){const n=e.map(Hm);ua.warn(`Firestore (${Ro}): ${r}`,...n)}}function Hm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,wE(r,s,n)}function wE(r,e,n){let s=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw wr(s),new Error(s)}function Qe(r,e,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||wE(e,l,s)}function we(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(hn.UNAUTHENTICATED)))}shutdown(){}}class UR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class LR{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qe(this.o===void 0,42304);let s=this.i;const l=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let c=new br;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new br,e.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const g=c;e.enqueueRetryable((async()=>{await g.promise,await l(this.currentUser)}))},p=g=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new br)}}),0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new RE(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new hn(e)}}class jR{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new jR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(hn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,li(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qe(this.o===void 0,3512);const s=c=>{c.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,le("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const l=c=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new wv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=BR(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<n&&(s+=e.charAt(l[c]%62))}return s}}function Le(r,e){return r<e?-1:r>e?1:0}function mm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const l=r.charAt(s),c=e.charAt(s);if(l!==c)return Wd(l)===Wd(c)?Le(l,c):Wd(l)?1:-1}return Le(r.length,e.length)}const HR=55296,FR=57343;function Wd(r){const e=r.charCodeAt(0);return e>=HR&&e<=FR}function _o(r,e,n){return r.length===e.length&&r.every(((s,l)=>n(s,e[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="__name__";class Li{constructor(e,n,s){n===void 0?n=0:n>e.length&&pe(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&pe(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Li?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let l=0;l<s;l++){const c=Li.compareSegments(e.get(l),n.get(l));if(c!==0)return c}return Le(e.length,n.length)}static compareSegments(e,n){const s=Li.isNumericId(e),l=Li.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?Li.extractNumericId(e).compare(Li.extractNumericId(n)):mm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hs.fromString(e.substring(4,e.length-2))}}class at extends Li{construct(e,n,s){return new at(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((l=>l.length>0)))}return new at(n)}static emptyPath(){return new at([])}}const GR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Li{construct(e,n,s){return new nn(e,n,s)}static isValidIdentifier(e){return GR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rv}static keyField(){return new nn([Rv])}static fromServerFormat(e){const n=[];let s="",l=0;const c=()=>{if(s.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new ae(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ae(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(s+=p,l++):(c(),l++)}if(c(),d)throw new ae(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(n)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(at.fromString(e))}static fromName(e){return new de(at.fromString(e).popFirst(5))}static empty(){return new de(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return at.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new at(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(r,e,n){if(!n)throw new ae(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function QR(r,e,n,s){if(e===!0&&s===!0)throw new ae(K.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Iv(r){if(!de.isDocumentKey(r))throw new ae(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cv(r){if(de.isDocumentKey(r))throw new ae(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function CE(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function wh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":pe(12329,{type:typeof r})}function Bn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ae(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wh(r);throw new ae(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(r,e){const n={typeString:r};return e&&(n.value=e),n}function hu(r,e){if(!CE(r))throw new ae(K.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const l=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const d=r[s];if(l&&typeof d!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ae(K.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=-62135596800,Nv=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Nv);return new ft(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xv)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nv}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hu(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:Pt("string",ft._jsonSchemaVersion),seconds:Pt("number"),nanoseconds:Pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ft(0,0))}static max(){return new ve(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=-1;function KR(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=ve.fromTimestamp(s===1e9?new ft(n+1,0):new ft(n,s));return new ps(l,de.empty(),e)}function YR(r){return new ps(r.readTime,r.key,Jl)}class ps{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ps(ve.min(),de.empty(),Jl)}static max(){return new ps(ve.max(),de.empty(),Jl)}}function XR(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(r.documentKey,e.documentKey),n!==0?n:Le(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==$R)throw r;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,l)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,s)=>{n(e)}))}static reject(e){return new $(((n,s)=>{s(e)}))}static waitFor(e){return new $(((n,s)=>{let l=0,c=0,d=!1;e.forEach((p=>{++l,p.next((()=>{++c,d&&c===l&&n()}),(g=>s(g)))})),d=!0,c===l&&n()}))}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next((l=>l?$.resolve(l):s()));return n}static forEach(e,n){const s=[];return e.forEach(((l,c)=>{s.push(n.call(this,l,c))})),this.waitFor(s)}static mapArray(e,n){return new $(((s,l)=>{const c=e.length,d=new Array(c);let p=0;for(let g=0;g<c;g++){const y=g;n(e[y]).next((T=>{d[y]=T,++p,p===c&&s(d)}),(T=>l(T)))}}))}static doWhile(e,n){return new $(((s,l)=>{const c=()=>{e()===!0?n().next((()=>{c()}),l):s()};c()}))}}function JR(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Co(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Rh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=-1;function fu(r){return r==null}function lh(r){return r===0&&1/r==-1/0}function WR(r){return typeof r=="number"&&Number.isInteger(r)&&!lh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="";function eI(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Dv(e)),e=tI(r.get(n),e);return Dv(e)}function tI(r,e){let n=e;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":n+="";break;case xE:n+="";break;default:n+=c}}return n}function Dv(r){return r+xE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function As(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function NE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.comparator=e,this.root=n||tn.EMPTY}insert(e,n){return new _t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(e,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}}class Lc{constructor(e,n,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&l&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??tn.RED,this.left=l??tn.EMPTY,this.right=c??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,l,c){return new tn(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,l=this;if(n(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(e,l.key)===0){if(l.right.isEmpty())return tn.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,n,s,l,c){return this}insert(e,n,s){return new tn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,e[1])>=0)return;n(l.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vv(this.data.getIterator())}getIteratorFrom(e){return new Vv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new zt(this.comparator);return n.data=e,n}}class Vv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new qn([])}unionWith(e){let n=new zt(nn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new DE("Invalid base64 string: "+c):c}})(e);return new sn(n)}static fromUint8Array(e){const n=(function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c})(e);return new sn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const nI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gs(r){if(Qe(!!r,39018),typeof r=="string"){let e=0;const n=nI.exec(r);if(Qe(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),e=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(r.seconds),nanos:It(r.nanos)}}function It(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ys(r){return typeof r=="string"?sn.fromBase64String(r):sn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="server_timestamp",VE="__type__",ME="__previous_value__",PE="__local_write_time__";function Qm(r){return(r?.mapValue?.fields||{})[VE]?.stringValue===OE}function Ih(r){const e=r.mapValue.fields[ME];return Qm(e)?Ih(e):e}function Wl(r){const e=gs(r.mapValue.fields[PE].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,s,l,c,d,p,g,y,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const uh="(default)";class eu{constructor(e,n){this.projectId=e,this.database=n||uh}static empty(){return new eu("","")}get isDefaultDatabase(){return this.database===uh}isEqual(e){return e instanceof eu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="__type__",rI="__max__",jc={mapValue:{}},UE="__vector__",ch="value";function _s(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Qm(r)?4:aI(r)?9007199254740991:sI(r)?10:11:pe(28295,{value:r})}function Fi(r,e){if(r===e)return!0;const n=_s(r);if(n!==_s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wl(r).isEqual(Wl(e));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=gs(l.timestampValue),p=gs(c.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(l,c){return ys(l.bytesValue).isEqual(ys(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(l,c){return It(l.geoPointValue.latitude)===It(c.geoPointValue.latitude)&&It(l.geoPointValue.longitude)===It(c.geoPointValue.longitude)})(r,e);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return It(l.integerValue)===It(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=It(l.doubleValue),p=It(c.doubleValue);return d===p?lh(d)===lh(p):isNaN(d)&&isNaN(p)}return!1})(r,e);case 9:return _o(r.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:case 11:return(function(l,c){const d=l.mapValue.fields||{},p=c.mapValue.fields||{};if(Ov(d)!==Ov(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!Fi(d[g],p[g])))return!1;return!0})(r,e);default:return pe(52216,{left:r})}}function tu(r,e){return(r.values||[]).find((n=>Fi(n,e)))!==void 0}function vo(r,e){if(r===e)return 0;const n=_s(r),s=_s(e);if(n!==s)return Le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(r.booleanValue,e.booleanValue);case 2:return(function(c,d){const p=It(c.integerValue||c.doubleValue),g=It(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return Mv(r.timestampValue,e.timestampValue);case 4:return Mv(Wl(r),Wl(e));case 5:return mm(r.stringValue,e.stringValue);case 6:return(function(c,d){const p=ys(c),g=ys(d);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(c,d){const p=c.split("/"),g=d.split("/");for(let y=0;y<p.length&&y<g.length;y++){const T=Le(p[y],g[y]);if(T!==0)return T}return Le(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,d){const p=Le(It(c.latitude),It(d.latitude));return p!==0?p:Le(It(c.longitude),It(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Pv(r.arrayValue,e.arrayValue);case 10:return(function(c,d){const p=c.fields||{},g=d.fields||{},y=p[ch]?.arrayValue,T=g[ch]?.arrayValue,C=Le(y?.values?.length||0,T?.values?.length||0);return C!==0?C:Pv(y,T)})(r.mapValue,e.mapValue);case 11:return(function(c,d){if(c===jc.mapValue&&d===jc.mapValue)return 0;if(c===jc.mapValue)return 1;if(d===jc.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),y=d.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let C=0;C<g.length&&C<T.length;++C){const x=mm(g[C],T[C]);if(x!==0)return x;const F=vo(p[g[C]],y[T[C]]);if(F!==0)return F}return Le(g.length,T.length)})(r.mapValue,e.mapValue);default:throw pe(23264,{he:n})}}function Mv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Le(r,e);const n=gs(r),s=gs(e),l=Le(n.seconds,s.seconds);return l!==0?l:Le(n.nanos,s.nanos)}function Pv(r,e){const n=r.values||[],s=e.values||[];for(let l=0;l<n.length&&l<s.length;++l){const c=vo(n[l],s[l]);if(c)return c}return Le(n.length,s.length)}function Eo(r){return pm(r)}function pm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=gs(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return ys(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return de.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",l=!0;for(const c of n.values||[])l?l=!1:s+=",",s+=pm(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const d of s)c?c=!1:l+=",",l+=`${d}:${pm(n.fields[d])}`;return l+"}"})(r.mapValue):pe(61005,{value:r})}function Xc(r){switch(_s(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ih(r);return e?16+Xc(e):16;case 5:return 2*r.stringValue.length;case 6:return ys(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((l,c)=>l+Xc(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let l=0;return As(s.fields,((c,d)=>{l+=c.length+Xc(d)})),l})(r.mapValue);default:throw pe(13486,{value:r})}}function kv(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function gm(r){return!!r&&"integerValue"in r}function Km(r){return!!r&&"arrayValue"in r}function Uv(r){return!!r&&"nullValue"in r}function Lv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $c(r){return!!r&&"mapValue"in r}function sI(r){return(r?.mapValue?.fields||{})[kE]?.stringValue===UE}function Fl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return As(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Fl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fl(r.arrayValue.values[n]);return e}return{...r}}function aI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===rI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!$c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fl(n)}setAll(e){let n=nn.emptyPath(),s={},l=[];e.forEach(((d,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,l),s={},l=[],n=p.popLast()}d?s[p.lastSegment()]=Fl(d):l.push(p.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,l)}delete(e){const n=this.field(e.popLast());$c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let l=n.mapValue.fields[e.get(s)];$c(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(e,n,s){As(n,((l,c)=>e[l]=c));for(const l of s)delete e[l]}clone(){return new En(Fl(this.value))}}function LE(r){const e=[];return As(r.fields,((n,s)=>{const l=new nn([n]);if($c(s)){const c=LE(s.mapValue).fields;if(c.length===0)e.push(l);else for(const d of c)e.push(l.child(d))}else e.push(l)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s,l,c,d,p){this.key=e,this.documentType=n,this.version=s,this.readTime=l,this.createTime=c,this.data=d,this.documentState=p}static newInvalidDocument(e){return new Xt(e,0,ve.min(),ve.min(),ve.min(),En.empty(),0)}static newFoundDocument(e,n,s,l){return new Xt(e,1,n,ve.min(),s,l,0)}static newNoDocument(e,n){return new Xt(e,2,n,ve.min(),ve.min(),En.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,ve.min(),ve.min(),En.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.position=e,this.inclusive=n}}function jv(r,e,n){let s=0;for(let l=0;l<r.position.length;l++){const c=e[l],d=r.position[l];if(c.field.isKeyField()?s=de.comparator(de.fromName(d.referenceValue),n.key):s=vo(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function zv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Fi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n="asc"){this.field=e,this.dir=n}}function oI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{}class Mt extends jE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new uI(e,n,s):n==="array-contains"?new fI(e,s):n==="in"?new dI(e,s):n==="not-in"?new mI(e,s):n==="array-contains-any"?new pI(e,s):new Mt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new cI(e,s):new hI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vo(n,this.value)):n!==null&&_s(this.value)===_s(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends jE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yi(e,n)}matches(e){return zE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zE(r){return r.op==="and"}function qE(r){return lI(r)&&zE(r)}function lI(r){for(const e of r.filters)if(e instanceof yi)return!1;return!0}function ym(r){if(r instanceof Mt)return r.field.canonicalString()+r.op.toString()+Eo(r.value);if(qE(r))return r.filters.map((e=>ym(e))).join(",");{const e=r.filters.map((n=>ym(n))).join(",");return`${r.op}(${e})`}}function BE(r,e){return r instanceof Mt?(function(s,l){return l instanceof Mt&&s.op===l.op&&s.field.isEqual(l.field)&&Fi(s.value,l.value)})(r,e):r instanceof yi?(function(s,l){return l instanceof yi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((c,d,p)=>c&&BE(d,l.filters[p])),!0):!1})(r,e):void pe(19439)}function HE(r){return r instanceof Mt?(function(n){return`${n.field.canonicalString()} ${n.op} ${Eo(n.value)}`})(r):r instanceof yi?(function(n){return n.op.toString()+" {"+n.getFilters().map(HE).join(" ,")+"}"})(r):"Filter"}class uI extends Mt{constructor(e,n,s){super(e,n,s),this.key=de.fromName(s.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class cI extends Mt{constructor(e,n){super(e,"in",n),this.keys=FE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class hI extends Mt{constructor(e,n){super(e,"not-in",n),this.keys=FE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function FE(r,e){return(e.arrayValue?.values||[]).map((n=>de.fromName(n.referenceValue)))}class fI extends Mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Km(n)&&tu(n.arrayValue,this.value)}}class dI extends Mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tu(this.value.arrayValue,n)}}class mI extends Mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!tu(this.value.arrayValue,n)}}class pI extends Mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Km(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>tu(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n=null,s=[],l=[],c=null,d=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=d,this.endAt=p,this.Te=null}}function qv(r,e=null,n=[],s=[],l=null,c=null,d=null){return new gI(r,e,n,s,l,c,d)}function Ym(r){const e=we(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>ym(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Eo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Eo(s))).join(",")),e.Te=n}return e.Te}function Xm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!oI(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!BE(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!zv(r.startAt,e.startAt)&&zv(r.endAt,e.endAt)}function _m(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n=null,s=[],l=[],c=null,d="F",p=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=d,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function yI(r,e,n,s,l,c,d,p){return new du(r,e,n,s,l,c,d,p)}function Ch(r){return new du(r)}function Bv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function GE(r){return r.collectionGroup!==null}function Gl(r){const e=we(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new zt(nn.comparator);return d.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new fh(c,s))})),n.has(nn.keyField().canonicalString())||e.Ie.push(new fh(nn.keyField(),s))}return e.Ie}function qi(r){const e=we(r);return e.Ee||(e.Ee=_I(e,Gl(r))),e.Ee}function _I(r,e){if(r.limitType==="F")return qv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new fh(l.field,c)}));const n=r.endAt?new hh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new hh(r.startAt.position,r.startAt.inclusive):null;return qv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function vm(r,e){const n=r.filters.concat([e]);return new du(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Em(r,e,n){return new du(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function xh(r,e){return Xm(qi(r),qi(e))&&r.limitType===e.limitType}function QE(r){return`${Ym(qi(r))}|lt:${r.limitType}`}function so(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((l=>HE(l))).join(", ")}]`),fu(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((l=>Eo(l))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((l=>Eo(l))).join(",")),`Target(${s})`})(qi(r))}; limitType=${r.limitType})`}function Nh(r,e){return e.isFoundDocument()&&(function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):de.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,l){for(const c of Gl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0})(r,e)&&(function(s,l){return!(s.startAt&&!(function(d,p,g){const y=jv(d,p,g);return d.inclusive?y<=0:y<0})(s.startAt,Gl(s),l)||s.endAt&&!(function(d,p,g){const y=jv(d,p,g);return d.inclusive?y>=0:y>0})(s.endAt,Gl(s),l))})(r,e)}function vI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function KE(r){return(e,n)=>{let s=!1;for(const l of Gl(r)){const c=EI(l,e,n);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function EI(r,e,n){const s=r.field.isKeyField()?de.comparator(e.key,n.key):(function(c,d,p){const g=d.data.field(c),y=p.data.field(c);return g!==null&&y!==null?vo(g,y):pe(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),l=this.inner[s];if(l===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],e))return void(l[c]=[e,n]);l.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,((n,s)=>{for(const[l,c]of s)e(l,c)}))}isEmpty(){return NE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new _t(de.comparator);function Rr(){return TI}const YE=new _t(de.comparator);function jl(...r){let e=YE;for(const n of r)e=e.insert(n.key,n);return e}function XE(r){let e=YE;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function sa(){return Ql()}function $E(){return Ql()}function Ql(){return new fa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const bI=new _t(de.comparator),AI=new zt(de.comparator);function je(...r){let e=AI;for(const n of r)e=e.add(n);return e}const SI=new zt(Le);function wI(){return SI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lh(e)?"-0":e}}function ZE(r){return{integerValue:""+r}}function RI(r,e){return WR(e)?ZE(e):$m(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this._=void 0}}function II(r,e,n){return r instanceof nu?(function(l,c){const d={fields:{[VE]:{stringValue:OE},[PE]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Qm(c)&&(c=Ih(c)),c&&(d.fields[ME]=c),{mapValue:d}})(n,e):r instanceof iu?WE(r,e):r instanceof ru?eT(r,e):(function(l,c){const d=JE(l,c),p=Hv(d)+Hv(l.Ae);return gm(d)&&gm(l.Ae)?ZE(p):$m(l.serializer,p)})(r,e)}function CI(r,e,n){return r instanceof iu?WE(r,e):r instanceof ru?eT(r,e):n}function JE(r,e){return r instanceof dh?(function(s){return gm(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class nu extends Dh{}class iu extends Dh{constructor(e){super(),this.elements=e}}function WE(r,e){const n=tT(e);for(const s of r.elements)n.some((l=>Fi(l,s)))||n.push(s);return{arrayValue:{values:n}}}class ru extends Dh{constructor(e){super(),this.elements=e}}function eT(r,e){let n=tT(e);for(const s of r.elements)n=n.filter((l=>!Fi(l,s)));return{arrayValue:{values:n}}}class dh extends Dh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Hv(r){return It(r.integerValue||r.doubleValue)}function tT(r){return Km(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.field=e,this.transform=n}}function NI(r,e){return r.field.isEqual(e.field)&&(function(s,l){return s instanceof iu&&l instanceof iu||s instanceof ru&&l instanceof ru?_o(s.elements,l.elements,Fi):s instanceof dh&&l instanceof dh?Fi(s.Ae,l.Ae):s instanceof nu&&l instanceof nu})(r.transform,e.transform)}class DI{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Oh{}function nT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Vh(r.key,rn.none()):new mu(r.key,r.data,rn.none());{const n=r.data,s=En.empty();let l=new zt(nn.comparator);for(let c of e.fields)if(!l.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),l=l.add(c)}return new Ss(r.key,s,new qn(l.toArray()),rn.none())}}function OI(r,e,n){r instanceof mu?(function(l,c,d){const p=l.value.clone(),g=Gv(l.fieldTransforms,c,d.transformResults);p.setAll(g),c.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(r,e,n):r instanceof Ss?(function(l,c,d){if(!Zc(l.precondition,c))return void c.convertToUnknownDocument(d.version);const p=Gv(l.fieldTransforms,c,d.transformResults),g=c.data;g.setAll(iT(l)),g.setAll(p),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,e,n):(function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,n)}function Kl(r,e,n,s){return r instanceof mu?(function(c,d,p,g){if(!Zc(c.precondition,d))return p;const y=c.value.clone(),T=Qv(c.fieldTransforms,g,d);return y.setAll(T),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof Ss?(function(c,d,p,g){if(!Zc(c.precondition,d))return p;const y=Qv(c.fieldTransforms,g,d),T=d.data;return T.setAll(iT(c)),T.setAll(y),d.convertToFoundDocument(d.version,T).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((C=>C.field)))})(r,e,n,s):(function(c,d,p){return Zc(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(r,e,n)}function VI(r,e){let n=null;for(const s of r.fieldTransforms){const l=e.data.field(s.field),c=JE(s.transform,l||null);c!=null&&(n===null&&(n=En.empty()),n.set(s.field,c))}return n||null}function Fv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&_o(s,l,((c,d)=>NI(c,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class mu extends Oh{constructor(e,n,s,l=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Ss extends Oh{constructor(e,n,s,l,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function iT(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function Gv(r,e,n){const s=new Map;Qe(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let l=0;l<n.length;l++){const c=r[l],d=c.transform,p=e.data.field(c.field);s.set(c.field,CI(d,p,n[l]))}return s}function Qv(r,e,n){const s=new Map;for(const l of r){const c=l.transform,d=n.data.field(l.field);s.set(l.field,II(c,d,e))}return s}class Vh extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rT extends Oh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,s,l){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(e.key)&&OI(c,e,s[l])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Kl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Kl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=$E();return this.mutations.forEach((l=>{const c=e.get(l.key),d=c.overlayedDocument;let p=this.applyToLocalView(d,c.mutatedFields);p=n.has(l.key)?null:p;const g=nT(d,p);g!==null&&s.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),je())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((n,s)=>Fv(n,s)))&&_o(this.baseMutations,e.baseMutations,((n,s)=>Fv(n,s)))}}class Zm{constructor(e,n,s,l){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(e,n,s){Qe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let l=(function(){return bI})();const c=e.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,s[d].version);return new Zm(e,n,s,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt,Ge;function sT(r){switch(r){case K.OK:return pe(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe(15467,{code:r})}}function aT(r){if(r===void 0)return wr("GRPC error has no .code"),K.UNKNOWN;switch(r){case Vt.OK:return K.OK;case Vt.CANCELLED:return K.CANCELLED;case Vt.UNKNOWN:return K.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return K.INTERNAL;case Vt.UNAVAILABLE:return K.UNAVAILABLE;case Vt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Vt.NOT_FOUND:return K.NOT_FOUND;case Vt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Vt.ABORTED:return K.ABORTED;case Vt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Vt.DATA_LOSS:return K.DATA_LOSS;default:return pe(39323,{code:r})}}(Ge=Vt||(Vt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new hs([4294967295,4294967295],0);function Kv(r){const e=UI().encode(r),n=new vE;return n.update(e),new Uint8Array(n.digest())}function Yv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),l=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new hs([n,s],0),new hs([l,c],0)]}class Jm{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new zl(`Invalid padding: ${n}`);if(s<0)throw new zl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new zl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new zl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hs.fromNumber(this.ge)}ye(e,n,s){let l=e.add(n.multiply(hs.fromNumber(s)));return l.compare(LI)===1&&(l=new hs([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Kv(e),[s,l]=Yv(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,l,c);if(!this.we(d))return!1}return!0}static create(e,n,s){const l=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),d=new Jm(c,l,n);return s.forEach((p=>d.insert(p))),d}insert(e){if(this.ge===0)return;const n=Kv(e),[s,l]=Yv(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,l,c);this.Se(d)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class zl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,s,l,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const l=new Map;return l.set(e,pu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Mh(ve.min(),l,new _t(Le),Rr(),je())}}class pu{constructor(e,n,s,l,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new pu(s,n,je(),je(),je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,s,l){this.be=e,this.removedTargetIds=n,this.key=s,this.De=l}}class oT{constructor(e,n){this.targetId=e,this.Ce=n}}class lT{constructor(e,n,s=sn.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=l}}class Xv{constructor(){this.ve=0,this.Fe=$v(),this.Me=sn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),n=je(),s=je();return this.Fe.forEach(((l,c)=>{switch(c){case 0:e=e.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:pe(38017,{changeType:c})}})),new pu(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=$v()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rr(),this.Je=zc(),this.He=zc(),this.Ye=new _t(Le)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,l)=>{this.rt(l)&&n(l)}))}st(e){const n=e.targetId,s=e.Ce.count,l=this.ot(n);if(l){const c=l.target;if(_m(c))if(s===0){const d=new de(c.path);this.et(n,d,Xt.newNoDocument(d,ve.min()))}else Qe(s===1,20013,{expectedCount:s});else{const d=this._t(n);if(d!==s){const p=this.ut(e),g=p?this.ct(p,e,d):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=n;let d,p;try{d=ys(s).toUint8Array()}catch(g){if(g instanceof DE)return yo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Jm(d,l,c)}catch(g){return yo(g instanceof zl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach((c=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(n,c,null),l++)})),l}Tt(e){const n=new Map;this.ze.forEach(((c,d)=>{const p=this.ot(d);if(p){if(c.current&&_m(p.target)){const g=new de(p.target.path);this.It(g).has(d)||this.Et(d,g)||this.et(d,g,Xt.newNoDocument(g,e))}c.Be&&(n.set(d,c.ke()),c.qe())}}));let s=je();this.He.forEach(((c,d)=>{let p=!0;d.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(c))})),this.je.forEach(((c,d)=>d.setReadTime(e)));const l=new Mh(e,n,this.Ye,this.je,s);return this.je=Rr(),this.Je=zc(),this.He=zc(),this.Ye=new _t(Le),l}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const l=this.nt(e);this.Et(e,n)?l.Qe(n,1):l.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new zt(Le),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new zt(Le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xv),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function zc(){return new _t(de.comparator)}function $v(){return new _t(de.comparator)}const zI={asc:"ASCENDING",desc:"DESCENDING"},qI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BI={and:"AND",or:"OR"};class HI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tm(r,e){return r.useProto3Json||fu(e)?e:{value:e}}function mh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uT(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function FI(r,e){return mh(r,e.toTimestamp())}function Hn(r){return Qe(!!r,49232),ve.fromTimestamp((function(n){const s=gs(n);return new ft(s.seconds,s.nanos)})(r))}function Wm(r,e){return bm(r,e).canonicalString()}function bm(r,e){const n=(function(l){return new at(["projects",l.projectId,"databases",l.database])})(r).child("documents");return e===void 0?n:n.child(e)}function cT(r){const e=at.fromString(r);return Qe(gT(e),10190,{key:e.toString()}),e}function ph(r,e){return Wm(r.databaseId,e.path)}function Yl(r,e){const n=cT(e);if(n.get(1)!==r.databaseId.projectId)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new de(fT(n))}function hT(r,e){return Wm(r.databaseId,e)}function GI(r){const e=cT(r);return e.length===4?at.emptyPath():fT(e)}function Am(r){return new at(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function fT(r){return Qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Zv(r,e,n){return{name:ph(r,e),fields:n.value.mapValue.fields}}function QI(r,e){return"found"in e?(function(s,l){Qe(!!l.found,43571),l.found.name,l.found.updateTime;const c=Yl(s,l.found.name),d=Hn(l.found.updateTime),p=l.found.createTime?Hn(l.found.createTime):ve.min(),g=new En({mapValue:{fields:l.found.fields}});return Xt.newFoundDocument(c,d,p,g)})(r,e):"missing"in e?(function(s,l){Qe(!!l.missing,3894),Qe(!!l.readTime,22933);const c=Yl(s,l.missing),d=Hn(l.readTime);return Xt.newNoDocument(c,d)})(r,e):pe(7234,{result:e})}function KI(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:pe(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],c=(function(y,T){return y.useProto3Json?(Qe(T===void 0||typeof T=="string",58123),sn.fromBase64String(T||"")):(Qe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),sn.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&(function(y){const T=y.code===void 0?K.UNKNOWN:aT(y.code);return new ae(T,y.message||"")})(d);n=new lT(s,l,c,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const l=Yl(r,s.document.name),c=Hn(s.document.updateTime),d=s.document.createTime?Hn(s.document.createTime):ve.min(),p=new En({mapValue:{fields:s.document.fields}}),g=Xt.newFoundDocument(l,c,d,p),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Jc(y,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const l=Yl(r,s.document),c=s.readTime?Hn(s.readTime):ve.min(),d=Xt.newNoDocument(l,c),p=s.removedTargetIds||[];n=new Jc([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const l=Yl(r,s.document),c=s.removedTargetIds||[];n=new Jc([],c,l,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,d=new kI(l,c),p=s.targetId;n=new oT(p,d)}}return n}function dT(r,e){let n;if(e instanceof mu)n={update:Zv(r,e.key,e.value)};else if(e instanceof Vh)n={delete:ph(r,e.key)};else if(e instanceof Ss)n={update:Zv(r,e.key,e.data),updateMask:nC(e.fieldMask)};else{if(!(e instanceof rT))return pe(16599,{Vt:e.type});n={verify:ph(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,d){const p=d.transform;if(p instanceof nu)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof iu)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof ru)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof dh)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw pe(20930,{transform:d.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:FI(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:pe(27497)})(r,e.precondition)),n}function YI(r,e){return r&&r.length>0?(Qe(e!==void 0,14353),r.map((n=>(function(l,c){let d=l.updateTime?Hn(l.updateTime):Hn(c);return d.isEqual(ve.min())&&(d=Hn(c)),new DI(d,l.transformResults||[])})(n,e)))):[]}function XI(r,e){return{documents:[hT(r,e.path)]}}function $I(r,e){const n={structuredQuery:{}},s=e.path;let l;e.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=hT(r,l);const c=(function(y){if(y.length!==0)return pT(yi.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const d=(function(y){if(y.length!==0)return y.map((T=>(function(x){return{field:ao(x.field),direction:WI(x.dir)}})(T)))})(e.orderBy);d&&(n.structuredQuery.orderBy=d);const p=Tm(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:l}}function ZI(r){let e=GI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){Qe(s===1,65062);const T=n.from[0];T.allDescendants?l=T.collectionId:e=e.child(T.collectionId)}let c=[];n.where&&(c=(function(C){const x=mT(C);return x instanceof yi&&qE(x)?x.getFilters():[x]})(n.where));let d=[];n.orderBy&&(d=(function(C){return C.map((x=>(function(J){return new fh(oo(J.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(x)))})(n.orderBy));let p=null;n.limit&&(p=(function(C){let x;return x=typeof C=="object"?C.value:C,fu(x)?null:x})(n.limit));let g=null;n.startAt&&(g=(function(C){const x=!!C.before,F=C.values||[];return new hh(F,x)})(n.startAt));let y=null;return n.endAt&&(y=(function(C){const x=!C.before,F=C.values||[];return new hh(F,x)})(n.endAt)),yI(e,l,d,c,p,"F",g,y)}function JI(r,e){const n=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:l})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mT(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=oo(n.unaryFilter.field);return Mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=oo(n.unaryFilter.field);return Mt.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=oo(n.unaryFilter.field);return Mt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=oo(n.unaryFilter.field);return Mt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Mt.create(oo(n.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return yi.create(n.compositeFilter.filters.map((s=>mT(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(n.compositeFilter.op))})(r):pe(30097,{filter:r})}function WI(r){return zI[r]}function eC(r){return qI[r]}function tC(r){return BI[r]}function ao(r){return{fieldPath:r.canonicalString()}}function oo(r){return nn.fromServerFormat(r.fieldPath)}function pT(r){return r instanceof Mt?(function(n){if(n.op==="=="){if(Lv(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NAN"}};if(Uv(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lv(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NOT_NAN"}};if(Uv(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(n.field),op:eC(n.op),value:n.value}}})(r):r instanceof yi?(function(n){const s=n.getFilters().map((l=>pT(l)));return s.length===1?s[0]:{compositeFilter:{op:tC(n.op),filters:s}}})(r):pe(54877,{filter:r})}function nC(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function gT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s,l,c=ve.min(),d=ve.min(),p=sn.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.yt=e}}function rC(r){const e=ZI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Em(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.Cn=new aC}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ps.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ps.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class aC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),l=this.index[n]||new zt(at.comparator),c=!l.has(s);return this.index[n]=l.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(e){return(this.index[e]||new zt(at.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yT=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(yT,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new To(0)}static cr(){return new To(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="LruGarbageCollector",oC=1048576;function e0([r,e],[n,s]){const l=Le(r,n);return l===0?Le(e,s):l}class lC{constructor(e){this.Ir=e,this.buffer=new zt(e0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();e0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){le(Wv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Co(n)?le(Wv,"Ignoring IndexedDB error during garbage collection: ",n):await Io(n)}await this.Vr(3e5)}))}}class cC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Rh.ce);const s=new lC(n);return this.mr.forEachTarget(e,(l=>s.Ar(l.sequenceNumber))).next((()=>this.mr.pr(e,(l=>s.Ar(l))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Jv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jv):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,l,c,d,p,g,y;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),l=this.params.maximumSequenceNumbersToCollect):l=C,d=Date.now(),this.nthSequenceNumber(e,l)))).next((C=>(s=C,p=Date.now(),this.removeTargets(e,s,n)))).next((C=>(c=C,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(y=Date.now(),ro()<=Ue.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-T}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${C} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:C}))))}}function hC(r,e){return new cC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.changes=new fa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,s,l){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((l=>(s=l,this.remoteDocumentCache.getEntry(e,n)))).next((l=>(s!==null&&Kl(s.mutation,l,qn.empty(),ft.now()),l)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,je()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=je()){const l=sa();return this.populateOverlays(e,l,n).next((()=>this.computeViews(e,n,l,s).next((c=>{let d=jl();return c.forEach(((p,g)=>{d=d.insert(p,g.overlayedDocument)})),d}))))}getOverlayedDocuments(e,n){const s=sa();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,je())))}populateOverlays(e,n,s){const l=[];return s.forEach((c=>{n.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(e,l).next((c=>{c.forEach(((d,p)=>{n.set(d,p)}))}))}computeViews(e,n,s,l){let c=Rr();const d=Ql(),p=(function(){return Ql()})();return n.forEach(((g,y)=>{const T=s.get(y.key);l.has(y.key)&&(T===void 0||T.mutation instanceof Ss)?c=c.insert(y.key,y):T!==void 0?(d.set(y.key,T.mutation.getFieldMask()),Kl(T.mutation,y,T.mutation.getFieldMask(),ft.now())):d.set(y.key,qn.empty())})),this.recalculateAndSaveOverlays(e,c).next((g=>(g.forEach(((y,T)=>d.set(y,T))),n.forEach(((y,T)=>p.set(y,new dC(T,d.get(y)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=Ql();let l=new _t(((d,p)=>d-p)),c=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((d=>{for(const p of d)p.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let T=s.get(g)||qn.empty();T=p.applyToLocalView(y,T),s.set(g,T);const C=(l.get(p.batchId)||je()).add(g);l=l.insert(p.batchId,C)}))})).next((()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,T=g.value,C=$E();T.forEach((x=>{if(!c.has(x)){const F=nT(n.get(x),s.get(x));F!==null&&C.set(x,F),c=c.add(x)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,C))}return $.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,l){return(function(d){return de.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,l):this.getDocumentsMatchingCollectionQuery(e,n,s,l)}getNextDocuments(e,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,l).next((c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,l-c.size):$.resolve(sa());let p=Jl,g=c;return d.next((y=>$.forEach(y,((T,C)=>(p<C.largestBatchId&&(p=C.largestBatchId),c.get(T)?$.resolve():this.remoteDocumentCache.getEntry(e,T).next((x=>{g=g.insert(T,x)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,g,y,je()))).next((T=>({batchId:p,changes:XE(T)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next((s=>{let l=jl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,l){const c=n.collectionGroup;let d=jl();return this.indexManager.getCollectionParents(e,c).next((p=>$.forEach(p,(g=>{const y=(function(C,x){return new du(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(n,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,l).next((T=>{T.forEach(((C,x)=>{d=d.insert(C,x)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,n,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,l)))).next((d=>{c.forEach(((g,y)=>{const T=y.getKey();d.get(T)===null&&(d=d.insert(T,Xt.newInvalidDocument(T)))}));let p=jl();return d.forEach(((g,y)=>{const T=c.get(g);T!==void 0&&Kl(T.mutation,y,qn.empty(),ft.now()),Nh(n,y)&&(p=p.insert(g,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(l){return{id:l.id,version:l.version,createTime:Hn(l.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(l){return{name:l.name,query:rC(l.bundledQuery),readTime:Hn(l.readTime)}})(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.overlays=new _t(de.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=sa();return $.forEach(n,(l=>this.getOverlay(e,l).next((c=>{c!==null&&s.set(l,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((l,c)=>{this.St(e,n,c)})),$.resolve()}removeOverlaysForBatchId(e,n,s){const l=this.qr.get(s);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const l=sa(),c=n.length+1,d=new de(n.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>s&&l.set(g.getKey(),g)}return $.resolve(l)}getOverlaysForCollectionGroup(e,n,s,l){let c=new _t(((y,T)=>y-T));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=c.get(y.largestBatchId);T===null&&(T=sa(),c=c.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const p=sa(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,T)=>p.set(y,T))),!(p.size()>=l)););return $.resolve(p)}St(e,n,s){const l=this.overlays.get(s.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(s.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new PI(n,s));let c=this.qr.get(n);c===void 0&&(c=je(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Qr=new zt(Yt.$r),this.Ur=new zt(Yt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Yt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Yt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new de(new at([])),s=new Yt(n,e),l=new Yt(n,e+1),c=[];return this.Ur.forEachInRange([s,l],(d=>{this.Gr(d),c.push(d.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new de(new at([])),s=new Yt(n,e),l=new Yt(n,e+1);let c=je();return this.Ur.forEachInRange([s,l],(d=>{c=c.add(d.key)})),c}containsKey(e){const n=new Yt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Yt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return de.comparator(e.key,n.key)||Le(e.Yr,n.Yr)}static Kr(e,n){return Le(e.Yr,n.Yr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new zt(Yt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new MI(c,n,s,l);this.mutationQueue.push(d);for(const p of l)this.Zr=this.Zr.add(new Yt(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return $.resolve(d)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,l=this.ei(s),c=l<0?0:l;return $.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Gm:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Yt(n,0),l=new Yt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,l],(d=>{const p=this.Xr(d.Yr);c.push(p)})),$.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new zt(Le);return n.forEach((l=>{const c=new Yt(l,0),d=new Yt(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],(p=>{s=s.add(p.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,l=s.length+1;let c=s;de.isDocumentKey(c)||(c=c.child(""));const d=new Yt(new de(c),0);let p=new zt(Le);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(g.Yr)),!0)}),d),$.resolve(this.ti(p))}ti(e){const n=[];return e.forEach((s=>{const l=this.Xr(s);l!==null&&n.push(l)})),n}removeMutationBatch(e,n){Qe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(n.mutations,(l=>{const c=new Yt(l.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Yt(n,0),l=this.Zr.firstAfterOrEqual(s);return $.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.ri=e,this.docs=(function(){return new _t(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,l=this.docs.get(s),c=l?l.size:0,d=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let s=Rr();return n.forEach((l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Xt.newInvalidDocument(l))})),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,l){let c=Rr();const d=n.path,p=new de(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||XR(YR(T),s)<=0||(l.has(T.key)||Nh(n,T))&&(c=c.insert(T.key,T.mutableCopy()))}return $.resolve(c)}getAllFromCollectionGroup(e,n,s,l){pe(9500)}ii(e,n){return $.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new EC(this)}getSize(e){return $.resolve(this.size)}}class EC extends fC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?n.push(this.Nr.addEntry(e,l)):this.Nr.removeEntry(s)})),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.persistence=e,this.si=new fa((n=>Ym(n)),Xm),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new ep,this.targetCount=0,this.ai=To.ur()}forEachTarget(e,n){return this.si.forEach(((s,l)=>n(l))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new To(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let l=0;const c=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),l++)})),$.waitFor(c).next((()=>l))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach((d=>{c.push(l.markPotentiallyOrphaned(e,d))})),$.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n){this.ui={},this.overlays={},this.ci=new Rh(0),this.li=!1,this.li=!0,this.hi=new yC,this.referenceDelegate=e(this),this.Pi=new TC(this),this.indexManager=new sC,this.remoteDocumentCache=(function(l){return new vC(l)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new iC(n),this.Ii=new pC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new _C(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){le("MemoryPersistence","Starting transaction:",e);const l=new bC(this.ci.next());return this.referenceDelegate.Ei(),s(l).next((c=>this.referenceDelegate.di(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Ai(e,n){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class bC extends ZR{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.Ri=new ep,this.Vi=null}static mi(e){return new tp(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((l=>this.fi.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((l=>{l.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const l=de.fromPath(s);return this.gi(e,l).next((c=>{c||n.removeEntry(l,ve.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class gh{constructor(e,n){this.persistence=e,this.pi=new fa((s=>eI(s.path)),((s,l)=>s.isEqual(l))),this.garbageCollector=hC(this,n)}static mi(e,n){return new gh(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((l=>s+l))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return $.forEach(this.pi,((s,l)=>this.br(e,s,l).next((c=>c?$.resolve():n(l)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(e,(d=>this.br(e,d,n).next((p=>{p||(s++,c.removeEntry(d,ve.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xc(e.data.value)),n}br(e,n,s){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const l=this.pi.get(n);return $.resolve(l!==void 0&&l>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,s,l){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=l}static As(e,n){let s=je(),l=je();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new np(e,n.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return e1()?8:JR(fn())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,l){const c={result:null};return this.ys(e,n).next((d=>{c.result=d})).next((()=>{if(!c.result)return this.ws(e,n,l,s).next((d=>{c.result=d}))})).next((()=>{if(c.result)return;const d=new AC;return this.Ss(e,n,d).next((p=>{if(c.result=p,this.Vs)return this.bs(e,n,d,p.size)}))})).next((()=>c.result))}bs(e,n,s,l){return s.documentReadCount<this.fs?(ro()<=Ue.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",so(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(ro()<=Ue.DEBUG&&le("QueryEngine","Query:",so(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.gs*l?(ro()<=Ue.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",so(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qi(n))):$.resolve())}ys(e,n){if(Bv(n))return $.resolve(null);let s=qi(n);return this.indexManager.getIndexType(e,s).next((l=>l===0?null:(n.limit!==null&&l===1&&(n=Em(n,null,"F"),s=qi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const d=je(...c);return this.ps.getDocuments(e,d).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ds(n,p);return this.Cs(n,y,d,g.readTime)?this.ys(e,Em(n,null,"F")):this.vs(e,y,n,g)}))))})))))}ws(e,n,s,l){return Bv(n)||l.isEqual(ve.min())?$.resolve(null):this.ps.getDocuments(e,s).next((c=>{const d=this.Ds(n,c);return this.Cs(n,d,s,l)?$.resolve(null):(ro()<=Ue.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),so(n)),this.vs(e,d,n,KR(l,Jl)).next((p=>p)))}))}Ds(e,n){let s=new zt(KE(e));return n.forEach(((l,c)=>{Nh(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,l){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(e,n,s){return ro()<=Ue.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",so(n)),this.ps.getDocumentsMatchingQuery(e,n,ps.min(),s)}vs(e,n,s,l){return this.ps.getDocumentsMatchingQuery(e,s,l).next((c=>(n.forEach((d=>{c=c.insert(d.key,d)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="LocalStore",wC=3e8;class RC{constructor(e,n,s,l){this.persistence=e,this.Fs=n,this.serializer=l,this.Ms=new _t(Le),this.xs=new fa((c=>Ym(c)),Xm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function IC(r,e,n,s){return new RC(r,e,n,s)}async function vT(r,e){const n=we(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next((c=>(l=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const d=[],p=[];let g=je();for(const y of l){d.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of c){p.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:d,addedBatchIds:p})))}))}))}function CC(r,e){const n=we(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,T){const C=y.batch,x=C.keys();let F=$.resolve();return x.forEach((J=>{F=F.next((()=>T.getEntry(g,J))).next((se=>{const W=y.docVersions.get(J);Qe(W!==null,48541),se.version.compareTo(W)<0&&(C.applyToRemoteDocument(se,y),se.isValidDocument()&&(se.setReadTime(y.commitVersion),T.addEntry(se)))}))})),F.next((()=>p.mutationQueue.removeMutationBatch(g,C)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=je();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(e)))).next((()=>n.localDocuments.getDocuments(s,l)))}))}function ET(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function xC(r,e){const n=we(r),s=e.snapshotVersion;let l=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const d=n.Ns.newChangeBuffer({trackRemovals:!0});l=n.Ms;const p=[];e.targetChanges.forEach(((T,C)=>{const x=l.get(C);if(!x)return;p.push(n.Pi.removeMatchingKeys(c,T.removedDocuments,C).next((()=>n.Pi.addMatchingKeys(c,T.addedDocuments,C))));let F=x.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(C)!==null?F=F.withResumeToken(sn.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):T.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(T.resumeToken,s)),l=l.insert(C,F),(function(se,W,Ae){return se.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-se.snapshotVersion.toMicroseconds()>=wC?!0:Ae.addedDocuments.size+Ae.modifiedDocuments.size+Ae.removedDocuments.size>0})(x,F,T)&&p.push(n.Pi.updateTargetData(c,F))}));let g=Rr(),y=je();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,T))})),p.push(NC(c,d,e.documentUpdates).next((T=>{g=T.ks,y=T.qs}))),!s.isEqual(ve.min())){const T=n.Pi.getLastRemoteSnapshotVersion(c).next((C=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));p.push(T)}return $.waitFor(p).next((()=>d.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,g,y))).next((()=>g))})).then((c=>(n.Ms=l,c)))}function NC(r,e,n){let s=je(),l=je();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let d=Rr();return n.forEach(((p,g)=>{const y=c.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(p,g.readTime),d=d.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),d=d.insert(p,g)):le(ip,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{ks:d,qs:l}}))}function DC(r,e){const n=we(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Gm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function OC(r,e){const n=we(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return n.Pi.getTargetData(s,e).next((c=>c?(l=c,$.resolve(l)):n.Pi.allocateTargetId(s).next((d=>(l=new os(e,d,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=n.Ms.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Sm(r,e,n){const s=we(r),l=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(d=>s.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!Co(d))throw d;le(ip,`Failed to update sequence numbers for target ${e}: ${d}`)}s.Ms=s.Ms.remove(e),s.xs.delete(l.target)}function t0(r,e,n){const s=we(r);let l=ve.min(),c=je();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(g,y,T){const C=we(g),x=C.xs.get(T);return x!==void 0?$.resolve(C.Ms.get(x)):C.Pi.getTargetData(y,T)})(s,d,qi(e)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(d,p.targetId).next((g=>{c=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(d,e,n?l:ve.min(),n?c:je()))).next((p=>(VC(s,vI(e),p),{documents:p,Qs:c})))))}function VC(r,e,n){let s=r.Os.get(e)||ve.min();n.forEach(((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class n0{constructor(){this.activeTargetIds=wI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MC{constructor(){this.Mo=new n0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new n0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="ConnectivityMonitor";class r0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){le(i0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){le(i0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc=null;function wm(){return qc===null?qc=(function(){return 268435456+Math.round(2147483648*Math.random())})():qc++,"0x"+qc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="RestConnection",kC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${l}`,this.Wo=this.databaseId.database===uh?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Go(e,n,s,l,c){const d=wm(),p=this.zo(e,n.toUriEncodedString());le(em,`Sending RPC '${e}' ${d}:`,p,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,l,c);const{host:y}=new URL(p),T=Ao(y);return this.Jo(e,p,g,s,T).then((C=>(le(em,`Received RPC '${e}' ${d}: `,C),C)),(C=>{throw yo(em,`RPC '${e}' ${d} failed with error: `,C,"url: ",p,"request:",s),C}))}Ho(e,n,s,l,c,d){return this.Go(e,n,s,l,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ro})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((l,c)=>e[c]=l)),s&&s.headers.forEach(((l,c)=>e[c]=l))}zo(e,n){const s=kC[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class jC extends UC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,l,c){const d=wm();return new Promise(((p,g)=>{const y=new EE;y.setWithCredentials(!0),y.listenOnce(TE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Yc.NO_ERROR:const C=y.getResponseJson();le(cn,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(C)),p(C);break;case Yc.TIMEOUT:le(cn,`RPC '${e}' ${d} timed out`),g(new ae(K.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const x=y.getStatus();if(le(cn,`RPC '${e}' ${d} failed with status:`,x,"response text:",y.getResponseText()),x>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const J=F?.error;if(J&&J.status&&J.message){const se=(function(Ae){const ye=Ae.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ye)>=0?ye:K.UNKNOWN})(J.status);g(new ae(se,J.message))}else g(new ae(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ae(K.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{le(cn,`RPC '${e}' ${d} completed.`)}}));const T=JSON.stringify(l);le(cn,`RPC '${e}' ${d} sending request:`,l),y.send(n,"POST",T,s,15)}))}T_(e,n,s){const l=wm(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=SE(),p=AE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=c.join("");le(cn,`Creating RPC '${e}' stream ${l}: ${T}`,g);const C=d.createWebChannel(T,g);this.I_(C);let x=!1,F=!1;const J=new LC({Yo:W=>{F?le(cn,`Not sending because RPC '${e}' stream ${l} is closed:`,W):(x||(le(cn,`Opening RPC '${e}' stream ${l} transport.`),C.open(),x=!0),le(cn,`RPC '${e}' stream ${l} sending:`,W),C.send(W))},Zo:()=>C.close()}),se=(W,Ae,ye)=>{W.listen(Ae,(me=>{try{ye(me)}catch(ze){setTimeout((()=>{throw ze}),0)}}))};return se(C,Ll.EventType.OPEN,(()=>{F||(le(cn,`RPC '${e}' stream ${l} transport opened.`),J.o_())})),se(C,Ll.EventType.CLOSE,(()=>{F||(F=!0,le(cn,`RPC '${e}' stream ${l} transport closed`),J.a_(),this.E_(C))})),se(C,Ll.EventType.ERROR,(W=>{F||(F=!0,yo(cn,`RPC '${e}' stream ${l} transport errored. Name:`,W.name,"Message:",W.message),J.a_(new ae(K.UNAVAILABLE,"The operation could not be completed")))})),se(C,Ll.EventType.MESSAGE,(W=>{if(!F){const Ae=W.data[0];Qe(!!Ae,16349);const ye=Ae,me=ye?.error||ye[0]?.error;if(me){le(cn,`RPC '${e}' stream ${l} received error:`,me);const ze=me.status;let Se=(function(S){const I=Vt[S];if(I!==void 0)return aT(I)})(ze),oe=me.message;Se===void 0&&(Se=K.INTERNAL,oe="Unknown error status: "+ze+" with message "+me.message),F=!0,J.a_(new ae(Se,oe)),C.close()}else le(cn,`RPC '${e}' stream ${l} received:`,Ae),J.u_(Ae)}})),se(p,bE.STAT_EVENT,(W=>{W.stat===dm.PROXY?le(cn,`RPC '${e}' stream ${l} detected buffering proxy`):W.stat===dm.NOPROXY&&le(cn,`RPC '${e}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(r){return new HI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s=1e3,l=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&le("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="PersistentStream";class TT{constructor(e,n,s,l,c,d,p,g){this.Mi=e,this.S_=s,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rp(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(wr(n.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.D_===n&&this.G_(s,l)}),(s=>{e((()=>{const l=new ae(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{s((()=>this.z_(l)))})),this.stream.onMessage((l=>{s((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return le(s0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(le(s0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zC extends TT{constructor(e,n,s,l,c,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,d),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=KI(this.serializer,e),s=(function(c){if(!("targetChange"in c))return ve.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?ve.min():d.readTime?Hn(d.readTime):ve.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Am(this.serializer),n.addTarget=(function(c,d){let p;const g=d.target;if(p=_m(g)?{documents:XI(c,g)}:{query:$I(c,g).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=uT(c,d.resumeToken);const y=Tm(c,d.expectedCount);y!==null&&(p.expectedCount=y)}else if(d.snapshotVersion.compareTo(ve.min())>0){p.readTime=mh(c,d.snapshotVersion.toTimestamp());const y=Tm(c,d.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=JI(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Am(this.serializer),n.removeTarget=e,this.q_(n)}}class qC extends TT{constructor(e,n,s,l,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=YI(e.writeResults,e.commitTime),s=Hn(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Am(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>dT(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{}class HC extends BC{constructor(e,n,s,l){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Go(e,bm(n,s),l,c,d))).catch((c=>{throw c.name==="FirebaseError"?(c.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ae(K.UNKNOWN,c.toString())}))}Ho(e,n,s,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(e,bm(n,s),l,d,p,c))).catch((d=>{throw d.name==="FirebaseError"?(d.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ae(K.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class FC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wr(n),this.aa=!1):le("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="RemoteStore";class GC{constructor(e,n,s,l,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((d=>{s.enqueueAndForget((async()=>{da(this)&&(le(ca,"Restarting streams for network reachability change."),await(async function(g){const y=we(g);y.Ea.add(4),await gu(y),y.Ra.set("Unknown"),y.Ea.delete(4),await kh(y)})(this))}))})),this.Ra=new FC(s,l)}}async function kh(r){if(da(r))for(const e of r.da)await e(!0)}async function gu(r){for(const e of r.da)await e(!1)}function bT(r,e){const n=we(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),lp(n)?op(n):xo(n).O_()&&ap(n,e))}function sp(r,e){const n=we(r),s=xo(n);n.Ia.delete(e),s.O_()&&AT(n,e),n.Ia.size===0&&(s.O_()?s.L_():da(n)&&n.Ra.set("Unknown"))}function ap(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(r).Y_(e)}function AT(r,e){r.Va.Ue(e),xo(r).Z_(e)}function op(r){r.Va=new jI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),xo(r).start(),r.Ra.ua()}function lp(r){return da(r)&&!xo(r).x_()&&r.Ia.size>0}function da(r){return we(r).Ea.size===0}function ST(r){r.Va=void 0}async function QC(r){r.Ra.set("Online")}async function KC(r){r.Ia.forEach(((e,n)=>{ap(r,e)}))}async function YC(r,e){ST(r),lp(r)?(r.Ra.ha(e),op(r)):r.Ra.set("Unknown")}async function XC(r,e,n){if(r.Ra.set("Online"),e instanceof lT&&e.state===2&&e.cause)try{await(async function(l,c){const d=c.cause;for(const p of c.targetIds)l.Ia.has(p)&&(await l.remoteSyncer.rejectListen(p,d),l.Ia.delete(p),l.Va.removeTarget(p))})(r,e)}catch(s){le(ca,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yh(r,s)}else if(e instanceof Jc?r.Va.Ze(e):e instanceof oT?r.Va.st(e):r.Va.tt(e),!n.isEqual(ve.min()))try{const s=await ET(r.localStore);n.compareTo(s)>=0&&await(function(c,d){const p=c.Va.Tt(d);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const T=c.Ia.get(y);T&&c.Ia.set(y,T.withResumeToken(g.resumeToken,d))}})),p.targetMismatches.forEach(((g,y)=>{const T=c.Ia.get(g);if(!T)return;c.Ia.set(g,T.withResumeToken(sn.EMPTY_BYTE_STRING,T.snapshotVersion)),AT(c,g);const C=new os(T.target,g,y,T.sequenceNumber);ap(c,C)})),c.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){le(ca,"Failed to raise snapshot:",s),await yh(r,s)}}async function yh(r,e,n){if(!Co(e))throw e;r.Ea.add(1),await gu(r),r.Ra.set("Offline"),n||(n=()=>ET(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{le(ca,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await kh(r)}))}function wT(r,e){return e().catch((n=>yh(r,n,e)))}async function Uh(r){const e=we(r),n=vs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gm;for(;$C(e);)try{const l=await DC(e.localStore,s);if(l===null){e.Ta.length===0&&n.L_();break}s=l.batchId,ZC(e,l)}catch(l){await yh(e,l)}RT(e)&&IT(e)}function $C(r){return da(r)&&r.Ta.length<10}function ZC(r,e){r.Ta.push(e);const n=vs(r);n.O_()&&n.X_&&n.ea(e.mutations)}function RT(r){return da(r)&&!vs(r).x_()&&r.Ta.length>0}function IT(r){vs(r).start()}async function JC(r){vs(r).ra()}async function WC(r){const e=vs(r);for(const n of r.Ta)e.ea(n.mutations)}async function e2(r,e,n){const s=r.Ta.shift(),l=Zm.from(s,e,n);await wT(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Uh(r)}async function t2(r,e){e&&vs(r).X_&&await(async function(s,l){if((function(d){return sT(d)&&d!==K.ABORTED})(l.code)){const c=s.Ta.shift();vs(s).B_(),await wT(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l))),await Uh(s)}})(r,e),RT(r)&&IT(r)}async function a0(r,e){const n=we(r);n.asyncQueue.verifyOperationInProgress(),le(ca,"RemoteStore received new credentials");const s=da(n);n.Ea.add(3),await gu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await kh(n)}async function n2(r,e){const n=we(r);e?(n.Ea.delete(2),await kh(n)):e||(n.Ea.add(2),await gu(n),n.Ra.set("Unknown"))}function xo(r){return r.ma||(r.ma=(function(n,s,l){const c=we(n);return c.sa(),new zC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:QC.bind(null,r),t_:KC.bind(null,r),r_:YC.bind(null,r),H_:XC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),lp(r)?op(r):r.Ra.set("Unknown")):(await r.ma.stop(),ST(r))}))),r.ma}function vs(r){return r.fa||(r.fa=(function(n,s,l){const c=we(n);return c.sa(),new qC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:JC.bind(null,r),r_:t2.bind(null,r),ta:WC.bind(null,r),na:e2.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Uh(r)):(await r.fa.stop(),r.Ta.length>0&&(le(ca,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,s,l,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,l,c){const d=Date.now()+s,p=new up(e,n,d,l,c);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(r,e){if(wr("AsyncQueue",`${e}: ${r}`),Co(r))return new ae(K.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static emptySet(e){return new mo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||de.comparator(n.key,s.key):(n,s)=>de.comparator(n.key,s.key),this.keyedMap=jl(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.ga=new _t(de.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class bo{constructor(e,n,s,l,c,d,p,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,l,c){const d=[];return n.forEach((p=>{d.push({type:0,doc:p})})),new bo(e,n,mo.emptySet(n),d,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class r2{constructor(){this.queries=l0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=we(n),c=l.queries;l.queries=l0(),c.forEach(((d,p)=>{for(const g of p.Sa)g.onError(s)}))})(this,new ae(K.ABORTED,"Firestore shutting down"))}}function l0(){return new fa((r=>QE(r)),xh)}async function CT(r,e){const n=we(r);let s=3;const l=e.query;let c=n.queries.get(l);c?!c.ba()&&e.Da()&&(s=2):(c=new i2,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(l,!0);break;case 1:c.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(d){const p=cp(d,`Initialization of query '${so(e.query)}' failed`);return void e.onError(p)}n.queries.set(l,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&hp(n)}async function xT(r,e){const n=we(r),s=e.query;let l=3;const c=n.queries.get(s);if(c){const d=c.Sa.indexOf(e);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=e.Da()?0:1:!c.ba()&&e.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function s2(r,e){const n=we(r);let s=!1;for(const l of e){const c=l.query,d=n.queries.get(c);if(d){for(const p of d.Sa)p.Fa(l)&&(s=!0);d.wa=l}}s&&hp(n)}function a2(r,e,n){const s=we(r),l=s.queries.get(e);if(l)for(const c of l.Sa)c.onError(n);s.queries.delete(e)}function hp(r){r.Ca.forEach((e=>{e.next()}))}var Rm,u0;(u0=Rm||(Rm={})).Ma="default",u0.Cache="cache";class NT{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const l of e.docChanges)l.type!==3&&s.push(l);e=new bo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.key=e}}class OT{constructor(e){this.key=e}}class o2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=je(),this.mutatedKeys=je(),this.eu=KE(e),this.tu=new mo(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new o0,l=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,d=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal(((T,C)=>{const x=l.get(T),F=Nh(this.query,C)?C:null,J=!!x&&this.mutatedKeys.has(x.key),se=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let W=!1;x&&F?x.data.isEqual(F.data)?J!==se&&(s.track({type:3,doc:F}),W=!0):this.su(x,F)||(s.track({type:2,doc:F}),W=!0,(g&&this.eu(F,g)>0||y&&this.eu(F,y)<0)&&(p=!0)):!x&&F?(s.track({type:0,doc:F}),W=!0):x&&!F&&(s.track({type:1,doc:x}),W=!0,(g||y)&&(p=!0)),W&&(F?(d=d.add(F),c=se?c.add(T):c.delete(T)):(d=d.delete(T),c=c.delete(T)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const T=this.query.limitType==="F"?d.last():d.first();d=d.delete(T.key),c=c.delete(T.key),s.track({type:1,doc:T})}return{tu:d,iu:s,Cs:p,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,l){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((T,C)=>(function(F,J){const se=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:W})}};return se(F)-se(J)})(T.type,C.type)||this.eu(T.doc,C.doc))),this.ou(s),l=l??!1;const p=n&&!l?this._u():[],g=this.Xa.size===0&&this.current&&!l?1:0,y=g!==this.Za;return this.Za=g,d.length!==0||y?{snapshot:new bo(this.query,e.tu,c,d,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new o0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=je(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new OT(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new DT(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=je();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return bo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const fp="SyncEngine";class l2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class u2{constructor(e){this.key=e,this.hu=!1}}class c2{constructor(e,n,s,l,c,d){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new fa((p=>QE(p)),xh),this.Iu=new Map,this.Eu=new Set,this.du=new _t(de.comparator),this.Au=new Map,this.Ru=new ep,this.Vu={},this.mu=new Map,this.fu=To.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function h2(r,e,n=!0){const s=LT(r);let l;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await VT(s,e,n,!0),l}async function f2(r,e){const n=LT(r);await VT(n,e,!0,!1)}async function VT(r,e,n,s){const l=await OC(r.localStore,qi(e)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await d2(r,e,c,d==="current",l.resumeToken)),r.isPrimaryClient&&n&&bT(r.remoteStore,l),p}async function d2(r,e,n,s,l){r.pu=(C,x,F)=>(async function(se,W,Ae,ye){let me=W.view.ru(Ae);me.Cs&&(me=await t0(se.localStore,W.query,!1).then((({documents:V})=>W.view.ru(V,me))));const ze=ye&&ye.targetChanges.get(W.targetId),Se=ye&&ye.targetMismatches.get(W.targetId)!=null,oe=W.view.applyChanges(me,se.isPrimaryClient,ze,Se);return h0(se,W.targetId,oe.au),oe.snapshot})(r,C,x,F);const c=await t0(r.localStore,e,!0),d=new o2(e,c.Qs),p=d.ru(c.documents),g=pu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),y=d.applyChanges(p,r.isPrimaryClient,g);h0(r,n,y.au);const T=new l2(e,n,d);return r.Tu.set(e,T),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function m2(r,e,n){const s=we(r),l=s.Tu.get(e),c=s.Iu.get(l.targetId);if(c.length>1)return s.Iu.set(l.targetId,c.filter((d=>!xh(d,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await Sm(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),n&&sp(s.remoteStore,l.targetId),Im(s,l.targetId)})).catch(Io)):(Im(s,l.targetId),await Sm(s.localStore,l.targetId,!0))}async function p2(r,e){const n=we(r),s=n.Tu.get(e),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),sp(n.remoteStore,s.targetId))}async function g2(r,e,n){const s=A2(r);try{const l=await(function(d,p){const g=we(d),y=ft.now(),T=p.reduce(((F,J)=>F.add(J.key)),je());let C,x;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let J=Rr(),se=je();return g.Ns.getEntries(F,T).next((W=>{J=W,J.forEach(((Ae,ye)=>{ye.isValidDocument()||(se=se.add(Ae))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,J))).next((W=>{C=W;const Ae=[];for(const ye of p){const me=VI(ye,C.get(ye.key).overlayedDocument);me!=null&&Ae.push(new Ss(ye.key,me,LE(me.value.mapValue),rn.exists(!0)))}return g.mutationQueue.addMutationBatch(F,y,Ae,p)})).next((W=>{x=W;const Ae=W.applyToLocalDocumentSet(C,se);return g.documentOverlayCache.saveOverlays(F,W.batchId,Ae)}))})).then((()=>({batchId:x.batchId,changes:XE(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(l.batchId),(function(d,p,g){let y=d.Vu[d.currentUser.toKey()];y||(y=new _t(Le)),y=y.insert(p,g),d.Vu[d.currentUser.toKey()]=y})(s,l.batchId,n),await yu(s,l.changes),await Uh(s.remoteStore)}catch(l){const c=cp(l,"Failed to persist write");n.reject(c)}}async function MT(r,e){const n=we(r);try{const s=await xC(n.localStore,e);e.targetChanges.forEach(((l,c)=>{const d=n.Au.get(c);d&&(Qe(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?Qe(d.hu,14607):l.removedDocuments.size>0&&(Qe(d.hu,42227),d.hu=!1))})),await yu(n,s,e)}catch(s){await Io(s)}}function c0(r,e,n){const s=we(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach(((c,d)=>{const p=d.view.va(e);p.snapshot&&l.push(p.snapshot)})),(function(d,p){const g=we(d);g.onlineState=p;let y=!1;g.queries.forEach(((T,C)=>{for(const x of C.Sa)x.va(p)&&(y=!0)})),y&&hp(g)})(s.eventManager,e),l.length&&s.Pu.H_(l),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function y2(r,e,n){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",n);const l=s.Au.get(e),c=l&&l.key;if(c){let d=new _t(de.comparator);d=d.insert(c,Xt.newNoDocument(c,ve.min()));const p=je().add(c),g=new Mh(ve.min(),new Map,new _t(Le),d,p);await MT(s,g),s.du=s.du.remove(c),s.Au.delete(e),dp(s)}else await Sm(s.localStore,e,!1).then((()=>Im(s,e,n))).catch(Io)}async function _2(r,e){const n=we(r),s=e.batch.batchId;try{const l=await CC(n.localStore,e);kT(n,s,null),PT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await yu(n,l)}catch(l){await Io(l)}}async function v2(r,e,n){const s=we(r);try{const l=await(function(d,p){const g=we(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let T;return g.mutationQueue.lookupMutationBatch(y,p).next((C=>(Qe(C!==null,37113),T=C.keys(),g.mutationQueue.removeMutationBatch(y,C)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,T,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T))).next((()=>g.localDocuments.getDocuments(y,T)))}))})(s.localStore,e);kT(s,e,n),PT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await yu(s,l)}catch(l){await Io(l)}}function PT(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function kT(r,e,n){const s=we(r);let l=s.Vu[s.currentUser.toKey()];if(l){const c=l.get(e);c&&(n?c.reject(n):c.resolve(),l=l.remove(e)),s.Vu[s.currentUser.toKey()]=l}}function Im(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||UT(r,s)}))}function UT(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(sp(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),dp(r))}function h0(r,e,n){for(const s of n)s instanceof DT?(r.Ru.addReference(s.key,e),E2(r,s)):s instanceof OT?(le(fp,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||UT(r,s.key)):pe(19791,{wu:s})}function E2(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(le(fp,"New document in limbo: "+n),r.Eu.add(s),dp(r))}function dp(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new de(at.fromString(e)),s=r.fu.next();r.Au.set(s,new u2(n)),r.du=r.du.insert(n,s),bT(r.remoteStore,new os(qi(Ch(n.path)),s,"TargetPurposeLimboResolution",Rh.ce))}}async function yu(r,e,n){const s=we(r),l=[],c=[],d=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,g)=>{d.push(s.pu(g,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const T=y?!y.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(y){l.push(y);const T=np.As(g.targetId,y);c.push(T)}})))})),await Promise.all(d),s.Pu.H_(l),await(async function(g,y){const T=we(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>$.forEach(y,(x=>$.forEach(x.Es,(F=>T.persistence.referenceDelegate.addReference(C,x.targetId,F))).next((()=>$.forEach(x.ds,(F=>T.persistence.referenceDelegate.removeReference(C,x.targetId,F)))))))))}catch(C){if(!Co(C))throw C;le(ip,"Failed to update sequence numbers: "+C)}for(const C of y){const x=C.targetId;if(!C.fromCache){const F=T.Ms.get(x),J=F.snapshotVersion,se=F.withLastLimboFreeSnapshotVersion(J);T.Ms=T.Ms.insert(x,se)}}})(s.localStore,c))}async function T2(r,e){const n=we(r);if(!n.currentUser.isEqual(e)){le(fp,"User change. New user:",e.toKey());const s=await vT(n.localStore,e);n.currentUser=e,(function(c,d){c.mu.forEach((p=>{p.forEach((g=>{g.reject(new ae(K.CANCELLED,d))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yu(n,s.Ls)}}function b2(r,e){const n=we(r),s=n.Au.get(e);if(s&&s.hu)return je().add(s.key);{let l=je();const c=n.Iu.get(e);if(!c)return l;for(const d of c){const p=n.Tu.get(d);l=l.unionWith(p.view.nu)}return l}}function LT(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=MT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y2.bind(null,e),e.Pu.H_=s2.bind(null,e.eventManager),e.Pu.yu=a2.bind(null,e.eventManager),e}function A2(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v2.bind(null,e),e}class _h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ph(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return IC(this.persistence,new SC,e.initialUser,this.serializer)}Cu(e){return new _T(tp.mi,this.serializer)}Du(e){return new MC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_h.provider={build:()=>new _h};class S2 extends _h{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Qe(this.persistence.referenceDelegate instanceof gh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new uC(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new _T((s=>gh.mi(s,n)),this.serializer)}}class Cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>c0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=T2.bind(null,this.syncEngine),await n2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new r2})()}createDatastore(e){const n=Ph(e.databaseInfo.databaseId),s=(function(c){return new jC(c)})(e.databaseInfo);return(function(c,d,p,g){return new HC(c,d,p,g)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,l,c,d,p){return new GC(s,l,c,d,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>c0(this.syncEngine,n,0)),(function(){return r0.v()?new r0:new PC})())}createSyncEngine(e,n){return(function(l,c,d,p,g,y,T){const C=new c2(l,c,d,p,g,y);return T&&(C.gu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=we(n);le(ca,"RemoteStore shutting down."),s.Ea.add(5),await gu(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Cm.provider={build:()=>new Cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):wr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ae(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(l,c){const d=we(l),p={documents:c.map((C=>ph(d.serializer,C)))},g=await d.Ho("BatchGetDocuments",d.serializer.databaseId,at.emptyPath(),p,c.length),y=new Map;g.forEach((C=>{const x=QI(d.serializer,C);y.set(x.key.toString(),x)}));const T=[];return c.forEach((C=>{const x=y.get(C.toString());Qe(!!x,55234,{key:C}),T.push(x)})),T})(this.datastore,e);return n.forEach((s=>this.recordVersion(s))),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((n=>{e.delete(n.key.toString())})),e.forEach(((n,s)=>{const l=de.fromPath(s);this.mutations.push(new rT(l,this.precondition(l)))})),await(async function(s,l){const c=we(s),d={writes:l.map((p=>dT(c.serializer,p)))};await c.Go("Commit",c.serializer.databaseId,at.emptyPath(),d)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw pe(50498,{Gu:e.constructor.name});n=ve.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new ae(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ve.min())?rn.exists(!1):rn.updateTime(n):rn.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ve.min()))throw new ae(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return rn.updateTime(n)}return rn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,s,l,c){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=l,this.deferred=c,this.zu=s.maxAttempts,this.M_=new rp(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new w2(this.datastore),n=this.Hu(e);n&&n.then((s=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(s)})).catch((l=>{this.Yu(l)}))))})).catch((s=>{this.Yu(s)}))}))}Hu(e){try{const n=this.updateFunction(e);return!fu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!sT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="FirestoreClient";class I2{constructor(e,n,s,l,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=hn.UNAUTHENTICATED,this.clientId=Fm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async d=>{le(Es,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(le(Es,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=cp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nm(r,e){r.asyncQueue.verifyOperationInProgress(),le(Es,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await vT(e.localStore,l),s=l)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function f0(r,e){r.asyncQueue.verifyOperationInProgress();const n=await C2(r);le(Es,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>a0(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>a0(e.remoteStore,l))),r._onlineComponents=e}async function C2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){le(Es,"Using user provided OfflineComponentProvider");try{await nm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(l){return l.name==="FirebaseError"?l.code===K.FAILED_PRECONDITION||l.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await nm(r,new _h)}}else le(Es,"Using default OfflineComponentProvider"),await nm(r,new S2(void 0));return r._offlineComponents}async function mp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(le(Es,"Using user provided OnlineComponentProvider"),await f0(r,r._uninitializedComponentsProvider._online)):(le(Es,"Using default OnlineComponentProvider"),await f0(r,new Cm))),r._onlineComponents}function x2(r){return mp(r).then((e=>e.syncEngine))}function N2(r){return mp(r).then((e=>e.datastore))}async function xm(r){const e=await mp(r),n=e.eventManager;return n.onListen=h2.bind(null,e.syncEngine),n.onUnlisten=m2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=f2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=p2.bind(null,e.syncEngine),n}function D2(r,e,n={}){const s=new br;return r.asyncQueue.enqueueAndForget((async()=>(function(c,d,p,g,y){const T=new jT({next:x=>{T.Nu(),d.enqueueAndForget((()=>xT(c,C)));const F=x.docs.has(p);!F&&x.fromCache?y.reject(new ae(K.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&x.fromCache&&g&&g.source==="server"?y.reject(new ae(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(x)},error:x=>y.reject(x)}),C=new NT(Ch(p.path),T,{includeMetadataChanges:!0,qa:!0});return CT(c,C)})(await xm(r),r.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="firestore.googleapis.com",m0=!0;class p0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qT,this.ssl=m0}else this.host=e.host,this.ssl=e.ssl??m0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oC)throw new ae(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zT(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lh{constructor(e,n,s,l){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new p0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new p0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new kR;switch(s.type){case"firstParty":return new zR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=d0.get(n);s&&(le("ComponentProvider","Removing Datastore"),d0.delete(n),s.terminate())})(this),Promise.resolve()}}function O2(r,e,n,s={}){r=Bn(r,Lh);const l=Ao(e),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;l&&(O0(`https://${p}`),V0("Firestore",!0)),c.host!==qT&&c.host!==p&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:p,ssl:l,emulatorOptions:s};if(!aa(g,d)&&(r._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=hn.MOCK_USER;else{y=GA(s.mockUserToken,r._app?.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ae(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new hn(C)}r._authCredentials=new UR(new RE(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new No(this.firestore,e,this._query)}}class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(hu(n,yt._jsonSchema))return new yt(e,s||null,new de(at.fromString(n.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:Pt("string",yt._jsonSchemaVersion),referencePath:Pt("string")};class fs extends No{constructor(e,n,s){super(e,n,Ch(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new de(e))}withConverter(e){return new fs(this.firestore,e,this._path)}}function Pl(r,e,...n){if(r=Ct(r),IE("collection","path",e),r instanceof Lh){const s=at.fromString(e,...n);return Cv(s),new fs(r,null,s)}{if(!(r instanceof yt||r instanceof fs))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(at.fromString(e,...n));return Cv(s),new fs(r.firestore,null,s)}}function wn(r,e,...n){if(r=Ct(r),arguments.length===1&&(e=Fm.newId()),IE("doc","path",e),r instanceof Lh){const s=at.fromString(e,...n);return Iv(s),new yt(r,null,new de(s))}{if(!(r instanceof yt||r instanceof fs))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(at.fromString(e,...n));return Iv(s),new yt(r.firestore,r instanceof fs?r.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="AsyncQueue";class y0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rp(this,"async_queue_retry"),this._c=()=>{const s=tm();s&&le(g0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=tm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new br;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Co(e))throw e;le(g0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,wr("INTERNAL UNHANDLED ERROR: ",_0(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const l=up.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(l),l}uc(){this.nc&&pe(47125,{Pc:_0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function _0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const l=n;for(const c of s)if(c in l&&typeof l[c]=="function")return!0;return!1})(r,["next","error","complete"])}class Ir extends Lh{constructor(e,n,s,l){super(e,n,s,l),this.type="firestore",this._queue=new y0,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new y0(e),this._firestoreClient=void 0,await e}}}function V2(r,e){const n=typeof r=="object"?r:U0(),s=typeof r=="string"?r:uh,l=Mm(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=HA("firestore");c&&O2(l,...c)}return l}function jh(r){if(r._terminated)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||M2(r),r._firestoreClient}function M2(r){const e=r._freezeSettings(),n=(function(l,c,d,p){return new iI(l,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,zT(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new I2(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(sn.fromBase64String(e))}catch(n){throw new ae(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hu(e,zn._jsonSchema))return zn.fromBase64String(e.bytes)}}zn._jsonSchemaVersion="firestore/bytes/1.0",zn._jsonSchema={type:Pt("string",zn._jsonSchemaVersion),bytes:Pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bi._jsonSchemaVersion}}static fromJSON(e){if(hu(e,Bi._jsonSchema))return new Bi(e.latitude,e.longitude)}}Bi._jsonSchemaVersion="firestore/geoPoint/1.0",Bi._jsonSchema={type:Pt("string",Bi._jsonSchemaVersion),latitude:Pt("number"),longitude:Pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Hi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hu(e,Hi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Hi(e.vectorValues);throw new ae(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hi._jsonSchemaVersion="firestore/vectorValue/1.0",Hi._jsonSchema={type:Pt("string",Hi._jsonSchemaVersion),vectorValues:Pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=/^__.*__$/;class k2{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class BT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ac:r})}}class pp{constructor(e,n,s,l,c,d){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(HT(this.Ac)&&P2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class U2{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ph(e)}Cc(e,n,s,l=!1){return new pp({Ac:e,methodName:n,Dc:s,path:nn.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vu(r){const e=r._freezeSettings(),n=Ph(r._databaseId);return new U2(r._databaseId,!!e.ignoreUndefinedProperties,n)}function gp(r,e,n,s,l,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,e,n,l);_p("Data must be an object, but it was:",d,s);const p=QT(s,d);let g,y;if(c.merge)g=new qn(d.fieldMask),y=d.fieldTransforms;else if(c.mergeFields){const T=[];for(const C of c.mergeFields){const x=Nm(e,C,n);if(!d.contains(x))throw new ae(K.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);YT(T,x)||T.push(x)}g=new qn(T),y=d.fieldTransforms.filter((C=>g.covers(C.field)))}else g=null,y=d.fieldTransforms;return new k2(new En(p),g,y)}class qh extends zh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qh}}class yp extends zh{_toFieldTransform(e){return new xI(e.path,new nu)}isEqual(e){return e instanceof yp}}function FT(r,e,n,s){const l=r.Cc(1,e,n);_p("Data must be an object, but it was:",l,s);const c=[],d=En.empty();As(s,((g,y)=>{const T=vp(e,g,n);y=Ct(y);const C=l.yc(T);if(y instanceof qh)c.push(T);else{const x=Eu(y,C);x!=null&&(c.push(T),d.set(T,x))}}));const p=new qn(c);return new BT(d,p,l.fieldTransforms)}function GT(r,e,n,s,l,c){const d=r.Cc(1,e,n),p=[Nm(e,s,n)],g=[l];if(c.length%2!=0)throw new ae(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<c.length;x+=2)p.push(Nm(e,c[x])),g.push(c[x+1]);const y=[],T=En.empty();for(let x=p.length-1;x>=0;--x)if(!YT(y,p[x])){const F=p[x];let J=g[x];J=Ct(J);const se=d.yc(F);if(J instanceof qh)y.push(F);else{const W=Eu(J,se);W!=null&&(y.push(F),T.set(F,W))}}const C=new qn(y);return new BT(T,C,d.fieldTransforms)}function L2(r,e,n,s=!1){return Eu(n,r.Cc(s?4:3,e))}function Eu(r,e){if(KT(r=Ct(r)))return _p("Unsupported field value:",e,r),QT(r,e);if(r instanceof zh)return(function(s,l){if(!HT(l.Ac))throw l.Sc(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,l){const c=[];let d=0;for(const p of s){let g=Eu(p,l.wc(d));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),d++}return{arrayValue:{values:c}}})(r,e)}return(function(s,l){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return RI(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ft.fromDate(s);return{timestampValue:mh(l.serializer,c)}}if(s instanceof ft){const c=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:mh(l.serializer,c)}}if(s instanceof Bi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof zn)return{bytesValue:uT(l.serializer,s._byteString)};if(s instanceof yt){const c=l.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Wm(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof Hi)return(function(d,p){return{mapValue:{fields:{[kE]:{stringValue:UE},[ch]:{arrayValue:{values:d.toArray().map((y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return $m(p.serializer,y)}))}}}}}})(s,l);throw l.Sc(`Unsupported field value: ${wh(s)}`)})(r,e)}function QT(r,e){const n={};return NE(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(r,((s,l)=>{const c=Eu(l,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function KT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ft||r instanceof Bi||r instanceof zn||r instanceof yt||r instanceof zh||r instanceof Hi)}function _p(r,e,n){if(!KT(n)||!CE(n)){const s=wh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Nm(r,e,n){if((e=Ct(e))instanceof _u)return e._internalPath;if(typeof e=="string")return vp(r,e);throw vh("Field path arguments must be of type string or ",r,!1,void 0,n)}const j2=new RegExp("[~\\*/\\[\\]]");function vp(r,e,n){if(e.search(j2)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new _u(...e.split("."))._internalPath}catch{throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function vh(r,e,n,s,l){const c=s&&!s.isEmpty(),d=l!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${s}`),d&&(g+=` in document ${l}`),g+=")"),new ae(K.INVALID_ARGUMENT,p+r+g)}function YT(r,e){return r.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,s,l,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(XT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class z2 extends Eh{data(){return super.data()}}function XT(r,e){return typeof e=="string"?vp(r,e):e instanceof _u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ae(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}class B2 extends Ep{}function E0(r,e,...n){let s=[];e instanceof Ep&&s.push(e),s=s.concat(n),(function(c){const d=c.filter((g=>g instanceof bp)).length,p=c.filter((g=>g instanceof Tp)).length;if(d>1||d>0&&p>0)throw new ae(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const l of s)r=l._apply(r);return r}class Tp extends B2{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Tp(e,n,s)}_apply(e){const n=this._parse(e);return $T(e._query,n),new No(e.firestore,e.converter,vm(e._query,n))}_parse(e){const n=vu(e.firestore);return(function(c,d,p,g,y,T,C){let x;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ae(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){b0(C,T);const J=[];for(const se of C)J.push(T0(g,c,se));x={arrayValue:{values:J}}}else x=T0(g,c,C)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||b0(C,T),x=L2(p,d,C,T==="in"||T==="not-in");return Mt.create(y,T,x)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class bp extends Ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bp(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:yi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(l,c){let d=l;const p=c.getFlattenedFilters();for(const g of p)$T(d,g),d=vm(d,g)})(e._query,n),new No(e.firestore,e.converter,vm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function T0(r,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new ae(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GE(e)&&n.indexOf("/")!==-1)throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(at.fromString(n));if(!de.isDocumentKey(s))throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kv(r,new de(s))}if(n instanceof yt)return kv(r,n._key);throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wh(n)}.`)}function b0(r,e){if(!Array.isArray(r)||r.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $T(r,e){const n=(function(l,c){for(const d of l)for(const p of d.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ZT{convertValue(e,n="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return As(e,((l,c)=>{s[l]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[ch].arrayValue?.values?.map((s=>It(s.doubleValue)));return new Hi(n)}convertGeoPoint(e){return new Bi(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ih(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Wl(e));default:return null}}convertTimestamp(e){const n=gs(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=at.fromString(e);Qe(gT(s),9688,{name:e});const l=new eu(s.get(1),s.get(3)),c=new de(s.popFirst(5));return l.isEqual(n)||wr(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class H2 extends ZT{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends Eh{constructor(e,n,s,l,c,d){super(e,n,s,l,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(XT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:Pt("string",ds._jsonSchemaVersion),bundleSource:Pt("string","DocumentSnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class Wc extends ds{data(e={}){return super.data(e)}}class po{constructor(e,n,s,l){this._firestore=e,this._userDataWriter=n,this._snapshot=l,this.metadata=new uo(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Wc(this._firestore,this._userDataWriter,s.key,s,new uo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((p=>{const g=new Wc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new uo(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const g=new Wc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new uo(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,T=-1;return p.type!==0&&(y=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),T=d.indexOf(p.doc.key)),{type:F2(p.type),doc:g,oldIndex:y,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function F2(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(r){r=Bn(r,yt);const e=Bn(r.firestore,Ir);return D2(jh(e),r._key).then((n=>JT(e,r,n)))}po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:Pt("string",po._jsonSchemaVersion),bundleSource:Pt("string","QuerySnapshot"),bundleName:Pt("string"),bundle:Pt("string")};class Sp extends ZT{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Bc(r,e,n){r=Bn(r,yt);const s=Bn(r.firestore,Ir),l=Ap(r.converter,e,n);return Bh(s,[gp(vu(s),"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,rn.none())])}function im(r,e,n,...s){r=Bn(r,yt);const l=Bn(r.firestore,Ir),c=vu(l);let d;return d=typeof(e=Ct(e))=="string"||e instanceof _u?GT(c,"updateDoc",r._key,e,n,s):FT(c,"updateDoc",r._key,e),Bh(l,[d.toMutation(r._key,rn.exists(!0))])}function S0(r){return Bh(Bn(r.firestore,Ir),[new Vh(r._key,rn.none())])}function w0(r,e){const n=Bn(r.firestore,Ir),s=wn(r),l=Ap(r.converter,e);return Bh(n,[gp(vu(r.firestore),"addDoc",s._key,l,r.converter!==null,{}).toMutation(s._key,rn.exists(!1))]).then((()=>s))}function rm(r,...e){r=Ct(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||v0(e[s])||(n=e[s++]);const l={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(v0(e[s])){const g=e[s];e[s]=g.next?.bind(g),e[s+1]=g.error?.bind(g),e[s+2]=g.complete?.bind(g)}let c,d,p;if(r instanceof yt)d=Bn(r.firestore,Ir),p=Ch(r._key.path),c={next:g=>{e[s]&&e[s](JT(d,r,g))},error:e[s+1],complete:e[s+2]};else{const g=Bn(r,No);d=Bn(g.firestore,Ir),p=g._query;const y=new Sp(d);c={next:T=>{e[s]&&e[s](new po(d,y,g,T))},error:e[s+1],complete:e[s+2]},q2(r._query)}return(function(y,T,C,x){const F=new jT(x),J=new NT(T,F,C);return y.asyncQueue.enqueueAndForget((async()=>CT(await xm(y),J))),()=>{F.Nu(),y.asyncQueue.enqueueAndForget((async()=>xT(await xm(y),J)))}})(jh(d),p,l,c)}function Bh(r,e){return(function(s,l){const c=new br;return s.asyncQueue.enqueueAndForget((async()=>g2(await x2(s),l,c))),c.promise})(jh(r),e)}function JT(r,e,n){const s=n.docs.get(e._key),l=new Sp(r);return new ds(r,l,e._key,s,new uo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2={maxAttempts:5};function ql(r,e){if((r=Ct(r)).firestore!==e)throw new ae(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=vu(e)}get(e){const n=ql(e,this._firestore),s=new H2(this._firestore);return this._transaction.lookup([n._key]).then((l=>{if(!l||l.length!==1)return pe(24041);const c=l[0];if(c.isFoundDocument())return new Eh(this._firestore,s,c.key,c,n.converter);if(c.isNoDocument())return new Eh(this._firestore,s,n._key,null,n.converter);throw pe(18433,{doc:c})}))}set(e,n,s){const l=ql(e,this._firestore),c=Ap(l.converter,n,s),d=gp(this._dataReader,"Transaction.set",l._key,c,l.converter!==null,s);return this._transaction.set(l._key,d),this}update(e,n,s,...l){const c=ql(e,this._firestore);let d;return d=typeof(n=Ct(n))=="string"||n instanceof _u?GT(this._dataReader,"Transaction.update",c._key,n,s,l):FT(this._dataReader,"Transaction.update",c._key,n),this._transaction.update(c._key,d),this}delete(e){const n=ql(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2 extends Q2{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ql(e,this._firestore),s=new Sp(this._firestore);return super.get(e).then((l=>new ds(this._firestore,s,n._key,l._document,new uo(!1,!1),n.converter)))}}function Y2(r,e,n){r=Bn(r,Ir);const s={...G2,...n};return(function(c){if(c.maxAttempts<1)throw new ae(K.INVALID_ARGUMENT,"Max attempts must be at least 1")})(s),(function(c,d,p){const g=new br;return c.asyncQueue.enqueueAndForget((async()=>{const y=await N2(c);new R2(c.asyncQueue,y,p,d,g).ju()})),g.promise})(jh(r),(l=>e(new K2(r,l))),s)}function Ui(){return new yp("serverTimestamp")}(function(e,n=!0){(function(l){Ro=l})(So),go(new oa("firestore",((s,{instanceIdentifier:l,options:c})=>{const d=s.getProvider("app").getImmediate(),p=new Ir(new LR(s.getProvider("auth-internal")),new qR(d,s.getProvider("app-check-internal")),(function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eu(y.options.projectId,T)})(d,l),d);return c={useFetchStreams:n,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),cs(Av,Sv,e),cs(Av,Sv,"esm2020")})();const Rt=typeof __app_id<"u"?__app_id:"default-app-id",X2={apiKey:"AIzaSyAt5grQ4yMiIG8THJnlKImAt2j5amPcZ_s",authDomain:"my-pos-app-avanzada.firebaseapp.com",projectId:"my-pos-app-avanzada",storageBucket:"my-pos-app-avanzada.firebaseapp.com",messagingSenderId:"19454132579",appId:"1:19454132579:web:fcc31bdf2e251143269356",measurementId:"G-XR8S634QPM"},$2=typeof __firebase_config<"u"&&Object.keys(JSON.parse(__firebase_config)).length>0?JSON.parse(__firebase_config):X2;let Hc,qe,_r;const Z2=()=>{if(!Hc)try{Hc=k0($2),qe=V2(Hc),_r=MR(Hc),console.log("Firebase inicializado con éxito.")}catch(r){console.error("Error al inicializar Firebase. Asegúrate de que firebaseConfig sea válido:",r)}},J2=()=>{const[r,e]=Oe.useState(null),[n,s]=Oe.useState("invitado"),[l,c]=Oe.useState(!0),[d,p]=Oe.useState("dashboard"),[g,y]=Oe.useState("Cargando..."),[T,C]=Oe.useState([]),[x,F]=Oe.useState(""),[J,se]=Oe.useState(""),[W,Ae]=Oe.useState(""),[ye,me]=Oe.useState(""),[ze,Se]=Oe.useState(!1),[oe,V]=Oe.useState(null),[S,I]=Oe.useState([]),[O,M]=Oe.useState(null),[P,R]=Oe.useState([]),[xt,dt]=Oe.useState(""),[G,ie]=Oe.useState(null),[ce,ke]=Oe.useState(""),[N,Z]=Oe.useState("choice"),[re,ee]=Oe.useState(""),[he,Ie]=Oe.useState(""),[Te,vt]=Oe.useState(!1),[Xe,Tn]=Oe.useState(""),[_i,In]=Oe.useState(!1),[an,vi]=Oe.useState(null),[Gi,xr]=Oe.useState(!1),[ws,dn]=Oe.useState({logoUrl:"https://placehold.co/150x50/2c3e50/ffffff?text=Tu+Logo",name:"Tu Empresa POS",ruc:"0000000000000",nextInvoiceNumber:1}),[Do,Nr]=Oe.useState(!1);Oe.useEffect(()=>{if(Z2(),_r){const z=bw(_r,async ne=>{if(ne){e(ne),ne.uid==="6C1xr5iU5MSEhQcrRLpY9YmfhQv1"?s("admin"):ne.isAnonymous?s("invitado"):s("empleado");const Re=wn(qe,`artifacts/${Rt}/users/${ne.uid}/profile/info`),xe=await A0(Re);xe.exists()&&xe.data().displayName?y(xe.data().displayName):y(ne.isAnonymous?"Invitado":ne.email||`Usuario ${ne.uid.substring(0,4)}`),Z("authenticated")}else e(null),s("invitado"),y("Invitado"),Z("choice");c(!1)});return()=>z()}else c(!1),console.error("Firebase Auth no está inicializado. No se pudo configurar onAuthStateChanged.")},[qe,Rt]),Oe.useEffect(()=>{if(qe&&r){const z=Pl(qe,`artifacts/${Rt}/users/${r.uid}/products`),ne=E0(z),Re=rm(ne,xe=>{if(xe){const Et=xe.docs.map(Ne=>({id:Ne.id,...Ne.data()}));C(Et)}else console.warn("Snapshot de productos es nulo. No se pudo cargar la lista."),C([])},xe=>{console.error("Error al obtener productos:",xe)});return()=>Re()}},[qe,r,Rt]),Oe.useEffect(()=>{if(qe&&r){const z=Pl(qe,`artifacts/${Rt}/users/${r.uid}/tables`),ne=E0(z),Re=rm(ne,xe=>{if(xe){const Et=xe.docs.map(Ne=>({id:Ne.id,...Ne.data()}));I(Et.sort((Ne,ot)=>{const Ke=parseInt(Ne.name.replace("Mesa ",""),10),ct=parseInt(ot.name.replace("Mesa ",""),10);return Ke-ct}))}else console.warn("Snapshot de mesas es nulo. No se pudo cargar la lista."),I([])},xe=>{console.error("Error al obtener mesas:",xe)});return()=>Re()}},[qe,r,Rt]),Oe.useEffect(()=>{if(qe&&r){const z=wn(qe,`artifacts/${Rt}/public/settings/companyInfo/config`),ne=rm(z,Re=>{Re.exists()?dn(xe=>({...xe,...Re.data()})):Bc(z,ws,{merge:!0}).catch(xe=>console.error("Error initializing company settings:",xe))},Re=>{console.error("Error al obtener configuraciones de la empresa:",Re)});return()=>ne()}},[qe,r,Rt]);const Dr=async()=>{if(_r)try{await Aw(_r),e(null),s("invitado"),y("Invitado"),p("dashboard"),Z("choice")}catch(z){console.error("Error al cerrar sesión:",z)}},Qi=async()=>{if(_r)try{const z=await mw(_r),ne=wn(qe,`artifacts/${Rt}/users/${z.user.uid}/profile/info`);await Bc(ne,{displayName:"Invitado",createdAt:Ui()},{merge:!0})}catch(z){console.error("Error al iniciar sesión anónimamente:",z),alert("Error al iniciar sesión como invitado. Intente de nuevo.")}},Oo=async()=>{if(!re.trim()||!he.trim()||!_r){alert("Por favor, introduce el email y la contraseña del administrador.");return}try{const z=await vw(_r,re,he),ne=wn(qe,`artifacts/${Rt}/users/${z.user.uid}/profile/info`),Re=await A0(ne);(!Re.exists()||!Re.data().displayName)&&await Bc(ne,{displayName:"Administrador",createdAt:Ui()},{merge:!0}),ee(""),Ie("")}catch(z){console.error("Error al iniciar sesión como administrador:",z),alert("Error al iniciar sesión como administrador. Verifique sus credenciales.")}},Or=async()=>{if(!Xe.trim()||!r||!qe){alert("El nombre a mostrar no puede estar vacío.");return}try{const z=wn(qe,`artifacts/${Rt}/users/${r.uid}/profile/info`);await Bc(z,{displayName:Xe.trim(),lastUpdate:Ui()},{merge:!0}),y(Xe.trim()),vt(!1),Tn(""),alert("Nombre de usuario actualizado con éxito!")}catch(z){console.error("Error al actualizar el nombre a mostrar:",z),alert("Error al actualizar el nombre de usuario. Inténtalo de nuevo.")}},Rs=async()=>{if(!x||!J||!ze&&!W||!r||!qe){alert('Por favor, completa todos los campos requeridos (Nombre, Precio, Stock o "Facturar sin stock").');return}try{const z=Pl(qe,`artifacts/${Rt}/users/${r.uid}/products`);await w0(z,{name:x,price:parseFloat(J),stock:ze?-1:parseInt(W,10),image:ye,noStock:ze,createdAt:Ui()}),F(""),se(""),Ae(""),me(""),Se(!1)}catch(z){console.error("Error al añadir producto:",z),alert("Error al añadir el producto. Verifique la consola para más detalles.")}},ma=async z=>{if(!(!oe||!r||!qe)){if(!oe.name||!oe.price||!oe.noStock&&!oe.stock){alert('Por favor, completa todos los campos requeridos (Nombre, Precio, Stock o "Facturar sin stock").');return}try{const ne=wn(qe,`artifacts/${Rt}/users/${r.uid}/products`,z);await im(ne,{name:oe.name,price:parseFloat(oe.price),stock:oe.noStock?-1:parseInt(oe.stock,10),image:oe.image,noStock:oe.noStock}),V(null)}catch(ne){console.error("Error al actualizar producto:",ne),alert("Error al actualizar el producto. Verifique la consola para más detalles.")}}},mt=async z=>{if(!(!r||!qe))try{const ne=wn(qe,`artifacts/${Rt}/users/${r.uid}/products`,z);await S0(ne)}catch(ne){console.error("Error al eliminar producto:",ne),alert("Error al eliminar el producto. Verifique la consola para más detalles.")}},$e=async()=>{if(!r||!qe)return;const z=`Mesa ${S.length+1}`;try{const ne=Pl(qe,`artifacts/${Rt}/users/${r.uid}/tables`);await w0(ne,{name:z,status:"free",order:[],orderTotal:0,createdAt:Ui()})}catch(ne){console.error("Error al añadir mesa:",ne),alert("Error al añadir la mesa. Verifique la consola para más detalles.")}},mn=async z=>{if(!(!r||!qe||!window.confirm("¿Estás seguro de que quieres eliminar esta mesa? Esto borrará también cualquier pedido asociado.")))try{const Re=wn(qe,`artifacts/${Rt}/users/${r.uid}/tables`,z);await S0(Re)}catch(Re){console.error("Error al eliminar mesa:",Re),alert("Error al eliminar la mesa. Verifique la consola para más detalles.")}},qt=z=>{ie(z.id),ke(z.name)},pa=z=>{ke(z.target.value)},Vo=async z=>{if(!ce.trim()||!r||!qe){alert("El nombre de la mesa no puede estar vacío.");return}try{const ne=wn(qe,`artifacts/${Rt}/users/${r.uid}/tables`,z);await im(ne,{name:ce.trim(),lastUpdate:Ui()}),alert(`Mesa renombrada a "${ce.trim()}" con éxito.`),ie(null),ke("")}catch(ne){console.error("Error al renombrar mesa:",ne),alert("Error al renombrar la mesa. Verifique la consola para más detalles.")}},Ki=()=>{ie(null),ke("")},Yi=z=>{R(ne=>ne.find(xe=>xe.product.id===z.id)?ne.map(xe=>xe.product.id===z.id?{...xe,quantity:xe.quantity+1}:xe):[...ne,{product:z,quantity:1}])},Ei=(z,ne)=>{R(Re=>Re.map(Et=>Et.product.id===z?{...Et,quantity:Et.quantity+ne}:Et).filter(Et=>Et.quantity>0))},Cn=z=>{R(ne=>ne.filter(Re=>Re.product.id!==z))},Ti=()=>P.reduce((z,ne)=>z+ne.product.price*ne.quantity,0),Xi=async()=>{if(P.length===0){alert("El pedido está vacío. Añade productos antes de guardar.");return}if(!O){alert("Por favor, selecciona una mesa para este pedido.");return}if(window.confirm(`Confirmar pedido para ${O.name}:

Total: $${Ti().toFixed(2)}

¿Deseas guardar este pedido como "Pendiente de Pagar"?`)&&qe&&r)try{const ne=wn(qe,`artifacts/${Rt}/users/${r.uid}/tables`,O.id);await im(ne,{status:"pendiente-pago",order:P.map(Re=>({productId:Re.product.id,name:Re.product.name,price:Re.product.price,quantity:Re.quantity,image:Re.product.image||""})),orderTotal:Ti(),lastUpdate:Ui()}),alert(`Pedido para ${O.name} guardado como Pendiente de Pagar!`),R([]),M(null),p("tableOverview")}catch(ne){console.error("Error al guardar el pedido:",ne),alert("Error al guardar el pedido. Verifique la consola para más detalles.")}},Is=z=>{vi(z),xr(!1),In(!0)},Cs=async(z,ne)=>{if(!(!an||!qe||!r))try{const Re=wn(qe,`artifacts/${Rt}/users/${r.uid}/tables`,an.id),xe=wn(qe,`artifacts/${Rt}/public/settings/companyInfo/config`),Et=Pl(qe,`artifacts/${Rt}/public/salesRecords`);await Y2(qe,async Ne=>{const ot=await Ne.get(xe),Ke=ot.exists()&&ot.data().nextInvoiceNumber?ot.data().nextInvoiceNumber:1,ct=wn(Et);Ne.set(ct,{type:z,...ne,date:Ui(),tableId:an.id,tableName:an.name,invoiceNumber:Ke,processedByUserId:r.uid,processedByDisplayName:g,orderItems:an.order.map(pn=>({name:pn.product.name,price:pn.product.price,quantity:pn.quantity})),originalOrderTotal:an.orderTotal}),Ne.update(Re,{status:"free",order:[],orderTotal:0,lastUpdate:Ui()}),Ne.update(xe,{nextInvoiceNumber:Ke+1,lastUpdate:Ui()}),dn(pn=>({...pn,nextInvoiceNumber:Ke+1}))}),alert(`Pago de ${an.name} completado. Mesa ahora Libre. Venta registrada.`),In(!1),vi(null),p("tableOverview")}catch(Re){console.error("Error al procesar el pago y registrar la venta:",Re),alert("Error al procesar el pago. Verifique la consola para más detalles.")}},xs=z=>{M(z),z.status==="pendiente-pago"&&z.order?R(z.order.map(ne=>({product:T.find(Re=>Re.id===ne.productId)||{id:ne.productId,name:ne.name,price:ne.price,image:ne.image||""},quantity:ne.quantity}))):R([]),p("orderReception")},Fn=T.filter(z=>z.name.toLowerCase().includes(xt.toLowerCase())),ui=IA.memo(({currentTableForPayment:z,isGeneratingTicket:ne,setIsGeneratingTicket:Re,displayName:xe,companySettings:Et,handleConfirmPaymentAndFreeTable:Ne,setShowPaymentDetailsModal:ot})=>{if(!z)return null;const[Ke,ct]=Oe.useState("summary"),[pn,Mo]=Oe.useState(""),[ci,Ds]=Oe.useState(""),[Qn,bi]=Oe.useState(""),[Kn,xn]=Oe.useState(""),gn=z.orderTotal||0,ht=gn*.1,$t=gn+ht,Yn=parseFloat(pn),Bt=Yn-$t,Nn=$t-Yn,ga=Yn>=$t,Xn=parseFloat(ci),$i=!isNaN(Xn)&&Xn>0,Ai=parseFloat(Kn),Si=Qn.trim()!==""&&!isNaN(Ai)&&Ai>0,$n=()=>{Re(!0),setTimeout(()=>{window.print(),Re(!1)},500)},At=async tt=>{let Dn={};switch(tt){case"cash":Dn={totalPaid:$t,amountReceived:Yn,changeGiven:Bt>0?Bt:0,amountPending:Nn>0?Nn:0,paymentDescription:`Pago en Efectivo. Recibido: $${Yn.toFixed(2)}, Vuelto: $${Bt.toFixed(2)}`};break;case"card":Dn={totalPaid:Xn,amountReceived:Xn,changeGiven:0,amountPending:$t-Xn>0?$t-Xn:0,paymentDescription:`Pago con Tarjeta. Monto: $${Xn.toFixed(2)}`};break;case"credit":Dn={totalPaid:Ai,amountReceived:0,changeGiven:0,amountPending:$t-Ai,customerName:Qn.trim(),paymentDescription:`Venta al Crédito a ${Qn.trim()}. Monto: $${Ai.toFixed(2)}`};break}await Ne(tt,Dn)};return A.jsx("div",{className:"modal-overlay",children:A.jsxs("div",{className:"modal-content payment-details-modal",children:[A.jsxs("h3",{children:["Detalle del Pedido para ",z.name]}),ne?A.jsxs("div",{className:"ticket-print-preview printable-area",children:[A.jsxs("div",{className:"text-center mb-4",children:[Et.logoUrl&&A.jsx("img",{src:Et.logoUrl,alt:"Logo Empresa",className:"company-logo mx-auto mb-2"}),A.jsx("h4",{className:"text-xl font-bold",children:Et.name}),A.jsxs("p",{className:"text-sm",children:["Factura Nº: ",Et.nextInvoiceNumber-1]})]}),A.jsx("h5",{className:"text-lg font-semibold mb-2",children:"Detalle del Pedido"}),A.jsx("ul",{className:"ticket-items-list mb-2",children:z.order&&z.order.map((tt,Dn)=>A.jsxs("li",{className:"flex justify-between text-sm mb-1",children:[A.jsxs("span",{children:[tt.name," (x",tt.quantity,")"]}),A.jsxs("span",{children:["$",(tt.price*tt.quantity).toFixed(2)]})]},Dn))}),A.jsxs("div",{className:"ticket-summary",children:[A.jsxs("div",{className:"flex justify-between text-sm font-medium mb-1",children:[A.jsx("span",{children:"Subtotal:"}),A.jsxs("span",{children:["$",gn.toFixed(2)]})]}),A.jsxs("div",{className:"flex justify-between text-sm font-medium mb-1",children:[A.jsx("span",{children:"Propina Voluntaria (10%):"}),A.jsxs("span",{children:["$",ht.toFixed(2)]})]}),A.jsxs("div",{className:"flex justify-between text-lg font-bold mt-2 border-t pt-2",children:[A.jsx("span",{children:"Total:"}),A.jsxs("span",{children:["$",$t.toFixed(2)]})]})]}),A.jsxs("div",{className:"mt-4 text-center text-sm",children:[A.jsxs("p",{children:["Mesa: ",z.name]}),A.jsxs("p",{children:["Mesero: ",xe]}),A.jsx("p",{className:"mt-2 text-md font-semibold",children:'"Gracias por su visita, te esperamos nuevamente"'})]}),A.jsx("div",{className:"flex justify-center mt-4 hide-on-print",children:A.jsx("button",{className:"secondary-button",onClick:()=>Re(!1),children:"Cerrar Vista Previa"})})]}):A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"order-details-summary",children:[A.jsx("h4",{children:"Items del Pedido:"}),A.jsx("ul",{className:"order-summary-items-list",children:z.order&&z.order.map((tt,Dn)=>A.jsxs("li",{children:[A.jsxs("span",{children:[tt.name," (x",tt.quantity,")"]}),A.jsxs("span",{children:["$",(tt.price*tt.quantity).toFixed(2)]})]},Dn))}),A.jsxs("div",{className:"summary-line",children:[A.jsx("span",{children:"Subtotal:"}),A.jsxs("span",{children:["$",gn.toFixed(2)]})]}),A.jsxs("div",{className:"summary-line tip-line",children:[A.jsx("span",{children:"Propina Voluntaria (10%):"}),A.jsxs("span",{children:["$",ht.toFixed(2)]})]}),A.jsxs("div",{className:"summary-line total-line",children:[A.jsx("span",{children:"Total a Pagar:"}),A.jsxs("span",{children:["$",$t.toFixed(2)]})]})]}),Ke==="summary"&&A.jsxs("div",{className:"modal-buttons payment-buttons",children:[A.jsx("button",{className:"primary-button",onClick:()=>ct("options"),children:"Facturar"}),A.jsx("button",{className:"secondary-button",onClick:()=>ot(!1),children:"Cancelar"})]}),Ke==="options"&&A.jsxs("div",{className:"modal-buttons payment-buttons flex-col",children:[A.jsx("button",{className:"primary-button",onClick:()=>ct("cash"),children:"Efectivo"}),A.jsx("button",{className:"primary-button",onClick:()=>{Ds($t.toFixed(2)),ct("card")},children:"Tarjetas de Crédito/Débito"}),A.jsx("button",{className:"primary-button",onClick:()=>{xn($t.toFixed(2)),ct("credit")},children:"Ventas al Crédito"}),A.jsx("button",{className:"secondary-button",onClick:()=>ct("summary"),children:"Volver"})]}),Ke==="cash"&&A.jsxs("div",{className:"payment-method-section",children:[A.jsx("h4",{className:"payment-method-title",children:"Pago en Efectivo"}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"cashReceived",className:"form-label",children:"Valor Recibido ($)"}),A.jsx("input",{id:"cashReceived",type:"number",step:"0.01",className:"form-input",value:pn,onChange:tt=>Mo(tt.target.value),placeholder:"Ingrese el monto recibido"})]}),pn!==""&&A.jsx("p",{style:{color:Bt>=0?"green":"red",fontWeight:"bold"},children:Bt>=0?`Vuelto a entregar: $${Bt.toFixed(2)}`:`Pendiente de pagar: $${Math.abs(Nn).toFixed(2)}`}),A.jsxs("div",{className:"modal-buttons",children:[A.jsx("button",{className:"primary-button",onClick:()=>At("cash"),disabled:!ga,children:"Aplicar Pago"}),A.jsx("button",{className:"secondary-button",onClick:()=>ct("options"),children:"Volver"})]})]}),Ke==="card"&&A.jsxs("div",{className:"payment-method-section",children:[A.jsx("h4",{className:"payment-method-title",children:"Pago con Tarjeta"}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"cardAmount",className:"form-label",children:"Monto con Tarjeta ($)"}),A.jsx("input",{id:"cardAmount",type:"number",step:"0.01",className:"form-input",value:ci,onChange:tt=>Ds(tt.target.value),placeholder:"Ingrese el monto a pagar con tarjeta"})]}),A.jsxs("div",{className:"modal-buttons",children:[A.jsx("button",{className:"primary-button",onClick:()=>At("card"),disabled:!$i,children:"Aplicar Pago"}),A.jsx("button",{className:"secondary-button",onClick:()=>ct("options"),children:"Volver"})]})]}),Ke==="credit"&&A.jsxs("div",{className:"payment-method-section",children:[A.jsx("h4",{className:"payment-method-title",children:"Ventas al Crédito"}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"creditCustomerName",className:"form-label",children:"Nombre del Cliente"}),A.jsx("input",{id:"creditCustomerName",type:"text",className:"form-input",value:Qn,onChange:tt=>bi(tt.target.value),placeholder:"Ingrese el nombre del cliente"})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"creditAmount",className:"form-label",children:"Monto al Crédito ($)"}),A.jsx("input",{id:"creditAmount",type:"number",step:"0.01",className:"form-input",value:Kn,onChange:tt=>xn(tt.target.value),placeholder:"Ingrese el monto a aplicar al crédito"})]}),A.jsxs("div",{className:"modal-buttons",children:[A.jsx("button",{className:"primary-button",onClick:()=>At("credit"),disabled:!Si,children:"Aplicar Pago"}),A.jsx("button",{className:"secondary-button",onClick:()=>ct("options"),children:"Volver"})]})]}),Ke==="summary"&&A.jsx("div",{className:"flex justify-center mt-4",children:A.jsxs("button",{className:"secondary-button",onClick:$n,children:[A.jsx("i",{className:"fas fa-print mr-2"})," Mostrar Ticket"]})})]})]})})}),Ns=()=>A.jsx("div",{className:"modal-overlay",children:A.jsxs("div",{className:"modal-content rename-management-modal",children:[A.jsx("h3",{children:"Gestionar Nombres de Mesas"}),S.length===0?A.jsx("p",{children:"No hay mesas para renombrar."}):A.jsx("ul",{className:"table-rename-list",children:S.map(z=>A.jsx("li",{className:"flex justify-between items-center py-2 border-b border-gray-200",children:G===z.id?A.jsxs("div",{className:"flex-grow flex items-center gap-2",children:[A.jsx("input",{type:"text",value:ce,onChange:pa,className:"form-input flex-grow"}),A.jsx("button",{className:"primary-button small-button",onClick:()=>Vo(z.id),children:"Guardar"}),A.jsx("button",{className:"secondary-button small-button",onClick:Ki,children:"Cancelar"})]}):A.jsxs("div",{className:"flex justify-between items-center flex-grow",children:[A.jsx("span",{children:z.name}),A.jsx("button",{className:"edit-button small-button",onClick:()=>qt(z),children:"Editar"})]})},z.id))}),A.jsx("div",{className:"modal-buttons mt-4",children:A.jsx("button",{className:"secondary-button",onClick:()=>Nr(!1),children:"Cerrar"})})]})}),Gn=()=>{if(l)return A.jsx("div",{className:"loading-container",children:A.jsx("p",{children:"Cargando aplicación..."})});if(!r)switch(N){case"choice":return A.jsxs("div",{className:"auth-choice-container",children:[A.jsx("h2",{children:"Bienvenido a DarkPedidos POS"}),A.jsx("p",{children:"¿Cómo desea continuar?"}),A.jsx("button",{className:"primary-button",onClick:Qi,children:"Continuar como Invitado"}),A.jsx("button",{className:"secondary-button",onClick:()=>Z("admin_login"),children:"Iniciar Sesión como Administrador"})]});case"admin_login":return A.jsxs("div",{className:"admin-login-container",children:[A.jsx("h2",{children:"Iniciar Sesión Administrador"}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"adminEmail",className:"form-label",children:"Email"}),A.jsx("input",{id:"adminEmail",type:"email",className:"form-input",value:re,onChange:z=>ee(z.target.value),placeholder:"admin@example.com"})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"adminPassword",className:"form-label",children:"Contraseña"}),A.jsx("input",{id:"adminPassword",type:"password",className:"form-input",value:he,onChange:z=>Ie(z.target.value),placeholder:"********"})]}),A.jsx("button",{className:"primary-button",onClick:Oo,children:"Iniciar Sesión"}),A.jsx("button",{className:"secondary-button",onClick:()=>Z("choice"),style:{marginTop:"10px"},children:"Volver"})]});default:return A.jsxs("div",{className:"error-container",children:[A.jsx("h2",{children:"Acceso Requerido"}),A.jsx("p",{children:"No se pudo autenticar al usuario. Intente recargar la página o elija una opción."})]})}switch(r.uid,d){case"dashboard":return A.jsxs("div",{className:"page-content",children:[A.jsx("h2",{className:"page-title",children:"Dashboard"}),A.jsxs("div",{className:"dashboard-grid",children:[A.jsxs("div",{className:"dashboard-card green",children:[A.jsx("h3",{children:"Visualización de Mesas"}),A.jsx("p",{children:"Consulta el estado de las mesas y su ocupación."}),A.jsx("button",{className:"dashboard-card-button",onClick:()=>p("tableOverview"),children:"Ir a Mesas"})]}),A.jsxs("div",{className:"dashboard-card purple",children:[A.jsx("h3",{children:"Gestión de Productos"}),A.jsx("p",{children:"Administra tu inventario y productos disponibles."}),A.jsx("button",{className:"dashboard-card-button",onClick:()=>p("productManagement"),children:"Ir a Productos"})]}),A.jsxs("div",{className:"dashboard-card yellow",children:[A.jsx("h3",{children:"Reportes de Ventas"}),A.jsx("p",{children:"Análisis detallado de tus ventas."})]}),A.jsxs("div",{className:"dashboard-card red",children:[A.jsx("h3",{children:"Contabilidad y Nómina"}),A.jsx("p",{children:"Control financiero y de personal."})]}),A.jsxs("div",{className:"dashboard-card teal",children:[A.jsx("h3",{children:"Facturación y Pagos"}),A.jsx("p",{children:"Procesa pagos y genera facturas."})]})]})]});case"productManagement":return n!=="admin"?A.jsxs("div",{className:"page-content",children:[A.jsx("h2",{className:"page-title",children:"Acceso Denegado"}),A.jsx("p",{children:"No tienes permiso para acceder a esta sección."})]}):A.jsxs("div",{className:"page-content",children:[A.jsx("h2",{className:"page-title",children:"Gestión de Productos"}),A.jsxs("div",{className:"add-product-form",children:[A.jsx("h3",{children:oe?"Editar Producto":"Añadir Nuevo Producto"}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"productName",className:"form-label",children:"Nombre del Producto"}),A.jsx("input",{id:"productName",type:"text",className:"form-input",placeholder:"Nombre del Producto",value:oe?oe.name:x,onChange:z=>oe?V({...oe,name:z.target.value}):F(z.target.value)})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"productPrice",className:"form-label",children:"Precio"}),A.jsx("input",{id:"productPrice",type:"number",className:"form-input",placeholder:"Precio",value:oe?oe.price:J,onChange:z=>oe?V({...oe,price:z.target.value}):se(z.target.value)})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"productImage",className:"form-label",children:"URL de la Imagen"}),A.jsx("input",{id:"productImage",type:"text",className:"form-input",placeholder:"URL de la imagen del producto (opcional)",value:oe?oe.image:ye,onChange:z=>oe?V({...oe,image:z.target.value}):me(z.target.value)})]}),A.jsxs("div",{className:"form-group flex items-center justify-between",children:[" ",A.jsxs("div",{className:"flex items-center",children:[A.jsx("input",{id:"noStockCheckbox",type:"checkbox",className:"form-checkbox",checked:oe?oe.noStock:ze,onChange:z=>oe?V({...oe,noStock:z.target.checked}):Se(z.target.checked)}),A.jsx("label",{htmlFor:"noStockCheckbox",className:"form-label",style:{marginBottom:0,marginLeft:"8px"},children:"Facturar sin Stock"})]})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"productStock",className:"form-label",children:"Stock"}),A.jsx("input",{id:"productStock",type:"number",className:"form-input",placeholder:"Stock",value:oe?oe.stock===-1?"":oe.stock:W,onChange:z=>oe?V({...oe,stock:z.target.value}):Ae(z.target.value),disabled:oe?oe.noStock:ze})]}),A.jsxs("div",{className:"form-group",children:[A.jsx("button",{className:"primary-button",onClick:oe?()=>ma(oe.id):Rs,children:oe?"Guardar Cambios":"Añadir Producto"}),oe&&A.jsx("button",{className:"secondary-button",style:{marginLeft:"10px"},onClick:()=>V(null),children:"Cancelar"})]})]}),A.jsx("h3",{children:"Productos en Inventario"}),T.length===0?A.jsx("p",{children:"No hay productos en el inventario."}):A.jsx("div",{className:"product-grid",children:T.map(z=>A.jsxs("div",{className:"product-item",children:[z.image&&A.jsx("img",{src:z.image,alt:z.name,className:"product-image",onError:ne=>{ne.target.onerror=null,ne.target.src=`https://placehold.co/120x120/CCCCCC/666666?text=${z.name.substring(0,4)}`}}),!z.image&&A.jsx("img",{src:`https://placehold.co/120x120/CCCCCC/666666?text=${z.name.substring(0,4)}`,alt:z.name,className:"product-image"}),A.jsx("h3",{children:z.name}),A.jsxs("p",{children:["Precio: ",A.jsxs("span",{className:"price",children:["$",z.price.toFixed(2)]})]}),A.jsxs("p",{children:["Stock: ",z.noStock?"Sin control de stock":z.stock]}),A.jsxs("div",{className:"product-actions",children:[A.jsx("button",{className:"edit-button",onClick:()=>V(z),children:"Editar"}),A.jsx("button",{className:"delete-button",onClick:()=>mt(z.id),children:"Eliminar"})]})]},z.id))})]});case"orderReception":return A.jsxs("div",{className:"page-content",children:[A.jsx("h2",{className:"page-title",children:"Recepción de Pedidos"}),A.jsxs("div",{className:"order-reception-layout",children:[A.jsxs("div",{className:"product-selection-panel",children:[A.jsx("h3",{children:"Seleccionar Productos"}),A.jsx("input",{type:"text",className:"product-search",placeholder:"Buscar producto...",value:xt,onChange:z=>dt(z.target.value)}),A.jsx("div",{className:"order-product-list",children:Fn.length===0?A.jsx("p",{children:"No se encontraron productos."}):Fn.map(z=>A.jsxs("div",{className:`order-product-card ${P.some(ne=>ne.product.id===z.id)?"selected":""}`,onClick:()=>Yi(z),children:[A.jsx("img",{src:z.image||`https://placehold.co/100x100/CCCCCC/666666?text=${z.name.substring(0,4)}`,alt:z.name,onError:ne=>{ne.target.onerror=null,ne.target.src=`https://placehold.co/100x100/CCCCCC/666666?text=${z.name.substring(0,4)}`}}),A.jsx("h4",{children:z.name}),A.jsxs("p",{className:"price",children:["$",z.price.toFixed(2)]})]},z.id))})]}),A.jsxs("div",{className:"order-summary-panel",children:[A.jsx("h3",{children:"Resumen del Pedido"}),A.jsx("div",{className:"selected-table-info",children:O&&A.jsxs("p",{children:["Mesa seleccionada: ",A.jsx("strong",{children:O.name})]})}),A.jsxs("div",{className:"order-items-section",children:[" ",A.jsx("ul",{className:"order-items-list",children:P.length===0?A.jsx("li",{children:"El pedido está vacío."}):P.map(z=>A.jsxs("li",{className:"order-item",children:[A.jsx("div",{className:"order-item-details",children:A.jsxs("span",{className:"order-item-name-summary",children:[z.product.name," (x",z.quantity,")"]})}),A.jsxs("div",{className:"order-item-actions-group",children:[" ",A.jsxs("span",{className:"order-item-total-price",children:["$",(z.product.price*z.quantity).toFixed(2)]}),A.jsx("button",{className:"quantity-button",onClick:()=>Ei(z.product.id,-1),children:"-"}),A.jsx("button",{className:"quantity-button",onClick:()=>Ei(z.product.id,1),children:"+"}),A.jsxs("button",{className:"remove-item-button",onClick:()=>Cn(z.product.id),children:[A.jsx("i",{className:"fas fa-trash-alt"})," "]})]})]},z.product.id))})]})," ",A.jsxs("div",{className:"order-summary-total",children:["Total: $",Ti().toFixed(2)]}),A.jsx("button",{className:"checkout-order-button",onClick:Xi,children:"Guardar Pedido"})]})]})]});case"tableOverview":return A.jsxs("div",{className:"page-content",children:[A.jsx("h2",{className:"page-title",children:"Visualización de Mesas"}),A.jsxs("div",{className:"table-actions-container",children:[A.jsx("button",{className:"primary-button",onClick:$e,children:"Añadir Mesa"}),A.jsx("button",{className:"secondary-button",onClick:()=>Nr(!0),children:"Renombrar Mesas"}),S.length>0&&n==="admin"&&A.jsx("button",{className:"delete-button",onClick:()=>mn(S[S.length-1].id),children:"Eliminar Última Mesa"})]}),S.length===0?A.jsx("p",{style:{textAlign:"center",marginTop:"20px",fontSize:"1.1em",color:"#555"},children:"No hay mesas. Añade una mesa para empezar."}):A.jsx("div",{className:"tables-grid",children:S.map(z=>A.jsxs("div",{className:`table-card ${z.status} ${O&&O.id===z.id?"selected":""}`,children:[A.jsx("h3",{children:z.name}),A.jsxs("p",{children:["Estado: ",z.status==="free"?"Libre":"Pendiente de Pagar",A.jsx("span",{className:`status-indicator ${z.status}`})]}),z.status==="pendiente-pago"&&z.orderTotal>0&&A.jsxs(A.Fragment,{children:[A.jsxs("p",{className:"order-total-display",children:["Total: $",z.orderTotal.toFixed(2)]}),A.jsx("button",{className:"complete-payment-button",onClick:ne=>{ne.stopPropagation(),Is(z)},children:"Facturar"})]}),A.jsx("button",{className:"add-order-button",onClick:ne=>{ne.stopPropagation(),xs(z)},children:"Agregar Pedido"})]},z.id))})]});default:return A.jsxs("div",{className:"page-content",children:[A.jsx("h2",{className:"page-title",children:"Página No Encontrada"}),A.jsx("p",{children:"La página que intentas acceder no existe."})]})}};return A.jsxs("div",{children:[A.jsx("style",{children:`
                    /* --- Font Awesome for icons --- */
                    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
                    /* --- Fuentes y Estilos Globales --- */
                    body {
                        font-family: 'Inter', sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f0f2f5; /* Fondo general más suave */
                        color: #333;
                        line-height: 1.6;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                    }

                    .container {
                        max-width: 1200px;
                        margin: 20px auto;
                        padding: 0 15px;
                        flex-grow: 1;
                        width: 100%; /* Asegura que ocupe todo el ancho disponible */
                        box-sizing: border-box; /* Incluye padding y border en el ancho total */
                    }

                    /* --- Header --- */
                    header {
                        background-color: #2c3e50; /* Azul oscuro */
                        color: white;
                        padding: 15px 0;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        width: 100%; /* El header ocupa todo el ancho de la pantalla */
                    }

                    .header-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 15px;
                        width: 100%; /* Asegura que el contenido del header respete el ancho del contenedor principal */
                        box-sizing: border-box; /* Incluye padding en el ancho total */
                    }

                    .header-title {
                        margin: 0;
                        font-size: 2.2em;
                        font-weight: 700;
                    }

                    .nav-menu {
                        display: flex;
                        gap: 25px;
                        align-items: center;
                    }

                    .nav-button {
                        background: none;
                        border: none;
                        color: white;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1.05em;
                        font-weight: 500;
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }

                    .nav-button:hover {
                        background-color: #34495e; /* Un tono más claro del azul oscuro */
                        color: #ecf0f1;
                    }

                    .nav-button.active {
                        background-color: #3498db; /* Azul de énfasis */
                        font-weight: 600;
                    }

                    .user-info {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        background-color: #34495e; /* Gris más oscuro para info de usuario */
                        border-radius: 20px;
                        padding: 5px 10px; /* Reducir padding */
                        font-size: 0.75em; /* Reducir tamaño de fuente */
                        color: #ecf0f1;
                    }

                    .user-info span:first-child {
                        color: #bdc3c7;
                    }

                    .user-info span:last-child {
                        font-weight: 600;
                    }

                    .edit-profile-button {
                        background-color: #f39c12; /* Naranja para editar perfil */
                        color: white;
                        border: none;
                        padding: 5px 10px;
                        border-radius: 15px;
                        cursor: pointer;
                        font-size: 0.75em; /* Tamaño de fuente más pequeño */
                        font-weight: 500;
                        transition: background-color 0.3s ease;
                    }
                    .edit-profile-button:hover {
                        background-color: #e67e22;
                    }

                    .logout-button {
                        background-color: #e74c3c; /* Rojo para cerrar sesión */
                        color: white;
                        padding: 8px 15px;
                        border-radius: 20px;
                        font-weight: 600;
                        transition: background-color 0.3s ease, box-shadow 0.3s ease;
                        border: none;
                        cursor: pointer;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                        width: auto; /* Ajustar el ancho para que no ocupe todo el marco */
                        min-width: 120px; /* Asegurar un ancho mínimo */
                        text-align: center;
                    }

                    .logout-button:hover {
                        background-color: #c0392b;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    }

                    /* --- Loader y Error --- */
                    .loading-container, .error-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: calc(100vh - 100px); /* Ajusta por la altura del header/footer */
                        font-size: 1.5em;
                        color: #555;
                        text-align: center;
                    }

                    .error-container h2 {
                        color: #e74c3c;
                    }

                    /* --- Layout de la Página --- */
                    .page-content {
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                        margin-bottom: 20px;
                    }

                    .page-title {
                        font-size: 2em;
                        font-weight: 700;
                        color: #2c3e50;
                        margin-bottom: 25px;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #ecf0f1;
                    }

                    /* --- Dashboard --- */
                    .dashboard-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 25px;
                    }

                    .dashboard-card {
                        padding: 25px;
                        border-radius: 10px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                        color: white;
                        transition: transform 0.3s ease, box-shadow 0 3s ease;
                    }

                    .dashboard-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                    }

                    .dashboard-card.blue { background-color: #3498db; }
                    .dashboard-card.green { background-color: #2ecc71; }
                    .dashboard-card.purple { background-color: #9b59b6; }
                    .dashboard-card.yellow { background-color: #f1c40f; }
                    .dashboard-card.red { background-color: #e74c3c; }
                    .dashboard-card.teal { background-color: #1abc9c; }

                    .dashboard-card h3 {
                        margin-top: 0;
                        font-size: 1.5em;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }

                    .dashboard-card p {
                        font-size: 1em;
                        margin-bottom: 15px;
                    }

                    .dashboard-card-button {
                        background-color: rgba(255, 255, 255, 0.2);
                        border: 1px solid rgba(255, 255, 255, 0.5);
                        color: white;
                        padding: 10px 20px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: background-color 0.3s ease, border-color 0.3s ease;
                    }

                    .dashboard-card-button:hover {
                        background-color: rgba(255, 255, 255, 0.4);
                        border-color: white;
                    }

                    .coming-soon-text {
                        font-size: 0.9em;
                        opacity: 0.8;
                        margin-top: 10px;
                    }

                    /* --- Formularios y Controles (General) --- */
                    .form-group {
                        margin-bottom: 15px;
                    }

                    .form-label {
                        display: block;
                        margin-bottom: 5px;
                        font-weight: 600;
                        color: #555;
                    }

                    .form-input, .form-select {
                        width: calc(100% - 22px); /* Ajusta por padding y border */
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 1em;
                        transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    }

                    .form-input:focus, .form-select:focus {
                        border-color: #3498db;
                        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
                        outline: none;
                    }
                    /* Checkbox para facturar sin stock */
                    .form-checkbox {
                        width: 18px;
                        height: 18px;
                        margin-right: 5px;
                        border-radius: 3px;
                        border: 1px solid #ccc;
                        cursor: pointer;
                        vertical-align: middle;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        outline: none;
                        transition: background-color 0.2s ease, border-color 0.2s ease;
                    }

                    .form-checkbox:checked {
                        background-color: #3498db;
                        border-color: #3498db;
                    }
                     .form-checkbox:focus {
                        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
                     }


                    .primary-button {
                        background-color: #3498db;
                        color: white;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1em;
                        font-weight: 600;
                        transition: background-color 0.3s ease, transform 0.2s ease;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                    .primary-button:hover {
                        background-color: #2980b9;
                        transform: translateY(-1px);
                    }

                    .secondary-button {
                        background-color: #95a5a6;
                        color: white;
                        padding: 8px 15px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 0.9em;
                        transition: background-color 0.3s ease;
                    }

                    .secondary-button:hover {
                        background-color: #7f8c8d;
                    }

                    /* --- Product Management --- */
                    .product-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 20px;
                        margin-top: 20px;
                    }

                    .product-item {
                        background-color: #fcfcfc;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 15px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                        display: flex;
                        flex-direction: column;
                        align-items: center; /* Centrar contenido */
                        text-align: center;
                    }

                    .product-image {
                        width: 120px; /* Tamaño mediano ajustado */
                        height: 120px; /* Tamaño mediano ajustado */
                        object-fit: cover;
                        border-radius: 4px;
                        margin-bottom: 10px;
                        border: 1px solid #eee;
                    }

                    .product-item h3 {
                        margin-top: 0;
                        color: #3498db;
                        font-size: 1.2em;
                        font-weight: 600;
                    }

                    .product-item p {
                        margin: 5px 0;
                        font-size: 0.95em;
                        color: #555;
                    }

                    .product-item .price {
                        font-weight: 700;
                        color: #2ecc71;
                        font-size: 1.1em;
                    }

                    .product-actions {
                        margin-top: 15px;
                        display: flex;
                        gap: 10px;
                        justify-content: flex-end;
                    }

                    .edit-button {
                        background-color: #f39c12; /* Naranja */
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .edit-button:hover {
                        background-color: #e67e22;
                    }

                    .delete-button {
                        background-color: #e74c3c; /* Rojo */
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .delete-button:hover {
                        background-color: #c0392b;
                    }

                    .add-product-form {
                        background-color: #f9f9f9;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 20px;
                        margin-bottom: 30px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }

                    .add-product-form h3 {
                        font-size: 1.5em;
                        color: #2c3e50;
                        margin-top: 0;
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #e0e0e0;
                    }

                    /* --- Order Reception --- */
                    .order-reception-layout {
                        display: flex;
                        gap: 20px;
                        flex-wrap: wrap; /* Para responsividad */
                    }

                    .product-selection-panel {
                        flex: 2;
                        min-width: 300px;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        padding: 20px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    }

                    .order-summary-panel {
                        flex: 1;
                        min-width: 340px; /* Aumentado el min-width para más espacio */
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        padding: 20px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                        position: sticky;
                        top: 20px;
                        align-self: flex-start;
                    }

                    .product-search {
                        width: calc(100% - 22px);
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        margin-bottom: 15px;
                    }

                    .order-product-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* 10x10 cards */
                        gap: 15px;
                        margin-top: 15px;
                        max-height: 400px; /* Para scroll si hay muchos productos */
                        overflow-y: auto;
                        padding-right: 5px;
                    }

                    .order-product-card {
                        background-color: #ecf0f1; /* Fondo claro */
                        border: 1px solid #bdc3c7;
                        border-radius: 8px;
                        padding: 10px;
                        text-align: center;
                        cursor: pointer;
                        transition: background-color 0.2s ease, transform 0.2s ease;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 170px; /* Altura fija para la tarjeta para mantener el aspecto */
                    }

                    .order-product-card:hover {
                        background-color: #dfe6e9;
                        transform: translateY(-2px);
                    }

                    .order-product-card.selected {
                        border: 2px solid #3498db;
                        background-color: #d6eaf8; /* Más azulado si está seleccionado */
                    }

                    .order-product-card img {
                        width: 100px; /* Tamaño de imagen de 10x10 */
                        height: 100px; /* Tamaño de imagen de 10x10 */
                        object-fit: contain;
                        margin: 0 auto 5px auto; /* Centrar y margen inferior */
                        border-radius: 4px;
                    }

                    .order-product-card h4 {
                        margin: 5px 0;
                        font-size: 0.9em; /* Reducir tamaño de fuente */
                        color: #2c3e50;
                    }

                    .order-product-card .price {
                        font-weight: 700;
                        color: #2ecc71;
                        font-size: 0.9em; /* Reducir tamaño de fuente */
                    }

                    .selected-table-info {
                        padding-bottom: 15px;
                        border-bottom: 1px dashed #e0e0e0;
                        margin-bottom: 15px;
                    }

                    .order-items-section {
                        /* Separación visible de la sección de elementos del pedido */
                        padding-bottom: 15px;
                        border-bottom: 1px solid #cfd8dc; /* Línea de separación más sólida */
                        margin-bottom: 15px;
                    }

                    .order-items-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        max-height: 300px; /* Altura máxima para desplazamiento vertical */
                        overflow-y: auto;
                        overflow-x: hidden; /* Ocultar desplazamiento horizontal */
                        padding-right: 5px;
                    }

                    .order-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 0;
                        border-bottom: 1px solid #f0f2f5;
                        gap: 10px;
                    }
                     .order-item-image {
                        display: none; /* Eliminar la imagen del resumen del pedido */
                    }
                    .order-item-details {
                        display: flex;
                        align-items: center;
                        flex-grow: 1; /* Permite que los detalles ocupen el espacio restante */
                        gap: 10px;
                        min-width: 100px; /* Asegura un ancho mínimo para el detalle */
                    }
                    .order-item-name-summary { /* Nuevo estilo para el nombre del producto en el resumen */
                        flex-grow: 1; /* Permite que el nombre ocupe el espacio restante */
                        text-align: left;
                        font-weight: 600;
                        color: #333;
                        white-space: normal; /* Permitir que el texto se divida en varias líneas */
                        word-wrap: break-word; /* Romper palabras largas si es necesario */
                        font-size: 0.85em; /* Reducir tamaño de fuente */
                    }
                    .order-item-quantity {
                        margin-left: 5px;
                        color: #666;
                        font-size: 0.9em;
                    }


                    .order-item:last-child {
                        border-bottom: none;
                    }

                    .order-item-actions-group { /* Nuevo contenedor para agrupar botones y precio */
                        display: flex;
                        align-items: center;
                        gap: 8px; /* Reducir el gap para que los botones estén más juntos */
                        flex-shrink: 0; /* Evita que el grupo de acciones se encoja */
                    }
                    .order-item-total-price {
                        font-weight: 700;
                        color: #2c3e50;
                        min-width: 60px; /* Asegurar espacio para el total */
                        text-align: right;
                        font-size: 0.85em; /* Reducir tamaño de fuente */
                    }

                    .quantity-button {
                        background-color: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        width: 32px; /* Ajustado el tamaño de los botones */
                        height: 32px; /* Ajustado el tamaño de los botones */
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 0.9em; /* Ajustado el tamaño de fuente */
                        transition: background-color 0.2s ease;
                        flex-shrink: 0; /* Evita que el botón se encoja */
                    }

                    .quantity-button:hover {
                        background-color: #2980b9;
                    }

                    .remove-item-button {
                        background-color: #e74c3c;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        width: 32px; /* Ajustado el tamaño de los botones */
                        height: 32px; /* Ajustado el tamaño de los botones */
                        padding: 0; /* Quitar padding para que el icono tome el tamaño */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        font-size: 0.9em; /* Ajustado el tamaño de fuente del icono */
                        transition: background-color 0.2s ease;
                        flex-shrink: 0;
                    }

                    .remove-item-button:hover {
                        background-color: #c0392b;
                    }

                    .order-summary-total {
                        font-size: 1.8em;
                        font-weight: 700;
                        text-align: right;
                        margin-top: 15px;
                        color: #2c3e50;
                    }

                    .checkout-order-button {
                        background-color: #2ecc71;
                        color: white;
                        padding: 12px 20px;
                        border: none;
                        border-radius: 5px;
                        width: 100%;
                        cursor: pointer;
                        font-size: 1.1em;
                        font-weight: 600;
                        margin-top: 20px;
                        transition: background-color 0.3s ease;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                    .checkout-order-button:hover {
                        background-color: #27ae60;
                    }

                    /* --- Table Overview --- */
                    .tables-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 20px;
                    }

                    .table-card {
                        background-color: #fcfcfc;
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 15px;
                        text-align: center;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                        cursor: pointer;
                        transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between; /* Para empujar el botón de renombrar hacia abajo */
                    }

                    .table-card:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .table-card.free {
                        border-color: #2ecc71; /* Verde para libre */
                        background-color: #e6ffe6; /* Fondo muy verde claro */
                    }

                    .table-card.pendiente-pago {
                        border-color: #9b59b6; /* Morado para pendiente de pago */
                        background-color: #f3e8ff; /* Fondo muy morado claro */
                    }

                    .table-card.selected {
                        border: 3px solid #3498db;
                        background-color: #d6eaf8; /* Azul claro si está seleccionada */
                    }

                    .table-card h3 {
                        margin-top: 0;
                        font-size: 1.3em;
                        font-weight: 600;
                        color: #2c3e50;
                    }

                    .table-card p {
                        margin: 5px 0 0;
                        font-size: 0.9em;
                        color: #555;
                    }

                    .table-card.free h3 { color: #2ecc71; }
                    .table-card.pendiente-pago h3 { color: #9b59b6; }

                    .status-indicator {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        margin-left: 5px;
                    }

                    .status-indicator.free { background-color: #2ecc71; }
                    .status-indicator.pendiente-pago { background-color: #9b59b6; }

                    .order-total-display {
                        font-weight: 700;
                        color: #2c3e50;
                        margin-top: 10px;
                        font-size: 1.1em;
                    }

                    .complete-payment-button { /* Clase existente, ahora para el botón "Facturar" */
                        background-color: #2ecc71; /* Verde para facturar */
                        color: white;
                        border: none;
                        padding: 8px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: 600;
                        margin-top: 10px;
                        transition: background-color 0.3s ease;
                    }
                    .complete-payment-button:hover {
                        background-color: #27ae60;
                    }

                    .table-actions-container {
                        display: flex;
                        gap: 15px;
                        margin-bottom: 25px;
                        justify-content: flex-end; /* Alinea los botones a la derecha */
                    }

                    .table-actions-container .primary-button {
                        background-color: #3498db;
                    }
                    .table-actions-container .primary-button:hover {
                        background-color: #2980b9;
                    }
                    .table-actions-container .delete-button {
                         background-color: #e74c3c;
                    }
                    .table-actions-container .delete-button:hover {
                        background-color: #c0392b;
                    }

                    /* Remove rename button from card */
                    .table-card .rename-button {
                        display: none;
                    }

                    /* --- New button for adding order to tables --- */
                    .add-order-button {
                        background-color: #3498db;
                        color: white;
                        border: none;
                        padding: 8px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: 500;
                        margin-top: 10px;
                        transition: background-color 0.3s ease;
                        width: 100%; /* Ocupar todo el ancho disponible */
                    }
                    .add-order-button:hover {
                        background-color: #2980b9;
                    }


                    /* --- Styles for the authentication choice --- */
                    .auth-choice-container, .admin-login-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: calc(100vh - 100px);
                        text-align: center;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                        padding: 30px;
                        max-width: 450px;
                        margin: 50px auto;
                    }

                    .auth-choice-container h2, .admin-login-container h2 {
                        color: #2c3e50;
                        margin-bottom: 20px;
                        font-size: 2em;
                    }

                    .auth-choice-container p {
                        font-size: 1.1em;
                        color: #555;
                        margin-bottom: 25px;
                    }

                    .auth-choice-container .primary-button, .auth-choice-container .secondary-button,
                    .admin-login-container .primary-button, .admin-login-container .secondary-button {
                        width: 80%;
                        margin-bottom: 15px;
                        padding: 12px 20px;
                        font-size: 1.1em;
                        border-radius: 25px;
                    }
                    .admin-login-container .form-group {
                        width: 80%;
                    }

                    /* --- Modal base styles --- */
                    .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: rgba(0, 0, 0, 0.7);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1000;
                    }

                    .modal-content {
                        background-color: #fff;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                        max-width: 400px;
                        width: 90%;
                        text-align: center;
                    }

                    .modal-content h3 {
                        margin-top: 0;
                        color: #2c3e50;
                        font-size: 1.8em;
                        margin-bottom: 20px;
                    }

                    .modal-content .form-group {
                        margin-bottom: 20px;
                    }

                    .modal-content .form-input {
                        width: calc(100% - 20px);
                    }

                    .modal-buttons {
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                    }

                    /* --- Payment Details Modal Specific Styles --- */
                    .payment-details-modal {
                        max-width: 500px;
                        width: 95%;
                        text-align: left;
                    }
                    .order-details-summary h4 {
                        font-size: 1.2em;
                        margin-bottom: 10px;
                        border-bottom: 1px solid #eee;
                        padding-bottom: 5px;
                    }
                    .order-summary-items-list {
                        list-style: none;
                        padding: 0;
                        margin-bottom: 15px;
                        max-height: 150px; /* Limitar altura para scroll */
                        overflow-y: auto;
                    }
                    .order-summary-items-list li {
                        display: flex;
                        justify-content: space-between;
                        padding: 5px 0;
                        border-bottom: 1px dashed #f0f2f5;
                        font-size: 0.9em;
                        color: #555;
                    }
                    .summary-line {
                        display: flex;
                        justify-content: space-between;
                        padding: 5px 0;
                        font-size: 1em;
                        font-weight: 500;
                        color: #333;
                    }
                    .summary-line.tip-line {
                        color: #f39c12; /* Naranja para propina */
                    }
                    .summary-line.total-line {
                        font-size: 1.3em;
                        font-weight: 700;
                        border-top: 1px solid #ccc;
                        padding-top: 10px;
                        margin-top: 10px;
                    }
                    .payment-buttons {
                        display: flex;
                        flex-wrap: wrap; /* Para responsividad */
                        justify-content: center;
                        gap: 10px;
                        margin-top: 20px;
                    }
                    .payment-buttons .primary-button, .payment-buttons .secondary-button {
                        flex-grow: 1;
                        max-width: 100%; /* Asegurar que no se estiren demasiado */
                    }
                    @media (min-width: 768px) {
                        .payment-buttons .primary-button, .payment-buttons .secondary-button {
                            max-width: calc(50% - 5px); /* Dos botones por fila en pantallas más grandes */
                        }
                    }

                    /* --- Ticket Print Preview Styles --- */
                    .ticket-print-preview {
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                        width: 302px; /* Ancho explícito para 80mm (~302px) */
                        box-sizing: border-box; /* Incluir padding en el ancho */
                        margin: 20px auto;
                        color: #333;
                        font-family: 'monospace', 'Inter', sans-serif; /* Fuente de ticket */
                        font-size: 12px; /* Base font size for ticket */
                        text-align: center; /* Centrar todo el contenido del ticket */
                    }
                    .company-logo {
                        max-width: 100px;
                        height: auto;
                    }
                    .ticket-items-list {
                        list-style: none;
                        padding: 0;
                        margin-bottom: 10px;
                        border-top: 1px dashed #ccc;
                        padding-top: 10px;
                    }
                    .ticket-items-list li {
                        display: flex;
                        justify-content: space-between;
                        font-size: 0.85em;
                        margin-bottom: 5px;
                    }
                    .ticket-summary {
                        border-top: 1px dashed #ccc;
                        padding-top: 10px;
                        margin-top: 10px;
                    }
                    .ticket-summary .total-line {
                        font-size: 1.1em;
                    }

                    /* Hide elements for printing */
                    @media print {
                        body * {
                            visibility: hidden;
                        }
                        .printable-area, .printable-area * {
                            visibility: visible;
                        }
                        .printable-area {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%; /* Ocupa todo el ancho de la página de impresión */
                            max-width: none; /* No restringir el ancho en la impresión */
                            margin: 0;
                            padding: 0;
                            box-shadow: none;
                        }
                        .hide-on-print {
                            display: none !important;
                        }
                    }
                    /* Rename management modal styles */
                    .rename-management-modal {
                        max-width: 500px;
                        text-align: left;
                    }
                    .table-rename-list {
                        list-style: none;
                        padding: 0;
                        max-height: 300px;
                        overflow-y: auto;
                    }
                    .table-rename-list li:last-child {
                        border-bottom: none;
                    }
                    .table-rename-list .form-input {
                        width: auto;
                    }

                    /* Additional styles for payment modal options */
                    .payment-method-section {
                        margin-top: 20px;
                        padding-top: 15px;
                        border-top: 1px solid #eee;
                    }

                    .payment-method-title {
                        font-size: 1.3em;
                        color: #2c3e50;
                        margin-bottom: 15px;
                    }

                    /* --- Footer --- */
                    footer {
                        background-color: #2c3e50;
                        color: white;
                        text-align: center;
                        padding: 15px 0;
                        margin-top: auto;
                        box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
                        font-size: 0.9em;
                    }

                    /* --- Responsividad --- */
                    @media (max-width: 768px) {
                        .header-content {
                            flex-direction: column;
                            gap: 10px;
                        }
                        .nav-menu {
                            flex-wrap: wrap;
                            justify-content: center;
                            gap: 10px;
                        }
                        .header-title {
                            font-size: 1.8em;
                        }
                        .user-info {
                            margin-top: 10px;
                            padding: 5px 8px; /* Ajuste para pantallas pequeñas */
                            font-size: 0.7em;
                        }
                        .edit-profile-button {
                             padding: 4px 8px;
                             font-size: 0.7em;
                        }
                        .logout-button {
                            padding: 6px 10px;
                            font-size: 0.9em;
                            min-width: 100px;
                        }

                        .app-layout, .order-reception-layout {
                            flex-direction: column;
                        }

                        .products-section, .order-section, .product-selection-panel, .order-summary-panel {
                            min-width: unset;
                            width: 100%;
                        }

                        .order-section, .order-summary-panel {
                            position: static;
                            top: unset;
                            align-self: unset;
                        }

                        .product-list, .order-product-list, .product-grid, .tables-grid {
                            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                        }
                    }

                    @media (max-width: 480px) {
                        .container {
                            margin: 10px auto;
                            padding: 0 10px;
                        }
                        .page-title {
                            font-size: 1.6em;
                        }
                        .dashboard-grid, .product-list, .order-product-list, .product-grid, .tables-grid {
                            grid-template-columns: 1fr; /* Una columna en pantallas muy pequeñas */
                        }
                        .dashboard-card, .product-item, .order-product-card, .table-card {
                            padding: 15px;
                        }
                        .auth-choice-container .primary-button, .auth-choice-container .secondary-button,
                        .admin-login-container .primary-button, .admin-login-container .secondary-button {
                            width: 95%;
                        }
                        .admin-login-container .form-group {
                            width: 95%;
                        }
                    }
                `}),A.jsx("header",{className:"header",children:A.jsxs("div",{className:"header-content",children:[A.jsx("h1",{className:"header-title",children:"DarkPedidos POS"}),A.jsxs("nav",{className:"nav-menu",children:[A.jsx("button",{className:`nav-button ${d==="dashboard"?"active":""}`,onClick:()=>p("dashboard"),children:"Dashboard"}),A.jsx("button",{className:`nav-button ${d==="tableOverview"?"active":""}`,onClick:()=>p("tableOverview"),children:"Mesas"}),A.jsx("button",{className:`nav-button ${d==="productManagement"?"active":""}`,onClick:()=>p("productManagement"),children:"Productos"}),r&&A.jsxs("div",{className:"user-info",children:[A.jsx("span",{children:"Usuario:"}),A.jsx("span",{children:g})," ",A.jsx("span",{children:"Rol:"}),A.jsx("span",{children:n}),n==="admin"&&A.jsx("button",{className:"edit-profile-button",onClick:()=>{Tn(g),vt(!0)},children:"Editar Perfil"})]}),r&&A.jsx("button",{className:"logout-button",onClick:Dr,children:"Cerrar Sesión"})]})]})}),A.jsx("main",{className:"container",children:Gn()}),_i&&A.jsx(ui,{currentTableForPayment:an,isGeneratingTicket:Gi,setIsGeneratingTicket:xr,displayName:g,companySettings:ws,handleConfirmPaymentAndFreeTable:Cs,setShowPaymentDetailsModal:In}),Do&&A.jsx(Ns,{}),Te&&A.jsx("div",{className:"modal-overlay",children:A.jsxs("div",{className:"modal-content",children:[A.jsx("h3",{children:"Editar Nombre de Usuario"}),A.jsxs("div",{className:"form-group",children:[A.jsx("label",{htmlFor:"newDisplayName",className:"form-label",children:"Nuevo Nombre"}),A.jsx("input",{id:"newDisplayName",type:"text",className:"form-input",value:Xe,onChange:z=>Tn(z.target.value),placeholder:"Introduce tu nuevo nombre"})]}),A.jsxs("div",{className:"modal-buttons",children:[A.jsx("button",{className:"primary-button",onClick:Or,children:"Guardar"}),A.jsx("button",{className:"secondary-button",onClick:()=>vt(!1),children:"Cancelar"})]})]})}),A.jsx("footer",{children:A.jsx("p",{children:"© 2023 DarkPedidos POS. Todos los derechos reservados."})})]})};MA.createRoot(document.getElementById("root")).render(A.jsx(Oe.StrictMode,{children:A.jsx(J2,{})}));
