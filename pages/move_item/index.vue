<template>
	<div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${page}` + `${newAlias}`">
          <UIButtonBlue class="BlueButton">Добавить трaнсфер</UIButtonBlue>
        </NuxtLink>
      </section>

			<section class="table">
				<PagesMoveItemTable/>
      </section>

    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Трансфер | Service Looch"}`
})
</script>

<script>

	export default {
		name: "MoveItemMainPage",
		data(){
			  return{
					pageName: 'Трансфер',
          page: "/move_item/",
          newAlias: "new/"
				}
		},

		methods: {
		},
	}
</script>

<style lang="css" scoped>

.BlueButtonContainer{
	width: 97%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}
</style>
