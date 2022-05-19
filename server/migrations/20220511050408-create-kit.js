'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kit_name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      kcal: {
        type: Sequelize.INTEGER
      },
      kind_of_food: {
        type: Sequelize.STRING
      },
      ingredient_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kits')
  }
}
