var DoorState;
(function (DoorState) {
    DoorState[DoorState["open"] = 0] = "open";
    DoorState[DoorState["closed"] = 1] = "closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is : ".concat(state));
    switch (state) {
        case DoorState.open:
            console.log("Door is open");
            break;
        case DoorState.closed:
            console.log("Door is closed");
            break;
    }
}
checkDoorState(DoorState.open);
checkDoorState(DoorState.closed);
// string enum
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "Open";
    DoorStateString["CLOSED"] = "closed";
})(DoorStateString || (DoorStateString = {}));
console.log("OPEN = ".concat(DoorStateString.OPEN));
console.log("const closed = ".concat(12 /* Open */));
