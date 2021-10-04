export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'PK',
        },
        content: '416 정말어렵다 다신하기싫다 쿤 싫다 너무 어렵게한다 왜그렇게 하는지 모르겠다 진짜로 어렵게만들면 뭐 좋나 꼭 패스해야함 hard #hard #cse416',
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
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
};


export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});


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
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };

        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error
            };

            //커맨트
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,
            };

        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error
            };

        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;