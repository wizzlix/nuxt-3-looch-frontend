<template>

	<div>

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


				<tr v-for="item in customers" :key="item.id">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>

					<td>
						<NuxtLink no-prefetch class="table-link-container" :to="`${item.href}` + `${item.id}`">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</NuxtLink>
					</td>
				</tr>

				</tbody>

			</table>
		</div>

	</div>

</template>

<script>

import {mapState} from "pinia";
import {useCustomersStore} from "../../../stores/customers";


export default {
	name: 'CustomersTable',

  setup(){
    const customers = useCustomersStore()
    customers.init()
  },

	computed: {
		...mapState(useCustomersStore, {
      customers: 'customers'
    }),
	},


	data: function () {
		return {
			headers: ["№", "Название организации"],
		}
	},

  mounted() {

    $('#example').DataTable()
  }
}
</script>

<style scoped lang="scss">

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
