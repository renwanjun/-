// 直接选择效率不高
function getElementByID(id, rootNode) {
  rootNode = rootNode || document.body;
  let children = rootNode.children;
  let target;
  if (children.length == 0) return null;
  for (let i = 0, length = children.length; i < length; i++) {
    let nodeId = children[i].getAttribute("id");
    // let nodeId = children[i].id
    if (nodeId && nodeId == id) return children[i];
    target = getElementByID(id, children[i]);
    if (target) return target;
  }
}

function _nodeIdMap(rootNode, list) {
  let id = rootNode;
  if (id) list.set(id, rootNode);
  let children = rootNode.children,
    lenth = children.length;
  for (let i = 0; i < lenth; i++) {
    _nodeIdMap(children[i], list);
  }
}

function _initNodeIdMap() {
  var rootNode = document.body;
  var nodeIdMaps = new Map();
  _nodeIdMap(rootNode, nodeIdMaps);
  return nodeIdMaps;
}

const findId = function (id) {
  const list = _initNodeIdMap();
  return () => list[id];
};
findId(id)();
