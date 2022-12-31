// Object containing interface
var idobject = {
    id: 2,
    name: "this is a nme"
};
var optionalId = {
    id: 4
};
var optionalName = {
    id: 4,
    name: "optional name"
};
function printNameOrValue(obj) {
    if ('id' in obj) {
        console.log("obj.name : ".concat(obj.name));
    }
    if ('descr' in obj) {
        console.log("obj.value : ".concat(obj.value));
    }
}
printNameOrValue({ id: 1,
    name: "name value" });
printNameOrValue({ descr: "2",
    value: 2 });
