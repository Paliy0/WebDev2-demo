<template>
	<h1>Todo List</h1>
	<Todo />
</template>

<script>
//import DemoComponent from './components/DemoComponent.vue'
//import StockList from '../src/components/StockList.vue'
import Todo from "./components/Todo.vue";

export default {
	name: "App",
	components: {
		Todo
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 100px 500px;
}
</style>
