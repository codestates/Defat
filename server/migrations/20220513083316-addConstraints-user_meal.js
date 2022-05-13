'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('user_meals', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_meals_users_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
     await queryInterface.addConstraint('user_meals', {
      fields: ['kit_id'],
      type: 'foreign key',
      name: 'users_meals_kits_id_fk',
      references: {
        table: 'kits',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
     })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('user_meals', 'users_meals_kits_id_fk');
     await queryInterface.removeConstraint('user_meals', 'users_meals_users_id_fk');
  }
};