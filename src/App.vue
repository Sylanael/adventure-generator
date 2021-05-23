<template>
  <div id="app">
    <b-container>
          <transition name="fade">
            <router-view></router-view>
          </transition>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  }
};
</script>

<style>


</style>
