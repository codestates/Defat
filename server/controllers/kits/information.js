const { kit } = require('../../models');
const { Op } = require('sequelize')

module.exports = {
  
get : async (req,res) => {
  
  const { brand , priceNum , kind_of_food , kcalNum } = req.body
  
  const kitInfo = await kit.findAll({  
    where : {
      [Op.and] : [
        { brand : { [Op.or]: [brand], [Op.eq]: null }},
        { kind_of_food : { [Op.or]: [kind_of_food], [Op.eq]: null }},
        { priceNum : { [Op.or]: [priceNum], [Op.eq]: null }},
        { kcalNum : { [Op.or]: [kcalNum], [Op.eq]: null }}
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