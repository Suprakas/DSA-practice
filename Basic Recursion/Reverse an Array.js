/* Reverse a given Array

Problem Statement: You are given an array. The task is to reverse the array and print it */

// Two pointer approach :

class Solution{
    revArray(arr){
        let first = 0;
        let last = arr.length;
        while(first<last){
            let temp = arr[first];
            arr[first]=arr[last];
            arr[last]=temp;
            first++;
            last--;
        }
    }
}

const sol = new Solution();
let arr = [1,2,3,4,5];
sol.revArray(arr);
console.log(arr.join(" "));
// console.log(arr) ---> [ undefined, 5, 4, 3, 2, 1 ]

// T.C = O(N), S.C = O(1)




// Recursive approach : 
class Solution1{
    revArray(arr1, first, last){
        if(first>=last) return;
        let temp = arr1[first];
        arr1[first]=arr1[last];
        arr1[last]=temp;
        this.revArray(arr1, first+1, last-1);
    }   
}

const sol1 = new Solution1();

let arr1 = [1,2,3,4,5];
sol1.revArray(arr1, 0, arr1.length-1);
console.log(arr1.join(" ")); 

// T.C = O(N), S.C = O(N) due to recursive stack space
