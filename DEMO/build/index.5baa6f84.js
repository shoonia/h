var e=Array.isArray,t=document,n=function n(r,l){if(null!=l&&!1!==l)if(e(l))for(var a=0;l.length>a;)n(r,l[a++]);else r.appendChild(l.nodeType>0?l:t.createTextNode(l))},r=function(e){var r=t.createDocumentFragment();return n(r,e.children),r},l=new Set(["innerHTML","textContent","value","htmlFor"]),a=function(r,a){if("function"==typeof r)return r(a);var i="string"==typeof r?t.createElement(r):r,s=a.ref;for(var c in a)if("ref"!==c&&"children"!==c){var o=a[c];if("className"===c)i.setAttribute("class",e(o)?o.filter(Boolean).join(" "):o);else if(l.has(c))i[c]=o;else if("style"===c)if("string"==typeof o)i.style.cssText=o;else for(var u in o)i.style[u]=o[u];else if("o"===c[0]&&"n"===c[1]){var d=c.toLowerCase();d in i&&(i[d]=o)}else"boolean"!=typeof o||/^(aria|data)-/.test(c)?null!=o&&i.setAttribute(c,""+o):i[c]=o}return n(i,a.children),null!=s&&("current"in s?s.current=i:"function"==typeof s&&s(i)),i};a(document.documentElement,{lang:"en"}),a(document.head,{children:a("style",{children:"\n  .wrapper {\n    font-family: sans-serif;\n    padding: 25px;\n  }\n"})}),a(document.body,{className:"wrapper",children:a((()=>{const e={current:null},t={current:null},n=({target:e})=>{e.closest("[data-item]").remove()},l=()=>{const r=e.current;""!==r.value&&(a(t.current,{children:a("li",{"data-item":!0,className:"_VrCvP",children:[r.value,a("button",{type:"button",className:"_1Pz2d",onClick:n,children:"Remove"})]})}),r.value="",r.focus())};return a(r,{children:[a("fieldset",{style:"border: 0; padding: 0;",children:a("div",{className:"_3QowC",children:[a("input",{ref:e,type:"text",className:"_3KR0D",onKeyPress:e=>{"Enter"===e.key&&l()}}),a("button",{type:"button",className:"_1Pz2d",onClick:l,children:"Add Item"})]})}),a("ul",{className:"_uhdz0",ref:t})]})}),{})});