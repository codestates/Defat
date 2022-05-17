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
     * 
     *
    */
    await queryInterface.bulkInsert('kits', [{
      kit_name : '오뚜기 컵누들 쌀국수 6개입10종 다이어트라면',
      image :'https://shop-phinf.pstatic.net/20210818_13/1629276564861CaD9m_JPEG/30412453562758473_1675159339.jpg?type=m510',
      brand :'오뚜기',
      price : 5000,
      kcal : 120,
      kind_of_food: '면',
      ingredient_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
        kit_name : '비바락 식단 도시락',
        image :'https://shop-phinf.pstatic.net/20220313_204/1647173284061fx33p_JPEG/48309118813870377_532355956.jpg?type=m510',
        brand : '비바락',
        price : 19400,
        kcal : 380,
        kind_of_food: '도시락',
        ingredient_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '로칼 도시락',
        image :'https://shop-phinf.pstatic.net/20220404_174/1649054202025I6Nze_JPEG/50189985474286256_1574883336.jpg?type=m510',
        brand :'미스터네이처',
        price : 3900,
        kcal : 255,
        kind_of_food: '도시락',
        ingredient_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '지웨이 다이어트 식단 도시락',
        image :'https://shop-phinf.pstatic.net/20220504_170/1651611822383Y08qW_JPEG/52747668067172058_1777990507.jpg?type=m510',
        brand : '지웨이',
        price : 3950,
        kcal : 400,
        kind_of_food:'도시락',
        ingredient_id:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '맛있닭 다이어트 도시락',
        image : 'https://shop-phinf.pstatic.net/20200924_156/1600907491331KHvFp_JPEG/2043275034289556_348948758.jpg?type=m510',
        brand : '맛있닭',
        price : 19900,
        kcal : 279,
        kind_of_food: '도시락',
        ingredient_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '헬로잇츠 단기 2주 건강 간편 냉동도시락 식단 6팩 12팩',
        image : 'https://shop-phinf.pstatic.net/20210826_286/16299756764148h151_JPEG/31111511133313036_889482686.jpg?type=m510',
        brand : '헬르잇츠',
        price : 24900,
        kcal : 295,
        kind_of_food: '도시락',
        ingredient_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '[샐러드스쿨]이코노미팩',
        image : 'https://shop-phinf.pstatic.net/20191119_273/1574131868731tkIGT_PNG/11495257252624644_1274607905.png?type=m510',
        brand : '샐러드스쿨',
        price : 14300,
        kcal : 100,
        kind_of_food: '샐러드',
        ingredient_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '그린위치 포만 다이어트 샐러드 아침간단식사 비건샌드위치',
        image : 'https://shop-phinf.pstatic.net/20211103_118/1635945833428HsEFU_JPEG/37081729107894327_272256493.jpg?type=m510',
        brand : '그린위치',
        price : 7500,
        kcal : 131,
        kind_of_food: '샌드위치',
        ingredient_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '닥터유 에너지바',
        image : 'https://shopping-phinf.pstatic.net/main_2502634/25026346516.20201128202940.jpg?type=f640',
        brand : '오리온',
        price : 680,
        kcal : 188,
        kind_of_food: '간식',
        ingredient_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        kit_name : '더존건강 한끼 곤약젤리',
        image : 'https://shop-phinf.pstatic.net/20210827_33/1630046914662Plg4z_JPEG/31182810386915443_965666334.jpg?type=m510',
        brand : '더존건강',
        price : 490,
        kcal : 2,
        kind_of_food: '간식',
        ingredient_id: 10,
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
    await queryInterface.bulkDelete('kits', null, {});
  }
}
