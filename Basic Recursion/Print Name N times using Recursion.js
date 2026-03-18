// Print Name N times using Recursion

// Problem Description: Given an integer N, write a program to print your name N times.

class Solution {
    printName(name, count, N) {
        if (count === N) return; // Base case
        console.log(name); // execution
       this.printName(name, count+1, N); // Recursive call 
    }
}

const sol =  new Solution();
const N = 5;
const name = "Suprakash";
sol.printName(name,0,N);

// T.C = O(N), S.C = O(N) due to recursive stack space, otherwise O(1) if we use tail recursion optimization.
