/*
Selection Sort Algorithm

Problem Statement: Given an array of N integers, write a program to implement the Selection 
sorting algorithm.

Algo =>
1. Start with the first element of the array and assume it is the minimum.
2. Compare this minimum with the next element in the array. If the next element is smaller than the minimum, update the minimum to this new value.
3. Continue this process for all elements in the array. After one complete pass, the minimum element will be at its correct position.
4. Repeat steps 1-3 for the remaining unsorted portion of the array until the entire array is sorted.

Example =>

    Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

*/

function selectionSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        let minIndex = i; // assuming our first element is array is the minimum element.
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log("Sorted array After applying seletion sort is : ", arr.join(" "));
}

let arr = [13, 5, 8, 20, 1, 3];
console.log("Array before Selection sort : ", arr.join(" "));

selectionSort(arr);

// Time Complexity: O(N^2) where N is the number of elements in the array. 
// This is because we have two nested loops, each iterating over the array.

// Space Complexity: O(1) as we are sorting the array in place
//  and not using any additional data structures that grow with input size.

