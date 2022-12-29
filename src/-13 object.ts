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



// Spread precedence

let obj1: object = {id: 1, name: "cat", town: "owo"};
let obj2: object = {id: 1, name: "hen"};
let obj3: object = {...obj1, ...obj2};

console.log(`secondObj: ${JSON.stringify(obj3)}`);

// Object desctructuring

let complexOBject = {
    aNum: 1,
    bStr: "name",
    cBool: true
}

let {aNum, bStr, cBool} = complexOBject;
console.log(`aNum : ${aNum}`);
console.log(`bstr ; ${bStr}`);
console.log(`cBool : ${cBool}`);

// Change Object Name

let {aNum: objId, bStr: objName, cBool: isValid} = complexOBject;
console.log(`ojId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);







