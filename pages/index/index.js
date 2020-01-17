// index.js
// 获取应用实例
const Utils = require('../../utils/util.js')
const API = require('../../config/api.js')
const app = getApp()

Page({
  data: {
    motto: '滚雪球',
    userInfo: {},
    hasUserInfo: false
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo && app.globalData.token) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getStockInfo: async function (e) {
    console.log(e)
    const data = await Utils.request(API.QueryOptStocks)
    console.log(data)
  }
})
