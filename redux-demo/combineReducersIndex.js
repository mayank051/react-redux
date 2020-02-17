//To run this file use command "node combineReducersIndex" in the terminal

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
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

const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// reducer -> (previousState, action) => newState

const cakeReducer = (state = initialCakeState , action) =>{
    switch(action.type)
    {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }  
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState , action) =>{
    switch(action.type)
    { 
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }  
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//createStore accepts reducer function as parameter which has initialState as parameter
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

//unsubscribing store
unsubscribe()

