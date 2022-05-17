'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('wallets', 
    [
      {				
            coin_id: 1,
            wallet_id: 1,
            value: 0.0123110,
            datetime: new Date(),
            sendTo: 2,
            receiveFrom: 3,
            currentCotation: 0.0113,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            coin_id: 2, 
            wallet_id: 2,            
            value: 0.1211015,
            datetime: new Date(),
            sendTo: 3,
            receiveFrom: 2,
            currentCotation: 0.0143,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            coin_id: 3,  
            wallet_id: 3,            
            value: 1.85589,
            datetime: new Date(),
            sendTo: 2,
            receiveFrom: 3,
            currentCotation: 0.0125,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            coin_id: 4,  
            wallet_id: 4,         
            value: 2.8558,
            datetime: new Date(),
            sendTo: 3,
            receiveFrom: 2,
            currentCotation: 0.0178,
            createdAt: new Date(),
            updatedAt: new Date()
			   
      }
    ],     
 {});
},

  async down (queryInterface, Sequelize) {   
    await queryInterface.bulkDelete('wallets', null, {});
     
  }
};
