// Problem Statement: Given an integer N return the reverse of the given number.

// Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.

// 123 -> mod = 3 rev = 0 rev=(rev*10 + mod), n=n/10
function revNum(N){
    let rev = 0;
while(N>0){
    let mod = N%10
    rev = rev*10 + mod
    N=Math.floor(N/10)
}    
return rev;
}

function main(){
    let number = prompt("Enter a number")
    num = parseInt(number)
    console.log("Your Input number is :"+num)
    
    let rev = revNum(num);
    console.log("The reverse of the given number is : "+rev);
}
main()

// T.C =  log₁₀N, S.C= O(1)