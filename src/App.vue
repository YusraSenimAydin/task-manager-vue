<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
@import 'assets/tailwind.css';
</style>
