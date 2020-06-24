import axios from 'axios'
import tokenHeader from './tokenHeader'

const myapi = 'http://localhost:8099/test/'

class Authorization{
    getPublicContent(){
        return axios.get(myapi + 'all')
    }
    getAdminPage(){
        return axios.get(myapi + 'admin', {headers : tokenHeader()})
    }
    getUserPage(){
        return axios.get(myapi + 'user', {headers : tokenHeader()})
    }
}

export default new Authorization()