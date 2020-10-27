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
            name: "The Pentagon - Phase 2",
            city: "Washington DC",
            state: "USA"
        }, {
            id: 2,
            name: "Alphabet Offices",
            city: "Kampala",
            state: "Uganda"
        }
    ],
    auth: {
        username: "Joel",
        password: "joel",
        isLoggedin: false
    }
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;
