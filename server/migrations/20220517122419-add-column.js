'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn("user_meals", "breakfast", {
      type: Sequelize.STRING
    }).then(() => queryInterface.addColumn("user_meals", "lunch", {
      type: Sequelize.STRING
    })).then(() => queryInterface.addColumn("user_meals", "dinner", {
      type: Sequelize.STRING
    }))
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn("user_meals", "breakfast")
     .then( () => queryInterface.removeColumn("user_meals", "lunch") )
     .then( () => queryInterface.removeColumn("user_meals", "dinner") )
  }
};
