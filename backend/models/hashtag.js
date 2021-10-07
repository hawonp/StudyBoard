const {DataTypes} = require("sequelize");


module.exports = (sequelize, DataTypes)=>{
    // mysql에서는 user 테이블 생성하고 뒤에 유저가 모델이름
    // 모델은 대문자 mysql 소문자 혼동 하면안됌
    const Hashtag = sequelize.define('Hashtag', {
        // 왜 ID를 않넣으냐 ? 기본적으로 들어있기에 안넣어도 됌 Django랑 다름
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },

    },{
        charset: 'utf8mb4',
        // 나라언어 우리나라언어
        collate: 'utf8mb4_general_ci',
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post);
    };
    return Hashtag;
}