// app.js
const user = require('./services/user.js')
App({
  onLaunch: async function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    try {
      if (!wx.getStorageSync('userInfo') || !wx.getStorageSync('token')) {
        await user.loginByWeixin()
      }
      this.globalData.userInfo = JSON.parse(wx.getStorageSync('userInfo') || '')
      this.globalData.token = wx.getStorageSync('token') || ''
    } catch (e) {
      console.log(e)
    }
  },
  globalData: {
    userInfo: null,
    tokern: ''
  }
})