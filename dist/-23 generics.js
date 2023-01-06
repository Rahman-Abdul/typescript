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
