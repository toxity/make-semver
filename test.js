var assert = require('assert'),
    semver = require('semver'),
    makeSemver = require('./main');

describe('make-semver', function() {
    var validDataSet = [
            '1', '1.', '1.*',
            '1.0', '1.0-',
            '1.0.1', '1.0.1.', '1.0.1-',
            '1.2.1-beta', '1.2.1-beta.', '1.2.1-beta.0', '1.2.1-beta.0-1',
            '1.0.1.1', '1.0.1.1.1.2.',
            'v2', 'v=2.2', ">1", ">=1.2.3"
        ],
        invalidDataSet = ['TextWithoutNumber', '@%^$#@'],
        weirdDataSet = ['4ever', 'my height is 180sm', 'IamThe1whoKnocks'];


    it('should convert numbers to semver', function() {
        for (var i = 0; i < validDataSet.length; i++) {
            assert.notEqual(semver.valid(makeSemver(validDataSet[i])), null);
        }
    });

    it ('should error on invalid input', function () {
        for (var i = 0; i < invalidDataSet.length; i++) {
            assert.equal(makeSemver(invalidDataSet[i], true), null);
        }
    });

    it ('should convert weird strings to semver', function () {
        for (var i = 0; i < weirdDataSet.length; i++) {
            assert.notEqual(makeSemver(weirdDataSet[i], true), null);
        }
    });

    //TODO implemnt
    it.skip('all semver types should work correct', function () {
        var metadata = ['1.0.0-alpha+001', '1.0.0+20130313144700', '1.0.0-beta+exp.sha.5114f85'];
        var preReleases = ['1.0.0-0.3.7', '1.0.0-x.7.z.92'];
    })
});
