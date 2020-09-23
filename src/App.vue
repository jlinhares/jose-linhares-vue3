<template>
    <navbar></navbar>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script>
// @ is an alias to /src
  import NavBar from "@/components/NavBar.vue";

  export default {
    name: "Home",
    components: {
      navbar: NavBar
    }
};

</script>

<style lang="scss">

.fade-enter-active
 {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter-from {
  display: box;
  opacity: 0;
}

.fade-enter-to {
  display: box;
  opacity: 1;
}


</style>
