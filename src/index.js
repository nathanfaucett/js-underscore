var reInflect = require("re_inflect");


module.exports = underscore;


function underscore(string) {
    return string.match(reInflect).join("_").toLowerCase();
}
