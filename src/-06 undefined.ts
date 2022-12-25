let array = ["123", "Hello", "687"]

delete array[0]

for (let i = 0; i < array.length; i++){
    console.log(`array[${i}] = ${array[i]}`);

}

//

for(let i = 0; i < array.length; i++){
    checkPrintElement(array[i]);
}

function checkPrintElement(arrElement: string | undefined){
    if(arrElement === undefined)
        console.log(`invali array element`);
    else
    console.log(`vallid array element: ${arrElement}`);


}

