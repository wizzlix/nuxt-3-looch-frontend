<template>

	<div class="container">

		<div class='table-responsive'>

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


<!--				{id: 1, flied: "Яунлорское", pad: 494, well: 144,name: "рейс 1 (короткая сборка)", date: "2022/04/21 20:45", result: "Успех", malfunction: "Не имеет значения", disc: "представители ЛУЧ: Афонин, Тейтельбаум\n" +-->
<!--				"\n" +-->
<!--				"папка проекта +\n" +-->
<!--				"\n" +-->
<!--				"Комплекс: только струна" },-->

				<tr v-for="(item, index) in runs" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>

					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="{path: `fields/${item.id}`}">
							<div class="table-link" style="text-align: center;">{{ item.flied }}</div>
						</nuxt-link>
					</td>
					<!--					TODO: Page PADS-->
					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="{path: `pads/${item.id}`}">
							<div class="table-link" style="text-align: center;">{{ item.pad }}</div>
						</nuxt-link>
					</td>


<!--					TODO: Page WELLS-->
					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="{path: `wells/${item.id}`}">
							<div class="table-link" style="text-align: center;">{{ item.well }}</div>
						</nuxt-link>
					</td>

					<!--TODO: PAGE RUNS-->
					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="{path: `runs/${item.id}`}">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</nuxt-link>
					</td>

					<td>
							<div  style="text-align: center;">{{ item.date }}</div>
					</td>

					<td>
						<div cstyle="text-align: center;">{{ item.result }}</div>
					</td>

					<td>
						<div  style="text-align: center;">{{ item.malfunction }}</div>
					</td>

					<td>
						<div  style="text-align: center;">{{ item.disc }}</div>
					</td>
				</tr>


				</tbody>

			</table>
		</div>

	</div>

</template>

<script>

import TableTemplate from '~/components/UI/Future/TableTemplate'

export default {
	name: 'CustomersTable',

	components: {
		TableTemplate
	},


	data: function () {
		return {
			headers: ["№", "Месторождение", "Куст","Скважина","Название","Дата начала рейса","Результат","Неисправность","Описание"],

			runs: [
				{id: 1, flied: "Яунлорское", pad: 494, well: 144,name: "рейс 1 (короткая сборка)", date: "2022/04/21 20:45", result: "Успех", malfunction: "Не имеет значения", disc: "представители ЛУЧ: Афонин, Тейтельбаум\n" +
						"\n" +
						"папка проекта +\n" +
						"\n" +
						"Комплекс: только струна" },
			],

			// optionValue: null,
			// searchValue: '',
			// endingTemp: "записей",
			// endingZero: '',
			// ending: "записей",
			// smallTextContentAll: "все",
			// minCount: 1,
			// maxCount: 10,
			// allCount: 10,
		}
	},


	// computed: {
	// 	filteredCustomers() {
	// 		return this.customers.filter(item => {
	// 			return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
	// 		})
	// 	},
	// },
	// methods: {
	// 	countRows(value) {
	// 		if (value === "-1") {
	// 			console.log(this.customers.slice(0, this.customers.length));
	// 		} else {
	// 			console.log(this.customers.slice(0, value + 1));
	// 		}
	// 	}
	// },

	mounted(){
		$(document).ready(function () {
			$('table').DataTable();
		});
	},


}
</script>

<style scoped lang="scss">
.container{
	width: 99%;
}
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
