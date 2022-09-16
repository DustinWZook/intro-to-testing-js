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

// was this all exercise 10 was asking for?
function isFive(input){
    return input == 5;
}

function isEven(input){
    if(typeof input === 'boolean'){
        return false
    }
    return input % 2 === 0;
}