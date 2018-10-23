import patientAction from '../action/index';

const INITIAL_STATE = {
    isLoad:false,
    patients:[],
    search:[]
}


export default function patientReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case patientAction.GET_DATA_PRO:
            return Object.assign({}, state, {isLoad:true})
        case patientAction.GET_DATA_SUC:
            return Object.assign({}, state, {isLoad:false, patients:action.payload})

        case patientAction.ADD_DATA_PRO:
            return Object.assign({}, state, {isLoad:true})

        case patientAction.ADD_DATA_SUC:
            console.warn('reducer', action.payload)
            return Object.assign({}, state, {isLoad:false, patients:[...state.patients, action.payload]})
        
        case patientAction.SEARCH_PATIENT:
            return Object.assign({}, state, {search:state.patients.filter(value => value.name === action.payload.text)})   
            
        default: 
            return state
    }
}