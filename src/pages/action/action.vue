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
        <view class="task_expired"> 已逾期 </view>
        <view class="task_future_do"> 以后再说 </view>
        
      </view>
    </view>
    
  </view>

</template>

<script>

import { AtFlex, AtFlexItem } from 'taro-ui-vue3'
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
