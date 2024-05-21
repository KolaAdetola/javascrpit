// a function that reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const inputString = prompt("discover ypur name in the upside down");
const reversedString = reverseString(inputString);
console.log("Original String:", inputString);
console.log("Reversed String:", reversedString);


function countCharacters(str) {
    return str.length;
}

// Prompt the user for input
const str = prompt("Enter your name:");
const characterCount = countCharacters(str);

// Display the result
console.log("Input String:", str);
console.log("Number of Characters:", characterCount);
alert("Number of Characters: " + characterCount);


function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
const inputSentence = prompt("Input Name");
const capitalizedSentence = capitalizeFirstLetterOfEachWord(inputSentence);
console.log("Original Sentence:", inputSentence);
console.log("Capitalized Sentence:", capitalizedSentence);
// 

function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Get user input
const input = prompt("Enter a list of numbers separated by commas:");
// Convert the input string to an array of numbers
const numbers = input.split(',').map(Number);

try {
    const minNumber = findMin(numbers);
    console.log("Minimum value:", minNumber);
    alert("Minimum value: " + minNumber);
} catch (error) {
    console.error(error.message);
    alert(error.message);
}
// max in an array
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Get user input
const inpt = prompt("Enter a list of numbers separated by commas:");
// Convert the input string to an array of numbers
const numers = inpt.split(',').map(Number);

try {
    const maxNumber = findMax(numers);
    console.log("Maximum value:", maxNumber);
    alert("Maximum value: " + maxNumber);
} catch (error) {
    console.error(error.message);
    alert(error.message);
}
// adding numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// filtering odd or evn numbers
function filterArray(arr, condition) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// factorial
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


// fibbonaci numbers
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// prime numbers
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false; // Check divisors up to the square root of the number
    }

    return true;
}










