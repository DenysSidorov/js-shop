export const ADD_ITEM_IN_CART = 'cart/ADD_ITEM_IN_CART';
export const DELETE_ITEM_IN_CART = 'cart/DELETE_ITEM_IN_CART';
export const INCREMENT_ITEM_IN_CART = 'cart/INCREMENT_ITEM_IN_CART';
export const DECREMENT_ITEM_IN_CART = 'cart/DECREMENT_ITEM_IN_CART';

var t = [{...{}, count: 32}]

const initialState = {
    items: [{count: 2, _id: 231 }, {count: 3, _id: 2331 }]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM_IN_CART:
            console.log(state, 'ST');
            var newState = {...state};


            var newArr = [];
            if (newState.items.some(el=> el._id == action.payload._id)) {
                newArr = newState.items.map((el) => {
                    if (el._id == action.payload._id){
                        el.count = ++el.count
                    }
                    return el;
                })
            } else {
                var newPayload = action.payload;
                newPayload.count = 1;

                newArr = [...newState.items, newPayload]
            }
            return {...newState, items: newArr};
            // Object.assign({}, state, {
            //     completed: !state.completed
            // }

        //return state.count = 545;
        case DELETE_ITEM_IN_CART:
            var newArr = [].concat(state);
            return newArr.filter(el=> el._id != action.payload._id);

        default:
            return state
    }
}

// work without thunk-middleware because returns only plain object {}
// TODO use  --SAGA--

export const pushToCart = (item)=> {
    return {type: ADD_ITEM_IN_CART, payload: item}
};

export const deleteFromCart = (item)=> {
    return {type: DELETE_ITEM_IN_CART, payload: item}
};



