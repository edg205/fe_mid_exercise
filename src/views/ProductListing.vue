<template>
  <div class="product-listing flex column">
    <div class="product-listing-container flex">
      <div class="product-listing-key" v-for="item in listOfKeys" :key="item.id">
        <KeyListing :keyInformation="item" />
      </div>
    </div>
    <CheckoutButton />
  </div>
</template>

<script>
import KeyListing from "../components/KeyListing";
import CheckoutButton from "../components/CheckoutButton";
import { listOfKeys } from "../helpers/listOfKeys";

export default {
  name: "ProductListing",
  components: {
    KeyListing,
    CheckoutButton
  },
  data() {
    return {
      listOfKeys: listOfKeys
    };
  }
};
</script>

<style scoped lang="scss">
.product-listing {
  max-width: 850px;
  margin: 0 auto;
  .product-listing-container {
    margin: 5rem auto;
    .product-listing-key {
      margin: 3rem 5rem;
    }
  }
}
</style>