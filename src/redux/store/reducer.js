import * as actionTypes from './action'
const initialState = {
    user: [
        {id: '1', name: 'Binh', email: 'binh.buithe@pycogroup.com', active: true},
        {id: '2', name: 'Huy', email: 'huy.dinhhoang@pycogroup.com', active: false},
        {id: '3', name: 'Tuan', email: 'tuan.trananhg@pycogroup.com', active: true},
        {id: '4', name: 'Duy', email: 'duy.buingoc@pycogroup.com', active: false},
    ]
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CREATE_USER:
            return{ 
                ...state,
                user: [...state.user, action.payload],
            };
        case actionTypes.REMOVE_USER_BY_ID:
            return{
                ...state,
                user: state.user.filter(item => item.id !== action.payload.id),
            }
        case actionTypes.FILTER_USER:
            return{
                ...state,
                user: state.user.filter(item => item.active === action.payload.active),
            }
        default:
            return state;
    }
    
}

export default reducer;