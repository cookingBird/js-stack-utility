var Stack = (function () {
    function Stack() {
        this.isBlocked = true;
        this.waiters = [];
    }
    Stack.prototype.ready = function (param) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.isBlocked) {
                resolve(param);
            }
            else {
                _this.waiters.push(resolve);
            }
        });
    };
    Stack.prototype.setReady = function (param) {
        this.isBlocked = false;
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
export { Stack };
export default Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7SUFBQTtRQUNVLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFvQixFQUFFLENBQUM7SUFxQnhDLENBQUM7SUFwQkMscUJBQUssR0FBTCxVQUFTLEtBQVM7UUFBbEIsaUJBUUM7UUFQQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBb0I7WUFDdEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdCQUFRLEdBQVIsVUFBWSxLQUFTO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBaUIsQ0FBQztZQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7SUFDRCx3QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOztBQUVELGVBQWUsS0FBSyxDQUFDIn0=