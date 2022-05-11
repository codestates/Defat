'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  ingredient.init({
    carbohydrate: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    natrium: DataTypes.INTEGER,
    cholesterol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ingredient'
  })
  return ingredient
}
