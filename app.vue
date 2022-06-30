<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Загрузка... Service Looch',
  htmlAttrs: {
    lang: 'ru'
  },
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {hid: 'description', name: 'description', content: ''},
    {name: 'format-detection', content: 'telephone=no'},
  ],
  link: [{
    rel: 'icon',
    href: '/static/logo.svg'
  }],

  script: [
    {
      src: "/static/js/bootstrap.bundle.min.js",
      type: 'text/javascript',
      // defer: true
    },
    // {
    //     src: 'static/js/jquery/index.js',
    //     type: 'text/javascript',
    //     // defer: true
    // },
    // {
    //     src: 'static/js/datatables/index.js',
    //     type: 'text/javascript',
    //     defer: true
    // },
    // {
    //     src: 'static/js/datatables.bootstrap5/index.js',
    //     type: 'text/javascript',
    //     defer: true
    // },
  ],
})
</script>

<script>


export default {

}
</script>