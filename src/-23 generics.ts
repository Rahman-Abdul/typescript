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
