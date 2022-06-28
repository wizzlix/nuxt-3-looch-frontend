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
						<UIBlueButton :onClick="onClickExit" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></UIBlueButton>
					</div>
					<div class="modal-body">
           <h6 class="small-text">Если вы хотите сохранить запись, и продолжить ее редактирование - нажмите
             <br><span>"Сохранить и продолжить"</span></h6>
            <h6 class="small-text">Если вы хотите отправить запись в базу - нажмите
              <br><span>"Сохранить"</span></h6>
          </div>
					<div class="modal-footer">
						<UIBlueButton :onClick="onClickExit" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</UIBlueButton>
						<UIButtonBlue :onClick="onClickSave" data-bs-dismiss="modal">Сохранить и продолжить</UIButtonBlue>
						<UIButtonBlue :onClick="onClickSaveAndPush">Сохранить</UIButtonBlue>
					</div>
				</div>
			</div>
		</div>
		</section>
	</div>
</template>

<script>


export default {

	props: {
		onClickSave: {
			type: Function,
			required: true,
		},
		onClickSaveAndPush: {
			type: Function,
			required: true,
		},
    onClickExit: {
      type: Function,
      required: true
    },
		modalName: {
			type: String,
		}
	}
}
</script>

<style lang="scss" scoped>
.modal{
	z-index: 9999;
}
.small-text{
  color: rgba(91, 91, 89, 0.78);
  font-size: 13px;
  font-stretch: semi-condensed;
  span{
    font-size:  14px;
    font-weight: bolder;
  }
}
</style>
