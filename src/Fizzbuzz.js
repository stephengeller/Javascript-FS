fizzbuzz = function(n) {
    if (n % 15 === 0) {
        return 'fizzbuzz'
    }else if (n % 3 === 0) {
        return 'fizz'
    }else if (n % 5 === 0) {
        return 'buzz'
    }else{
        return n
    }
}

for(var i=0; i < 100; i++) {console.log(fizzbuzz(i))}

