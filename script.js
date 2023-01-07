
// let a = prompt( "Enter first number");
// let b = prompt( "Enter second number");
// function maxNumber(a, b) {
// if (+a > +b) {
//     show = function () {
//        alert(+a)

//     }
// }
//  if  (+a < +b) {
//   show = function () {
//      alert(+b)

//   }
// }
// if (a === b) {
//   show = function () {
//      alert(`${a} = ${b}`)
//   }

//     }}
// maxNumber(a, b);
// show();


// let number = prompt( "Enter  number");
//  function  revers  (number) {
//   if (number>0 ) {
//     number = ( `${0-number}`);
//     alert(number)}
//  else (number<0 )
//  { number =  (`${number*-1}`);
//     alert(number) 
//     }}
//  revers(number);
//  let number = prompt(`Введіть число яке множити на три `);
//  let count = prompt(` Скільки разів множити на три `);

// function tree (number,count) {
// count= number**3;
//     alert(`Ваше число ${number} у третій степені ${count}`);
// }
// tree(number, count);






let km = prompt('Ведіть кілометри?');
let metrik = prompt('Ведіть в  яку одиницю виміру переводити километри в СМ чи М?');
let m =1000;
let cm =100000;

function getMetric(metrik,km,m,cm) {
    if (metrik =='m') {
         KmToM =(km)=>km*m;
         return metrik = KmToM(km)}
    else if (metrik =='cm') { 
         KmToCm =(km)=>km*cm; 
        return metrik = KmToCm(km)}
};

alert(getMetric(metrik,km,m,cm));


