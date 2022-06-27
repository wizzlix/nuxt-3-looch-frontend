<template>
  <div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>


      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${this.page}` + `${this.new}`">
          <UIButtonBlue class="BlueButton">Добавить заказ</UIButtonBlue>
        </NuxtLink>
      </section>

			<section id="table">
				<PagesOrdersTable/>
      </section>

    </main>

  </div>
</template>

<script>






	export default {
		name: "OrdersMainPage",
		data(){
			  return{
					pageName: 'Заказы',
          page: "/orders/",
          new: "new/"
        }
		},
	}
</script>

<style lang="css">

</style>
