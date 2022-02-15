<template>
	<table class="table table-striped">
		<tr v-for="item in items" :key="item.description">
			<td :class="item.done ? 'done' : 'active'">
				{{ item.description }}
			</td>
			<td>
				<input
					type="checkbox"
					v-model="item.done"
					@change="displayItems"
				/>
			</td>
		</tr>
	</table>
	<br />
	<input type="text" id="description" v-model="description" /><button
		@click="addItem"
	>
		Add
	</button>
</template>

<script>
import items from "./data.json";
export default {
	name: "Todos",
	data() {
		return items;
	},
	mounted() {
		console.log(this.items);
	},
	methods: {
		addItem() {
			const newTask = {
				id: this.getMaxId(),
				description: this.description,
				done: false
			};
			this.items = [...this.items, newTask];
			this.description = "";
		},
		getMaxId() {
			const ids = this.items.map((item) => item.id);
			return Math.max(...ids) + 1;
		}
	}
};
</script>

<style>
td {
	text-align: left;
}

.active {
	color: darkblue;
}

.done {
	color: lightgrey;
}
</style>
