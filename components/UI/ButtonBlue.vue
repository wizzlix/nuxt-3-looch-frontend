<template>
		<button @click="onClick"  type="button" class="btn btn-info">
			<strong><slot></slot></strong>
		</button>
</template>

<script>
	export default {
		props: {
			onClick: {
				type: Function,
				required: true
			}
		},
	}
</script>

<style lang="scss" scoped>
.btn-info{
  background-color: $main-blue;
	color: white;
}
</style>
