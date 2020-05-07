<template>
	<UniCollapse :accordion="false" tagname="UniCollapse" ref="sdk_uni_collapse_x3bc">
		<UniCollapseItem title="主表信息" :disabled="false" :open="true" 
		:showanimation="false">
		<slot></slot>
		</UniCollapseItem>
	</UniCollapse>
</template>

<script>
import uniCollapse from '../uni-collapse/index.vue';
import uniCollapseItem from '../uni-collapse-item/index.vue';
export default {
	components: {
		uniCollapse,
		uniCollapseItem
	},
	name: 'SinglePageMain'
};
</script>

<style></style>
