let tuple1: [string, boolean];
    tuple1 = ["test", true]
    //tuple1 = ["test"]
    console.log(`tuple1 : ${tuple1[0]}`);
    console.log(`tuple1 : ${tuple1[1]}`);

    // Tuple Destructuring

    let [tupleString, tupleBoolean] = tuple1;

    console.log(`tupleString = ${tupleString}`);
    console.log(`tupleBoolean = ${tupleBoolean}`);

    // Optional tuple element

let tupleOptional: [string, Boolean?];
tupleOptional = ["test", false];
tupleOptional = ["test"];
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);

// Tuples and spread syntax

let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string2", "string3", "string4"];


