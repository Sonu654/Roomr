export const DATA_AVAILABLE ='DATA_AVAILABLE';

//import Data from '../instruction.json';
//                   instruction.json
data={
    'u01':{
        'uname':'Suraj123',
        'name':'Suraj Sanwal'
    },
    'u02':{
        'uname':'Dheeraj123',
        'name':'Dheeraj Sanwal'
    }
};

export function getData(){
  return (dispatch)=>{
      setTimeout(()=>{
        var data=Data.instructions;
        dispatch({type:DATA_AVAILABLE,data:data});
      },2000);
  }
}
