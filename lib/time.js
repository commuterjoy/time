
// http://requirejs.org/docs/node.html#nodeModules
if (typeof define !== 'function') {
        var define = require('amdefine')(module);
}

define(function (require, exports, module) {

    Number.prototype.second = function () {
        return 60 * 100;
    }

    Number.prototype.seconds = function () {
        return this * 1000;
    }

});
