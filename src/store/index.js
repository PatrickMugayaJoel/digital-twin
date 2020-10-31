import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import reducer from '../reducers'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = (process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

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
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store);

export default store;
