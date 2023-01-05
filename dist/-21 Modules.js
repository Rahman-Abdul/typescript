"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModule = exports.Module1 = void 0;
var Module1 = /** @class */ (function () {
    function Module1() {
    }
    Module1.prototype.print = function () {
        console.log("Module.print() called");
    };
    return Module1;
}());
exports.Module1 = Module1;
function localPrint(text) {
    console.log("localPrint : ".concat(text));
}
var MyModule = /** @class */ (function () {
    function MyModule() {
    }
    MyModule.prototype.print = function () {
        console.log("MyModule.print() callled");
    };
    return MyModule;
}());
exports.MyModule = MyModule;
function myLocalPrint(name) {
    console.log("myLocal.print : ".concat(name));
}
