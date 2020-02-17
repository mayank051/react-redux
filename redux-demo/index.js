//To run this file use command "node index" in the terminal

const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

//Initial State

const initialState = {
    numOfCakes : 10,
    numOfIceCreams: 20
}

// reducer -> (previousState, action) => newState

const reducer = (state = initialState , action) =>{
    switch(action.type)
    {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }  
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }  
        default: return state
    }
}

//createStore accepts reducer function as parameter which has initialState as parameter
const store = createStore(reducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

//unsubscribing store
unsubscribe()

