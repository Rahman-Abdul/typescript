var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var array1 = ["hello", 1, true, "null"];
// Spread with arrays
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var thirdArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
console.log("third array = ".concat(thirdArray));
// multiple first array
var numberOne = [1, 23, 6, 9];
var numberTwo = ['hello', 'hi', 'how are you', undefined];
var numerThree = [null, undefined, true, false];
var lastArray = __spreadArray(__spreadArray(__spreadArray([], numberOne, true), numberTwo, true), numerThree, true);
console.log("the last array".concat(lastArray));
// spread oject with array
var objArray1 = [
    {
        id: 1,
        name: "first element"
    }
];
var objArray2 = [
    {
        id: 2,
        name: "second element"
    }
];
var objArray3 = __spreadArray(__spreadArray(__spreadArray([], objArray1, true), [
    {
        id: 3,
        name: "third element"
    }
], false), objArray2, true);
console.log("objArray3 = ".concat(JSON.stringify(objArray3, null, 4)));
