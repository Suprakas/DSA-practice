
// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

/*Problem Statement: Given an integer N, return all divisors of N.
A divisor of an integer N is a positive integer that divides N without leaving a remainder. 
In other words, if N is divisible by another integer without any remainder, 
then that integer is considered a divisor of N.
*/


class Solution{
    isPalindrome(n){
        let rev=0;
        let dup=n;
       while(n>0){
           let mod=n%10;
           rev=rev*10 + mod;
           n=Math.floor(n/10);
       }
       return dup === rev;
    }
}

const sol = new Solution();
let n=1313;
let isPalin = sol.isPalindrome(n);
if(isPalin){
console.log(`${n} is a Palindrome number`);
}else{
console.log(`${n} is not a Palindrome number`);
}

// T.C = O(log10N + 1),, S.C = O(1) 