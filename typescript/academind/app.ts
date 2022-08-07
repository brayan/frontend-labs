
function add(number1: number, number2: number): number {
    return number1 + number2;
}

function addNumbersAndPrintResult() {
    const number1 = 10;
    const number2 = 2.8;
    const result = add(number1, number2);
    console.log("Result: " + result);
}

function experimentingWithObjects() {
    const person: {
        name: string;
        age: number;
    } = {
        name: "Brayan",
        age: 30
    }

    const shortPerson = {
        name: "Brayan",
        age: 30
    }
    console.log(person);
}

addNumbersAndPrintResult()
experimentingWithObjects()

