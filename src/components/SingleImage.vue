<template>
  <div class="mb-4">
    <div class="border relative image-box" style="border-radius: 20px">
      <img :src="data.urls.raw" alt="property-image" style="height: 400px; width: 100%; display: block; border-radius: 20px" >  
      <transition name='fade'>
      <div class=" absolute whitebox bg-white z-10 p-2">
        <p class="text-base font-bold text-indigo-900">{{data.user.name}}, {{data.user.total_photos}} photos</p>
        <p v-if="data.user.location" class="text-sm mt-2 text-indigo-900"><span class="iconify inline mr-3" data-icon="fluent:location-28-filled" data-inline="false"></span>{{data.user.location}}</p>
        <p v-else class="text-sm mt-2 text-indigo-900"><span class="iconify inline mr-3 text-indigo-900" data-icon="fluent:location-28-filled" data-inline="false"></span>No location</p>
        <div class="flex justify-between items-center mt-3">
          <div class="text-white bg-red-500 w-full text-center px-3 py-2 mr-2 rounded">
            <div class="mx-auto my-0 w-1/4">
              <span class="iconify" data-icon="akar-icons:heart" data-inline="false"></span>
            </div>
          </div>
          <div class="text-white bg-indigo-900 w-full text-center px-3 py-2 rounded">
            <div class="mx-auto my-0 w-1/4">
              <span class="iconify" data-icon="cil:thumb-down" data-inline="false"></span>
            </div>
          </div>
        </div>
      </div>
      </transition>
      <div class="absolute text">
        <p class="text-base font-bold">{{data.user.name}}, {{data.user.total_photos}} photos</p>
        <p v-if="data.user.location" class="text-sm mt-2"><span class="iconify inline mr-3" data-icon="fluent:location-28-filled" data-inline="false"></span>{{data.user.location}}</p>
        <p v-else class="text-sm mt-2"><span class="iconify inline mr-3" data-icon="fluent:location-28-filled" data-inline="false"></span>No location</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props:['data']
}
</script>

<style scoped>
.text{
  bottom: 40px;
  color: white;
  left: 10px
}
div.whitebox{
  bottom: 0;
  width: 100%;
  display: none;
  height: 0;
  opacity: 0;
  border-radius: 0 0 20px 20px;
  
}
div.image-box:hover div.whitebox{
  height: 150px;
  opacity: 1;
  display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>