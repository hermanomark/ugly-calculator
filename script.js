let calculator = {
  addition(a, b) {
    if (isNaN((a) || (b))) {
      return 'Please input a number';
    } else {
      return a + b;
    }
  },
  subtraction(a, b) {
    if (isNaN((a) || (b))) {
      return 'Please input a number';
    } else {
      return a - b;
    }

  },
  multiplication(a, b) {
    if (isNaN((a) || (b))) {
     return 'Please input a number';
    } else {
      return a * b;
    }
  },
  division(a, b) {
    if (isNaN((a) || (b))) {
     return 'Please input a number';
    } else {
      return a / b;
    }
  }
}

let handlers = {
  addition() {
    
  },
  subtraction() {

  },
  multiplication() {

  },
  division() {

  }
}
