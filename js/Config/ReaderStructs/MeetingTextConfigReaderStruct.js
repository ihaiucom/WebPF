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
    var MeetingTextConfigReaderStruct = /** @class */ (function (_super) {
        __extends(MeetingTextConfigReaderStruct, _super);
        function MeetingTextConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "MeetingText";
            return _this;
        }
        MeetingTextConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MeetingTextConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.key = csvGetString(csv, this.GetHeadIndex("key"));
            config.zh_cn_text = csvGetString(csv, this.GetHeadIndex("zh_cn_text"));
            config.cn = csvGetString(csv, this.GetHeadIndex("cn"));
            this.addConfig(config);
        };
        return MeetingTextConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.MeetingTextConfigReaderStruct = MeetingTextConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MeetingTextConfigReaderStruct.js.map