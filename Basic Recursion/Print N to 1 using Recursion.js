// Print N to 1 using Recursion

// Problem Description: Given an integer N, write a program to print numbers from N to 1.


class Solution {
    printNumbers(n){
        if(n === 0) return;
        console.log(n + " ");
        return this.printNumbers(n-1);
    }    
}

const sol =  new Solution();
const number = 10;
sol.printNumbers(number);

// T.C = O(N), S.C = O(N) 
