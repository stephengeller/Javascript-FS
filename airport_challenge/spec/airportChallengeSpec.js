describe("Airport", function() {
    beforeEach(function() {
        airport = new Airport();
    });


    it('should land a plane', function() {
        expect(airport.land("Concorde 572")).toEqual('Concorde 572 has landed');
    });

    it('should land a plane', function() {
        airport.land("Concorde 572");
        expect(airport.hanger).toContain('Concorde 572');
    });

    it('should takeoff planes', function() {
        airport.land("Concorde 572");
        airport.takeoff("Concorde 572");
        expect(airport.hanger).not.toContain('Concorde 572');
    });


    // it('should "buzz" at 5', function() {
    //     expect(fizzbuzz(5)).toEqual('buzz');
    // });
    //
    // it('should "fizzbuzz" at 15', function() {
    //     expect(fizzbuzz(15)).toEqual('fizzbuzz');
    // });

});
