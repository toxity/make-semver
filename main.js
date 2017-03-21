/**
 * Created by im on 3/13/17.
 */
module.exports = function (input, silence) {
    var resultRegEx = /^((\d+\.)?(\d+\.)?(\*|\d+)((-[a-z]*)?(.\d+)?)?)$/,
        match = input.match(/(\d+\.)?(\d+\.)?(\d+)((-[a-z]+\.\d)|(-[a-z]+))?/),
        result = input, dots;

    if (match !== null) {
        result = match[0];
        dots = result.split('.').length - 1;

        while (dots++ < 2) result += ".0";
    }
    if (!result.match(resultRegEx)) {
        if (!silence) console.error('Input version is not valid - '+input);
        return null;
    }
    return result;
};