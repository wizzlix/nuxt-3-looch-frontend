<template>
	<div>
		<section>
		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" role="dialog" data-backdrop="static" data-keyboard="false">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Добавить {{modalName}}?</h5>
						<UIButtonBlue :onClick="onClickExit" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></UIButtonBlue>
					</div>
					<div class="modal-body">
           <h6 class="small-text">Если вы хотите сохранить запись, и продолжить ее редактирование - нажмите
             <br><span>"Сохранить и продолжить"</span></h6>
            <h6 class="small-text">Если вы хотите отправить запись в базу - нажмите
              <br><span>"Сохранить"</span></h6>
          </div>
					<div class="modal-footer">
						<UIButtonBlue :onClick="onClickExit" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</UIButtonBlue>
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


import $ from 'jquery'

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
      required: true
		}
	},
  // mounted(){
  //   $('#exampleModal').modal({
  //     backdrop: 'static',
  //     keyboard: false
  //   })
  // }
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
