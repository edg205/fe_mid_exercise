<template>
  <div class="checkout-button">
    <button
      :class="this.totalForAllKeys === 0 ? 'disabled' : 'active' "
      :disabled="this.totalForAllKeys === 0"
    >Proceed to Checkout</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CheckoutButton",
  computed: {
    ...mapState(["totalForAllKeys"])
  }
};
</script>

<style lang="scss" scoped>
.checkout-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 150px;
  background-color: #b4e9f2;
  button {
    width: 415px;
    height: 80px;
    border-radius: 10px;
    font-size: 2rem;
    margin-top: 3rem;
    margin-right: 2rem;
    margin-bottom: 1.5rem;
    &.disabled {
      background-color: #9b9b9b;
      color: #fff;
      font-weight: bold;
      opacity: 0.1;
    }
  }
}
</style>
