import {FORM_SUBMIT,CHANGE_EMAIL,CHANGE_NAME} from './actions'
export const initialState ={
    isEmail: false,
    isName: false,
    message:'Form Incomplete!'
}
export const appReducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case FORM_SUBMIT:
            return {
                ...state,
                message: action.payload
            };

        case CHANGE_EMAIL:
            return {
                ...state,
                isEmail: action.payload
            };
        
        case CHANGE_NAME:
            return {
                ...state,
                isName: action.payload
            };

        default:
            return state;
    }
}

export default appReducer;