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
console.log("You have to pay after discount:", discount);