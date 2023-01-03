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

class ClassC {
    print(): void {
        console.log(`ClassC.print() Called. `);

    };
}

let classC = new ClassC();
printClass(classC)

// Class Constructor

class ClassWithConstructor{
    id: number;
    constructor(_id: number){
        this.id = _id
    }
}

let classWithConstructor = new ClassWithConstructor(23);
//

console.log(`classWithCOnstructor = ${JSON.stringify(classWithConstructor)}`);


// Class Modifiers: Public
class ClasswithPublicProperty {
    public id: number | undefined;

}

let publicAccess = new  ClasswithPublicProperty();
publicAccess.id = 20;


// Private Modifiers

/*
class ClasswithPrivateProperty {
    private id: number | undefined;

}

let privateAccess = new  ClasswithPrivateProperty();
privateAccess.id = 20;

*/

class ClassWithConst {
constructor(public id:number, private name: string){

}
}

let myClassconst = new ClassWithConst(1, "test");
console.log(`myclassconst.id = ${myClassconst.id}`);
//console.log(`myClassconst.name = ${myClassconst.name}`);

// Read Only

class ClassWithReadonly {
    readonly name: string;
    constructor(_name: string){
        this.name = _name;
    }
    /*
    setNameValue(_name: string){
        this.name = _name    }
        */
}

class ClassWithAccessors {
    private _id: number;
    get id () {
        console.log('get id property');
        return this.id

    }
    set id(value: number){
        console.log('set id property');
        this._id = value;
    }
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

// static Functions

class StaticFunction {
    static printTwo() {

        console.log('2');

    }
}
 StaticFunction.printTwo();

 // static Properties

 class StaticProperty {
    static count = 0;
    updateCount(){
        StaticProperty.count++;
    }
 }

 let firstinstance = new StaticProperty();
 let secondinstance = new StaticProperty();

firstinstance.updateCount();
console.log(`staticproperty.count = ${StaticProperty.count}`);

secondinstance.updateCount();
console.log(`staticproperty.count = ${StaticProperty.count}`);

// Namespaces

namespace FirstNameSpace {
    export class NameSpaceClass {}
    class NotExported { }
}

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
//let notExported = new FirstNameSpace.NotExported();

// Class Inheritance

interface Ibase {
    id: number;
}

interface IDeriveBase  extends Ibase {
    name: string;
}

class BaseClass implements Ibase {
    id: number = 0;
}

class DeriveFromBaseClass  extends BaseClass implements IDeriveBase {
    name: string = "name string"

}

// Multiple Class Inheritance Interface

interface IFirstInterface {
    id: number;
}

interface ISecondInterface {
    name: string;
}

class MultippleInterfaces implements IFirstInterface, ISecondInterface{
    id: number = 0;
    name: string = "name string"
}



