var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var o,i,r,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,f=setTimeout(T,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=r}function T(){var e=d();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return v?m(n,r-(e-l)):n}(e))}function h(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function O(){var e=d(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return w(u);if(v)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},O.flush=function(){return void 0===f?a:h(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form")};b.form.addEventListener("input",t((function(e){e.preventDefault();const t=b.form.elements.email.value,n=b.form.elements.message.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:t,message:n}))}),500)),b.form.addEventListener("submint",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({email:t.value,message:n.value}),localStorage.removeItem("feedback-form-state"),b.form.reset()})),window.addEventListener("load",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},{email:n,message:o}=t;b.form.elements.email.value=n,b.form.elements.message.value=o}));
//# sourceMappingURL=03-feedback.bbd80fa1.js.map
