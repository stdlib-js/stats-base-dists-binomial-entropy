"use strict";var N=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=N(function(I,n){
var f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-ln/dist'),c=require('@stdlib/constants-float64-pinf/dist');function x(e,r){var i,t,a,u;if(q(e)||q(r)||r<0||r>1||!f(e)||e===c)return NaN;if(r===0||r===1||e===0)return 0;for(u=1-r,i=e*v(u),t=s(i)*i,a=1;a<=e;a++)i+=v((e-a+1)/a)+v(r/u),t+=s(i)*i;return-t}n.exports=x
});var g=o();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
