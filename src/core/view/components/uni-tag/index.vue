<template><VUniView
  v-if="text"
  :class="[
    'uni-tag--' + type,
    disabled === true || disabled === 'true' ? 'uni-tag--disabled' : '',
    inverted === true || inverted === 'true' ? type + '-uni-tag--inverted' : '',
    circle === true || circle === 'true' ? 'uni-tag--circle' : '',
    mark === true || mark === 'true' ? 'uni-tag--mark' : '',
    'uni-tag--' + size
  ]"
  class="uni-tag"
  @click="onClick()">
  <VUniText :class="[type === 'default' ? 'uni-tag--default':'uni-tag-text',inverted === true || inverted === 'true' ? 'uni-tag-text--'+type : '',size === 'small' ? 'uni-tag-text--small':'' ]">{{ text }}</VUniText>
</VUniView>
</template>

<script>
/**
	 * Tag 标签
	 * @description 用于展示1个或多个文字标签，可点击切换选中、不选中的状态
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=35
	 * @property {String} text 标签内容
	 * @property {String} size = [normal|small] 大小尺寸
	 * 	@value normal 正常
	 * 	@value small 小尺寸
	 * @property {String} type = [default|primary|success｜warning｜error｜royal]  颜色类型
	 * 	@value default 灰色
	 * 	@value primary 蓝色
	 * 	@value success 绿色
	 * 	@value warning 黄色
	 * 	@value error 红色
	 * 	@value royal 紫色
	 * @property {Boolean} disabled = [true|false] 是否为禁用状态
	 * @property {Boolean} inverted = [true|false] 是否无需背景颜色（空心标签）
	 * @property {Boolean} circle = [true|false] 是否为圆角
	 * @event {Function} click 点击 Tag 触发事件
	 */

export default {
  name: 'UniTag',
  props: {
    type: {
      // 标签类型default、primary、success、warning、error、royal
      type: String,
      default: 'default'
    },
    size: {
      // 标签大小 normal, small
      type: String,
      default: 'normal'
    },
    // 标签内容
    text: {
      type: String,
      default: ''
    },
    disabled: {
      // 是否为禁用状态
      type: [Boolean, String],
      defalut: false
    },
    inverted: {
      // 是否为空心
      type: [Boolean, String],
      defalut: false
    },
    circle: {
      // 是否为圆角样式
      type: [Boolean, String],
      defalut: false
    },
    mark: {
      // 是否为标记样式
      type: [Boolean, String],
      defalut: false
    }
  },
  methods: {
    onClick () {
      if (this.disabled === true || this.disabled === 'true') {
        return
      }
      this.$emit('click')
    }
  }
}
</script>

<style>
	$tag-pd: 0px 16px;
	$tag-small-pd: 0px 8px;

	.uni-tag {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: $tag-pd;
		height: 30px;
		line-height: 30px;
		justify-content: center;
		color: #333;
		border-radius: 3px;
		background-color: #f8f8f8;
		border-width: 1px;
		border-style: solid;
		border-color: #f8f8f8;
	}

	.uni-tag--circle {
		border-radius: 15px;
	}

	.uni-tag--mark {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	.uni-tag--disabled {
		opacity: 0.5;
	}

	.uni-tag--small {
		height: 20px;
		padding: $tag-small-pd;
		line-height: 20px;
		font-size: 12px;
	}

	.uni-tag--default {
		color: #333;
		font-size: 14px;
	}

	.uni-tag-text--small {
		font-size: $uni-font-size-sm !important;
	}

	.uni-tag-text {
		color: #fff;
		font-size: 14px;
	}

	.uni-tag-text--primary {
		color: $uni-color-primary !important;
	}

	.uni-tag-text--success {
		color: $uni-color-success !important;
	}

	.uni-tag-text--warning {
		color: $uni-color-warning !important;
	}

	.uni-tag-text--error {
		color: $uni-color-error !important;
	}

	.uni-tag--primary {
		color: #fff;
		background-color: #007aff;
		border-width: 1px;
		border-style: solid;
		border-color: #007aff;
	}

	.primary-uni-tag--inverted {
		color: #007aff;
		background-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		border-color: #007aff;
	}

	.uni-tag--success {
		color: #fff;
		background-color: #4cd964;
		border-width: 1px;
		border-style: solid;
		border-color: #4cd964;
	}

	.success-uni-tag--inverted {
		color: #4cd964;
		background-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		border-color: #4cd964;
	}

	.uni-tag--warning {
		color: #fff;
		background-color: #f0ad4e;
		border-width: 1px;
		border-style: solid;
		border-color: #f0ad4e;
	}

	.warning-uni-tag--inverted {
		color: #f0ad4e;
		background-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		border-color: #f0ad4e;
	}

	.uni-tag--error {
		color: #fff;
		background-color: #dd524d;
		border-width: 1px;
		border-style: solid;
		border-color: #dd524d;
	}

	.error-uni-tag--inverted {
		color: #dd524d;
		background-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		border-color: #dd524d;
	}

	.uni-tag--inverted {
		color: #333;
		background-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		border-color: #f8f8f8;
	}
</style>
