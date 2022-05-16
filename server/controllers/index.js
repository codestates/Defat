const mypage = require('./users/mypage');

module.exports = {
  auth: require('./users/auth'),
  signup: require('./users/signup'),
  login: require('./users/login'),
  logout: require('./users/logout'),
  mypage: require('./users/mypage')
}
