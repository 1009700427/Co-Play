import { createStore } from 'redux';

const initialState = {
    playlistName: "",
    playistInfo: {},
    params: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ENTER_PLAYLIST':
            return Object.assign({}, state, {playlistName: action.playlistName});
        case 'ENTER_SONGS':
            return Object.assign({}, state, {playlistInfo: action.playlistInfo});
        case 'RECEIVE_HASH':
            return Object.assign({}, state, {params: action.params});
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store; 