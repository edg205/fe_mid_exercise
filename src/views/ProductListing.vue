<template>
  <div class="product-listing flex direction-column">
    <div class="product-listing-container flex">
      <div class="product-listing-key" v-for="item in listOfKeys" :key="item.id">
        <KeyListing :keyInformation="item" :totalNumberOfKeys="totalNumberOfKeys" />
      </div>
    </div>
    <p v-if="totalNumberOfKeys > 0" class="product-listing-total">Total: {{totalNumberOfKeys}}</p>
    <CheckoutButton :totalNumberOfKeys="totalNumberOfKeys" />
  </div>
</template>

<script>
import KeyListing from "../components/KeyListing";
import CheckoutButton from "../components/CheckoutButton";
import { listOfKeys } from "../helpers/listOfKeys";
import { mapState } from "vuex";

export default {
  name: "ProductListing",
  components: {
    KeyListing,
    CheckoutButton
  },
  computed: {
    ...mapState(["totalNumberOfKeys"])
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
    margin: 5rem auto 3rem;
    .product-listing-key {
      margin: 3rem 5rem;
    }
  }
  .product-listing-total {
    margin-top: 0;
    margin-right: 2rem;
    font-size: 1.2em;
    text-align: right;
  }
}
</style>