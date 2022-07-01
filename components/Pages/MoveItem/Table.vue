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

<!--				compound: "ВИКПБ+ГК-172 : ЛУЧ.059.00.00.00-01 - 21617004",-->
<!--				departure_date: "2022/05/05",-->
<!--				from: "ООО НПП ГА \"Луч\"",-->
<!--				to: "ПАО \"Сургутнефтегаз\" УБР-1",-->
<!--				transfer_date: "2022/05/06",-->
<!--				commentary: ".",-->
<!--				status: "Доставлен"-->


				<tr v-for="item in moveitem" :key="item.id">

					<td>

						<!--						todo: Сделать no-prefetch и  :to="item.href + item.id" когда будет бек -->
						<a class="table-link-container"> <!--:to="item.href + item.id"-->
							<div v-for="(compound_item, index) in item.compound" :key="index" class="table-link" style="text-align: center;">
								<div class="text-nowrap">{{ compound_item }}</div>
							</div>
						</a>

					</td>
					<td>
						<!--						todo: Сделать no-prefetch и :to="item.href + item.id" когда будет бек -->
						<a class="table-link-container">  <!--:to="item.href + item.id"-->
							<div class="table-link" style="text-align: center;">{{ item.departure_date }}</div>
						</a>

					</td>
					<td><div style="text-align: center;">{{ item.from }}</div></td>
					<td><div style="text-align: center;">{{ item.to }}</div></td>
					<td><div style="text-align: center;">{{ item.transfer_date }}</div></td>
					<td><div class="commentary" style="text-align: center;" >{{ item.commentary }}</div></td>
					<td>
						<div  v-if=" item.status === 'В пути' " style="text-align: center;" class="onWay">{{ item.status + " " }}
              <br>
              <svg class="onWay-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/></svg>
            </div>
						<div  v-else-if=" item.status === 'Доставлен' " style="text-align: center;" class="delivered">{{ item.status + " " }}
              <br>
              <svg class="delivered-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z"/></svg>
            </div>
						<div  v-else style="text-align: center;">{{ item.status }}</div>
					</td>


				</tr>


				</tbody>

			</table>
		</div>

	</div>

</template>

<script>

// vuex

import {useMoveItemStore} from "../../../stores/moveitem";
import {mapState} from "pinia";


export default {
	name: 'MoveItemTable',

  setup(){
    const moveitem = useMoveItemStore()
    moveitem.init()
  },

  computed: {
    ...mapState(useMoveItemStore, {
      moveitem: 'moveitem'
    }),
  },



	data: function () {
		return {
			headers: ["Состав отправления", "Дата отправления", "Откуда", "Куда", "Дата поступления", "Комментарий", "Статус"],

		}
	},

	mounted() {
    $(document).ready(function () {
      $('#example').DataTable();
    });
	},

}
</script>

<style scoped lang="scss">

.table-link-container {
	text-decoration: none;
}

.commentary{
	font-size: 12px;
}

.text-nowrap{
	white-space: nowrap;
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

.onWay{
	color: $danger-red;
	font-weight: bolder
}

.onWay-svg{
  fill: $danger-red;
  height: 30px;
  width: 30px;
}

.delivered{
	color: $submit-green;
	font-weight: bolder;
	font-size: 16px
}

.delivered-svg{
  fill: $submit-green;
  height: 30px;
  width: 30px;
}


table td {height: 30px; vertical-align: center;} /* выравнивание по верхней границе ячейки */
table td {height: 30px; vertical-align: auto;} /* выравнивание по нижней границе ячейки */
</style>


