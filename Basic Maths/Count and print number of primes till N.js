
class Solution{
     checkPrimes(n){
        if (n<2){
            return false;
        }
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i===0){
                return false;
            }
        }
        return true;
    }

     printPrimes(n) {
        let primes = [];
        for (let i = 2; i <= n; i++) {
            if (this.checkPrimes(i)) {
                primes.push(i);
            }
        }
        return primes;
    }
}

let n=100;
console.log(`Prime numbers till ${n} are:`, new Solution().printPrimes(n));
console.log(`Total count of prime numbers till ${n} is:`, new Solution().printPrimes(n).length);