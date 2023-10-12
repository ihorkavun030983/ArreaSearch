
const myArrey = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] ;

let maxNumber = (a, b) => {
    return a > b ? a : b;
    
},
    minNumber = (a, b) => {
        return a < b ? a : b
    };

console.log(myArrey.reduce(minNumber));
const minNumIndex = myArrey.findIndex(minNumber)
console.log(minNumIndex)

console.log(myArrey.reduce(maxNumber))
const maxNumIndex = myArrey.findIndex(maxNumber)
console.log(maxNumIndex)

