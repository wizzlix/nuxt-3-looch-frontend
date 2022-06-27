<template>
  <div class="container">

    <main>
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

    </main>

  </div>
</template>

<script>

	export default {
		name: "MainPage",
		data(){
			  return{
					pageName: 'Главная',
				}
		},
	}
</script>

<style lang="css">

</style>
