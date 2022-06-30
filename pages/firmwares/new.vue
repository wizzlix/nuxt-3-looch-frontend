<template>
	<div>

		<main class="container">

			<UIModalWindow :modalName="'прошивку'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit" :on-click-exit="exit"/>


			<section id="pageName">
				<UIPageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<UIButtonBlue :onClick="back" class="BlueButton">
					Назад
				</UIButtonBlue>
			</section>

			<section class="form table-responsive">

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Комментарий : </span>
					<UITextEditor class="form-control" id="startDate" />
				</div>

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Загрузить файл : </span>
					<input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
				</div>

				<UIButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</UIButtonBlue>

			</section>

		</main>

	</div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Добавить прошивку | Service Looch"}`
})
</script>

<script>


export default {
	name: "NewFirmware",
	data(){
		return{
			pageName: 'Новая прошивка',

			showModal: false,

		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/firmwares")
		},

		showModalFunction(){
			this.showModal = !this.showModal
		},
		submit(){
			console.log("Добавлена прошивка")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Прошивка сохранена")
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


.form{
	border: 2px solid rgba(72, 71, 71, 0.24);
	padding: 50px;
	margin: 10px;
}

.element{
	margin-bottom: 1.5em

}
</style>

