<template>
  <div>

    <main class="container">

      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${page}` + `${newAlias}`">
          <UIButtonBlue class="BlueButton">Добавить заказчика</UIButtonBlue>
        </NuxtLink>
      </section>

      <section id="table">
				<PagesCustomersTable/>
      </section>

    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Заказчики | Service Looch"}`
})
</script>

<script>

export default {
  name: 'CustomersMainPage',

  data() {
    return {
      pageName: 'Заказчики',
      page: "/customers/",
      newAlias: "new/"
    }
  },
}
</script>

<style lang="css">

</style>
