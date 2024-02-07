function add(num1, num2) {
  const total = num1 + num2;
  return total;
}

function subtract(num1, num2) {
  const total = num1 - num2;
  return total;
}

// function multiply(num1, num2) {
//   const total = num1 * num2;
//   return total;
// }

function divide(num1, num2) {
  const total = num1 / num2;
  return total;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    // add();
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  }
  // else{
  //     const result = divide(a, b);
  //     return result;
  // }
  else if (operation === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return "Only addition, subtraction, multiplication and division is allowed.";
  }
}

// const result = calculator(5, 7, "add");
// console.log(result);

function multiply(num1, num2) {
  //   console.log(typeof num1);
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    // console.log("Please provide a number");
  }
  const result = num1 * num2;
  return result;
}

const result = multiply(5, [6, 8]);
// console.log(result);

function fullName(firstName, secondName) {
  if (typeof firstName !== "string" || typeof secondName !== "string") {
    return "Please provide string value";
  }
  const full = firstName + " " + secondName;
  return full;
}

const full = fullName("Rayhan", "Sohan");
// console.log(full);

function getPrice(product) {
  // console.log(product.price);
  const price = product.price;
  //   if (typeof product.price !== "number") {
  //     return "Please include a price.";
  //   }
  return price;
}

const total = getPrice({
  name: "Dish washer",
  price: 35,
  color: "Green",
});

// const total = getPrice("Alvi");

// const total = getPrice([1]);

// console.log(total);

function getSecond(numbers) {
  // console.log(typeof numbers);
  // console.log(Array.isArray(numbers));
  if (Array.isArray(numbers) === false) {
    return "Please input an Array.";
  }
  const second = numbers[1];
  return second;
}

const second = getSecond([1, 2, 3, 4, 5]);
// const second = getSecond(45);
// console.log(second);

console.log(typeof null);
