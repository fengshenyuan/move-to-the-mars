"use strict";
class Greeter {
    constructor(greeting) {
        this.greeting = greeting;
    }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}
;
var greeter = new Greeter("Hello, Ministry of Programming!");
var str = greeter.greet();
document.body.innerHTML = greeter.greet();
