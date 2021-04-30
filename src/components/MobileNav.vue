<template>
  <div class="sidebar-mobile ">
    <h1 class="text-indigo-900 font-bold text-2xl"><span class="iconify inline" data-icon="simple-icons:nintendogamecube" data-inline="false"></span>bluecube</h1>
    <div @click="toggleNav" class="absolute top-4 right-4 z-10"><span class="iconify text-lg text-indigo-900" data-icon="fxemoji:cancellationx" data-inline="false"></span></div>
    <ul class="mt-6">
      <li class="mb-3">
        <router-link class="text-gray-400 text-lg" to='/'>
          <span class="iconify inline mr-2" data-icon="ant-design:home-outlined" data-inline="false"></span>Home
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-lg" to='/mess'>
          <span class="iconify inline mr-2" data-icon="bx:bxs-message-alt" data-inline="false"></span>Message
        </router-link>
      </li>
    </ul>
    <p class="mb-3 font-bold text-gray-400">SHARE</p>
    <ul>
      <li class="mb-3">
        <router-link class="text-gray-400 text-lg" to='/hujh'>
          <span class="iconify inline mr-2" data-icon="ic:sharp-grade" data-inline="false"></span>Ranking
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/gh'>
          <span class="iconify inline mr-2" data-icon="ic:baseline-task" data-inline="false"></span>Challenge
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-lg" to='/par'>
          <span class="iconify inline mr-2" data-icon="emojione-monotone:party-popper" data-inline="false"></span>Party
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-lg" to='/con'>
          <span class="iconify inline mr-2" data-icon="entypo:link" data-inline="false"></span>Connect
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 methods:{
   toggleNav(){
     this.$emit('toggleNav')
   }
 }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar-mobile{
  min-height: 100vh
}
.router-link-exact-active{
  border: 1px solid;
  padding: 3px 8px;
  border-radius: 8px;
  background-color: white;
  color: rgba(49, 46, 129, 1)
}
.router-link-exact-active span.iconify{
  color: rgba(49, 46, 129, 1)
}
</style>
