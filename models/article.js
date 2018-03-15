'use strict';
module.exports = (sequelize, DataTypes) => {

    const Article = sequelize.define('Article', {
        title: {type: DataTypes.STRING, required: true, allowNull: false},
        content: {type: DataTypes.STRING, required: true, allowNull: false},
        date: {type: DataTypes.DATE, required: true, allowNull: false, default: Date.now()},
        author:{type: DataTypes.STRING, required: true,allowNull: false}
    }, {timestamps: false});

    Article.associate = function (models) {
        Article.belongsTo(models.User,{
            foreignKey:'authorId',
            onDelete:'CASCADE',
        });
    };

    return Article;
};