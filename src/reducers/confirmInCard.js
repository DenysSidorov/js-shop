export const CHANGE_NAME_CONFIRM = 'card-confirm/CHANGE_NAME_CONFIRM';

export default (state = '', action) => {
    switch (action.type) {
        case CHANGE_NAME_CONFIRM:
            return action.payload
        default:
            return state
    }
}


export const changeConfirm = (type)=> {
    return {type: CHANGE_NAME_CONFIRM, payload: type}
};