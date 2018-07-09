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
    var BlackSkin;
    (function (BlackSkin) {
        var IconButtonStruct = /** @class */ (function (_super) {
            __extends(IconButtonStruct, _super);
            function IconButtonStruct() {
                return _super.call(this) || this;
            }
            IconButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("BlackSkin", "IconButton"));
            };
            IconButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
            };
            IconButtonStruct.URL = "ui://s1uxc7tgjmop5";
            IconButtonStruct.DependPackages = ["BlackSkin"];
            return IconButtonStruct;
        }(fairygui.GButton));
        BlackSkin.IconButtonStruct = IconButtonStruct;
    })(BlackSkin = fgui.BlackSkin || (fgui.BlackSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=IconButtonStruct.js.map