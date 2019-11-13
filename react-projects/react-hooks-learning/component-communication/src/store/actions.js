export const FORM_SUBMIT = 'FORM_SUBMIT';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_NAME = 'CHANGE_NAME';

export const submitFormAction = (payload) => {
    return {
        type: FORM_SUBMIT,
        payload: payload
    }
}

export const changeEmailAction = (payload) => {
    return {
        type: CHANGE_EMAIL,
        payload: payload
    }
}

export const changeNameAction = (payload) => {
    return {
        type: CHANGE_NAME,
        payload: payload
    }
}