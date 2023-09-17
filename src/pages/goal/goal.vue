<template>
  <view class="goal">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './goal.scss'

export default {
  setup () {
    const msg = ref('目标页面')
    return {
      msg
    }
  }
}
</script>
