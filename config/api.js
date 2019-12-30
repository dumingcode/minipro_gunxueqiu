const ApiRootUrl = 'http://127.0.0.1:8360/api/'

module.exports = {
  IndexUrl: ApiRootUrl + 'index/index', // 首页数据接口
  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin' // 微信登录
}
