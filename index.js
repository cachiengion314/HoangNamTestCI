// A.1
function findOppositeNumber(n, inputNumber) {
    let halfNValue = n / 2;
    let sum = inputNumber + halfNValue;
    if (sum > n) {
        sum = sum - n;
    }
    return sum;
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));