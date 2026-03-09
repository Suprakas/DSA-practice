// Print all Divisors of a given Number

/*Problem Statement: Given an integer N, return all divisors of N.
A divisor of an integer N is a positive integer that divides N without leaving a remainder.
 In other words, if N is divisible by another integer without any remainder, 
then that integer is considered a divisor of N.
*/


class Solution{
    printFactors(n){
        let arr=[];
        for(let i=1; i*i<=n; i++){
            if(n%i === 0){
                
                arr.push(i);
                if(i!==n/i){
                arr.push(n/i);
                }
            }
        }
        return arr;
    }
}

const sol = new Solution();
let n=100;
let result = sol.printFactors(n);

console.log("Divisors of", n, ":", result.join(" "));
console.log("Number of divisors of", n, ":", result.length);

// T.C = O(sqrt(N)), S.C = O(sqrt(N)) in worst case when n is a perfect square, otherwise O(1)