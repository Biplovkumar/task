import { CheckNet } from '../../../Utils/CommonFun/Index'

//for host & Apis url
import Config from '../../../Utils/Config/Index';

//axios is a library for react native for API calling
import axios from 'axios';

import { GetVisitorCategories } from '../../Queries/Index'

export default class Api {
  constructor(name) {
    this._name = name;
  }
}//end of class




export const callPostRestApis = async (URL) => {

  let Conn = await CheckNet();
  if (!Conn) { throw 'No internet connection.' } else {

    let url = Config.LIVE+URL
    console.log('url callPostRestApis ', url);

    return axios.post(url)
      .then((res) => {
        console.log("callPostRestApis res", res);
        return res.data ? res.data : res;
      })
      .catch((err) => {
        console.log(".catch((err) callPostRestApis", err);
        handleErrors(err); 
      });
  }
};

export const callGetRestApis = async (URL) => {

  let Conn = await CheckNet();
  if (!Conn) { throw 'No internet connection.' } else {

    let url = Config.LIVE+URL
    console.log('url callGetRestApis ', url);

   return axios(url).then((res) => {
        console.log("callGetRestApis res", res);
        return res.data ? res.data : res;
      })
      .catch((err) => {
        console.log(".catch((err) callGetRestApis", err);
        handleErrors(err); 
      });
  }
};



function handleErrors(error) {
  console.log('Error====> :- ', error)
  if (!error.response) {
    // network error
    throw 'Please check your network connection.'
  }
  else {
  // http status code
    const code = error.response.status
    // response data
    const response = error.response.data
    console.log('code :- ' + code + ' response :- ', response)

    if (error.response.status === 400) {
      throw 'Please Provide valid credential.'
    }  
    else if (error&&error.response&&error.response.status == 401) {
      throw 'Session Expired, Please Login Again.'
    }
   


    else {
      throw 'Oops server error occurred'
    }
  }
}