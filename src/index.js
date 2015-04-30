var isNode = require("is_node");


module.exports = isDocument;


function isDocument(obj) {
    return isNode(obj) && obj.nodeType === 9;
}
