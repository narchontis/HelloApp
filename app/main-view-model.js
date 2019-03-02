"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloAppModel = /** @class */ (function (_super) {
    __extends(HelloAppModel, _super);
    function HelloAppModel() {
        var _this = _super.call(this) || this;
        _this.counter = 42;
        _this.set("message", _this.counter + " taps left");
        return _this;
    }
    HelloAppModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    };
    return HelloAppModel;
}(observable_1.Observable));
exports.default = HelloAppModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsOENBQTZDO0FBRTdDO0lBQTRCLGlDQUFVO0lBSXBDO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBRkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLCtEQUErRCxDQUFDLENBQUM7U0FDeEY7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbkJELENBQTRCLHVCQUFVLEdBbUJyQztBQUVELGtCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmNsYXNzIEhlbGxvQXBwTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICBjb3VudGVyOiBudW1iZXI7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5jb3VudGVyID0gNDI7XHJcbiAgICAgIHRoaXMuc2V0KFwibWVzc2FnZVwiLCB0aGlzLmNvdW50ZXIgKyBcIiB0YXBzIGxlZnRcIik7XHJcbiAgfVxyXG5cclxuICB0YXBBY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXItLTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgIHRoaXMuc2V0KFwibWVzc2FnZVwiLCBcIkhvb3JyYWFheSEgWW91IHVubG9ja2VkIHRoZSBOYXRpdmVTY3JpcHQgY2xpY2tlciBhY2hpZXZlbWVudCFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0KFwibWVzc2FnZVwiLCB0aGlzLmNvdW50ZXIgKyBcIiB0YXBzIGxlZnRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWxsb0FwcE1vZGVsO1xyXG4iXX0=