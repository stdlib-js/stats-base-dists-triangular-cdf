// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y=Math.floor;function v(r){return y(r)===r}function p(r){return v(r/2)}function b(r){return p(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,A=Number.NEGATIVE_INFINITY;function _(r){return r===w||r===A}var m=Math.sqrt;function d(r){return Math.abs(r)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var U=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var N,j="function"==typeof Symbol?Symbol.toStringTag:"";N=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return U.call(r);t=r[j],u=j,n=null!=(o=r)&&h.call(o,u);try{r[j]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[j]=t:delete r[j],e}:function(r){return U.call(r)};var g=N,I="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var S,E="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===g(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Float64Array;var T="function"==typeof Float64Array?Float64Array:null;var G,P="function"==typeof Float64Array?Float64Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L=G,V="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null;var M,k="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===g(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x=M,Y="function"==typeof Uint16Array;var q="function"==typeof Uint16Array?Uint16Array:null;var C,z="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===g(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:C,uint8:x};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new L(1),Z=new F(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return X[0]=n,r[0]=Z[$],r[1]=Z[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var er=!0===Q?0:1,or=new L(1),ur=new F(or.buffer);function ir(r,n){return or[0]=r,ur[er]=n>>>0,or[0]}function fr(r){return 0|r}var ar,cr,lr=!0===Q?1:0,yr=new L(1),vr=new F(yr.buffer);function pr(r){return yr[0]=r,vr[lr]}!0===Q?(ar=1,cr=0):(ar=0,cr=1);var br={HIGH:ar,LOW:cr},wr=new L(1),Ar=new F(wr.buffer),_r=br.HIGH,mr=br.LOW;function dr(r,n){return Ar[_r]=r,Ar[mr]=n,wr[0]}var sr=[0,0];function Ur(r,n){var t,e;return tr(sr,r),t=sr[0],t&=2147483647,e=pr(n),dr(t|=e&=2147483648,sr[1])}var hr=!0===Q?1:0,Nr=new L(1),jr=new F(Nr.buffer);function gr(r,n){return Nr[0]=r,jr[hr]=n>>>0,Nr[0]}var Ir=[1,1.5],Or=[0,.5849624872207642],Sr=[0,1.350039202129749e-8];function Er(r,n){return l(n)||_(n)?(r[0]=n,r[1]=0,r):0!==n&&d(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Fr=[0,0],Hr=[0,0];function Tr(r,n){var t,e;return 0===n||0===r||l(r)||_(r)?r:(function(r,n){1===arguments.length?Er([0,0],r):Er(r,n)}(Fr,r),n+=Fr[1],n+=function(r){var n=pr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Fr[0]),n<-1074?Ur(0,r):n>1023?r<0?A:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr(Hr,r),t=Hr[0],t&=2148532223,e*dr(t|=n+1023<<20,Hr[1])))}var Gr=1e300,Pr=1e-300,Lr=[0,0],Vr=[0,0];function Wr(r,n){var t,e,o,u,i,f,a,c,y,p,s,U,h,N;if(l(r)||l(n))return NaN;if(tr(Lr,n),i=Lr[0],0===Lr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:d(r)<1==(n===w)?0:w}(r,n)}if(tr(Lr,r),u=Lr[0],0===Lr[1]){if(0===u)return function(r,n){return n===A?w:n===w?0:n>0?b(n)?r:0:b(n)?Ur(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&b(n))return-1;if(_(r))return r===A?Wr(-0,-n):n<0?0:w}if(r<0&&!1===v(n))return(r-r)/(r-r);if(o=d(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&b(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&pr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Gr*Gr:f*Pr*Pr;if(t>1072693248)return 0===a?f*Gr*Gr:f*Pr*Pr;s=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Vr,o)}else s=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,w,A,_,m,d,s,U,h,N;return s=0,t<1048576&&(s-=53,t=pr(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?h=0:U<767610?h=1:(h=0,s+=1,t-=1048576),i=ir(o=(m=(n=gr(n,t))-(c=Ir[h]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=gr(0,e+=h<<18),_=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=ir(a=3+(u=i*i)+(_+=(f=d*(m-i*a-i*(n-(a-c))))*(i+o)),0),w=(p=-7.028461650952758e-9*(y=ir(y=(m=i*a)+(d=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(d-(y-m))+Sr[h])-((b=ir(b=(v=.9617967009544373*y)+p+(l=Or[h])+(A=s),0))-A-l-v),r[0]=b,r[1]=w,r}(Vr,o,t);if(p=(n-(c=ir(n,0)))*s[0]+n*s[1],y=c*s[0],tr(Lr,U=p+y),h=fr(Lr[0]),N=fr(Lr[1]),h>=1083179008){if(0!=(h-1083179008|N))return f*Gr*Gr;if(p+8008566259537294e-32>U-y)return f*Gr*Gr}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|N))return f*Pr*Pr;if(p<=U-y)return f*Pr*Pr}return U=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=gr(0,e)),r=fr(r=pr(c=1-((c=(i=.6931471824645996*(u=ir(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Tr(c,l):gr(c,r)}(h,y,p),f*U}function Mr(r,n,t,e){var o,u;return l(r)||l(n)||l(t)||l(e)||n>e||e>t?NaN:r<=n?0:(o=(t-n)*(e-n),u=(t-n)*(t-e),r<=e?Wr(r-n,2)/o:r<t?1-Wr(t-r,2)/u:1)}function kr(r){return function(){return r}}function xr(r,n,t){var e,o;return l(r)||l(n)||l(t)?kr(NaN):r<=t&&t<=n?(e=(n-r)*(t-r),o=(n-r)*(n-t),function(u){if(l(u))return NaN;if(u<=r)return 0;if(u<=t)return Wr(u-r,2)/e;if(u<n)return 1-Wr(n-u,2)/o;return 1}):kr(NaN)}c(Mr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:xr});export{Mr as default,xr as factory};
//# sourceMappingURL=mod.js.map
