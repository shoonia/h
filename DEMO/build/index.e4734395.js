var e=Array.isArray,t=document,n=function n(r,l){if(null!=l&&!1!==l)if(e(l))for(var a=0;l.length>a;)n(r,l[a++]);else r.appendChild(l.nodeType>0?l:t.createTextNode(l))},r=function(e){var r=t.createDocumentFragment();return n(r,e.children),r},l=new Set(["innerHTML","textContent","value","htmlFor"]),a=function(r,a){if("function"==typeof r)return r(a);var i="string"==typeof r?t.createElement(r):r,s=a.ref;for(var o in a)if("ref"!==o&&"children"!==o){var c=a[o];if("className"===o)i.setAttribute("class",e(c)?c.filter(Boolean).join(" "):c);else if(l.has(o))i[o]=c;else if("style"===o)if("string"==typeof c)i.style.cssText=c;else for(var u in c)i.style[u]=c[u];else"o"===o[0]&&"n"===o[1]?(o=o.toLowerCase())in i&&(i[o]=c):"boolean"!=typeof c||/^(aria|data)-/.test(o)?null!=c&&i.setAttribute(o,c):c?i.setAttribute(o,""):i.removeAttribute(o)}return n(i,a.children),null!=s&&("function"==typeof s?s(i):s.current=i),i};a(document.documentElement,{lang:"en"}),a(document.head,{children:a("style",{children:"\n  .wrapper {\n    font-family: sans-serif;\n    padding: 25px;\n  }\n"})}),a(document.body,{className:"wrapper",children:a((()=>{const e={current:null},t={current:null},n=({target:e})=>{e.closest("[data-item]").remove()},l=()=>{const r=e.current;""!==r.value&&(a(t.current,{children:a("li",{"data-item":!0,className:"_VrCvP",children:[r.value,a("button",{type:"button",className:"_1Pz2d",onClick:n,children:"Remove"})]})}),r.value="",r.focus())};return a(r,{children:[a("fieldset",{style:"border: 0; padding: 0;",children:a("div",{className:"_3QowC",children:[a("input",{ref:e,type:"text",className:"_3KR0D",onKeyPress:e=>{"Enter"===e.key&&l()}}),a("button",{type:"button",className:"_1Pz2d",onClick:l,children:"Add Item"})]})}),a("ul",{className:"_uhdz0",ref:t})]})}),{})});