const initialState = {
    validation: false,
};


const profileReducer = (state = initialState, action) => {
    if (action.type === 'VALIDATION_LOG_PAS') {
        return {
            ...state,
            validation: action.payload,
        }
    }
    return state;
}

export default profileReducer;