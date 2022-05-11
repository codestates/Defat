require('dotenv').config()
const { sign, verify } = require('jsonwebtoken')

module.exports = {
  generateAccessToken: (data) => {
    //AccessToken 만들기
  return sign(data, process.env.ACCESS_SECRET, { expiresIn: "2h" });
  },
  sendAccessToken: (res, accessToken) => {
    //AccessToken 보내기
  res.cookie("jwt", accessToken, {
    httpOnly: true,
  });
  res.json({ message: 'ok' });
  },
  isAuthorized: (req) => {
  const cookie = req.headers.cookie
    if (!cookie) {
    return null;
    }
  const token = cookie.split(';')[0].slice(4)
    try {
    return verify(token, process.env.ACCESS_SECRET);
  } catch (err) {
    return null;
    }
  }
};