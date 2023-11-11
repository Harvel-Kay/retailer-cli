import axios from "axios";
import Store from "../enums/storage";
import store from "./storage";

axios.defaults.baseURL = "http://localhost:2200/retail";
// axios.defaults.baseURL = "https://retailer-api.osc-fr1.scalingo.io/retail";
axios.defaults.headers[Store.Auth_id] = store.getToken();

const http = axios;

export default http;
