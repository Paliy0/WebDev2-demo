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
</template>

<script>
export default {
    name: "StockItem",
    props: {
        name: String,
        price: Number,
        previousPrice : Number,
        currency: String,
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