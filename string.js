let name = "Samyog";
let len = name.length;
console.log(len);
console.log(name[5]);

let obj = {
    item: "pen",
    price: 10,
};

// Template literals // String interpolation
let wow = `The cost of ${obj.item} is ${obj.price} ${1+2+5}.`
console.log(wow);
console.log(typeof wow);


// escape character
let char = "Samyog \n  Koirala"
let newchar = "KaiVex";
console.log(char);
console.log("Samyog \t   Koirala");
console.log(char.length);

// String methods in JS
// str.toUpperCase() // change to upper case
// str.toLowerCase() // change to lower case
// str.trim() // remove white space
// str.slice(start,end?) // returns part of string
//  ? == optional
// str1.concat(str2) // joind str2 with str 1
// str.replace(searchVal,newVal)
// str.charAt(idx)

// String is immutable in JS
let uppercase = char.toUpperCase(); 
console.log(uppercase);

let lowercase = char.toLowerCase();
console.log(lowercase);

let trimcase = char.trim();
console.log(trimcase);

let slicee = char.slice(1,3);
console.log(slicee);

let concatt = char.concat(newchar); /// or use + 
let concattt = char+newchar;
console.log(concatt);
console.log(concattt);

let search = char.replace("Sa", "A");
console.log(search);

let charat = char.charAt(6);
console.log(charat);

let FullName = prompt("Enter your name without space: ");

let usename = "@" + FullName + FullName.length;

console.log(usename);
