<template>
   <div class="modal">
      <div class="loading-modal w-full">
          <div class="text-center loader">
            <div class='text-indigo-900 text-2xl font-bold'>
              <p>Oops, an error has occured!</p>
              Most likely a network issue, try reloading the page
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader{
  position: relative;
  top: 150px;
}

</style>