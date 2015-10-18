var tape = require("tape"),
    underscore = require("..");


tape("underscore(string : String)", function(assert) {
    assert.equal(underscore("string-string"), "string_string");
    assert.equal(underscore("stringString"), "string_string");
    assert.end();
});
