<template>
  <div class="sidebar ml-8">
    <h1 class="text-indigo-900 font-bold text-2xl"><span class="iconify inline" data-icon="simple-icons:nintendogamecube" data-inline="false"></span>bluecube</h1>
    <ul class="mt-6">
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/'>
          <span class="iconify inline mr-2" data-icon="ant-design:home-filled" data-inline="false"></span>Home
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/message'>
          <span class="iconify inline mr-2" data-icon="bx:bxs-message-alt" data-inline="false"></span>Message
        </router-link>
      </li>
    </ul>
    <p class="mb-3 font-bold text-gray-400">SHARE</p>
    <ul>
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/rank'>
          <span class="iconify inline mr-2" data-icon="ic:sharp-grade" data-inline="false"></span>Ranking
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/challenge'>
          <span class="iconify inline mr-2" data-icon="ic:baseline-task" data-inline="false"></span>Challenge
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/party'>
          <span class="iconify inline mr-2" data-icon="emojione-monotone:party-popper" data-inline="false"></span>Party
        </router-link>
      </li>
      <li class="mb-3">
        <router-link class="text-gray-400 text-base" to='/connect'>
          <span class="iconify inline mr-2" data-icon="entypo:link" data-inline="false"></span>Connect
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
