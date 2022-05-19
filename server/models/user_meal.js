'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user_meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.user_meal.belongsTo(models.user, { foreignKey: 'user_id' });
      models.user_meal.belongsTo(models.kit, { foreignKey: 'kit_id' });
    }
  }
  user_meal.init({
    user_id: DataTypes.INTEGER,
    kit_id: DataTypes.INTEGER,
    breakfast: DataTypes.STRING,
    lunch: DataTypes.STRING,
    dinner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_meal'
  })
  return user_meal
}
