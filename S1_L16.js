

function a() {
    var myVar = 'myVar in function a()';
    console.log(myVar);
}

function b() {
    var myVar = 'myVar in function b()';
    console.log(myVar);
}

var myVar = 'myVar in global context';
console.log(myVar);
a();
b();

// Output
// myVar in global context
// myVar in function a()
// myVar in function b()


// Notice that even if the variable myVar exists in different scopes, it's value is different in each one. 
// And this is what is meant by "Variable Environment"