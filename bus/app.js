// 1. Створіть порожній об'єкт user. За допомогою методу 
// Object.defineProperty( obj. Propertuname, descriptor)
// додайте властивості name та age ,
// значення яких доступно тільки для читання 
// (їх не можна змінювати). Додайте властивість id 
// , значення якого не можна змінювати та видаляти.

// let user={};
//  Object.defineProperty(
//   user, "name", {value: "Mark",enumerable: true,},
//  user, "age", {value: 23, enumerable:true}
// ,user ,"id",{writable: false, value: 2344, configurable:false, }
//  )
// console.log(user);

// 2. Зробіть так щоб властивості в обєкті dataBase
//   неможливо було додати, видалити та переписати,
//  а властивості в об'єкті onfigurateDB
//  неможливо було видалити та додати (але можливо переписати).
let dataBase={
  dbName: 'user',
dbType:'MySQL'
}
let configurateDB={
  token:'123',
  passwort:'567',
  user:'admin'
};
Object.defineProperties(dataBase,{writable:false,configurable: false });
Object.seal(configurateDB);

// 3. Існує Обєкт 
// Додайте до цього обєкта Setter, який буде приймати масив строк типу 
// [ посада, заробітнья  плата]
// та привласнювати ці значення відповідним властивостям об'єкта,
//  а якщо такого значення немає,
//  то воно повинно бути додано до об'єкту. Приклад:


// let salaries = {
//   frontend: 2000,
//   backend: 1500,
//   design: 1000,


//   set addSalaries(value) {
//     for (let index = 0; index < salaries.length; index++) {
//       let salary = value[i].split(':');
//       console.log(`post; ${salary[0]} sum:${salary[1]}   `);
//       this[salary[0]] = salary[1];

//     }
//   }
// }

// Object.defineProperty(salaries, 'sum', {
//   get() {
//     let sum = 0;
//     for (salary in this) {
//       sum += this[salary];
//     }
//     console.log(sum);
//   },
//   enumerable: false,

// });





// salaries.addSalaries = ['frontend: 2500', 'backend: 1750',
//   'design: 1300', 'manager: 800']; 
// console.log(salaries);

// 4.В майбутньому існує можливість додавання або 
// видалення властивостей об'єкта. Напишіть get userInfo()
// , який буде повертати всі властивості масиву 
// (незалежно від їх кількості) у вигляді:
// { властивість:Значення,властивість:Значення }





// let user = {
//   name: 'Mike',
//   surname: 'Davis',
//   age: 25}
//   Object.defineProperty(user, "userInfo", {
//     get userInfo() {
//       let sum = 0;
//       for (salary in this) {

//       }
//     }
//   })


// //  console.log( Object.keys(user));