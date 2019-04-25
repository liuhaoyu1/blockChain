import * as ActionsTypes from '../actions/actionTypes';

const initialState = {

};

const HomePageReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionsTypes.REQUEST_DO_ADD_FOLLOW: 
        return Object.assign({},state,)

        default:
        return state
    }
}
export default HomePageReducer