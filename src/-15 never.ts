function alwaysThrow(): never{
    throw new console.error("this always throw");
    //return -1;
}

// Never Switch

enum AnEnum {
    FIRST,
    SECOND
}

function getEnumValue(enumValue: AnEnum){
    switch(enumValue){
        case AnEnum.FIRST: return "FIRST CASE";
        case AnEnum.SECOND: return "SECOND CASE";
    }
    let returnValue: never = enumValue;
    return returnValue;
}
