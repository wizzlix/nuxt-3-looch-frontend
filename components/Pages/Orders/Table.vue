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


				<tr v-for="(item, index) in orders" :key="index">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>


<!--					id: 1,-->
<!--					orderNumber: "400" ,-->
<!--					orderOpeningDate: "2020/11/27" ,-->
<!--					scheduledClosingDate: "2020/12/31" ,-->
<!--					dateOfActualClosing: "" ,-->
<!--					customer: "ПТО",-->
<!--					comment: "№20379014, 20379015, 20379016, 20379017, 20379018, 20379019, 20370020, 20379021, 20379022, 20379023" ,-->


					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="'orders/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.orderNumber }}</div>
						</nuxt-link>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.orderOpeningDate }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.scheduledClosingDate }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.dateOfActualClosing }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.customer }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.comment }}</div>
					</td>

				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>




import {useOrdersStore} from "../../../stores/orders";
import {mapState} from "pinia";

export default {
	name: 'OrdersTable',

  setup(){
    const orders = useOrdersStore()
    orders.init()
  },

  computed: {
    ...mapState(useOrdersStore, {
      orders: 'orders'
    }),
  },
	data: function () {
		return {
			headers: ["№", "Номер заказа",  "Дата открытия заказа",  "Дата планового закрытия", "Дата фактического закрытия", "Заказчик", "Комментарий"],


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
