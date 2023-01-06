function printGenerics(value) {
    console.log("typeof T is : ".concat(typeof value));
    console.log("value is  : ".concat(value));
}
printGenerics(1);
printGenerics("test");
printGenerics(true);
printGenerics(function () { });
printGenerics({ id: 1 });
