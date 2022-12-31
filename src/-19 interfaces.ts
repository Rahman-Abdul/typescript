interface IIdName {
    id: number;
    name: string;
}

// Object containing interface

let idobject: IIdName = {
    id: 2,
    name: "this is a nme"
}

// Optional Properties

interface IOptional {
    id: number;
    name?: string;
}

let optionalId: IOptional = {
    id: 4

}

let optionalName: IOptional = {
    id: 4,
    name: "optional name"

}

// Weak types

interface IweakType {
    id?: number;
    name?: string;
}

/*
let weakTypeNoOverlap: IweakType = {
    description: "a description";
}
*/

// The in operator

interface IIdName {
    id: number;
    name: string;
}

interface IDescrValue {
    descr: string;
    value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {

    if ( 'id' in obj){
        console.log(`obj.name : ${obj.name}`);

    }

    if ('descr' in obj) {
        console.log(`obj.value : ${obj.value}`);

    }
}

printNameOrValue({id: 1,
name: "name value"});

printNameOrValue({descr: "2",
    value: 2});

    interface IPerson {
        id: number;
        name: string;
    }

type personPropertyName = keyof IPerson;

type personPropertyLiteral = "id" | "name";

function getProperty(key: personPropertyName, value: IPerson){
    console.log(`${key} = ${value[key]}`);

}

getProperty("id",{
    id:1, name: "first name"
});

getProperty("name",{
    id:2, name: "second name"
});

/* getProperty("telephone",{
    id:1, name: "first name"
});
*/
