

let arr =[1,2,3,4,5,6,7,8,9,10];
function sum(arr) {
if(arr === 55){
  return arr;
}  else {
  return  sum(arr+1);

}
};
console.log(sum(arr[0]));



let arr =[1,2,3,4,5,6,7,8,9,10];
function sum(arr) {
   return (arr === 55)
  ? arr
 : arr=sum(++arr);

};
console.log(sum(arr[0]));




console.log( deepCount( []                ));     // --> 0
console.log( deepCount( [1 ,2 ,3]         ));    // --> 3
console.log( deepCount( ["x", "z", ["y"]] ));   // --> 4
console.log( deepCount( [1, 2,[3, 4,[5]]] ));  // --> 7
console.log( deepCount( [[[[]]]]          )); // --> 3   


function deepCount(arr) {
    let result =arr.length ;
   for (const elm of arr) {
 if ( Array.isArray(elm)) { 
  result += deepCount(elm) ;

}   

 }

  return result  ;
};


function deepCount( arr )
  {
  let count = arr.length;
  for (const elm of arr) 
    {
    count += Array.isArray(elm) 
    ? deepCount(elm) 
    : 0;
    }
  return count;
  }




let employees = {
  development: {
      backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
      frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
  },
  sales: {
      marketing: {
          internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
          promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
      },
      sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
  },
  designer: [{name: 'Kate', salary: 1800}]
}
// let sum = 0;
function takeSumSallary(){
  let sum = 0;
  return function sumSallary(obj){
      for(let key in obj){
          if (Array.isArray(obj[key])){
            obj[key].forEach(employee => sum += employee.salary);
          } else {
             sumSallary(obj[key]);
          }
      }
       console.log(sum)
      return sum;
  }
}
takeSumSallary()(employees);
let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];

let a = [...arr1, ...arr2, ...arr3];

function getMaxOfArray(numArray) {

    return Math.max.apply(null, numArray);

}
console.log(getMaxOfArray(a));
