var R = require('ramda');
var util = require('./internal/util');


//. ## Identity
//.
//. A data type that holds a value and exposes a monadic api.
//.
//. ```js
//. Identity(3).map(R.inc); // => Identity(4)
//. ```
//.

//# Identity :: a -> Identity[a]
//.
//. Constructs a new `Identity[a]` data type that holds a single
//. value `a`.
//.
function Identity(x) {
  if (!(this instanceof Identity)) {
    return new Identity(x);
  }
  this.value = x;
}

//# Identity.of :: a -> Identity[a]
//.
//. [Applicative specification][applicative-spec]. Creates a new `Identity[a]` holding the value `a`.
//.
Identity.of = function(x) {
  return new Identity(x);
};
Identity.prototype.of = Identity.of;

//# Identity.prototype.map :: Identity[a] => (a -> b) -> Identity[b]
//.
//. [Functor specification][functor-spec]. Creates a new `Identity[a]` mapping function `f` onto
//. `a` returning any value b.
//.
Identity.prototype.map = function(f) {
  return new Identity(f(this.value));
};

//# Identity.prototype.ap :: (Identity[a -> b], f: Applicative[_]) => f[a] -> f[b]
//.
//. [Apply specification][apply-spec]. Applies the function inside the `Identity[a]`
//. type to another applicative type.
//.
Identity.prototype.ap = function(app) {
  return app.map(this.value);
};

//# Identity.prototype.chain :: (Identity[a], m: Monad[_]) => (a -> m[b]) -> m[b]
//.
//. [Chain specification][chain-spec]. Transforms the value of the `Identity[a]`
//. type using an unary function to monads. The `Identity[a]` type
//. should contain a function, otherwise an error is thrown.
//.
Identity.prototype.chain = function(fn) {
  return fn(this.value);
};

//# Identity.prototype.get :: (Identity[a]) => a
//.
//. Returns the value of `Identity[a]`
//.
Identity.prototype.get = function() {
  return this.value;
};

// equality method to enable testing
Identity.prototype.equals = util.getEquals(Identity);

Identity.prototype.toString = function() {
  return 'Identity(' + R.toString(this.value) + ')';
};

module.exports = Identity;
