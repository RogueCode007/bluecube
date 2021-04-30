<template>
  <div id="app" class="flex ">
    <div class="nav border hidden lg:block py-8 px-3">
      <Nav></Nav>
    </div>
    <div class="container py-6 px-4 bg-gray-100 w-full">
      <Header class=""></Header>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
export default {
  components:{
    Nav, Header
    
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   min-height: 100vh 
}
.nav{
  min-width: 250px;
  padding: 0 20px
}
</style>
