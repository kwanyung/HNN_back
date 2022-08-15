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
            // define association here
        }
    }

    Post.init(
        {
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            imageUrl: DataTypes.STRING,
            songTitle: DataTypes.STRING,
            singer: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            MBTI: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Post",
        }
    );
    return Post;
};



