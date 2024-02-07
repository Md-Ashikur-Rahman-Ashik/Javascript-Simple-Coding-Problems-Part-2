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

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    const smallest = names[0]
    for(const name of names){
        console.log(name);
    }
}

const name = smallestName(heights2);
console.log(name);