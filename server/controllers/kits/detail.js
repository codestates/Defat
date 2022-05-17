const { kit } = require('../../models');

module.exports = {
  
    get : async (req,res) => {
    
    
    const kitInfo = await kit.findAll()

    if (!kitInfo) {
        res.status(404).send({message : '정보 없음'})
    } else {
        res.status(200).send({data : kitInfo , message : '정보 전달 완료'})
    }
  }
}