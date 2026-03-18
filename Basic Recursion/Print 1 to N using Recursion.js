// Print 1 to N using Recursion

//Problem Description: Given an integer N, write a program to print numbers from 1 to N.

class Solution {
    printNumbers(n, count){
    if(count > n) return;
    console.log(count);
    this.printNumbers(n, count+1)
    }
}

const sol = new Solution();
const n = 10;
const count = 1;
sol.printNumbers(n, count);

// T.C = O(N), S.C = O(N) due to recursive stack space, otherwise O(1) if we use tail recursion optimization.

