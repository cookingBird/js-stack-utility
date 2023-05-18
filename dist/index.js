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
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stack = void 0;
    var Stack = (function () {
        function Stack() {
        }
        return Stack;
    }());
    exports.Stack = Stack;
     | undefined > (_a = {
            isBlocked: boolean = true,
            waiters: Resolver < T | undefined > []
        },
        _a[] = ,
        _a.payload = T | undefined,
        _a.ready = function () {
            var _this = this;
            return new Promise(function (resolve) {
                if (!_this.isBlocked) {
                    resolve(_this.payload);
                }
                else {
                    _this.waiters.push(resolve);
                }
            });
        },
        _a.setReady = function (param) {
            this.isBlocked = false;
            this.payload = param;
            if (this.waiters.length === 0)
                return;
            while (this.waiters.length) {
                var waiter = this.waiters.shift();
                waiter(param);
            }
        },
        _a.setBlock = function () {
            this.isBlocked = true;
        },
        _a);
    exports.default = Stack;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUNBO1FBQUE7UUFBcUIsQ0FBQyxBQUFGO1FBQUMsWUFBQztJQUFELENBQUMsQUFBRixBQUFwQixJQUFvQjtJQUFQLHNCQUFLO0lBQUcsQUFBRCxHQUFHLFNBQVM7WUFDdEIsU0FBUyxFQUFFLE9BQU8sR0FBRyxJQUFJO1lBQ3pCLE9BQU8sRUFBRSxRQUFRLEdBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBQyxFQUFFOztRQUFHLEdBQUMsSUFBQztRQUN2QyxVQUFPLEdBQUUsQ0FBQyxHQUFHLFNBQVM7UUFDOUIsUUFBSyxHQUFMO1lBQUEsaUJBUUM7WUFQQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBZ0M7Z0JBQ2xELElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixPQUFPLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxXQUFRLEdBQVIsVUFBUyxLQUFTO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUE2QixDQUFDO2dCQUMvRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDZjtRQUNILENBQUM7UUFDRCxXQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1dBQ0YsQ0FBQTtJQUVELGtCQUFlLEtBQUssQ0FBQyJ9