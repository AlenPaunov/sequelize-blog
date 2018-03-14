'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING
  }, {timestamps: false});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};