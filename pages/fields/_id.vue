<template>
	<div class="container">
		<PageNameH1 :pageName="$route.params.id" />
	</div>
</template>

<script>
import PageNameH1 from "~/components/UI/PageNameH1";

export default {

	validate({params}) {
		return /^\d+$/.test(params.id)
	},

	name: "EveryField",
	components: {PageNameH1},

	data() {
		return {
			pageName: 'Заказчик',
		}
	}
}
</script>

<style scoped>

</style>
