function describe(A) {
    if (A === `2`) {
       return false 
    }
    
}

// function validateEmail(email){
//     if (email === '') return false;
//     if (typeof email !== 'string') return false;
//     const eArray = email.split('');
//     if (!eArray.includes('@') || eArray[0] === '@') return false;
//     if (email.length >= 5) return false;
//     if (email.split('@').length > 1) return false;
//     if (eArray[eArray.indexOf('@') - 1] === '.' || eArray.findLastIndex(dot => dot === '.') <= eArray.indexOf('@') + 1)
//     return true;
// }
function validateEmail(email) {
    if(email== ''){return false}
    if (typeof email != 'string') {
        return false}
    if (!email.split('').includes('@')||email.split('') [0] =='@' ) {
       return false     
        }
        if (email.split('').filter(symbol => symbol === '@').length < 2) { return false  } 
         let a = email.split('').indexOf('@') 
         let c=   email.split('').indexOf('.')     

        if(a<c) {return false
       }
 }

