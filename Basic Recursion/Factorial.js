/* Factorial of a Number : Iterative and Recursive

Problem Statement: Given a number X,  print its factorial.

To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

Note: X  is always a positive number.  */

class Solution{
    findFactorial(n){
        if(n === 0 || n === 1) return 1;
        return n * this.findFactorial(n-1);
    }
}

const sol = new Solution();
const n = 5;
console.log(sol.findFactorial(n));
// T.C = O(N), S.C = O(N) due to recursive stack space, otherwise O(1) if we use tail recursion optimization.
