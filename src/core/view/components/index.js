import Vue from 'vue'

import baseMixin from 'uni-mixins/base'
import animation from 'uni-mixins/animation'

const requireComponents = [
  // baseComponents
  require.context('./', true, /index\.vue$/),
  require.context('../../../platforms/' + __PLATFORM__ + '/view/components', true, /index\.vue$/)
]

requireComponents.forEach((components, index) => {
  console.log(components.keys())
  components.keys().forEach(fileName => {
    // 获取组件配置
    const componentModule = components(fileName)

    const componentConfig = componentModule.default || componentModule

    componentConfig.mixins = componentConfig.mixins ? [].concat(baseMixin, componentConfig.mixins) : [baseMixin]

    componentConfig.mixins.push(animation)

    componentConfig.name = 'VUni' + componentConfig.name

    componentConfig.isReserved = true

    // 全局注册组件
    console.log(componentConfig.name)
    console.log(componentConfig)
    Vue.component(componentConfig.name, componentConfig)
  })
})
