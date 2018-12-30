const map = (iter, f) => {
  let res = [];
  for(const item of iter) {
    res.push(f(item));
  }
  return res;
}

export default {
  map
};

