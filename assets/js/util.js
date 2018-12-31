let util = {};

const curry = f  =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((fn, iter) => {
  let res = [];
  for(const item of iter) {
    res.push(fn(item));
  }
  return res;
})

const filter = curry((fn, iter) => {
  let res = [];
  for (const item of iter) {
    if( fn(item) ) {
      res.push(item);
    }
  }
  return res;
})

const reduce = curry((fn, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const item of iter) {
    acc = fn(acc, item);
  }
  return acc;
});

const compose = (...args) => reduce((v, fn) => fn(v), args);
const pipe = (f, ...fs) => (...as) => compose(f(...as), ...fs);

const range = (l) => {
  let i = -1;
  let res = [];
  while(++i < l) {
    res.push(i);
  }
  return res;
};

const take = curry((l, iter) => {
  let res = [];
  for (const item of iter) {
    res.push(item);
    if(res.length == l) {
      return res;
    }
  }
  return res;
});

const lazyRange =  function *(l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
};

const lazyMap =  curry(function *(f, iter) {
  for ( const item of iter) {
    yield f(item);
  }
});

const lazyFilter =  curry(function *(f, iter) {
  for ( const item of iter) {
    if(f(item)) {
      yield item;
    }
  }
});

const lazyFlatten = function *(iter) {
  const isIterable = v => v && v[Symbol.iterator];

  for(const item of iter) {
    if(isIterable(item)) {
      for(const innerItem of item) yield innerItem;
    } else {
      yield item;
    }
  }
}

const lazyFlatMap = curry(pipe(lazyMap, lazyFlatten));

const takeAll = take(Infinity);
const flatten = pipe(lazyFlatten, takeAll);


util = {
  compose,
  pipe,
  take,
  takeAll,
  map,
  filter,
  range,
  reduce,
  flatten,
  lazyMap,
  lazyFilter,
  lazyRange,
  lazyFlatMap,
};

export default util;

