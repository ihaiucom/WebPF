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
        var ArtistTrainAttrUpItemStruct = /** @class */ (function (_super) {
            __extends(ArtistTrainAttrUpItemStruct, _super);
            function ArtistTrainAttrUpItemStruct() {
                return _super.call(this) || this;
            }
            ArtistTrainAttrUpItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistTrainAttrUpItem"));
            };
            ArtistTrainAttrUpItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            ArtistTrainAttrUpItemStruct.URL = "ui://s33x8418jazc1m5";
            ArtistTrainAttrUpItemStruct.DependPackages = ["PfSkin"];
            return ArtistTrainAttrUpItemStruct;
        }(fairygui.GButton));
        PfSkin.ArtistTrainAttrUpItemStruct = ArtistTrainAttrUpItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainAttrUpItemStruct.js.map