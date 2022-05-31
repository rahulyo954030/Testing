// function sum(a,b) {  
//     if(typeof a === "string" && typeof b === 'string' ){
//         return ;
//     }
//      return a+b;
// }
// function multiply(a, b) {
//     return a * b;
// }


// Password Validator
// min 8 character
// at least 1 small case
// at least 1 capital case
// at least 1 number

// TDD = Test Driven Developement
/**
 * 
 * @param {string} pass 
 * @returns  boolean
 */
const validate= (pass) => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercase = lowercase.map((e) => e.toUpperCase());
    const digits= "1234567890".split("")

    let flag = true;
    if(pass.length < 8 ){
        return {
            status: false,
            message: "min 8 char required"
    }
    if(!pass.split("").every((c) => lowercase.incliudes(c))){
        return {
            status: false,
            message: "at least 1 char"
        }
        
    }
    if(!pass.split("").every((c) => uppercase.incliudes(c))){
        flag = false;
    }
    if(!pass.split("").every((c) => digits.incliudes(c))){
        flag = false;
    }

    return flag;
    
}
module.exports = validate

// module.exports = {sum, multiply, validator}