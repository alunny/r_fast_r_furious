var r_fast = /^((The(?=.*the)|2(?=.* 2)) )?Fast (Five|(((and the)|2(?=.*s$)|&(?!.*:)) Furious(( (6|7))|: Tokyo Drift)?))$/;

module.exports = function (str) {
    return r_fast.test(str);
}
