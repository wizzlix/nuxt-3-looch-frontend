<template>
  <div>

    <main class="container">
      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="BlueButtonContainer">
        <NuxtLink  :to="`${page}` + `${newAlias}`">
          <UIButtonBlue class="BlueButton">Добавить прошивку</UIButtonBlue>
        </NuxtLink>
      </section>

			<section id="table">
				<PagesFirmwaresTable/>
      </section>

    </main>

  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  titleTemplate: `${"Прошивки | Service Looch"}`
})
</script>

<script>
	export default {
		name: "FirmwaresMainPage",
		data(){
			  return{
					pageName: 'Прошивки',
          page: "/firmwares/",
          newAlias: "new/"
				}
		},
		methods: {
			newFirmware(){
				this.$router.push("firmwares/new")
			}
		}
	}
</script>

<style lang="css">
.BlueButtonContainer{
	width: 97%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}
</style>
