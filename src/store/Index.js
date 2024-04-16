import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0, Privacy: false };

const counterReducer = (store = INITIAL_VALUE, action) => {
    if (action.type === 'INCREMENT') {
        return { ...store, counter: store.counter + 1 };
    } else if (action.type === 'DECREMENT') {
        return { ...store, counter: store.counter - 1 };
    }
    else if (action.type === 'Add') {
        return { ...store, counter: store.counter + Number(action.payload.num) };
    }
    else if (action.type === 'Subtract') {
        return { ...store, counter: store.counter - Number(action.payload.num) };
    }
    else if (action.type === 'Privacy') {
        return { ...store, Privacy: !store.Privacy };
    }


    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;