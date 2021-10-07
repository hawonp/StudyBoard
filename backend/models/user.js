
module.exports = (sequelize, DataTypes)=>{
    // mysql에서는 user 테이블 생성하고 뒤에 유저가 모델이름
    // 모델은 대문자 mysql 소문자 혼동 하면안됌
    const User = sequelize.define('User', {
        // 왜 ID를 않넣으냐 ? 기본적으로 들어있기에 안넣어도 됌 Django랑 다름
        email:{
            type: DataTypes.STRING(20),
            //필수 사항을 말함
            allowNull: false,
            //중복되면 안됌
            unique: true,
        },
        nickname:{
            type: DataTypes.STRING(20),
            //필수 사항을 말함
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(100),
            //필수 사항을 말함
            allowNull: false,
        },
    },{
        charset: 'utf8mb4',
        // 나라언어 우리나라언어
        collate: 'utf8mb4_general_ci',
    });
    //관계형 데이터
    //사용자가 작성하는거
    User.associate = (db) => {
        //사람이 포스트를 여러게 가질수있다
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);


    };
    return User;
}