url = location.href.split('#')[0];
url = encodeURIComponent(url);
$.ajax({
    type: "get",
    url: "https://www.lvpy.cn/wx_dev_test.php?url=" + url,
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "success_jsonpCallback",
    success: function(data) {
        wx.config({
            debug: true,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
                "onMenuShareTimeline", //分享给好友
                "onMenuShareAppMessage", //分享到朋友圈
                "onMenuShareQQ", //分享到QQ
                "onMenuShareWeibo" //分享到微博
            ]
        });
    },
    error: function(data) {
        // alert("连接失败！");
    }
});
wx.ready(function() {
    var shareData = {
        title: document.title,
        desc: '“AI智能修片系统”新版震撼发布，全球领先技术，秒速批量精修。7月8-11日仅限四天巨惠酬宾，点击领取免费修图。',
        link: window.location.href,
        imgUrl: 'https://v.lvpy.cn/logo.jpg'
    };
    wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);
    wx.onMenuShareQQ(shareData);
    wx.onMenuShareWeibo(shareData);
});
