/**
 * Created by im on 3/13/17.
 */

module.exports = function (input, silence) {
    var validRegEx = /^(\d+\.)?(\d+\.)?(\*|\d+)$/,
        ver = input.replace(/[^\d\.]/g, ""),
        dots = ver.split('.').length - 1;

    while (dots < 2) {
        ver += ".0";
        dots++;
    }

    if (!ver.match(validRegEx)) {
        if (!silence) console.error('Version is not valid - '+ver);
        return null;
    }

    return ver;
};