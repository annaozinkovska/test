


// // Урок 26  Спадкування  

// //Існує два об'єкта
// // 1
// //Зробіть так . Щоб об'єкт споркар успадкував властивості від об'єкту машина 
// //Зробіть  об'єкт пасажир кар . який буде мати властивість дорс та успадкуе від каар 
// //Зробіть  об'єкт іграшкова машина . який буде мати властивість тип та успадкуе властивості від спорт кар та каар 



// let car ={
//   type:"electric",
//   wheels:4,

// };

// let sportCar ={
//   doors:2

// };
// Object.setPrototypeOf(sportCar, car );
// // console.log(car.type);
// let passengerCar= {
//   doors :4
// };
// Object.setPrototypeOf(passengerCar ,car);

//     let toyCar= {
//       type :"toy",
//       // вивід всіх ключів в іграшковій машині для перевірки  
// reVerification(){
//   for ( key in this){
//     console.log(key );
// }
// },
//     };
// Object.setPrototypeOf(toyCar, car);
// Object.setPrototypeOf( toyCar, sportCar);
// toyCar.reVerification();



// // 2

// // Існує такий код 
// // Зараз про наразуванні заробітньої плати 
// // одному працівнику .вона поповнюеться й у 
// // іншого .Виправте код таким чином .
// //  щоб заробітня плата нараховувалась окремо для кожного працівника.
// let employees = {
//   wallet: {},
//   pay(munth, sum){
//       this.wallet[munth] = sum;
//   }
// }

// let frontendDeveloper = {
//   name: 'Mike',
// }
// Object.setPrototypeOf(frontendDeveloper,employees)
// frontendDeveloper.wallet = {}

// let backendDeveloper = {
//   name: 'Bob'
// }
// Object.setPrototypeOf(backendDeveloper,employees);
// backendDeveloper.pay('june',1500);
// frontendDeveloper.pay('june',1700)

// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);




// // 3 У вас є такий код
// // Використовуючи об'єкт юзер1
// //  створіть нового користувача
// //  юзер2 який буде мати ім'я боб та вік 25 

//  function User(name, age) {
//   this.name= name;
//   this.age=age;


// }

//  let user_1 = new User ('mike', 18);
//  user_1.constructor === User;
//  let user_2= new user_1.constructor('bob', 25)
//  console.log(user_2);


// 4 Існує Функція конструктор , яка створюе
//  псевдо-масив (об'єкт , схожий на масив ) 
function UserType(name) {
  for (let i = 0; i < name.length; ++i) {
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty( this , 'length', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1

      });
    }

  }
}

// // // Зробіть так щоб ця Функція встановлювала
// // //  об'єктам в якості прототипу позичений метод ....
// // // Ви повинні отримати такий результат
let admins = new UserType([ 'Mike', 'Bob', 'Nikola']);
  admins.join = Array.prototype.join;
console.log(admins.join(`; `) )
