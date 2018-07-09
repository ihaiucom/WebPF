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
        var SkillCellStruct = /** @class */ (function (_super) {
            __extends(SkillCellStruct, _super);
            function SkillCellStruct() {
                return _super.call(this) || this;
            }
            SkillCellStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "SkillCell"));
            };
            SkillCellStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            SkillCellStruct.URL = "ui://s33x8418jazc1mq";
            SkillCellStruct.DependPackages = ["PfSkin"];
            return SkillCellStruct;
        }(fairygui.GComponent));
        PfSkin.SkillCellStruct = SkillCellStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SkillCellStruct.js.map