require('dotenv').config()
const { sign, verify } = require('jsonwebtoken')

module.exports = {
  generateAccessToken: (data) => {
    // AccessToken 생성
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '15s' })
  },
  sendAccessToken: (res, accessToken) => {
    const cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
    res.cookie('accessToken', accessToken, cookieOptions)
    res.json({ message: 'ok' })
  },
  isAuthorized: (req, res) => {
    const cookie = req.headers.cookie
    
    if (!cookie) {
      return null
    }

    const token = cookie.split(';')[0].slice(4)

    try {
      return verify(token, $`{process.env.ACCESS_SECRET}`)
    } catch (err) {
      console.log(err)
    }
  }
}
