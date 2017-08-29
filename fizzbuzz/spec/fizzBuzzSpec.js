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

});