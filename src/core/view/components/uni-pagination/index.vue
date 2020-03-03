<template><VUniView class="uni-pagination">
  <VUniView
    :class="currentIndex === 1 ? 'uni-pagination--disabled' : 'uni-pagination--enabled'"
    :hover-class="currentIndex === 1 ? '' : 'uni-pagination--hover'"
    :hover-start-time="20"
    :hover-stay-time="70"
    class="uni-pagination__btn"
    @click="clickLeft">
<VUniTemplate v-if="showIcon===true || showIcon === 'true'"/></VUniView></VUniView></template>
			<template v-else><text class="uni-pagination__child-btn">{{ prevText }}</text>
