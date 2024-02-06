function discountedPrice(quantity){
    if(quantity <= 100){
        const total = (quantity * 100);
        return total;
    }
    else if(quantity <= 200){
        const total = (quantity * 90);
        return total;
    }
    else if(quantity > 200){
        const total = (quantity * 70);
        return total;
    }
}

const discount = discountedPrice(5);
// console.log(discount);
// console.log("You have to pay after discount:", discount);

function layeredDiscount(quantity){
    const firstHundred = 100;
    const secondHundred = 90;
    const aboveTwoHundred = 70;

    if(quantity <= 100){
        const total = (quantity * firstHundred);
        return total;
    }
    else if(quantity <= 200){
        const firstHundredTotal = (100 * firstHundred);
        const remainingQuantity = (quantity - 100);
        const secondTotal = (remainingQuantity * secondHundred);
        const total = firstHundredTotal + secondTotal;
        return total;
        // return secondTotal;
    }
    else{
        const firstHundredTotal = (100 * firstHundred);
        // const remainingAfterHundred = (quantity - 100);
        // const secondHundredTotal = (remainingAfterHundred * secondHundred);
        const secondHundredTotal = (100 * secondHundred);
        const remainingAfterTwoHundred = (quantity - 200);
        const remainingTotal = (remainingAfterTwoHundred * aboveTwoHundred);
        const total = firstHundredTotal + secondHundredTotal + remainingTotal;
        return total;
        // return remainingTotal;
    }
}

const totalPrice = layeredDiscount(150);
console.log(totalPrice);