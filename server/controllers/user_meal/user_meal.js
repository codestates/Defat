const {user_meal , kit} = require('../../models')

module.exports = {
  get : async (req, res) => {
    
    const user_id = 1
    const todaymenu = await user_meal.findOne( {
        where : {
          user_id : user_id
        }
    })
    console.log(todaymenu)
    const todaymenuInfo = []

    const breakfast = await kit.findOne({
        where : {
          id : todaymenu.dataValues.breakfast
        }
    })

    const lunch = await kit.findOne({
        where : {
          id : todaymenu.dataValues.lunch
        }
    })

    const dinner = await kit.findOne({
        where : {
          id : todaymenu.dataValues.dinner
        }
    })

    todaymenuInfo.push({breakfast : breakfast.dataValues})
    todaymenuInfo.push({lunch : lunch.dataValues})
    todaymenuInfo.push({dinner : dinner.dataValues})

    if (todaymenuInfo.length === 0) {
      res.status(404).send({message : '해당 자료 없음'})
    } else {
      res.status(200).send({data : todaymenuInfo, message : '정보 전달 완료'})
    }

    
    

  },

  post : async (req, res) => {
    // user_id 
    // req.body kit_id
    

  }
}