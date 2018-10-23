import patientReducer from './reducer/index';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {patientEpic} from './epic/index';




const rootReducer = combineReducers({
    patientReducer
})

const rootEpic = combineEpics(
    patientEpic.getPatient,
    patientEpic.addPatient
   
)

const epicMiddleware = createEpicMiddleware(rootEpic)


const connectStoreMiddleware = applyMiddleware(epicMiddleware)

export let store = createStore(rootReducer, connectStoreMiddleware)
