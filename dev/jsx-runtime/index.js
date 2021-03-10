'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let properties = new Set([
  'innerHTML',
  'textContent',
  'value',
  'htmlFor',
]);

let isNotNil = (val) => val != null;
let isString = (val) => typeof val === 'string';
let isNumber = (val) => typeof val === 'number';
let isFunction = (val) => typeof val === 'function';
let isBoolean = (val) => typeof val === 'boolean';

let isArray = Array.isArray;
let doc = document;

let className = (val) => isArray(val)
  ? val.filter(Boolean).join(' ')
  : val;

let appendChildren = (node, children) => {
  if (isNotNil(children) && children !== false) {
    if (isArray(children)) {
      for (let i = 0; children.length > i;) {
        appendChildren(node, children[i++]);
      }
    } else {
      node.appendChild(
        isNumber(children.nodeType)
          ? children
          : doc.createTextNode(children)
      );
    }
  }
};

let Fragment = (props) => {
  let fragment = doc.createDocumentFragment();

  appendChildren(fragment, props.children);
  return fragment;
};

let jsx = (el, props) => {
  if (isFunction(el)) {
    return el(props);
  }

  let node = isString(el) ? doc.createElement(el) : el;
  let ref = props.ref;

  for (let key in props) {
    let val = props[key];

    if (key === 'ref') ; else if (key === 'className') {
      node.setAttribute('class', className(val));
    } else if (key === 'children') {
      appendChildren(node, val);
    } else if (properties.has(key)) {
      node[key] = val;
    } else if (key === 'style') {
      if (isString(val)) {
        node.style.cssText = val;
      } else {
        for (let s in val) {
          node.style[s] = val[s];
        }
      }
    // Benchmark for comparison (thanks preact): https://esbench.com/bench/574c954bdb965b9a00965ac6
    } else if (key[0] === 'o' && key[1] === 'n') {
      let name = key.toLowerCase();

      if (name in node) {
        node[name] = val;
      }
    } else if (isBoolean(val) && !/^(aria|data)-/.test(key)) {
      node[key] = val;
    } else if (isNotNil(val)) {
      node.setAttribute(key, '' + val);
    }
  }

  if (isNotNil(ref)) {
    if ('current' in ref) {
      ref.current = node;
    } else if (isFunction(ref)) {
      ref(node);
    }
  }

  return node;
};

exports.Fragment = Fragment;
exports.jsx = jsx;
exports.jsxs = jsx;