// Find GCD of two numbers

// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

class Solution{
    checkGCD(n1, n2){
        let gcd=1;
        for(let i=1; i<=Math.min(n1,n2); i++){
            if(n1%i === 0 && n2%i ===0){
                gcd=i;
            }
        }
        return gcd;
    }
}

let n1=10, n2=15;
let obj = new Solution();
let gcd = obj.checkGCD(n1, n2);
console.log(`gcd for the numbers ${n1} and ${n2} is :`+gcd);

// T.C = O(min(n1,n2)), S.C = O(1)

// Optimal approach -> Euclidean Algorithm  

/*
The Euclidean Algorithm is a method for finding the greatest common divisor (GCD)
of two numbers. It operates on the principle that the GCD of two numbers remains
the same even if the smaller number is subtracted from the larger number.

To find the GCD of n1 and n2 where n1 > n2:
1. Repeatedly subtract the smaller number from the larger number until one of them becomes 0.
2. Once one becomes 0, the other is the GCD of the original numbers.

Example:
n1 = 20, n2 = 15

gcd(20, 15) = gcd(20 - 15, 15) = gcd(5, 15)
gcd(5, 15)  = gcd(15 - 5, 5)  = gcd(10, 5)
gcd(10, 5)  = gcd(10 - 5, 5) = gcd(5, 5)
gcd(5, 5)   = gcd(5 - 5, 5)  = gcd(0, 5)

Hence, return 5 as the GCD.



*/
class Solution{
    checkGCD(a,b){
        while(a>0 && b>0){
            if(a>b){
                a=a%b;
            }else{
                b=b%a;
            }
        }
        if(a === 0){
            return b;
        }else{
            return a;
        }
    }
}

let x=15, y=25;
let obj = new Solution()
let gcd = obj.checkGCD(x,y);
console.log(`GCD of ${x} and ${y} is:`+gcd);