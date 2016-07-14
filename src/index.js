var isNode = require("@nathanfaucett/is_node");


module.exports = isDocument;


function isDocument(value) {
    return isNode(value) && value.nodeType === 9;
}
