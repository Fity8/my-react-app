import axios from 'axios';

const options = {method: 'GET', headers: {accept: 'application/json'}};


export default async function fetchDataTop10 (){
    try {
      const response = await axios.get(`https://api.app-mobula.com/api/1/market/query?sortBy=market_cap&sortOrder=desc&maxResults=100`, options);
      const data = await response.data;

      if (!data || !Array.isArray(data)) {
        console.error("Invalid data received from API:");
        return;
      }

      const namesArray = data.map(item => item.name);
      return namesArray;

    } catch (error) {
      console.error(error);
    }
    
  };




