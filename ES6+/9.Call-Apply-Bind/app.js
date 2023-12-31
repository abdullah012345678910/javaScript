const obj1 = {
    number1: 10,
    number2: 20

};

const obj2 = {
    number1: 30,
    number2: 40
};

function addNumbers(number3, number4) {

    console.log(this.number1 + this.number2 + number3 + number4); // this window objesini gösterir
}

// addNumbers(100, 200); // NaN


// addNumbers.call(obj1, 100, 200);// numbers3 = 100, numbers4 = 200 //==> 330 ///==> 10 + 20 + 100 + 200 = 330
// addNumbers.call(obj2, 300, 210); //==> 580

// addNumbers.apply(obj1, [100, 200]); //==> 330

// Bind

function getNumbersTotal(number3, number4) {
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);


console.log(copyFunc1(100, 200)); //==> 330
console.log(copyFunc2(100, 200)); //==> 370
// console.log(copyFunc1); // f function getNumbersTotal(number3, number4) {....
// console.dir(copyFunc2); //ƒ bound getNumbersTotal()


