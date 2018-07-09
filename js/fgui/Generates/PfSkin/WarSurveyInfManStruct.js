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
        var WarSurveyInfManStruct = /** @class */ (function (_super) {
            __extends(WarSurveyInfManStruct, _super);
            function WarSurveyInfManStruct() {
                return _super.call(this) || this;
            }
            WarSurveyInfManStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarSurveyInfMan"));
            };
            WarSurveyInfManStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_sex = (this.getChild("sex"));
                this.m_title = (this.getChild("title"));
            };
            WarSurveyInfManStruct.URL = "ui://s33x8418znuj1f1";
            WarSurveyInfManStruct.DependPackages = ["PfSkin"];
            return WarSurveyInfManStruct;
        }(fairygui.GLabel));
        PfSkin.WarSurveyInfManStruct = WarSurveyInfManStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSurveyInfManStruct.js.map