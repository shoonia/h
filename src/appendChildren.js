export let appendChildren = (node, children) => {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      appendChildren(node, child);
    });
  } else if (children != null && children !== false) {
    node.appendChild(
      children.nodeType > 0
        ? children
        : document.createTextNode(children)
    );
  }
};
