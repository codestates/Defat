'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.user.hasOne(models.like, { foreignKey: 'user_Id' });
      models.user.hasOne(models.user_meal, { foreignKey: 'user_id' });
      
    }
  }
  user.init({
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user'
  })
  return user
}
