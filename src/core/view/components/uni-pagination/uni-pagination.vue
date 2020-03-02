<template><VUniView class="uni-pagination">
		<VUniView class="uni-pagination__btn" :class="currentIndex === 1 ? 'uni-pagination--disabled' : 'uni-pagination--enabled'" :hover-class="currentIndex === 1 ? '' : 'uni-pagination--hover'" :hover-start-time="20" :hover-stay-time="70" @click="clickLeft">
			<VUniTemplate v-if="showIcon===true || showIcon === 'true'"></VUniTemplate></VUniView></VUniView></template>
			<template v-else><text class="uni-pagination__child-btn">{{ prevText }}</text>