function func (a: string){
    console.log(a);

}
func("Hello function");

// Optional parameters

function concatValues(a: string, b?: string){
    console.log(`a + B = ${a + b}`);

}

concatValues("first", "second");
concatValues("third");
