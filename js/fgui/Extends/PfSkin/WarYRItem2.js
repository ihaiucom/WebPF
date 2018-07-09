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
        var WarYRItem2 = /** @class */ (function (_super) {
            __extends(WarYRItem2, _super);
            function WarYRItem2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRItem2.prototype.setData = function (data, index) {
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starList.numItems = data.star;
                this.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
            };
            return WarYRItem2;
        }(PfSkin.WarYRItem2Struct));
        PfSkin.WarYRItem2 = WarYRItem2;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRItem2.js.map