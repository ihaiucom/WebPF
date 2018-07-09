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
    var ActorTrainConfigReaderStruct = /** @class */ (function (_super) {
        __extends(ActorTrainConfigReaderStruct, _super);
        function ActorTrainConfigReaderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "ActorTrain";
            return _this;
        }
        ActorTrainConfigReaderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.ActorTrainConfig();
            config.id = csvGetInt(csv, this.GetHeadIndex("id"));
            config.train_num = csvGetInt(csv, this.GetHeadIndex("train_num"));
            config.train_type = csvGetInt(csv, this.GetHeadIndex("train_type"));
            config.en_name = csvGetString(csv, this.GetHeadIndex("en_name"));
            config.cost = configs.DTItemNum.parseArray(csvGetString(csv, this.GetHeadIndex("cost")));
            config.property = toIntArray(csvGetString(csv, this.GetHeadIndex("property")));
            config.property_interval = configs.DTRandomInterval.parseArray(csvGetString(csv, this.GetHeadIndex("property_interval")));
            config.scene_name = csvGetString(csv, this.GetHeadIndex("scene_name"));
            config.action = csvGetInt(csv, this.GetHeadIndex("action"));
            config.cn_tips = csvGetString(csv, this.GetHeadIndex("cn_tips"));
            this.addConfig(config);
        };
        return ActorTrainConfigReaderStruct;
    }(configs.CsvConfigRender));
    configs.ActorTrainConfigReaderStruct = ActorTrainConfigReaderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=ActorTrainConfigReaderStruct.js.map