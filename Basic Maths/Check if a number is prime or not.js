
// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2..

// Initialize a counter variable to count the number of factors
// Loop through numbers from 1 to the square root of n
// If n is divisible by i, increment the counter

 /*  If n is not a perfect square, count its reciprocal factor.  If i is not the square root of n, then n/i is another distinct divisor.
Example: For n = 12, when i = 3, n/i = 4. Both 3 and 4 are divisors, so count both.
But if n = 16 and i = 4, then n/i = 4 (same number), so only count once.*/
// If the number of factors is exactly 2 (1 and the number itself), it's prime

class Solution {
    checkPrime(n) {
        let cnt = 0;  
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                cnt++;
                
                if (n / i !== i) {
                    cnt++;
                }
            }
        }
        return cnt === 2;
    }
}

let n = 1483;  
let obj = new Solution();
let isPrime = obj.checkPrime(n); 

if (isPrime) {
    console.log(`${n} is a prime number.`);
} else {
    console.log(`${n} is not a prime number.`);
}

// T.C =  O(sqrt(N)), S.C= O(1)