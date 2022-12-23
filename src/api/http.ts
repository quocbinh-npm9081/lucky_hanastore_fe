import axios, {AxiosInstance} from 'axios';
const host_be = process.env.REACT_APP_HOST_BE;

class Http {
    intence: AxiosInstance;
    constructor(){
        this.intence = axios.create({
            baseURL: "http://localhost:5000",
         //   timeout: 5000,
            headers: {'Content-Type': 'application/json'}
        })
    }
}
export default new Http().intence;