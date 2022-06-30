<template>
  <div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>


      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${page}` + `${newAlias}`">
          <UIButtonBlue class="BlueButton">Добавить заказ</UIButtonBlue>
        </NuxtLink>
      </section>

			<section id="table">
				<PagesOrdersTable/>
      </section>

    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Заказы | Service Looch"}`
})
</script>

<script>
	export default {
		name: "OrdersMainPage",
		data(){
			  return{
					pageName: 'Заказы',
          page: "/orders/",
          newAlias: "new/"
        }
		},
	}
</script>

<style lang="css">

</style>
