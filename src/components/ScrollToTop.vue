<template>
  <div>
    <button
      id="toTopButton"
      v-on:click="scrollToTop"
      type="button"
      alt="Botón de vuelta al inicio"
    >🠕</button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style>
#toTopButton {
  padding: 2px 7px 2px 7px;
  border: solid 1px white;
  border-radius: 5px;

  background: #335963;
  color: white;

  position: fixed;
  right: 10px;
  bottom: 10px;
  transition: 0.3s;
  z-index: 2000;

  font-weight: bolder;
  font-size: 50px;
}

#toTopButton:hover {
  transform: scale(1.1);
}
</style>
