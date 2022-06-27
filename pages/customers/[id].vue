<template>
	<div class="container">
		<UIPageNameH1 :pageName="$route.params.id" />
		<div class="content">
			<UIPageNameH3>Месторождения</UIPageNameH3>

			<section class="BlueButtonContainer">
				<UIButtonBlue :onClick="newField" class="BlueButton">Добавить месторождение</UIButtonBlue>
			</section>

			<section>
<!--				<PagesCustomersFieldsFieldTable/>-->
			</section>

			<section>
        <UIPageNameH3>Выполненные рейсы</UIPageNameH3>
<!--        <PagesCustomersFieldsFlightsTable/>-->
			</section>

		</div>
	</div>
</template>

<script>


export default {

	validate({params}) {
		return /^\d+$/.test(params.id)
	},

	name: "EveryCustomer",

	data(){
		return{
	}
	},

	methods:{
		newField(){
			this.$router.push(`/new_field`)
		}
	}
}
</script>

<style scoped lang="scss">


.content{
	margin-top: 70px;
}

.BlueButtonContainer{
	width: 98%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}

.flied-table{
	margin-top: 50px;
}
</style>
