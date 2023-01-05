var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        this.id = 0;
    }
    return BaseClass;
}());
var DeriveFromBaseClass = /** @class */ (function (_super) {
    __extends(DeriveFromBaseClass, _super);
    function DeriveFromBaseClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "name string";
        return _this;
    }
    return DeriveFromBaseClass;
}(BaseClass));
var MultippleInterfaces = /** @class */ (function () {
    function MultippleInterfaces() {
        this.id = 0;
        this.name = "name string";
    }
    return MultippleInterfaces;
}());
// Super Funtion
var BaseClassWithctor = /** @class */ (function () {
    function BaseClassWithctor(id) {
        this.id = id;
    }
    return BaseClassWithctor;
}());
var DerivedClassWithCtor = /** @class */ (function (_super) {
    __extends(DerivedClassWithCtor, _super);
    function DerivedClassWithCtor(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    return DerivedClassWithCtor;
}(BaseClassWithctor));
// Function Overiding
var BaseClassWithfn = /** @class */ (function () {
    function BaseClassWithfn() {
    }
    BaseClassWithfn.prototype.print = function (text) {
        console.log("BaseClasswithfn.print() : ".concat(text));
    };
    return BaseClassWithfn;
}());
var DerivedClassOverrride = /** @class */ (function (_super) {
    __extends(DerivedClassOverrride, _super);
    function DerivedClassOverrride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassOverrride.prototype.print = function (text) {
        console.log("DerivedClassOverride.print(".concat(text, ")"));
    };
    return DerivedClassOverrride;
}(BaseClassWithfn));
var derivedClassOverride = new DerivedClassOverrride();
derivedClassOverride.print('text');
var DerivedClassfnCallthrough = /** @class */ (function (_super) {
    __extends(DerivedClassfnCallthrough, _super);
    function DerivedClassfnCallthrough() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassfnCallthrough.prototype.print = function (text) {
        _super.prototype.print.call(this, "from DerivedClassfnCallthrough : ".concat(text));
    };
    return DerivedClassfnCallthrough;
}(BaseClassWithfn));
var derivedClasscallthrough = new DerivedClassfnCallthrough();
//derivedClasscallthrough('text')
// Procteted
var BaseClassProtected = /** @class */ (function () {
    function BaseClassProtected(id) {
        this.name = "";
        this.id = id;
    }
    return BaseClassProtected;
}());
var AcessProtected = /** @class */ (function (_super) {
    __extends(AcessProtected, _super);
    function AcessProtected(id) {
        var _this = _super.call(this, id) || this;
        console.log("base.id = ".concat(_this.id));
        return _this;
        // console.log(`base.name = ${this.name}`);
    }
    return AcessProtected;
}(BaseClassProtected));
var accessProtected = new AcessProtected(1);
//accessProtected.id = 1;
//accessProtected.name = "test";
// Abstract Classes
var EmployeedBase = /** @class */ (function () {
    function EmployeedBase(id, name) {
        this.id = id;
        this.name = name;
    }
    return EmployeedBase;
}());
var OfficeWorker = /** @class */ (function (_super) {
    __extends(OfficeWorker, _super);
    function OfficeWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OfficeWorker;
}(EmployeedBase));
var OfficeManager = /** @class */ (function (_super) {
    __extends(OfficeManager, _super);
    function OfficeManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employees = [];
        return _this;
    }
    return OfficeManager;
}(OfficeWorker));
var joeBlogg = new OfficeWorker(1, "joe");
var jillBlogg = new OfficeWorker(2, "jill");
var jackManager = new OfficeManager(3, "jack");
var EmployeeBase1 = /** @class */ (function () {
    function EmployeeBase1() {
    }
    EmployeeBase1.prototype.contruct = function (id, name) {
        this.id = id;
        this.name = name;
    };
    return EmployeeBase1;
}());
var OfficeWorker1 = /** @class */ (function (_super) {
    __extends(OfficeWorker1, _super);
    function OfficeWorker1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfficeWorker1.prototype.dowork = function () {
        console.log("".concat(this.name, " : doing work"));
    };
    return OfficeWorker1;
}(EmployeeBase1));
var OfficeManager1 = /** @class */ (function (_super) {
    __extends(OfficeManager1, _super);
    function OfficeManager1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employees = [];
        return _this;
    }
    OfficeManager1.prototype.manageEmployees = function () {
        _super.prototype.dowork.call(this);
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            employee.dowork();
        }
    };
    return OfficeManager1;
}(OfficeWorker1));
var jBlogg = new OfficeWorker1();
var jiBlogg = new OfficeWorker1();
var newManager = new OfficeManager1();
newManager.employees.push();
newManager.employees.push();
newManager.manageEmployees();
// Instanceof
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var BfromA = /** @class */ (function (_super) {
    __extends(BfromA, _super);
    function BfromA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BfromA;
}(A));
var CfromA = /** @class */ (function (_super) {
    __extends(CfromA, _super);
    function CfromA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CfromA;
}(A));
var DfromC = /** @class */ (function (_super) {
    __extends(DfromC, _super);
    function DfromC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DfromC;
}(CfromA));
console.log("A instance of A :\n ".concat(new A() instanceof A));
console.log("BfromA instanceof A :\n ".concat(new BfromA() instanceof A));
console.log("BfronA instance of BfromA :\n ".concat(new BfromA instanceof BfromA));
console.log("CfromA instance of BfromA :\n  ".concat(new BfromA() instanceof BfromA));
console.log("DfromC instance of CfromA :\n".concat(new DfromC() instanceof CfromA));
console.log("new DfromC instance of A :\n".concat(new DfromC() instanceof A));
