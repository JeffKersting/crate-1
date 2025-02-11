'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('styles', [
      // Casual

      {
        // Men Tshirt Casual
        name: 'Casual',
        gender: 1,
        image: '/images/survey/casual-shirts-mens.jpg',
        type: "shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Men pants Casual
        name: 'Casual',
        gender: 1,
        image: '/images/survey/casual-pants-men.jpg',
        type: "bottom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Men accessories Casual
        name: 'Casual',
        gender: 1,
        image: '/images/survey/casual-accessories-mens.jpg',
        type: "accessory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Men shoes Casual
        name: 'Casual',
        gender: 1,
        image: '/images/survey/casual-shoes-men.jpg',
        type: "shoe",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        // Women Tshirt Casual
        name: 'Casual',
        gender: 2,
        image: '/images/survey/casual-shirts-women.jpg',
        type: "shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Women Pants Casual
        name: 'Casual',
        gender: 2,
        image: '/images/survey/casual-pants-women.jpg',
        type: "bottom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Women Accessories Casual
        name: 'Casual',
        gender: 2,
        image: '/images/survey/casual-accessories-women.jpg',
        type: "accessory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Women Shoes Casual
        name: 'Casual',
        gender: 2,
        image: '/images/survey/casual-shoes-women.jpg',
        type: "shoe",
        createdAt: new Date(),
        updatedAt: new Date()
      },


      // Streetwear
      {
        // Streetwear Mens T Shirt
        name: 'Streetwear',
        gender: 1,
        image: '/images/survey/street-shirt-mens.jpg',
        type: "shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Mens Pants
        name: 'Streetwear',
        gender: 1,
        image: '/images/survey/street-pants-mens.jpg',
        type: "bottom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Mens Accessories
        name: 'Streetwear',
        gender: 1,
        image: '/images/survey/street-accessories-mens.jpg',
        type: "accessory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Mens Shoes
        name: 'Streetwear',
        gender: 1,
        image: '/images/survey/street-shoe-men.jpg',
        type: "shoe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Womens Shirt
        name: 'Streetwear',
        gender: 2,
        image: '/images/survey/street-shirt-women.jpg',
        type: "shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Womens Pant
        name: 'Streetwear',
        gender: 2,
        image: '/images/survey/street-pants-women.jpg',
        type: "bottom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Womens Accessories
        name: 'Streetwear',
        gender: 2,
        image: '/images/survey/street-accessories-women.jpg',
        type: "accessory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Streetwear Womens Shoes
        name: 'Streetwear',
        gender: 2,
        image: '/images/survey/street-shoe-women.jpg',
        type: "shoe",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Edgy
      {
        // Edgy Mens Shirt
        name: 'Edgy',
        gender: 1,
        image: '/images/survey/edgy-shirt-mens.jpg',
        type: "shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Mens Pants
        name: 'Edgy',
        gender: 1,
        image: '/images/survey/edgy-pants-mens.jpg',
        type: "bottom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Mens Accessories
        name: 'Edgy',
        gender: 1,
        image: '/images/survey/edgy-accessory-mens.jpg',
        type: "accessory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Mens Shoes
        name: 'Edgy',
        gender: 1,
        image: '/images/survey/edgy-shoes-mens.jpg',
        type: "shoe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Womens Shirt
        name: 'Edgy',
        gender: 2,
        image: '/images/survey/edgy-shirt-womens.jpg',
        type: "shirt",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Womens Bottom
        name: 'Edgy',
        gender: 2,
        image: '/images/survey/edgy-womens-bottom.jpg',
        type: "bottom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Womens Accessories
        name: 'Edgy',
        gender: 2,
        image: '/images/survey/edgy-accessory-womens.jpg',
        type: "accessory",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Edgy Womens Shoes
        name: 'Edgy',
        gender: 2,
        image: '/images/survey/edgy-shoes-womens.jpg',
        type: "shoe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('styles', null, {});
  }
}
