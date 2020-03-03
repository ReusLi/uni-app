import Vue from 'vue'

import baseMixin from 'uni-mixins/base'
import animation from 'uni-mixins/animation'

const requireComponents = [
  // baseComponents
  require.context('./', true, /index\.vue$/),
  require.context('../../../platforms/' + __PLATFORM__ + '/view/components', true, /index\.vue$/)
]
console.log('=====================')
console.log(requireComponents)
console.log('=====================')

requireComponents.forEach((components, index) => {
  components.keys().forEach(fileName => {
    // 获取组件配置
    const componentModule = components(fileName)

    const componentConfig = componentModule.default || componentModule

    componentConfig.mixins = componentConfig.mixins ? [].concat(baseMixin, componentConfig.mixins) : [baseMixin]

    componentConfig.mixins.push(animation)

    // componentConfig.name = 'vuni-' + componentConfig.name.toLocaleLowerCase()

    componentConfig.isReserved = true

    // 全局注册组件
    if (componentConfig.name && componentConfig.name.indexOf && componentConfig.name.indexOf('Uni') === -1) {
      componentConfig.name = 'VUni' + componentConfig.name
    }
    console.log(componentConfig.name)
    Vue.component(componentConfig.name, componentConfig)
  })
})
