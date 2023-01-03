var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.id = ".concat(this.id));
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
function printClass(a) {
    a.print();
}
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log("ClassA.print called");
    };
    ;
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log("ClassB.print() called");
    };
    ;
    return ClassB;
}());
var classA = new ClassA();
var classB = new ClassB();
printClass(classA);
printClass(classB);
var ClassC = /** @class */ (function () {
    function ClassC() {
    }
    ClassC.prototype.print = function () {
        console.log("ClassC.print() Called. ");
    };
    ;
    return ClassC;
}());
var classC = new ClassC();
printClass(classC);
// Class Constructor
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id) {
        this.id = _id;
    }
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(23);
//
console.log("classWithCOnstructor = ".concat(JSON.stringify(classWithConstructor)));
// Class Modifiers: Public
var ClasswithPublicProperty = /** @class */ (function () {
    function ClasswithPublicProperty() {
    }
    return ClasswithPublicProperty;
}());
var publicAccess = new ClasswithPublicProperty();
publicAccess.id = 20;
// Private Modifiers
/*
class ClasswithPrivateProperty {
    private id: number | undefined;

}

let privateAccess = new  ClasswithPrivateProperty();
privateAccess.id = 20;

*/
var ClassWithConst = /** @class */ (function () {
    function ClassWithConst(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassWithConst;
}());
var myClassconst = new ClassWithConst(1, "test");
console.log("myclassconst.id = ".concat(myClassconst.id));
//console.log(`myClassconst.name = ${myClassconst.name}`);
// Read Only
var ClassWithReadonly = /** @class */ (function () {
    function ClassWithReadonly(_name) {
        this.name = _name;
    }
    return ClassWithReadonly;
}());
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log('get id property');
            return this.id;
        },
        set: function (value) {
            console.log('set id property');
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log("classWithAccessors.id = ".concat(classWithAccessors.id));
// static Functions
var StaticFunction = /** @class */ (function () {
    function StaticFunction() {
    }
    StaticFunction.printTwo = function () {
        console.log('2');
    };
    return StaticFunction;
}());
StaticFunction.printTwo();
// static Properties
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
var firstinstance = new StaticProperty();
var secondinstance = new StaticProperty();
firstinstance.updateCount();
console.log("staticproperty.count = ".concat(StaticProperty.count));
secondinstance.updateCount();
console.log("staticproperty.count = ".concat(StaticProperty.count));
// Namespaces
var FirstNameSpace;
(function (FirstNameSpace) {
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
})(FirstNameSpace || (FirstNameSpace = {}));
var nameSpaceClass = new FirstNameSpace.NameSpaceClass();
//let notExported = new FirstNameSpace.NotExported();
