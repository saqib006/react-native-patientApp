export default class patientAction{
    static GET_DATA_PRO = 'GET_DATA_PRO';
    static GET_DATA_SUC = 'GET_DATA_SUC';

    static ADD_DATA_PRO = 'ADD_DATA_PRO';
    static ADD_DATA_SUC = 'ADD_DATA_SUC';

    static SEARCH_PATIENT = 'SEARCH_PATIENT';


    static addData(payload){
        return{
            type:patientAction.ADD_DATA_PRO,
            payload:payload
        }
    }

    static getData(){
        return{
            type:patientAction.GET_DATA_PRO
        }
    }

    static searchPatient(payload){
        return{
            type:patientAction.SEARCH_PATIENT,
            payload:payload
        }
    }
}