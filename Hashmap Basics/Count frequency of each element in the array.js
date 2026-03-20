/*
Count frequency of each element in the array
Problem Statement: Given an array, we have found the number of occurrences of each element in the array.
*/

class Solution {
    countFreq(arr, n){
        let visited = new Array(n).fill(false); // Create a visited array to keep track of visited elements
        for(let i=0; i<n; i++){
            if(visited[i]) continue; // If the element is already visited, skip it

            let count=1;
            for(let j=i+1; j<n; j++){
                if(arr[j] === arr[i]){
                    visited[j] =true; // Mark the element as visited
                    count++; // Increment the count of the element
                }
            }
            console.log(`${arr[i]} occurs ${count} times`); // Print the element and its count
        }
    }
}

const arr = [10,5,10,15,10,5];
const n = arr.length;

const sol = new Solution();
sol.countFreq(arr, n);

// T.C = O(N^2), S.C = O(N) due to visited array


// Optimized Solution using HashMap =>

    class Solution1 {
        countFreq(arr, n){
            let freqMap = new Map(); // Create a HashMap to store the frequency of each element
            for(let i=0; i<n; i++){
                if(freqMap.has(arr[i])){
                    freqMap.set(arr[i], freqMap.get(arr[i])+1);
                } else {
                    freqMap.set(arr[i], 1);
                }
            }
            // Print the frequency of each element
            for(let [key, value] of freqMap){
                console.log(`${key} occurs ${value} times`);
            }
        }
    }

    const arr1 = [10,5,10,15,10,5,20,100,50, 11, 2, 24, 5, 10, 15, 20];
    const n1 = arr1.length;

    const sol1 = new Solution1();
    sol1.countFreq(arr1, n1);

    // T.C = O(N), S.C = O(N) due to HashMap

