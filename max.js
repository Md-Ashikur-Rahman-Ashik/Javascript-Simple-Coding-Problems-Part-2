const anonym = 56;
const slaman = 95;

// if(anonym > slaman){
//     console.log("Anonym will get the strawberry");
// }
// else{
//     console.log("Salman will get the strawberry");
// }

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

const getMaxNum = getMax(5, 10);
// console.log(getMaxNum);

function getMaxThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const getThreeMax = getMaxThree(100, 60 ,80);
// console.log(getThreeMax);

const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getHeight(numbers){
    // console.log(numbers);
    let max = numbers[0];
    for(const number of numbers){
        // console.log(number);
        if(number > max){
            max = number;
        }
    }
    return max;
    // const max = Math.max(number);
    // return max;
}

const height = getHeight(heights);
// console.log(height);
console.log("Max value is:", height);