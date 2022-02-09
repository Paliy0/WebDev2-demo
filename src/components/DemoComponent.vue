<template>
    <!--
    <div @click="doSomething"> {{ value }}</div>
    <div v-if="value < 5"> Number{{ number }} should be visible if less than 5</div>
    
    <div> The user {{user.name}} is {{user.age}} years old.</div>
    -->
    <input type="text" v-model="number" /> 
</template>

<script>
export default {
    name: 'Demo',
    data() {
        let user = {
            name: 'Paliyo',
            age: 21
        }
        return user;
    },
    props: {
        value: Number
    },
    methods: {
        doSomething() {
            alert('Doing Something');
        }
    },
    mounted() {
        console.log(this.user);
    }

}
</script>

<style>

</style>