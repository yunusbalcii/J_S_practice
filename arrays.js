let marks = [1, 2, 3, 4, 5, 6, 7];
console.log(marks);
console.log(marks.length); // property

let heros = ["Hanuman", "Hulk", "Iron_Man", "Thor"];
console.log(heros);
console.log(heros.length);

// for loop
for (i = 0; i < heros.length; i++) {
  console.log(heros[i]);
}

// for of loop
for (let element of heros) {
  console.log(element);
}

let items = [250, 645, 300, 900, 50];
console.log(items);
for (let item of items) {
  console.log("Before value chaning: " + item);
  after_descount = item - (item * 10) / 100;
  console.log("AFter changing value: " + after_descount);
}

for (let i = 0; i < items.length; i++) {
  let offer = (items[i] * 10) / 100;
  items[i] = items[i] - offer;
  console.log(
    `The after descount of the price is: ${items[i] - after_descount}.`
  );
}
console.log(items);

// push() => append new items in array's last position
let veg = ["patato", "tamato", "carrot", "meet", "fist"];
console.log(veg);

veg.push("chips");
console.log(veg);

// pop() => to delete last element
veg.pop();
console.log(veg);

// store delete emement in a new variable
let delete_item = veg.pop();
console.log(veg);
console.log(delete_item);

// Array => toString()
console.log(veg.toString());

//Concat()
let animes = ["Aitama", "Goku", "Naruto", "Luffy", "Genos", "Eren"];
let anime = ["Johan","God","Friend","Ghost"];
let movies = ["Patrick","Cristian"];
let Sport = ["Ronaldo","Nymaar","Halland","metovic","mane"];

let animess = animes.concat(anime,Sport,movies);
console.log(animess);

// Unshift => to store element at first of array
let con = animes.unshift("Hi");
console.log(animes);

// shift => to delete first element of array
let del = animes.shift();
console.log(animes);
console.log(`Deleted element = ${del}`);

// slice() => return a piece of the array
console.log(animes);
console.log(animes.slice(0, 3));

// splice() => change original array(add, remove, replace)
console.log(animes);
// add element
animes.splice(1, 0, 1);
console.log(animes);

// delete emement
animes.splice(1, 2); // remove after index 1 upto index 2 so 1 and 2 removed
console.log(animes);

// replace elemet
animes.splice(0, 1, "Saitama");
console.log(animes);

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(company);

// remove first element
company.shift();
console.log(company);

// remove uber and add ola in its place
company.splice(1, 1, "Ola");
console.log(company);

// add amazon at the end
company.push("Amazon");
console.log(company);

