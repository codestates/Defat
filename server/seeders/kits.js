// 'use strict';

// let request = require('request');
// require('dotenv').config()

// // const secretKey = process.env.API_SECRETKEY
// // console.log(secretKey)

//  options = {
//   'method': 'GET',
//   'url': encodeURI(`http://openapi.foodsafetykorea.go.kr/api/4bae6db962e3407e8396/I2790/json/1/1000/DESC_KOR=도시락%27`),
//   'headers': {
//     'Cookie': 'elevisor_for_j2ee_uid=3kfkp8vf9p15q'
//   }
// }

// request(options, function (error, response, body) {
//     if (error) {throw new Error(error)};
//     let info = JSON.parse(body);
//     for (let i in info.I2790.row) {
//       console.log('제품이름:' + info.I2790.row[i].DESC_KOR)
//       console.log('탄수화물:' + info.I2790.row[i].NUTR_CONT2)
//       console.log('brand:'+ info.I2790.row[i].MAKER_NAME)
//       console.log(" ")
//     }
//   })

//   module.exports = {
//     async up (queryInterface, Sequelize) {
//       /**
//        * Add seed commands here.
//        *
//        * Example:
//        * await queryInterface.bulkInsert('People', [{
//        *   name: 'John Doe',
//        *   isBetaMember: false
//        * }], {});
//       */
      
//     },
  
//     async down (queryInterface, Sequelize) {
//       /**
//        * Add commands to revert seed here.
//        *
//        * Example:
//        * await queryInterface.bulkDelete('People', null, {});
//        */
      
//     }
//   };
  