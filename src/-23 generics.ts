function printGenerics<T>(value: T) {

console.log(`typeof T is : ${typeof value}`);
console.log(`value is  : ${value}`);

}

printGenerics(1);
printGenerics("test");
printGenerics(true);
printGenerics(()=>{});
printGenerics({id: 1});

// Multiple Generics

function usingTwoTypes <A, B> (first: A, second: B){

}

usingTwoTypes<number, string>(1, "text");
usingTwoTypes(1, "text");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");

// Constraining the type of T

class Concatenator<T extends Array<string> | Array<number>>{
    public concatenateArray(items: T): string {
        let returnString = "";
        for (let i = 0; i < items.length; i++){
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }
}

let concatenator = new Concatenator();
let concatResult = concatenator.concatenateArray(["first", "second", "third"])
console.log(`concatResult = ${concatResult}`);
concatResult = concatenator.concatenateArray([100, 2000, 3000]);
console.log(`concatResult = ${concatResult}`);
// note this does not accept boolean
//concatResult = concatenator.concatenateArray([true, true, true]);


// Using the type T

interface IPrintId {
    id: number;
    print(): void;
}
interface IPrintName {
    name: string;
    print(); void;
}

function useT <T extends IPrintId | IPrintName> (item: T): void {
    item.print();
   // item.id = 1;
    //item.name = "test"

}

// Generics Constraints

function printProperty<T, K extends keyof T> (object: T, key: K){
    let propertyValue = object[key];
    console.log('object[${key}] = ${propertyValue}');

}

let obj11  = {
    id: 1,
    name: "myname",
    print(){console.log(`${this.id}`);
    }
}

printProperty(obj11, "id");
printProperty(obj11, "name");

