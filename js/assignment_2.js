function countOccurrences (arrayofNumbers, targetNumber){
    let count = 0;

    for (let i = 0; i < arrayofNumbers.length; i++) {
        if (arrayofNumbers [i] !== targetNumber) {
            count = count + 1;
        } else {
            console.log("This Number is not an array");
        }
    }
    console.log(count);
}



for (let i = 1; i < 100; i++) {
     if (i % 3 ==0 && i % 5 == 0) {
        console.log(i + "FIZZBUZZ");
    
    } else if (i % 3 ==0) {
        console.log(i + "FIZZ");
    } else if (i % 5 ==0) {
        console.log(i + "BUZZ");
    } 
    } 



