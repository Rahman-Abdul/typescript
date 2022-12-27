function testNullOperands(a: number, b: number | null | undefined){
    let addResult = a + (b?? 0)
}
