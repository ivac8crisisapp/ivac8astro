import{l as Sl}from"./preact.module.dd969365.js";var m_=0;function $0(n,e,t,r,i,s){var o,a,c={};for(a in e)a=="ref"?o=e[a]:c[a]=e[a];var u={type:n,props:c,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--m_,__source:i,__self:s};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return Sl.vnode&&Sl.vnode(u),u}/**
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
 */const bd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},p_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):p_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new g_;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class g_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const __=function(n){const e=bd(n);return Sd.encodeByteArray(e,!0)},zs=function(n){return __(n).replace(/\./g,"")},Cd=function(n){try{return Sd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function js(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!y_(t)||(n[t]=js(n[t],e[t]));return n}function y_(n){return n!=="__proto__"}/**
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
 */function I_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v_=()=>I_().__FIREBASE_DEFAULTS__,w_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},E_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Cd(n[1]);return e&&JSON.parse(e)},Io=()=>{try{return v_()||w_()||E_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kd=n=>{var e,t;return(t=(e=Io())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},T_=n=>{const e=kd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dd=()=>{var n;return(n=Io())===null||n===void 0?void 0:n.config},Vd=n=>{var e;return(e=Io())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class A_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function R_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[zs(JSON.stringify(t)),zs(JSON.stringify(o)),a].join(".")}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function xc(){var n;const e=(n=Io())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b_(){return typeof self=="object"&&self.self===self}function Nd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Oc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xd(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function S_(){return!xc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pi(){try{return typeof indexedDB=="object"}catch{return!1}}function C_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const k_="FirebaseError";class De extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=k_,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?D_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new De(i,a,r)}}function D_(n,e){return n.replace(V_,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V_=/\{\$([^}]+)}/g;/**
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
 */function Cl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function N_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(kl(s)&&kl(o)){if(!Gs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function kl(n){return n!==null&&typeof n=="object"}/**
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
 */function Pr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Od(n,e){const t=new x_(n,e);return t.subscribe.bind(t)}class x_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");O_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=pa),i.error===void 0&&(i.error=pa),i.complete===void 0&&(i.complete=pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function pa(){}/**
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
 */function S(n){return n&&n._delegate?n._delegate:n}class lt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class M_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new A_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F_(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:L_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L_(n){return n===un?void 0:n}function F_(n){return n.instantiationMode==="EAGER"}/**
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
 */class U_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new M_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Mc=[];var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Md={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},B_=L.INFO,q_={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},$_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=q_[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=B_,this._logHandler=$_,this._userLogHandler=null,Mc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Md[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}function z_(n){Mc.forEach(e=>{e.setLogLevel(n)})}function j_(n,e){for(const t of Mc){let r=null;e&&e.level&&(r=Md[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:L[s].toLowerCase(),message:a,args:o,type:i.name})}}}const G_=(n,e)=>e.some(t=>n instanceof t);let Dl,Vl;function W_(){return Dl||(Dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K_(){return Vl||(Vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ld=new WeakMap,qa=new WeakMap,Fd=new WeakMap,ga=new WeakMap,Lc=new WeakMap;function H_(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Lt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ld.set(t,n)}).catch(()=>{}),Lc.set(e,n),e}function Q_(n){if(qa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});qa.set(n,e)}let $a={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Y_(n){$a=n($a)}function J_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(_a(this),e,...t);return Fd.set(r,e.sort?e.sort():[e]),Lt(r)}:K_().includes(n)?function(...e){return n.apply(_a(this),e),Lt(Ld.get(this))}:function(...e){return Lt(n.apply(_a(this),e))}}function X_(n){return typeof n=="function"?J_(n):(n instanceof IDBTransaction&&Q_(n),G_(n,W_())?new Proxy(n,$a):n)}function Lt(n){if(n instanceof IDBRequest)return H_(n);if(ga.has(n))return ga.get(n);const e=X_(n);return e!==n&&(ga.set(n,e),Lc.set(e,n)),e}const _a=n=>Lc.get(n);function Z_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Lt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ey=["get","getKey","getAll","getAllKeys","count"],ty=["put","add","delete","clear"],ya=new Map;function Nl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ty.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ey.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return ya.set(e,s),s}Y_(n=>({...n,get:(e,t,r)=>Nl(e,t)||n.get(e,t,r),has:(e,t)=>!!Nl(e,t)||n.has(e,t)}));/**
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
 */class ny{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ry(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ry(n){const e=n.getComponent();return e?.type==="VERSION"}const za="@firebase/app",xl="0.9.16";/**
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
 */const Rn=new vo("@firebase/app"),iy="@firebase/app-compat",sy="@firebase/analytics-compat",oy="@firebase/analytics",ay="@firebase/app-check-compat",cy="@firebase/app-check",uy="@firebase/auth",ly="@firebase/auth-compat",hy="@firebase/database",dy="@firebase/database-compat",fy="@firebase/functions",my="@firebase/functions-compat",py="@firebase/installations",gy="@firebase/installations-compat",_y="@firebase/messaging",yy="@firebase/messaging-compat",Iy="@firebase/performance",vy="@firebase/performance-compat",wy="@firebase/remote-config",Ey="@firebase/remote-config-compat",Ty="@firebase/storage",Ay="@firebase/storage-compat",Ry="@firebase/firestore",Py="@firebase/firestore-compat",by="firebase",Sy="10.2.0";/**
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
 */const Ut="[DEFAULT]",Cy={[za]:"fire-core",[iy]:"fire-core-compat",[oy]:"fire-analytics",[sy]:"fire-analytics-compat",[cy]:"fire-app-check",[ay]:"fire-app-check-compat",[uy]:"fire-auth",[ly]:"fire-auth-compat",[hy]:"fire-rtdb",[dy]:"fire-rtdb-compat",[fy]:"fire-fn",[my]:"fire-fn-compat",[py]:"fire-iid",[gy]:"fire-iid-compat",[_y]:"fire-fcm",[yy]:"fire-fcm-compat",[Iy]:"fire-perf",[vy]:"fire-perf-compat",[wy]:"fire-rc",[Ey]:"fire-rc-compat",[Ty]:"fire-gcs",[Ay]:"fire-gcs-compat",[Ry]:"fire-fst",[Py]:"fire-fst-compat","fire-js":"fire-js",[by]:"fire-js-all"};/**
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
 */const Bt=new Map,gi=new Map;function Ws(n,e){try{n.container.addComponent(e)}catch(t){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ud(n,e){n.container.addOrOverwriteComponent(e)}function qt(n){const e=n.name;if(gi.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,n);for(const t of Bt.values())Ws(t,n);return!0}function zi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ky(n,e,t=Ut){zi(n,e).clearInstance(t)}function Dy(){gi.clear()}/**
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
 */const Vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Fn("app","Firebase",Vy);/**
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
 */let Ny=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}};/**
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
 */const Zt=Sy;function wo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ut,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(t||(t=Dd()),!t)throw It.create("no-options");const s=Bt.get(i);if(s){if(Gs(t,s.options)&&Gs(r,s.config))return s;throw It.create("duplicate-app",{appName:i})}const o=new U_(i);for(const c of gi.values())o.addComponent(c);const a=new Ny(t,r,o);return Bt.set(i,a),a}function Fc(n=Ut){const e=Bt.get(n);if(!e&&n===Ut&&Dd())return wo();if(!e)throw It.create("no-app",{appName:n});return e}function xy(){return Array.from(Bt.values())}async function Bd(n){const e=n.name;Bt.has(e)&&(Bt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function He(n,e,t){var r;let i=(r=Cy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(a.join(" "));return}qt(new lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function qd(n,e){if(n!==null&&typeof n!="function")throw It.create("invalid-log-argument");j_(n,e)}function $d(n){z_(n)}/**
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
 */const Oy="firebase-heartbeat-database",My=1,_i="firebase-heartbeat-store";let Ia=null;function zd(){return Ia||(Ia=Z_(Oy,My,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_i)}}}).catch(n=>{throw It.create("idb-open",{originalErrorMessage:n.message})})),Ia}async function Ly(n){try{return await(await zd()).transaction(_i).objectStore(_i).get(jd(n))}catch(e){if(e instanceof De)Rn.warn(e.message);else{const t=It.create("idb-get",{originalErrorMessage:e?.message});Rn.warn(t.message)}}}async function Ol(n,e){try{const r=(await zd()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,jd(n)),await r.done}catch(t){if(t instanceof De)Rn.warn(t.message);else{const r=It.create("idb-set",{originalErrorMessage:t?.message});Rn.warn(r.message)}}}function jd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fy=1024,Uy=30*24*60*60*1e3;class By{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $y(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ml();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Uy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ml(),{heartbeatsToSend:t,unsentEntries:r}=qy(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ml(){return new Date().toISOString().substring(0,10)}function qy(n,e=Fy){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ll(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ll(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pi()?C_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ly(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ll(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function zy(n){qt(new lt("platform-logger",e=>new ny(e),"PRIVATE")),qt(new lt("heartbeat",e=>new By(e),"PRIVATE")),He(za,xl,n),He(za,xl,"esm2017"),He("fire-js","")}zy("");const jy=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:De,SDK_VERSION:Zt,_DEFAULT_ENTRY_NAME:Ut,_addComponent:Ws,_addOrOverwriteComponent:Ud,_apps:Bt,_clearComponents:Dy,_components:gi,_getProvider:zi,_registerComponent:qt,_removeServiceInstance:ky,deleteApp:Bd,getApp:Fc,getApps:xy,initializeApp:wo,onLog:qd,registerVersion:He,setLogLevel:$d},Symbol.toStringTag,{value:"Module"}));var Gy="firebase",Wy="10.2.0";/**
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
 */He(Gy,Wy,"app");function Uc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const qr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Wn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Fl(n){return n!==void 0&&n.getResponse!==void 0}function Ul(n){return n!==void 0&&n.enterprise!==void 0}class Ky{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Hy(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qy=Hy,Yy=Gd,Wd=new Fn("auth","Firebase",Gd());/**
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
 */const Ks=new vo("@firebase/auth");function Jy(n,...e){Ks.logLevel<=L.WARN&&Ks.warn(`Auth (${Zt}): ${n}`,...e)}function Ds(n,...e){Ks.logLevel<=L.ERROR&&Ks.error(`Auth (${Zt}): ${n}`,...e)}/**
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
 */function pe(n,...e){throw Bc(n,...e)}function Te(n,...e){return Bc(n,...e)}function Kd(n,e,t){const r=Object.assign(Object.assign({},Yy()),{[e]:t});return new Fn("auth","Firebase",r).create(e,{appName:n.name})}function br(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&pe(n,"argument-error"),Kd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wd.create(n,...e)}function y(n,e,...t){if(!n)throw Bc(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ds(e),new Error(e)}function Qe(n,e){n||it(e)}/**
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
 */function yi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qc(){return Bl()==="http:"||Bl()==="https:"}function Bl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Xy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qc()||Nd()||"connection"in navigator)?navigator.onLine:!0}function Zy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ji{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile=P_()||Oc()}get(){return Xy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $c(n,e){Qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Hd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tI=new ji(3e4,6e4);function ae(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function le(n,e,t,r,i={}){return Qd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Hd.fetch()(Yd(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Qd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},eI),e);try{const i=new nI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zr(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kd(n,l,u);pe(n,l)}}catch(i){if(i instanceof De)throw i;pe(n,"network-request-failed",{message:String(i)})}}async function At(n,e,t,r,i={}){const s=await le(n,e,t,r,i);return"mfaPendingCredential"in s&&pe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Yd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?$c(n.config,i):`${n.config.apiScheme}://${i}`}class nI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Te(this.auth,"network-request-failed")),tI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Te(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function rI(n){return(await le(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function iI(n,e){return le(n,"GET","/v2/recaptchaConfig",ae(n,e))}/**
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
 */async function sI(n,e){return le(n,"POST","/v1/accounts:delete",e)}async function oI(n,e){return le(n,"POST","/v1/accounts:update",e)}async function aI(n,e){return le(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cI(n,e=!1){const t=S(n),r=await t.getIdToken(e),i=Eo(r);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:si(va(i.auth_time)),issuedAtTime:si(va(i.iat)),expirationTime:si(va(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function va(n){return Number(n)*1e3}function Eo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cd(t);return i?JSON.parse(i):(Ds("Failed to decode base64 JWT payload"),null)}catch(i){return Ds("Caught error parsing JWT payload as JSON",i?.toString()),null}}function uI(n){const e=Eo(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof De&&lI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class hI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wt(n,aI(t,{idToken:r}));y(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mI(s.providerUserInfo):[],a=fI(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jd(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function dI(n){const e=S(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mI(n){return n.map(e=>{var{providerId:t}=e,r=Uc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pI(n,e){const t=await Qd(n,{},async()=>{const r=Pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Yd(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await pI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new vi;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function Ct(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wt(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wt(this,sI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=t.createdAt)!==null&&u!==void 0?u:void 0,x=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:B,isAnonymous:q,providerData:j,stsTokenManager:W}=t;y(D&&W,e,"internal-error");const Xe=vi.fromJSON(this.name,W);y(typeof D=="string",e,"internal-error"),Ct(h,e.name),Ct(d,e.name),y(typeof B=="boolean",e,"internal-error"),y(typeof q=="boolean",e,"internal-error"),Ct(f,e.name),Ct(I,e.name),Ct(E,e.name),Ct(v,e.name),Ct(C,e.name),Ct(x,e.name);const mt=new wn({uid:D,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:q,photoURL:I,phoneNumber:f,tenantId:E,stsTokenManager:Xe,createdAt:C,lastLoginAt:x});return j&&Array.isArray(j)&&(mt.providerData=j.map(_s=>Object.assign({},_s))),v&&(mt._redirectEventId=v),mt}static async _fromIdTokenResponse(e,t,r=!1){const i=new vi;i.updateFromServerResponse(t);const s=new wn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ii(s),s}}/**
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
 */const ql=new Map;function qe(n){Qe(n instanceof Function,"Expected a class definition");let e=ql.get(n);return e?(Qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ql.set(n,e),e)}/**
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
 */class Xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xd.type="NONE";const lr=Xd;/**
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
 */function En(n,e,t){return`firebase:${n}:${e}:${t}`}class tr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=En(this.userKey,i.apiKey,s),this.fullPersistenceKey=En("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tr(qe(lr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qe(lr);const o=En(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=wn._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new tr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new tr(s,e,r))}}/**
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
 */function $l(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nf(e))return"Blackberry";if(rf(e))return"Webos";if(zc(e))return"Safari";if((e.includes("chrome/")||ef(e))&&!e.includes("edge/"))return"Chrome";if(Gi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Zd(n=Z()){return/firefox\//i.test(n)}function zc(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ef(n=Z()){return/crios\//i.test(n)}function tf(n=Z()){return/iemobile/i.test(n)}function Gi(n=Z()){return/android/i.test(n)}function nf(n=Z()){return/blackberry/i.test(n)}function rf(n=Z()){return/webos/i.test(n)}function Sr(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gI(n=Z()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function _I(n=Z()){var e;return Sr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yI(){return xd()&&document.documentMode===10}function sf(n=Z()){return Sr(n)||Gi(n)||rf(n)||nf(n)||/windows phone/i.test(n)||tf(n)}function II(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function of(n,e=[]){let t;switch(n){case"Browser":t=$l(Z());break;case"Worker":t=`${$l(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${r}`}/**
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
 */class vI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function wI(n,e={}){return le(n,"GET","/v2/passwordPolicy",ae(n,e))}/**
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
 */const EI=6;class TI{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:EI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class AI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zl(this),this.idTokenSubscription=new zl(this),this.beforeStateQueue=new vI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await tr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wI(this),t=new TI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qe(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Jy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function te(n){return S(n)}class zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Od(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function RI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function jc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Te("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",RI().appendChild(r)})}function af(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const PI="https://www.google.com/recaptcha/enterprise.js?render=",bI="recaptcha-enterprise",SI="NO_RECAPTCHA";class CI{constructor(e){this.type=bI,this.auth=te(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{iI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ky(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ul(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(SI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Ul(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}jc(PI+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $t(n,e,t,r=!1){const i=new CI(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function kI(n,e){const t=zi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Gs(s,e??{}))return i;pe(i,"already-initialized")}return t.initialize({options:e})}function DI(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(qe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function cf(n,e,t){const r=te(n);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=uf(e),{host:o,port:a}=VI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NI()}function uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function VI(n){const e=uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jl(o)}}}function jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function lf(n,e){return le(n,"POST","/v1/accounts:resetPassword",ae(n,e))}async function hf(n,e){return le(n,"POST","/v1/accounts:update",e)}async function xI(n,e){return le(n,"POST","/v1/accounts:update",ae(n,e))}/**
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
 */async function wa(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",ae(n,e))}async function To(n,e){return le(n,"POST","/v1/accounts:sendOobCode",ae(n,e))}async function OI(n,e){return To(n,e)}async function Ea(n,e){return To(n,e)}async function Ta(n,e){return To(n,e)}async function MI(n,e){return To(n,e)}/**
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
 */async function LI(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",ae(n,e))}async function FI(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",ae(n,e))}/**
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
 */class wi extends Cr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new wi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new wi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await $t(e,r,"signInWithPassword");return wa(e,i)}else return wa(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await $t(e,r,"signInWithPassword");return wa(e,s)}else return Promise.reject(i)});case"emailLink":return LI(e,{email:this._email,oobCode:this._password});default:pe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hf(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FI(e,{idToken:t,email:this._email,oobCode:this._password});default:pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vt(n,e){return At(n,"POST","/v1/accounts:signInWithIdp",ae(n,e))}/**
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
 */const UI="http://localhost";class ht extends Cr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Uc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ht(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vt(e,t)}buildRequest(){const e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pr(t)}return e}}/**
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
 */async function BI(n,e){return le(n,"POST","/v1/accounts:sendVerificationCode",ae(n,e))}async function qI(n,e){return At(n,"POST","/v1/accounts:signInWithPhoneNumber",ae(n,e))}async function $I(n,e){const t=await At(n,"POST","/v1/accounts:signInWithPhoneNumber",ae(n,e));if(t.temporaryProof)throw Zr(n,"account-exists-with-different-credential",t);return t}const zI={USER_NOT_FOUND:"user-not-found"};async function jI(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return At(n,"POST","/v1/accounts:signInWithPhoneNumber",ae(n,t),zI)}/**
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
 */class Tn extends Cr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Tn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return $I(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return jI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Tn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function GI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WI(n){const e=Zn(Xr(n)).link,t=e?Zn(Xr(e)).deep_link_id:null,r=Zn(Xr(n)).deep_link_id;return(r?Zn(Xr(r)).link:null)||r||t||e||n}class Ao{constructor(e){var t,r,i,s,o,a;const c=Zn(Xr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=GI((i=c.mode)!==null&&i!==void 0?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=WI(e);try{return new Ao(t)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,t){return wi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ao.parseLink(t);return y(r,"argument-error"),wi._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends Rt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class nr extends kr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return y("providerId"in t&&"signInMethod"in t,"argument-error"),ht._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return y(e.idToken||e.accessToken,"argument-error"),ht._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return nr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return nr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new nr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Ze extends kr{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
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
 */class et extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
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
 */class tt extends kr{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
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
 */const KI="http://localhost";class hr extends Cr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return vt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new hr(r,s)}static _create(e,t){return new hr(e,t)}buildRequest(){return{requestUri:KI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const HI="saml.";class Hs extends Rt{constructor(e){y(e.startsWith(HI),"argument-error"),super(e)}static credentialFromResult(e){return Hs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Hs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=hr.fromJSON(e);return y(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return hr._create(r,t)}catch{return null}}}/**
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
 */class nt extends kr{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nt.credential(t,r)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
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
 */async function Vs(n,e){return At(n,"POST","/v1/accounts:signUp",ae(n,e))}/**
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
 */class We{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await wn._fromIdTokenResponse(e,r,i),o=Gl(r);return new We({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Gl(r);return new We({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Gl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function QI(n){var e;const t=te(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new We({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Vs(t,{returnSecureToken:!0}),i=await We._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Qs extends De{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Qs(e,t,r,i)}}function df(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function ff(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function YI(n,e){const t=S(n);await Ro(!0,t,e);const{providerUserInfo:r}=await oI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=ff(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Gc(n,e,t=!1){const r=await wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return We._forOperation(n,"link",r)}async function Ro(n,e,t){await Ii(e);const r=ff(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";y(r.has(t)===n,e.auth,i)}/**
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
 */async function mf(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await wt(n,df(r,i,e,n),t);y(s.idToken,r,"internal-error");const o=Eo(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(n.uid===a,r,"user-mismatch"),We._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&pe(r,"user-mismatch"),s}}/**
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
 */async function pf(n,e,t=!1){const r="signIn",i=await df(n,r,e),s=await We._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Po(n,e){return pf(te(n),e)}async function gf(n,e){const t=S(n);return await Ro(!1,t,e.providerId),Gc(t,e)}async function _f(n,e){return mf(S(n),e)}/**
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
 */async function JI(n,e){return At(n,"POST","/v1/accounts:signInWithCustomToken",ae(n,e))}/**
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
 */async function XI(n,e){const t=te(n),r=await JI(t,{token:e,returnSecureToken:!0}),i=await We._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Wi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Wc._fromServerResponse(e,t):"totpInfo"in t?Kc._fromServerResponse(e,t):pe(e,"internal-error")}}class Wc extends Wi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Wc(t)}}class Kc extends Wi{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Kc(t)}}/**
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
 */function rr(n,e,t){var r;y(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),y(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(y(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(y(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Hc(n){const e=te(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZI(n,e,t){var r;const i=te(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await $t(i,s,"getOobCode",!0);t&&rr(i,o,t),await Ea(i,o)}else t&&rr(i,s,t),await Ea(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await $t(i,s,"getOobCode",!0);t&&rr(i,a,t),await Ea(i,a)}else return Promise.reject(o)})}async function ev(n,e,t){await lf(S(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hc(n),r})}async function tv(n,e){await xI(S(n),{oobCode:e})}async function yf(n,e){const t=S(n),r=await lf(t,{oobCode:e}),i=r.requestType;switch(y(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":y(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":y(r.mfaInfo,t,"internal-error");default:y(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Wi._fromServerResponse(te(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function nv(n,e){const{data:t}=await yf(S(n),e);return t.email}async function rv(n,e,t){var r;const i=te(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await $t(i,s,"signUpPassword");o=Vs(i,u)}else o=Vs(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await $t(i,s,"signUpPassword");return Vs(i,l)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hc(n),u}),c=await We._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function iv(n,e,t){return Po(S(n),en.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hc(n),r})}/**
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
 */async function sv(n,e,t){var r;const i=te(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){y(c.handleCodeInApp,i,"argument-error"),c&&rr(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await $t(i,s,"getOobCode",!0);o(a,t),await Ta(i,a)}else o(s,t),await Ta(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await $t(i,s,"getOobCode",!0);o(c,t),await Ta(i,c)}else return Promise.reject(a)})}function ov(n,e){const t=Ao.parseLink(e);return t?.operation==="EMAIL_SIGNIN"}async function av(n,e,t){const r=S(n),i=en.credentialWithLink(e,t||yi());return y(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Po(r,i)}/**
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
 */async function cv(n,e){return le(n,"POST","/v1/accounts:createAuthUri",ae(n,e))}/**
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
 */async function uv(n,e){const t=qc()?yi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await cv(S(n),r);return i||[]}async function lv(n,e){const t=S(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&rr(t.auth,i,e);const{email:s}=await OI(t.auth,i);s!==n.email&&await n.reload()}async function hv(n,e,t){const r=S(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&rr(r.auth,s,t);const{email:o}=await MI(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function dv(n,e){return le(n,"POST","/v1/accounts:update",e)}/**
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
 */async function fv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await wt(r,dv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mv(n,e){return If(S(n),e,null)}function pv(n,e){return If(S(n),null,e)}async function If(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await wt(n,hf(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function gv(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&n?.idToken){const o=(t=(e=Eo(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ir(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new _v(s,i);case"github.com":return new yv(s,i);case"google.com":return new Iv(s,i);case"twitter.com":return new vv(s,i,n.screenName||null);case"custom":case"anonymous":return new ir(s,null);default:return new ir(s,r,i)}}class ir{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class vf extends ir{constructor(e,t,r,i){super(e,t,r),this.username=i}}class _v extends ir{constructor(e,t){super(e,"facebook.com",t)}}class yv extends vf{constructor(e,t){super(e,"github.com",t,typeof t?.login=="string"?t?.login:null)}}class Iv extends ir{constructor(e,t){super(e,"google.com",t)}}class vv extends vf{constructor(e,t,r){super(e,"twitter.com",t,r)}}function wv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:gv(t)}function Ev(n,e,t,r){return S(n).onIdTokenChanged(e,t,r)}function Tv(n,e,t){return S(n).beforeAuthStateChanged(e,t)}/**
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
 */class gn{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new gn("enroll",e,t)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e?.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Qc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=te(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Wi._fromServerResponse(r,a));y(i.mfaPendingCredential,r,"internal-error");const o=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new Qc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await We._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return y(t.user,r,"internal-error"),We._forOperation(t.user,t.operationType,u);default:pe(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Av(n,e){var t;const r=S(n),i=e;return y(e.customData.operationType,r,"argument-error"),y((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Qc._fromError(r,i)}/**
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
 */function Rv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:start",ae(n,e))}function Pv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:finalize",ae(n,e))}function bv(n,e){return le(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ae(n,e))}class Yc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Wi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Yc(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await wt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await wt(this.user,bv(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Aa=new WeakMap;function Sv(n){const e=S(n);return Aa.has(e)||Aa.set(e,Yc._fromUser(e)),Aa.get(e)}const Ys="__sak";/**
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
 */class wf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Cv(){const n=Z();return zc(n)||Sr(n)}const kv=1e3,Dv=10;class Ef extends wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cv()&&II(),this.fallbackToPolling=sf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ef.type="LOCAL";const bo=Ef;/**
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
 */class Tf extends wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tf.type="SESSION";const zt=Tf;/**
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
 */function Vv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new So(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Vv(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
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
 */function Ki(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Nv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ki("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ue(){return window}function xv(n){ue().location.href=n}/**
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
 */function Jc(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function Ov(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Lv(){return Jc()?self:null}/**
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
 */const Af="firebaseLocalStorageDb",Fv=1,Js="firebaseLocalStorage",Rf="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Co(n,e){return n.transaction([Js],e?"readwrite":"readonly").objectStore(Js)}function Uv(){const n=indexedDB.deleteDatabase(Af);return new Hi(n).toPromise()}function ja(){const n=indexedDB.open(Af,Fv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Js,{keyPath:Rf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Js)?e(r):(r.close(),await Uv(),e(await ja()))})})}async function Wl(n,e,t){const r=Co(n,!0).put({[Rf]:e,value:t});return new Hi(r).toPromise()}async function Bv(n,e){const t=Co(n,!1).get(e),r=await new Hi(t).toPromise();return r===void 0?null:r.value}function Kl(n,e){const t=Co(n,!0).delete(e);return new Hi(t).toPromise()}const qv=800,$v=3;class Pf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$v)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(Lv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ov(),!this.activeServiceWorker)return;this.sender=new Nv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ja();return await Wl(e,Ys,"1"),await Kl(e,Ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Bv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Co(i,!1).getAll();return new Hi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pf.type="LOCAL";const dr=Pf;/**
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
 */function zv(n,e){return le(n,"POST","/v2/accounts/mfaSignIn:start",ae(n,e))}function jv(n,e){return le(n,"POST","/v2/accounts/mfaSignIn:finalize",ae(n,e))}/**
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
 */const Gv=500,Wv=6e4,ys=1e12;class Kv{constructor(e){this.auth=e,this.counter=ys,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Hv(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||ys;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||ys;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||ys;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Hv{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;y(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Qv(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Wv)},Gv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Qv(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Ra=af("rcb"),Yv=new ji(3e4,6e4),Jv="https://www.google.com/recaptcha/api.js?";class Xv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ue().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return y(Zv(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Fl(ue().grecaptcha)?Promise.resolve(ue().grecaptcha):new Promise((r,i)=>{const s=ue().setTimeout(()=>{i(Te(e,"network-request-failed"))},Yv.get());ue()[Ra]=()=>{ue().clearTimeout(s),delete ue()[Ra];const a=ue().grecaptcha;if(!a||!Fl(a)){i(Te(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Jv}?${Pr({onload:Ra,render:"explicit",hl:t})}`;jc(o).catch(()=>{clearTimeout(s),i(Te(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ue().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Zv(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class ew{async load(e){return new Kv(e)}clearedOneInstance(){}}/**
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
 */const bf="recaptcha",tw={theme:"light",type:"image"};let nw=class{constructor(e,t,r=Object.assign({},tw)){this.parameters=r,this.type=bf,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=te(e),this.isInvisible=this.parameters.size==="invisible",y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;y(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ew:new Xv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){y(!this.parameters.sitekey,this.auth,"argument-error"),y(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),y(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ue()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){y(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){y(qc()&&!Jc(),this.auth,"internal-error"),await rw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await rI(this.auth);y(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return y(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function rw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Xc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Tn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function iw(n,e,t){const r=te(n),i=await ko(r,e,S(t));return new Xc(i,s=>Po(r,s))}async function sw(n,e,t){const r=S(n);await Ro(!1,r,"phone");const i=await ko(r.auth,e,S(t));return new Xc(i,s=>gf(r,s))}async function ow(n,e,t){const r=S(n),i=await ko(r.auth,e,S(t));return new Xc(i,s=>_f(r,s))}async function ko(n,e,t){var r;const i=await t.verify();try{y(typeof i=="string",n,"argument-error"),y(t.type===bf,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return y(o.type==="enroll",n,"internal-error"),(await Rv(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{y(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return y(a,n,"missing-multi-factor-info"),(await zv(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BI(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function aw(n,e){await Gc(S(n),e)}/**
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
 */let Pn=class Ns{constructor(e){this.providerId=Ns.PROVIDER_ID,this.auth=te(e)}verifyPhoneNumber(e,t){return ko(this.auth,e,S(t))}static credential(e,t){return Tn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ns.credentialFromTaggedObject(t)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Tn._fromTokenResponse(t,r):null}};Pn.PROVIDER_ID="phone";Pn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Un(n,e){return e?qe(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zc extends Cr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cw(n){return pf(n.auth,new Zc(n),n.bypassAuthState)}function uw(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),mf(t,new Zc(n),n.bypassAuthState)}async function lw(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),Gc(t,new Zc(n),n.bypassAuthState)}/**
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
 */class Sf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cw;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return uw;default:pe(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hw=new ji(2e3,1e4);async function dw(n,e,t){const r=te(n);br(n,e,Rt);const i=Un(r,t);return new pt(r,"signInViaPopup",e,i).executeNotNull()}async function fw(n,e,t){const r=S(n);br(r.auth,e,Rt);const i=Un(r.auth,t);return new pt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function mw(n,e,t){const r=S(n);br(r.auth,e,Rt);const i=Un(r.auth,t);return new pt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class pt extends Sf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hw.get())};e()}}pt.currentPopupAction=null;/**
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
 */const pw="pendingRedirect",oi=new Map;class gw extends Sf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await _w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(n,e){const t=kf(e),r=Cf(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function eu(n,e){return Cf(n)._set(kf(e),"true")}function yw(){oi.clear()}function tu(n,e){oi.set(n._key(),e)}function Cf(n){return qe(n._redirectPersistence)}function kf(n){return En(pw,n.config.apiKey,n.name)}/**
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
 */function Iw(n,e,t){return vw(n,e,t)}async function vw(n,e,t){const r=te(n);br(n,e,Rt),await r._initializationPromise;const i=Un(r,t);return await eu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ww(n,e,t){return Ew(n,e,t)}async function Ew(n,e,t){const r=S(n);br(r.auth,e,Rt),await r.auth._initializationPromise;const i=Un(r.auth,t);await eu(i,r.auth);const s=await Df(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Tw(n,e,t){return Aw(n,e,t)}async function Aw(n,e,t){const r=S(n);br(r.auth,e,Rt),await r.auth._initializationPromise;const i=Un(r.auth,t);await Ro(!1,r,e.providerId),await eu(i,r.auth);const s=await Df(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Rw(n,e){return await te(n)._initializationPromise,Do(n,e,!1)}async function Do(n,e,t=!1){const r=te(n),i=Un(r,e),o=await new gw(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Df(n){const e=Ki(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const Pw=10*60*1e3;class Vf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Nf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hl(e))}saveEventToCache(e){this.cachedEventUids.add(Hl(e)),this.lastProcessedEventTime=Date.now()}}function Hl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function bw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nf(n);default:return!1}}/**
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
 */async function xf(n,e={}){return le(n,"GET","/v1/projects",e)}/**
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
 */const Sw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cw=/^https?/;async function kw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xf(n);for(const t of e)try{if(Dw(t))return}catch{}pe(n,"unauthorized-domain")}function Dw(n){const e=yi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Cw.test(t))return!1;if(Sw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vw=new ji(3e4,6e4);function Ql(){const n=ue().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nw(n){return new Promise((e,t)=>{var r,i,s;function o(){Ql(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ql(),t(Te(n,"network-request-failed"))},timeout:Vw.get()})}if(!((i=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ue().gapi)===null||s===void 0)&&s.load)o();else{const a=af("iframefcb");return ue()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},jc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw xs=null,e})}let xs=null;function xw(n){return xs=xs||Nw(n),xs}/**
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
 */const Ow=new ji(5e3,15e3),Mw="__/auth/iframe",Lw="emulator/auth/iframe",Fw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bw(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$c(e,Lw):`https://${n.config.authDomain}/${Mw}`,r={apiKey:e.apiKey,appName:n.name,v:Zt},i=Uw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Pr(r).slice(1)}`}async function qw(n){const e=await xw(n),t=ue().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:Bw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=ue().setTimeout(()=>{s(o)},Ow.get());function c(){ue().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const $w={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zw=500,jw=600,Gw="_blank",Ww="http://localhost";class Yl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kw(n,e,t,r=zw,i=jw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$w),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Z().toLowerCase();t&&(a=ef(u)?Gw:t),Zd(u)&&(e=e||Ww,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,I])=>`${d}${f}=${I},`,"");if(_I(u)&&a!=="_self")return Hw(e||"",a),new Yl(null);const h=window.open(e||"",a,l);y(h,n,"popup-blocked");try{h.focus()}catch{}return new Yl(h)}function Hw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Qw="__/auth/handler",Yw="emulator/auth/handler",Jw=encodeURIComponent("fac");async function Ga(n,e,t,r,i,s){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zt,eventId:i};if(e instanceof Rt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",N_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof kr){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Jw}=${encodeURIComponent(c)}`:"";return`${Xw(n)}?${Pr(a).slice(1)}${u}`}function Xw({config:n}){return n.emulator?$c(n,Yw):`https://${n.authDomain}/${Qw}`}/**
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
 */const Pa="webStorageSupport";class Zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zt,this._completeRedirectFn=Do,this._overrideRedirectResult=tu}async _openPopup(e,t,r,i){var s;Qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ga(e,t,r,yi(),i);return Kw(e,o,Ki())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ga(e,t,r,yi(),i);return xv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Qe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qw(e),r=new Vf(e);return t.register("authEvent",i=>(y(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pa,{type:Pa},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Pa];o!==void 0&&t(!!o),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sf()||zc()||Sr()}}const Of=Zw;class eE{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return it("unexpected MultiFactorSessionType")}}}class nu extends eE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nu(e)}_finalizeEnroll(e,t,r){return Pv(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return jv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Mf{constructor(){}static assertion(e){return nu._fromCredential(e)}}Mf.FACTOR_ID="phone";var Jl="@firebase/auth",Xl="1.2.0";/**
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
 */class tE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rE(n){qt(new lt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:of(n)},u=new AI(r,i,s,c);return DI(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qt(new lt("auth-internal",e=>{const t=te(e.getProvider("auth").getImmediate());return(r=>new tE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Jl,Xl,nE(n)),He(Jl,Xl,"esm2017")}/**
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
 */const iE=5*60,sE=Vd("authIdTokenMaxAge")||iE;let Zl=null;const oE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sE)return;const i=t?.token;Zl!==i&&(Zl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aE(n=Fc()){const e=zi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kI(n,{popupRedirectResolver:Of,persistence:[dr,bo,zt]}),r=Vd("authTokenSyncURL");if(r){const s=oE(r);Tv(t,s,()=>s(t.currentUser)),Ev(t,o=>s(o))}const i=kd("auth");return i&&cf(t,`http://${i}`),t}rE("Browser");var cE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,ru=ru||{},k=cE||self;function Vo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Qi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function uE(n){return Object.prototype.hasOwnProperty.call(n,ba)&&n[ba]||(n[ba]=++lE)}var ba="closure_uid_"+(1e9*Math.random()>>>0),lE=0;function hE(n,e,t){return n.call.apply(n.bind,arguments)}function dE(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=hE:Pe=dE,Pe.apply(null,arguments)}function Is(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function _e(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function tn(){this.s=this.s,this.o=this.o}var fE=0;tn.prototype.s=!1;tn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fE!=0)&&uE(this)};tn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Lf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function iu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function eh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Vo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function be(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var mE=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",()=>{},e),k.removeEventListener("test",()=>{},e)}catch{}return n}();function Ei(n){return/^[\s\xa0]*$/.test(n)}function No(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function rt(n){return No().indexOf(n)!=-1}function su(n){return su[" "](n),n}su[" "]=function(){};function pE(n,e){var t=aT;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var gE=rt("Opera"),fr=rt("Trident")||rt("MSIE"),Ff=rt("Edge"),Wa=Ff||fr,Uf=rt("Gecko")&&!(No().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),_E=No().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function Bf(){var n=k.document;return n?n.documentMode:void 0}var Ka;e:{var Sa="",Ca=function(){var n=No();if(Uf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ff)return/Edge\/([\d\.]+)/.exec(n);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(_E)return/WebKit\/(\S+)/.exec(n);if(gE)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ca&&(Sa=Ca?Ca[1]:""),fr){var ka=Bf();if(ka!=null&&ka>parseFloat(Sa)){Ka=String(ka);break e}}Ka=Sa}var Ha;if(k.document&&fr){var th=Bf();Ha=th||parseInt(Ka,10)||void 0}else Ha=void 0;var yE=Ha;function Ti(n,e){if(be.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Uf){e:{try{su(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:IE[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ti.$.h.call(this)}}_e(Ti,be);var IE={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),vE=0;function wE(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++vE,this.fa=this.ia=!1}function xo(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ou(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function EE(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function qf(n){const e={};for(const t in n)e[t]=n[t];return e}const nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $f(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<nh.length;s++)t=nh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Oo(n){this.src=n,this.g={},this.h=0}Oo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ya(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new wE(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Qa(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Lf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(xo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ya(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var au="closure_lm_"+(1e6*Math.random()|0),Da={};function zf(n,e,t,r,i){if(r&&r.once)return Gf(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zf(n,e[s],t,r,i);return null}return t=lu(t),n&&n[Yi]?n.O(e,t,Qi(r)?!!r.capture:!!r,i):jf(n,e,t,!1,r,i)}function jf(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Qi(i)?!!i.capture:!!i,a=uu(n);if(a||(n[au]=a=new Oo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=TE(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)mE||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Kf(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function TE(){function n(t){return e.call(n.src,n.listener,t)}const e=AE;return n}function Gf(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Gf(n,e[s],t,r,i);return null}return t=lu(t),n&&n[Yi]?n.P(e,t,Qi(r)?!!r.capture:!!r,i):jf(n,e,t,!0,r,i)}function Wf(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Wf(n,e[s],t,r,i);else r=Qi(r)?!!r.capture:!!r,t=lu(t),n&&n[Yi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Ya(s,t,r,i),-1<t&&(xo(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=uu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ya(e,t,r,i)),(t=-1<n?e[n]:null)&&cu(t))}function cu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Yi])Qa(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Kf(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=uu(e))?(Qa(t,n),t.h==0&&(t.src=null,e[au]=null)):xo(n)}}}function Kf(n){return n in Da?Da[n]:Da[n]="on"+n}function AE(n,e){if(n.fa)n=!0;else{e=new Ti(e,this);var t=n.listener,r=n.la||n.src;n.ia&&cu(n),n=t.call(r,e)}return n}function uu(n){return n=n[au],n instanceof Oo?n:null}var Va="__closure_events_fn_"+(1e9*Math.random()>>>0);function lu(n){return typeof n=="function"?n:(n[Va]||(n[Va]=function(e){return n.handleEvent(e)}),n[Va])}function ge(){tn.call(this),this.i=new Oo(this),this.S=this,this.J=null}_e(ge,tn);ge.prototype[Yi]=!0;ge.prototype.removeEventListener=function(n,e,t,r){Wf(this,n,e,t,r)};function Ae(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new be(e,n);else if(e instanceof be)e.target=e.target||n;else{var i=e;e=new be(r,n),$f(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=vs(o,r,!0,e)&&i}if(o=e.g=n,i=vs(o,r,!0,e)&&i,i=vs(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=vs(o,r,!1,e)&&i}ge.prototype.N=function(){if(ge.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)xo(t[r]);delete n.g[e],n.h--}}this.J=null};ge.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ge.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function vs(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Qa(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var hu=k.JSON.stringify;class RE{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function PE(){var n=du;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class bE{constructor(){this.h=this.g=null}add(e,t){const r=Hf.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Hf=new RE(()=>new SE,n=>n.reset());class SE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function CE(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function kE(n){k.setTimeout(()=>{throw n},0)}let Ai,Ri=!1,du=new bE,Qf=()=>{const n=k.Promise.resolve(void 0);Ai=()=>{n.then(DE)}};var DE=()=>{for(var n;n=PE();){try{n.h.call(n.g)}catch(t){kE(t)}var e=Hf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ri=!1};function Mo(n,e){ge.call(this),this.h=n||1,this.g=e||k,this.j=Pe(this.qb,this),this.l=Date.now()}_e(Mo,ge);A=Mo.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(fu(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}A.N=function(){Mo.$.N.call(this),fu(this),delete this.g};function mu(n,e,t){if(typeof n=="function")t&&(n=Pe(n,t));else if(n&&typeof n.handleEvent=="function")n=Pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function Yf(n){n.g=mu(()=>{n.g=null,n.i&&(n.i=!1,Yf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class VE extends tn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yf(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(n){tn.call(this),this.h=n,this.g={}}_e(Pi,tn);var rh=[];function Jf(n,e,t,r){Array.isArray(t)||(t&&(rh[0]=t.toString()),t=rh);for(var i=0;i<t.length;i++){var s=zf(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Xf(n){ou(n.g,function(e,t){this.g.hasOwnProperty(t)&&cu(e)},n),n.g={}}Pi.prototype.N=function(){Pi.$.N.call(this),Xf(this)};Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lo(){this.g=!0}Lo.prototype.Ea=function(){this.g=!1};function NE(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function xE(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function er(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+ME(n,t)+(r?" "+r:"")})}function OE(n,e){n.info(function(){return"TIMEOUT: "+e})}Lo.prototype.info=function(){};function ME(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hu(t)}catch{return e}}var Bn={},ih=null;function Fo(){return ih=ih||new ge}Bn.Ta="serverreachability";function Zf(n){be.call(this,Bn.Ta,n)}_e(Zf,be);function bi(n){const e=Fo();Ae(e,new Zf(e))}Bn.STAT_EVENT="statevent";function em(n,e){be.call(this,Bn.STAT_EVENT,n),this.stat=e}_e(em,be);function ke(n){const e=Fo();Ae(e,new em(e,n))}Bn.Ua="timingevent";function tm(n,e){be.call(this,Bn.Ua,n),this.size=e}_e(tm,be);function Ji(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var Uo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pu(){}pu.prototype.h=null;function sh(n){return n.h||(n.h=n.i())}function rm(){}var Xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gu(){be.call(this,"d")}_e(gu,be);function _u(){be.call(this,"c")}_e(_u,be);var Ja;function Bo(){}_e(Bo,pu);Bo.prototype.g=function(){return new XMLHttpRequest};Bo.prototype.i=function(){return{}};Ja=new Bo;function Zi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Pi(this),this.P=LE,n=Wa?125:void 0,this.V=new Mo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new im}function im(){this.i=null,this.g="",this.h=!1}var LE=45e3,Xa={},Xs={};A=Zi.prototype;A.setTimeout=function(n){this.P=n};function Za(n,e,t){n.L=1,n.v=$o(Et(e)),n.s=t,n.S=!0,sm(n,null)}function sm(n,e){n.G=Date.now(),es(n),n.A=Et(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),fm(t.i,"t",r),n.C=0,t=n.l.J,n.h=new im,n.g=xm(n.l,t?e:null,!n.s),0<n.O&&(n.M=new VE(Pe(n.Pa,n,n.g),n.O)),Jf(n.U,n.g,"readystatechange",n.nb),e=n.I?qf(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),bi(),NE(n.j,n.u,n.A,n.m,n.W,n.s)}A.nb=function(n){n=n.target;const e=this.M;e&&st(n)==3?e.l():this.Pa(n)};A.Pa=function(n){try{if(n==this.g)e:{const l=st(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Wa||this.g&&(this.h.h||this.g.ja()||uh(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?bi(3):bi(2)),qo(this);var t=this.g.da();this.ca=t;t:if(om(this)){var r=uh(this.g);n="";var i=r.length,s=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),ai(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,xE(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ei(a)){var u=a;break t}}u=null}if(t=u)er(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ec(this,t);else{this.i=!1,this.o=3,ke(12),_n(this),ai(this);break e}}this.S?(am(this,l,o),Wa&&this.i&&l==3&&(Jf(this.U,this.V,"tick",this.mb),this.V.start())):(er(this.j,this.m,o,null),ec(this,o)),l==4&&_n(this),this.i&&!this.J&&(l==4?km(this.l,this):(this.i=!1,es(this)))}else iT(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ke(12)):(this.o=0,ke(13)),_n(this),ai(this)}}}catch{}finally{}};function om(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function am(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=FE(n,t),i==Xs){e==4&&(n.o=4,ke(14),r=!1),er(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Xa){n.o=4,ke(15),er(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else er(n.j,n.m,i,null),ec(n,i);om(n)&&i!=Xs&&i!=Xa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ke(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Tu(e),e.M=!0,ke(11))):(er(n.j,n.m,t,"[Invalid Chunked Response]"),_n(n),ai(n))}A.mb=function(){if(this.g){var n=st(this.g),e=this.g.ja();this.C<e.length&&(qo(this),am(this,n,e),this.i&&n!=4&&es(this))}};function FE(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Xs:(t=Number(e.substring(t,r)),isNaN(t)?Xa:(r+=1,r+t>e.length?Xs:(e=e.slice(r,r+t),n.C=r+t,e)))}A.cancel=function(){this.J=!0,_n(this)};function es(n){n.Y=Date.now()+n.P,cm(n,n.P)}function cm(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ji(Pe(n.lb,n),e)}function qo(n){n.B&&(k.clearTimeout(n.B),n.B=null)}A.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(OE(this.j,this.A),this.L!=2&&(bi(),ke(17)),_n(this),this.o=2,ai(this)):cm(this,this.Y-n)};function ai(n){n.l.H==0||n.J||km(n.l,n)}function _n(n){qo(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,fu(n.V),Xf(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function ec(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||tc(t.i,n))){if(!n.K&&tc(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)to(t),Go(t);else break e;Eu(t),ke(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Ji(Pe(t.ib,t),6e3));if(1>=gm(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else yn(t,11)}else if((n.K||t.g==n)&&to(t),!Ei(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(yu(s,s.h),s.h=null))}if(r.F){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,K(r.I,r.F,E))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Nm(r,r.J?r.pa:null,r.Y),o.K){_m(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(qo(a),es(a)),r.g=o}else Sm(r);0<t.j.length&&Wo(t)}else u[0]!="stop"&&u[0]!="close"||yn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?yn(t,7):wu(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}bi(4)}catch{}}function UE(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Vo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function BE(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Vo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function um(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Vo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=BE(n),r=UE(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function An(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof An){this.h=n.h,Zs(this,n.j),this.s=n.s,this.g=n.g,eo(this,n.m),this.l=n.l;var e=n.i,t=new Si;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),oh(this,t),this.o=n.o}else n&&(e=String(n).match(lm))?(this.h=!1,Zs(this,e[1]||"",!0),this.s=ei(e[2]||""),this.g=ei(e[3]||"",!0),eo(this,e[4]),this.l=ei(e[5]||"",!0),oh(this,e[6]||"",!0),this.o=ei(e[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}An.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ti(e,ah,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ti(e,ah,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ti(t,t.charAt(0)=="/"?jE:zE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ti(t,WE)),n.join("")};function Et(n){return new An(n)}function Zs(n,e,t){n.j=t?ei(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function eo(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function oh(n,e,t){e instanceof Si?(n.i=e,KE(n.i,n.h)):(t||(e=ti(e,GE)),n.i=new Si(e,n.h))}function K(n,e,t){n.i.set(e,t)}function $o(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ei(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ti(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,$E),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function $E(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ah=/[#\/\?@]/g,zE=/[#\?:]/g,jE=/[#\?]/g,GE=/[#\?@]/g,WE=/#/g;function Si(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function nn(n){n.g||(n.g=new Map,n.h=0,n.i&&qE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}A=Si.prototype;A.add=function(n,e){nn(this),this.i=null,n=Dr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function hm(n,e){nn(n),e=Dr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function dm(n,e){return nn(n),e=Dr(n,e),n.g.has(e)}A.forEach=function(n,e){nn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};A.ta=function(){nn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};A.Z=function(n){nn(this);let e=[];if(typeof n=="string")dm(this,n)&&(e=e.concat(this.g.get(Dr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};A.set=function(n,e){return nn(this),this.i=null,n=Dr(this,n),dm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};A.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function fm(n,e,t){hm(n,e),0<t.length&&(n.i=null,n.g.set(Dr(n,e),iu(t)),n.h+=t.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Dr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function KE(n,e){e&&!n.j&&(nn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(hm(this,r),fm(this,i,t))},n)),n.j=e}var HE=class{constructor(n,e){this.g=n,this.map=e}};function mm(n){this.l=n||QE,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QE=10;function pm(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function gm(n){return n.h?1:n.g?n.g.size:0}function tc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function yu(n,e){n.g?n.g.add(e):n.h=e}function _m(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}mm.prototype.cancel=function(){if(this.i=ym(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ym(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return iu(n.i)}var YE=class{stringify(n){return k.JSON.stringify(n,void 0)}parse(n){return k.JSON.parse(n,void 0)}};function JE(){this.g=new YE}function XE(n,e,t){const r=t||"";try{um(n,function(i,s){let o=i;Qi(i)&&(o=hu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZE(n,e){const t=new Lo;if(k.Image){const r=new Image;r.onload=Is(ws,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Is(ws,t,r,"TestLoadImage: error",!1,e),r.onabort=Is(ws,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Is(ws,t,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ws(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ts(n){this.l=n.fc||null,this.j=n.ob||!1}_e(ts,pu);ts.prototype.g=function(){return new zo(this.l,this.j)};ts.prototype.i=function(n){return function(){return n}}({});function zo(n,e){ge.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Iu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_e(zo,ge);var Iu=0;A=zo.prototype;A.open=function(n,e){if(this.readyState!=Iu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ci(this)};A.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=Iu};A.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Im(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Im(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}A.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ns(this):Ci(this),this.readyState==3&&Im(this)}};A.Za=function(n){this.g&&(this.response=this.responseText=n,ns(this))};A.Ya=function(n){this.g&&(this.response=n,ns(this))};A.ka=function(){this.g&&ns(this)};function ns(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ci(n)}A.setRequestHeader=function(n,e){this.v.append(n,e)};A.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ci(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var eT=k.JSON.parse;function ne(n){ge.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vm,this.L=this.M=!1}_e(ne,ge);var vm="",tT=/^https?$/i,nT=["POST","PUT"];A=ne.prototype;A.Oa=function(n){this.M=n};A.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ja.g(),this.C=this.u?sh(this.u):sh(Ja),this.g.onreadystatechange=Pe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){ch(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=Lf(nT,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Tm(this),0<this.B&&((this.L=rT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.ua,this)):this.A=mu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ch(this,s)}};function rT(n){return fr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}A.ua=function(){typeof ru<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function ch(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,wm(n),jo(n)}function wm(n){n.F||(n.F=!0,Ae(n,"complete"),Ae(n,"error"))}A.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ae(this,"complete"),Ae(this,"abort"),jo(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jo(this,!0)),ne.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?Em(this):this.kb())};A.kb=function(){Em(this)};function Em(n){if(n.h&&typeof ru<"u"&&(!n.C[1]||st(n)!=4||n.da()!=2)){if(n.v&&st(n)==4)mu(n.La,0,n);else if(Ae(n,"readystatechange"),st(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(lm)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!tT.test(i?i.toLowerCase():"")}t=r}if(t)Ae(n,"complete"),Ae(n,"success");else{n.m=6;try{var s=2<st(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",wm(n)}}finally{jo(n)}}}}function jo(n,e){if(n.g){Tm(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ae(n,"ready");try{t.onreadystatechange=r}catch{}}}function Tm(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}A.isActive=function(){return!!this.g};function st(n){return n.g?n.g.readyState:0}A.da=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),eT(e)}};function uh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case vm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function iT(n){const e={};n=(n.g&&2<=st(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ei(n[r]))continue;var t=CE(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}EE(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Am(n){let e="";return ou(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function vu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Am(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):K(n,e,t))}function $r(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Rm(n){this.Ga=0,this.j=[],this.l=new Lo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$r("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$r("baseRetryDelayMs",5e3,n),this.hb=$r("retryDelaySeedMs",1e4,n),this.eb=$r("forwardChannelMaxRetries",2,n),this.xa=$r("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new mm(n&&n.concurrentRequestLimit),this.Ja=new JE,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=Rm.prototype;A.ra=8;A.H=1;function wu(n){if(Pm(n),n.H==3){var e=n.W++,t=Et(n.I);if(K(t,"SID",n.K),K(t,"RID",e),K(t,"TYPE","terminate"),rs(n,t),e=new Zi(n,n.l,e),e.L=2,e.v=$o(Et(t)),t=!1,k.navigator&&k.navigator.sendBeacon)try{t=k.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=xm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),es(e)}Vm(n)}function Go(n){n.g&&(Tu(n),n.g.cancel(),n.g=null)}function Pm(n){Go(n),n.u&&(k.clearTimeout(n.u),n.u=null),to(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function Wo(n){if(!pm(n.i)&&!n.m){n.m=!0;var e=n.Na;Ai||Qf(),Ri||(Ai(),Ri=!0),du.add(e,n),n.C=0}}function sT(n,e){return gm(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ji(Pe(n.Na,n,e),Dm(n,n.C)),n.C++,!0)}A.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Zi(this,this.l,n);let s=this.s;if(this.U&&(s?(s=qf(s),$f(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=bm(this,i,e),t=Et(this.I),K(t,"RID",n),K(t,"CVER",22),this.F&&K(t,"X-HTTP-Session-Id",this.F),rs(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Am(s)))+"&"+e:this.o&&vu(t,this.o,s)),yu(this.i,i),this.bb&&K(t,"TYPE","init"),this.P?(K(t,"$req",e),K(t,"SID","null"),i.aa=!0,Za(i,t,null)):Za(i,t,e),this.H=2}}else this.H==3&&(n?lh(this,n):this.j.length==0||pm(this.i)||lh(this))};function lh(n,e){var t;e?t=e.m:t=n.W++;const r=Et(n.I);K(r,"SID",n.K),K(r,"RID",t),K(r,"AID",n.V),rs(n,r),n.o&&n.s&&vu(r,n.o,n.s),t=new Zi(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=bm(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),yu(n.i,t),Za(t,r,e)}function rs(n,e){n.na&&ou(n.na,function(t,r){K(e,r,t)}),n.h&&um({},function(t,r){K(e,r,t)})}function bm(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Pe(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{XE(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Sm(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Ai||Qf(),Ri||(Ai(),Ri=!0),du.add(e,n),n.A=0}}function Eu(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ji(Pe(n.Ma,n),Dm(n,n.A)),n.A++,!0)}A.Ma=function(){if(this.u=null,Cm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ji(Pe(this.jb,this),n)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ke(10),Go(this),Cm(this))};function Tu(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function Cm(n){n.g=new Zi(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Et(n.wa);K(e,"RID","rpc"),K(e,"SID",n.K),K(e,"AID",n.V),K(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(e,"TO",n.qa),K(e,"TYPE","xmlhttp"),rs(n,e),n.o&&n.s&&vu(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=$o(Et(e)),t.s=null,t.S=!0,sm(t,n)}A.ib=function(){this.v!=null&&(this.v=null,Go(this),Eu(this),ke(19))};function to(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function km(n,e){var t=null;if(n.g==e){to(n),Tu(n),n.g=null;var r=2}else if(tc(n.i,e))t=e.F,_m(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Fo(),Ae(r,new tm(r,t)),Wo(n)}else Sm(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&sT(n,e)||r==2&&Eu(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:yn(n,5);break;case 4:yn(n,10);break;case 3:yn(n,6);break;default:yn(n,2)}}}function Dm(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function yn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Pe(n.pb,n);t||(t=new An("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||Zs(t,"https"),$o(t)),ZE(t.toString(),r)}else ke(2);n.H=0,n.h&&n.h.za(e),Vm(n),Pm(n)}A.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ke(2)):(this.l.info("Failed to ping google.com"),ke(1))};function Vm(n){if(n.H=0,n.ma=[],n.h){const e=ym(n.i);(e.length!=0||n.j.length!=0)&&(eh(n.ma,e),eh(n.ma,n.j),n.i.i.length=0,iu(n.j),n.j.length=0),n.h.ya()}}function Nm(n,e,t){var r=t instanceof An?Et(t):new An(t);if(r.g!="")e&&(r.g=e+"."+r.g),eo(r,r.m);else{var i=k.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new An(null);r&&Zs(s,r),e&&(s.g=e),i&&eo(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&K(r,t,e),K(r,"VER",n.ra),rs(n,r),r}function xm(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ne(new ts({ob:!0})):new ne(n.va),e.Oa(n.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function Om(){}A=Om.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function no(){if(fr&&!(10<=Number(yE)))throw Error("Environmental error: no available transport.")}no.prototype.g=function(n,e){return new $e(n,e)};function $e(n,e){ge.call(this),this.g=new Rm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ei(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ei(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Vr(this)}_e($e,ge);$e.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ke(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Nm(n,null,n.Y),Wo(n)};$e.prototype.close=function(){wu(this.g)};$e.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=hu(n),n=t);e.j.push(new HE(e.fb++,n)),e.H==3&&Wo(e)};$e.prototype.N=function(){this.g.h=null,delete this.j,wu(this.g),delete this.g,$e.$.N.call(this)};function Mm(n){gu.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}_e(Mm,gu);function Lm(){_u.call(this),this.status=1}_e(Lm,_u);function Vr(n){this.g=n}_e(Vr,Om);Vr.prototype.Ba=function(){Ae(this.g,"a")};Vr.prototype.Aa=function(n){Ae(this.g,new Mm(n))};Vr.prototype.za=function(n){Ae(this.g,new Lm)};Vr.prototype.ya=function(){Ae(this.g,"b")};function oT(){this.blockSize=-1}function Ye(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_e(Ye,oT);Ye.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Na(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ye.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Na(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Na(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Na(this,r),i=0;break}}this.h=i,this.i+=e};Ye.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function z(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var aT={};function Au(n){return-128<=n&&128>n?pE(n,function(e){return new z([e|0],0>e?-1:0)}):new z([n|0],0>n?-1:0)}function ot(n){if(isNaN(n)||!isFinite(n))return sr;if(0>n)return we(ot(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=nc;return new z(e,0)}function Fm(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return we(Fm(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ot(Math.pow(e,8)),r=sr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=ot(Math.pow(e,s)),r=r.R(s).add(ot(o))):(r=r.R(t),r=r.add(ot(o)))}return r}var nc=4294967296,sr=Au(0),rc=Au(1),hh=Au(16777216);A=z.prototype;A.ea=function(){if(je(this))return-we(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:nc+r)*e,e*=nc}return n};A.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(gt(this))return"0";if(je(this))return"-"+we(this).toString(n);for(var e=ot(Math.pow(n,6)),t=this,r="";;){var i=io(t,e).g;t=ro(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,gt(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function gt(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function je(n){return n.h==-1}A.X=function(n){return n=ro(this,n),je(n)?-1:gt(n)?0:1};function we(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new z(t,~n.h).add(rc)}A.abs=function(){return je(this)?we(this):this};A.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new z(t,t[t.length-1]&-2147483648?-1:0)};function ro(n,e){return n.add(we(e))}A.R=function(n){if(gt(this)||gt(n))return sr;if(je(this))return je(n)?we(this).R(we(n)):we(we(this).R(n));if(je(n))return we(this.R(we(n)));if(0>this.X(hh)&&0>n.X(hh))return ot(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Es(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Es(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Es(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Es(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new z(t,0)};function Es(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function zr(n,e){this.g=n,this.h=e}function io(n,e){if(gt(e))throw Error("division by zero");if(gt(n))return new zr(sr,sr);if(je(n))return e=io(we(n),e),new zr(we(e.g),we(e.h));if(je(e))return e=io(n,we(e)),new zr(we(e.g),e.h);if(30<n.g.length){if(je(n)||je(e))throw Error("slowDivide_ only works with positive integers.");for(var t=rc,r=e;0>=r.X(n);)t=dh(t),r=dh(r);var i=Kn(t,1),s=Kn(r,1);for(r=Kn(r,2),t=Kn(t,2);!gt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Kn(r,1),t=Kn(t,1)}return e=ro(n,i.R(e)),new zr(i,e)}for(i=sr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ot(t),o=s.R(e);je(o)||0<o.X(n);)t-=r,s=ot(t),o=s.R(e);gt(s)&&(s=rc),i=i.add(s),n=ro(n,o)}return new zr(i,n)}A.gb=function(n){return io(this,n).h};A.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new z(t,this.h&n.h)};A.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new z(t,this.h|n.h)};A.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new z(t,this.h^n.h)};function dh(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new z(t,n.h)}function Kn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new z(i,n.h)}no.prototype.createWebChannel=no.prototype.g;$e.prototype.send=$e.prototype.u;$e.prototype.open=$e.prototype.m;$e.prototype.close=$e.prototype.close;Uo.NO_ERROR=0;Uo.TIMEOUT=8;Uo.HTTP_ERROR=6;nm.COMPLETE="complete";rm.EventType=Xi;Xi.OPEN="a";Xi.CLOSE="b";Xi.ERROR="c";Xi.MESSAGE="d";ge.prototype.listen=ge.prototype.O;ne.prototype.listenOnce=ne.prototype.P;ne.prototype.getLastError=ne.prototype.Sa;ne.prototype.getLastErrorCode=ne.prototype.Ia;ne.prototype.getStatus=ne.prototype.da;ne.prototype.getResponseJson=ne.prototype.Wa;ne.prototype.getResponseText=ne.prototype.ja;ne.prototype.send=ne.prototype.ha;ne.prototype.setWithCredentials=ne.prototype.Oa;Ye.prototype.digest=Ye.prototype.l;Ye.prototype.reset=Ye.prototype.reset;Ye.prototype.update=Ye.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=ot;z.fromString=Fm;var cT=function(){return new no},uT=function(){return Fo()},xa=Uo,lT=nm,hT=Bn,fh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dT=ts,Ts=rm,fT=ne,mT=Ye,or=z;const mh="@firebase/firestore";/**
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
 */let fe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
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
 */let Nr="10.2.0";/**
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
 */const jt=new vo("@firebase/firestore");function ic(){return jt.logLevel}function pT(n){jt.setLogLevel(n)}function _(n,...e){if(jt.logLevel<=L.DEBUG){const t=e.map(Ru);jt.debug(`Firestore (${Nr}): ${n}`,...t)}}function ie(n,...e){if(jt.logLevel<=L.ERROR){const t=e.map(Ru);jt.error(`Firestore (${Nr}): ${n}`,...t)}}function Je(n,...e){if(jt.logLevel<=L.WARN){const t=e.map(Ru);jt.warn(`Firestore (${Nr}): ${n}`,...t)}}function Ru(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function R(n="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+n;throw ie(e),new Error(e)}function b(n,e){n||R()}function gT(n,e){n||R()}function T(n,e){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends De{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class me{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Um{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class yT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class IT{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(b(typeof r.accessToken=="string"),new Um(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(e===null||typeof e=="string"),new fe(e)}}class vT{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wT{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new vT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ET{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(b(typeof t.token=="string"),this.R=t.token,new ET(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function AT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Bm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function V(n,e){return n<e?-1:n>e?1:0}function mr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function qm(n){return n+"\0"}/**
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
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new J(0,0))}static max(){return new P(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ki{constructor(e,t,r){t===void 0?t=0:t>e.length&&R(),r===void 0?r=e.length-t:r>e.length-t&&R(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends ki{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const RT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends ki{construct(e,t,r){return new se(e,t,r)}static isValidIdentifier(e){return RT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new se(t)}static emptyPath(){return new se([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(F.fromString(e))}static fromName(e){return new w(F.fromString(e).popFirst(5))}static empty(){return new w(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new F(e.slice()))}}/**
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
 */class $m{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function sc(n){return n.fields.find(e=>e.kind===2)}function ln(n){return n.fields.filter(e=>e.kind!==2)}$m.UNKNOWN_ID=-1;class PT{constructor(e,t){this.fieldPath=e,this.kind=t}}class so{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new so(0,ze.min())}}function zm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new ze(i,w.empty(),e)}function jm(n){return new ze(n.readTime,n.key,-1)}class ze{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ze(P.min(),w.empty(),-1)}static max(){return new ze(P.max(),w.empty(),-1)}}function Pu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:V(n.largestBatchId,e.largestBatchId))}/**
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
 */const Gm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==Gm)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Ko{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new me,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ci(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=bu(r.target.error);this.m.reject(new ci(e,i))}}static open(e,t,r,i){try{return new Ko(t,e.transaction(i,r))}catch(s){throw new ci(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ST(t)}}class Ke{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Ke.D(Z())===12.2&&ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),hn(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!pi())return!1;if(Ke.C())return!0;const e=Z(),t=Ke.D(e),r=0<t&&t<10,i=Ke.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ci(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ci(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Ko.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bT{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return hn(this.q.delete())}}class ci extends g{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function sn(n){return n.name==="IndexedDbTransactionError"}class ST{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hn(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),hn(this.store.add(e))}get(e){return hn(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),hn(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),hn(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=bu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new bT(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function hn(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=bu(r.target.error);t(i)}})}let ph=!1;function bu(n){const e=Ke.D(Z());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ph||(ph=!0,setTimeout(()=>{throw r},0)),r}}return n}class CT{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){sn(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await rn(t)}await this.te(6e4)})}}class kT{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=jm(s);Pu(o,r)>0&&(r=o)}),new ze(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Me.ae=-1;function is(n){return n==null}function Di(n){return n===0&&1/n==-1/0}function Km(n){return typeof n=="number"&&Number.isInteger(n)&&!Di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ve(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gh(e)),e=DT(n.get(t),e);return gh(e)}function DT(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function gh(n){return n+""}function at(n){const e=n.length;if(b(e>=2),e===2)return b(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&R(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:R()}s=o+2}return new F(r)}/**
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
 */const _h=["userId","batchId"];/**
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
 */function Os(n,e){return[n,Ve(e)]}function Hm(n,e,t){return[n,Ve(e),t]}const VT={},NT=["prefixPath","collectionGroup","readTime","documentId"],xT=["prefixPath","collectionGroup","documentId"],OT=["collectionGroup","readTime","prefixPath","documentId"],MT=["canonicalId","targetId"],LT=["targetId","path"],FT=["path","targetId"],UT=["collectionId","parent"],BT=["indexId","uid"],qT=["uid","sequenceNumber"],$T=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],zT=["indexId","uid","orderedDocumentKey"],jT=["userId","collectionPath","documentId"],GT=["userId","collectionPath","largestBatchId"],WT=["userId","collectionGroup","largestBatchId"],Qm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KT=[...Qm,"documentOverlays"],Ym=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Jm=Ym,HT=[...Jm,"indexConfiguration","indexState","indexEntries"];/**
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
 */class oc extends Wm{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function ye(n,e){const t=T(n);return Ke.O(t.ue,e)}/**
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
 */function yh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class G{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new G(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new G(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Q{constructor(e){this.comparator=e,this.data=new G(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ih(this.data.getIterator())}getIteratorFrom(e){return new Ih(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Q(this.comparator);return t.data=e,t}}class Ih{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Hn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Le{constructor(e){this.fields=e,e.sort(se.comparator)}static empty(){return new Le([])}unionWith(e){let t=new Q(se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Zm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function QT(){return typeof atob<"u"}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Zm("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const YT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(b(!!n),typeof n=="string"){let e=0;const t=YT.exec(n);if(b(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
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
 */function Ho(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Su(n){const e=n.mapValue.fields.__previous_value__;return Ho(e)?Su(e):e}function Vi(n){const e=Gt(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
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
 */class JT{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Kt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ot={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ms={nullValue:"NULL_VALUE"};function bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ho(n)?4:ep(n)?9007199254740991:10:R()}function dt(n,e){if(n===e)return!0;const t=bn(n);if(t!==bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vi(n).isEqual(Vi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gt(i.timestampValue),a=Gt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Wt(i.bytesValue).isEqual(Wt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ee(i.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ee(i.integerValue)===ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ee(i.doubleValue),a=ee(s.doubleValue);return o===a?Di(o)===Di(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return mr(n.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(yh(o)!==yh(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!dt(o[c],a[c])))return!1;return!0}(n,e);default:return R()}}function Ni(n,e){return(n.values||[]).find(t=>dt(t,e))!==void 0}function Ht(n,e){if(n===e)return 0;const t=bn(n),r=bn(e);if(t!==r)return V(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ee(s.integerValue||s.doubleValue),c=ee(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return vh(n.timestampValue,e.timestampValue);case 4:return vh(Vi(n),Vi(e));case 5:return V(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Wt(s),c=Wt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=V(a[u],c[u]);if(l!==0)return l}return V(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=V(ee(s.latitude),ee(o.latitude));return a!==0?a:V(ee(s.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Ht(a[u],c[u]);if(l)return l}return V(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ot.mapValue&&o===Ot.mapValue)return 0;if(s===Ot.mapValue)return 1;if(o===Ot.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=V(c[h],l[h]);if(d!==0)return d;const f=Ht(a[c[h]],u[l[h]]);if(f!==0)return f}return V(c.length,l.length)}(n.mapValue,e.mapValue);default:throw R()}}function vh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return V(n,e);const t=Gt(n),r=Gt(e),i=V(t.seconds,r.seconds);return i!==0?i:V(t.nanos,r.nanos)}function pr(n){return ac(n)}function ac(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return w.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ac(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ac(t.fields[o])}`;return i+"}"}(n.mapValue):R()}function Sn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cc(n){return!!n&&"integerValue"in n}function xi(n){return!!n&&"arrayValue"in n}function wh(n){return!!n&&"nullValue"in n}function Eh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ls(n){return!!n&&"mapValue"in n}function ui(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ui(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ui(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ep(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function XT(n){return"nullValue"in n?Ms:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Sn(Kt.empty(),w.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:R()}function ZT(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Sn(Kt.empty(),w.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ot:R()}function Th(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Ah(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(t)}setAll(e){let t=se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ui(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ls(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){qn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(ui(this.value))}}function tp(n){const e=[];return qn(n.fields,(t,r)=>{const i=new se([t]);if(Ls(r)){const s=tp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Le(e)}/**
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
 */class H{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new H(e,0,P.min(),P.min(),P.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,i){return new H(e,1,t,P.min(),r,i,0)}static newNoDocument(e,t){return new H(e,2,t,P.min(),P.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new H(e,3,t,P.min(),P.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qt{constructor(e,t){this.position=e,this.inclusive=t}}function Rh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=w.comparator(w.fromName(o.referenceValue),t.key):r=Ht(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ph(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ar{constructor(e,t="asc"){this.field=e,this.dir=t}}function eA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class np{}class O extends np{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tA(e,t,r):t==="array-contains"?new iA(e,r):t==="in"?new cp(e,r):t==="not-in"?new sA(e,r):t==="array-contains-any"?new oA(e,r):new O(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nA(e,r):new rA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ht(t,this.value)):t!==null&&bn(this.value)===bn(t)&&this.matchesComparison(Ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $ extends np{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new $(e,t)}matches(e){return gr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function gr(n){return n.op==="and"}function uc(n){return n.op==="or"}function Cu(n){return rp(n)&&gr(n)}function rp(n){for(const e of n.filters)if(e instanceof $)return!1;return!0}function lc(n){if(n instanceof O)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(Cu(n))return n.filters.map(e=>lc(e)).join(",");{const e=n.filters.map(t=>lc(t)).join(",");return`${n.op}(${e})`}}function ip(n,e){return n instanceof O?function(r,i){return i instanceof O&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(n,e):n instanceof $?function(r,i){return i instanceof $&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ip(o,i.filters[a]),!0):!1}(n,e):void R()}function sp(n,e){const t=n.filters.concat(e);return $.create(t,n.op)}function op(n){return n instanceof O?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(n):n instanceof $?function(t){return t.op.toString()+" {"+t.getFilters().map(op).join(" ,")+"}"}(n):"Filter"}class tA extends O{constructor(e,t,r){super(e,t,r),this.key=w.fromName(r.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class nA extends O{constructor(e,t){super(e,"in",t),this.keys=ap("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rA extends O{constructor(e,t){super(e,"not-in",t),this.keys=ap("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ap(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>w.fromName(r.referenceValue))}class iA extends O{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xi(t)&&Ni(t.arrayValue,this.value)}}class cp extends O{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ni(this.value.arrayValue,t)}}class sA extends O{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ni(this.value.arrayValue,t)}}class oA extends O{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
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
 */class aA{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function hc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new aA(n,e,t,r,i,s,o)}function Cn(n){const e=T(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pr(r)).join(",")),e.he=t}return e.he}function ss(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ip(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ph(n.startAt,e.startAt)&&Ph(n.endAt,e.endAt)}function oo(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ao(n,e){return n.filters.filter(t=>t instanceof O&&t.field.isEqual(e))}function bh(n,e,t){let r=Ms,i=!0;for(const s of ao(n,e)){let o=Ms,a=!0;switch(s.op){case"<":case"<=":o=XT(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ms}Th({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Th({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Sh(n,e,t){let r=Ot,i=!0;for(const s of ao(n,e)){let o=Ot,a=!0;switch(s.op){case">=":case">":o=ZT(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ot}Ah({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Ah({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Pt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function up(n,e,t,r,i,s,o,a){return new Pt(n,e,t,r,i,s,o,a)}function xr(n){return new Pt(n)}function Ch(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ku(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Qo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Du(n){return n.collectionGroup!==null}function cr(n){const e=T(n);if(e.Pe===null){e.Pe=[];const t=Qo(e),r=ku(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new ar(t)),e.Pe.push(new ar(se.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ar(se.keyField(),s))}}}return e.Pe}function Ue(n){const e=T(n);return e.Ie||(e.Ie=cA(e,cr(n))),e.Ie}function cA(n,e){if(n.limitType==="F")return hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ar(i.field,s)});const t=n.endAt?new Qt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qt(n.startAt.position,n.startAt.inclusive):null;return hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dc(n,e){e.getFirstInequalityField(),Qo(n);const t=n.filters.concat([e]);return new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function co(n,e,t){return new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function os(n,e){return ss(Ue(n),Ue(e))&&n.limitType===e.limitType}function lp(n){return`${Cn(Ue(n))}|lt:${n.limitType}`}function fc(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>op(i)).join(", ")}]`),is(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>pr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>pr(i)).join(",")),`Target(${r})`}(Ue(n))}; limitType=${n.limitType})`}function as(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):w.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of cr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Rh(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,cr(r),i)||r.endAt&&!function(o,a,c){const u=Rh(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,cr(r),i))}(n,e)}function hp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dp(n){return(e,t)=>{let r=!1;for(const i of cr(n)){const s=uA(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uA(n,e,t){const r=n.field.isKeyField()?w.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Ht(c,u):R()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
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
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Xm(this.inner)}size(){return this.innerSize}}/**
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
 */const lA=new G(w.comparator);function Fe(){return lA}const fp=new G(w.comparator);function ni(...n){let e=fp;for(const t of n)e=e.insert(t.key,t);return e}function mp(n){let e=fp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ct(){return li()}function pp(){return li()}function li(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const hA=new G(w.comparator),dA=new Q(w.comparator);function N(...n){let e=dA;for(const t of n)e=e.add(t);return e}const fA=new Q(V);function Vu(){return fA}/**
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
 */function gp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function _p(n){return{integerValue:""+n}}function yp(n,e){return Km(e)?_p(e):gp(n,e)}/**
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
 */class Yo{constructor(){this._=void 0}}function mA(n,e,t){return n instanceof _r?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ho(s)&&(s=Su(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof kn?vp(n,e):n instanceof Dn?wp(n,e):function(i,s){const o=Ip(i,s),a=kh(o)+kh(i.Ee);return cc(o)&&cc(i.Ee)?_p(a):gp(i.serializer,a)}(n,e)}function pA(n,e,t){return n instanceof kn?vp(n,e):n instanceof Dn?wp(n,e):t}function Ip(n,e){return n instanceof yr?function(r){return cc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _r extends Yo{}class kn extends Yo{constructor(e){super(),this.elements=e}}function vp(n,e){const t=Ep(e);for(const r of n.elements)t.some(i=>dt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Dn extends Yo{constructor(e){super(),this.elements=e}}function wp(n,e){let t=Ep(e);for(const r of n.elements)t=t.filter(i=>!dt(i,r));return{arrayValue:{values:t}}}class yr extends Yo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function kh(n){return ee(n.integerValue||n.doubleValue)}function Ep(n){return xi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cs{constructor(e,t){this.field=e,this.transform=t}}function gA(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kn&&i instanceof kn||r instanceof Dn&&i instanceof Dn?mr(r.elements,i.elements,dt):r instanceof yr&&i instanceof yr?dt(r.Ee,i.Ee):r instanceof _r&&i instanceof _r}(n.transform,e.transform)}class _A{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Jo{}function Tp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mr(n.key,Y.none()):new Or(n.key,n.data,Y.none());{const t=n.data,r=Ee.empty();let i=new Q(se.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new bt(n.key,r,new Le(i.toArray()),Y.none())}}function yA(n,e,t){n instanceof Or?function(i,s,o){const a=i.value.clone(),c=Vh(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof bt?function(i,s,o){if(!Fs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Vh(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Ap(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function hi(n,e,t,r){return n instanceof Or?function(s,o,a,c){if(!Fs(s.precondition,o))return a;const u=s.value.clone(),l=Nh(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof bt?function(s,o,a,c){if(!Fs(s.precondition,o))return a;const u=Nh(s.fieldTransforms,c,o),l=o.data;return l.setAll(Ap(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return Fs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function IA(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Ip(r.transform,i||null);s!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function Dh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mr(r,i,(s,o)=>gA(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Or extends Jo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bt extends Jo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ap(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Vh(n,e,t){const r=new Map;b(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pA(o,a,t[i]))}return r}function Nh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,mA(s,o,e))}return r}class Mr extends Jo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nu extends Jo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yA(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=pp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Tp(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(t,r)=>Dh(t,r))&&mr(this.baseMutations,e.baseMutations,(t,r)=>Dh(t,r))}}class Ou{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){b(e.mutations.length===r.length);let i=function(){return hA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ou(e,t,r,i)}}/**
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
 */class Mu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ce,M;function Rp(n){switch(n){default:return R();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Pp(n){if(n===void 0)return ie("GRPC error has no .code"),p.UNKNOWN;switch(n){case ce.OK:return p.OK;case ce.CANCELLED:return p.CANCELLED;case ce.UNKNOWN:return p.UNKNOWN;case ce.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case ce.INTERNAL:return p.INTERNAL;case ce.UNAVAILABLE:return p.UNAVAILABLE;case ce.UNAUTHENTICATED:return p.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case ce.NOT_FOUND:return p.NOT_FOUND;case ce.ALREADY_EXISTS:return p.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return p.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case ce.ABORTED:return p.ABORTED;case ce.OUT_OF_RANGE:return p.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return p.UNIMPLEMENTED;case ce.DATA_LOSS:return p.DATA_LOSS;default:return R()}}(M=ce||(ce={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Lu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Rs}static getOrCreateInstance(){return Rs===null&&(Rs=new Lu),Rs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Rs=null;/**
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
 */function bp(){return new TextEncoder}/**
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
 */const wA=new or([4294967295,4294967295],0);function xh(n){const e=bp().encode(n),t=new mT;return t.update(e),new Uint8Array(t.digest())}function Oh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([t,r],0),new or([i,s],0)]}class Fu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ri(`Invalid padding: ${t}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ri(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=or.fromNumber(this.Ae)}Ve(e,t,r){let i=e.add(t.multiply(or.fromNumber(r)));return i.compare(wA)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const t=xh(e),[r,i]=Oh(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fu(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const t=xh(e),[r,i]=Oh(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class us{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ls.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new us(P.min(),i,new G(V),Fe(),N())}}class ls{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ls(r,t,N(),N(),N())}}/**
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
 */class Us{constructor(e,t,r,i){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=i}}class Sp{constructor(e,t){this.targetId=e,this.ye=t}}class Cp{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Mh{constructor(){this.we=0,this.Se=Fh(),this.be=he.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=N(),t=N(),r=N();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:R()}}),new ls(this.be,this.De,e,t,r)}Oe(){this.ve=!1,this.Se=Fh()}Ne(e,t){this.ve=!0,this.Se=this.Se.insert(e,t)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class EA{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Fe(),this.Ue=Lh(),this.We=new G(V)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{const r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:R()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((r,i)=>{this.Ye(i)&&t(i)})}Xe(e){var t;const r=e.targetId,i=e.ye.count,s=this.et(r);if(s){const o=s.target;if(oo(o))if(i===0){const a=new w(o.path);this.je(r,a,H.newNoDocument(a,P.min()))}else b(i===1);else{const a=this.tt(r);if(a!==i){const c=this.nt(e),u=c?this.rt(c,e,a):1;if(u!==0){this.Ze(r);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,l)}(t=Lu.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,I,E){var v,C,x,D,B,q;const j={localCacheCount:h,existenceFilterCount:d.count,databaseId:f.database,projectId:f.projectId},W=d.unchangedNames;return W&&(j.bloomFilter={applied:E===0,hashCount:(v=W?.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(D=(x=(C=W?.bits)===null||C===void 0?void 0:C.bitmap)===null||x===void 0?void 0:x.length)!==null&&D!==void 0?D:0,padding:(q=(B=W?.bits)===null||B===void 0?void 0:B.padding)!==null&&q!==void 0?q:0,mightContain:Xe=>{var mt;return(mt=I?.mightContain(Xe))!==null&&mt!==void 0&&mt}}),j}(a,e.ye,this.Qe.it(),c,u))}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Wt(r).toUint8Array()}catch(c){if(c instanceof Zm)return Je("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Fu(o,i,s)}catch(c){return Je(c instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,t,r){return t.ye.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.Qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(t,s,null),i++)}),i}ot(e){const t=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&oo(a.target)){const c=new w(a.target.path);this.$e.get(c)!==null||this._t(o,c)||this.je(o,c,H.newNoDocument(c,e))}s.Fe&&(t.set(o,s.xe()),s.Oe())}});let r=N();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.et(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new us(e,t,this.We,this.$e,r);return this.$e=Fe(),this.Ue=Lh(),this.We=new G(V),i}ze(e,t){if(!this.Ye(e))return;const r=this._t(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ut(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;const i=this.Je(e);this._t(e,t)?i.Ne(t,1):i.Be(t),this.Ue=this.Ue.insert(t,this.ut(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new Mh,this.Ke.set(e,t)),t}ut(e){let t=this.Ue.get(e);return t||(t=new Q(V),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=this.et(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.Ce?null:this.Qe.ct(e)}Ze(e){this.Ke.set(e,new Mh),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}_t(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function Lh(){return new G(w.comparator)}function Fh(){return new G(w.comparator)}const TA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RA=(()=>({and:"AND",or:"OR"}))();class PA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mc(n,e){return n.useProto3Json||is(e)?e:{value:e}}function Ir(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bA(n,e){return Ir(n,e.toTimestamp())}function oe(n){return b(!!n),P.fromTimestamp(function(t){const r=Gt(t);return new J(r.seconds,r.nanos)}(n))}function Uu(n,e){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Dp(n){const e=F.fromString(n);return b(Bp(e)),e}function Oi(n,e){return Uu(n.databaseId,e.path)}function ut(n,e){const t=Dp(e);if(t.get(1)!==n.databaseId.projectId)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(Np(t))}function pc(n,e){return Uu(n.databaseId,e)}function Vp(n){const e=Dp(n);return e.length===4?F.emptyPath():Np(e)}function Mi(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Np(n){return b(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Uh(n,e,t){return{name:Oi(n,e),fields:t.value.mapValue.fields}}function xp(n,e,t){const r=ut(n,e.name),i=oe(e.updateTime),s=e.createTime?oe(e.createTime):P.min(),o=new Ee({mapValue:{fields:e.fields}}),a=H.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function SA(n,e){return"found"in e?function(r,i){b(!!i.found),i.found.name,i.found.updateTime;const s=ut(r,i.found.name),o=oe(i.found.updateTime),a=i.found.createTime?oe(i.found.createTime):P.min(),c=new Ee({mapValue:{fields:i.found.fields}});return H.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){b(!!i.missing),b(!!i.readTime);const s=ut(r,i.missing),o=oe(i.readTime);return H.newNoDocument(s,o)}(n,e):R()}function CA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(b(l===void 0||typeof l=="string"),he.fromBase64String(l||"")):(b(l===void 0||l instanceof Uint8Array),he.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Pp(u.code);return new g(l,u.message||"")}(o);t=new Cp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ut(n,r.document.name),s=oe(r.document.updateTime),o=r.document.createTime?oe(r.document.createTime):P.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=H.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Us(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ut(n,r.document),s=r.readTime?oe(r.readTime):P.min(),o=H.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Us([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ut(n,r.document),s=r.removedTargetIds||[];t=new Us([],s,i,null)}else{if(!("filter"in e))return R();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vA(i,s),a=r.targetId;t=new Sp(a,o)}}return t}function Li(n,e){let t;if(e instanceof Or)t={update:Uh(n,e.key,e.value)};else if(e instanceof Mr)t={delete:Oi(n,e.key)};else if(e instanceof bt)t={update:Uh(n,e.key,e.data),updateMask:OA(e.fieldMask)};else{if(!(e instanceof Nu))return R();t={verify:Oi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _r)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Dn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yr)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw R()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R()}(n,e.precondition)),t}function gc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Y.updateTime(oe(s.updateTime)):s.exists!==void 0?Y.exists(s.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)b(a.setToServerValue==="REQUEST_TIME"),c=new _r;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new kn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Dn(l)}else"increment"in a?c=new yr(o,a.increment):R();const u=se.fromServerFormat(a.fieldPath);return new cs(u,c)}(n,i)):[];if(e.update){e.update.name;const i=ut(n,e.update.name),s=new Ee({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Le(u.map(l=>se.fromServerFormat(l)))}(e.updateMask);return new bt(i,s,o,t,r)}return new Or(i,s,t,r)}if(e.delete){const i=ut(n,e.delete);return new Mr(i,t)}if(e.verify){const i=ut(n,e.verify);return new Nu(i,t)}return R()}function kA(n,e){return n&&n.length>0?(b(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?oe(i.updateTime):oe(s);return o.isEqual(P.min())&&(o=oe(s)),new _A(o,i.transformResults||[])}(t,e))):[]}function Op(n,e){return{documents:[pc(n,e.path)]}}function Mp(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=pc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=pc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Up($.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Yn(h.field),direction:VA(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=mc(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Lp(n){let e=Vp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){b(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Fp(h);return d instanceof $&&Cu(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(I){return new ar(Jn(I.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,is(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Qt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Qt(f,d)}(t.endAt)),up(e,i,o,s,a,"F",c,u)}function DA(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jn(t.unaryFilter.field);return O.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jn(t.unaryFilter.field);return O.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jn(t.unaryFilter.field);return O.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jn(t.unaryFilter.field);return O.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(n):n.fieldFilter!==void 0?function(t){return O.create(Jn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $.create(t.compositeFilter.filters.map(r=>Fp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return R()}}(t.compositeFilter.op))}(n):R()}function VA(n){return TA[n]}function NA(n){return AA[n]}function xA(n){return RA[n]}function Yn(n){return{fieldPath:n.canonicalString()}}function Jn(n){return se.fromServerFormat(n.fieldPath)}function Up(n){return n instanceof O?function(t){if(t.op==="=="){if(Eh(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(wh(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Eh(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(wh(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:NA(t.op),value:t.value}}}(n):n instanceof $?function(t){const r=t.getFilters().map(i=>Up(i));return r.length===1?r[0]:{compositeFilter:{op:xA(t.op),filters:r}}}(n):R()}function OA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _t{constructor(e,t,r,i,s=P.min(),o=P.min(),a=he.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new _t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qp{constructor(e){this.lt=e}}function MA(n,e){let t;if(e.document)t=xp(n.lt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=w.fromSegments(e.noDocument.path),i=Nn(e.noDocument.readTime);t=H.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return R();{const r=w.fromSegments(e.unknownDocument.path),i=Nn(e.unknownDocument.version);t=H.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new J(i[0],i[1]);return P.fromTimestamp(s)}(e.readTime)),t}function Bh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:uo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Oi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ir(s,o.version.toTimestamp()),createTime:Ir(s,o.createTime.toTimestamp())}}(n.lt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Vn(e.version)};else{if(!e.isUnknownDocument())return R();r.unknownDocument={path:t.path.toArray(),version:Vn(e.version)}}return r}function uo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Vn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Nn(n){const e=new J(n.seconds,n.nanoseconds);return P.fromTimestamp(e)}function dn(n,e){const t=(e.baseMutations||[]).map(s=>gc(n.lt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>gc(n.lt,s)),i=J.fromMillis(e.localWriteTimeMs);return new xu(e.batchId,i,t,r)}function ii(n){const e=Nn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Nn(n.lastLimboFreeSnapshotVersion):P.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return b(s.documents.length===1),Ue(xr(Vp(s.documents[0])))}(n.query):function(s){return Ue(Lp(s))}(n.query),new _t(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,he.fromBase64String(n.resumeToken))}function $p(n,e){const t=Vn(e.snapshotVersion),r=Vn(e.lastLimboFreeSnapshotVersion);let i;i=oo(e.target)?Op(n.lt,e.target):Mp(n.lt,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Cn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Bu(n){const e=Lp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?co(e,e.limit,"L"):e}function Oa(n,e){return new Mu(e.largestBatchId,gc(n.lt,e.overlayMutation))}function qh(n,e){const t=e.path.lastSegment();return[n,Ve(e.path.popLast()),t]}function $h(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Vn(r.readTime),documentKey:Ve(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class LA{getBundleMetadata(e,t){return zh(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Nn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return zh(e).put(function(i){return{bundleId:i.id,createTime:Vn(oe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return jh(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Bu(s.bundledQuery),readTime:Nn(s.readTime)}}(r)})}saveNamedQuery(e,t){return jh(e).put(function(i){return{name:i.name,readTime:Vn(oe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function zh(n){return ye(n,"bundles")}function jh(n){return ye(n,"namedQueries")}/**
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
 */class Xo{constructor(e,t){this.serializer=e,this.userId=t}static ht(e,t){const r=t.uid||"";return new Xo(e,r)}getOverlay(e,t){return jr(e).get(qh(this.userId,t)).next(r=>r?Oa(this.serializer,r):null)}getOverlays(e,t){const r=ct();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Mu(t,o);i.push(this.Pt(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ve(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(jr(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ct(),s=Ve(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return jr(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Oa(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ct();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return jr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Oa(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}Pt(e,t){return jr(e).put(function(i,s,o){const[a,c,u]=qh(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Li(i.lt,o.mutation)}}(this.serializer,this.userId,t))}}function jr(n){return ye(n,"documentOverlays")}/**
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
 */class fn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ee(e.integerValue));else if("doubleValue"in e){const r=ee(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Di(r)?t.At(0):t.At(r))}else if("timestampValue"in e){const r=e.timestampValue;this.dt(t,20),typeof r=="string"?t.Rt(r):(t.Rt(`${r.seconds||""}`),t.At(r.nanos||0))}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Wt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?ep(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):R()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}St(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),w.fromName(e).path.forEach(r=>{this.dt(t,60),this.bt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}fn.Dt=new fn;function FA(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Gh(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=FA(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class UA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ct(r.value),r=t.next();this.Ft()}Mt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.xt(r.value),r=t.next();this.Ot()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=t.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.Ft()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.xt(r);else if(r<2048)this.xt(960|r>>>6),this.xt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|r>>>12),this.xt(128|63&r>>>6),this.xt(128|63&r);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}Lt(e){const t=this.kt(e),r=Gh(t);this.qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Qt(e){const t=this.kt(e),r=Gh(t);this.qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Kt(){this.$t(255),this.$t(255)}Ut(){this.Wt(255),this.Wt(255)}reset(){this.position=0}seed(e){this.qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Gt(){return this.buffer.slice(0,this.position)}kt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ct(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(t)}xt(e){const t=255&e;t===0?(this.Wt(0),this.Wt(255)):t===255?(this.Wt(255),this.Wt(0)):this.Wt(e)}Ft(){this.$t(0),this.$t(1)}Ot(){this.Wt(0),this.Wt(1)}$t(e){this.qt(1),this.buffer[this.position++]=e}Wt(e){this.qt(1),this.buffer[this.position++]=~e}qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class BA{constructor(e){this.zt=e}gt(e){this.zt.vt(e)}Rt(e){this.zt.Nt(e)}At(e){this.zt.Lt(e)}Et(){this.zt.Kt()}}class qA{constructor(e){this.zt=e}gt(e){this.zt.Mt(e)}Rt(e){this.zt.Bt(e)}At(e){this.zt.Qt(e)}Et(){this.zt.Ut()}}class Gr{constructor(){this.zt=new UA,this.jt=new BA(this.zt),this.Ht=new qA(this.zt)}seed(e){this.zt.seed(e)}Jt(e){return e===0?this.jt:this.Ht}Gt(){return this.zt.Gt()}reset(){this.zt.reset()}}/**
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
 */class mn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Yt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new mn(this.indexId,this.documentKey,this.arrayValue,r)}}function kt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Wh(n.arrayValue,e.arrayValue),t!==0?t:(t=Wh(n.directionalValue,e.directionalValue),t!==0?t:w.comparator(n.documentKey,e.documentKey)))}function Wh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class $A{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const r=t;r.isInequality()?this.en=r:this.Xt.push(r)}}tn(e){b(e.collectionGroup===this.collectionId);const t=sc(e);if(t!==void 0&&!this.nn(t))return!1;const r=ln(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.en!==void 0){if(!i.has(this.en.field.canonicalString())){const a=r[s];if(!this.rn(this.en,a)||!this.sn(this.Zt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function zp(n){var e,t;if(b(n instanceof O||n instanceof $),n instanceof O){if(n instanceof cp){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>O.create(n.field,"==",s)))||[];return $.create(i,"or")}return n}const r=n.filters.map(i=>zp(i));return $.create(r,n.op)}function zA(n){if(n.getFilters().length===0)return[];const e=Ic(zp(n));return b(jp(e)),_c(e)||yc(e)?[e]:e.getFilters()}function _c(n){return n instanceof O}function yc(n){return n instanceof $&&Cu(n)}function jp(n){return _c(n)||yc(n)||function(t){if(t instanceof $&&uc(t)){for(const r of t.getFilters())if(!_c(r)&&!yc(r))return!1;return!0}return!1}(n)}function Ic(n){if(b(n instanceof O||n instanceof $),n instanceof O)return n;if(n.filters.length===1)return Ic(n.filters[0]);const e=n.filters.map(r=>Ic(r));let t=$.create(e,n.op);return t=lo(t),jp(t)?t:(b(t instanceof $),b(gr(t)),b(t.filters.length>1),t.filters.reduce((r,i)=>qu(r,i)))}function qu(n,e){let t;return b(n instanceof O||n instanceof $),b(e instanceof O||e instanceof $),t=n instanceof O?e instanceof O?function(i,s){return $.create([i,s],"and")}(n,e):Kh(n,e):e instanceof O?Kh(e,n):function(i,s){if(b(i.filters.length>0&&s.filters.length>0),gr(i)&&gr(s))return sp(i,s.getFilters());const o=uc(i)?i:s,a=uc(i)?s:i,c=o.filters.map(u=>qu(u,a));return $.create(c,"or")}(n,e),lo(t)}function Kh(n,e){if(gr(e))return sp(e,n.getFilters());{const t=e.filters.map(r=>qu(n,r));return $.create(t,"or")}}function lo(n){if(b(n instanceof O||n instanceof $),n instanceof O)return n;const e=n.getFilters();if(e.length===1)return lo(e[0]);if(rp(n))return n;const t=e.map(i=>lo(i)),r=[];return t.forEach(i=>{i instanceof O?r.push(i):i instanceof $&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:$.create(r,n.op)}/**
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
 */class jA{constructor(){this.on=new $u}addToCollectionParentIndex(e,t){return this.on.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(ze.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class $u{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Q(F.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Q(F.comparator)).toArray()}}/**
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
 */const Ps=new Uint8Array(0);class GA{constructor(e,t){this.user=e,this.databaseId=t,this._n=new $u,this.an=new on(r=>Cn(r),(r,i)=>ss(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const s={collectionId:r,parent:Ve(i)};return Hh(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[qm(t),""],!1,!0);return Hh(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(at(o.parent))}return r})}addFieldIndex(e,t){const r=bs(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Kr(e);return s.next(a=>{o.put($h(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=bs(e),i=Kr(e),s=Wr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Wr(e);let i=!0;const s=new Map;return m.forEach(this.un(t),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=N();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(B=>`${B.fieldPath}:${B.kind}`).join(",")}`}(c)} to execute ${Cn(t)}`);const l=function(D,B){const q=sc(B);if(q===void 0)return null;for(const j of ao(D,q.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(u,c),h=function(D,B){const q=new Map;for(const j of ln(B))for(const W of ao(D,j.fieldPath))switch(W.op){case"==":case"in":q.set(j.fieldPath.canonicalString(),W.value);break;case"not-in":case"!=":return q.set(j.fieldPath.canonicalString(),W.value),Array.from(q.values())}return null}(u,c),d=function(D,B){const q=[];let j=!0;for(const W of ln(B)){const Xe=W.kind===0?bh(D,W.fieldPath,D.startAt):Sh(D,W.fieldPath,D.startAt);q.push(Xe.value),j&&(j=Xe.inclusive)}return new Qt(q,j)}(u,c),f=function(D,B){const q=[];let j=!0;for(const W of ln(B)){const Xe=W.kind===0?Sh(D,W.fieldPath,D.endAt):bh(D,W.fieldPath,D.endAt);q.push(Xe.value),j&&(j=Xe.inclusive)}return new Qt(q,j)}(u,c),I=this.ln(c,u,d),E=this.ln(c,u,f),v=this.hn(c,u,h),C=this.Pn(c.indexId,l,I,d.inclusive,E,f.inclusive,v);return m.forEach(C,x=>r.H(x,t.limit).next(D=>{D.forEach(B=>{const q=w.fromSegments(B.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return m.resolve(null)})}un(e){let t=this.an.get(e);return t||(e.filters.length===0?t=[e]:t=zA($.create(e.filters,"and")).map(r=>hc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.In(t[h/u]):Ps,f=this.Tn(e,d,r[h%u],i),I=this.En(e,d,s[h%u],o),E=a.map(v=>this.Tn(e,d,v,!0));l.push(...this.createRange(f,I,E))}return l}Tn(e,t,r,i){const s=new mn(e,w.empty(),t,r);return i?s:s.Yt()}En(e,t,r,i){const s=new mn(e,w.empty(),t,r);return i?s.Yt():s}cn(e,t){const r=new $A(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.un(t);return m.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Q(se.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}dn(e,t){const r=new Gr;for(const i of ln(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Jt(i.kind);fn.Dt.It(s,o)}return r.Gt()}In(e){const t=new Gr;return fn.Dt.It(e,t.Jt(0)),t.Gt()}An(e,t){const r=new Gr;return fn.Dt.It(Sn(this.databaseId,t),r.Jt(function(s){const o=ln(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Gt()}hn(e,t,r){if(r===null)return[];let i=[];i.push(new Gr);let s=0;for(const o of ln(e)){const a=r[s++];for(const c of i)if(this.Rn(t,o.fieldPath)&&xi(a))i=this.Vn(i,o,a);else{const u=c.Jt(o.kind);fn.Dt.It(a,u)}}return this.mn(i)}ln(e,t,r){return this.hn(e,t,r.position)}mn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Gt();return t}Vn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Gr;c.seed(a.Gt()),fn.Dt.It(o,c.Jt(t.kind)),s.push(c)}return s}Rn(e,t){return!!e.filters.find(r=>r instanceof O&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=bs(e),i=Kr(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new so(h.sequenceNumber,new ze(Nn(h.readTime),new w(at(h.documentKey)),h.largestBatchId)):so.empty(),f=l.fields.map(([I,E])=>new PT(se.fromServerFormat(I),E));return new $m(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:V(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=bs(e),s=Kr(e);return this.fn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put($h(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.gn(e,i,c).next(u=>{const l=this.pn(s,c);return u.isEqual(l)?m.resolve():this.yn(e,s,c,u,l)}))))})}wn(e,t,r,i){return Wr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,r,i){return Wr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,t.key),t.key.path.toArray()])}gn(e,t,r){const i=Wr(e);let s=new Q(kt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,t)])},(o,a)=>{s=s.add(new mn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,t){let r=new Q(kt);const i=this.dn(t,e);if(i==null)return r;const s=sc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(xi(o))for(const a of o.arrayValue.values||[])r=r.add(new mn(t.indexId,e.key,this.In(a),i))}else r=r.add(new mn(t.indexId,e.key,Ps,i));return r}yn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),I=u.getIterator();let E=Hn(f),v=Hn(I);for(;E||v;){let C=!1,x=!1;if(E&&v){const D=l(E,v);D<0?x=!0:D>0&&(C=!0)}else E!=null?x=!0:C=!0;C?(h(v),v=Hn(I)):x?(d(E),E=Hn(f)):(E=Hn(f),v=Hn(I))}}(i,s,kt,a=>{o.push(this.wn(e,t,r,a))},a=>{o.push(this.Sn(e,t,r,a))}),m.waitFor(o)}fn(e){let t=1;return Kr(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>kt(o,a)).filter((o,a,c)=>!a||kt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=kt(o,e),c=kt(o,t);if(a===0)i[0]=e.Yt();else if(a>0&&c<0)i.push(o),i.push(o.Yt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ps,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ps,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,t){return kt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Qh)}getMinOffset(e,t){return m.mapArray(this.un(t),r=>this.cn(e,r).next(i=>i||R())).next(Qh)}}function Hh(n){return ye(n,"collectionParents")}function Wr(n){return ye(n,"indexEntries")}function bs(n){return ye(n,"indexConfiguration")}function Kr(n){return ye(n,"indexState")}function Qh(n){b(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Pu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
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
 */const Yh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Gp(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{b(a===1)}));const u=[];for(const l of t.mutations){const h=Hm(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function ho(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw R();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(41943040,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);class Zo{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ht(e,t,r,i){b(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Zo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Xn(e),o=Dt(e);return o.add({}).next(a=>{b(typeof a=="number");const c=new xu(a,t,r,i),u=function(f,I,E){const v=E.baseMutations.map(x=>Li(f.lt,x)),C=E.mutations.map(x=>Li(f.lt,x));return{userId:I,batchId:E.batchId,localWriteTimeMs:E.localWriteTime.toMillis(),baseMutations:v,mutations:C}}(this.serializer,this.userId,c),l=[];let h=new Q((d,f)=>V(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Hm(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,VT))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Dt(e).get(t).next(r=>r?(b(r.userId===this.userId),dn(this.serializer,r)):null)}vn(e,t){return this.Dn[t]?m.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Dn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Dt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(b(a.batchId>=r),s=dn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Dt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).G("userMutationsIndex",t).next(r=>r.map(i=>dn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Os(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Xn(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=at(l);if(u===this.userId&&t.path.isEqual(d))return Dt(e).get(h).next(f=>{if(!f)throw R();b(f.userId===this.userId),s.push(dn(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(V);const i=[];return t.forEach(s=>{const o=Os(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Xn(e).Z({range:a},(u,l,h)=>{const[d,f,I]=u,E=at(f);d===this.userId&&s.path.isEqual(E)?r=r.add(I):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.Cn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Os(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Q(V);return Xn(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,I=at(d);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Cn(e,a))}Cn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Dt(e).get(s).next(o=>{if(o===null)throw R();b(o.userId===this.userId),r.push(dn(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Gp(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Xn(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=at(s[1]);i.push(c)}else a.done()}).next(()=>{b(i.length===0)})})}containsKey(e,t){return Wp(e,this.userId,t)}Mn(e){return Kp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Wp(n,e,t){const r=Os(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Xn(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Dt(n){return ye(n,"mutations")}function Xn(n){return ye(n,"documentMutations")}function Kp(n){return ye(n,"mutationQueues")}/**
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
 */class xn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new xn(0)}static Nn(){return new xn(-1)}}/**
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
 */class WA{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new xn(t.highestTargetId);return t.highestTargetId=r.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>P.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Ln(e,i)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(t,r),this.Ln(e,r))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Qn(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(b(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Qn(e).Z((o,a)=>{const c=ii(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Qn(e).Z((r,i)=>{const s=ii(i);t(s)})}Bn(e){return Jh(e).get("targetGlobalKey").next(t=>(b(t!==null),t))}Ln(e,t){return Jh(e).put("targetGlobalKey",t)}kn(e,t){return Qn(e).put($p(this.serializer,t))}qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Cn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Qn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=ii(a);ss(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Nt(e);return t.forEach(o=>{const a=Ve(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=Nt(e);return m.forEach(t,s=>{const o=Ve(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Nt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Nt(e);let s=N();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=at(o[1]),l=new w(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ve(t.path),i=IDBKeyRange.bound([r],[qm(r)],!1,!0);let s=0;return Nt(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ct(e,t){return Qn(e).get(t).next(r=>r?ii(r):null)}}function Qn(n){return ye(n,"targets")}function Jh(n){return ye(n,"targetGlobal")}function Nt(n){return ye(n,"targetDocuments")}/**
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
 */function Xh([n,e],[t,r]){const i=V(n,t);return i===0?V(e,r):i}class KA{constructor(e){this.Qn=e,this.buffer=new Q(Xh),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sn(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await rn(t)}await this.Gn(3e5)})}}class QA{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Me.ae);const r=new KA(t);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Yh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yh):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ic()<=L.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function YA(n,e){return new QA(n,e)}/**
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
 */class JA{constructor(e,t){this.db=e,this.garbageCollector=YA(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Yn(e){let t=0;return this.Hn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(r,i)=>t(i))}addReference(e,t,r){return Ss(e,r)}removeReference(e,t,r){return Ss(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ss(e,t)}Xn(e,t){return function(i,s){let o=!1;return Kp(i).X(a=>Wp(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=t){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,P.min()),Nt(e).delete(function(h){return[0,Ve(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ss(e,t)}Zn(e,t){const r=Nt(e);let i,s=Me.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Me.ae&&t(new w(at(i)),s),s=u,i=c):s=Me.ae}).next(()=>{s!==Me.ae&&t(new w(at(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ss(n,e){return Nt(n).put(function(r,i){return{targetId:0,path:Ve(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
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
 */class Hp{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,H.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return cn(e).put(r)}removeEntry(e,t,r){return cn(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],uo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.er(e,r)))}getEntry(e,t){let r=H.newInvalidDocument(t);return cn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Hr(t))},(i,s)=>{r=this.tr(t,s)}).next(()=>r)}nr(e,t){let r={size:0,document:H.newInvalidDocument(t)};return cn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Hr(t))},(i,s)=>{r={document:this.tr(t,s),size:ho(s)}}).next(()=>r)}getEntries(e,t){let r=Fe();return this.rr(e,t,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,t){let r=Fe(),i=new G(w.comparator);return this.rr(e,t,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,ho(o))}).next(()=>({documents:r,sr:i}))}rr(e,t,r){if(t.isEmpty())return m.resolve();let i=new Q(td);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Hr(i.first()),Hr(i.last())),o=i.getIterator();let a=o.getNext();return cn(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=w.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&td(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Hr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),uo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return cn(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Fe();for(const l of c){const h=this.tr(w.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(as(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Fe();const o=ed(t,r),a=ed(t,ze.max());return cn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(w.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new ZA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Zh(e).get("remoteDocumentGlobalKey").next(t=>(b(!!t),t))}er(e,t){return Zh(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const r=MA(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(P.min())))return r}return H.newInvalidDocument(e)}}function Qp(n){return new XA(n)}class ZA extends Hp{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new on(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Q((s,o)=>V(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(t.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Bh(this._r.serializer,o);i=i.add(s.path.popLast());const u=ho(c);r+=u-a.size,t.push(this._r.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Bh(this._r.serializer,o.convertToNoDocument(P.min()));t.push(this._r.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),t.push(this._r.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(r=>(this.ar.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Zh(n){return ye(n,"remoteDocumentGlobal")}function cn(n){return ye(n,"remoteDocumentsV14")}function Hr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ed(n,e){const t=e.documentKey.path.toArray();return[n,uo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function td(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=V(t[s],r[s]),i)return i;return i=V(t.length,r.length),i||(i=V(t[t.length-2],r[r.length-2]),i||V(t[t.length-1],r[r.length-1]))}/**
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
 */class eR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Yp{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&hi(r.mutation,i,Le.empty(),J.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,N()).next(()=>r))}getLocalViewOfDocuments(e,t,r=N()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ni();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,N()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Fe();const o=li(),a=function(){return li()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof bt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),hi(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,Le.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new eR(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=li();let i=new G((o,a)=>o-a),s=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Le.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||N()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=pp();l.forEach(d=>{if(!s.has(d)){const f=Tp(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return w.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Du(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(ct());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,N())).next(l=>({batchId:a,changes:mp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next(r=>{let i=ni();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ni();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new Pt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,H.newInvalidDocument(u)))});let o=ni();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&hi(u.mutation,c,Le.empty(),J.now()),as(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class tR{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return m.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:oe(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:Bu(i.bundledQuery),readTime:oe(i.readTime)}}(t)),m.resolve()}}/**
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
 */class nR{constructor(){this.overlays=new G(w.comparator),this.lr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ct();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Pt(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=ct(),s=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new G((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ct(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}Pt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mu(t,r));let s=this.lr.get(t);s===void 0&&(s=N(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
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
 */class zu{constructor(){this.hr=new Q(de.Pr),this.Ir=new Q(de.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new de(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new de(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new w(new F([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new w(new F([])),r=new de(t,e),i=new de(t,e+1);let s=N();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new de(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return w.comparator(e.key,t.key)||V(e.gr,t.gr)}static Tr(e,t){return V(e.gr,t.gr)||w.comparator(e.key,t.key)}}/**
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
 */class rR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Q(de.Pr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new de(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(V);return t.forEach(i=>{const s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;w.isDocumentKey(s)||(s=s.child(""));const o=new de(new w(s),0);let a=new Q(V);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),m.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){b(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(t.mutations,i=>{const s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new de(t,0),i=this.yr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iR{constructor(e){this.vr=e,this.docs=function(){return new G(w.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():H.newInvalidDocument(t))}getEntries(e,t){let r=Fe();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():H.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Fe();const o=t.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pu(jm(l),r)<=0||(i.has(l.key)||as(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){R()}Cr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new sR(this)}getSize(e){return m.resolve(this.size)}}class sR extends Hp{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
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
 */class oR{constructor(e){this.persistence=e,this.Fr=new on(t=>Cn(t),ss),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new zu,this.targetCount=0,this.Nr=xn.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),m.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new xn(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.kn(t),m.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Or.containsKey(t))}}/**
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
 */class Jp{constructor(e,t){this.Br={},this.overlays={},this.Lr=new Me(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new oR(this),this.indexManager=new jA,this.remoteDocumentCache=function(i){return new iR(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new qp(t),this.Kr=new tR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new rR(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new aR(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class aR extends Wm{constructor(e){super(),this.currentSequenceNumber=e}}class ea{constructor(e){this.persistence=e,this.Gr=new zu,this.zr=null}static jr(e){return new ea(e)}get Hr(){if(this.zr)return this.zr;throw R()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const i=w.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,P.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return m.or([()=>m.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
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
 */class cR{constructor(e){this.serializer=e}B(e,t,r,i){const s=new Ko("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_h,{unique:!0}),c.createObjectStore("documentMutations")}(e),nd(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),nd(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_h,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:jT});u.createIndex("collectionPathOverlayIndex",GT,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",WT,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:NT});u.createIndex("documentKeyIndex",xT),u.createIndex("collectionGroupIndex",OT)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:BT}).createIndex("sequenceNumberIndex",qT,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:$T}).createIndex("documentKeyIndex",zT,{unique:!1})}(e))),o}Xr(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=ho(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{b(c.userId===s.userId);const u=dn(this.serializer,c);return Gp(e,s.userId,u).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(h){return[0,Ve(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:Ve(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:UT});const r=t.store("collectionParents"),i=new $u,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ve(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=at(a);return s(l.popLast())}))}ni(e){const t=e.store("targets");return t.Z((r,i)=>{const s=ii(i),o=$p(this.serializer,s);return t.put(o)})}ri(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new w(F.fromString(h.document.name).popFirst(5)):h.noDocument?w.fromSegments(h.noDocument.path):h.unknownDocument?w.fromSegments(h.unknownDocument.path):R()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ii(e,t){const r=t.store("mutations"),i=Qp(this.serializer),s=new Jp(ea.jr,this.serializer.lt);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:N();dn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new fe(u),h=Xo.ht(this.serializer,l),d=s.getIndexManager(l),f=Zo.ht(l,this.serializer,d,s.referenceDelegate);return new Yp(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new oc(t,Me.ae),c).next()})})}}function nd(n){n.createObjectStore("targetDocuments",{keyPath:LT}).createIndex("documentTargetsIndex",FT,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MT,{unique:!0}),n.createObjectStore("targetGlobal")}const Ma="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ju{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!ju.v())throw new g(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JA(this,i),this.Ii=t+"main",this.serializer=new qp(c),this.Ti=new Ke(this.Ii,this.ai,new cR(this.serializer)),this.qr=new WA(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Qp(this.serializer),this.Kr=new LA,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&ie("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,Ma);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new Me(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Cs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(sn(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return Qr(e).get("owner").next(t=>m.resolve(this.wi(t)))}Si(e){return Cs(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ye(t,"clientMetadata");return r.G().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.Ci(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?m.resolve(!0):Qr(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new g(p.FAILED_PRECONDITION,Ma);return!1}}return!(!this.networkEnabled||!this.inForeground)||Cs(e).G().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new oc(e,Me.ae);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}vi(e,t){return e.filter(r=>this.Di(r.updateTimeMs,t)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Cs(e).G().next(t=>this.vi(t,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return Zo.ht(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new GA(e,this.serializer.lt.databaseId)}getDocumentOverlayCache(e){return Xo.ht(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?HT:c===14?Jm:c===13?Ym:c===12?KT:c===11?Qm:void R()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new oc(a,this.Lr?this.Lr.next():Me.ae),t==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw ie(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new g(p.FAILED_PRECONDITION,Gm);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return Qr(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)&&!this.wi(t)&&!(this._i||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(p.FAILED_PRECONDITION,Ma)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Qr(e).put("owner",t)}static v(){return Ke.v()}pi(e){const t=Qr(e);return t.get("owner").next(r=>this.wi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}Di(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ie(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const t=/(?:Version|Mobile)\/1[456]/;S_()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const r=((t=this.Ei)===null||t===void 0?void 0:t.getItem(this.Ci(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ie("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.Ci(this.clientId),String(Date.now()))}catch(e){ie("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.Ci(this.clientId))}catch{}}Ci(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Qr(n){return ye(n,"owner")}function Cs(n){return ye(n,"clientMetadata")}function Gu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Wu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=N(),i=N();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wu(e,t.fromCache,r,i)}}/**
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
 */class Xp{constructor(){this.Ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ui(e,t).next(s=>s||this.Wi(e,t,i,r)).next(s=>s||this.Gi(e,t))}Ui(e,t){if(Ch(t))return m.resolve(null);let r=Ue(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=co(t,null,"F"),r=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=N(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.zi(t,a);return this.ji(t,u,o,c.readTime)?this.Ui(e,co(t,null,"F")):this.Hi(e,u,t,c)}))})))}Wi(e,t,r,i){return Ch(t)||i.isEqual(P.min())?this.Gi(e,t):this.$i.getDocuments(e,r).next(s=>{const o=this.zi(t,s);return this.ji(t,o,r,i)?this.Gi(e,t):(ic()<=L.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fc(t)),this.Hi(e,o,t,zm(i,-1)))})}zi(e,t){let r=new Q(dp(e));return t.forEach((i,s)=>{as(e,s)&&(r=r.add(s))}),r}ji(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,t){return ic()<=L.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",fc(t)),this.$i.getDocumentsMatchingQuery(e,t,ze.min())}Hi(e,t,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uR{constructor(e,t,r,i){this.persistence=e,this.Ji=t,this.serializer=i,this.Yi=new G(V),this.Zi=new on(s=>Cn(s),ss),this.Xi=new Map,this.es=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.ts(r)}ts(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yp(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Yi))}}function Zp(n,e,t,r){return new uR(n,e,t,r)}async function eg(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ts(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=N();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function lR(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.es.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(c,I)).next(E=>{const v=u.docVersions.get(I);b(v!==null),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),l.addEntry(E)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=N();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function tg(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function hR(n,e){const t=T(n),r=e.snapshotVersion;let i=t.Yi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.es.newChangeBuffer({trackRemovals:!0});i=t.Yi;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(he.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(E,v,C){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,l)&&a.push(t.qr.updateTargetData(s,f))});let c=Fe(),u=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(ng(s,o,e.documentUpdates).next(l=>{c=l.rs,u=l.ss})),!r.isEqual(P.min())){const l=t.qr.getLastRemoteSnapshotVersion(s).next(h=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Yi=i,s))}function ng(n,e,t){let r=N(),i=N();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Fe();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{rs:o,ss:i}})}function dR(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vr(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.qr.allocateTargetId(r).next(o=>(i=new _t(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Yi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Yi=t.Yi.insert(r.targetId,r),t.Zi.set(e,r.targetId)),r})}async function wr(n,e,t){const r=T(n),i=r.Yi.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Yi=r.Yi.remove(e),r.Zi.delete(i.target)}function fo(n,e,t){const r=T(n);let i=P.min(),s=N();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=T(c),d=h.Zi.get(l);return d!==void 0?m.resolve(h.Yi.get(d)):h.qr.getTargetData(u,l)}(r,o,Ue(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?s:N())).next(a=>(sg(r,hp(e),a),{documents:a,os:s})))}function rg(n,e){const t=T(n),r=T(t.qr),i=t.Yi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ct(s,e).next(o=>o?o.target:null))}function ig(n,e){const t=T(n),r=t.Xi.get(e)||P.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.es.getAllFromCollectionGroup(i,e,zm(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(sg(t,e,i),i))}function sg(n,e,t){let r=n.Xi.get(e)||P.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function fR(n,e,t,r){const i=T(n);let s=N(),o=Fe();for(const u of t){const l=e._s(u.metadata.name);u.document&&(s=s.add(l));const h=e.us(u);h.setReadTime(e.cs(u.metadata.readTime)),o=o.insert(l,h)}const a=i.es.newChangeBuffer({trackRemovals:!0}),c=await vr(i,function(l){return Ue(xr(F.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>ng(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.qr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.rs,l.ss)).next(()=>l.rs)))}async function mR(n,e,t=N()){const r=await vr(n,Ue(Bu(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=oe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(he.EMPTY_BYTE_STRING,o);return i.Yi=i.Yi.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function rd(n,e){return`firestore_clients_${n}_${e}`}function id(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function La(n,e){return`firestore_targets_${n}_${e}`}class mo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ls(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new mo(e,t,i.state,s):(ie("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class di{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ls(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new di(e,r.state,i):(ie("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class po{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ls(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Vu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Km(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new po(e,s):(ie("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ku{constructor(e,t){this.clientId=e,this.onlineState=t}static ls(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ku(t.clientId,t.onlineState):(ie("SharedClientState",`Failed to parse online state: ${e}`),null)}}class vc{constructor(){this.activeTargetIds=Vu()}Ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}Is(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fa{constructor(e,t,r,i,s){this.window=e,this.si=t,this.persistenceKey=r,this.Ts=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Es=this.ds.bind(this),this.As=new G(V),this.started=!1,this.Rs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Vs=rd(this.persistenceKey,this.Ts),this.fs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.As=this.As.insert(this.Ts,new vc),this.gs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ps=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ys=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ws=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Ss=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Es)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Ts)continue;const i=this.getItem(rd(this.persistenceKey,r));if(i){const s=po.ls(r,i);s&&(this.As=this.As.insert(s.clientId,s))}}this.bs();const t=this.storage.getItem(this.ws);if(t){const r=this.Ds(t);r&&this.vs(r)}for(const r of this.Rs)this.ds(r);this.Rs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Cs(this.As)}isActiveQueryTarget(e){let t=!1;return this.As.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Fs(e,"pending")}updateMutationState(e,t,r){this.Fs(e,t,r),this.Ms(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(La(this.persistenceKey,e));if(r){const i=di.ls(e,r);i&&(t=i.state)}}return this.xs.Ps(e),this.bs(),t}removeLocalQueryTarget(e){this.xs.Is(e),this.bs()}isLocalQueryTarget(e){return this.xs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(La(this.persistenceKey,e))}updateQueryState(e,t,r){this.Os(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Ms(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ns(e)}notifyBundleLoaded(e){this.Bs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Es),this.removeItem(this.Vs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ds(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Vs)return void ie("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.gs.test(t.key)){if(t.newValue==null){const r=this.Ls(t.key);return this.ks(r,null)}{const r=this.qs(t.key,t.newValue);if(r)return this.ks(r.clientId,r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Qs(t.key,t.newValue);if(r)return this.Ks(r)}}else if(this.ys.test(t.key)){if(t.newValue!==null){const r=this.$s(t.key,t.newValue);if(r)return this.Us(r)}}else if(t.key===this.ws){if(t.newValue!==null){const r=this.Ds(t.newValue);if(r)return this.vs(r)}}else if(t.key===this.fs){const r=function(s){let o=Me.ae;if(s!=null)try{const a=JSON.parse(s);b(typeof a=="number"),o=a}catch(a){ie("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Me.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.Ss){const r=this.Ws(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Gs(i)))}}}else this.Rs.push(t)})}}get xs(){return this.As.get(this.Ts)}bs(){this.setItem(this.Vs,this.xs.hs())}Fs(e,t,r){const i=new mo(this.currentUser,e,t,r),s=id(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hs())}Ms(e){const t=id(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ns(e){const t={clientId:this.Ts,onlineState:e};this.storage.setItem(this.ws,JSON.stringify(t))}Os(e,t,r){const i=La(this.persistenceKey,e),s=new di(e,t,r);this.setItem(i,s.hs())}Bs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ss,t)}Ls(e){const t=this.gs.exec(e);return t?t[1]:null}qs(e,t){const r=this.Ls(e);return po.ls(r,t)}Qs(e,t){const r=this.ps.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return mo.ls(new fe(s),i,t)}$s(e,t){const r=this.ys.exec(e),i=Number(r[1]);return di.ls(i,t)}Ds(e){return Ku.ls(e)}Ws(e){return JSON.parse(e)}async Ks(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.zs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Us(e){return this.syncEngine.js(e.targetId,e.state,e.error)}ks(e,t){const r=t?this.As.insert(e,t):this.As.remove(e),i=this.Cs(this.As),s=this.Cs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Hs(o,a).then(()=>{this.As=r})}vs(e){this.As.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Cs(e){let t=Vu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class og{constructor(){this.Js=new vc,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Js.Ps(e),this.Ys[e]||"not-current"}updateQueryState(e,t,r){this.Ys[e]=t}removeLocalQueryTarget(e){this.Js.Is(e)}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){delete this.Ys[e]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(e){return this.Js.activeTargetIds.has(e)}start(){return this.Js=new vc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pR{Zs(e){}shutdown(){}}/**
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
 */class sd{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(e){this.io.push(e)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.io)e(0)}ro(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.io)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ks=null;function Ua(){return ks===null?ks=function(){return 268435456+Math.round(2147483648*Math.random())}():ks++,"0x"+ks.toString(16)}/**
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
 */const gR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _R{constructor(e){this.oo=e.oo,this._o=e._o}ao(e){this.uo=e}co(e){this.lo=e}onMessage(e){this.ho=e}close(){this._o()}send(e){this.oo(e)}Po(){this.uo()}Io(e){this.lo(e)}To(e){this.ho(e)}}/**
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
 */const Re="WebChannelConnection";class yR extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+t.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(t,r,i,s,o){const a=Ua(),c=this.fo(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(u,s,o),this.yo(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Je("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}wo(t,r,i,s,o,a){return this.mo(t,r,i,s,o)}po(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}fo(t,r){const i=gR[t];return`${this.Eo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}yo(e,t,r,i){const s=Ua();return new Promise((o,a)=>{const c=new fT;c.setWithCredentials(!0),c.listenOnce(lT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xa.NO_ERROR:const l=c.getResponseJson();_(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case xa.TIMEOUT:_(Re,`RPC '${e}' ${s} timed out`),a(new g(p.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const h=c.getStatus();if(_(Re,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const I=function(v){const C=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(C)>=0?C:p.UNKNOWN}(f.status);a(new g(I,f.message))}else a(new g(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(p.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{_(Re,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(Re,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}So(e,t,r){const i=Ua(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cT(),a=uT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new dT({})),this.po(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Re,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const I=new _R({oo:v=>{f?_(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(_(Re,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(Re,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},_o:()=>h.close()}),E=(v,C,x)=>{v.listen(C,D=>{try{x(D)}catch(B){setTimeout(()=>{throw B},0)}})};return E(h,Ts.EventType.OPEN,()=>{f||_(Re,`RPC '${e}' stream ${i} transport opened.`)}),E(h,Ts.EventType.CLOSE,()=>{f||(f=!0,_(Re,`RPC '${e}' stream ${i} transport closed`),I.Io())}),E(h,Ts.EventType.ERROR,v=>{f||(f=!0,Je(Re,`RPC '${e}' stream ${i} transport errored:`,v),I.Io(new g(p.UNAVAILABLE,"The operation could not be completed")))}),E(h,Ts.EventType.MESSAGE,v=>{var C;if(!f){const x=v.data[0];b(!!x);const D=x,B=D.error||((C=D[0])===null||C===void 0?void 0:C.error);if(B){_(Re,`RPC '${e}' stream ${i} received error:`,B);const q=B.status;let j=function(mt){const _s=ce[mt];if(_s!==void 0)return Pp(_s)}(q),W=B.message;j===void 0&&(j=p.INTERNAL,W="Unknown error status: "+q+" with message "+B.message),f=!0,I.Io(new g(j,W)),h.close()}else _(Re,`RPC '${e}' stream ${i} received:`,x),I.To(x)}}),E(a,hT.STAT_EVENT,v=>{v.stat===fh.PROXY?_(Re,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===fh.NOPROXY&&_(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Po()},0),I}}/**
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
 */function ag(){return typeof window<"u"?window:null}function Bs(){return typeof document<"u"?document:null}/**
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
 */function hs(n){return new PA(n,!0)}/**
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
 */class Hu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const t=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
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
 */class cg{constructor(e,t,r,i,s,o,a,c){this.si=e,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new Hu(e,t)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(e){this.Yo(),this.stream.send(e)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(e,t){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,e!==4?this.$o.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(ie(t.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Xo(){}auth(){this.state=1;const e=this.e_(this.qo),t=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===t&&this.t_(r,i)},r=>{e(()=>{const i=new g(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(e,t){const r=this.e_(this.qo);this.stream=this.r_(e,t),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}e_(e){return t=>{this.si.enqueueAndForget(()=>this.qo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IR extends cg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}r_(e,t){return this.connection.So("Listen",e,t)}onMessage(e){this.$o.reset();const t=CA(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?oe(o.readTime):P.min()}(e);return this.listener.i_(t,r)}s_(e){const t={};t.database=Mi(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=oo(c)?{documents:Op(s,c)}:{query:Mp(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kp(s,o.resumeToken);const u=mc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Ir(s,o.snapshotVersion.toTimestamp());const u=mc(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=DA(this.serializer,e);r&&(t.labels=r),this.Jo(t)}o_(e){const t={};t.database=Mi(this.serializer),t.removeTarget=e,this.Jo(t)}}class vR extends cg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(e,t){return this.connection.So("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.__){this.$o.reset();const t=kA(e.writeResults,e.commitTime),r=oe(e.commitTime);return this.listener.c_(r,t)}return b(!e.writeResults||e.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const e={};e.database=Mi(this.serializer),this.Jo(e)}u_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Li(this.serializer,r))};this.Jo(t)}}/**
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
 */class wR extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}mo(e,t,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(p.UNKNOWN,i.toString())})}wo(e,t,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(p.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class ER{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(e){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.V_("Offline")))}set(e){this.g_(),this.E_=0,e==="Online"&&(this.A_=!1),this.V_(e)}V_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}m_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(ie(t),this.A_=!1):_("OnlineStateTracker",t)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
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
 */class TR{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{an(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.w_.add(4),await Lr(u),u.D_.set("Unknown"),u.w_.delete(4),await ds(u)}(this))})}),this.D_=new ER(r,i)}}async function ds(n){if(an(n))for(const e of n.S_)await e(!0)}async function Lr(n){for(const e of n.S_)await e(!1)}function ta(n,e){const t=T(n);t.y_.has(e.targetId)||(t.y_.set(e.targetId,e),Ju(t)?Yu(t):Ur(t).Wo()&&Qu(t,e))}function Fi(n,e){const t=T(n),r=Ur(t);t.y_.delete(e),r.Wo()&&ug(t,e),t.y_.size===0&&(r.Wo()?r.jo():an(t)&&t.D_.set("Unknown"))}function Qu(n,e){if(n.v_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ur(n).s_(e)}function ug(n,e){n.v_.Le(e),Ur(n).o_(e)}function Yu(n){n.v_=new EA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ct:e=>n.y_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Ur(n).start(),n.D_.R_()}function Ju(n){return an(n)&&!Ur(n).Uo()&&n.y_.size>0}function an(n){return T(n).w_.size===0}function lg(n){n.v_=void 0}async function AR(n){n.y_.forEach((e,t)=>{Qu(n,e)})}async function RR(n,e){lg(n),Ju(n)?(n.D_.f_(e),Yu(n)):n.D_.set("Unknown")}async function PR(n,e,t){if(n.D_.set("Online"),e instanceof Cp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.y_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.y_.delete(a),i.v_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await go(n,r)}else if(e instanceof Us?n.v_.Ge(e):e instanceof Sp?n.v_.Xe(e):n.v_.He(e),!t.isEqual(P.min()))try{const r=await tg(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.v_.ot(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.y_.get(u);l&&s.y_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.y_.get(c);if(!l)return;s.y_.set(c,l.withResumeToken(he.EMPTY_BYTE_STRING,l.snapshotVersion)),ug(s,c);const h=new _t(l.target,c,u,l.sequenceNumber);Qu(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await go(n,r)}}async function go(n,e,t){if(!sn(e))throw e;n.w_.add(1),await Lr(n),n.D_.set("Offline"),t||(t=()=>tg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.w_.delete(1),await ds(n)})}function hg(n,e){return e().catch(t=>go(n,t,e))}async function Fr(n){const e=T(n),t=Yt(e);let r=e.p_.length>0?e.p_[e.p_.length-1].batchId:-1;for(;bR(e);)try{const i=await dR(e.localStore,r);if(i===null){e.p_.length===0&&t.jo();break}r=i.batchId,SR(e,i)}catch(i){await go(e,i)}dg(e)&&fg(e)}function bR(n){return an(n)&&n.p_.length<10}function SR(n,e){n.p_.push(e);const t=Yt(n);t.Wo()&&t.a_&&t.u_(e.mutations)}function dg(n){return an(n)&&!Yt(n).Uo()&&n.p_.length>0}function fg(n){Yt(n).start()}async function CR(n){Yt(n).h_()}async function kR(n){const e=Yt(n);for(const t of n.p_)e.u_(t.mutations)}async function DR(n,e,t){const r=n.p_.shift(),i=Ou.from(r,e,t);await hg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Fr(n)}async function VR(n,e){e&&Yt(n).a_&&await async function(r,i){if(function(o){return Rp(o)&&o!==p.ABORTED}(i.code)){const s=r.p_.shift();Yt(r).zo(),await hg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fr(r)}}(n,e),dg(n)&&fg(n)}async function od(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=an(t);t.w_.add(3),await Lr(t),r&&t.D_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.w_.delete(3),await ds(t)}async function wc(n,e){const t=T(n);e?(t.w_.delete(2),await ds(t)):e||(t.w_.add(2),await Lr(t),t.D_.set("Unknown"))}function Ur(n){return n.C_||(n.C_=function(t,r,i){const s=T(t);return s.I_(),new IR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ao:AR.bind(null,n),co:RR.bind(null,n),i_:PR.bind(null,n)}),n.S_.push(async e=>{e?(n.C_.zo(),Ju(n)?Yu(n):n.D_.set("Unknown")):(await n.C_.stop(),lg(n))})),n.C_}function Yt(n){return n.F_||(n.F_=function(t,r,i){const s=T(t);return s.I_(),new vR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ao:CR.bind(null,n),co:VR.bind(null,n),l_:kR.bind(null,n),c_:DR.bind(null,n)}),n.S_.push(async e=>{e?(n.F_.zo(),await Fr(n)):(await n.F_.stop(),n.p_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.p_.length} pending writes`),n.p_=[]))})),n.F_}/**
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
 */class Xu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Xu(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Br(n,e){if(ie("AsyncQueue",`${e}: ${n}`),sn(n))return new g(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ur{constructor(e){this.comparator=e?(t,r)=>e(t,r)||w.comparator(t.key,r.key):(t,r)=>w.comparator(t.key,r.key),this.keyedMap=ni(),this.sortedSet=new G(this.comparator)}static emptySet(e){return new ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ad{constructor(){this.M_=new G(w.comparator)}track(e){const t=e.doc.key,r=this.M_.get(t);r?e.type!==0&&r.type===3?this.M_=this.M_.insert(t,e):e.type===3&&r.type!==1?this.M_=this.M_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.M_=this.M_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.M_=this.M_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.M_=this.M_.remove(t):e.type===1&&r.type===2?this.M_=this.M_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.M_=this.M_.insert(t,{type:2,doc:e.doc}):R():this.M_=this.M_.insert(t,e)}x_(){const e=[];return this.M_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Er{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Er(e,t,ur.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&os(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class NR{constructor(){this.O_=void 0,this.listeners=[]}}class xR{constructor(){this.queries=new on(e=>lp(e),os),this.onlineState="Unknown",this.N_=new Set}}async function Zu(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new NR),i)try{s.O_=await t.onListen(r)}catch(o){const a=Br(o,`Initialization of query '${fc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.B_(t.onlineState),s.O_&&e.L_(s.O_)&&tl(t)}async function el(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function OR(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.L_(i)&&(r=!0);o.O_=i}}r&&tl(t)}function MR(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function tl(n){n.N_.forEach(e=>{e.next()})}class nl{constructor(e,t,r){this.query=e,this.k_=t,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.q_?this.K_(e)&&(this.k_.next(e),t=!0):this.U_(e,this.onlineState)&&(this.W_(e),t=!0),this.Q_=e,t}onError(e){this.k_.error(e)}B_(e){this.onlineState=e;let t=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,e)&&(this.W_(this.Q_),t=!0),t}U_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.G_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}K_(e){if(e.docChanges.length>0)return!0;const t=this.Q_&&this.Q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}W_(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.q_=!0,this.k_.next(e)}}/**
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
 */class LR{constructor(e,t){this.z_=e,this.byteLength=t}j_(){return"metadata"in this.z_}}/**
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
 */class cd{constructor(e){this.serializer=e}_s(e){return ut(this.serializer,e)}us(e){return e.metadata.exists?xp(this.serializer,e.document,!1):H.newNoDocument(this._s(e.metadata.name),this.cs(e.metadata.readTime))}cs(e){return oe(e)}}class FR{constructor(e,t,r){this.H_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=mg(e)}J_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.z_.namedQuery)this.queries.push(e.z_.namedQuery);else if(e.z_.documentMetadata){this.documents.push({metadata:e.z_.documentMetadata}),e.z_.documentMetadata.exists||++t;const r=F.fromString(e.z_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.z_.document&&(this.documents[this.documents.length-1].document=e.z_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Y_(e){const t=new Map,r=new cd(this.serializer);for(const i of e)if(i.metadata.queries){const s=r._s(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||N()).add(s);t.set(o,a)}}return t}async complete(){const e=await fR(this.localStore,new cd(this.serializer),this.documents,this.H_.id),t=this.Y_(this.documents);for(const r of this.queries)await mR(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Z_:this.collectionGroups,X_:e}}}function mg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class pg{constructor(e){this.key=e}}class gg{constructor(e){this.key=e}}class _g{constructor(e,t){this.query=e,this.ea=t,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=N(),this.mutatedKeys=N(),this.ra=dp(e),this.ia=new ur(this.ra)}get sa(){return this.ea}oa(e,t){const r=t?t._a:new ad,i=t?t.ia:this.ia;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=as(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),E=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?I!==E&&(r.track({type:3,doc:f}),v=!0):this.aa(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this.ra(f,c)>0||u&&this.ra(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(f?(o=o.add(f),s=E?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ia:o,_a:r,ji:a,mutatedKeys:s}}aa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ia;this.ia=e.ia,this.mutatedKeys=e.mutatedKeys;const s=e._a.x_();s.sort((u,l)=>function(d,f){const I=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return I(d)-I(f)}(u.type,l.type)||this.ra(u.doc,l.doc)),this.ua(r);const o=t?this.ca():[],a=this.na.size===0&&this.current?1:0,c=a!==this.ta;return this.ta=a,s.length!==0||c?{snapshot:new Er(this.query,e.ia,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new ad,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(e){return!this.ea.has(e)&&!!this.ia.has(e)&&!this.ia.get(e).hasLocalMutations}ua(e){e&&(e.addedDocuments.forEach(t=>this.ea=this.ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ea=this.ea.delete(t)),this.current=e.current)}ca(){if(!this.current)return[];const e=this.na;this.na=N(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const t=[];return e.forEach(r=>{this.na.has(r)||t.push(new gg(r))}),this.na.forEach(r=>{e.has(r)||t.push(new pg(r))}),t}Pa(e){this.ea=e.os,this.na=N();const t=this.oa(e.documents);return this.applyChanges(t,!0)}Ia(){return Er.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class UR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class BR{constructor(e){this.key=e,this.Ta=!1}}class qR{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new on(a=>lp(a),os),this.Aa=new Map,this.Ra=new Set,this.Va=new G(w.comparator),this.ma=new Map,this.fa=new zu,this.ga={},this.pa=new Map,this.ya=xn.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function $R(n,e){const t=al(n);let r,i;const s=t.da.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Ia();else{const o=await vr(t.localStore,Ue(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await rl(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&ta(t.remoteStore,o)}return i}async function rl(n,e,t,r,i){n.Sa=(h,d,f)=>async function(E,v,C,x){let D=v.view.oa(C);D.ji&&(D=await fo(E.localStore,v.query,!1).then(({documents:j})=>v.view.oa(j,D)));const B=x&&x.targetChanges.get(v.targetId),q=v.view.applyChanges(D,E.isPrimaryClient,B);return Ec(E,v.targetId,q.la),q.snapshot}(n,h,d,f);const s=await fo(n.localStore,e,!0),o=new _g(e,s.os),a=o.oa(s.documents),c=ls.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ec(n,t,u.la);const l=new UR(e,t,o);return n.da.set(e,l),n.Aa.has(t)?n.Aa.get(t).push(e):n.Aa.set(t,[e]),u.snapshot}async function zR(n,e){const t=T(n),r=t.da.get(e),i=t.Aa.get(r.targetId);if(i.length>1)return t.Aa.set(r.targetId,i.filter(s=>!os(s,e))),void t.da.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await wr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Fi(t.remoteStore,r.targetId),Tr(t,r.targetId)}).catch(rn)):(Tr(t,r.targetId),await wr(t.localStore,r.targetId,!0))}async function jR(n,e,t){const r=cl(n);try{const i=await function(o,a){const c=T(o),u=J.now(),l=a.reduce((f,I)=>f.add(I.key),N());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Fe(),E=N();return c.es.getEntries(f,l).next(v=>{I=v,I.forEach((C,x)=>{x.isValidDocument()||(E=E.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(v=>{h=v;const C=[];for(const x of a){const D=IA(x,h.get(x.key).overlayedDocument);D!=null&&C.push(new bt(x.key,D,tp(D.value.mapValue),Y.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,C,a)}).next(v=>{d=v;const C=v.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(f,v.batchId,C)})}).then(()=>({batchId:d.batchId,changes:mp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.ga[o.currentUser.toKey()];u||(u=new G(V)),u=u.insert(a,c),o.ga[o.currentUser.toKey()]=u}(r,i.batchId,t),await St(r,i.changes),await Fr(r.remoteStore)}catch(i){const s=Br(i,"Failed to persist write");t.reject(s)}}async function yg(n,e){const t=T(n);try{const r=await hR(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.ma.get(s);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ta=!0:i.modifiedDocuments.size>0?b(o.Ta):i.removedDocuments.size>0&&(b(o.Ta),o.Ta=!1))}),await St(t,r,e)}catch(r){await rn(r)}}function ud(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.B_(a)&&(u=!0)}),u&&tl(c)}(r.eventManager,e),i.length&&r.Ea.i_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GR(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ma.get(e),s=i&&i.key;if(s){let o=new G(w.comparator);o=o.insert(s,H.newNoDocument(s,P.min()));const a=N().add(s),c=new us(P.min(),new Map,new G(V),o,a);await yg(r,c),r.Va=r.Va.remove(s),r.ma.delete(e),ol(r)}else await wr(r.localStore,e,!1).then(()=>Tr(r,e,t)).catch(rn)}async function WR(n,e){const t=T(n),r=e.batch.batchId;try{const i=await lR(t.localStore,e);sl(t,r,null),il(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await St(t,i)}catch(i){await rn(i)}}async function KR(n,e,t){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(b(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);sl(r,e,t),il(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await St(r,i)}catch(i){await rn(i)}}async function HR(n,e){const t=T(n);an(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.pa.get(r)||[];i.push(e),t.pa.set(r,i)}catch(r){const i=Br(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function il(n,e){(n.pa.get(e)||[]).forEach(t=>{t.resolve()}),n.pa.delete(e)}function sl(n,e,t){const r=T(n);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ga[r.currentUser.toKey()]=i}}function Tr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Aa.get(e))n.da.delete(r),t&&n.Ea.ba(r,t);n.Aa.delete(e),n.isPrimaryClient&&n.fa.Rr(e).forEach(r=>{n.fa.containsKey(r)||Ig(n,r)})}function Ig(n,e){n.Ra.delete(e.path.canonicalString());const t=n.Va.get(e);t!==null&&(Fi(n.remoteStore,t),n.Va=n.Va.remove(e),n.ma.delete(t),ol(n))}function Ec(n,e,t){for(const r of t)r instanceof pg?(n.fa.addReference(r.key,e),QR(n,r)):r instanceof gg?(_("SyncEngine","Document no longer in limbo: "+r.key),n.fa.removeReference(r.key,e),n.fa.containsKey(r.key)||Ig(n,r.key)):R()}function QR(n,e){const t=e.key,r=t.path.canonicalString();n.Va.get(t)||n.Ra.has(r)||(_("SyncEngine","New document in limbo: "+t),n.Ra.add(r),ol(n))}function ol(n){for(;n.Ra.size>0&&n.Va.size<n.maxConcurrentLimboResolutions;){const e=n.Ra.values().next().value;n.Ra.delete(e);const t=new w(F.fromString(e)),r=n.ya.next();n.ma.set(r,new BR(t)),n.Va=n.Va.insert(t,r),ta(n.remoteStore,new _t(Ue(xr(t.path)),r,"TargetPurposeLimboResolution",Me.ae))}}async function St(n,e,t){const r=T(n),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,c)=>{o.push(r.Sa(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){i.push(u);const l=Wu.Qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!sn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Yi.get(d),I=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(I);l.Yi=l.Yi.insert(d,E)}}}(r.localStore,s))}async function YR(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await eg(t.localStore,e);t.currentUser=e,function(s,o){s.pa.forEach(a=>{a.forEach(c=>{c.reject(new g(p.CANCELLED,o))})}),s.pa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await St(t,r.ns)}}function JR(n,e){const t=T(n),r=t.ma.get(e);if(r&&r.Ta)return N().add(r.key);{let i=N();const s=t.Aa.get(e);if(!s)return i;for(const o of s){const a=t.da.get(o);i=i.unionWith(a.view.sa)}return i}}async function XR(n,e){const t=T(n),r=await fo(t.localStore,e.query,!0),i=e.view.Pa(r);return t.isPrimaryClient&&Ec(t,e.targetId,i.la),i}async function ZR(n,e){const t=T(n);return ig(t.localStore,e).then(r=>St(t,r))}async function eP(n,e,t,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.vn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Fr(i.remoteStore):t==="acknowledged"||t==="rejected"?(sl(i,e,r||null),il(i,e),function(a,c){T(T(a).mutationQueue).Fn(c)}(i.localStore,e)):R(),await St(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function tP(n,e){const t=T(n);if(al(t),cl(t),e===!0&&t.wa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await ld(t,r.toArray());t.wa=!0,await wc(t.remoteStore,!0);for(const s of i)ta(t.remoteStore,s)}else if(e===!1&&t.wa!==!1){const r=[];let i=Promise.resolve();t.Aa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Tr(t,o),wr(t.localStore,o,!0))),Fi(t.remoteStore,o)}),await i,await ld(t,r),function(o){const a=T(o);a.ma.forEach((c,u)=>{Fi(a.remoteStore,u)}),a.fa.Vr(),a.ma=new Map,a.Va=new G(w.comparator)}(t),t.wa=!1,await wc(t.remoteStore,!1)}}async function ld(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.Aa.get(o);if(c&&c.length!==0){a=await vr(r.localStore,Ue(c[0]));for(const u of c){const l=r.da.get(u),h=await XR(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await rg(r.localStore,o);a=await vr(r.localStore,u),await rl(r,vg(u),o,!1,a.resumeToken)}i.push(a)}return r.Ea.i_(s),i}function vg(n){return up(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function nP(n){return function(t){return T(T(t).persistence).Bi()}(T(n).localStore)}async function rP(n,e,t,r){const i=T(n);if(i.wa)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.Aa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await ig(i.localStore,hp(s[0])),a=us.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await St(i,o,a);break}case"rejected":await wr(i.localStore,e,!0),Tr(i,e,r);break;default:R()}}async function iP(n,e,t){const r=al(n);if(r.wa){for(const i of e){if(r.Aa.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await rg(r.localStore,i),o=await vr(r.localStore,s);await rl(r,vg(s),o.targetId,!1,o.resumeToken),ta(r.remoteStore,o)}for(const i of t)r.Aa.has(i)&&await wr(r.localStore,i,!1).then(()=>{Fi(r.remoteStore,i),Tr(r,i)}).catch(rn)}}function al(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GR.bind(null,e),e.Ea.i_=OR.bind(null,e.eventManager),e.Ea.ba=MR.bind(null,e.eventManager),e}function cl(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KR.bind(null,e),e}function sP(n,e,t){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,I){const E=T(f),v=oe(I.createTime);return E.persistence.runTransaction("hasNewerBundle","readonly",C=>E.Kr.getBundleMetadata(C,I.id)).then(C=>!!C&&C.createTime.compareTo(v)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(mg(c));const u=new FR(c,s.localStore,o.serializer);let l=await o.Da();for(;l;){const d=await u.J_(l);d&&a._updateProgress(d),l=await o.Da()}const h=await u.complete();return await St(s,h.X_,void 0),await function(f,I){const E=T(f);return E.persistence.runTransaction("Save bundle","readwrite",v=>E.Kr.saveBundleMetadata(v,I))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.Z_)}catch(c){return Je("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Tc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Zp(this.persistence,new Xp,e.initialUser,this.serializer)}createPersistence(e){return new Jp(ea.jr,this.serializer)}createSharedClientState(e){return new og}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wg extends Tc{constructor(e,t,r){super(),this.va=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.va.initialize(this,e),await cl(this.va.syncEngine),await Fr(this.va.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Zp(this.persistence,new Xp,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new HA(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new kT(t,this.persistence);return new CT(e.asyncQueue,r)}createPersistence(e){const t=Gu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new ju(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ag(),Bs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new og}}class oP extends wg{constructor(e,t){super(e,t,!1),this.va=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.va.syncEngine;this.sharedClientState instanceof Fa&&(this.sharedClientState.syncEngine={zs:eP.bind(null,t),js:rP.bind(null,t),Hs:iP.bind(null,t),Bi:nP.bind(null,t),Gs:ZR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await tP(this.va.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ag();if(!Fa.v(t))throw new g(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Gu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Fa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class ul{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YR.bind(null,this.syncEngine),await wc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xR}()}createDatastore(e){const t=hs(e.databaseInfo.databaseId),r=function(s){return new yR(s)}(e.databaseInfo);return function(s,o,a,c){return new wR(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new TR(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ud(this.syncEngine,t,0),function(){return sd.v()?new sd:new pR}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new qR(i,s,o,a,c,u);return l&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=T(t);_("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await Lr(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
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
 */function hd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class na{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ca(this.observer.next,e)}error(e){this.observer.error?this.Ca(this.observer.error,e):ie("Uncaught Error in snapshot listener:",e.toString())}Fa(){this.muted=!0}Ca(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aP{constructor(e,t){this.Ma=e,this.serializer=t,this.metadata=new me,this.buffer=new Uint8Array,this.xa=function(){return new TextDecoder("utf-8")}(),this.Oa().then(r=>{r&&r.j_()?this.metadata.resolve(r.z_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r?.z_)}`))},r=>this.metadata.reject(r))}close(){return this.Ma.cancel()}async getMetadata(){return this.metadata.promise}async Da(){return await this.getMetadata(),this.Oa()}async Oa(){const e=await this.Na();if(e===null)return null;const t=this.xa.decode(e),r=Number(t);isNaN(r)&&this.Ba(`length string (${t}) is not valid number`);const i=await this.La(r);return new LR(JSON.parse(i),e.length+r)}ka(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Na(){for(;this.ka()<0&&!await this.qa(););if(this.buffer.length===0)return null;const e=this.ka();e<0&&this.Ba("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async La(e){for(;this.buffer.length<e;)await this.qa()&&this.Ba("Reached the end of bundle when more is expected.");const t=this.xa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ba(e){throw this.Ma.cancel(),new Error(`Invalid bundle format: ${e}`)}async qa(){const e=await this.Ma.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class cP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=T(i),a=Mi(o.serializer)+"/documents",c={documents:s.map(d=>Oi(o.serializer,d))},u=await o.wo("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=SA(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());b(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=w.fromPath(r);this.mutations.push(new Nu(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Mi(s.serializer)+"/documents",a={writes:i.map(c=>Li(s.serializer,c))};await s.mo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw R();t=P.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new g(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class uP{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Qa=r.maxAttempts,this.$o=new Hu(this.asyncQueue,"transaction_retry")}run(){this.Qa-=1,this.Ka()}Ka(){this.$o.Oo(async()=>{const e=new cP(this.datastore),t=this.$a(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ua(i)}))}).catch(r=>{this.Ua(r)})})}$a(e){try{const t=this.updateFunction(e);return!is(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ua(e){this.Qa>0&&this.Wa(e)?(this.Qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ka(),Promise.resolve()))):this.deferred.reject(e)}Wa(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Rp(t)}return!1}}/**
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
 */class lP{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Bm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Br(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qs(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ac(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ll(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>od(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>od(e.remoteStore,s)),n._onlineComponents=e}function Eg(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ll(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Eg(t))throw t;Je("Error using user provided cache. Falling back to memory cache: "+t),await qs(n,new Tc)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await qs(n,new Tc);return n._offlineComponents}async function ra(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Ac(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Ac(n,new ul))),n._onlineComponents}function Tg(n){return ll(n).then(e=>e.persistence)}function hl(n){return ll(n).then(e=>e.localStore)}function Ag(n){return ra(n).then(e=>e.remoteStore)}function dl(n){return ra(n).then(e=>e.syncEngine)}function hP(n){return ra(n).then(e=>e.datastore)}async function Ar(n){const e=await ra(n),t=e.eventManager;return t.onListen=$R.bind(null,e.syncEngine),t.onUnlisten=zR.bind(null,e.syncEngine),t}function dP(n){return n.asyncQueue.enqueue(async()=>{const e=await Tg(n),t=await Ag(n);return e.setNetworkEnabled(!0),function(i){const s=T(i);return s.w_.delete(0),ds(s)}(t)})}function fP(n){return n.asyncQueue.enqueue(async()=>{const e=await Tg(n),t=await Ag(n);return e.setNetworkEnabled(!1),async function(i){const s=T(i);s.w_.add(0),await Lr(s),s.D_.set("Offline")}(t)})}function mP(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new g(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Br(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await hl(n),e,t)),t.promise}function Rg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new na({next:d=>{o.enqueueAndForget(()=>el(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new g(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new nl(xr(a.path),l,{includeMetadataChanges:!0,G_:!0});return Zu(s,h)}(await Ar(n),n.asyncQueue,e,t,r)),r.promise}function pP(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await fo(i,s,!0),c=new _g(s,a.os),u=c.oa(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Br(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await hl(n),e,t)),t.promise}function Pg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new na({next:d=>{o.enqueueAndForget(()=>el(s,h)),d.fromCache&&c.source==="server"?u.reject(new g(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new nl(a,l,{includeMetadataChanges:!0,G_:!0});return Zu(s,h)}(await Ar(n),n.asyncQueue,e,t,r)),r.promise}function gP(n,e){const t=new na(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).N_.add(s),s.next()}(await Ar(n),t)),()=>{t.Fa(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).N_.delete(s)}(await Ar(n),t))}}function _P(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?bp().encode(o):o,function(l,h){return new aP(l,h)}(function(l,h){if(l instanceof Uint8Array)return hd(l,h);if(l instanceof ArrayBuffer)return hd(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,hs(e));n.asyncQueue.enqueueAndForget(async()=>{sP(await dl(n),i,r)})}function yP(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await hl(n),e))}/**
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
 */function bg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const dd=new Map;/**
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
 */function fl(n,e,t){if(!t)throw new g(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sg(n,e,t,r){if(e===!0&&r===!0)throw new g(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fd(n){if(!w.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function md(n){if(w.isDocumentKey(n))throw new g(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ia(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":R()}function U(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ia(n);throw new g(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Cg(n,e){if(e<=0)throw new g(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class pd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new g(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _T;switch(r.type){case"firstParty":return new wT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=dd.get(t);r&&(_("ComponentProvider","Removing Datastore"),dd.delete(t),r.terminate())}(this),Promise.resolve()}}function kg(n,e,t,r={}){var i;const s=(n=U(n,fs))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Je("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=fe.MOCK_USER;else{a=R_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new g(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new fe(u)}n._authCredentials=new yT(new Um(a,c))}}/**
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
 */let Ne=class Dg{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dg(this.firestore,e,this._query)}},X=class Vg{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vg(this.firestore,e,this._key)}},Ft=class Ng extends Ne{constructor(e,t,r){super(e,t,xr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new w(e))}withConverter(e){return new Ng(this.firestore,e,this._path)}};function xg(n,e,...t){if(n=S(n),fl("collection","path",e),n instanceof fs){const r=F.fromString(e,...t);return md(r),new Ft(n,null,r)}{if(!(n instanceof X||n instanceof Ft))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return md(r),new Ft(n.firestore,null,r)}}function IP(n,e){if(n=U(n,fs),fl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ne(n,null,function(r){return new Pt(F.emptyPath(),r)}(e))}function _o(n,e,...t){if(n=S(n),arguments.length===1&&(e=Bm.V()),fl("doc","path",e),n instanceof fs){const r=F.fromString(e,...t);return fd(r),new X(n,null,new w(r))}{if(!(n instanceof X||n instanceof Ft))throw new g(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return fd(r),new X(n.firestore,n instanceof Ft?n.converter:null,new w(r))}}function Og(n,e){return n=S(n),e=S(e),(n instanceof X||n instanceof Ft)&&(e instanceof X||e instanceof Ft)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Mg(n,e){return n=S(n),e=S(e),n instanceof Ne&&e instanceof Ne&&n.firestore===e.firestore&&os(n._query,e._query)&&n.converter===e.converter}/**
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
 */class vP{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new Hu(this,"async_queue_retry"),this.eu=()=>{const t=Bs();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.$o.Bo()};const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const t=Bs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const t=new me;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!sn(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const t=this.Ga.then(()=>(this.Ya=!0,e().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ie("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=t,t}enqueueAfterDelay(e,t,r){this.tu(),this.Xa.indexOf(e)>-1&&(t=0);const i=Xu.createAndSchedule(this,e,t,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&R()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const t of this.Ha)if(t.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Ha)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const t=this.Ha.indexOf(e);this.Ha.splice(t,1)}}function Rc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class wP{constructor(){this._progressObserver={},this._taskCompletionResolver=new me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const EP=-1;let re=class extends fs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new vP}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lg(this),this._firestoreClient.terminate()}};function TP(n,e){const t=typeof n=="object"?n:Fc(),r=typeof n=="string"?n:e||"(default)",i=zi(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=T_("firestore");s&&kg(i,...s)}return i}function Ie(n){return n._firestoreClient||Lg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Lg(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new JT(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,bg(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new lP(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function AP(n,e){Ug(n=U(n,re));const t=Ie(n);if(t._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Je("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new ul;return Fg(t,i,new wg(i,r.cacheSizeBytes,e?.forceOwnership))}function RP(n){Ug(n=U(n,re));const e=Ie(n);if(e._uninitializedComponentsProvider)throw new g(p.FAILED_PRECONDITION,"SDK cache is already specified.");Je("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new ul;return Fg(e,r,new oP(r,t.cacheSizeBytes))}function Fg(n,e,t){const r=new me;return n.asyncQueue.enqueue(async()=>{try{await qs(n,t),await Ac(n,e),r.resolve()}catch(i){const s=i;if(!Eg(s))throw s;Je("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function PP(n){if(n._initialized&&!n._terminated)throw new g(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new me;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Ke.v())return Promise.resolve();const i=r+"main";await Ke.delete(i)}(Gu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function bP(n){return function(t){const r=new me;return t.asyncQueue.enqueueAndForget(async()=>HR(await dl(t),r)),r.promise}(Ie(n=U(n,re)))}function SP(n){return dP(Ie(n=U(n,re)))}function CP(n){return fP(Ie(n=U(n,re)))}function kP(n,e){const t=Ie(n=U(n,re)),r=new wP;return _P(t,n._databaseId,e,r),r}function DP(n,e){return yP(Ie(n=U(n,re)),e).then(t=>t?new Ne(n,null,t.query):null)}function Ug(n){if(n._initialized||n._terminated)throw new g(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ft(he.fromBase64String(e))}catch(t){throw new g(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ft(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Jt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let $n=class{constructor(e){this._methodName=e}};/**
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
 */class sa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
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
 */const VP=/^__.*__$/;class NP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Or(e,this.data,t,this.fieldTransforms)}}class Bg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class oa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(e){return new oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.lu({path:r,Pu:!1});return i.Iu(e),i}Tu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(e){return this.lu({path:void 0,Pu:!0})}du(e){return yo(e,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}uu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Iu(this.path.get(e))}Iu(e){if(e.length===0)throw this.du("Document fields must not be empty");if(qg(this.cu)&&VP.test(e))throw this.du('Document fields cannot begin and end with "__"')}}class xP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hs(e)}Vu(e,t,r,i=!1){return new oa({cu:e,methodName:t,Ru:r,path:se.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zn(n){const e=n._freezeSettings(),t=hs(n._databaseId);return new xP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function aa(n,e,t,r,i,s={}){const o=n.Vu(s.merge||s.mergeFields?2:0,e,t,i);_l("Data must be an object, but it was:",o,r);const a=jg(r,o);let c,u;if(s.merge)c=new Le(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Pc(e,h,t);if(!o.contains(d))throw new g(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Wg(l,d)||l.push(d)}c=new Le(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new NP(new Ee(a),c,u)}class ms extends $n{_toFieldTransform(e){if(e.cu!==2)throw e.cu===1?e.du(`${this._methodName}() can only appear at the top level of your update data`):e.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ms}}function $g(n,e,t){return new oa({cu:3,Ru:e.settings.Ru,methodName:n._methodName,Pu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ml extends $n{_toFieldTransform(e){return new cs(e.path,new _r)}isEqual(e){return e instanceof ml}}class OP extends $n{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=$g(this,e,!0),r=this.mu.map(s=>jn(s,t)),i=new kn(r);return new cs(e.path,i)}isEqual(e){return this===e}}class MP extends $n{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=$g(this,e,!0),r=this.mu.map(s=>jn(s,t)),i=new Dn(r);return new cs(e.path,i)}isEqual(e){return this===e}}class LP extends $n{constructor(e,t){super(e),this.fu=t}_toFieldTransform(e){const t=new yr(e.serializer,yp(e.serializer,this.fu));return new cs(e.path,t)}isEqual(e){return this===e}}function pl(n,e,t,r){const i=n.Vu(1,e,t);_l("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();qn(r,(c,u)=>{const l=yl(e,c,t);u=S(u);const h=i.Tu(l);if(u instanceof ms)s.push(l);else{const d=jn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Le(s);return new Bg(o,a,i.fieldTransforms)}function gl(n,e,t,r,i,s){const o=n.Vu(1,e,t),a=[Pc(e,r,t)],c=[i];if(s.length%2!=0)throw new g(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Pc(e,s[d])),c.push(s[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!Wg(u,a[d])){const f=a[d];let I=c[d];I=S(I);const E=o.Tu(f);if(I instanceof ms)u.push(f);else{const v=jn(I,E);v!=null&&(u.push(f),l.set(f,v))}}const h=new Le(u);return new Bg(l,h,o.fieldTransforms)}function zg(n,e,t,r=!1){return jn(t,n.Vu(r?4:3,e))}function jn(n,e){if(Gg(n=S(n)))return _l("Unsupported field value:",e,n),jg(n,e);if(n instanceof $n)return function(r,i){if(!qg(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Pu&&e.cu!==4)throw e.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=jn(a,i.Eu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=S(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=J.fromDate(r);return{timestampValue:Ir(i.serializer,s)}}if(r instanceof J){const s=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ir(i.serializer,s)}}if(r instanceof sa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ft)return{bytesValue:kp(i.serializer,r._byteString)};if(r instanceof X){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Uu(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${ia(r)}`)}(n,e)}function jg(n,e){const t={};return Xm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(n,(r,i)=>{const s=jn(i,e.hu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Gg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof sa||n instanceof ft||n instanceof X||n instanceof $n)}function _l(n,e,t){if(!Gg(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ia(t);throw r==="an object"?e.du(n+" a custom object"):e.du(n+" "+r)}}function Pc(n,e,t){if((e=S(e))instanceof Jt)return e._internalPath;if(typeof e=="string")return yl(n,e);throw yo("Field path arguments must be of type string or ",n,!1,void 0,t)}const FP=new RegExp("[~\\*/\\[\\]]");function yl(n,e,t){if(e.search(FP)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jt(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(p.INVALID_ARGUMENT,a+n+c)}function Wg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ui{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ca("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class UP extends Ui{data(){return super.data()}}function ca(n,e){return typeof e=="string"?yl(n,e):e instanceof Jt?e._internalPath:e._delegate._internalPath}/**
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
 */function Kg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Il{}class ps extends Il{}function Vt(n,e,...t){let r=[];e instanceof Il&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof vl).length,a=s.filter(c=>c instanceof ua).length;if(o>1||o>0&&a>0)throw new g(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ua extends ps{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ua(e,t,r)}_apply(e){const t=this._parse(e);return Qg(e._query,t),new Ne(e.firestore,e.converter,dc(e._query,t))}_parse(e){const t=zn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new g(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){_d(h,l);const f=[];for(const I of h)f.push(gd(c,s,I));d={arrayValue:{values:f}}}else d=gd(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||_d(h,l),d=zg(a,o,h,l==="in"||l==="not-in");return O.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function BP(n,e,t){const r=e,i=ca("where",n);return ua._create(i,r,t)}class vl extends Il{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:$.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Qg(o,c),o=dc(o,c)}(e._query,t),new Ne(e.firestore,e.converter,dc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wl extends ps{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new g(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new ar(s,o);return function(u,l){if(ku(u)===null){const h=Qo(u);h!==null&&Yg(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new Ne(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Pt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function qP(n,e="asc"){const t=e,r=ca("orderBy",n);return wl._create(r,t)}class la extends ps{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new la(e,t,r)}_apply(e){return new Ne(e.firestore,e.converter,co(e._query,this._limit,this._limitType))}}function $P(n){return Cg("limit",n),la._create("limit",n,"F")}function zP(n){return Cg("limitToLast",n),la._create("limitToLast",n,"L")}class ha extends ps{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ha(e,t,r)}_apply(e){const t=Hg(e,this.type,this._docOrFields,this._inclusive);return new Ne(e.firestore,e.converter,function(i,s){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function jP(...n){return ha._create("startAt",n,!0)}function GP(...n){return ha._create("startAfter",n,!1)}class da extends ps{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new da(e,t,r)}_apply(e){const t=Hg(e,this.type,this._docOrFields,this._inclusive);return new Ne(e.firestore,e.converter,function(i,s){return new Pt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function WP(...n){return da._create("endBefore",n,!1)}function KP(...n){return da._create("endAt",n,!0)}function Hg(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof Ui)return function(s,o,a,c,u){if(!c)throw new g(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of cr(s))if(h.field.isKeyField())l.push(Sn(o,c.key));else{const d=c.data.field(h.field);if(Ho(d))throw new g(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new g(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Qt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=zn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new g(p.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let I=0;I<l.length;I++){const E=l[I];if(d[I].field.isKeyField()){if(typeof E!="string")throw new g(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof E}`);if(!Du(o)&&E.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${E}' contains a slash.`);const v=o.path.child(F.fromString(E));if(!w.isDocumentKey(v))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const C=new w(v);f.push(Sn(a,C))}else{const v=zg(c,u,E);f.push(v)}}return new Qt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function gd(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new g(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Du(e)&&t.indexOf("/")!==-1)throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!w.isDocumentKey(r))throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sn(n,new w(r))}if(t instanceof X)return Sn(n,t._key);throw new g(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ia(t)}.`)}function _d(n,e){if(!Array.isArray(n)||n.length===0)throw new g(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qg(n,e){if(e.isInequality()){const r=Qo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new g(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ku(n);s!==null&&Yg(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Yg(n,e,t){if(!t.isEqual(e))throw new g(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class El{convertValue(e,t="none"){switch(bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return qn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new sa(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Su(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vi(e));default:return null}}convertTimestamp(e){const t=Gt(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);b(Bp(r));const i=new Kt(r.get(1),r.get(3)),s=new w(r.popFirst(5));return i.isEqual(t)||ie(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function fa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class HP extends El{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}/**
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
 */class In{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Tt=class extends Ui{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ca("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},fi=class extends Tt{data(e={}){return super.data(e)}},Xt=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new In(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fi(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new In(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new In(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:QP(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function QP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function Jg(n,e){return n instanceof Tt&&e instanceof Tt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Xt&&e instanceof Xt&&n._firestore===e._firestore&&Mg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function YP(n){n=U(n,X);const e=U(n.firestore,re);return Rg(Ie(e),n._key).then(t=>Tl(e,n,t))}class Gn extends El{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}function JP(n){n=U(n,X);const e=U(n.firestore,re),t=Ie(e),r=new Gn(e);return mP(t,n._key).then(i=>new Tt(e,r,n._key,i,new In(i!==null&&i.hasLocalMutations,!0),n.converter))}function XP(n){n=U(n,X);const e=U(n.firestore,re);return Rg(Ie(e),n._key,{source:"server"}).then(t=>Tl(e,n,t))}function ZP(n){n=U(n,Ne);const e=U(n.firestore,re),t=Ie(e),r=new Gn(e);return Kg(n._query),Pg(t,n._query).then(i=>new Xt(e,r,n,i))}function eb(n){n=U(n,Ne);const e=U(n.firestore,re),t=Ie(e),r=new Gn(e);return pP(t,n._query).then(i=>new Xt(e,r,n,i))}function tb(n){n=U(n,Ne);const e=U(n.firestore,re),t=Ie(e),r=new Gn(e);return Pg(t,n._query,{source:"server"}).then(i=>new Xt(e,r,n,i))}function yd(n,e,t){n=U(n,X);const r=U(n.firestore,re),i=fa(n.converter,e,t);return gs(r,[aa(zn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function Id(n,e,t,...r){n=U(n,X);const i=U(n.firestore,re),s=zn(i);let o;return o=typeof(e=S(e))=="string"||e instanceof Jt?gl(s,"updateDoc",n._key,e,t,r):pl(s,"updateDoc",n._key,e),gs(i,[o.toMutation(n._key,Y.exists(!0))])}function nb(n){return gs(U(n.firestore,re),[new Mr(n._key,Y.none())])}function rb(n,e){const t=U(n.firestore,re),r=_o(n),i=fa(n.converter,e);return gs(t,[aa(zn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function Xg(n,...e){var t,r,i;n=S(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Rc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof X)u=U(n.firestore,re),l=xr(n._key.path),c={next:h=>{e[o]&&e[o](Tl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=U(n,Ne);u=U(h.firestore,re),l=h._query;const d=new Gn(u);c={next:f=>{e[o]&&e[o](new Xt(u,d,h,f))},error:e[o+1],complete:e[o+2]},Kg(n._query)}return function(d,f,I,E){const v=new na(E),C=new nl(f,v,I);return d.asyncQueue.enqueueAndForget(async()=>Zu(await Ar(d),C)),()=>{v.Fa(),d.asyncQueue.enqueueAndForget(async()=>el(await Ar(d),C))}}(Ie(u),l,a,c)}function ib(n,e){return gP(Ie(n=U(n,re)),Rc(e)?e:{next:e})}function gs(n,e){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>jR(await dl(r),i,s)),s.promise}(Ie(n),e)}function Tl(n,e,t){const r=t.docs.get(e._key),i=new Gn(n);return new Tt(n,i,e._key,r,new In(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const sb={maxAttempts:5};/**
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
 */let ob=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=zn(e)}set(e,t,r){this._verifyNotCommitted();const i=xt(e,this._firestore),s=fa(i.converter,t,r),o=aa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=xt(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Jt?gl(this._dataReader,"WriteBatch.update",s._key,t,r,i):pl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=xt(e,this._firestore);return this._mutations=this._mutations.concat(new Mr(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function xt(n,e){if((n=S(n)).firestore!==e)throw new g(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */let ab=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=zn(t)}get(t){const r=xt(t,this._firestore),i=new HP(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return R();const o=s[0];if(o.isFoundDocument())return new Ui(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ui(this._firestore,i,r._key,null,r.converter);throw R()})}set(t,r,i){const s=xt(t,this._firestore),o=fa(s.converter,r,i),a=aa(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=xt(t,this._firestore);let a;return a=typeof(r=S(r))=="string"||r instanceof Jt?gl(this._dataReader,"Transaction.update",o._key,r,i,s):pl(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=xt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=xt(e,this._firestore),r=new Gn(this._firestore);return super.get(e).then(i=>new Tt(this._firestore,r,t._key,i._document,new In(!1,!1),t.converter))}};function cb(n,e,t){n=U(n,re);const r=Object.assign(Object.assign({},sb),t);return function(s){if(s.maxAttempts<1)throw new g(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new me;return s.asyncQueue.enqueueAndForget(async()=>{const u=await hP(s);new uP(s.asyncQueue,u,a,o,c).run()}),c.promise}(Ie(n),i=>e(new ab(n,i)),r)}/**
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
 */function ub(){return new ms("deleteField")}function lb(){return new ml("serverTimestamp")}function hb(...n){return new OP("arrayUnion",n)}function db(...n){return new MP("arrayRemove",n)}function fb(n){return new LP("increment",n)}(function(e,t=!0){(function(i){Nr=i})(Zt),qt(new lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new re(new IT(r.getProvider("auth-internal")),new TT(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new g(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kt(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),He(mh,"4.1.1",e),He(mh,"4.1.1","esm2017")})();/**
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
 */class mb{constructor(e,t){this._delegate=e,this.firebase=t,Ws(e,new lt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Bd(this._delegate)))}_getService(e,t=Ut){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ut){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ws(this._delegate,e)}_addOrOverwriteComponent(e){Ud(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const pb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},vd=new Fn("app-compat","Firebase",pb);/**
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
 */function gb(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:He,setLogLevel:$d,onLog:qd,apps:null,SDK_VERSION:Zt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:jy}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ut,!Cl(e,u))throw vd.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=wo(u,l);if(Cl(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(qt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw vd.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&js(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function Zg(){const n=gb(mb);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Zg,extendNamespace:e,createSubscribe:Od,ErrorFactory:Fn,deepExtend:js});function e(t){js(n,t)}return n}const _b=Zg();/**
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
 */const wd=new vo("@firebase/app-compat"),yb="@firebase/app-compat",Ib="0.2.16";/**
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
 */function vb(n){He(yb,Ib,n)}/**
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
 */if(b_()&&self.firebase!==void 0){wd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&wd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const On=_b;vb();var wb="firebase",Eb="10.2.0";/**
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
 */On.registerVersion(wb,Eb,"app-compat");/**
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
 */function Mn(){return window}/**
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
 */const Tb=2e3;async function Ab(n,e,t){var r;const{BuildInfo:i}=Mn();Qe(e.sessionId,"AuthEvent did not contain a session ID");const s=await Cb(e.sessionId),o={};return Sr()?o.ibi=i.packageName:Gi()?o.apn=i.packageName:pe(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ga(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Rb(n){const{BuildInfo:e}=Mn(),t={};Sr()?t.iosBundleId=e.packageName:Gi()?t.androidPackageName=e.packageName:pe(n,"operation-not-supported-in-this-environment"),await xf(n,t)}function Pb(n){const{cordova:e}=Mn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,gI()?"_blank":"_system","location=yes"),t(i)})})}async function bb(n,e,t){const{cordova:r}=Mn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof t?.close=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Te(n,"redirect-cancelled-by-user"))},Tb))}function l(){document?.visibilityState==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Gi()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Sb(n){var e,t,r,i,s,o,a,c,u,l;const h=Mn();y(typeof((e=h?.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),y(typeof((t=h?.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),y(typeof((s=(i=(r=h?.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((c=(a=(o=h?.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),y(typeof((l=(u=h?.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Cb(n){const e=kb(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function kb(n){if(Qe(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const Db=20;class Vb extends Vf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Nb(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Mb(),postBody:null,tenantId:n.tenantId,error:Te(n,"no-auth-event")}}function xb(n,e){return bc()._set(Sc(n),e)}async function Ed(n){const e=await bc()._get(Sc(n));return e&&await bc()._remove(Sc(n)),e}function Ob(n,e){var t,r;const i=Fb(e);if(i.includes("/__/auth/callback")){const s=$s(i),o=s.firebaseError?Lb(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o?.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Te(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function Mb(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Db;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function bc(){return qe(bo)}function Sc(n){return En("authEvent",n.config.apiKey,n.name)}function Lb(n){try{return JSON.parse(n)}catch{return null}}function Fb(n){const e=$s(n),t=e.link?decodeURIComponent(e.link):void 0,r=$s(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $s(i).link||i||r||t||n}function $s(n){if(!n?.includes("?"))return{};const[e,...t]=n.split("?");return Zn(t.join("?"))}/**
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
 */const Ub=500;class Bb{constructor(){this._redirectPersistence=zt,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Do,this._overrideRedirectResult=tu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new Vb(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){Sb(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),yw(),await this._originValidation(e);const o=Nb(e,r,i);await xb(e,o);const a=await Ab(e,o,t),c=await Pb(a);return bb(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rb(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Mn(),o=setTimeout(async()=>{await Ed(e),t.onEvent(Td())},Ub),a=async l=>{clearTimeout(o);const h=await Ed(e);let d=null;h&&l?.url&&(d=Ob(h,l.url)),t.onEvent(d||Td())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Mn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const qb=Bb;function Td(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Te("no-auth-event")}}/**
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
 */function $b(n,e){te(n)._logFramework(e)}var zb="@firebase/auth-compat",jb="0.4.5";/**
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
 */const Gb=1e3;function mi(){var n;return((n=self?.location)===null||n===void 0?void 0:n.protocol)||null}function Wb(){return mi()==="http:"||mi()==="https:"}function e_(n=Z()){return!!((mi()==="file:"||mi()==="ionic:"||mi()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Kb(){return Oc()||xc()}function Hb(){return xd()&&document?.documentMode===11}function Qb(n=Z()){return/Edge\/\d+/.test(n)}function Yb(n=Z()){return Hb()||Qb(n)}function t_(){try{const n=self.localStorage,e=Ki();if(n)return n.setItem(e,"1"),n.removeItem(e),Yb()?pi():!0}catch{return Al()&&pi()}return!1}function Al(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ba(){return(Wb()||Nd()||e_())&&!Kb()&&t_()&&!Al()}function n_(){return e_()&&typeof document<"u"}async function Jb(){return n_()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},Gb);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function Xb(){return typeof window<"u"?window:null}/**
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
 */const Be={LOCAL:"local",NONE:"none",SESSION:"session"},Yr=y,r_="persistence";function Zb(n,e){if(Yr(Object.values(Be).includes(e),n,"invalid-persistence-type"),Oc()){Yr(e!==Be.SESSION,n,"unsupported-persistence-type");return}if(xc()){Yr(e===Be.NONE,n,"unsupported-persistence-type");return}if(Al()){Yr(e===Be.NONE||e===Be.LOCAL&&pi(),n,"unsupported-persistence-type");return}Yr(e===Be.NONE||t_(),n,"unsupported-persistence-type")}async function Cc(n){await n._initializationPromise;const e=i_(),t=En(r_,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function e0(n,e){const t=i_();if(!t)return[];const r=En(r_,n,e);switch(t.getItem(r)){case Be.NONE:return[lr];case Be.LOCAL:return[dr,zt];case Be.SESSION:return[zt];default:return[]}}function i_(){var n;try{return((n=Xb())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const t0=y;class Mt{constructor(){this.browserResolver=qe(Of),this.cordovaResolver=qe(qb),this.underlyingResolver=null,this._redirectPersistence=zt,this._completeRedirectFn=Do,this._overrideRedirectResult=tu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return n_()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return t0(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Jb();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function s_(n){return n.unwrap()}function n0(n){return n.wrapped()}/**
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
 */function r0(n){return o_(n)}function i0(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e?.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new s0(n,Av(n,e))}else if(r){const i=o_(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function o_(n){const{_tokenResponse:e}=n instanceof De?n.customData:n;if(!e)return null;if(!(n instanceof De)&&"temporaryProof"in e&&"phoneNumber"in e)return Pn.credentialFromResult(n);const t=e.providerId;if(!t||t===qr.PASSWORD)return null;let r;switch(t){case qr.GOOGLE:r=et;break;case qr.FACEBOOK:r=Ze;break;case qr.GITHUB:r=tt;break;case qr.TWITTER:r=nt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?hr._create(t,a):ht._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new nr(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof De?r.credentialFromError(n):r.credentialFromResult(n)}function Oe(n,e){return e.catch(t=>{throw t instanceof De&&i0(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:r0(t),additionalUserInfo:wv(t),user:yt.getOrCreate(i)}})}async function kc(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Oe(n,t.confirm(r))}}class s0{constructor(e,t){this.resolver=t,this.auth=n0(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Oe(s_(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class yt{constructor(e){this._delegate=e,this.multiFactor=Sv(e)}static getOrCreate(e){return yt.USER_MAP.has(e)||yt.USER_MAP.set(e,new yt(e)),yt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Oe(this.auth,gf(this._delegate,e))}async linkWithPhoneNumber(e,t){return kc(this.auth,sw(this._delegate,e,t))}async linkWithPopup(e){return Oe(this.auth,mw(this._delegate,e,Mt))}async linkWithRedirect(e){return await Cc(te(this.auth)),Tw(this._delegate,e,Mt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Oe(this.auth,_f(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return kc(this.auth,ow(this._delegate,e,t))}reauthenticateWithPopup(e){return Oe(this.auth,fw(this._delegate,e,Mt))}async reauthenticateWithRedirect(e){return await Cc(te(this.auth)),ww(this._delegate,e,Mt)}sendEmailVerification(e){return lv(this._delegate,e)}async unlink(e){return await YI(this._delegate,e),this}updateEmail(e){return mv(this._delegate,e)}updatePassword(e){return pv(this._delegate,e)}updatePhoneNumber(e){return aw(this._delegate,e)}updateProfile(e){return fv(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return hv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}yt.USER_MAP=new WeakMap;/**
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
 */const Jr=y;class Dc{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Jr(r,"invalid-api-key",{appName:e.name}),Jr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mt:void 0;this._delegate=t.initialize({options:{persistence:o0(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Qy),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?yt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){cf(this._delegate,e,t)}applyActionCode(e){return tv(this._delegate,e)}checkActionCode(e){return yf(this._delegate,e)}confirmPasswordReset(e,t){return ev(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Oe(this._delegate,rv(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return uv(this._delegate,e)}isSignInWithEmailLink(e){return ov(this._delegate,e)}async getRedirectResult(){Jr(Ba(),this._delegate,"operation-not-supported-in-this-environment");const e=await Rw(this._delegate,Mt);return e?Oe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){$b(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Ad(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Ad(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return sv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return ZI(this._delegate,e,t||void 0)}async setPersistence(e){Zb(this._delegate,e);let t;switch(e){case Be.SESSION:t=zt;break;case Be.LOCAL:t=await qe(dr)._isAvailable()?dr:bo;break;case Be.NONE:t=lr;break;default:return pe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Oe(this._delegate,QI(this._delegate))}signInWithCredential(e){return Oe(this._delegate,Po(this._delegate,e))}signInWithCustomToken(e){return Oe(this._delegate,XI(this._delegate,e))}signInWithEmailAndPassword(e,t){return Oe(this._delegate,iv(this._delegate,e,t))}signInWithEmailLink(e,t){return Oe(this._delegate,av(this._delegate,e,t))}signInWithPhoneNumber(e,t){return kc(this._delegate,iw(this._delegate,e,t))}async signInWithPopup(e){return Jr(Ba(),this._delegate,"operation-not-supported-in-this-environment"),Oe(this._delegate,dw(this._delegate,e,Mt))}async signInWithRedirect(e){return Jr(Ba(),this._delegate,"operation-not-supported-in-this-environment"),await Cc(this._delegate),Iw(this._delegate,e,Mt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return nv(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Dc.Persistence=Be;function Ad(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&yt.getOrCreate(o)),error:e,complete:t}}function o0(n,e){const t=e0(n,e);if(typeof self<"u"&&!t.includes(dr)&&t.push(dr),typeof window<"u")for(const r of[bo,zt])t.includes(r)||t.push(r);return t.includes(lr)||t.push(lr),t}/**
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
 */class Rl{constructor(){this.providerId="phone",this._delegate=new Pn(s_(On.auth()))}static credential(e,t){return Pn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Rl.PHONE_SIGN_IN_METHOD=Pn.PHONE_SIGN_IN_METHOD;Rl.PROVIDER_ID=Pn.PROVIDER_ID;/**
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
 */const a0=y;class c0{constructor(e,t,r=On.app()){var i;a0((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new nw(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const u0="auth-compat";function l0(n){n.INTERNAL.registerComponent(new lt(u0,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Dc(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Wn.EMAIL_SIGNIN,PASSWORD_RESET:Wn.PASSWORD_RESET,RECOVER_EMAIL:Wn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Wn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Wn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Wn.VERIFY_EMAIL}},EmailAuthProvider:en,FacebookAuthProvider:Ze,GithubAuthProvider:tt,GoogleAuthProvider:et,OAuthProvider:nr,SAMLAuthProvider:Hs,PhoneAuthProvider:Rl,PhoneMultiFactorGenerator:Mf,RecaptchaVerifier:c0,TwitterAuthProvider:nt,Auth:Dc,AuthCredential:Cr,Error:De}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(zb,jb)}l0(On);const h0="@firebase/firestore-compat",d0="0.3.15";/**
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
 */function Pl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Rd(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function Pd(){if(!QT())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Bi{constructor(e){this._delegate=e}static fromBase64String(e){return Pd(),new Bi(ft.fromBase64String(e))}static fromUint8Array(e){return Rd(),new Bi(ft.fromUint8Array(e))}toBase64(){return Pd(),this._delegate.toBase64()}toUint8Array(){return Rd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Vc(n){return f0(n,["next","error","complete"])}function f0(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class m0{enableIndexedDbPersistence(e,t){return AP(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return RP(e._delegate)}clearIndexedDbPersistence(e){return PP(e._delegate)}}class a_{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Kt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Je("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){kg(this._delegate,e,t,r)}enableNetwork(){return SP(this._delegate)}disableNetwork(){return CP(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Sg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return bP(this._delegate)}onSnapshotsInSync(e){return ib(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Rr(this,xg(this._delegate,e))}catch(t){throw Ce(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ge(this,_o(this._delegate,e))}catch(t){throw Ce(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Se(this,IP(this._delegate,e))}catch(t){throw Ce(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return cb(this._delegate,t=>e(new c_(this,t)))}batch(){return Ie(this._delegate),new u_(new ob(this._delegate,e=>gs(this._delegate,e)))}loadBundle(e){return kP(this._delegate,e)}namedQuery(e){return DP(this._delegate,e).then(t=>t?new Se(this,t):null)}}class ma extends El{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bi(new ft(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ge.forKey(t,this.firestore,null)}}function p0(n){pT(n)}class c_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ma(e)}get(e){const t=vn(e);return this._delegate.get(t).then(r=>new qi(this._firestore,new Tt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=vn(e);return r?(Pl("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=vn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=vn(e);return this._delegate.delete(t),this}}class u_{constructor(e){this._delegate=e}set(e,t,r){const i=vn(e);return r?(Pl("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=vn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=vn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ln{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new fi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new $i(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ln.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Ln(e,new ma(e),t),i.set(t,s)),s}}Ln.INSTANCES=new WeakMap;class Ge{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ma(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ge(t,new X(t._delegate,r,new w(e)))}static forKey(e,t,r){return new Ge(t,new X(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Rr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Rr(this.firestore,xg(this._delegate,e))}catch(t){throw Ce(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof X?Og(this._delegate,e):!1}set(e,t){t=Pl("DocumentReference.set",t);try{return t?yd(this._delegate,e,t):yd(this._delegate,e)}catch(r){throw Ce(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Id(this._delegate,e):Id(this._delegate,e,t,...r)}catch(i){throw Ce(i,"updateDoc()","DocumentReference.update()")}}delete(){return nb(this._delegate)}onSnapshot(...e){const t=l_(e),r=h_(e,i=>new qi(this.firestore,new Tt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Xg(this._delegate,t,r)}get(e){let t;return e?.source==="cache"?t=JP(this._delegate):e?.source==="server"?t=XP(this._delegate):t=YP(this._delegate),t.then(r=>new qi(this.firestore,new Tt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ge(this.firestore,e?this._delegate.withConverter(Ln.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ce(n,e,t){return n.message=n.message.replace(e,t),n}function l_(n){for(const e of n)if(typeof e=="object"&&!Vc(e))return e;return{}}function h_(n,e){var t,r;let i;return Vc(n[0])?i=n[0]:Vc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class qi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ge(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Jg(this._delegate,e._delegate)}}class $i extends qi{data(e){const t=this._delegate.data(e);return gT(t!==void 0),t}}class Se{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ma(e)}where(e,t,r){try{return new Se(this.firestore,Vt(this._delegate,BP(e,t,r)))}catch(i){throw Ce(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Se(this.firestore,Vt(this._delegate,qP(e,t)))}catch(r){throw Ce(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Se(this.firestore,Vt(this._delegate,$P(e)))}catch(t){throw Ce(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Se(this.firestore,Vt(this._delegate,zP(e)))}catch(t){throw Ce(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Se(this.firestore,Vt(this._delegate,jP(...e)))}catch(t){throw Ce(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Se(this.firestore,Vt(this._delegate,GP(...e)))}catch(t){throw Ce(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Se(this.firestore,Vt(this._delegate,WP(...e)))}catch(t){throw Ce(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Se(this.firestore,Vt(this._delegate,KP(...e)))}catch(t){throw Ce(t,"endAt()","Query.endAt()")}}isEqual(e){return Mg(this._delegate,e._delegate)}get(e){let t;return e?.source==="cache"?t=eb(this._delegate):e?.source==="server"?t=tb(this._delegate):t=ZP(this._delegate),t.then(r=>new Nc(this.firestore,new Xt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=l_(e),r=h_(e,i=>new Nc(this.firestore,new Xt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Xg(this._delegate,t,r)}withConverter(e){return new Se(this.firestore,e?this._delegate.withConverter(Ln.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class g0{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new $i(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Nc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Se(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new $i(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new g0(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new $i(this._firestore,r))})}isEqual(e){return Jg(this._delegate,e._delegate)}}class Rr extends Se{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ge(this.firestore,e):null}doc(e){try{return e===void 0?new Ge(this.firestore,_o(this._delegate)):new Ge(this.firestore,_o(this._delegate,e))}catch(t){throw Ce(t,"doc()","CollectionReference.doc()")}}add(e){return rb(this._delegate,e).then(t=>new Ge(this.firestore,t))}isEqual(e){return Og(this._delegate,e._delegate)}withConverter(e){return new Rr(this.firestore,e?this._delegate.withConverter(Ln.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vn(n){return U(n,X)}/**
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
 */class bl{constructor(...e){this._delegate=new Jt(...e)}static documentId(){return new bl(se.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Jt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class pn{constructor(e){this._delegate=e}static serverTimestamp(){const e=lb();return e._methodName="FieldValue.serverTimestamp",new pn(e)}static delete(){const e=ub();return e._methodName="FieldValue.delete",new pn(e)}static arrayUnion(...e){const t=hb(...e);return t._methodName="FieldValue.arrayUnion",new pn(t)}static arrayRemove(...e){const t=db(...e);return t._methodName="FieldValue.arrayRemove",new pn(t)}static increment(e){const t=fb(e);return t._methodName="FieldValue.increment",new pn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const _0={Firestore:a_,GeoPoint:sa,Timestamp:J,Blob:Bi,Transaction:c_,WriteBatch:u_,DocumentReference:Ge,DocumentSnapshot:qi,Query:Se,QueryDocumentSnapshot:$i,QuerySnapshot:Nc,CollectionReference:Rr,FieldPath:bl,FieldValue:pn,setLogLevel:p0,CACHE_SIZE_UNLIMITED:EP};function y0(n,e){n.INTERNAL.registerComponent(new lt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},_0)))}/**
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
 */function I0(n){y0(n,(e,t)=>new a_(e,t,new m0)),n.registerVersion(h0,d0)}I0(On);const d_={apiKey:"AIzaSyBVEdd3FEoIxLahvSlpw8zWGHonb8Oa4d4",authDomain:"ivac8-new.firebaseapp.com",projectId:"ivac8-new",storageBucket:"ivac8-new.appspot.com",messagingSenderId:"947838474728",appId:"1:947838474728:web:0721fca0ffa8a7b7b42c5d",measurementId:"G-VJS31TM9XL"},f_=wo(d_);aE(f_);TP(f_);On.apps.length||On.initializeApp(d_);const v0="_itemData_10xz9_13",w0="_itemCrisis_10xz9_43",E0="_divider_10xz9_99",T0="_headerContainer_10xz9_121",A0="_headerContainerCrisis_10xz9_143",R0="_titleHeader_10xz9_173",P0="_titleButton_10xz9_215",b0="_titleButtonCrisis_10xz9_243",S0="_modalContain_10xz9_279",C0="_modalForm_10xz9_299",k0="_inputContain_10xz9_325",D0="_registerContainer_10xz9_405",V0="_itemContainer_10xz9_481",N0="_loading_10xz9_505",x0="_registerProfileNameContainer_10xz9_517",O0="_registerProfileNameContainer1_10xz9_529",M0="_registerProfileContain_10xz9_541",L0="_registerProfileImg_10xz9_551",F0="_loading2_10xz9_579",U0="_infoContainer_10xz9_615",B0="_displaceContainer_10xz9_811",iS={itemData:v0,itemCrisis:w0,divider:E0,headerContainer:T0,headerContainerCrisis:A0,titleHeader:R0,titleButton:P0,titleButtonCrisis:b0,modalContain:S0,modalForm:C0,inputContain:k0,registerContainer:D0,itemContainer:V0,loading:N0,registerProfileNameContainer:x0,registerProfileNameContainer1:O0,registerProfileContain:M0,registerProfileImg:L0,loading2:F0,infoContainer:U0,displaceContainer:B0};export{$0 as a,yd as b,xg as c,_o as d,lb as e,On as f,rb as g,Xg as o,Vt as q,iS as s,BP as w};
