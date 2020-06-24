import axios from 'axios'

const myapi = 'http://localhost:8099/auth/'

class Authentication{
    signin(user){
        return axios.post(myapi + 'signin',{
            username: user.username,
            password: user.password
        })
        .then(response => {
            if(response.data.accessToken){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            console.log(response.data)
            return response.data
        })
    }

    signout(){
        localStorage.removeItem('user')
    }

    signup(user){
        return axios.post(myapi + 'signup', {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            address: user.address,
            email: user.email,
            password: user.password
        }).then(response =>{
            console.log(response.data);
        })
        
    }
}

export default new Authentication()