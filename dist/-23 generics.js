function printGenerics(value) {
    console.log("typeof T is : ".concat(typeof value));
    console.log("value is  : ".concat(value));
}
printGenerics(1);
printGenerics("test");
printGenerics(true);
printGenerics(function () { });
printGenerics({ id: 1 });
// Multiple Generics
function usingTwoTypes(first, second) {
}
usingTwoTypes(1, "text");
usingTwoTypes(1, "text");
usingTwoTypes(true, false);
usingTwoTypes("first", "second");
// Constraining the type of T
var Concatenator = /** @class */ (function () {
    function Concatenator() {
    }
    Concatenator.prototype.concatenateArray = function (items) {
        var returnString = "";
        for (var i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    };
    return Concatenator;
}());
var concatenator = new Concatenator();
var concatResult = concatenator.concatenateArray(["first", "second", "third"]);
console.log("concatResult = ".concat(concatResult));
concatResult = concatenator.concatenateArray([100, 2000, 3000]);
console.log("concatResult = ".concat(concatResult));
function useT(item) {
    item.print();
    // item.id = 1;
    //item.name = "test"
}
// Generics Constraints
function printProperty(object, key) {
    var propertyValue = object[key];
    console.log('object[${key}] = ${propertyValue}');
}
var obj11 = {
    id: 1,
    name: "myname",
    print: function () {
        console.log("".concat(this.id));
    }
};
printProperty(obj11, "id");
printProperty(obj11, "name");
var LogClass = /** @class */ (function () {
    function LogClass() {
    }
    LogClass.prototype.logtoConsole = function (iPrintObj) {
        iPrintObj.print();
    };
    return LogClass;
}());
