// function without parameter
function Fn() {
  console.log("Hello");
}

Fn();

// function with paremeter
function square(num) {
  return num * num;
}

console.log(square(99));

// arrow function
let divide = (num) => {
  return num / num;
};

console.log(divide(123));

divide = (num) => num / 2;
console.log(divide(12));

const arrowfun = (a, b) => {
  return a * b;
};
console.log(arrowfun(12, 34));

arrowfun = (a, b) => b * a - 1;
console.log(arrowfun(12, 23));

count = 0;
function vowels_count(str) {
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowels_count("Heey"));

const vowel_count = (str) => {
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }
  return count;
};

console.log(vowel_count("Hahaha"));

// For each function or method
// higher order function or methonds that ether take function as argunment or return a function as output
let arr = [1, 2, 3, 4, 5, 6];

let calcSquare = (val) => {
  console.log((val *= val));
};
arr.forEach(calcSquare);

arr.forEach(function printval(val) {
  // value at each arr index
  console.log(val);
});

// Arrow function inside method for each
arr.forEach((val) => {
  console.log(val);
});

arr = ["Samyog", "koirala", "is", "god"];
arr.forEach((val, index, arr) => {
  console.log(val.toUpperCase(), index, arr);
});

// Map

let nums = [12, 42, 12, 45, 24];

let new_rr = nums.map((val) => {
  return val;
});

console.log(new_rr);

// filter
let new_arr = nums.filter((val) => {
  return val % 2 == 0;
});

console.log(new_arr);
