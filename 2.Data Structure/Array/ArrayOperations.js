const string = ["a", "b", "c", "d"];

//Accessing with index
string[2]; //O(1)

//Push
string.push("e"); //O(1)

// Pop
string.pop(); // O(1)

//unshift
string.unshift("x"); //O(n)

// splice
string.splice(2, 0, "alien"); //O(n)

console.log(string);
