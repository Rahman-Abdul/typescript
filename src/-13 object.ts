let structureObject: object = {
    name: "nyObjeect",
    properties:{
        id: 1,
        type: "AnObject"
    }
}

function printObjectType(a: object){
    //console.log(`a: ${JSON.stringify(a)});
}

//printObjectType(structureObject)
//printObjectType("this is a string");


// Object Spread

let firstObj: object = {id: 1, name: "firstobj"};
let secondObj: object = {...firstObj};
console.log(`secondObj: ${JSON.stringify(secondObj)}`);

// multiple spread
let namObj: object = {id: 3, name: "rahman"};
let petObj: object = {id: 4, house: "Housing"};
let areaObj: object = {...namObj, ...petObj};

console.log(`secondObj: ${JSON.stringify(areaObj)}`);
