<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

import {useHead} from "nuxt/app";

useHead({
  script: [
    {
      src: "/static/js/bootstrap.bundle.min.js",
      type: 'text/javascript',
      // defer: true
    },
    {
      src: "/assets/datatables/jquery.js",
      type: "text/javascript",
      defer: true
    },
    {
      src: "/assets/datatables/datatables.js",
      type: "text/javascript",
      defer: true
    },
    // {
    //     src: "/assets/datatables/datatablesbs5.js",
    //     type: "text/javascript",
    //     // defer: true
    // },
  ],

})
</script>


<script>


export default {


}
</script>