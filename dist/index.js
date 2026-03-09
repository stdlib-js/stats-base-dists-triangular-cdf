"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=a(function(g,q){
var o=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist');function w(e,r,n,t){var u,f;return o(e)||o(r)||o(n)||o(t)||r>t||t>n?NaN:e<=r?0:(u=(n-r)*(t-r),f=(n-r)*(n-t),e<=t?v(e-r,2)/u:e<n?1-v(n-e,2)/f:1)}q.exports=w
});var y=a(function(h,p){
var d=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-pow/dist');function l(e,r,n){var t,u;if(s(e)||s(r)||s(n))return d(NaN);if(!(e<=n&&n<=r))return d(NaN);return t=(r-e)*(n-e),u=(r-e)*(r-n),f;function f(i){return s(i)?NaN:i<=e?0:i<=n?m(i-e,2)/t:i<r?1-m(r-i,2)/u:1}}p.exports=l
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=N(),O=y();F(c,"factory",O);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
