//Sum of first N Natural Numbers

// Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

class Solution {
    // Function to find sum of first N natural numbers using formula
    sumOfNaturalNumbers(N) {
        // Apply formula directly
        return (N * (N + 1)) / 2;
    }
}

// Driver code
const obj = new Solution();
const fs = require('fs');
const N = parseInt(fs.readFileSync(0, 'utf-8').trim());
console.log(obj.sumOfNaturalNumbers(N));

// T.C = O(1), S.C = O(1)