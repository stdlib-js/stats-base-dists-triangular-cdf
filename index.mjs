// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function s(t,r,s,i){var a,d;return e(t)||e(r)||e(s)||e(i)||r>i||i>s?NaN:t<=r?0:(a=(s-r)*(i-r),d=(s-r)*(s-i),t<=i?n(t-r,2)/a:t<s?1-n(s-t,2)/d:1)}function i(t,s,i){var a,d;return e(t)||e(s)||e(i)?r(NaN):t<=i&&i<=s?(a=(s-t)*(i-t),d=(s-t)*(s-i),function(r){if(e(r))return NaN;if(r<=t)return 0;if(r<=i)return n(r-t,2)/a;if(r<s)return 1-n(s-r,2)/d;return 1}):r(NaN)}t(s,"factory",i);export{s as default,i as factory};
//# sourceMappingURL=index.mjs.map
