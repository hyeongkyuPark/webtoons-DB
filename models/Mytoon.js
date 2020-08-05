module.exports = function(sequelize, DataTypes) {
    const Mytoon = sequelize.define('Mytoon', {
        mytoonNo: {
            field: "mytoon_no",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            field: "user_id",
            type: DataTypes.STRING,
        },
        mytoonTitle: {
            field: "mytoon_title",
            type: DataTypes.STRING,
            unique: true,
        },
        mytoonWriter: {
            field: "mytoon_writer",
            type: DataTypes.STRING,
        },
        mytoonDescription: {
            field: "mytoon_description",
            type: DataTypes.STRING,
        },
        mytoonThumb: {
            field: "mytoon_thumb",
            type: DataTypes.STRING,
        },
        mytoonUrl: {
            field: "mytoon_url",
            type: DataTypes.STRING,
        },
        mytoonGenre: {
            field: "mytoon_genre",
            type: DataTypes.STRING,
        },
        mytoonAge: {
            field: "mytoon_age",
            type: DataTypes.STRING
        },
        mytoonWeekday: {
            field: "mytoon_weekday",
            type: DataTypes.STRING
        },
        mytoonBookmark: {
            field: "mytoon_bookmark",
            type: DataTypes.INTEGER
        },
        mytoonVisiable: {
            filed: "mytoon_visiable",
            type: DataTypes.BOOLEAN
        }
        
    });

    return Mytoon;
}