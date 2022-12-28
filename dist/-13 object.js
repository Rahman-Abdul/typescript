var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var structureObject = {
    name: "nyObjeect",
    properties: {
        id: 1,
        type: "AnObject"
    }
};
function printObjectType(a) {
    //console.log(`a: ${JSON.stringify(a)});
}
//printObjectType(structureObject)
//printObjectType("this is a string");
// Object Spread
var firstObj = { id: 1, name: "firstobj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj: ".concat(JSON.stringify(secondObj)));
// multiple spread
var namObj = { id: 3, name: "rahman" };
var petObj = { id: 4, house: "Housing" };
var areaObj = __assign(__assign({}, namObj), petObj);
console.log("secondObj: ".concat(JSON.stringify(areaObj)));
