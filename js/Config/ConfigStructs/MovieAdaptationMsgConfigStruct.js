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
    var MovieAdaptationMsgConfigStruct = /** @class */ (function (_super) {
        __extends(MovieAdaptationMsgConfigStruct, _super);
        function MovieAdaptationMsgConfigStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MovieAdaptationMsgConfigStruct.prototype, "msg", {
            get: function () {
                return this.zh_cn_msg;
            },
            enumerable: true,
            configurable: true
        });
        return MovieAdaptationMsgConfigStruct;
    }(configs.BaseConfig));
    configs.MovieAdaptationMsgConfigStruct = MovieAdaptationMsgConfigStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MovieAdaptationMsgConfigStruct.js.map