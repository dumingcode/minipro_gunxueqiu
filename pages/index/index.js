// index.js
// 获取应用实例
const Utils = require('../../utils/util.js')
const API = require('../../config/api.js')
const app = getApp()
const user = require('../../services/user.js')
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
  onLoad: async function () {
    
  },
  getUserInfo: async function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    if (!wx.getStorageSync('userInfo') || !wx.getStorageSync('token')) {
      await user.loginByWeixin()
    }
    app.globalData.userInfo = JSON.parse(wx.getStorageSync('userInfo') || '')
    app.globalData.token = wx.getStorageSync('token') || ''
    if (app.globalData.userInfo && app.globalData.token) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        token: app.globalData.token
      })
    }
  },
  getStockInfo: async function (e) {
    console.log(e)
    const data = await Utils.request(API.QueryOptStocks)
    console.log(data)
  }
})
