/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var configs;
(function (configs) {
    var GlobalConfigReader = /** @class */ (function (_super) {
        __extends(GlobalConfigReader, _super);
        function GlobalConfigReader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 配置字典
            _this.configsByKey = new Dictionary();
            return _this;
        }
        GlobalConfigReader.prototype.onGameLoadedAll = function () {
            _super.prototype.onGameLoadedAll.call(this);
            var list = this.configs.getValues();
            for (var i = 0; i < list.length; i++) {
                var key = list[i].key;
                if (isNullOrEmpty(key)) {
                    key = list[i].id;
                }
                this.configsByKey.add(key, list[i]);
            }
        };
        GlobalConfigReader.prototype.getConfig = function (key) {
            if (!this.configsByKey.hasKey(key)) {
                console.log(this.path + " \u6CA1\u6709 key=" + key + " \u7684\u914D\u7F6E");
            }
            return this.configsByKey.getValue(key);
        };
        // 生成KEY 代码
        GlobalConfigReader.prototype.outKeyCode = function () {
            console.log("");
            console.log("class GlobalKey");
            console.log("{");
            var list = this.configsByKey.getValues();
            for (var i = 0; i < list.length; i++) {
                var key = list[i].key;
                var val = key;
                if (isNullOrEmpty(key)) {
                    key = "KEY_" + list[i].id;
                    val = list[i].id;
                }
                else {
                    key = key.replace("-", "_");
                }
                console.log("\tstatic " + key + " = \"" + val + "\";");
            }
            console.log("}");
            console.log("");
            console.log("");
        };
        return GlobalConfigReader;
    }(configs.GlobalConfigReaderStruct));
    configs.GlobalConfigReader = GlobalConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=GlobalConfigReader.js.map