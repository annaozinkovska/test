// // async function data(url) {
    
// //     let result =  await fetch(url)
// //      let jsona =await result.json()
// // for (const key in jsona) {
// //     if (jsona[key].isAdmin=== true) {
// //       console.log(jsona[key]);
        
// //     }
// // }
// // }
// // data(`./data.json`)



// let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
// let bob = {firstName: 'Bob'};
// let mike = {lastName: 'Smith'};
// let michael= {};
// let getFullName = function (user) {
//      return user.firstName + user.lastName}
     
// getFullName = new Proxy( getFullName, {
//     apply(target, thisArg, args) {
//         if (args[0].firstName=== undefined ) {
//             console.log(`undefined `+ ' '+args[0].lastName);
//         }
//         else if (args[0].lastName ===undefined) {
//             console.log(args[0].firstName +' ' + 'undefined');
         
//         }
//         else if (args[0].lastName ===undefined ||args[0].firstName=== undefined  ) {
//             console.log(  'undefined' +' '+ 'undefined');
         
//         }
//         else {
//             console.log(args[0].lastName , args[0].firstName);
//         }
//        }

// })
// // console.log(getFullName(bob))//Bob undefined
// //      console.log(getFullName(mike))//undefined Smith
// //      console.log(getFullName(michael))//undefined undefined
// //      console.log(getFullName(nikola))






// const users = [
//     {name: 'Nikola', age:18, isAdmin:true},
//     {name: 'Bob', age:25, isAdmin:false},
//     {name: 'Mike', age:32, isAdmin:false},
//     {firstName: 'Nikolaeefd',  age: 34 ,lastName: 'Tesla'},
// ]
// localStorage.setItem(users[0].name, JSON.stringify(users[0]));
// localStorage.setItem(users[1].name, JSON.stringify(users[1]));
// localStorage.setItem(users[2].name, JSON.stringify(users[2]));
// localStorage.setItem(users[3].firstName, JSON.stringify(users[3]))

// function sayHelloToUser(id) {
//     console.log('Hello ' + localStorage.key(id-1));
// }

// sayHelloToUser(1);
// sayHelloToUser(2);
// sayHelloToUser(3);
// sayHelloToUser(4);



function showValue() { 
    console.dir(document.querySelector('input').value);
}
const btn = document.querySelector('button');
btn.addEventListener('click',showValue);
document.querySelector('input').value = getValue("input");
function getValue(key) {
  if (localStorage.getItem(key) === null) {
    return "";
  }
  return localStorage.getItem(key);
}

let cookieShow = showValue;
document.cookie = `${cookieShow}=${JSON.stringify(showValue)}; path=/; expires=Tue, 15 Jan 2030 06:00:00 GMT`;



