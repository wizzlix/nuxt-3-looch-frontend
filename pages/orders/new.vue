<template>
	<div>

		<main class="container">

			<UIModalWindow :modal-name="'заказ'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit" :on-click-exit="exit"/>

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="back" class="BlueButton">Назад</ButtonBlue>
			</section>

			<section class="form table-responsive">


				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Название : </span>
					<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>


				<ButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</ButtonBlue>

			</section>
		</main>

	</div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Добавить заказ | Service Looch"}`
})
</script>

<script>


import PageNameH1 from '~/components/UI/PageNameH1.vue'
import ButtonBlue from '~/components/UI/ButtonBlue'


// UI

import ModalWindow from "~/components/UI/ModalWindow";



export default {
	name: "NewOrder",
	components: { PageNameH1, ButtonBlue,ModalWindow},
	data(){
		return{
			pageName: 'Новый заказ',

			showModal: false,

		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/orders")
		},

		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлен заказ")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Заказ сохранен")
			this.showModal = !this.showModal
		},
    exit(){
      this.showModal = !this.showModal
    }
	},
}
</script>

<style lang="css" scoped>


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

