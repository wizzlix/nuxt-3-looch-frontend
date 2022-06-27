<template>
  <div class="nav-item-block navbar-nav col-11">
    <li v-for="(page, index) in pagesSlice" :key="index" class="nav-item">
      <nuxt-link no-prefetch class="nav-link" aria-current="page" active-class="active" :to="page.href">
        {{ page.name }}
      </nuxt-link>
    </li>
  </div>
</template>

<script>
// import's

export default {
  name: 'NavElement',

  props: {
    pages: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pagesSlice(){
      let pagesSliceArray = []
      this.pages.forEach(item =>{
        if (item.subpages === null) {
          pagesSliceArray.push(item)
        }
      })
      return pagesSliceArray
    }
  },

  data() {
    return {
    }
  },
}
</script>


<style scoped>
/* large */
@media (min-width: 992px) {
  .nav-item-block {
    display: flex;
    flex-wrap: wrap;
  }
  .nav-link:hover {
    transition: all 0.2s ease;
    transform: scale(0.95);
    border-bottom: 0 dotted rgba(255, 255, 255, 0.1);
    text-overflow: clip;
  }

	.active {
    transition: all 0.2s ease;
    transform: scale(0.90);
    border-bottom: 0.3px dotted rgba(255, 255, 255, 0.485);
    text-overflow: clip;
		color: rgb(111, 111, 111)
  }
}

@media (max-width: 1125px) {
  .nav-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

/* mobile */
@media (max-width: 991px) {
  .nav-item-block {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px 30px;
  }
  .nav-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.091);
    width: 200px;
  }
}
</style>
