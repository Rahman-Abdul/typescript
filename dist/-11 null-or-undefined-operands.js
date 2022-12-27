function testNullOperands(a, b) {
    var addResult = a + (b !== null && b !== void 0 ? b : 0);
}
