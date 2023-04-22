//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let arrName = [];

// for (let i = 0; i < fruts.length; i++) {
//     arrName.push(fruts[i].name);
//     console.log(arrName);
// }

// console.log(arrName)

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 1; i < 12; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0;

// while (i < 5) {
//     i++
//     console.log( `цифра ${i}!` );
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//     let value = +prompt("Please enter number biger then 100");
//     console.log(value);
//     if (value > 100 || !value) break;
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let middle = 0;
// for (let i = 0; i < girls.length; i++) {
//     middle += girls[i].age;
//     console.log(middle);
// }

// alert(`Середній вік дорівнює : ${middle / girls.length}`)
// console.log(middle / girls.length);
