let car ={
 
  model:"tesla",
  year:2021,
  color: "red",
  signal:function() {
    alert("fa! fa!");
  }
}
alert(car.signal());


// let salaries = {
//   frontend:12000,
//   backend:10000,
//   designer:8000,
//   dayPay: function(){
//       alert('We mush pay salary on Tuesday!');
// },
//   total(){
//     let sum = 0;
//     for(const key in this) {
//       if (typeof this[key] === 'number') {
//         sum += this[key] 
//     }
      
//     }
//     console.log(sum, 'result')
    
//  }   } 



// function Tehnik(brand , system ,cost){
//   this.brand = brand;
//   this.system = system;
//   this.cost = cost;
//   this[Symbol.toPrimitive] = function (hint) {
//     console.log(hint);  
//     switch (hint) {
//       case 'string':
//         return this.brand
//       case 'number' :
//         return this.cost
//       case 'default' :
//         return `//:"${this.brand}  ${this.system}  ${this.cost}"// `;
//     }
//   }
// }

// let dell = new Tehnik ('Dell', 'windows', 800,);

// let apple = new Tehnik( 'Apple', 'Mac OS', 1700,);
// // let group = {};
// // group =(`//:"${dell.brand} ${dell.system} ${dell.cost}// ${apple.brand} ${apple.system} ${apple.cost}"//`);
// console.log(apple + dell);
// console.log(+apple);
// console.log(String(dell));






