<template>
  <div>
    <button v-on:click="scrollToTop" type="button">To The Top</button>
  </div>
</template>

<script>
export default {
  data: {
    name: "ScrollToTop",
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style>
</style>
