function alwaysThrow() {
    throw new console.error("this always throw");
    //return -1;
}
// Never Switch
var AnEnum;
(function (AnEnum) {
    AnEnum[AnEnum["FIRST"] = 0] = "FIRST";
    AnEnum[AnEnum["SECOND"] = 1] = "SECOND";
})(AnEnum || (AnEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case AnEnum.FIRST: return "FIRST CASE";
        case AnEnum.SECOND: return "SECOND CASE";
    }
    var returnValue = enumValue;
    return returnValue;
}
