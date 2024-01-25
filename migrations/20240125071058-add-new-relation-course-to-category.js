'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Courses', 'CategoryId', { 
      type: Sequelize.INTEGER,
    references: {
      model: "Categories",
      key: 'id'
    }
  });
  await queryInterface.addColumn('Courses', 'UserId', { 
    type: Sequelize.INTEGER,
  references: {
    model: "Users",
    key: 'id'
  }
});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Courses', "CategoryId");
    await queryInterface.removeColumn('Courses', "UserId");
  }
};
