import * as ActionsTypes from '../actions/actionTypes';

const initialState = {
    title: '豪雨'
};

const HomePageReducer = (state=initialState, action) => {
       switch(action.type) {
        case ActionsTypes.SUCCESS_MEMBER_ADD: 
        return {...state,...{token:'12312'}}

        default:
        return state
    }
}
export default HomePageReducer