var r_fast = /^((The|2) )?Fast (Five|(((and the)|2|&) Furious(( 6| 7)|: Tokyo Drift)?))$/;

module.exports = function (str) {
    return r_fast.test(str);
}
