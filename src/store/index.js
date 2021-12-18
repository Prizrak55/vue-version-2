import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    select: ''
  },
  mutations: {
    setPost(state, item){
      state.posts = item
    },
    deletePost(state,item){
      state.posts = state.posts.filter(post=> post.id !== item.id)
    },
    addItem(state, item){
      state.posts = [...state.posts,item] 
    },
    setSelect(state, item){
      state.select = item
    }
  },
  actions: {
    //запрос данных с лимитом
   async fetchPosts({commit}){
     let res = await fetch('https://fakestoreapi.com/products?limit=10')
     res = await res.json();
     commit('setPost', res);
     console.log(res)

    }
  },
  getters:{
    //фильтр
    getPosts(state){
      if(state.select === 'название'){
        let res = state.posts.sort((a,b)=>a.title > b.title ? 1: -1)
        return res
      }else
      if(state.select === 'цена'){
        let res = state.posts.sort((a,b)=>a.price > b.price ? 1: -1)
        return res
      }
      return state.posts
    }
  },
  modules: {
  }
})
