let assert = chai.assert;
let expect = chai.expect;
let sould = chai.should();
describe("describe", function() {
    it('test', function(){
        assert.isFalse(validateEmail('2'), ' number 2');
      })})

 


describe("validateEmail", function() {
   
    it('it not empty string', function() {
        assert.equal(validateEmail(''), false);
      });
    it('typeof string', function() {
        assert.equal(validateEmail(222), false, 'number error');
           assert.equal(validateEmail(true), false, 'boolean error');
           assert.equal(validateEmail({}), false, 'object error');
       });
       it('it not empty string', function() {
        assert.equal(validateEmail('     '), false);
      });
   
})     
describe('valid data', function () {
        it('Dot before @: \'.@\' and haven\'t dot after domain: \'gmailcom\'', function () {
        assert.isFalse(validateEmail('emai @l.@gmailcom'), 'wrong with dot \',@\' or after domain')
    })
      it('Don\'t have more of one @', function () {
        assert.isFalse(validateEmail('@@'), 'more of one @');
    })
    it('Don\'t have the @ or @ the first character', function () {
        assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
        assert.isFalse(validateEmail('@emailgmail.@com'), '@ the first character')
    })
  

})

