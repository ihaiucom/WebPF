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
    var System;
    (function (System) {
        var GMLanuchButtonStruct = /** @class */ (function (_super) {
            __extends(GMLanuchButtonStruct, _super);
            function GMLanuchButtonStruct() {
                return _super.call(this) || this;
            }
            GMLanuchButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "GMLanuchButton"));
            };
            GMLanuchButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            GMLanuchButtonStruct.URL = "ui://fiza9hgrj5ra14";
            GMLanuchButtonStruct.DependPackages = ["System"];
            return GMLanuchButtonStruct;
        }(fairygui.GButton));
        System.GMLanuchButtonStruct = GMLanuchButtonStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMLanuchButtonStruct.js.map