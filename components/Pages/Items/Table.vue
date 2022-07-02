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
<!--				id: 1,-->
<!--				name: '1.1 Вилка одноконтактная',-->
<!--				designation: 'ЛУЧ.547.01.02.00',-->
<!--				serial: '18385002{вилка}',-->
<!--				circulationTime: '\t370.0',-->

				<tr v-for="(item, index) in items" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>



					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="'items/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</nuxt-link>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.designation }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.serial }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.circulationTime }}</div>
					</td>

				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>

import {mapState} from "pinia";

import {useItemsStore} from "../../../stores/items";


export default {
	name: 'ItemsTable',

  setup(){
    const items = useItemsStore()
    items.init()
  },

  computed: {
    ...mapState(useItemsStore, {
      items: 'items'
    }),
  },

	data: function () {
		return {
			headers: ["№", "Название", "Обозначение", "Серийный номер", "Время циркуляции"],
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
