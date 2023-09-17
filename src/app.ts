import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import { 
  AtButton, 
  AtInput, 
  AtTabs,
  AtTabBar,
  AtFlex,
  AtFlexItem, 
} from 'taro-ui-vue3/lib'

// 引用上述组件对应的样式文件
import 'taro-ui-vue3/dist/style/components/button.scss'
import 'taro-ui-vue3/dist/style/components/input.scss'
import 'taro-ui-vue3/dist/style/components/tabs.scss'

const App = createApp({
  onShow(options) { },
})

// 引用部分组件
const tuv3 = createUI({
  AtButton, 
  AtInput, 
  AtTabs,
  AtTabBar, 
  AtFlex,
  AtFlexItem,
})
App.use(tuv3)

export default App