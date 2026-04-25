/*
Problem : Squares of a Sorted Array

link : https://leetcode.com/problems/squares-of-a-sorted-array/description/

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0, right = n - 1;
    let pos = n - 1; // position to fill in result

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }

    return result;
};

// Example usage:
console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]

// T.C : O(n), S.C=O(n)