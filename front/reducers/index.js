// 엑션을 의미한다
import { HYDRATE } from 'next-redux-wrapper';
// 리듀서 합쳐주는거
import { combineReducers } from 'redux';
import user from './user';
import post from './post';
// 초기상태

// 비동기 엑션 크리에이터

// action creator example
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };

// (이전상태, 액션) => 다음상태
// 서버사이드 렌더링을위해서 HYDRATE를 indext 부분을 넣은거다 없어도 돼는건데
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
