import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
    items: []
};

var inx = 0;

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_ITEM: {
            let item = action.payload;
            let newItem = { id: ++inx, description: item };
            let newState = _.cloneDeep(state);
            newState.items.push(newItem);
            return newState;
        }

        case ACTIONS.Types.DELETE_ITEM: {
            console.log('action payload', action.payload);
            let newState = _.cloneDeep(state);
            console.log('items', newState.items);
            let index = _.findIndex(newState.items, { id: parseInt(action.payload) });
            if (index !== -1) {
                newState.items.splice(index, 1);
                // for (let i = parseInt(action.payload)-1; i < newState.items.length; i++) {
                //     newState.items[i].id -= 1; 
                // }
            }
            return newState;
        }

        case ACTIONS.Types.FETCH_API: {
            let newState = _.cloneDeep(state);
            return newState;
        }

        case ACTIONS.Types.FETCH_API_SUCCESS: {
            let newState = _.cloneDeep(state);
            return newState;
        }

        case ACTIONS.Types.FETCH_API_FAILURE: {
            let newState = _.cloneDeep(state);
            return newState;
        }

        default:
            return state;
    }

};

export default todoReducer;
