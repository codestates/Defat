'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class kit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      models.kit.hasMany(models.like, { foreignKey: 'kit_Id' });
      models.kit.hasMany(models.user_meal, { foreignKey: 'kit_id' });
      models.kit.belongsTo(models.ingredient, { foreignKey: 'ingredient_id' });

    }
  }
  kit.init({
    kit_name: DataTypes.STRING,
    image: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.INTEGER,
    kcal: DataTypes.INTEGER,
    kind_of_food: DataTypes.STRING,
    ingredient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kit'
  })
  return kit
}
