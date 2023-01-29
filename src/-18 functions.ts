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

// Function Overides

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any){
    return a + b;
}
add("first", "second");
add(1, 2);
//add(true, false);


//Literals

type Allowedstringvalues = "one" | "two" | "three";
type Allowednumbervalues = 1 | 20 | 3676;

function withliterals(input: Allowedstringvalues | Allowednumbervalues){
    console.log(`callled with ${input}`);
}


withliterals("one");
withliterals("three");
withliterals(3676);


//withliterals("four");
//withliterals(2);

type Allowedstringvalue = "one" | "two" | "three";
type Allowednumbervalue = 1 | 20 | 3676;

function withliterall(input: Allowedstringvalues | Allowednumbervalues){
    console.log(`callled with ${input}`);
}


withliterall("one");
withliterall("three");
withliterall(3676);



function myPersonlName(output: Allowednumbervalues | Allowedstringvalues){
    console.log(`called with ${output}`)
}

myPersonlName("one");
