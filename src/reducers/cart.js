export const ADD_ITEM_IN_CART = 'cart/ADD_ITEM_IN_CART';
export const DELETE_ITEM_IN_CART = 'cart/DELETE_ITEM_IN_CART';
export const INCREMENT_ITEM_IN_CART = 'cart/INCREMENT_ITEM_IN_CART';
export const DECREMENT_ITEM_IN_CART = 'cart/DECREMENT_ITEM_IN_CART';

var t = [{...{}, count: 32}]

const initialState = {
    items: [{
        "_id" : 3,
        "name" : "Школьный",
        "model" : "Classic",
        "size" : [
            28,
            35
        ],
        "count": 2,
        "comments" : [
            {
                "_id" : 1,
                "message" : "Купили малышу в школу, остались очень довольны"
            }
        ],
        "views" : 23,
        "likes" : 5,
        "price" : 480,
        "photo" : [
            "3.png"
        ],
        "code" : "68003",
        "desc-short" : "Школьный портфель на детей",
        "desc-full" : "Отличный подарок вашему чаду! Школьный портфель на детей",
        "tags" : [
            "портфель",
            "черный",
            "школа"
        ],
        "sail" : 0,
        "category" : [
            "мужской",
            "городской",
            "школа"
        ],
        "isExists" : true,
        "producer" : "Ukraine",
        "isNewGood" : true
    }]//[{count: 2, _id: 231}, {count: 3, _id: 2331}]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM_IN_CART:
            var newState = {...state};
            var newArr = [];
            if (newState.items.some(el=> el._id == action.payload._id)) {
                newState.items.forEach((el) => {
                    if (el._id == action.payload._id) {
                        let newEl = {...el};
                        newEl.count++;
                        newArr.push(newEl);
                    } else {
                        newArr.push(el);
                    }
                })

            } else {
                var newPayload = {...action.payload};
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



