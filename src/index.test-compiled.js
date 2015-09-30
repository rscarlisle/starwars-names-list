'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

describe('starWars-names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      (0, _chai.expect)(_index2['default'].all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain "Luke Skywalker"', function () {
      (0, _chai.expect)(_index2['default'].all).to.include('Luke Skywalker');
    });
  });

  describe('random', function () {
    it('should return a random item from the starWars.all', function () {
      var randomItem = _index2['default'].random();
      (0, _chai.expect)(_index2['default'].all).to.include(randomItem);
    });

    it('should return an array of random items if passed', function () {
      var randomItems = _index2['default'].random(3);
      (0, _chai.expect)(randomItems).to.have.length(3);
      randomItems.forEach(function (item) {
        (0, _chai.expect)(_index2['default'].all).to.include(item);
      });
    });
  });
});

//# sourceMappingURL=index.test-compiled.js.map