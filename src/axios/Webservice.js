import axios from "axios";

class Webservice{

    getApiCall (URL){
        return axios.get(URL)
    }

    postApiCall (URL,data){
        return axios.post(URL,data)
    }

    deleteApiCall (URL,id){
        return axios.delete(URL,id)
    }

    putApiCAll (URL,id){
        return axios.put(URL,id)
    }
}

export default new Webservice();