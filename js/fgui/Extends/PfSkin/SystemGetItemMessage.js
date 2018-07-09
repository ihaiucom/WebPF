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
        var SystemGetItemMessage = /** @class */ (function (_super) {
            __extends(SystemGetItemMessage, _super);
            function SystemGetItemMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 获得物品消息,一个按钮
             * @param itemList 物品列表 :DTItemNum[];
             * @param title 标题
             * @param closeButtonVisiable 是否显示关闭按钮
             * @param buttonEnable 按钮是否可以点击
             * @param isClickButtonAutoClose 点击按钮后是否自动关闭
             */
            SystemGetItemMessage.prototype.open = function (itemList, title, autoCloseTime, closeButtonVisiable, buttonEnable, isClickButtonAutoClose) {
                var _this = this;
                if (title === void 0) { title = ""; }
                if (autoCloseTime === void 0) { autoCloseTime = 3; }
                if (closeButtonVisiable === void 0) { closeButtonVisiable = true; }
                if (buttonEnable === void 0) { buttonEnable = true; }
                if (isClickButtonAutoClose === void 0) { isClickButtonAutoClose = true; }
                this.items = itemList;
                if (isNullOrEmpty(title)) {
                    title = "";
                }
                this.isClickButtonAutoClose = isClickButtonAutoClose;
                // this.m_listItem.itemRenderer = new Handler(this, this.RenderItem, null, false);
                // this.m_listItem.numItems = this.items.length;
                // this.m_title.text = title;
                // this.m_bgCom.m_closeBtn.enabled = buttonEnable;
                // this.m_bgCom.m_closeBtn.visible = closeButtonVisiable;
                // this.m_bgCom.m_closeBtn.onClick(this, this.close);
                // this.m_closeBtn.enabled = buttonEnable;
                // this.m_closeBtn.visible = closeButtonVisiable;
                // this.m_closeBtn.onClick(this, this.close);
                Games.MenuLayer.showDialogModel();
                Games.MenuLayer.dialog.addChild(this);
                this.m_tOpen.play();
                if (autoCloseTime > 0) {
                    setTimeout(function () { _this.close(); }, autoCloseTime * 100);
                }
            };
            SystemGetItemMessage.prototype.RenderItem = function (index, obj) {
                var data = this.items[index];
                obj.title = data.itemNum.toString();
                obj.icon = Game.moduleModel.item.getItem(data.itemId).itemIconUrl;
            };
            SystemGetItemMessage.prototype.close = function () {
                Games.MenuLayer.hideDialogModel();
                // this.m_t1.play(Handler.create(this, this.onHide));
                this.onHide();
            };
            SystemGetItemMessage.prototype.onHide = function () {
                this.removeFromParent();
            };
            return SystemGetItemMessage;
        }(PfSkin.SystemGetItemMessageStruct));
        PfSkin.SystemGetItemMessage = SystemGetItemMessage;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemGetItemMessage.js.map