/*
Bubble Sort Algorithm .

Problem Statement: Given an array of N integers, write a program to implement 
the Bubble Sorting algorithm.

Algo =>
1. Compare adjacent elements in the array and swap them if they are in the wrong order 
(i.e., if the first element is greater than the second element).
2. After the first pass, the largest element will be at the end of the array.
3. Repeat this process for the remaining unsorted portion of the array 
until the entire array is sorted.
Example =>

    Input: N = 6, array[] = {5,1,4,2,8}
Output: 1,2,4,5,8
Explanation: After sorting the array is: 1, 2, 4, 5, 8

*/

class Solution{
    bubbleSort(arr){
        let n=arr.length;
        for(let i=n-1; i>=0; i--){ 
            // Outer loop runs from the end towards the beginning
            for(let j=0; j<=i-1; j++){
            // Inner loop iterates up to the i-th index
            if(arr[j]>arr[j+1]){
                  // If current element is greater than the next element, swap them
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
            }
        }
        console.log("After Using Bubble Sort:", arr.join(" "));
    }
}

let arr = [10, 4, 3 ,20, 45, 33, 34, 67];
console.log("Unsorted array is: ", arr.join(" "));

const sorted = new Solution();
sorted.bubbleSort(arr);

// Time Complexity: O(N^2) where N is the number of elements in the array. 
// This is because we have two nested loops, each iterating over the array.
// Space Complexity: O(1) as we are sorting the array in place
//  and not using any additional data structures that grow with input size.
