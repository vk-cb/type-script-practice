const arrayItem = [45,5,43,4,89,96,7]

function maxValue (array:number[]){
    let max = array[0];
    for (let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

console.log(maxValue(arrayItem))