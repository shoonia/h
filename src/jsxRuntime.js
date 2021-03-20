import { isArray, doc } from './util';
import { appendChildren } from './appendChildren';

let properties = new Set([
  'innerHTML',
  'textContent',
  'value',
  'htmlFor',
]);

export let jsx = (el, props) => {
  if (typeof el === 'function') {
    return el(props);
  }

  let ref = props.ref;
  let node = typeof el === 'string' ? doc.createElement(el) : el;

  for (let key in props) {
    if (key !== 'ref' && key !== 'children') {
      let val = props[key];

      if (key === 'className') {
        node.setAttribute(
          'class',
          isArray(val)
            ? val.filter(Boolean).join(' ')
            : val
        );
      } else if (properties.has(key)) {
        node[key] = val;
      } else if (key === 'style') {
        if (typeof val === 'string') {
          node.style.cssText = val;
        } else {
          // reuse `key` variable
          for (key in val) {
            if (key[0] === '-') {
              node.style.setProperty(key, val[key]);
            } else {
              node.style[key] = val[key];
            }
          }
        }
        // Benchmark for comparison (thanks preact): https://esbench.com/bench/574c954bdb965b9a00965ac6
      } else if (key[0] === 'o' && key[1] === 'n') {
        key = key.toLowerCase();

        if (key in node) {
          node[key] = val;
        }
      } else if (val != null) {
        if (typeof val !== 'boolean' || /^(ari|dat)a-/.test(key)) {
          node.setAttribute(key, val);
        } else if (val) {
          node.setAttribute(key, '');
        } else {
          node.removeAttribute(key);
        }
      } else {
        node.removeAttribute(key);
      }
    }
  }

  appendChildren(node, props.children);

  if (ref != null) {
    if (typeof ref === 'function') {
      ref(node);
    } else {
      ref.current = node;
    }
  }

  return node;
};
