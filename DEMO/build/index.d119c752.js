var e=function e(t,n){Array.isArray(n)?n.forEach((function(n){e(t,n)})):null!=n&&!1!==n&&t.appendChild(n.nodeType>0?n:document.createTextNode(n))},t=function(t){var n=document.createDocumentFragment();return e(n,t.children),n},n=new Map,r=new Set(["className","innerHTML","textContent","value","htmlFor"]),l=function(t,l){if("function"==typeof t)return t(l);if("_ex"!==t){var a,i="string"==typeof t?document.createElement(t):t;for(var o in l)if("ref"!==o&&"children"!==o)if(a=l[o],n.has(o))n.get(o)(i,a);else if(r.has(o))i[o]=a;else if("style"===o)if("string"==typeof a)i.style.cssText=a;else for(o in a)"-"===o[0]?i.style.setProperty(o,a[o]):i.style[o]=a[o];else"o"===o[0]&&"n"===o[1]?(o=o.toLowerCase())in i&&(i[o]=a):null!=a?"boolean"!=typeof a||/^(ari|dat)a-/.test(o)?i.setAttribute(o,a):a?i.setAttribute(o,""):i.removeAttribute(o):i.removeAttribute(o);return e("TEMPLATE"===i.tagName?i.content:i,l.children),null!=(a=l.ref)&&("function"==typeof a?a(i):a.current=i),i}for(var c in l)n.set(c,l[c])};l(document.documentElement,{lang:"en"}),l(document.head,{children:l("style",{children:"\n  .wrapper {\n    font-family: sans-serif;\n    padding: 25px;\n  }\n"})}),l(document.body,{className:"wrapper",children:l((()=>{const e={current:null},n={current:null},r=({target:e})=>{e.closest("[data-item]").remove()},a=()=>{const t=e.current;""===t.value&&(l(n.current,{children:l("li",{"data-item":!0,className:"_VrCvP",children:[t.value,l("button",{type:"button",className:"_1Pz2d",onClick:r,children:"Remove"})]})}),t.value="")};return l(t,{children:[l("fieldset",{style:"border: 0; padding: 0;",children:l("div",{className:"_3QowC",children:[l("input",{ref:e,type:"text",className:"_3KR0D",onKeyPress:e=>{"Enter"===e.key&&a()}}),l("button",{type:"button",className:"_1Pz2d",onClick:a,children:"Add Item"})]})}),l("ul",{ref:n,className:"_uhdz0"})]})}),{})});