const initialState = {
    user: [
        {id: '1', name: 'Binh', email: 'binh.buithe@pycogroup.com', active: true},
        {id: '2', name: 'Huy', email: 'huy.dinhhoang@pycogroup.com', active: false},
    ]
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_USER':
            return{ 
                ...state,
                user: [...state.user, action.payload],
            };
        case 'REMOVE_USER_BY_ID':
            return{
                ...state,
                user: state.user.splice(state.user.findIndex(item => item.id === action.payload.id),1),
            }
        default:
            return state;
    }
    
}

export default reducer;