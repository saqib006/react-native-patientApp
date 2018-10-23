
import patientAction from '../action/index';
import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

export class patientEpic{

    

    static getPatient(action$){
        const url = 'https://patientapi.herokuapp.com/api/patient';
        return action$.ofType(patientAction.GET_DATA_PRO).switchMap(()=>{
             return ajax.getJSON(url).map((res)=>{
                return{
                    type:patientAction.GET_DATA_SUC,
                    payload:res
                }
                
            })
        })
    }

    static addPatient(action$){
        const url = 'https://patientapi.herokuapp.com/api/patient';
        return action$.ofType(patientAction.ADD_DATA_PRO).mergeMap(({payload})=>{
            return ajax.post(url,payload, { 'Content-Type': 'application/json' }).map(res=>{
                return{
                    type:patientAction.ADD_DATA_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }


}