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
        var CommonBtn2Struct = /** @class */ (function (_super) {
            __extends(CommonBtn2Struct, _super);
            function CommonBtn2Struct() {
                return _super.call(this) || this;
            }
            CommonBtn2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "CommonBtn2"));
            };
            CommonBtn2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            CommonBtn2Struct.URL = "ui://s33x8418jazc1md";
            CommonBtn2Struct.DependPackages = ["PfSkin"];
            return CommonBtn2Struct;
        }(fairygui.GButton));
        PfSkin.CommonBtn2Struct = CommonBtn2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonBtn2Struct.js.map