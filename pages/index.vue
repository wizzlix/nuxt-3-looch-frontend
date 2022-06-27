<template>
  <div>

    <main class="container">

      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

    </main>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: `${"Главная | Service Looch"}`
})
</script>

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
