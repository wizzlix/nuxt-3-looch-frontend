<template>
  <div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${page}` + `${newAlias}`">
          <UIButtonBlue class="BlueButton">Добавить элемент</UIButtonBlue>
        </NuxtLink>
      </section>


      <section id="table">
				<PagesItemsTable/>
      </section>
    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Платы и изделия | Service Looch"}`
})
</script>

<script>




	export default {
		name: "ItemsMainPage",
		data(){
			  return{
					pageName: 'Платы и изделия',
          page: "/items/",
          newAlias: "new/"
				}
		},
	}
</script>

<style lang="css">

</style>
