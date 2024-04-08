// let m1: string = 'hi';
// console.log(m1);

// let msg: string = 'hii';
// let heading = document.createElement('h1');
// heading.textContent = msg;
// document.body.appendChild(heading);

// var max: number = 100;
// var counter: number = 0;
// if (counter < max) {
//     counter++;
// }

console.log(counter);

var max: number = 100;
var counter: number = 100;
if (counter <= max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);

// var discount: number;
var itemCount = 11;
 if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
 } else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
 } else {
    discount = 15;
 }

 console.log(`skidka = ${discount}`)

var discount: number;
var itemCount: number = -4;
 if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
 } else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
 } else if (itemCount > 10) {
    discount = 15;
 } else {
    throw new Error('err!!!!111!1');
 }

 console.log(`skidka = ${discount}`)

 

// export {};