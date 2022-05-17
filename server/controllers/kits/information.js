const { kit } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  
get : async (req,res) => {
  
  const { brand , priceNum , kind_of_food , kcalNum } = req.body
  
  const kitInfo = await kit.findAll({  
    where : {
      [Op.and] : [
        brand ? { brand :  brand } : null,
        kind_of_food ? { kind_of_food : kind_of_food }: null,
        priceNum ? { priceNum :  priceNum } : null,
        kcalNum ? { kcalNum :  kcalNum } : null
      ]
    }
  })
  
    if (!kitInfo) {
      res.status(404).send({message : '해당 자료 없음'})
    } else {
      res.status(200).send({data : kitInfo , message : '검색 성공'})
    }
  }
}
