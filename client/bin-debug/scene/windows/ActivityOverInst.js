var windowui;
(function (windowui) {
    /**
     * 结算面板
     * Created by Administrator on 2015/12/23.
     */
    var ActivityOverInst = (function (_super) {
        __extends(ActivityOverInst, _super);
        function ActivityOverInst() {
            _super.call(this);
            this._infoSprite = null;
            this._btn_continue = null;
            this._whowintxt = null;
            this._isactover = false;
            this._btn_exit = null;
            this.createView();
        }
        var d = __define,c=ActivityOverInst;p=c.prototype;
        d(ActivityOverInst, "Instance"
            ,function () {
                if (ActivityOverInst._instance == null) {
                    ActivityOverInst._instance = new ActivityOverInst();
                }
                return ActivityOverInst._instance;
            }
        );
        d(p, "IsActOver"
            ,function () {
                return this._isactover;
            }
        );
        p.createView = function () {
            var bg = new egret.Bitmap(RES.getRes("ui_window_bg"));
            bg.scale9Grid = new egret.Rectangle(45, 135, 440, 20);
            this.addChild(bg);
            bg.height = 550;
            bg.touchEnabled = true;
            bg.x = 55;
            bg.y = 290;
            var bg = new egret.Bitmap(RES.getRes("ui_window_item2"));
            bg.scale9Grid = new egret.Rectangle(14, 14, 3, 28);
            this.addChild(bg);
            bg.width = 505;
            bg.touchEnabled = true;
            bg.x = 67;
            bg.y = 660 - 210;
            var bg = new egret.Bitmap(RES.getRes("ui_window_item2"));
            bg.scale9Grid = new egret.Rectangle(14, 14, 3, 28);
            this.addChild(bg);
            bg.width = 505;
            bg.touchEnabled = true;
            bg.x = 67;
            bg.y = 740 - 210;
            var bg = new egret.Bitmap(RES.getRes("ui_window_item2"));
            bg.scale9Grid = new egret.Rectangle(14, 14, 3, 28);
            this.addChild(bg);
            bg.width = 505;
            bg.touchEnabled = true;
            bg.x = 67;
            bg.y = 820 - 210;
            var titletxt = new egret.TextField();
            titletxt.x = 105;
            titletxt.y = 670 - 210;
            titletxt.size = 28;
            titletxt.textColor = 0xffffff;
            titletxt.text = "当前活动排名";
            titletxt.textAlign = egret.HorizontalAlign.LEFT;
            this.addChild(titletxt);
            var titletxt = new egret.TextField();
            titletxt.x = 105;
            titletxt.y = 750 - 210;
            titletxt.size = 28;
            titletxt.textColor = 0xffffff;
            titletxt.text = "当前活动积分";
            titletxt.textAlign = egret.HorizontalAlign.LEFT;
            this.addChild(titletxt);
            var titletxt = new egret.TextField();
            titletxt.x = 105;
            titletxt.y = 830 - 210;
            titletxt.size = 28;
            titletxt.textColor = 0xffffff;
            titletxt.text = "本次活动最高积分";
            titletxt.textAlign = egret.HorizontalAlign.LEFT;
            this.addChild(titletxt);
            var titletxt = new egret.TextField();
            titletxt.x = 67;
            titletxt.y = 310;
            titletxt.size = 28;
            titletxt.width = 505;
            titletxt.textColor = 0xa9d1ed;
            titletxt.text = "结算";
            titletxt.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(titletxt);
            this._whowintxt = new egret.TextField();
            this._whowintxt.x = 67;
            this._whowintxt.y = 378;
            this._whowintxt.size = 32;
            this._whowintxt.width = 505;
            this._whowintxt.textColor = 0xffffff;
            this._whowintxt.text = "活动结束";
            this._whowintxt.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this._whowintxt);
            this._btn_exit = new scene.SButton("btn_common3", null, "退出游戏");
            this.addChild(this._btn_exit);
            this._btn_exit.x = 78;
            this._btn_exit.y = 700;
            this._btn_exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        };
        p.onTouchTap = function (e) {
            if (e.currentTarget == this._btn_exit) {
                NativeMgr.Instance.ExitWindow();
            }
        };
        p.InitInfo = function (isactover, actrank, actHScore, actmoney) {
            this._isactover = isactover;
            if (this._infoSprite == null) {
                this._infoSprite = new egret.Sprite();
                this.addChild(this._infoSprite);
            }
            this._infoSprite.removeChildren();
            this._whowintxt.text = "活动结束";
            //活动排名
            var titletxt = new egret.TextField();
            titletxt.x = 360;
            titletxt.y = 670 - 210;
            titletxt.width = 190;
            titletxt.size = 28;
            titletxt.textColor = 0xe3b259;
            titletxt.text = "NO." + actrank;
            titletxt.textAlign = egret.HorizontalAlign.RIGHT;
            this._infoSprite.addChild(titletxt);
            //活动积分
            var titletxt = new egret.TextField();
            titletxt.x = 360;
            titletxt.y = 750 - 210;
            titletxt.width = 190;
            titletxt.size = 28;
            titletxt.textColor = 0xe3b259;
            titletxt.text = "" + actmoney;
            titletxt.textAlign = egret.HorizontalAlign.RIGHT;
            this._infoSprite.addChild(titletxt);
            //最高积分
            var titletxt = new egret.TextField();
            titletxt.x = 360;
            titletxt.y = 830 - 210;
            titletxt.width = 190;
            titletxt.size = 28;
            titletxt.textColor = 0xe3b259;
            titletxt.text = "" + actHScore;
            titletxt.textAlign = egret.HorizontalAlign.RIGHT;
            this._infoSprite.addChild(titletxt);
        };
        p.Show = function () {
            _super.prototype.Show.call(this);
            LayerMgr.Window.addChild(this);
            return;
        };
        p.Hide = function () {
            _super.prototype.Hide.call(this);
            if (this.parent) {
                this.parent.removeChild(this);
            }
        };
        ActivityOverInst._instance = null;
        return ActivityOverInst;
    })(windowui.WindowsBase);
    windowui.ActivityOverInst = ActivityOverInst;
    egret.registerClass(ActivityOverInst,"windowui.ActivityOverInst");
})(windowui || (windowui = {}));
