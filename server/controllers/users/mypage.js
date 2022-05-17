
const { user } = require('../../models')
const { isAuthorized } = require('../../middlewares/tokenFunctions')
const auth = require('./auth')

module.exports = {
  get: async (req, res) => {
    const token = await isAuthorized(req, res);

    try {
      if (!token) {
        return res.status(401).send({ success: false, message: "권한 없음" });
      } else {
        const userInfo = await user.findOne({
          where: { userId: token.userId },
        });

        delete userInfo.dataValues.password;

        res
          .status(200)
          .send({ data: { userInfo }, message: "조회 성공" });
      }
    } catch (err) {
      console.log(err);
    }
  },

  patch : async (req,res) => {
      
    const token = await isAuthorized(req, res)
    const {nickname , password} = req.body
  
    try {
      if (!token) {
            return res.status(401).send({ success: false, message: '권한 없음' })
        } else {
          const updataInfo = await user.update(
            {nickname , password} , {
                where : {userId : token.userId}
            }  
          )
      if (!updataInfo) {
        return res.status(400).send({ success: false, message: '변경 안됨' })
      } else {
          delete updataInfo.dataValues.password
        res.status(200).send({ data : updataInfo , message : '변경 완료'})
      }
  
    }
    } catch (err) {
        console.log(err)
      }
  
  }, 
  delete : async (req, res) => {
      try {
        /* 로그인 인증 검사 */
        const userInfo = await auth(req, res);
        if(!userInfo) return res.status(200).json({ message: 'Unauthorized userInfo!' });
  
        user.destroy({ where: { id: userInfo.id } });  // 유저 삭제
  
        res.cookie('accessToken', null, { maxAge: 0 });  // 쿠키 삭제
        res.status(200).json({ message: '회원탈퇴 완료' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Server Error!' });
      }
    }

}