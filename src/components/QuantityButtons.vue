<template>
  <div class="quantity-buttons flex align-items-center">
    <button
      @click="updateQuantity('decrement')"
      :class="this.quantity === 0 ? 'disabled' : 'active'"
      :disabled="this.quantity === 0"
    >-</button>
    <p class="quantity">{{this.quantity}}</p>
    <button @click="updateQuantity('increment')" class="active">+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "QuantityButtons",
  computed: {
    ...mapState(["totalForAllKeys"])
  },
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    updateQuantity(condition) {
      if (condition === "decrement") {
        this.quantity--;
        this.$store.dispatch("decrementTotal");
      } else {
        this.quantity++;
        this.$store.dispatch("incrementTotal");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.quantity-buttons {
  button {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    font-size: 1rem;
  }
  .quantity {
    margin: 0 1rem;
  }
}
</style>
