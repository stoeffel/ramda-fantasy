# API


## Either

A data type that holds either a `Left` or a `Right` value and exposes a monadic api.



## Future

A data type that holds an eventual value and exposes a monadic api.



## IO

A data type that holds a side-effect and exposes a monadic api.



## Identity

A data type that holds a value and exposes a monadic api.

```js
Identity(3).map(R.inc); // => Identity(4)
```

<h6 name="Identity"><code><a href="https://github.com/stoeffel/ramda-fantasy/blob/docs/src/Identity.js#L14">Identity :: a -> Identity[a]</a></code></h6>

Constructs a new `Identity[a]` data type that holds a single
value `a`.

<h6 name="Identity.of"><code><a href="https://github.com/stoeffel/ramda-fantasy/blob/docs/src/Identity.js#L26">Identity.of :: a -> Identity[a]</a></code></h6>

[Applicative specification][applicative-spec]. Creates a new `Identity[a]` holding the value `a`.

<h6 name="Identity.prototype.map"><code><a href="https://github.com/stoeffel/ramda-fantasy/blob/docs/src/Identity.js#L35">Identity.prototype.map :: Identity[a] => (a -> b) -> Identity[b]</a></code></h6>

[Functor specification][functor-spec]. Creates a new `Identity[a]` mapping function `f` onto
`a` returning any value b.

<h6 name="Identity.prototype.ap"><code><a href="https://github.com/stoeffel/ramda-fantasy/blob/docs/src/Identity.js#L44">Identity.prototype.ap :: (Identity[a -> b], f: Applicative[_]) => f[a] -> f[b]</a></code></h6>

[Apply specification][apply-spec]. Applies the function inside the `Identity[a]`
type to another applicative type.

<h6 name="Identity.prototype.chain"><code><a href="https://github.com/stoeffel/ramda-fantasy/blob/docs/src/Identity.js#L53">Identity.prototype.chain :: (Identity[a], m: Monad[_]) => (a -> m[b]) -> m[b]</a></code></h6>

[Chain specification][chain-spec]. Transforms the value of the `Identity[a]`
type using an unary function to monads. The `Identity[a]` type
should contain a function, otherwise an error is thrown.

<h6 name="Identity.prototype.get"><code><a href="https://github.com/stoeffel/ramda-fantasy/blob/docs/src/Identity.js#L63">Identity.prototype.get :: (Identity[a]) => a</a></code></h6>

Returns the value of `Identity[a]`



## Maybe

A data type that holds an optional value and exposes a monadic api.



## Reader

A data type to allow reading values from a shared environement.



## Tuble

A data type that holds a tuple and exposes a monadic api.



## lift2



## lift3



[functor-spec]: https://github.com/fantasyland/fantasy-land#functor
[apply-spec]: https://github.com/fantasyland/fantasy-land#apply
[applicative-spec]: https://github.com/fantasyland/fantasy-land#applicative
[chain-spec]: https://github.com/fantasyland/fantasy-land#chain
