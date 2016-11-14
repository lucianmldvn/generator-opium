'use strict';

var path = require('path');
var fs = require('fs');

function Helpers() {
    this.Markers = {
        API_ROUTE_MARKER: "// endregion API routes"
    };
}

Helpers.prototype.AddLineToFile = function (filename, lineToAdd, beforeMarker, spacing) {
    try {
        var fullPath = path.join(process.cwd(), filename);
        var fileSrc = fs.readFileSync(fullPath, 'utf8');
        var beforeMarkerIndex = fileSrc.indexOf(beforeMarker);
        if (fileSrc.indexOf(lineToAdd) < 0) {
            fileSrc = fileSrc.substring(0, beforeMarkerIndex) + lineToAdd + "\n" + spacing + fileSrc.substring(beforeMarkerIndex);
            fs.writeFileSync(fullPath, fileSrc);
        }
    } catch (e) {
        throw e;
    }
};

module.exports = new Helpers();