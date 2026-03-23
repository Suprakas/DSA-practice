/*
Insertion Sort Algorithm

Problem Statement: Given an array of integers called nums, sort the array in non-decreasing order 
using the insertion sort algorithm and return the sorted array.

Algo =>
1. Start from the second element (index 1) and compare it with the elements before it.
2. If the current element is smaller than the previous elements, shift the larger elements one position to the right.
3. Insert the current element into its correct position in the sorted portion of the array.
4. Repeat this process for all elements in the array until it is fully sorted.

Example =>

    Input: nums = [12, 11, 13, 5, 6]
Output: [5, 6, 11, 12, 13]
Explanation: After sorting the array is: [5, 6, 11, 12, 13]
*/

class Solution {
    insertionSort(arr) {
        let n = arr.length;
        for (let i = 1; i < n; i++) {
            let key = arr[i]; // The current element to be compared
            let j = i - 1; // The index of the last element in the sorted portion of the array

            // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]; // Shift the larger element to the right
                j--; // Move to the next element in the sorted portion
            }
            arr[j + 1] = key; // Insert the key into its correct position
        }
        console.log("Sorted array after applying Insertion Sort is: ", arr.join(" "));
    }
}

let arr = [12, 11, 13, 5, 6];
console.log("Unsorted array is: ", arr.join(" "));
const sorted = new Solution();
sorted.insertionSort(arr);

// Time Complexity: O(N^2) where N is the number of elements in the array.
// This is because in the worst case (when the array is sorted in reverse order), we have to compare each element with all the elements before it.
// Space Complexity: O(1) as we are sorting the array in place and not using any additional data structures that grow with input size.

