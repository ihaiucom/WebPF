/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
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
var fgui;
(function (fgui) {
    var PfSkin;
    (function (PfSkin) {
        var ProgressBarPurpleStruct = /** @class */ (function (_super) {
            __extends(ProgressBarPurpleStruct, _super);
            function ProgressBarPurpleStruct() {
                return _super.call(this) || this;
            }
            ProgressBarPurpleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ProgressBarPurple"));
            };
            ProgressBarPurpleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            ProgressBarPurpleStruct.URL = "ui://s33x8418jazc1ml";
            ProgressBarPurpleStruct.DependPackages = ["PfSkin"];
            return ProgressBarPurpleStruct;
        }(fairygui.GProgressBar));
        PfSkin.ProgressBarPurpleStruct = ProgressBarPurpleStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBarPurpleStruct.js.map