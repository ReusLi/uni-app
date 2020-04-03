<template><VUniView class="uni-combox">
  <VUniView
    v-if="label"
    :style="labelStyle"
    class="uni-combox__label">
    <VUniText>{{ label }}</VUniText>
  </VUniView>
  <VUniView class="uni-combox__input-box">
    <VUniInput
      :placeholder="placeholder"
      v-model="inputVal"
      class="uni-combox__input"
      type="text"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"/>
    <UniIcons
      class="uni-combox__input-arrow"
      type="arrowdown"
      size="14"
      @click="toggleSelector"/>
    <VUniView
      v-if="showSelector"
      class="uni-combox__selector">
      <VUniScrollView
        scroll-y="true"
        class="uni-combox__selector-scroll">
        <VUniView
          v-if="filterCandidatesLength === 0"
          class="uni-combox__selector-empty">
          <VUniText>{{ emptyTips }}</VUniText>
        </VUniView>
        <VUniView
          v-for="(item,index) in filterCandidates"
          :key="index"
          class="uni-combox__selector-item"
          @click="onSelectorClick(index)">
          <VUniText>{{ item }}</VUniText>
        </VUniView>
      </VUniScrollView>
    </VUniView>
  </VUniView>
</VUniView>
</template>

<script>
import uniIcons from '../uni-icons/index.vue'
export default {
  name: 'UniCombox',
  components: {
    uniIcons
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: 'auto'
    },
    placeholder: {
      type: String,
      default: ''
    },
    candidates: {
      type: Array,
      default () {
        return []
      }
    },
    emptyTips: {
      type: String,
      default: '无匹配项'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showSelector: false,
      inputVal: ''
    }
  },
  computed: {
    labelStyle () {
      if (this.labelWidth === 'auto') {
        return {}
      }
      return {
        width: this.labelWidth
      }
    },
    filterCandidates () {
      return this.candidates.filter((item) => {
        return item.indexOf(this.inputVal) > -1
      })
    },
    filterCandidatesLength () {
      return this.filterCandidates.length
    }
  },
  watch: {
    value: {
      handler (newVal) {
        this.inputVal = newVal
      },
      immediate: true
    }
  },
  methods: {
    toggleSelector () {
      this.showSelector = !this.showSelector
    },
    onFocus () {
      this.showSelector = true
    },
    onBlur () {
      setTimeout(() => {
        this.showSelector = false
      }, 50)
    },
    onSelectorClick (index) {
      this.inputVal = this.filterCandidates[index]
      this.showSelector = false
      this.$emit('input', this.inputVal)
    },
    onInput () {
      setTimeout(() => {
        this.$emit('input', this.inputVal)
      })
    }
  }
}
</script>

<style>
	.uni-combox {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		height: 40px;
		flex-direction: row;
		align-items: center;
	}

	.uni-combox__label {
		font-size: 16px;
		line-height: 22px;
		padding-right: 10px;
		color: #999999;
	}

	.uni-combox__input-box {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
	}

	.uni-combox__input {
		flex: 1;
		font-size: 16px;
		height: 22px;
		line-height: 22px;
	}

	.uni-combox__input-arrow {
		padding: 10px;
	}

	.uni-combox__selector {
		box-sizing: border-box;
		position: absolute;
		top: 42px;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 6px;
		box-shadow: #DDDDDD 4px 4px 8px, #DDDDDD -4px -4px 8px;
		z-index: 2;
	}

	.uni-combox__selector-scroll {
		max-height: 200px;
		box-sizing: border-box;
	}

	.uni-combox__selector::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-bottom: solid 6px #FFFFFF;
		border-right: solid 6px transparent;
		border-left: solid 6px transparent;
		left: 50%;
		top: -6px;
		margin-left: -6px;
	}

	.uni-combox__selector-empty,
	.uni-combox__selector-item {
		/* #ifdef APP-NVUE */
		display: flex;
		/* #endif */
		line-height: 36px;
		font-size: 14px;
		text-align: center;
		border-bottom: solid 1px #DDDDDD;
		margin: 0px 10px;
	}

	.uni-combox__selector-empty:last-child,
	.uni-combox__selector-item:last-child {
		border-bottom: none;
	}
</style>
