import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const initialState = {
    projects: [
        {
            id: 1,
            name: "Project One",
            city: "city1",
            state: "state1"
        }
    ]
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;
