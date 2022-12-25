enum DoorState {
    open,
    closed
}
function checkDoorState (state: DoorState){
    console.log(`enum value is : ${state}`);
    switch(state){
        case DoorState.open:
            console.log(`Door is open`);
            break;
            case DoorState.closed:
                console.log(`Door is closed`);
                break;
    }
}

checkDoorState(DoorState.open)
checkDoorState(DoorState.closed)
