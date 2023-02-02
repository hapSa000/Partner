import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// URL config
const DOMAIN = 'Api_Live_Url';

export const API_BASE_URL = DOMAIN;

// services points config

// Api call Methods
export const method = {
  put: 'put',
  post: 'post',
  get: 'get',
  delete: 'delete',
};

// axios config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

async function NetworkRequest(requestConfig) {
  try {
    const token = await AsyncStorage.getItem('userToken');
    apiClient.defaults.headers.common.Authorization = token;
    const response = await apiClient.request(requestConfig);

    if (response) {
      const {status} = response;

      if (status === 200) {
        const {data} = response;
        // let apiData = data;

        // if (JSON.parse(apiData.status) === 401) {
        //   console.log(apiData.message);
        //   LogoutFun();
        // }
        // console.log('api data is ', data);
        return data;
      }
    }
    return null;
  } catch (error) {
    // console.log(error.message);
    console.log(error.message);
    return error.message;
  }
}

export default NetworkRequest;
