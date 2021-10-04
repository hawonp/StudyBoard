export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'PK',
        },
        content: '416 toㅁㄴㅇㄻㄴㅇ런ㅁ아럼ㄴ애ㅑ런매야러매냥러ㅐㄴ먕러ㅐㄴ먕러ㅐㄴ먕러ㅐㄴ먕러ㅐㄴ먕런매ㅑㅇ러ㅐㅑㄴㅇㄹ머ㅐㅑ럼내ㅑ럼내야런매ㅑㅇ러ㅐㄴ먕러ㅐㅑㅇㄴ러ㅐ먕ㄴ러맹냐러ㅐㄴ먕러맹냐러ㅐ먕ㄴ러ㅐㅇㄴ먀러ㅐㄴ먕러ㅐㅇㄴ먀러ㅐㅇㄴ먀런매야렁ㄴ매ㅑ러ㅐㅇㄴ먀러맹냐러ㅐㅇ냐런매야런매야럼내ㅑㅇ럼ㅇ내ㅑ렁ㄴ매ㅑ런매야런ㅁ애ㅑ런매ㅑㅇ럼내ㅑㅇ런매야럼ㅇ내ㅑ럼낼ㅇo hard #hard #cse416',
        Images: [{
            src: 'http://cubelink.me/media/article/6D25BEE8-B8E2-4405-9FB6-E8AFDC2E3441.jpeg',
        }, {
            src: 'http://cubelink.me/media/article/3303D5A6-966C-44F5-8B1A-98FAA7B8135C.jpeg',
        }, {
            src: 'http://cubelink.me/media/article/1613186271115-7.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: 'Coolllll',
        }, {
            User: {
                nickname: 'Hawon',
            },
            content: 'goooood',
        }]
    }],
    imagePaths: [],
    postAdded: false,
};
const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: 'DUMMMY.',
    User: {
        id: 1,
        nickname: 'PKKK',
    },
    Images: [],
    Comments: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};