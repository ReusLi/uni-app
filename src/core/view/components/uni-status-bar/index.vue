<template><VUniView
  :style="{ height: statusBarHeight }"
  class="uni-status-bar">
<slot/></VUniView>
</template>

<script>
var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
export default {
  name: 'UniStatusBar',
  data () {
    return {
      statusBarHeight: statusBarHeight
    }
  }
}
</script>

<style>
	.uni-status-bar {
		width: 750rpx;
		height: 20px;
	}
</style>
