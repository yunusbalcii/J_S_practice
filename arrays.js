let marks = [1,2,3,4,5,6,7];
console.log(marks);
console.log(marks.length); // property

let heros = ["Hanuman", "Hulk", "Iron_Man", "Thor"];
console.log(heros);
console.log(heros.length);

// for loop
for(i=0;i<heros.length;i++) {
    console.log(heros[i]);
}

// for of loop
for (let element of heros) {
    console.log(element);
}

let items = [250, 650, 300, 900, 50];
console.log(items);
for (let item of items) {
    console.log("Before value chaning: "+ item);
    after_descount = item-(item*10)/100;
    console.log("AFter changing value: " + after_descount);
}

for (let    i=0;i<items.length;i++) {
    let offer = (items[i]*10)/100;
    items[i] = items[i] - offer;
    console.log(`The after descount of the price is: ${items[i]-after_descount}.`);
}
console.log(items);


