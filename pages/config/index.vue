<template>
<div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${this.page}` + `${this.new}`">
          <UIButtonBlue class="BlueButton">Добавить спецификацию</UIButtonBlue>
        </NuxtLink>
        </section>

      <section class="">
				<PagesConfigTable/>
      </section>

    </main>

</div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Базовые спецификации | Service Looch"}`
})
</script>

<script>
	export default {
		name: "ConfigMainPage",
		data(){
			  return{
					pageName: 'Базовые спецификации',
          page: "/config/",
          new: "new/"
				}
		},

    methods: {
      // newConfig(){
      //   this.$router.push("/config/new")
      // }
    }
	}
</script>

<style lang="css" scoped>

</style>
