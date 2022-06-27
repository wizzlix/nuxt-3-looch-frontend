<template>
  <div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${this.page}` + `${this.new}`">
          <UIButtonBlue class="BlueButton">Добавить элемент</UIButtonBlue>
        </NuxtLink>
      </section>


      <section id="table">
				<PagesItemsTable/>
      </section>
    </main>

  </div>
</template>

<script>




	export default {
		name: "ItemsMainPage",
		data(){
			  return{
					pageName: 'Платы и изделия',
          page: "/items/",
          new: "new/"
				}
		},
	}
</script>

<style lang="css">

</style>
