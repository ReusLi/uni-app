<template>
	<UniCollapse :accordion="false" tagname="UniCollapse" ref="sdk_uni_collapse_x3bc">
		<UniCollapseItem title="子表信息" :disabled="false" :open="true" 
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
	name: 'SinglePageDetail'
};
</script>

<style></style>
