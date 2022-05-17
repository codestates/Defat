'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      kit_id: {
        type: Sequelize.INTEGER
      },
      breakfast: {
        type: Sequelize.STRING
      },
      lunch: {
        type: Sequelize.STRING
      },
      dinner: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('user_meals')
  }
}
