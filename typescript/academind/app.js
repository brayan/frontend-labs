function add(number1, number2) {
    return number1 + number2;
}
function addNumbersAndPrintResult() {
    var number1 = 10;
    var number2 = 2.8;
    var result = add(number1, number2);
    console.log("Result: " + result);
}
function experimentingWithObjects() {
    var person = {
        name: "Brayan",
        age: 30
    };
    console.log(person);
}
addNumbersAndPrintResult();
experimentingWithObjects();
