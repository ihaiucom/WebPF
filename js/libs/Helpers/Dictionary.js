var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.dict = {};
        this._count = 0;
    }
    Object.defineProperty(Dictionary.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Dictionary.prototype.add = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
        }
        this.dict[key] = val;
    };
    Dictionary.prototype.remove = function (key) {
        this.dict[key] = undefined;
        this._count--;
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.dict[key] != undefined;
    };
    Dictionary.prototype.getValue = function (key) {
        return this.dict[key];
    };
    Dictionary.prototype.getValues = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(this.dict[key]);
        }
        return list;
    };
    Dictionary.prototype.getKeys = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(key);
        }
        return list;
    };
    Dictionary.prototype.clear = function () {
        this.dict = {};
        this._count = 0;
    };
    return Dictionary;
}());
//# sourceMappingURL=Dictionary.js.map