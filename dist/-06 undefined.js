var array = ["123", "Hello", "687"];
delete array[0];
for (var i = 0; i < array.length; i++) {
    console.log("array[".concat(i, "] = ").concat(array[i]));
}
