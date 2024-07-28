// In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.

const sieveOfEratosthenes = (n) => {
    let primes = Array(n + 1).fill(true);  // Assume all numbers in array are prime
    primes[0] = primes[1] = false;         // Except for 0 and 1
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;         // Mark factors non-prime
            }
        }
    }
    console.log(primes)
    // return primes.reduce((acc, isPrime, index) => {
    //     if (isPrime) acc.push(index);
    //     return acc;
    // }, []);

}

sieveOfEratosthenes(100)
