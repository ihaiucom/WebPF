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
        var LabItem_littleStruct = /** @class */ (function (_super) {
            __extends(LabItem_littleStruct, _super);
            function LabItem_littleStruct() {
                return _super.call(this) || this;
            }
            LabItem_littleStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LabItem_little"));
            };
            LabItem_littleStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_trColor = this.getController("trColor");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            LabItem_littleStruct.URL = "ui://s33x8418j6cs1n9";
            LabItem_littleStruct.DependPackages = ["PfSkin"];
            return LabItem_littleStruct;
        }(fairygui.GLabel));
        PfSkin.LabItem_littleStruct = LabItem_littleStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_littleStruct.js.map