function printGenerics<T>(value: T) {

console.log(`typeof T is : ${typeof value}`);
console.log(`value is  : ${value}`);

}

printGenerics(1);
printGenerics("test");
printGenerics(true);
printGenerics(()=>{});
printGenerics({id: 1});


