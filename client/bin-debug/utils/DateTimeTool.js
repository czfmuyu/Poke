/*
 *
 * @author
 *
 */
var DateTimeTool = (function () {
    function DateTimeTool() {
    }
    var d = __define,c=DateTimeTool;p=c.prototype;
    //随机打乱数组 2016-12-12 10:30
    DateTimeTool.GetDateString = function (time) {
        var date = new Date(time);
        var y = date.getFullYear();
        var mon = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return y + "-" + mon + "-" + d + " " + h + ":" + m;
    };
    //随机打乱数组 2016-12-12 10:30
    DateTimeTool.GetMinString = function (time) {
        var min = Math.floor(time / 1000 / 60);
        var sce = Math.floor(time / 1000) % 60;
        var minstr = "" + min;
        var scestr = "" + sce;
        if (min < 10) {
            minstr = "0" + min;
        }
        if (sce < 10) {
            scestr = "0" + sce;
        }
        return minstr + ":" + scestr;
    };
    return DateTimeTool;
})();
egret.registerClass(DateTimeTool,"DateTimeTool");
