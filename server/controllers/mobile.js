import axios from 'axios';

export const getMobile = async (req,res) => {
  const options = {
    method: 'GET',
    url: 'https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-models-by-brandname/Samsung',
    headers: {
      'X-RapidAPI-Key': '3dfd0e33cfmshd18d81dfc6b429bp12cccajsn14d7734814f6',
      'X-RapidAPI-Host': 'mobile-phone-specs-database.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
}