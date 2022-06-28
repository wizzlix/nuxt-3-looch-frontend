<template>
  <div id="NavBar" class="">
    <nav class="looch-navbar navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" href="/"
        ><img src="../../static/logo.png" alt="ЛУЧ"
        /></nuxt-link>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarText" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavigationNavModuleDropdown :pages="pages" />

            <NavigationNavElement :pages="pages" />
          </ul>
          <span>
            <NavigationNavUser :user="user" />
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',

  props: {
    user: {
      type: Object,
      require: true
    },
    pages: {
      type: Array,
      require: true
    }
  },



  data() {
    return {

      // user: {
      //   name: 'Дмитрий Братчиков',
      // },
      //
      // pages: [
      //   {name: 'Модули',href: '/modules',visible: true,subpages: [
      //       {name: 'Выпущенные модули',href: '/modules',visible: true,subpages: null,last: false,},
      //       {name: 'Ремонты модулей',href: '/repairs',visible: true,subpages: null,last: true,}],
      //   },
      //   { name: 'Заказы', href: '/orders', visible: true, subpages: null },
      //   { name: 'Платы и изделия', href: '/items', visible: true, subpages: null },
      //   { name: 'Прошивки', href: '/firmwares', visible: true, subpages: null },
      //   {name: 'Заказчики',href: '/customers',visible: true,subpages: null,},
      //   { name: 'Персонал', href: '/employees', visible: true, subpages: null },
      //   {name: 'Базовые спецификации',href: '/config',visible: true,subpages: null,},
      //   { name: 'Трансфер', href: '/move_item', visible: true, subpages: null },
      // ],

    }
  },
}
</script>

<style lang="scss">

.looch-navbar {
  background-color: $main-blue;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
  font-size: 20px;
  text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.35);
}
</style>
