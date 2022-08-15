"use strict";
const { Model, where } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Post.belongsTo(models.User, { foreignKey: 'userId',onDelete: 'cascade', onUpdate: 'cascade'});

        }
    }
    Post.init(
        {
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            userId: DataTypes.INTEGER,
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            imageUrl: DataTypes.STRING,
            MBTI: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Post",
        }
    );
    return Post;
};



