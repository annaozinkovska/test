

// 1. Створіть клас User, в якому зробіть захищену властивість name і публічні властивосі login та
// age . Завдяки класу створіть 2 об'єкти  user1 user2
// Виведіть у консоль властивості цих користувачів:
// class User {
//   constructor(name, login, age){
//     this.name=name;
//     this.login=login;
//     this.age=age;
//   }
// }
// let user1= new User ('Mike','MK_18' ,18 )
// let user2= new User ('','NRG' ,22 )
// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

// // 2 Створіть  У класі User методи getName(isAdmin) ,
// //  який повертає ім'я користувача або його нік,
// //  якщо ім'я не вказано, або відмовляє у доступі, якщо аргумент isAdmim==false


// class User {
//   constructor(name, login, age) {
//     this.name = name;
//     this.login = login;
//     this.age = age;
//   }
//   getName(isAdmin) {


//     if (this.name == "" || this.login == "") {
//       console.log('Permission denied');
//       return isAdmin == false;
//     }

//     else {
//       console.log(`${this.name} ${this.login}`);
//       return isAdmin == true;
//     }
//   }


// //  3 Створіть  У класі User метод ChangeName  , 
// // який змінює ім'я користувача. Змінна повинна бути
// //  підтверджена введенням паролю`123` 
// // . Якщо пароль збігається, то ім'я змінюється, а якщо ні,
// //  то виводиться попередження Permission denied.
// //  Після зміни імені програма повинна виводити таке повідомлення:
// // Name Changed from Mike to Bill 


//   ChangeName(pass, namechange ) {
//     let roks = this.name;
//       if (pass == `123`) {

//         this.name = namechange;
//          console.log(pass, this.name);
//          return console.log(`Name Changed from ${roks} to ${this.name} `);


//       } else {
//         console.log(`Permission denied `);
//       }
//     }

//   }
// ;


// // 4 Зробіть клас  Admin, розширюючи його класом User.
// //  Клас Admin повинен приймати всі властивості name login age 
// //  , від класу User, а також мати власну приватну властивість isAdmin==true
// //  . Зробіть у цьому класі метод getUserName(User) , 
// //  який буде приймати користувача та виводити його ім'я. Приклад:

// class Admin extends User{
//    #isAdmin;
//   constructor (name,login , age, isAdmin){
//     super(name, login , age);
//     this.#isAdmin = true
//   }
//   getUserName() {
//  return this.name; 
//   }
// };  

// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG',``, 22);
// let user3 = new Admin('NRG', 'DVDF', ``, 22);
// user1.getName(true);
// user2.getName();
// user2.Admin();
// user2.ChangeName(123,'MK_18' )
// console.log( user3.getUserName);

//  console.log(user2.getUserName());
// console.log(); user1.getUserName();



// 5 Створіть  новий класс User, 
// , який буде приймати публічну властивість name та приватну властивість phone. 
// Властивість phone завжди буде мати такий формат '067-888-88-99'.
//  Створіть метод getPhone(isAdmin).
//  Якщо аргумент isAdmin повертає true,
//  то номер виводиться повністю, а якщо false, 
// то виводиться частково прихований номер. Приклад:

class User {
    #passwort
    constructor(name, passwort) {
      this.name = name;
      this.#passwort = passwort;
  
    }
  
    getPhon( ) {
  
      let arr = this.#passwort.split('');
      
    //   console.log(arr);
      if (arr.length === 10) {
        let ro = "-";
        arr.splice(3, 0, ro);
        arr.splice(7, 0, ro);
        arr.splice(10, 0, ro);
        // console.log(arr.join(""));
      }
      else {
        console.log('Ведите правильный номер ');
      }
      for (let key in arr) {
  
        if (key >= 4 && key <= 9)
          arr[key] = ("*");
        let to = arr[key];
      }
  
      console.log(arr.join(""));
  
    }
    getPhone(isAdmin) {
          return isAdmin
            ? this.#passwort
            : this.getPhon()
        }
  };

  const users = new User("anna", "0932049217");
// users.getPhon();
let user5 = new User("anna","0932049217")  
 console.log( users.getPhone(true));
 console.log( users.getPhone(false));