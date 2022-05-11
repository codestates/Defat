const { user } = require('../../models')
const { generateAccessToken } = require('../../middlewares/tokenFunctions')

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  if (!req.body.userId || !req.body.nickname || !req.body.password) {
    res.status(403).send('필요한 정보가 충족되지 않았습니다.')
  }
  const userInfo = await user.findOne({
    where: {
      userId: req.body.userId
    }
  })

  if (userInfo) {
    res.status(409).send('이미 사용중인 아이디 입니다.')
  } else {
    delete userInfo.dataValues.password

    res.cookie('accessToken', generateAccessToken(userInfo.dataValues),
      { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true })

    res.status(201).send({ message: 'ok' })
  }
}