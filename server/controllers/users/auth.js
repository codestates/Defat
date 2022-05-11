const { user } = require('../../models')
const { isAuthorized } = require('../tokenFunctions')

module.exports = async (req, res) => {
  const token = isAuthorized(req, res)

  try {
    if (!token) {
      return res.status(401).send({ success: false, message: '권한 없음' })
    } else {
      const userInfo = await user.findOne({
        where: { userId: token.userId }
      })

      delete userInfo.dataValues.password

      res.status(200).send({ data: { userInfo }, message: '존재하는 아이디' })
    }
  } catch (err) {
    console.log(err)
  }
}
