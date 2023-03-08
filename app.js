1// console.log(document.querySelector('h2').nextElementSibling.textContent='DOM method description' )




     
2
// const a = document.querySelectorAll('a')
// console.log(a);
// for(const element of a){
//      if(element.matches('a[href*="site.ua/ua/"]')){
//         console.log(element)
//      }
//  }




3
// let list = document.querySelector('ul');
// let li = document.createElement('li');

// let li0 = document.createElement('li');
// li0.setAttribute('id','null')
// li0.innerHTML = 0;
// list.prepend(li0);
// let li4 = document.createElement('li');
// li4.setAttribute('id','FOURth')
// li4.innerHTML = 4;
// list.append(li4);
// let li2 = document.createElement('li');
// li2.setAttribute('id','Second')
// li2.innerHTML = 2;
// list.insertBefore( li2, list.children[2])


4
const h1 = document.querySelectorAll('h1')
let a = document.createElement('a');
a.setAttribute('href','https://dom.spec.whatwg.org/');
a.setAttribute('id','link');
a.appendChild(document.querySelector('h1'));
document.body.appendChild(a);
