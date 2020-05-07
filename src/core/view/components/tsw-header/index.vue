<template name="single-page-header">
	<view class="container">
		<view class="detail-block">
			<!-- <view v-for="(caption, index) in captions">{{ caption }} : {{ displayVals[index] }}</view> -->
			<slot name="detail-block"></slot>
		</view>
		<view class="emphasis-block">
			<slot name="emphasis-block"></slot>
			<!-- <view>{{ emphasis.caption }}</view>
			<view class="emphasis-val">{{ emphasis.displayVal }}</view> -->
		</view>
	</view>
</template>
<script scoped>
export default {
	name: 'single-page-header',
	props: {
		option: {
			type: Object
		}
	},
	data() {
		var option = this.option;
		return {
			// captions: option.captions,
			// displayVals: option.displayVals,
			// emphasis: option.emphasis
		};
	}
};
</script>
<style scoped>
.container {
	background: #0094e8;
	display: flex;
	flex-direction: row;
	color: #f5f5f5;
	font-family: Microsoft YaHei, SimSun !important;
}
.detail-block {
	flex-grow: 0.7;
	padding: 1em;
}
.emphasis-block {
	flex-grow: 0.3;
	text-align: right;
	padding: 1em;
}
.emphasis-val {
	color: #ffff00;
}
</style>
