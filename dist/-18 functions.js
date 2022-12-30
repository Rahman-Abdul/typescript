function func(a) {
    console.log(a);
}
func("Hello function");
// Optional parameters
function concatValues(a, b) {
    console.log("a + B = ".concat(a + b));
}
concatValues("first", "second");
concatValues("third");
// Default parameters
function concatWithDefault(a, b) {
    if (b === void 0) { b = "default"; }
    console.log("a + b = ".concat(a + b));
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
function testArgument() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i in args) {
        console.log("args[".concat(i, "] = ").concat(args[i]));
    }
}
testArgument(1, 2);
testArgument(10, 20);
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
function myCallback(text) {
    console.log("myCallback called with ".concat(text));
}
function withCallbackArg(message, callbackfn) {
    console.log("withCallback called, message: " + message);
    callbackfn("".concat(message, "  from withcallback"));
}
withCallbackArg("initial text", myCallback);
//withCallbackArg("text", "this is not a function");
