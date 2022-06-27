<template>
	<div>
		<section>
		<!-- Button trigger modal -->

		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Добавить {{this.modalName}}?</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
						<button-blue :onClick="onClickSave" data-bs-dismiss="modal">Сохранить и продолжить</button-blue>
						<button-blue :onClick="onClickSaveAndPush">Сохранить</button-blue>
					</div>
				</div>
			</div>
		</div>
		</section>
	</div>
</template>

<script>

import ButtonBlue from "~/components/UI/ButtonBlue";
export default {

	components: {ButtonBlue},

	props: {
		onClickSave: {
			type: Function,
			required: true,
		},
		onClickSaveAndPush: {
			type: Function,
			required: true,
		},
		modalName: {
			type: String,
			require: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.modal{
	z-index: 9999;
}
</style>
