function woodQuantity(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = (chair * perChairWood);
    const allTableWood = (table * perTableWood);
    const allBedWood = (bed * perBedWood);

    const totalWood = allChairWood + allTableWood + allBedWood;
    return totalWood;
}

const allWood = woodQuantity(3, 4, 5);
// console.log(allWood);

const prices = [20000, 16000, 50000, 100000, 12000, 30000];

function lowestPrice(phonePrice){
    // console.log(phonePrice);
    let lowest = prices[0];
    for(const price of phonePrice){
        // console.log(price);
        if(price < lowest){
            lowest = price;
        }
    }
    return lowest;
}

const phonePrice = lowestPrice(prices);
// console.log(phonePrice);

const mobiles = [
    {name: "Samsung",
     price: 20000,
     camera: "12mp",
     color: "Black",   
    },

    {name: "Apple",
     price: 180000,
     camera: "12mp",
     color: "Black",   
    },

    {name: "Walton",
     price: 30000,
     camera: "12mp",
     color: "Black",   
    },

    {name: "Symphony",
     price: 31000,
     camera: "12mp",
     color: "Black",   
    },

    {name: "Asus",
     price: 50000,
     camera: "12mp",
     color: "Black",   
    },

    {name: "Nokia",
     price: 27000,
     camera: "12mp",
     color: "Black",   
    },

    {name: "Windows Phone",
     price: 15000,
     camera: "12mp",
     color: "Black",   
    }
]

function getCheapestPhone(phones){
    // console.log(phones);
    let min = phones[0].price;
    for(const phone of phones){
        // console.log(phone);
        if(phone.price < min){
            min = phone;
        }
    }
    return min;
}

const cheapestPhone = getCheapestPhone(mobiles);
console.log(cheapestPhone);