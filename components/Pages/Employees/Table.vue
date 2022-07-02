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


				<tr v-for="(item, index) in employees" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>

					<td>
						<NuxtLink no-prefetch class="table-link-container" :to="`${item.href}` + `${item.id}`">
							<div class="table-link" style="text-align: center;">{{ item.surname }}</div>
						</NuxtLink>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.name }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.patron }}</div>
					</td>
				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>

import {mapState} from "pinia";
import {useEmployeesStore} from "../../../stores/employees";

export default {
	name: 'EmployeesTable',

  setup(){
    const employees = useEmployeesStore()
    employees.init()
  },

  computed: {
    ...mapState(useEmployeesStore, {
      employees: 'employees'
    }),
  },


	data: function () {
		return {
			headers: ["№", "Фамилия",  "Имя",  "Отчество"],

		}
	},

  mounted(){
    $(document).ready(function () {
      $('#example').DataTable();
    });
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
