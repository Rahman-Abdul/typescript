export class Module1 {
    print(): void {
        console.log(`Module.print() called`);

    }
}


function localPrint(text: string){
    console.log(`localPrint : ${text}`);

}

export class MyModule{
    print(): void {
        console.log(`MyModule.print() callled`);

    }
}

function myLocalPrint(name: string){
        console.log(`myLocal.print : ${name}`);

    }
