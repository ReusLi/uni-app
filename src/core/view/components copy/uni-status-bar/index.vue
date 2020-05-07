<template>
  <VUniView class="uni-status-bar">
    <slot />
  </VUniView>
</template>

<script>
// var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
export default {
  name: 'UniStatusBar',
  data () {
    return {
    }
  }
}
</script>

<style>
.uni-status-bar {
  width: 375px;
  height: 40px;
}
</style>
