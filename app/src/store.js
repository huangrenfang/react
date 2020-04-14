import {createStore} from 'redux';

const ADD_NUM = 'ADD_NUM';

function AddActionCreator(data){
    return {
        type: ADD_NUM,
        data
    }
}

function reducer(preState=0,action){
    if(action.type == ADD_NUM){
        return preState + action.data
    }else{
        return preState
    }
    
}

let store = createStore(reducer)

export {
    store,
    AddActionCreator
}