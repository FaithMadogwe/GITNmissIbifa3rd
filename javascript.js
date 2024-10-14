function convertToCelsius(Fahrenheit)
{
    let celsius =(Fahrenheit - 32) * (5/9);
    return celsius;
}

console.log(convertToCelsius(100).toFixed (2));

function createGreating(name, age)
{
    let greeting = `Hello, my name is ${name} and I am ${age} years old.`
    return greeting;
}

console.log(createGreating("Faith", 40));


let numbers = [1, 2, 3, 4, 5,];

numbers.push(6);

numbers.shift();

numbers.unshift(0);

let joinedNumbers = numbers.join('-');
console.log(joinedNumbers);


let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let result = sumArray([1, 2, 3, 4, 5]);
console.log(result);