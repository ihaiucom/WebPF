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
    var RandomSurnameConfigReaderStruct = /** @class */ (function (_super) {
        __extends(RandomSurnameConfigReaderStruct, _super);
        function RandomSurnameConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "RandomSurname";
            return _this;
        }
        RandomSurnameConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.RandomSurnameConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.text = csvGetString(csv, this.GetHeadIndex("text"));
            this.addConfig(config);
        };
        return RandomSurnameConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.RandomSurnameConfigReaderStruct = RandomSurnameConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=RandomSurnameConfigReaderStruct.js.map