'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('likes', {
      fields: ['user_Id'],
      type: 'foreign key',
      name: 'users_likes_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('likes', {
      fields: ['kit_Id'],
      type: 'foreign key',
      name: 'kit_likes_id_fk',
      references: {
        table: 'kits',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('likes', 'users_likes_id_fk');
     await queryInterface.removeConstraint('likes', 'kits_likes_id_fk')
  }
};
