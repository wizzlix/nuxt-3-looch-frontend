<template>
  <div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section id="table">

      </section>

    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Ремонты модулей | Service Looch"}`
})
</script>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'




	export default {
		name: "CustomerMainPage",
		components: { PageNameH1, },
		data(){
			  return{
					pageName: 'Ремонты модулей',
				}
		},
	}
</script>

<style lang="css">

</style>
