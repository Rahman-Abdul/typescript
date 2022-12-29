function func (a: string){
    console.log(a);

}
func("Hello function");

// Optional parameters

function concatValues(a: string, b?: string){
    console.log(`a + B = ${a + b}`);

}

concatValues("first", "second");
concatValues("third");

// Default parameters

function concatWithDefault(a:string, b: string = "default") {
    console.log(`a + b = ${a + b}`);


}

concatWithDefault("first", "second");
concatWithDefault("third");

//Rest parameters
/*
function testArgument(){
    for (var i = 0; i < arguments.length; i++){
        console.log("argument[" + i + "] =" + arguments[i]);

    }
}
*/
//testArgument(1, 2);

//testArgument("first", "second", "third");

function testArgument(...args: string[] | number[]){
    for (let i in args){
        console.log(`args[${i}] = ${args[i]}`);

    }
}
testArgument(1, 2)
testArgument(10, 20)
