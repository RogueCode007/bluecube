import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataArr:[],
    loading: false,
    error: false
  },
  mutations: {
    changeDataArr(state, val){
      state.dataArr = val;
    },
    changeLoading(state){
      state.loading = true
    },
    changeError(state){
      state.loading = false
      state.error = true
    }
  },
  actions: {
    getImages({commit}){
      return new Promise((resolve, reject)=>{
        commit('changeLoading')
        axios.get('https://api.unsplash.com/photos', {
          headers:{
            'Accept-Version': 'v1',
          }
        })
        .then(res=>{
          commit('changeDataArr', res.data)
          resolve()
        })
        .catch(err => {
          
          commit('changeError')
          reject(err)
        })

      })
    },
    searchPhotos({commit}, val){
      return new Promise((resolve, reject)=>{
        commit('changeLoading')
        axios.get('https://api.unsplash.com/search/photos', {
          headers:{
            'Accept-Version': 'v1',
          },
          params:{
            'query': val,
            'orientation': 'portrait'
          }
        })
        .then(res=> {
          commit('changeDataArr', res.data.results)
          resolve()
        })
        .catch(err=>{
          commit('changeError')
          reject.log(err)
        })
      })
    }
  },
  modules: {
  }
})
