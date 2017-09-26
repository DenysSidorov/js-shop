import {
    GET_TYPES,
} from './types';
let  initialState = {countTypes: {new : 2, progress: 3, done: 0, delivery: 0}};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TYPES:
            return {...state};
    }

    return state;
}
