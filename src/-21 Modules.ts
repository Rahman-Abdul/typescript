export class Module1 {
    print(): void {
        console.log(`Module.print() called`);

    }
}


function localPrint(text: string){
    console.log(`localPrint : ${text}`);

}
