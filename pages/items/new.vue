<template>
	<div>

		<main class="container">

			<UIModalWindow :modal-name="'элемент'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit" :on-click-exit="exit"/>

			<section id="pageName">
				<UIPageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<UIButtonBlue :onClick="back" class="BlueButton">Назад</UIButtonBlue>
			</section>

			<section class="form table-responsive">


				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Название : </span>
					<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<UIButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</UIButtonBlue>

			</section>
		</main>

	</div>
</template>

<script>

export default {
	name: "NewItems",
	data(){
		return{
			pageName: 'Новый элемент',

			showModal: false,

		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/items")
		},

		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлен элемент")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Элемент сохранен")
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

