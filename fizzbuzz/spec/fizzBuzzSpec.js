describe("FizzBuzz", function() {


    it('should "fizz" at 3', function() {
        expect(fizzbuzz(3)).toEqual('fizz');
    });

    it('should "buzz" at 5', function() {
        expect(fizzbuzz(5)).toEqual('buzz');
    });

    it('should "fizzbuzz" at 15', function() {
        expect(fizzbuzz(15)).toEqual('fizzbuzz');
    });

    it('should "fizzbuzz" at 30', function() {
        expect(fizzbuzz(30)).toEqual('fizzbuzz');
    });

    it('should return the number otherwise', function() {
        expect(fizzbuzz(4)).toEqual(4);
    });

});
