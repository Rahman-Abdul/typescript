class SimpleClass {
    id: number | undefined;
    print(): void{
        console.log(`SimpleClass.id = ${this.id}`);

    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print()

