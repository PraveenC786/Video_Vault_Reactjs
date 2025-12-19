import axios from "axios";

const Api = axios.create({
    // baseURL : "http://localhost:4000"
    baseURL : "/api/"
})

export default Api


// baseURL --> pre defined key (property) 