//Add function
describe('infoVal', function (){
    
    //Positive Tests
    it('should return no value for the fields after being ran', function (){
        $('#gain').trigger('click');
        expect($('#na').val()).to.equal('');
        expect($('#on').val()).to.equal('');
        expect($('#phn').val()).to.equal('');
    });
    it('should return a string', function () {
        $('#gain').trigger('click');
        $('#na').val().should.be.a('string');
    });

    //Negative Tests
    it('should not return a value after the function is ran ',function (){ 
        $('#gain').trigger('click');
        expect($('#na').val()).to.not.equal('halo');
    });
    it('should not return a number for the phone number', function () {
        $('#gain').trigger('click');
        $('#phn').val().should.not.be.a('number');
    });
})