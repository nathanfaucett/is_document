var tape = require("tape"),
    isDocument = require("..");


tape("isDocument(value) should return true when the value is a document node", function(assert) {
    assert.equal(isDocument({
        nodeType: 9,
        nodeName: "#document"
    }), true);
    assert.end();
});
