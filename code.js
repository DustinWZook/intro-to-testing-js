// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if (typeof input === 'undefined'){
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}
