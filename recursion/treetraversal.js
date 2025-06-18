// TREE TRAVERSAL - FILESYSTEM/DOM
// recursively visit children of a hierarchical structure

const fs = require("fs");

const recursiveDir = (path) => {

  fs.readdirSync(path, { withFileTypes: true }).forEach((entry) => {

    if (entry.name.startsWith(".")) return;
     // skip hidden
    const full = `${path}/${entry.name}`;
    
    if (entry.isDirectory()) {
      console.log("D ", full);
      recursiveDir(full);
    } else if (entry.isFile()) {
      console.log("  ", full);
    }
  });
};

function traverseDom(node, depth = 0) {
  console.log(`${"| ".repeat(depth)}<${node.nodeName}>`);
  Array.from(node.children).forEach(child => traverseDom(child, depth + 1));
}

