// const products = [
//   {
//     name: "Shampoo",
//     price: 300,
//   },

//   {
//     name: "Cumber",
//     price: 100,
//   },

//   {
//     name: "Shirt",
//     price: 700,
//   },

//   {
//     name: "Pant",
//     price: 1200,
//   },
// ];

function totalProducts(prices) {
  // console.log(prices);
  let sum = 0;
  for (const price of prices) {
    console.log(price);
    // console.log(price.price);
    sum = sum + price.price;
  }
  return sum;
}

// const total = totalProducts(products);
// console.log(total);
// console.log("The price of all products is:", total);

const products = [
  {
    name: "Shampoo",
    price: 300,
    quantity: 2,
  },

  {
    name: "Cumber",
    price: 100,
    quantity: 3,
  },

  {
    name: "Shirt",
    price: 700,
    quantity: 5,
  },

  {
    name: "Pant",
    price: 1200,
    quantity: 1,
  },
];

function allProducts(products) {
  // console.log(products);
  let sum = 0;
  for (const product of products) {
    console.log(product);
    sum = sum + product.price * product.quantity;
  }
  return sum;
}

const total = allProducts(products);
console.log("Our total bill is:", total);
