
// ========= Task 1
// const question = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?");

// if (question === '5') {
//     console.log('Верный ответ');
// }  else if ( question === 'five') {
//     console.log('Верный ответ');
// }
// else {
//     console.log('Неверный ответ');
// }

// 2 метод

// if (question === '5' || question === 'five') {
//     console.log('Верный ответ');
// } else {
//     console.log('Неверный ответ');
// }

// ========= Task 2

// const userAge = prompt('Сколько вам лет?');

// if (userAge >= 1 && userAge <= 13) {
//     console.log('Посоветуйте ваш любимый мультфильм.');
//   } else if (userAge >= 14 && userAge <= 17) {
//     console.log('Посоветуйте приключенческий фильм.');
//   } else if (userAge >= 18) {
//     console.log('Посоветуйте серьезный фильм.');
//   } 


// ========= Task 3

// 1 method

// const likeDrink = prompt('Какой напиток вам нравиться?');

// if (likeDrink === 'beer' || likeDrink === 'vodka') {
//     console.log('Вредно для здоровья');
//   } else if (likeDrink === 'coffee') {
//     console.log('Кофеин вредно для здоровья');
//   } else if (likeDrink === 'water') {
//     console.log('Поздравляю хороший выбор');
//   } 

// 2 method

// const likeDrink = prompt('Какой напиток вам нравиться?');

//   switch (likeDrink) {
//     case 'beer': 
//     case 'vodka':
//         console.log('Вредно для здоровья');
//         break;
//     case 'coffee':
//         console.log('Кофеин вредно для здоровья');
//         break;
//     case 'water':
//         console.log('Поздравляю хороший выбор');
//         break;
//     default:
//         break;
//   }


// ========= Task 4

// let number = 10; 
// if (number === 11)  { // заменить "=" на "===" для сравнения значений без присваивания
//     alert('Number is 11!');
// } else {
//     alert('Number is 10!');
// }

// ========= Task 5

// 1. (2 < 3) && (3 > 4) || true
//    true && false || true
//    false || true
//    true 
// 2. !true && (!true || 100 != 5 * 5)
//    false && (false || true) 
//    false && true
//    false
// 3. ("123" == 123) || ((10 <= 10) && ('' === false))
//    true ||  (true && false)
//    true || false
//    true


// ========= Task 6

// let isRaining = true;
// let isSunny = true;

// let isRainAndSun = isRaining && isSunny;

// console.log(isRainAndSun)

// ========= Task 7

// let numberAsString = '42';

// let result = parseInt(numberAsString) + 10;

// console.log(result);
 

// ========= Task 8

// const age = 24;

// if (age <= 18) {
//     console.log('Вы младше 18');
// } else {
//     console.log('Вы старше 18');
// }

// ========= Task 9

// const isWeekend = true;
// const hasTimeOff = true;

// if (isWeekend && hasTimeOff) {
//     console.log("У вас есть выходные и вы можете отдохнуть!");
// } else {
//     console.log("У вас нет выходных или времени для отдыха.");
// }


// ========= Task 10

// let password = "MySecretPassword123";

// if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
//     console.log("Пароль допустим");
// } else {
//     console.log("Пароль недопустим");
// }

// ========= Task 11

// const studentGrade = prompt('Ваша оценка?');

// if (studentGrade >= 90) {
//     console.log('Отлично');
// } else if (studentGrade >= 70 && studentGrade <= 90) {
//     console.log('Хорошо');
// } else if (studentGrade < 70) {
//     console.log('Попробуйте еще раз!');
// }

// ========= Task 12

// let currentDate = new Date();
// // console.log(currentDate);
// let targetDate = new Date('2023-09-01');

// if (currentDate >= targetDate) {
//     console.log("Добро пожаловать!");
// } else {
//     console.log("Скоро начнем!");
// }





