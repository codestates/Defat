'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('ingredients', [{
      carbohydrate:'27',
      protein:'3',
      fat:'0',
      natrium:'920',
      cholesterol:'0',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      carbohydrate:'53',
      protein:'18',
      fat:'19.7',
      natrium:'831',
      cholesterol:'43',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'61',
      protein:'14',
      fat:'8',
      natrium:'300',
      cholesterol:'140',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      carbohydrate:'68',
      protein:'15',
      fat:'6',
      natrium:'663',
      cholesterol:'34',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'56',
      protein:'16',
      fat:'4',
      natrium:'730',
      cholesterol:'40',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'48',
      protein:'20',
      fat:'7',
      natrium:'480',
      cholesterol:'35',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'13',
      protein:'7',
      fat:'2',
      natrium:'284',
      cholesterol:'5',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'43',
      protein:'10',
      fat:'4',
      natrium:'286',
      cholesterol:'8',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'20',
      protein:'6',
      fat:'10',
      natrium:'60',
      cholesterol:'0',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      carbohydrate:'1',
      protein:'0',
      fat:'0',
      natrium:'15',
      cholesterol:'0',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ingredients', null, {});
  }
};
