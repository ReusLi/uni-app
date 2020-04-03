<template>
  <VUniView
    :class="{
    'uni-calendar-item--disable':weeks.disable,
    'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
    'uni-calendar-item--checked':(calendar.fullDate === weeks.fullDate && !weeks.isDay) ,
    'uni-calendar-item--multiple': weeks.multiple
  }"
    class="uni-calendar-item__weeks-box"
    @click="choiceDate(weeks)"
  >
    <VUniView class="uni-calendar-item__weeks-box-item">
      <VUniText v-if="selected&&weeks.extraInfo" class="uni-calendar-item__weeks-box-circle" />
      <VUniText
        :class="{
        'uni-calendar-item--isDay-text': weeks.isDay,
        'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
        'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
        'uni-calendar-item--multiple': weeks.multiple,
        'uni-calendar-item--disable':weeks.disable,
      }"
        class="uni-calendar-item__weeks-box-text"
      >{{ weeks.date }}</VUniText>
      <VUniText
        v-if="!lunar&&!weeks.extraInfo && weeks.isDay"
        :class="{
        'uni-calendar-item--isDay-text':weeks.isDay,
        'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
        'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
        'uni-calendar-item--multiple': weeks.multiple,
      }"
        class="uni-calendar-item__weeks-lunar-text"
      >今天</VUniText>
      <VUniText
        v-if="lunar&&!weeks.extraInfo"
        :class="{
        'uni-calendar-item--isDay-text':weeks.isDay,
        'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
        'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
        'uni-calendar-item--multiple': weeks.multiple,
        'uni-calendar-item--disable':weeks.disable,
      }"
        class="uni-calendar-item__weeks-lunar-text"
      >{{ weeks.isDay?'今天': (weeks.lunar.IDayCn === '初一'?weeks.lunar.IMonthCn:weeks.lunar.IDayCn) }}</VUniText>
      <VUniText
        v-if="weeks.extraInfo&&weeks.extraInfo.info"
        :class="{
        'uni-calendar-item--extra':weeks.extraInfo.info,
        'uni-calendar-item--isDay-text':weeks.isDay,
        'uni-calendar-item--isDay':calendar.fullDate === weeks.fullDate && weeks.isDay,
        'uni-calendar-item--checked':calendar.fullDate === weeks.fullDate && !weeks.isDay,
        'uni-calendar-item--multiple': weeks.multiple,
        'uni-calendar-item--disable':weeks.disable,
      }"
        class="uni-calendar-item__weeks-lunar-text"
      >{{ weeks.extraInfo.info }}</VUniText>
    </VUniView>
  </VUniView>
</template>

<script>
export default {
  name: 'UniCalendarItem',
  props: {
    weeks: {
      type: Object,
      default () {
        return {}
      }
    },
    calendar: {
      type: Object,
      default: () => {
        return {}
      }
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    choiceDate (weeks) {
      this.$emit('change', weeks)
    }
  }
}
</script>

<style>
.uni-calendar-item__weeks-box {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.uni-calendar-item__weeks-box-text {
  font-size: 14px;
  color: #333;
}

.uni-calendar-item__weeks-lunar-text {
  font-size: 12px;
  color: #333;
}

.uni-calendar-item__weeks-box-item {
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.uni-calendar-item__weeks-box-circle {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #dd524d;
}

.uni-calendar-item--disable {
  background-color: rgba(249, 249, 249, 0.3);
  color: #c0c0c0;
}

.uni-calendar-item--isDay-text {
  color: #007aff;
}

.uni-calendar-item--isDay {
  background-color: #007aff;
  opacity: 0.8;
  color: #fff;
}

.uni-calendar-item--extra {
  color: #dd524d;
  opacity: 0.8;
}

.uni-calendar-item--checked {
  background-color: #007aff;
  color: #fff;
  opacity: 0.8;
}

.uni-calendar-item--multiple {
  background-color: #007aff;
  color: #fff;
  opacity: 0.8;
}
</style>
