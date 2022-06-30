<template>
  <div>

    <main class="container">

      <section id="pageName">
        <UIPageNameH1 :page-name="pageName" />
      </section>

      <section class="row">
        <div v-for="page in pages" class="flex-card col-sm-12 col-md-6 col-lg-4 col-xl-3">

          <div class="subpages-block" v-if="page.subpages !== null">
              <div v-for="subpage in subpages">
                  <NuxtLink :to="subpage.href" style="text-decoration: none">
                    <div class="card-link-main-page">

                      <img class="img" :src="subpage.icon" alt="">
                      <h6 class="card-link-text">{{subpage.name}}</h6>
                      <h6 class="card-link-text-desc">Перейти на страницу<br> "{{subpage.description}}"</h6>

                    </div>
                  </NuxtLink>
              </div>
          </div>

          <div class="pages-block" v-else>
              <NuxtLink :to="page.href" style="text-decoration: none">
                <div class="card-link-main-page">
                  <img class="img" :src="page.icon" alt="">
                  <h6 class="card-link-text">{{page.name}}</h6>
                  <h6 class="card-link-text-desc">Перейти на страницу<br> "{{page.description}}"</h6>
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

@media (min-width: 429px){
  .row{
    margin-left: 20px
  }

}

@media (min-width: 768px){
  .row{
    margin-left: 50px
  }

}

@media (min-width: 1200px){
  .row{
    margin-left: 110px
  }

}

@media (min-width: 1400px){
  .row{
    margin-left: 50px
  }

}

.flex-card{
  display: flex;
  flex-basis: max-content;
  padding: 10px 0px
}

.img{ ;
  width: 100px;
  height: 100px;
}

.card-link-main-page{
  margin-left: 10px;


  text-decoration: none;
  border: 3px $main-blue solid;
  margin: 13px;
  padding: 50px;
  border-radius: 6%;
  text-align: center;
  transition: 0.5s;
  height: 340px;
  width: 260px;
  &:hover{
    border: 3px #000000 solid;
    -webkit-box-shadow: 10px 12px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 10px 12px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 10px 12px 8px 0px rgba(34, 60, 80, 0.2);
  }
}

@media (max-width: 767px) and (min-width: 576px){
  .card-link-main-page{
    margin-left: 0px;
    min-width: 460px;
  }

}

@media (max-width: 576px) and (min-width: 494px){
  .card-link-main-page{
    min-width: 400px;
  }

}

@media (max-width: 494px){
  .card-link-main-page{
    margin-left: 40px;

    min-width: 270px;
  }

}

@media (max-width: 340px){
  .card-link-main-page{
    margin-left: 6px;

    min-width: 270px;
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

.card-link-text-desc{
  text-decoration: none;
  color: #cccccc;
  font-weight: bold;
  transition: 0.5s;
  margin-top: 30px;
  font-size: 10px;

  &:hover{
    color: $main-blue;
   }

  &:focus{
    background-color: #0d6efd;
  }

}

.subpages-block{
  display: flex;
  flex-flow: row wrap;
  //background-color: blue;
}
.pages-block{
  display: flex;
  flex-flow: row wrap;
  //background-color: red;
}

</style>
