const INITIAL_STATE = {
    username: 'Usuario de prueba'
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_username':
            return {...state, username: action.payload}
        default:
            return state;
    }
};

export default reducer;