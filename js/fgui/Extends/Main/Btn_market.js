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
    var Main;
    (function (Main) {
        var Btn_market = /** @class */ (function (_super) {
            __extends(Btn_market, _super);
            function Btn_market() {
                var _this = _super.call(this) || this;
                _this.onClick(_this, function () {
                    Game.menu.open(MenuId.Market);
                });
                return _this;
            }
            return Btn_market;
        }(Main.Btn_marketStruct));
        Main.Btn_market = Btn_market;
    })(Main = fgui.Main || (fgui.Main = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_market.js.map