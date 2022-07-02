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
<!--				id: 4,-->
<!--				name: "Узел стыковочный верхний",-->
<!--				designation: "ЛУЧ.596.02.00.00" ,-->
<!--				executor: "Производство 2" ,-->
<!--				type: "Узел",-->

				<tr v-for="item in config" :key="item.id">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>



					<td>
						<NuxtLink no-prefetch class="table-link-container" :to="'orders/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</NuxtLink>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.designation }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.executor }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.type }}</div>
					</td>

				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>

// pinia
import {mapState} from "pinia";
import {useConfigStore} from "../../../stores/config";

export default {
  name: 'ConfigsTable',

  setup(){
    const config = useConfigStore()
    config.init()
  },
  computed: {
    ...mapState(useConfigStore, {
      config: "config"
    })
  },

	data: function () {
		return {
			headers: ["№", "Название", "Обозначение", "Исполнитель", "Тип"],
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
