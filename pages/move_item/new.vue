<template>
	<div>

		<main class="container">

			<UIModalWindow :modal-name="'трансфер'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit" :on-click-exit="exit"/>

			<section id="pageName">
				<UIPageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<UIButtonBlue :onClick="back" class="BlueButton">Назад</UIButtonBlue>
			</section>

			<section class="form table-responsive">

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Отправляемые элементы : </span>

					<!--						<label class="typo__label">Tagging</label>-->
					<multiselect
						class="form-control"
						v-model="value"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"

						:options="options"
						:multiple="true" >

					</multiselect>
					<!--						<pre class="language-json"><code>{{ value  }}</code></pre>-->

				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Откуда : </span>
					<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element ">
					<span class="input-group-text" id="inputGroup-sizing-default">Куда : </span>
					<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Комментарий : </span>
<!--					<textarea id="startDate" class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">-->

<!--					</textarea>-->
					<UITextEditor class="form-control" id="startDate" />
				</div>

				<div class="input-group element  date">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата отправления : </span>
					<input id="startDate" class="form-control" type="date" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>

				<div class="input-group element  date">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата получения : </span>
					<input id="endDate" class="form-control" type="date" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>

				<UIButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</UIButtonBlue>
			</section>
		</main>

	</div>
</template>

<script>




// UI

import Multiselect from 'vue-multiselect'




export default {
	name: "NewTransfer",
	components: {Multiselect},
	data(){
		return{
			pageName: 'Новый трансфер',

			showModal: false,

			// Multiselect

			value: [
				// { name: 'Javascript', code: 'js' }
			],
			options: [
				{ name: '2.4 Сцинтиблок : ЛУЧ.602.01.02.00 - TH7345 154-09.19', id: 1 },
				{ name: 'Адаптер USB-4UART : ОКР.057.00.02.00 - 22-51-2', id: 2 },
				{ name: 'Адаптер USB-BLE5-BT52 : ЛУЧ.950.00.04.00 - 21-371-2', id: 3 }
			]
		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/move_item")
		},

		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлен трансфер")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Трансфер сохранен")
			this.showModal = !this.showModal
		},
    exit(){
      this.showModal = !this.showModal
    }
	},
}
</script>

<style lang="css" scoped>
.comment{
}

.input-group{
	min-width: 585px;
}

.BlueButtonContainer{
	width: 97%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}

.modal{
	z-index: 9999;
}

.form{
	border: 2px solid rgba(72, 71, 71, 0.24);
	padding: 50px;
	margin: 10px;
}


@media screen and (min-width: 1000px){
	.date{
		width: 26%;
	}
}

@media screen and (max-width: 999px){
	#startDate{min-width: 585px;}
	#endDate{min-width: 585px;}
}

.element{
	margin-bottom: 1.5em

}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
