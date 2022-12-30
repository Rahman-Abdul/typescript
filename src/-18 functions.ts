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

// Callback

/*
var myCallback = function (text){
    console.log("myCallback called with:" + text);

}

function withCallbackArg(message, callbackfn){
    console.log("withCallback called, message: " + message);
    callbackfn(message + "from withcallback");

}

withCallbackArg("initial text", myCallback)

withCallbackArg("text", "this is not a function");
*/

// Function signatures as parameters

function myCallback(text: string): void{
    console.log(`myCallback called with ${text}`);

}

function withCallbackArg(message: string, callbackfn: (text: string) => void){
    console.log("withCallback called, message: " + message);
    callbackfn(`${message}  from withcallback`);

}

withCallbackArg("initial text", myCallback)

//withCallbackArg("text", "this is not a function");
