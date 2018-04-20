
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/res/res.js",
	"libs/modules/gui/gui.js",
	"libs/modules/socket/socket.js",
	"libs/modules/tween/tween.js",
	"libs/modules/nest/nest.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/Config.js",
	"bin-debug/controller/EgretSDKMgr.js",
	"bin-debug/controller/EntityMgr.js",
	"bin-debug/controller/game/CardListData.js",
	"bin-debug/controller/game/Compare.js",
	"bin-debug/controller/game/Prompt.js",
	"bin-debug/controller/game/Prompt2.js",
	"bin-debug/controller/game/SendCard.js",
	"bin-debug/controller/game/Types.js",
	"bin-debug/controller/LayerMgr.js",
	"bin-debug/controller/LoadMgr.js",
	"bin-debug/controller/LocalMgr.js",
	"bin-debug/controller/NativeMgr.js",
	"bin-debug/controller/NetMgr.js",
	"bin-debug/controller/RobotGameMgr.js",
	"bin-debug/scene/SceneBase.js",
	"bin-debug/controller/SceneMgr.js",
	"bin-debug/controller/sceneproxy/SceneProxyBase.js",
	"bin-debug/controller/sceneproxy/GameSceneProxy.js",
	"bin-debug/controller/sceneproxy/LobbySceneProxy.js",
	"bin-debug/controller/SoundMgr.js",
	"bin-debug/controller/TestGameMgr.js",
	"bin-debug/data/entity/Player.js",
	"bin-debug/data/entity/MainPlayer.js",
	"bin-debug/data/GameData.js",
	"bin-debug/data/LocalData.js",
	"bin-debug/enums/NativeEvent.js",
	"bin-debug/enums/NetEnum.js",
	"bin-debug/enums/NetEvent.js",
	"bin-debug/interfaces/IInit.js",
	"bin-debug/interfaces/IRelease.js",
	"bin-debug/interfaces/IUpdate.js",
	"bin-debug/interfaces/IWindow.js",
	"bin-debug/Main.js",
	"bin-debug/MD5.js",
	"bin-debug/net/base/SocketBase.js",
	"bin-debug/net/base/SocketIo.js",
	"bin-debug/scene/effects/BombEffect.js",
	"bin-debug/scene/effects/PlaneEffect.js",
	"bin-debug/scene/GameScene.js",
	"bin-debug/scene/LobbyScene.js",
	"bin-debug/scene/proxys/ChatMsgProxy.js",
	"bin-debug/scene/windows/WindowsBase.js",
	"bin-debug/scene/proxys/GameBtnProxy.js",
	"bin-debug/scene/proxys/GameOverAniProxy.js",
	"bin-debug/scene/proxys/GameUIProxy.js",
	"bin-debug/scene/proxys/MyCardProxy.js",
	"bin-debug/scene/proxys/SendCardAniProxy.js",
	"bin-debug/scene/proxys/TableCardProxy.js",
	"bin-debug/scene/render/ChatFaceRender.js",
	"bin-debug/scene/render/ChatWordsRender.js",
	"bin-debug/scene/render/LobbyTableRender.js",
	"bin-debug/scene/TestGameScene.js",
	"bin-debug/scene/ui/Card.js",
	"bin-debug/scene/ui/CircleLoading.js",
	"bin-debug/scene/ui/HouseRunning.js",
	"bin-debug/scene/ui/PlayerHead.js",
	"bin-debug/scene/ui/PlayerHeadFrame.js",
	"bin-debug/scene/ui/PlayerInfo.js",
	"bin-debug/scene/ui/PlayerTime.js",
	"bin-debug/scene/ui/ProgressBar.js",
	"bin-debug/scene/ui/SButton.js",
	"bin-debug/scene/ui/SRadio.js",
	"bin-debug/scene/windows/ActivityOverInst.js",
	"bin-debug/scene/windows/ActivityResoultInst.js",
	"bin-debug/scene/windows/ChargeInst.js",
	"bin-debug/scene/windows/ChatInst.js",
	"bin-debug/scene/windows/CreatRoomInst.js",
	"bin-debug/scene/windows/LoadingInst.js",
	"bin-debug/scene/windows/ResoultInst.js",
	"bin-debug/scene/windows/SettingInst.js",
	"bin-debug/scene/windows/SysTipsInst.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/utils/ArrayTools.js",
	"bin-debug/utils/DateTimeTool.js",
	"bin-debug/utils/MandPool.js",
	"bin-debug/utils/math/Vector2D.js",
	"bin-debug/utils/Trace.js",
	"bin-debug/utils/ViewTools.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.5",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};