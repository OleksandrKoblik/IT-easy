// 1================================================================
//
// let arr1 = ["a", "b", "c"];
// let arr2 = [1, 2, 3];
// let newArr = arr1.concat(arr2);
// console.log(newArr);

// 2================================================================

// let arr1 = ["a", "b", "c"];
//
//  newArr = arr1.push(1, 2, 3);
// console.log(arr1, "newArr");
//  newArr1 = arr1.splice(3, 3, 6, 2, 3);
// console.log(arr1, "newArr1");
//
// 3================================================================

// let arr = [1, 2, 3, 4, 5];
//
// let removed = arr.splice(1, 2);
// console.log(arr);

// 4================================================================
//
// let arr = [1, 2, 3, 4, 5];
//
// let removed = arr.splice(3, 0, "a", "b", "c");
// console.log(arr);
//
// 5================================================================

// const arr =[1, 2, 3, 4, 5,];
// let arr1 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i] * 10);
// }
//
// console.log(arr);
// console.log(arr1);

// 6================================================================
//
// for (let i = 4; i <= 400; i++) {
//     console.log(i);
// }
//
// 7================================================================
//
// for (let i = 4; i <= 13; i +=3) {
//     console.log(i);
// }
//
// 8================================================================
//
// for (let i = 654; i >= 0; i--) {
//     console.log(i);
// }
//
// 9================================================================
//
// for (let i = 1983; i <= 2017; i++) {
//     console.log(i);
// }
//
// 10================================================================
//
// for (let i = -4; i <= 100; i +=2) {
//     console.log(i);
// }
//
// 11================================================================
//
// let trata = 0;
// for (let i = 0; i <=100; i++) {
//     console.log(trata += i);
// }
//
// 12================================================================
//
// let trata = +prompt(" enter length");
// let arr = [];
// let str = "x";
// for (let i = 0; i < trata; i++) {
//     arr.push(str);
//     str += "x";
// }
// console.log( arr);
//
// 13================================================================

// let trata = +prompt(" enter length");
// let arr = [];
// let str = "";
//
// for (let i = 1; i <= trata; i++) {
//      str = "";
//     for (let j = 1; j <= i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log( arr);

//14================================================================

// let arr = [];
//
// for (let i = 0; i < 11; i++) {
//     let firstArr = [];
//
//     for (let j = 0; j < 11; j++) {
//         let el = j === i - i || j === j - i || i === j - j + 10 || i === i - j + 10 ? "x" : 0;
//         firstArr.push(el);
//     }
//     arr.push(firstArr);
// }
// console.log(arr);

//15 ===========================================================

// let arr = [];
//
// for (let i = 1; i <= 10; i++) {
//     let firstArr = [];
//
//     for (let j = 1; j <= 10; j++) {
//         let el = j * i;
//         firstArr.push(el);
//     }
//     arr.push(firstArr);
// }
// console.log(arr);

//16 ============================================================

// function declination() {
//     let num = +prompt("wright a number");
//     let word = ['товар', 'товара', 'товаров'];
//     return word [(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
// }
//
// console.log(declination());
