import axios from 'axios';
import 'dotenv/config';
import { ServerResponse } from '../types/index';


const api = async () => {
  const response = await axios.request<ServerResponse>({
    url: process.env.REACT_APP_COLAVO_API_URL
  });

  return response.data;
}

export default api
