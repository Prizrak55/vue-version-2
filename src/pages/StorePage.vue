<template>
  <div>

    <div class="store-page">
      
    <select class="selected" @change="changeOption">
      <option disabled value="">Выберите из списка</option>
      <option>название</option>
      <option>цена</option>
   </select>
          <StoreItem v-for="post in $store.getters.getPosts" :key="post.id" :post="post"/>
        </div>
    </div>
</template>

<script>
import StoreItem from './StoreItem.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: "store-page",
    components:{
      StoreItem
    },
    methods:{
      ...mapActions({
      fetchPosts: './fetchPosts'
    }),
    changeOption(e){
      this.$store.commit('setSelect', e.target.value)
    }
    },
  mounted(){
     this.$store.dispatch('fetchPosts');
  }
}
</script>

<style scoped>

.store-page{
  margin: 83px 0 0 380px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
.selected{
  display: block;
  position: absolute;
  width: 121.49px;
  height: 36px;
  right: 32px;
  top: -45px;
  border: none;
  /* Darks & Whites / White */

  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

</style>