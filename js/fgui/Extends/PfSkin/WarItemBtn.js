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
        var WarItemBtn = /** @class */ (function (_super) {
            __extends(WarItemBtn, _super);
            function WarItemBtn() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarItemBtn.prototype.setData = function (index) {
                var itemDesc = Game.moduleModel.warData.dropList[index];
                this.m_title.text = itemDesc.amount.toFixed(0);
                var config = Game.config.item.getConfig(itemDesc.itemId);
                this.m_icon.icon = Game.config.avatar.getConfig(config.icon).iconUrl;
            };
            return WarItemBtn;
        }(PfSkin.WarItemBtnStruct));
        PfSkin.WarItemBtn = WarItemBtn;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarItemBtn.js.map