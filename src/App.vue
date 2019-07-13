<template>
  <div id="app">
    <ProductListing />
  </div>
</template>

<script>
import ProductListing from "./views/ProductListing.vue";

export default {
  name: "App",
  components: {
    ProductListing
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  color: #838383;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  .flex {
    display: flex;
    &.align-items-center {
      align-items: center;
    }
    &.column {
      flex-direction: column;
    }
  }
  .active {
    border: 2px solid #ff6241;
    color: #ff6241;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }
}
</style>
