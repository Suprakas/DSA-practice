// Check if a number is Armstrong Number or not

/* Problem Statement:Given an integer N, return true it is an Armstrong number
 otherwise return false. An Amrstrong number is a number that is equal
  to the sum of its own digits each raised to the power of the number of digits.

  E.g: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153 */

  class solution{
     Armstrong(n){
        let dum=n;
        let arr=[];
        let sum=0;
        while(n>0){
            let mod = n%10
            arr.push(mod);
            n=Math.floor(n/10);
        }
        for(let i=0; i<arr.length; i++){
            sum=sum + Math.pow(arr[i], arr.length)
        }
        return dum === sum
    }
}

let n=153;
let obj = new solution()
let res = obj.Armstrong(n);
if(res){
    console.log(`${n} is a Armstrong number`)
}else{
    console.log(`${n} is not a Armstrong nummber`)
}

// T.C = O(log10N + 1), S.C = O(log10N) for storing the digits in an array, 
// otherwise O(1) if we calculate the sum on the fly without using an array.

// Optimal approach ->

class solution1{
    Armstrong(n){
         let dum=n;
            let sum=0;
            let count = Math.floor(Math.log10(n) + 1); 
            while(n>0){
                let mod = n%10      
                sum=sum + Math.pow(mod, count) 
                n=Math.floor(n/10);
            }
            return dum === sum
    }
}

let n1=153;
let obj1 = new solution1()
let res1 = obj1.Armstrong(n);
if(res){
    console.log(`${n} is a Armstrong number`)
}else{
    console.log(`${n} is not a Armstrong nummber`)
}   

// T.C = O(log10N + 1), S.C = O(1)