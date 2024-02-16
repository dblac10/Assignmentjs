// Task 1

function sumofEvenIndices(arrayofNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayofNumbers.length; i=i+2){
    sum = sum + arrayofNumbers [i];
console.log(arrayofNumbers[i]);
}

console.log(sum);
}
const arrayofNumbers = [2,3,4,5,6,7,8,9,10];

sumofEvenIndices (arrayofNumbers);






