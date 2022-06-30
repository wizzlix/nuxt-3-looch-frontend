<template>
	<div>

		<main class="container">

			<section id="pageName">
				<UIPageNameH1 :page-name="pageName" />
			</section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${page}` + `${newAlias}`">
          <UIButtonBlue class="BlueButton">Добавить персонал</UIButtonBlue>
        </NuxtLink>
      </section>

			<section id="table">
				<PagesEmployeesTable/>
			</section>

		</main>

	</div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Персонал | Service Looch"}`
})
</script>

<script>

export default {

	name: 'EmployeesMainPage',
	data() {
		return {
			pageName: 'Персонал',
      page: "/employees/",
      newAlias: "new/"
		}
	},
}
</script>

<style lang="css">

</style>
