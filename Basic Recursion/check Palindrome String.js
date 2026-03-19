/*Check if the given String is Palindrome or not

Problem Statement: Given a string, check if the string is palindrome or not. 
A string is said to be palindrome if the reverse of the string is the same as the string.
*/


class Solution {
    checkStringPalindrone(i, str) {
        if (i > str.length / 2) return true; // Base case : if we have reached the middle of the string, then it is a palindrome
        if (str[i] !== str[str.length - i - 1]) return false; // If the characters at the current index and the corresponding index from the end are not the same, then it is not a palindrome
        return this.checkStringPalindrone(i + 1, str);
    }
}

const sol = new Solution();
const str = "naman";
const res = sol.checkStringPalindrone(0, str);
console.log(`${str} is palindrome : ${res}`);

// T.C = O(N), S.C = O(N) due to recursive stack space
