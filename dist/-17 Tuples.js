var tuple1;
tuple1 = ["test", true];
//tuple1 = ["test"]
console.log("tuple1 : ".concat(tuple1[0]));
console.log("tuple1 : ".concat(tuple1[1]));
// Tuple Destructuring
var tupleString = tuple1[0], tupleBoolean = tuple1[1];
console.log("tupleString = ".concat(tupleString));
console.log("tupleBoolean = ".concat(tupleBoolean));
// Optional tuple element
var tupleOptional;
tupleOptional = ["test", false];
tupleOptional = ["test"];
console.log("tupleOptional[0] : ".concat(tupleOptional[0]));
console.log("tupleOptional[1] : ".concat(tupleOptional[1]));
// Tuples and spread syntax
var tupleRest;
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string2", "string3", "string4"];
