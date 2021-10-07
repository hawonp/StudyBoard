module.exports = (sequelize, DataTypes)=>{
    // mysql에서는 user 테이블 생성하고 뒤에 유저가 모델이름
    // 모델은 대문자 mysql 소문자 혼동 하면안됌
    const Post = sequelize.define('Post', {
        // 왜 ID를 않넣으냐 ? 기본적으로 들어있기에 안넣어도 됌 Django랑 다름
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },

    },{
        charset: 'utf8mb4',
        // 나라언어 우리나라언어
        collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        // 유저에게 속해있는 belong TO
        db.Post.belongsTo(db.User);
        // 다대다 관계 해시태그도 여러게글을 남기고, 하나의 게시글에도 여러게의 해시태그를 남길 수 있다
        db.Post.belongsToMany(db.Hashtag);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
    };
    return Post;
}