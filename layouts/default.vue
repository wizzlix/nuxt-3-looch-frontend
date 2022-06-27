<template>
  <div>
    <section id="preloader">
<!--      <UIPreloaderPage />-->
    </section>

    <header id="header">
      <NavigationNavBar/>
    </header>

		<div class="wrapper">
				<slot />
		</div>

		<footer>
			<UIFooterTemplate />
		</footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NuxtWrapper',
}
</script>

<style lang="css">
* {
  font-family: 'Roboto Condensed', sans-serif;
}

/* Прижатие футера */
.wrapper {
	min-height: 81vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

body {
  min-width: 300px;
}

</style>
