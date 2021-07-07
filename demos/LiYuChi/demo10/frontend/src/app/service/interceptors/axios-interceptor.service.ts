import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosInterceptorService {

  constructor() {}

  configAxiosInterceptor(){
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      console.log('Running Axios Interceptor...')
      // Do something before request is sent
      console.log(config)
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      // Do something with response data
      console.log(response)
      return response;
    }, function (error) {
      // Do something with response error
      console.log(error)
      return Promise.reject(error);
    });
  }

}
