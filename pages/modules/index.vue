<template>
  <div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

			<section id="table">

      </section>

    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Выпущенные модули | Service Looch"}`
})
</script>

<script>




	export default {
		name: "ModulesMainPage",
		data(){
			  return{
					pageName: 'Выпущенные модули',
				}
		},
	}
</script>

<style lang="css">

</style>
