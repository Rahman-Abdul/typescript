let array1 = ["hello", 1, true, "null"];

// Spread with arrays

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let thirdArray = [...firstArray, ...secondArray]

console.log(`third array = ${thirdArray}`);


// multiple first array

let numberOne = [1, 23, 6, 9];
let numberTwo = ['hello', 'hi', 'how are you', undefined];
let numerThree = [null, undefined, true, false];
let lastArray = [...numberOne, ...numberTwo, ...numerThree]


console.log(`the last array${lastArray}`);




// spread oject with array

let objArray1 = [
    {
        id: 1,
        name: "first element"
    }
]

let objArray2 = [
    {
        id: 2,
        name: "second element"
    }
]

let objArray3 = [
    ...objArray1,
    {
        id: 3,
        name: "third element"
    },
    ...objArray2
]

console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);

