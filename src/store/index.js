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
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = (process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const initialState = {
    projects: [
        {
            id: 1,
            name: "The Pentagon - Phase 2",
            city: "Washington DC",
            state: "USA",
            assetId: 181355,
            longitude: -2.1372577512,
            latitude: 17.6247953124,
            height: 345.9999999991
        }, {
            id: 2,
            name: "Alphabet Offices",
            city: "Kampala",
            state: "Uganda",
            assetId: 181501,
            longitude: 22.3692506111,
            latitude: -30.2452524486,
            height: 1064.1063148356
        }
    ],
    auth: {
        username: "Joel",
        password: "joel",
        isLoggedin: false
    },
    target: {
        assetId: 0,
        longitude: -122.4175,
        latitude: 37.655,
        height: 400
    }
}

const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
)

export const persistor = persistStore(store);

export default store;
