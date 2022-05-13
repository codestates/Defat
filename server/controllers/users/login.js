const { user } = require('../../models')
const { generateAccessToken, sendAccessToken } = require('../../middlewares/tokenFunctions')

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { userId: req.body.userId }
  })
  console.log(userInfo)
  try {
    if (!userInfo) {
      throw new Error('아이디가 존재하지 않습니다.')
    }
    if (!userInfo.isRight(req.body.password)) {
      throw new Error('비밀번호가 일치하지 않습니다.')
    }
  } catch (err) {
    return res.status(403).send({
      message: '로그인에 실패하였습니다.'
    })
  }
  
  delete userInfo.dataValues.password

  const accessToken = generateAccessToken(userInfo.dataValues)
  sendAccessToken(res, accessToken)
  
  return res.json({
    message: '로그인에 성공하였습니다',
    accessToken
  })
}
