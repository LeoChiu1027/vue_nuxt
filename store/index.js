import axios from "@/util/axios"
import uri from "@/api/uri"


export const state = () => ({
  drawer: true,
  authUser: null
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  SET_USER(state, user) {
    state.authUser = user
  }
}

export const actions = {
  async nuxtClientInit ({ commit }) {
    console.log('nuxtClientInit');
    let {data} = await axios.get(uri.principal)
    console.log('user', data)
    if(data){
      console.log('user', data.customer)
      commit('SET_USER', data.customer)
    }
  },
  
  async login ({ commit }, { username, password }) {
    try {
      // const { data } = await axios.post('http://localhost:8080/api/login', { username, password })
      const  res  = await axios.post(uri.login, null, {params: {username: username,password: password}}, {headers: {"Content-Type": "application/json"} })
      console.log(res.data)
      commit('SET_USER', res.data.customer)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}




