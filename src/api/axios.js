/* eslint-disable no-unused-vars */
import axios from "axios";

 const instance = axios.create({
    baseURL : 'https://api.slingacademy.com/v1'
 });
 export default instance;

 //sample -- https://api.slingacademy.com/v1/sample-data/blog-posts

 //http://localhost:8000/api/