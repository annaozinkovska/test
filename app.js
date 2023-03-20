
// function getData (url){
//     let result = fetch(url);
//     result.then(response => 
//         {
//             if(response.ok){
//             	return response.json();
//             }
//            throw new Error(`Error: ${response.status}`);
//         })
//     .then(data =>{ console.log(data.filter( title => title.title[0] === 'a'))
//     })
//     .catch((error) => console.log(error.message));
// }

// getData('https://jsonplaceholder.typicode.com/todos');


// async function getData(url){
//     try{
//         let result = await fetch(url);
//         if(result.ok){
//             let response= await result.json()
//             console.log(response.filter( title => title.title[0] === 'a'))
        
//         } else {
//             throw new Error(`Error: ${result.status}`);
//         }
//     } catch(error){
//         console.log(error.message)
//     }
// }
// getData('https://jsonplaceholder.typicode.com/todos');



// async function getData(url){
//         try{
//             let result = await fetch(url);
//             if(result.ok){
//                 let response= await result.json()
//                 for (const key in response) {
//                    let res =  response.filter( title => title.title[0] === 'a')
//             let a = document.querySelector('.user-a')
//                     let span= document.createElement('span')
//                     span.innerHTML =res
//                     a.append(span);
//                     getData()

//                 } }
//             else {
//                 throw new Error(`Error: ${result.status}`);
//             }
//         } catch(error){
//             console.log(error.message)
//         }
//     }
//     getData('https://jsonplaceholder.typicode.com/todos');
    

async function getData(url) { 
        try {
            let result = await fetch(url);
            if (result.ok) {
                let response = await result.json();
                let A = response.filter(title => title.title[0] === 'a');
                let AB = response.filter(title => title.title[0] + title.title[1] === 'ab');
                
                A.forEach( e => {
                    let p = document.createElement('p');
                    p.innerHTML = JSON.stringify(e);
                    usera.append(p);
    
                });
                AB.forEach(e => {
                    let p = document.createElement('p');
                    p.innerHTML = JSON.stringify(e);
                    userab.append(p);
    
                });
            } 
        } catch (Error) {
            console.log(e.message);
        }
    }

    
    let btna = document.querySelector('.add-a');
    let btnb = document.querySelector('.add-ab');
    let btnall = document.querySelector('.add-all');
    let usera = document.querySelector('.user-a');
    let userab = document.querySelector('.user-ab');
btna.onclick = function(){
    usera.style.display='contents';
}
btnb.onclick = function(){
    userab.style.display='contents';
}
btnall.onclick = function(){
    userab.style.display='contents';
    usera.style.display='contents';
}


    
    getData('https://jsonplaceholder.typicode.com/todos');
    
        
     
