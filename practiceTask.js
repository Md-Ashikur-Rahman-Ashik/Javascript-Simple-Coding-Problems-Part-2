// const heights2 = [167, 190, 120, 165, 137];

function lowestHeight(heights){
    let lowest = heights[0];
    for(const height of heights){
        // console.log(height);
        if(lowest > height){
            lowest = height;
        }
    }
    return lowest;
}

// const height = lowestHeight(heights2);
// console.log(height);

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', "AR"];

function smallestName(names){
    let smallest = names[0]
    for(const name of names){
        // console.log(name);
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return smallest;
}

const name = smallestName(heights2);
// console.log(name);

function calculateElectronicsBudget(laptop, tablets, mobile){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    if(typeof laptop !== "number" || typeof tablets !== "number" || typeof mobile !== "number"){
        return "Please provide a number";
    }
    else if(laptop < 0 || tablets < 0 || mobile < 0){
        return "Please provide a valid number";
    }

    const laptopTotal = (laptop * laptopPrice);
    const tabletTotal = (tablets * tabletPrice);
    const mobileTotal = (mobile * mobilePrice);

    const total = laptopTotal + tabletTotal + mobileTotal;
    return total
}

const budget = calculateElectronicsBudget(1, 2, 4);
// console.log(budget);

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(mobiles){
    // console.log(mobiles);
    console.log(mobiles.length);
    for(const mobile of mobiles){
        // console.log(mobile);
        // console.log(mobile.length);
    }
}

const phone = findAveragePhonePrice(phones);
console.log(phone);