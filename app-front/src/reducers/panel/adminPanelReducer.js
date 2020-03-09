import {
    GET_TYPES,
} from './types';
let  initialState = {countTypes: {new : 0, progress: 0, done: 0, delivery: 0}};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TYPES:
            let newState = {...state, countTypes: {...initialState.countTypes}};
            if(Array.isArray(action.payload)){
                action.payload.forEach((el)=>{
                    newState.countTypes[el._id] = el.count
                })
            }
          return newState;
    }
    return state;
}
