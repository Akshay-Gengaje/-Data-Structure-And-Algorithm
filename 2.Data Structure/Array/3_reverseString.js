function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }
  const backwards = [];
  const length = str.length - 1;
  for (let i = length; i > 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const str = reverse2("Hi my name is Akshay!");
console.log(str);
