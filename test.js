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
