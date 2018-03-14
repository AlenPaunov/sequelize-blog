'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING,
                required: true,
                unique: true,
                allowNull: false
            },
            passwordHash: {
                type: Sequelize.STRING,
                required: true,
                allowNull: false
            },
            fullName: {
                type: Sequelize.STRING,
                required: true,
                allowNull: false
            },
            salt: {
                type: Sequelize.STRING,
                required: true,
                allowNull: false
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};