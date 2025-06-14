// write a function sumAll using the 
// rest parameters that takes any number
// of arguments and returns their sum

const sumAll = (...numbers) => {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });

    return sum;
} 