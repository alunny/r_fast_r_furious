var assert = require('assert'),
    fast = require('./fast');

assert(! fast('The Sorrow and the Pity'));

assert(fast('The Fast and the Furious'));

assert(fast('2 Fast 2 Furious'));

assert(fast('The Fast and the Furious: Tokyo Drift'));

assert(fast('Fast & Furious'));

assert(fast('Fast Five'));

assert(fast('Fast & Furious 6'));

assert(fast('Fast & Furious 7'));

assert(! fast('Fast & Furious 100: Electric Boogaloo'));

assert(! fast('2 Fast & Furious'));

assert(! fast('The Fast 2 Furious'));

assert(! fast('The Fast Five'));

assert(! fast('Fast & Furious: Tokyo Drift'));

assert(! fast('2 Fast 2 Furious 6'));

assert(! fast('Fast 2 Furious'));

assert(! fast('Fast and the Furious'));
