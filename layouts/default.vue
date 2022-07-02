<template>
  <div>
    <section id="preloader">
      <UIPreloaderPage />
    </section>

    <header id="header">
      <NavigationNavBar :user="user" :pages="pages"/>
    </header>

		<div class="wrapper">
      <div class="container">
        <slot />
      </div>
		</div>

		<footer>
			<UIFooterTemplate />
		</footer>
  </div>
</template>

<script lang="ts">

import {mapState} from 'pinia'
import {useUserStore} from "~/stores/user"
import {usePagesStore} from "~/stores/pages"


export default {
  name: 'NuxtWrapper',


  setup(){
    const user = useUserStore()
    user.init()

    const pages = usePagesStore()
    pages.init()
  },

  computed: {
    ...mapState(useUserStore, {
      user: 'user'
    }),
    ...mapState(usePagesStore, {
      pages: 'pages'
    }),
  },
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
