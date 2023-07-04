

function a() {
    var myVar = 'myVar in function a()';
    console.log(myVar);
    console.log(globalVar);
    function b() {
        console.log(myVar);
        console.log(globalVar);
    }
b();
}



var myVar = 'myVar in global context';
var globalVar = 'globalVar in global context';
console.log(myVar);
a();

// Output
// myVar in global context
// myVar in function a()
// myVar in function a()

// Notice that in function a, there is no variable called globalVar, so it tries to find it in it's *scope chain*
// First it goes to it's parent scope (which is in this case the global scope).
// Then it finds it so it uses it.

// And in function b, there is no variable called myVar or globalVar, so it tries to find it in it's *scope chain*
// First it goes to it's parent scope (which is in this case function a).
// It finds the myVar variable, so it uses it, but it doesn't find the globalVar.

// Then in tries again to find it in it's *scope chain* (which is in this case the global scope).
// It finds it and uses it