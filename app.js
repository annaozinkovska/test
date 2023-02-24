// // 1 У нас є код, який приймає математичний
// //  вираз у вигляді рядка 
// // та рахує значення цього виразу
// function count(expression){
//         function getValues(expression){
//             let values = [...expression]
//             return values;   
//         }

//             let values = getValues(expression);
//             switch (values[1]) {
//           case '+': 
//            return  showResult(sum(values));
//           case '-':
//            return  showResult(subtract(values));
//           case '*':
//            return  showResult(multiply(values));
//           case '/':
//            return showResult(divide(values))
//        }
//        function showResult(value){
//            return value
//        }
//     }
//     // Але при введені значення count(5+2)
// // даний код повертає вираз 52. Використовуючи
// //  панель розробника та вкладку Sources 
// //  знайдіть місце, в якому помилка, виправте 
// //  код прямо у вкладці Sources та перевірте результат у вкладці  
// // console
//     function sum(values) {
//         return +values[0] + +values[2];
//     }
//     function subtract(values) {
//         return values[0] - values[2];
//     }
//     function multiply(values) {

//         return values[0] * values[2];
//     }


//     // 2. Використовуючи код із задачі №1 зробіть перевірку
// //  ділення числа на 0. Якщо програма
// //   буде отримувати такий вираз, де число
// //    ділиться на 0, зробіть власну помилку,
// //  використовуючи вбудовану функцію конструктор
// //   Error("Can't divide by 0")
// //   . Виведіть у консоль ім'я об'єкта помилки та повідомлення
// //   "Can't divide by 0"



//     function divide(values) {
//         try{
//             if(values[0] / values[2] === Infinity){
//                 throw new Error('Cant divide by 0')
//             }else {
//                console.log(values[0] / values[2])
//             }
//         }
//         catch(error){
//             console.log(error.name+': '+error.message)
//             console.log(0)
//         } }
//      console.log(count(`7+6`));
//      console.log(count(`7/6`));
//      console.log( count(`7*6`));
//      console.log(count(`7/0`));










// // 3 Існує такий код;


//  function count(expression){
//     function getValues(expression){
//         let values = [...expression]
//         return values;
//     }
//         let values;
//         try{
//             let data = Values(expression); //*
//             data = values
//            if (values[1]=== undefined) {
//             throw new ReferenceError(`Values is not defined`);
//            } 


//         }catch(error){
//            console.log(error.name +': '+error.message) //** 
//            values = [0, '+' ,0];
//         }

//      switch (values[1]) {
//       case '+': 
//        return  showResult(sum(values));
//       case '-':
//        return  showResult(subtract(values));
//       case '*':
//        return  showResult(multiply(values));
//       case '/':
//        return showResult(divide(values))
//    }
//    function showResult(value){
//        return value
//    }
// }

// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     return +values[0] * +values[2];
// }
// function divide(values) {
//    return +values[0] / +values[2]
// }

// count(2+4)

////  У рядку * ми помилилися у виклику функції, але код у рядку ** буде 
//// повертати не вірну помилку (eferenceError: Values is not defined  замість
 //// ReferenceError: Values is not defined), перепишіть код так, щоб він вірно обробляв помилки.


//// 4 

function MakeUsers(name, age) {
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');
function showMovie(user) {
    try {
        if (this.age == undefined) {
            throw new  Error('Скільки вам років не вказанно');
        }

    } catch (error) {
        alert(error.message)

        this.age = prompt(` Ведіть вік повторно`)
        if (this.age >= 18) {
            alert('You can watch this movie');
        } else {
            alert('Sorry, you are too young');
        }


    }
}

showMovie(user)
// Використовуючи конструкцію try catch, зробіть обробку помилки так, 
// щоб користувач міг повторно ввести дані 
// (використайте функції promt() ) та програма заново обробила
//  його вік і вивела коректне повідомлення.
