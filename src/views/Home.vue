<template>
  <div class="mt-6">
      <div class="mt-6 mb-6 hidden  lg:flex bg-white justify-between items-center rounded shadow">
        <p class="py-2 text-sm text-center border-r-2 w-full cursor-pointer">World <span class="iconify inline" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></p>
        <p class="py-2 text-sm text-center border-r-2 w-full cursor-pointer">Following <span class="iconify inline" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></p>
        <p class="py-2 text-sm text-center border-r-2 w-full cursor-pointer">Gender <span class="iconify inline" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></p>
        <p class="py-2 text-sm text-center border-r-2 w-full cursor-pointer">Post <span class="iconify inline" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></p>
        <p class="py-2 text-sm text-center border-r-2 w-full cursor-pointer">Location <span class="iconify inline" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></p>
        <p class="py-2 text-sm text-center w-full cursor-pointer">Profession <span class="iconify inline" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></p>
      </div>
      <div v-for="data in dataArr" :key="data.id" class="image cursor-pointer mt-8">
        <SingleImage :data="data" />
      </div>
      <Loading v-show="this.$store.state.loading"/>
      <Error v-show="this.$store.state.error"></Error>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleImage from '@/components/SingleImage'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    SingleImage, Loading, Error
  },
  data(){
    return {
      
    }
  },
  computed: mapState({
    dataArr : state => state.dataArr
  }),
  created(){
    this.$store.dispatch('getImages')
    .finally(()=>{
      this.$store.state.loading = false
    })
  }

}
</script>
<style scoped>
.modal{
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0, 0.1);
}
.loading-modal{
  min-height: 350px;
  
}

@media only screen and (min-width:768px){
  .image{
  width: 40%;
  margin: 5%;
  display: inline-block;
  
  }

}

@media only screen and (min-width:1024px){
  .image{
    width: 23%;
    margin: 1%;
  }
}

</style>
