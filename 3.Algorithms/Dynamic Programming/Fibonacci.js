function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8));

function fibonacciMaster() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return cache[n];
      }
    }
  };
}

const fastFibo = fibonacciMaster();
