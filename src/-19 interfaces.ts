interface IIdName {
    id: number;
    name: string;
}

// Object containing interface

let idobject: IIdName = {
    id: 2,
    name: "this is a nme"
}

// Optional Properties

interface IOptional {
    id: number;
    name?: string;
}

let optionalId: IOptional = {
    id: 4

}

let optionalName: IOptional = {
    id: 4,
    name: "optional name"

}
