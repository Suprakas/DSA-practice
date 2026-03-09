// Problem Statement: Given an integer N, return the number of digits in N.

function countDigits(n){
      let count = 0;
    while(n>0){
        count++;
        n=Math.floor(n/10);
    }
    return count;
}

function main(){
    let N = 1032456;
    console.log("N:" + N);
    let digits = countDigits(N);
    console.log("Number of digits are : " + digits);
}

main()

// T.C = O(logn+1), S.C = O(1)

// Optimal approach ->


function countDigits(n){
   let count = Math.floor(Math.log10(n) + 1);
          return count; 
    }

function main(){
    let N = 32456;
    console.log("N:"+N);
    let count = countDigits(N);
    console.log("Number of digits are :"+count);
}

// T.C = O(1), S.C = O(1)