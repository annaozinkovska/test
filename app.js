
// const mixin = {
//     getPrice() { return this.price },
//     getVAL() {return 'wrong options'},
//     getSingleTax () {return 'wrong options'},
//     getExciseduty () {return 'wrong options'},
// }

// class Cola {
//     constructor(brend, price) {
//         this.brend = brend;
//         this.price = price;
//     }
// }
// class Whiskey {
//     constructor(brend, price) {
//         this.brend = brend;
//         this.price = price;
//     }
// }
// class Ice {
//     constructor(price) {
//         this.price = price;
//     }
// }
// Object.assign(Whiskey.prototype , mixin)
// Whiskey.prototype.getExciseDuty = function() {return this.withVAT = (this.price + this.price * 0.3) + 10}
// Object.assign(Cola.prototype , mixin)
// Cola.prototype.getVAL  = function() {return this.withVAT = this.price + this.price * 0.2  }
// Object.assign(Ice.prototype , mixin)
// Ice.prototype.getSingleTax  = function() {return this.withVAT = this.price + 1}
// const wit = new Whiskey ('jack', 1500 )
// const colafree = new Cola ( 'free', 10) 
// const ices =new Ice (1)
// console.log(wit.getExciseDuty() ); 
// console.log(ices.getSingleTax());
// console.log( colafree.getVAL());

    // const list= document.querySelector('.shop-list')
    // const li = list.getElementsByTagName('li');
    // let array = []
    // for (const key in li) {
    //     if (typeof li[key].innerText == 'string') {
    //         array.push(li[key].innerText);
    //     }
    // }
    // console.log(new Set(array));


    let mike = {name:'Mike', age: 18}
    let bob = {name:'Bob', age: 25}
    let nikola = {name:'Nikola', age: 32}
// let userVisits = new Map()

const userVisits = new Map();

function mikeVisit() {
    let count =1;
    return function () {
        userVisits.set(mike, count);
    return count++;
    };
}

    function bobVisit() {
        let count = 1;
            return function () {
                userVisits.set(bob, count);
            return count++;
        }}
        function nikolaVisit() {
            let count = 1;
                return function () {
                    userVisits.set(nikola, count);
                return count++;
            }}

            const bobVisits = bobVisit();
             const nikolaVisits= nikolaVisit()
             const mikeVisits = mikeVisit();
let ul = document.querySelector('ul')
let buttonm= document.createElement('button')
let buttonb= document.createElement('button')
let buttonn= document.createElement('button')
buttonm.innerHTML= 'MIKE';
buttonb.innerHTML= 'BOB';
buttonn.innerHTML= 'NIKOLA';
ul.append(buttonb)
ul.append(buttonm)
ul.append(buttonn)
buttonb.onclick = function() {
    bobVisits(bob);
   
    console.log(userVisits.get(bob));//3
  };
  buttonm.onclick = function() {
   mikeVisits(mike);
   console.log(userVisits.get(mike));
  };
  buttonn.onclick = function() {
     nikolaVisits(nikola);
         console.log(userVisits.get(nikola));//3
   
  };


