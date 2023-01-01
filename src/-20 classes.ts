class SimpleClass {
    id: number | undefined;
    print(): void{
        console.log(`SimpleClass.id = ${this.id}`);

    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print()

// Implementing Interface
interface Iprint {
    print(): void;
}

function printClass(a: Iprint){
    a.print()
}
class ClassA implements Iprint {
    print(): void {
        console.log(`ClassA.print called`);

    };
}

class ClassB implements Iprint {
    print(): void {
        console.log(`ClassB.print() called`);

    };
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);
