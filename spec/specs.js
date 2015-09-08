describe('triangle', function() {

  // it('determines if it is a isosceles', function() {
  //   expect(triangle(6, 6, 10)).to.equal("isosceles");
  // });

  it('determines if it is not a triangle', function() {
    expect(triangle(2, 2, 8)).to.equal("not a triangle");
  });

  it('determines if it is equilateral', function() {
    expect(triangle(5, 5, 5)).to.equal("equilateral");
  });

});
