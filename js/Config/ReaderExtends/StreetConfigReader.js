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
    var StreetConfigReader = /** @class */ (function (_super) {
        __extends(StreetConfigReader, _super);
        function StreetConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StreetConfigReader.prototype.GetRequire = function (id) {
            var cfg = this.getConfig(id);
            var list = [];
            if (cfg.spokesperson_sex != 0)
                list.push({ type: Games.ActorRequireEnum.sex, value: cfg.spokesperson_sex });
            if (cfg.spokesperson_age != 0)
                list.push({ type: Games.ActorRequireEnum.age, value: cfg.spokesperson_age });
            if (cfg.spokesperson_Continents != 0)
                list.push({ type: Games.ActorRequireEnum.Continents, value: cfg.spokesperson_Continents });
            if (cfg.spokesperson_type != 0)
                list.push({ type: Games.ActorRequireEnum.type, value: cfg.spokesperson_type });
            if (cfg.spokesperson_art != 0)
                list.push({ type: Games.ActorRequireEnum.art, value: cfg.spokesperson_art });
            if (cfg.spokesperson_entertainment != 0)
                list.push({ type: Games.ActorRequireEnum.entertainment, value: cfg.spokesperson_entertainment });
            if (cfg.spokesperson_performance != 0)
                list.push({ type: Games.ActorRequireEnum.performance, value: cfg.spokesperson_performance });
            if (cfg.spokesperson_plot != 0)
                list.push({ type: Games.ActorRequireEnum.plot, value: cfg.spokesperson_plot });
            if (cfg.spokesperson_scene != 0)
                list.push({ type: Games.ActorRequireEnum.scene, value: cfg.spokesperson_scene });
            return list;
        };
        return StreetConfigReader;
    }(configs.StreetConfigReaderStruct));
    configs.StreetConfigReader = StreetConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=StreetConfigReader.js.map