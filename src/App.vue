<template>
  <div id="app">
    <div class="main-components">
      <FormAdd/>
      <StorePage/>
    </div>
  </div>
</template>

<script>

import StorePage from './pages/StorePage.vue'
import FormAdd from './pages/FormAdd.vue'

export default {
  components:{
    StorePage,
    FormAdd,
  }
}
</script>


<style lang="scss" scoped>
.main-components{
  display: flex;
    @media screen and (max-width: 740px){
      display: block;
      
     }
}
.app{
  background-color: #faf9f7;
}
</style>
