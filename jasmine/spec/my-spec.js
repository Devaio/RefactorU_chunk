describe('CHUNK', function() {
 it('should return even sized chunks', function() {
    var input = [1,2,3,4,5,6,7,8,9,10]
  expect(chunk(input, 2)).toEqual([[1,2,3,4,5], [6,7,8,9,10]])
 });
});

describe('CHUNK uneven3', function() {
 it('should return even sized chunks with extras toward the beginning - 3 chunks', function() {
    var input = [1,2,3,4,5,6,7,8,9,10]
  expect(chunk(input, 3)).toEqual([ [1,2,3,4], [5,6,7], [8,9,10] ]);
 });
});

describe('CHUNK uneven7', function() {
 it('should return even sized chunks with extras toward the beginning - 7 chunks ', function() {
    var input = [1,2,3,4,5,6,7,8,9,10]
  expect(chunk(input, 7)).toEqual([ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]);
 });
});

describe('CHUNK uneven9', function() {
 it('should return even sized chunks with extras toward the beginning - 9 chunks', function() {
    var input = [1,2,3,4,5,6,7,8,9,10]
  expect(chunk(input, 9)).toEqual([ [1,2],[3],[4],[5],[6],[7],[8],[9],[10] ]);
 });
});