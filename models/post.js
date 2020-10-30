module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
            boardType: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            contentText: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            contentImg: {
                type: DataTypes.JSON,
            },
            like: {
                type: DataTypes.INTEGER,
            }
        }, {
            timestamps: true,
            underscored: false,
            freezeTableName: true,
            tableName: 'Post',
        }
    );

    return Post;
};