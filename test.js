var assert = require('assert'),
    semver = require('semver'),
    makeSemver = require('./main');

describe('make-semver', function() {
    var validDataSet = ['1', '1.0', '1.0.0'],
        invalidDataSet = ['Test', '@%^$#@'];

    it('should convert numbers to semver', function() {
        for (var i = 0; i < validDataSet.length; i++) {
            assert.notEqual(semver.valid(makeSemver(validDataSet[i])), null);
        }
    });

    it ('should error on invalid input', function () {
        for (var i = 0; i < invalidDataSet.length; i++) {
            assert.equal(makeSemver(invalidDataSet[i], true), null);
        }
    })
});
