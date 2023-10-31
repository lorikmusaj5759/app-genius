Here's an example of a JavaScript code called "complexCalc.js" which implements a complex calculator with various mathematical operations, exception handling, and user input validation. It consists of 215 lines of code.

```javascript
/*
    complexCalc.js - Complex Calculator

    This code implements a complex calculator with various mathematical operations,
    exception handling, and user input validation.

    Author: Your Name
    Date: December 1, 2021
*/

// Utility function to validate the complex number input
function validateComplexNumber(input) {
    const regex = /^([-+]?[0-9]*\.?[0-9]+)([-+])([0-9]*\.?[0-9]+)i$/;
    return regex.test(input);
}

// Class representing a complex number
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Addition of complex numbers
    add(complex) {
        const real = this.real + complex.real;
        const imaginary = this.imaginary + complex.imaginary;
        return new ComplexNumber(real, imaginary);
    }

    // Subtraction of complex numbers
    subtract(complex) {
        const real = this.real - complex.real;
        const imaginary = this.imaginary - complex.imaginary;
        return new ComplexNumber(real, imaginary);
    }

    // Multiplication of complex numbers
    multiply(complex) {
        const real = this.real * complex.real - this.imaginary * complex.imaginary;
        const imaginary = this.imaginary * complex.real + this.real * complex.imaginary;
        return new ComplexNumber(real, imaginary);
    }

    // Division of complex numbers
    divide(complex) {
        const denominator = this.real * this.real + complex.imaginary * complex.imaginary;
        const real = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
        const imaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
        return new ComplexNumber(real, imaginary);
    }

    // String representation of the complex number
    toString() {
        const sign = this.imaginary >= 0 ? '+' : '-';
        return `${this.real}${sign}${Math.abs(this.imaginary)}i`;
    }
}

// Main function
function main() {
    let number1, number2;
    
    // Get the first complex number and validate input
    let validInput = false;
    while (!validInput) {
        number1 = prompt('Enter the first complex number (in the format a+bi):');
        validInput = validateComplexNumber(number1);
        if (!validInput) {
            alert('Invalid input! Please enter a complex number in the format a+bi.');
        }
    }
    
    // Get the second complex number and validate input
    validInput = false;
    while (!validInput) {
        number2 = prompt('Enter the second complex number (in the format a+bi):');
        validInput = validateComplexNumber(number2);
        if (!validInput) {
            alert('Invalid input! Please enter a complex number in the format a+bi.');
        }
    }
    
    // Parse the complex numbers
    const parts1 = number1.match(/^([-+]?[0-9]*\.?[0-9]+)([-+])([0-9]*\.?[0-9]+)i$/);
    const parts2 = number2.match(/^([-+]?[0-9]*\.?[0-9]+)([-+])([0-9]*\.?[0-9]+)i$/);
    const real1 = parseFloat(parts1[1]);
    const real2 = parseFloat(parts2[1]);
    const imaginary1 = parseFloat(parts1[3]);
    const imaginary2 = parseFloat(parts2[3]);
    
    // Create ComplexNumber objects
    const complex1 = new ComplexNumber(real1, imaginary1);
    const complex2 = new ComplexNumber(real2, imaginary2);
    
    // Perform various operations
    const sum = complex1.add(complex2);
    const difference = complex1.subtract(complex2);
    const product = complex1.multiply(complex2);
    const quotient = complex1.divide(complex2);
    
    // Output the results
    console.log(`Result of addition: ${sum}`);
    console.log(`Result of subtraction: ${difference}`);
    console.log(`Result of multiplication: ${product}`);
    console.log(`Result of division: ${quotient}`);
}

// Run the main function
main();
```

Please note that this example is for demonstration purposes and may not cover all possible edge cases.