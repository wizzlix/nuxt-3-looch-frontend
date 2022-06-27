<template>
  <div>
    <!-- preloader -->
    <div class="preloader">
      <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    // Скрипт прелоадера
    window.onload = function () {
      document.body.classList.add('loaded');
    }
    // window.onload = function () {
    //   console.log("Loaded")
    //   document.body.classList.add('loaded_hiding')
    //   window.setTimeout(function () {
    //     document.body.classList.add('loaded')
    //     document.body.classList.remove('loaded_hiding')
    //   }, 500)
    // }
  },
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(246, 246, 246, 0.689);
  z-index: 1001;
}

.preloader__row {
  position: relative;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: -35px;
  text-align: center;
  animation: preloader-rotate 2s infinite linear;
}

.preloader__item {
  position: absolute;
  display: inline-block;
  top: 0;
  background-color: $table-link;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  animation: preloader-bounce 2s infinite ease-in-out;
}

.preloader__item:last-child {
  top: auto;
  bottom: 0;
  animation-delay: -1s;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes preloader-bounce {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

.loaded_hiding .preloader {
  transition: 0.3s opacity;
  opacity: 0;
}

.loaded .preloader {
  display: none;
}
</style>
