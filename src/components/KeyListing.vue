<template>
  <div class="key-listing flex direction-column align-items-center">
    <CircleBackground />
    <img class="key-listing-image" :src="keyInformation.image" />
    <p class="key-listing-name">{{keyInformation.name}}</p>
    <p class="key-listing-price">${{keyInformation.price}}</p>
    <QuantityButtons />
  </div>
</template>

<script>
import CircleBackground from "../components/CircleBackground";
import QuantityButtons from "../components/QuantityButtons";

export default {
  name: "KeyListing",
  components: {
    CircleBackground,
    QuantityButtons
  },
  props: {
    keyInformation: Object
  }
};
</script>

<style lang="scss" scoped>
.key-listing {
  .key-listing-image {
    position: relative;
    top: -2rem;
    height: 200px;
    transform: rotate(-45deg);
  }
  .key-listing-name {
    margin-top: -2.5rem;
    margin-bottom: 0;
    font-size: 0.9rem;
  }
  .key-listing-price {
    margin-top: 5px;
    font-size: 0.7rem;
    color: #9b9b9b;
    font-weight: bold;
  }
}
</style>
