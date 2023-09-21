<template>
  <view class="main_container">
    
    <!-- 习惯 -->
    <at-flex>
      <at-flex-item>
        <view class="habit_left">
           习惯
        </view>
        <view class="habit_right">
           >
        </view>
      </at-flex-item>
    </at-flex>

    <!-- 创建新习惯 -->
    <at-flex>
      <at-flex-item>
        <view class="create_new_habit">
          创建新习惯
        </view>
      </at-flex-item>
    </at-flex>

    <!-- 任务 -->
    <at-flex>
      <at-flex-item>
        <view class="task_left">
          任务
        </view>
         <view class="task_right">
           >
        </view>
      </at-flex-item>
    </at-flex>

    <view class="task_list_cond">
      <view class="task_expire_sel">
      <view class="btn_left">
          <AtButton class="at_button" size='small' type='primary' @click="handleClick.bind(this, 'primary')">已逾期</AtButton>
      </view> 
      <view class="btn_right">
        <AtButton class="at_button" size='small' type='primary' @click="handleClick.bind(this, 'primary')">以后再说</AtButton>
      </view>
      </view>
    </view>

  </view>

</template>

<script>

import { AtFlex, AtFlexItem, AtButton} from 'taro-ui-vue3'
import { ref } from 'vue'
import './action.scss'

export default {
  setup () {
    const msg = ref('行动页面')
    return {
      msg
    }
  },

}
</script>
