var r_fast = /((The )|(2 ))?Fast ((((and the)|2|&) Furious)|Five)/;

module.exports = function (str) {
    return r_fast.test(str);
}
