var objectA = {
    nestedProperty: {
        name: "nestPropertyName"
    }
};
function printNestedObject(obj) {
    console.log("obj,nesteProperty.name ="
        + obj.nestedProperty.name);
}
printNestedObject(objectA);
