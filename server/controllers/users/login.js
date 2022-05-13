const { user } = require('../../models')
const { generateAccessToken, sendAccessToken } = require('../../middlewares/tokenFunctions')

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { 
      userId: req.body.userId,
      password: req.body.password
    }
  })
  try {
    if (!userInfo) {
      throw new Error('아이디 또는 비밀번호가 일치하지않습니다.')
    }
    
  console.log(userInfo)
  delete userInfo.dataValues.password
  

  const accessToken = generateAccessToken(userInfo.dataValues)
  sendAccessToken(res, accessToken)
  
  return res.json({
    message: '로그인에 성공하였습니다',
    accessToken,
    userInfo: userInfo
  })
  } catch (err) {
    return res.status(403).send({
      message: '로그인에 실패하였습니다.'
    })
  }
  
}
