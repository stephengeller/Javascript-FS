describe("Airport", function() {


    it('should land a plane', function() {
        var airport = new Airport();
        expect(airport.land("Concorde 572")).toEqual('Concorde 572 has landed');
    });


    it('should allow planes to depart', function() {
        var airport = new Airport();
        expect(airport.depart("Concorde 572")).toEqual('Concorde 572 has departed');
    });




    // it('should "buzz" at 5', function() {
    //     expect(fizzbuzz(5)).toEqual('buzz');
    // });
    //
    // it('should "fizzbuzz" at 15', function() {
    //     expect(fizzbuzz(15)).toEqual('fizzbuzz');
    // });

});
