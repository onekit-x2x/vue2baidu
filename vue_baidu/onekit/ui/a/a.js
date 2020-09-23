import URL from "../../lib/URL.js"
Component({
  options: {     
        virtualHost: true,
        addGlobalClass: true,
    },

  properties: {onekitId:String,
    onekitStyle: String,
    onekitClass: String,
    href: {
      type: String,
      value: ""
    }

  },

  lifetimes: {
    attached: function () {

    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    a_tap: function (e) {
      var that = this;
      var href = new URL(that.properties.href);
      if (href.scheme) {
        switch (href.scheme) {
          case "tel":
            wx.makePhoneCall({
              phoneNumber: href.host,
            });
            break;
          case "mailto":
            wx.showModal({
              title: '不支持',
              content: '微信小程序暂不支持到邮箱',
            });
            break;
          case "http":
          case "https":
            wx.navigateTo({
              url: `/onekit/ui/router.push/ie?url=${encodeURI(that.properties.href)}`
            })
            break;
          default:
            throw new Error(url.scheme);
        }
      } else {
        wx.navigateTo({
          url: that.properties.href,
        })
      }
    }
  },

})
