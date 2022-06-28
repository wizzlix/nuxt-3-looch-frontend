<template>
  <div>

    <main class="container">

      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="pages row">
        <div v-for="page in pages" class="col-md-6 col-lg-4 col-xl-3">

          <div v-if="page.subpages !== null">
              <div v-for="subpage in subpages">
                  <NuxtLink :to="subpage.href" style="text-decoration: none">
                    <div class="card-link-main-page">

                      <img class="img" :src="subpage.icon" alt="">
                      <h6 class="card-link-text">{{subpage.name}}</h6>

                    </div>
                  </NuxtLink>
              </div>
          </div>

          <div v-else>
              <NuxtLink :to="page.href" style="text-decoration: none">
                <div class="card-link-main-page">
                  <img class="img" :src="page.icon" alt="">
                  <h6 class="card-link-text">{{page.name}}</h6>
                </div>
              </NuxtLink>

          </div>

        </div>
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

import {mapState} from 'pinia'
import {usePagesStore} from "~/stores/pages"

export default {
  name: "MainPage",

  setup(){
    const pages = usePagesStore()
    pages.init()
  },

  computed: {
    ...mapState(usePagesStore, {
      pages: 'pages',
      subpages: 'subpages'
    }),

  },

  data(){
    return{
      pageName: 'Главная',
    }
  },
}
</script>

<style lang="scss">

.pages{
  display: flex;
  flex-flow: row wrap;
}

.img{ ;
  width: 100px;
  height: 100px;
}


.card-link-main-page{
  text-decoration: none;
  border: 3px $main-blue solid;
  margin: 20px;
  padding: 50px;
  border-radius: 6%;
  text-align: center;
  transition: 1s;
  min-height: 300px;
  &:hover{
    border: 3px #000000 solid;
  }
}

.card-link-text{
  text-decoration: none;
  color: #000000;
  font-weight: bolder;
  font-style: italic;
  transition: 0.5s;
  margin-top: 30px;
  //font-size: 16px;

  &:hover{
    color: $main-blue;
   }

  &:focus{
    background-color: #0d6efd;
  }

}


</style>
