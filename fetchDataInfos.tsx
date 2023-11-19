
import axios from 'axios';

const options = {method: 'GET', headers: {accept: 'application/json'}};


export default async function fetchDataInfos(names : any) {

    try {
      const response = await axios.get(`https://api.app-mobula.com/api/1/market/multi-data?assets=${names.join(',')}`, options);
      const responseData = response.data;
      
      return responseData;

    } catch (error) {
      console.error(error);
    }
  };