const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

const reducer = (store = INITIAL_VALUE, action)=>{
    let newStore = store;
    if(action.type === 'INCREMENT'){
        newStore = {counter: store.counter + 1};
    }
    else if(action.type === 'DECREMENT'){
        newStore = {counter: store.counter - 1};
    }
    else if(action.type === 'MUL'){
        newStore = {counter: store.counter * 2};
    }
    else if(action.type === 'DIV'){
        newStore = {counter: store.counter / 2};
    }
    else if(action.type === 'MOD'){
        newStore = {counter: store.counter % 2};
    }
    else if(action.type === 'ADDITION'){
        newStore = {counter: store.counter + action.payload.number};
    }
    return newStore;
}

const store = redux.createStore(reducer);

const subscriber = ()=>{
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'MUL'});
store.dispatch({type: 'DIV'});
store.dispatch({type: 'MOD'});
store.dispatch({type: 'ADDITION',payload:{number:10}});