<template><!-- #ifndef APP-NVUE --><VUniView class="uni-list">
		<VUniSlot>
	</VUniSlot></VUniView>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	<VUniList class="uni-list" :enablebacktotop="enableBackToTop" loadmoreoffset="15" :scroll-y="scrollY" @loadmore="loadMore">
		<VUniSlot>
	</VUniSlot></VUniList>
	<!-- #endif -->
</template>

<script>
	/**
	 * List 列表
	 * @description 列表组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=24
	 */
	export default {
		name: 'UniList',
		'mp-weixin': {
			options: {
				multipleSlots: false
			}
		},
		props: {
			enableBackToTop: {
				type: [Boolean, String],
				default: false
			},
			scrollY: {
				type: [Boolean, String],
				default: false
			}
		},
		provide() {
			return {
				list: this
			}
		},
		created() {
			this.firstChildAppend = false
		},
		methods: {
			loadMore(e) {
				this.$emit("scrolltolower");
			}
		}
	}
</script>
<style>
	.uni-list {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		background-color: #ffffff;
		position: relative;
		flex-direction: column;
		// border-bottom-color: #c8c7cc;
		// border-bottom-style: solid;
		// border-bottom-width: 1px;
	}

	/* #ifndef APP-NVUE */
	.uni-list:before {
		height: 0;
	}

	.uni-list:after {
		height: 0;
	}

	/* #endif */
</style>
