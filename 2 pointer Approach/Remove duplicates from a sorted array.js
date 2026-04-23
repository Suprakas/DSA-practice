/*
Problem : Remove Duplicates from Sorted Array ->
link -> https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // pointer for unique elements
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1; // number of unique elements
};

// Example usage:
let nums1 = [1,1,2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // Output: 2, [1,2]

let nums2 = [0,0,1,1,1,2,2,3,3,4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // Output: 5, [0,1,2,3,4]

// T.C : O(n), S.C : O(1)