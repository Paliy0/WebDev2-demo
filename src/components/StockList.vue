<template>
    <table class="table string-striped">
        <tbody>
            <tr v-show="!item.done in stocks" :key=stock.name>
                <td>{{stock.name}}</td>
                <td>
                    <b> {{stock.currency}} {{stock.price}}</b>
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="addItem()"> Add </button>


</template>

<script>
export default {
    name: 'StockList',
    data() {
        return{
            stocks: [
           { name: "BMW", price: 61.05, previousPrice: 0, currency: "€" },
           { name: "Caterpillar", price: 146.49, previousPrice: 0, currency: "$" },
           { name: "AMD", price: 76.5, previousPrice: 0, currency: "$" },
           { name: "Gazprom", price: 4.583, previousPrice: 0, currency: "$" },
        ],
        portfolio: [],
        };
    },
    methods: {
        updatePrice() {
            this.stocks.forEach((stock) => {
                stock.previousPrice = stock
                stock.price += (Math.random() - 0.5) * 2;
                if (stock.price < 0) {
                    stock.price = 0;
                }
            })
        },
        getMAxId(){
            
        }

    },
    mounted() {
        //setInterval(() => this.updatePrice(), 1000); //runs the function every sec
    }

}
</script>

<style>

</style>    