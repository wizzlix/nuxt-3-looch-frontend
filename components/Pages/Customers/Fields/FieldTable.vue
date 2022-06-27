<template>
	<div class='table-responsive flied-table'>
		<table id="example" class="table table-striped table-hover table-responsive" style="width:100%">
			<!--  Header  -->
			<thead>


			<tr>
				<th v-for="(header, index) in headers" :key="index">
					<div style="text-align: center;">
						{{ header }}
					</div>
				</th>
			</tr>


			</thead>
			<!--  Body  -->
			<tbody>


			<tr v-for="(item, index) in fields" :key="index">
				<td>
					<div style="text-align: center;">{{ item.id }}</div>
				</td>

				<td>
					<nuxt-link no-prefetch class="table-link-container" :to="item.href + item.id">
						<div class="table-link" style="text-align: center;">{{ item.name }}</div>
					</nuxt-link>
				</td>
			</tr>


			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "FieldsTable",


	data(){
		return{
			headers: ["№", "Название"],
			fields: [
				{id: 1, name:"Яунлорское", href:"/fields/"},
				{id: 2, name:"Тончинское", href:"/fields/"},
			],
		}
	},

	mounted(){
		$(document).ready(function () {
			$('example').DataTable();
		});
	},
}
</script>

<style lang="scss" scoped>

.table-link-container {
	text-decoration: none;
}

.table-link {
	color: $table-link;
	text-decoration: none;

&:hover{
	 text-decoration: none;
	 transition-duration: 0.3s;
	 transform: scale(1.01);
	 cursor: pointer;
 }
}

</style>
