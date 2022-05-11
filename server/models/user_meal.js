'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_meal.init({
    user_id: DataTypes.INTEGER,
    kit_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_meal',
  });
  return user_meal;
};