/* Print Fibonacci Series up to Nth term

Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term. */

class Solution {
    printFibonacci(n) {
        let a = 0, b = 1;       
        for (let i = 1; i <= n; i++) {
            console.log(a + " ");
            let next = a + b;
            a = b;
            b = next;
        }
    }
}

const sol = new Solution();
const N = 10;
sol.printFibonacci(N);
// T.C = O(N), S.C = O(1)
