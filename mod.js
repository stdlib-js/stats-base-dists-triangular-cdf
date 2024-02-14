// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function a(r,t,n){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=a(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=a(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,A=/(\..*[^0])0*e/;function b(r){var t,e,a=parseFloat(r.arg);if(!isFinite(a)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);a=r.arg}switch(r.specifier){case"e":case"E":e=a.toExponential(r.precision);break;case"f":case"F":e=a.toFixed(r.precision);break;case"g":case"G":c(a)<1e-4?((t=r.precision)>0&&(t-=1),e=a.toExponential(t)):e=a.toPrecision(r.precision),r.alternate||(e=s.call(e,A,"$1e"),e=s.call(e,h,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,d,"$1.e")),a>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function F(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function m(r,t,n){var e=t-r.length;return e<0?r:r=n?r+F(e):F(e)+r}var N=String.fromCharCode,I=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,o,c,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,I(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,I(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!I(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=I(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=a(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=m(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,a;for(n=[],a=0,e=U.exec(r);e;)(t=r.slice(a,U.lastIndex-e[0].length)).length&&n.push(t),n.push(j(e)),a=U.lastIndex,e=U.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function O(r){return"string"==typeof r}function k(r){var t,n;if(!O(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[T(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return S.apply(null,t)}var x=Object.prototype,V=x.toString,H=x.__defineGetter__,G=x.__defineSetter__,W=x.__lookupGetter__,L=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,o="set"in n,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,t,n.get),o&&G&&G.call(r,t,n.set),r};function P(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return r!=r}var R=Math.floor;function Y(r){return R(r)===r}function M(r){return Y(r/2)}function Z(r){return M(r>0?r-1:r+1)}var X=Number.POSITIVE_INFINITY,q=Number,z=q.NEGATIVE_INFINITY;function B(r){return r===X||r===z}var D=Math.sqrt;function J(r){return Math.abs(r)}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var er=K&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,i;if(null==r)return Q.call(r);n=r[nr],i=nr,t=null!=(a=r)&&rr.call(a,i);try{r[nr]=void 0}catch(t){return Q.call(r)}return e=Q.call(r),t?r[nr]=n:delete r[nr],e}:function(r){return Q.call(r)},ar="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var or,ur="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===er(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=or,cr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var pr,sr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,t,n;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),n=t,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var yr=pr,vr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var dr,wr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),n=t,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===er(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var hr=dr,Ar="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var Fr,mr="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===er(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ir={uint16:Fr,uint8:hr};(Nr=new Ir.uint16(1))[0]=4660;var Er,_r,Sr=52===new Ir.uint8(Nr.buffer)[0];!0===Sr?(Er=1,_r=0):(Er=0,_r=1);var Ur={HIGH:Er,LOW:_r},jr=new yr(1),Tr=new fr(jr.buffer),Or=Ur.HIGH,kr=Ur.LOW;function xr(r,t,n,e){return jr[0]=r,t[e]=Tr[Or],t[e+n]=Tr[kr],t}function Vr(r){return xr(r,[0,0],1,0)}P(Vr,"assign",xr);var Hr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Wr,Lr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),n=t,r=(Hr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=!0===Sr?0:1,Pr=new Wr(1),Cr=new fr(Pr.buffer);function Rr(r,t){return Pr[0]=r,Cr[$r]=t>>>0,Pr[0]}function Yr(r){return 0|r}var Mr=q.NEGATIVE_INFINITY,Zr=Number.POSITIVE_INFINITY,Xr="function"==typeof Float64Array;var qr="function"==typeof Float64Array?Float64Array:null;var zr,Br,Dr,Jr="function"==typeof Float64Array?Float64Array:void 0;zr=function(){var r,t,n;if("function"!=typeof qr)return!1;try{t=new qr([1,3.14,-3.14,NaN]),n=t,r=(Xr&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},!0===Sr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr={HIGH:Br,LOW:Dr},Qr=new zr(1),rt=new fr(Qr.buffer),tt=Kr.HIGH,nt=Kr.LOW;function et(r,t,n,e){return Qr[0]=r,t[e]=rt[tt],t[e+n]=rt[nt],t}function at(r){return et(r,[0,0],1,0)}P(at,"assign",et);var it="function"==typeof Float64Array;var ot="function"==typeof Float64Array?Float64Array:null;var ut,ft="function"==typeof Float64Array?Float64Array:void 0;ut=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot([1,3.14,-3.14,NaN]),n=t,r=(it&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ft:function(){throw new Error("not implemented")};var ct=!0===Sr?1:0,lt=new ut(1),pt=new fr(lt.buffer);function st(r){return lt[0]=r,pt[ct]}var yt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var gt,dt,wt,ht="function"==typeof Float64Array?Float64Array:void 0;gt=function(){var r,t,n;if("function"!=typeof vt)return!1;try{t=new vt([1,3.14,-3.14,NaN]),n=t,r=(yt&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ht:function(){throw new Error("not implemented")},!0===Sr?(dt=1,wt=0):(dt=0,wt=1);var At={HIGH:dt,LOW:wt},bt=new gt(1),Ft=new fr(bt.buffer),mt=At.HIGH,Nt=At.LOW;function It(r,t){return Ft[mt]=r,Ft[Nt]=t,bt[0]}var Et=[0,0];function _t(r,t){var n,e;return at.assign(r,Et,1,0),n=Et[0],n&=2147483647,e=st(t),It(n|=e&=2147483648,Et[1])}var St="function"==typeof Float64Array;var Ut="function"==typeof Float64Array?Float64Array:null;var jt,Tt="function"==typeof Float64Array?Float64Array:void 0;jt=function(){var r,t,n;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,NaN]),n=t,r=(St&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Tt:function(){throw new Error("not implemented")};var Ot=!0===Sr?1:0,kt=new jt(1),xt=new fr(kt.buffer);function Vt(r,t){return kt[0]=r,xt[Ot]=t>>>0,kt[0]}var Ht=[1,1.5],Gt=[0,.5849624872207642],Wt=[0,1.350039202129749e-8];var Lt=Number.POSITIVE_INFINITY,$t=q.NEGATIVE_INFINITY;function Pt(r,t,n,e){return C(r)||B(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}P((function(r){return Pt(r,[0,0],1,0)}),"assign",Pt);var Ct="function"==typeof Float64Array;var Rt="function"==typeof Float64Array?Float64Array:null;var Yt,Mt,Zt,Xt="function"==typeof Float64Array?Float64Array:void 0;Yt=function(){var r,t,n;if("function"!=typeof Rt)return!1;try{t=new Rt([1,3.14,-3.14,NaN]),n=t,r=(Ct&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xt:function(){throw new Error("not implemented")},!0===Sr?(Mt=1,Zt=0):(Mt=0,Zt=1);var qt={HIGH:Mt,LOW:Zt},zt=new Yt(1),Bt=new fr(zt.buffer),Dt=qt.HIGH,Jt=qt.LOW;function Kt(r,t,n,e){return zt[0]=r,t[e]=Bt[Dt],t[e+n]=Bt[Jt],t}function Qt(r){return Kt(r,[0,0],1,0)}P(Qt,"assign",Kt);var rn=[0,0],tn=[0,0];function nn(r,t){var n,e;return 0===t||0===r||C(r)||B(r)?r:(Pt(r,rn,1,0),t+=rn[1],t+=function(r){var t=st(r);return(t=(2146435072&t)>>>20)-1023|0}(r=rn[0]),t<-1074?_t(0,r):t>1023?r<0?$t:Lt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Qt.assign(r,tn,1,0),n=tn[0],n&=2148532223,e*It(n|=t+1023<<20,tn[1])))}var en=1e300,an=1e-300,on=[0,0],un=[0,0];function fn(r,t){var n,e,a,i,o,u,f,c,l,p,s,y,v,g;if(C(r)||C(t))return NaN;if(Vr.assign(t,on,1,0),o=on[0],0===on[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return D(r);if(-.5===t)return 1/D(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(B(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(t===Zr)?0:Zr}(r,t)}if(Vr.assign(r,on,1,0),i=on[0],0===on[1]){if(0===i)return function(r,t){return t===Mr?Zr:t===Zr?0:t>0?Z(t)?r:0:Z(t)?_t(Zr,r):Zr}(r,t);if(1===r)return 1;if(-1===r&&Z(t))return-1;if(B(r))return r===Mr?fn(-0,-t):t<0?0:Zr}if(r<0&&!1===Y(t))return(r-r)/(r-r);if(a=J(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,u=(u=i>>>31|0)&&Z(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&st(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*en*en:u*an*an;if(n>1072693248)return 0===f?u*en*en:u*an*an;s=function(r,t){var n,e,a,i,o,u;return n=(o=1.9259629911266175e-8*(a=t-1)-a*a*(0===(u=a)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Rr(e=(i=1.4426950216293335*a)+o,0))-i),r[0]=e,r[1]=n,r}(un,a)}else s=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y,v,g,d,w,h,A,b,F,m,N;return b=0,n<1048576&&(b-=53,n=st(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(F=1048575&n|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,n-=1048576),o=Rr(a=(h=(t=Vt(t,n))-(c=Ht[m]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),f=Vt(0,e+=m<<18),w=(i=a*a)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Rr(f=3+(i=o*o)+(w+=(u=A*(h-o*f-o*(t-(f-c))))*(o+a)),0),g=(y=-7.028461650952758e-9*(p=Rr(p=(h=o*f)+(A=u*f+(w-(f-3-i))*a),0))+.9617966939259756*(A-(p-h))+Wt[m])-((v=Rr(v=(s=.9617967009544373*p)+y+(l=Gt[m])+(d=b),0))-d-l-s),r[0]=v,r[1]=g,r}(un,a,n);if(y=(p=(t-(c=Rr(t,0)))*s[0]+t*s[1])+(l=c*s[0]),Vr.assign(y,on,1,0),v=Yr(on[0]),g=Yr(on[1]),v>=1083179008){if(0!=(v-1083179008|g))return u*en*en;if(p+8008566259537294e-32>y-l)return u*en*en}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|g))return u*an*an;if(p<=y-l)return u*an*an}return y=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y;return s=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(e=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),t-=i=Vt(0,e)),r=Yr(r=st(c=1-((c=(o=.6931471824645996*(i=Rr(i=n+t,0)))+(u=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(a=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?nn(c,l):Vt(c,r)}(v,l,p),u*y}function cn(r,t,n,e){var a,i;return C(r)||C(t)||C(n)||C(e)||t>e||e>n?NaN:r<=t?0:(a=(n-t)*(e-t),i=(n-t)*(n-e),r<=e?fn(r-t,2)/a:r<n?1-fn(n-r,2)/i:1)}function ln(r){return function(){return r}}function pn(r,t,n){var e,a;return C(r)||C(t)||C(n)?ln(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),a=(t-r)*(t-n),function(i){if(C(i))return NaN;if(i<=r)return 0;if(i<=n)return fn(i-r,2)/e;if(i<t)return 1-fn(t-i,2)/a;return 1}):ln(NaN)}P(cn,"factory",pn);export{cn as default,pn as factory};
//# sourceMappingURL=mod.js.map