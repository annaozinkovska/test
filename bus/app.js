



// // class User {
// //   constructor(name, login, age){
// //     this.name=name;
// //     this.login=login;
// //     this.age=age;
// //   }
// // }
// // let user1= new User ('Mike','MK_18' ,18 )
// // let user2= new User ('','NRG' ,22 )
// // console.log(user1.login);
// // console.log(user1.age);
// // console.log(user2.login);
// // console.log(user2.age);


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
//   ChangeName(pass, namechange ) {
//     // let pass = prompt("ведите пароль ");
//     let roks = this.name;
//       if (pass == `123`) {
//         // let namechange = prompt("ведыть нове ымья користувача");

//         this.name = namechange;
//          console.log(pass, this.name);
//          return console.log(`Name Changed from ${roks} to ${this.name} `);


//       } else {
//         console.log(`Permission denied `);
//       }
//     }

//   }
// ;

// class Admin extends User{
//    #isAdmin;
//   constructor (name,login , age, isAdmin){
//     super(name, login , age);
//     this.#isAdmin = true
//   }
//   getUserName() {
//   //  let name= this.name;
//  return this.name; 
//   }
// };  

// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG',``, 22);
// let user3 = new Admin('NRG', 'DVDF', ``, 22);
// user1.getName(true);
// user2.getName();
//user2.Admin();
//user2.ChangeName(123,'MK_18' )
// console.log( user3.getUserName);

//  console.log(user2.getUserName());
// console.log(); user1.getUserName());




// class User {
//   #passwort
//   constructor(name, passwort) {
//     this.name = name;
//     this.#passwort = passwort;

//   }
//   getPhone(isAdmin) {
//     return isAdmin
//       ? this.#passwort.join
//       : this.getPhon()
//   }
//   getPhon(arr) {

//     let arr = this.#passwort.split('');
//     // arr.split('');
//     // console.log(arr);
//     if (arr.length === 10) {
//       let ro = "-";
//       arr.splice(3, 0, ro);
//       arr.splice(7, 0, ro);
//       arr.splice(10, 0, ro);
//       // console.log(arr.join(""));
//     }
//     else {
//       console.log('Ведите правильный номер ');
//     }
//     for (let key in arr) {

//       if (key >= 4 && key <= 9)
//         arr[key] = ("*");
//       let to = arr[key];
//     }

//     console.log(arr.join(""));

//   }
// };


// const users = new User("anna", "0932049217");
// users.getPhon();
// let user5 = new User("anna","0932049217")  








// let user={};
//  Object.defineProperty(
//   user, "name", {value: "Mark",enumerable: true,},
//  user, "age", {value: 23, enumerable:true}
// ,user ,"id",{writable: false, value: 2344, configurable:false, }
//  )
// console.log(user);


// let dataBase={
//   dbName: 'user',
// dbType:'MySQL'
// }
// let configurateDB={
//   token:'123',
//   passwort:'567',
//   user:'admin'
// };
// Object.defineProperties(dataBase,{writable:false,configurable: false });
// Object.seal(configurateDB);

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