(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stack = void 0;
    var Stack = (function () {
        function Stack() {
            this.isBlocked = true;
            this.waiters = [];
        }
        Stack.prototype.ready = function () {
            var _this = this;
            return new Promise(function (resolve) {
                if (!_this.isBlocked) {
                    resolve(_this.payload);
                }
                else {
                    _this.waiters.push(resolve);
                }
            });
        };
        Stack.prototype.setReady = function (param) {
            this.isBlocked = false;
            this.payload = param;
            if (this.waiters.length === 0)
                return;
            while (this.waiters.length) {
                var waiter = this.waiters.shift();
                waiter(param);
            }
        };
        Stack.prototype.setBlock = function () {
            this.isBlocked = true;
        };
        return Stack;
    }());
    exports.Stack = Stack;
    exports.default = Stack;
});
