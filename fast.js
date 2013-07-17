(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.r_fast_r_furious = factory();
  }
}(this, function () {
    var r_fast = /^((T(he)(?=.*the)|2(?=.* 2)) )?Fast (Five|(((and t\3)|\2(?=.*s$)|&(?!.*:)) Furious(( (6|7))|: Tokyo Drift)?))$/;

    return function (str) {
        return r_fast.test(str);
    }
}));
