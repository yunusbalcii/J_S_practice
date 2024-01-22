// let arr = [1, 2, 3, 4, 5, 6, 7];
// // filter
// new_Arr = arr.filter((val) => {
//     return val%2 == 0;
// });

// console.log(new_Arr);

// //reduce
// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });

// console.log(output);

// // reduce
// const bigger = arr.reduce((res, con) => {
//   if (con > res) {
//     return (res = con);
//   }
// });
// console.log(bigger);

// practice questions

// let marks = [12, 87, 99,92, 90];

// let ninenty_pluse = marks.filter((val) => {
//   if (val > 90) {
//     return val;
//   };
// });
// console.log(ninenty_pluse);

let n = prompt("Enter a number: ");
let array = [];
for(let i=1;i<=n;i++) {
    array.push(i);
};
console.log(array);

let sum = array.reduce((res, con) => {
    return res+con;
});

console.log(sum);

let multi = array.reduce((res, con) => {
    return res*con;
});
console.log(multi);