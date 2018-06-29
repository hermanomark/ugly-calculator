const calculator = {
  result: 0,
  displayResult() {
    console.log(this.result)
  },
  addition(a, b) {
    if (isNaN((a) || (b))) {
      return 'Please input a number';
    } else {
      this.result = a + b;
      this.displayResult();
    }
  },
  subtraction(a, b) {
    if (isNaN((a) || (b))) {
      return 'Please input a number';
    } else {
      this.result = a - b;
      this.displayResult();
    }

  },
  multiplication(a, b) {
    if (isNaN((a) || (b))) {
     return 'Please input a number';
    } else {
      this.result = a * b;
      this.displayResult();
    }
  },
  division(a, b) {
    if (isNaN((a) || (b))) {
     return 'Please input a number';
    } else {
      this.result = a / b;
      this.displayResult();
    }
  }
}

const handlers = {
  addition() {
    num1 = document.getElementById('inputNumber1');
    num2 = document.getElementById('inputNumber2');
    calculator.addition(num1.valueAsNumber, num2.valueAsNumber);
    num1.valueAsNumber = '';
    num2.valueAsNumber = '';
  },
  subtraction() {
    num1 = document.getElementById('inputNumber1');
    num2 = document.getElementById('inputNumber2');
    calculator.subtraction(num1.valueAsNumber, num2.valueAsNumber);
    num1.valueAsNumber = '';
    num2.valueAsNumber = '';
  },
  multiplication() {
    num1 = document.getElementById('inputNumber1');
    num2 = document.getElementById('inputNumber2');
    calculator.multiplication(num1.valueAsNumber, num2.valueAsNumber);
    num1.valueAsNumber = '';
    num2.valueAsNumber = '';
  },
  division() {
    num1 = document.getElementById('inputNumber1');
    num2 = document.getElementById('inputNumber2');
    calculator.division(num1.valueAsNumber, num2.valueAsNumber);
    num1.valueAsNumber = '';
    num2.valueAsNumber = '';
  }
}
