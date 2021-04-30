<template>
  <div class="flex">
    <MobileNav v-on:toggleNav="toggleNav" v-if="showNav" class="absolute top-0 left-0 bg-white mobile-nav z-10 px-4 py-4 lg:hidden"></MobileNav>
    <div @click="toggleNav"><span class="iconify text-4xl text-gray-300 mr-4 lg:hidden" data-icon="radix-icons:hamburger-menu" data-inline="false"></span></div>
    <div class="flex items-center bg-white search-box w-full pl-6 pr-3 py-3 rounded shadow">      
      <span class="iconify text-3xl text-gray-300" data-icon="akar-icons:search" data-inline="false"></span>
      <input type="text" v-model="searchItem" placeholder="find something" class="w-full outline-none ml-5">
      <button class="bg-indigo-900 px-4 py-1 rounded-md text-white btn" @click="search">Search</button>
    </div>
    <div class="w-2/6 ml-6 items-center justify-around hidden lg:flex relative">
      <span class="iconify text-4xl mr-5 text-indigo-900" data-icon="bx:bxs-bell" data-inline="false"></span>
      <div class="flex items-center">
        <div class="w-10 h-10 relative mr-5">
          <div class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        <p class="inline text-xs" @click='this.dropdown = !this.dropdown'>Angry John <span class="iconify inline" data-icon="carbon:caret-down" data-inline="false"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav'
export default {
  components:{
    MobileNav
  },
  data(){
    return {
      showNav: false,
      searchItem: '',
      dropdown: false
    }
  },
  methods:{
    toggleNav(){
      this.showNav = !this.showNav
    },
    search(){
      if(this.searchItem == ''){
        return
      }else{
        this.$store.dispatch('searchPhotos', this.searchItem)
        .finally(()=>{
          this.$store.state.loading = false;
          this.searchItem = ''
        })
      }
    }
  }
}
</script>

<style>
.mobile-nav{
  width: 250px;
}
.search-box{
  background-color: white
}
ul.list{
  list-style-type: none;
  margin: 0
}
.btn{
  outline: none;
  border: none
}
</style>