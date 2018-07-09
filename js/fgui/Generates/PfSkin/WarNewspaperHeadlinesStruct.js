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
        var WarNewspaperHeadlinesStruct = /** @class */ (function (_super) {
            __extends(WarNewspaperHeadlinesStruct, _super);
            function WarNewspaperHeadlinesStruct() {
                return _super.call(this) || this;
            }
            WarNewspaperHeadlinesStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarNewspaperHeadlines"));
            };
            WarNewspaperHeadlinesStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_title = (this.getChild("title"));
            };
            WarNewspaperHeadlinesStruct.URL = "ui://s33x8418pvrg1ib";
            WarNewspaperHeadlinesStruct.DependPackages = ["PfSkin"];
            return WarNewspaperHeadlinesStruct;
        }(fairygui.GComponent));
        PfSkin.WarNewspaperHeadlinesStruct = WarNewspaperHeadlinesStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNewspaperHeadlinesStruct.js.map