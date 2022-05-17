const { user } = require('../../models')
const { auth } = require('./auth')

module.exports = {
  get: async (req, res) => {
    const userInfo = await auth(req, res);

    try {
      if (!userInfo) {
        return res.status(200).json({ message: '유저정보 없음' });
      } else {

        delete userInfo.dataValues.password;

        res.status(200).send({ data: { userInfo }, message: "조회 성공" });
      }
    } catch (err) {
    console.log(err);
  }
},
  patch : async (req,res) => {
      
    const userInfo = await auth(req, res)
    const {nickname , password} = req.body
  
    try {
      if (!userInfo) { return res.status(401).send({ success: false, message: '권한 없음' })
    } else {
          const updateInfo = await user.update(
            { 
              nickname : nickname,
              password : password 
            },
            { where : { id : userInfo.dataValues.id} }  
          )  
        delete updateInfo.dataValues.password
      res.status(200).send({ data : updateInfo , message : '변경 완료'})
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Server Error!' });
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