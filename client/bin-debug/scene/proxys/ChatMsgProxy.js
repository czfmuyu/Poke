/**
 * 控制卡牌显示等规则
 * Created by Administrator on 2015/12/19.
 */
var scene;
(function (scene) {
    var ChatMsgProxy = (function () {
        function ChatMsgProxy() {
            this._bg_1 = null;
            this._bg_2 = null;
            this._bg_3 = null;
            this._chat_1 = null;
            this._chat_2 = null;
            this._chat_3 = null;
            this._txt_1 = null;
            this._txt_2 = null;
            this._txt_3 = null;
            this._face_1 = null;
            this._face_2 = null;
            this._face_3 = null;
            this._gameScene = null;
        }
        var d = __define,c=ChatMsgProxy;p=c.prototype;
        p.Init = function (gs) {
            this._gameScene = gs;
            this._gameScene.touchChildren = false;
            this._gameScene.touchEnabled = false;
            this._chat_1 = new egret.Sprite();
            this._chat_2 = new egret.Sprite();
            this._chat_3 = new egret.Sprite();
            this._bg_1 = new egret.Bitmap(RES.getRes("ui_chat_left"));
            this._bg_1.scale9Grid = new egret.Rectangle(95, 34, 200, 10);
            this._chat_1.addChild(this._bg_1);
            this._bg_2 = new egret.Bitmap(RES.getRes("ui_chat_right"));
            this._bg_2.scale9Grid = new egret.Rectangle(95, 34, 200, 10);
            this._chat_2.addChild(this._bg_2);
            this._bg_3 = new egret.Bitmap(RES.getRes("ui_chat_left"));
            this._bg_3.scale9Grid = new egret.Rectangle(95, 34, 200, 10);
            this._chat_3.addChild(this._bg_3);
            var txt = new egret.TextField();
            txt.textAlign = egret.HorizontalAlign.CENTER;
            txt.x = 28;
            txt.y = 18;
            txt.textColor = 0x804813;
            this._chat_1.addChild(txt);
            this._txt_1 = txt;
            var txt = new egret.TextField();
            txt.textAlign = egret.HorizontalAlign.CENTER;
            txt.x = 8;
            txt.y = 18;
            txt.textColor = 0x804813;
            this._chat_2.addChild(txt);
            this._txt_2 = txt;
            var txt = new egret.TextField();
            txt.textAlign = egret.HorizontalAlign.CENTER;
            txt.x = 28;
            txt.y = 18;
            txt.textColor = 0x804813;
            this._chat_3.addChild(txt);
            this._txt_3 = txt;
            this._face_1 = new egret.Sprite();
            this._face_2 = new egret.Sprite();
            this._face_3 = new egret.Sprite();
            this._gameScene.addChild(this._chat_1);
            this._gameScene.addChild(this._chat_2);
            this._gameScene.addChild(this._chat_3);
            this._gameScene.addChild(this._face_1);
            this._gameScene.addChild(this._face_2);
            this._gameScene.addChild(this._face_3);
            this._chat_1.x = 150;
            this._chat_1.y = 100;
            this._chat_2.x = 200;
            this._chat_2.y = 200;
            this._chat_3.x = 220;
            this._chat_3.y = 500;
            this._face_1.x = 150;
            this._face_1.y = 150;
            this._face_2.x = 320;
            this._face_2.y = 150;
            this._face_3.x = 220;
            this._face_3.y = 500;
            this._chat_1.visible = false;
            this._chat_2.visible = false;
            this._chat_3.visible = false;
            this._face_1.visible = false;
            this._face_2.visible = false;
            this._face_3.visible = false;
            this._chat_1.cacheAsBitmap = true;
            this._chat_2.cacheAsBitmap = true;
            this._chat_3.cacheAsBitmap = true;
            this._face_1.visible = false;
            this._face_2.visible = false;
            this._face_3.visible = false;
        };
        //public clearAll():void
        //{
        //    this._tableSprite_1.removeChildren();
        //    this._tableSprite_2.removeChildren();
        //    this._tableSprite_3.removeChildren();
        //}
        p.ShowTableCard = function (localtabel, txt) {
            if (txt.indexOf("ani_chat_") >= 0) {
                if (this["initface_" + localtabel]) {
                    this["initface_" + localtabel](txt);
                }
            }
            else {
                if (this["init_" + localtabel]) {
                    this["init_" + localtabel](txt);
                }
            }
        };
        p.init_1 = function (txt) {
            this._chat_1.visible = true;
            egret.Tween.removeTweens(this._chat_1);
            this._txt_1.text = txt;
            this._txt_1.width = 320;
            this._txt_1.width = this._txt_1.textWidth;
            if (this._txt_1.width > 280) {
                this._txt_1.width = 280;
            }
            else if (this._txt_1.width < 120) {
                this._txt_1.width = 120;
            }
            this._bg_1.width = this._txt_1.width + 80;
            this._bg_1.height = this._txt_1.height + 40;
            this._txt_1.x = this._bg_1.width - this._txt_1.width - 20;
            this._chat_1.x = 150;
            this._chat_1.y = 100;
            this._chat_1.alpha = 1;
            egret.Tween.get(this._chat_1).to({}, ChatMsgProxy.flyTime).call(function () {
                this._chat_1.visible = false;
            }, this);
        };
        p.init_2 = function (txt) {
            this._chat_2.visible = true;
            egret.Tween.removeTweens(this._chat_2);
            this._txt_2.text = txt;
            this._txt_2.width = 320;
            this._txt_2.width = this._txt_2.textWidth;
            if (this._txt_2.width > 280) {
                this._txt_2.width = 280;
            }
            else if (this._txt_2.width < 120) {
                this._txt_2.width = 120;
            }
            this._bg_2.width = this._txt_2.width + 80;
            this._bg_2.height = this._txt_2.height + 40;
            this._chat_2.x = 500 - this._bg_2.width;
            this._chat_2.y = 200;
            this._chat_2.alpha = 1;
            egret.Tween.get(this._chat_2).to({}, ChatMsgProxy.flyTime).call(function () {
                this._chat_2.visible = false;
            }, this);
        };
        p.init_3 = function (txt) {
            this._chat_3.visible = true;
            egret.Tween.removeTweens(this._chat_3);
            this._txt_3.text = txt;
            this._txt_3.width = 320;
            this._txt_3.width = this._txt_3.textWidth;
            if (this._txt_3.width > 280) {
                this._txt_3.width = 280;
            }
            else if (this._txt_3.width < 120) {
                this._txt_3.width = 120;
            }
            this._bg_3.width = this._txt_3.width + 80;
            this._bg_3.height = this._txt_3.height + 40;
            this._txt_3.x = this._bg_3.width - this._txt_3.width - 20;
            this._chat_3.x = Config.StageWidth / 2 - this._bg_3.width / 2;
            this._chat_3.y = 500;
            this._chat_3.alpha = 1;
            egret.Tween.get(this._chat_3).to({}, ChatMsgProxy.flyTime).call(function () {
                this._chat_3.visible = false;
            }, this);
        };
        p.initface_1 = function (txt) {
            this._face_1.visible = true;
            egret.Tween.removeTweens(this._face_1);
            this._face_1.removeChildren();
            this._face_1.x = 180;
            this._face_1.y = 150;
            this._face_1.alpha = 1;
            var mcDataFactory = new egret.MovieClipDataFactory(RES.getRes(txt + "_json"), RES.getRes(txt + "_png"));
            var mc1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("chat"));
            mc1.name = "chat_facemc1";
            this._face_1.addChild(mc1);
            mc1.play(10);
            egret.Tween.get(this._face_1).to({}, ChatMsgProxy.flyTime).call(function () {
                this._face_1.visible = false;
                this._face_1.removeChildren();
            }, this);
        };
        p.initface_2 = function (txt) {
            this._face_2.visible = true;
            egret.Tween.removeTweens(this._face_2);
            this._face_2.removeChildren();
            this._face_2.x = 380;
            this._face_2.y = 150;
            this._face_2.alpha = 1;
            var mcDataFactory = new egret.MovieClipDataFactory(RES.getRes(txt + "_json"), RES.getRes(txt + "_png"));
            var mc1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("chat"));
            mc1.name = "chat_facemc1";
            this._face_2.addChild(mc1);
            mc1.play(10);
            egret.Tween.get(this._face_2).to({}, ChatMsgProxy.flyTime).call(function () {
                this._face_2.visible = false;
                this._face_2.removeChildren();
            }, this);
        };
        p.initface_3 = function (txt) {
            this._face_3.visible = true;
            egret.Tween.removeTweens(this._face_3);
            this._face_3.removeChildren();
            this._face_3.x = 250;
            this._face_3.y = 500;
            this._face_3.alpha = 1;
            var mcDataFactory = new egret.MovieClipDataFactory(RES.getRes(txt + "_json"), RES.getRes(txt + "_png"));
            var mc1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("chat"));
            mc1.name = "chat_facemc1";
            this._face_3.addChild(mc1);
            mc1.play(10);
            egret.Tween.get(this._face_3).to({}, ChatMsgProxy.flyTime).call(function () {
                this._face_3.visible = false;
                this._face_3.removeChildren();
            }, this);
        };
        ChatMsgProxy.flyTime = 3500;
        return ChatMsgProxy;
    })();
    scene.ChatMsgProxy = ChatMsgProxy;
    egret.registerClass(ChatMsgProxy,"scene.ChatMsgProxy");
})(scene || (scene = {}));
