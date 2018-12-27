//type of action
const Types = {
    CREATE_ITEM: 'CREATE_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    FETCH_API: 'FETCH_API',
    FETCH_API_SUCCESS: 'FETCH_API_SUCCESS',
    FETCH_API_FAILURE: 'FETCH_API_FAILURE'
};

//actions
const createItem = input => ({
    type: Types.CREATE_ITEM,
    payload: input
});

const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
});

const fetchAPI = text => ({
    type: Types.FETCH_API,
    payload: text
});

const fetchAPISuccess = text => ({
    type: Types.FETCH_API_SUCCESS,
    payload: text
});

const fetchAPIFailure = error => ({
    type: Types.FETCH_API_FAILURE,
    payload: error
});

export default {
    createItem,
    deleteItem,
    fetchAPI,
    fetchAPISuccess,
    fetchAPIFailure,
    Types
};