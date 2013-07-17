# R_Fast_R_Furious

> quickly validate if a movie is part of the Fast & Furious saga

## Usage

In node.js:

````javascript
var r_fast_r_furious = require('r_fast_r_furious')

r_fast_r_furious('Fast Five') // true
r_fast_r_furious('2 Fast 2 Furious') // true
r_fast_r_furious('Schindlers List') // false
````

In a browser:

````html
<script src="fast.js"></script>
<script>
r_fast_r_furious('Fast Five') // true
r_fast_r_furious('2 Fast 2 Furious') // true
r_fast_r_furious('Schindlers List') // false
</script>
````

It's UMD, so you can use whichever module loader you wish.

## License

BSD
