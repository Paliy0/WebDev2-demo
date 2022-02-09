<template>
  <!-- Individual stock -->
    <div class="card">
        <div class="card-body">
          <td>{{ name }}</td>
          <span
            :class="{
              down: price < previousPrice,
              up: price > previousPrice,
            }"
            >{{ currency }} {{ price.toFixed(4) }}</span>
        </div>
      </div>
    <!-- End of individual stocks -->
    <div class="card-footer">
      <input class="form-control" v-model="amount">
      <button @click="purchase">Buy</button>
    </div>
</template>

<script>
export default {
    name: "StockItem",
    props: {
        name: String,
        price: Number,
        previousPrice : Number,
        currency: String,
    },
    data() {
      return {amount: ''}
    },
    methods: {
      purchase(e) {
        e.preventDefault();
        this.$emit("buy", this.stock.name);
        this.amount = ''; //clears field
      }
    }

}
</script>

<style>
.up {
  color: green;
}
.down {
  color: red;
}
</style>