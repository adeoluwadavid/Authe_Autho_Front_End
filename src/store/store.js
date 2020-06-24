import Authentication from '../services/authentication'

const user = JSON.parse(localStorage.getItem('user'))

const myState = user
         ? { status: { loggedIn: true }, user } 
         : { status: { loggedIn: false }, user: null }

export const auth = {
    namespaced: true,
    state: myState,
    mutations: {
        signinSuccess(state, user) {
            state.status.loggedIn = true
            state.user = user
        },
        signinFailure(state) {
            state.status.loggedIn = false
            state.user = null
        },
        signout(state) {
            state.status.loggedIn = false
            state.user = null
        },
        signupSuccess(state){
            state.status.loggedIn = false
        },
        signupFailure(state){
            state.status.loggedIn = false
        }
    },
    actions: {
        Signin({ commit }, user) {
            return Authentication.signin(user).then(
                user => {
                    commit('signinSuccess', user)
                    return Promise.resolve(user)
                },
                error => {
                    commit('signinFailure')
                    return Promise.reject(error)
                }
            )
        },
        Signout({ commit }) {
            Authentication.signout()
            commit('signout')
        },
        Signup({ commit }, user) {
            return Authentication.signup(user).then(
               response =>{
                   commit('signupSuccess')
                   console.log(response.data)
                   return Promise.resolve(response.data)
               },
               error =>{
                   commit('signupFailure')
                   return Promise.reject(error)
               }
            )
        }
    }
}