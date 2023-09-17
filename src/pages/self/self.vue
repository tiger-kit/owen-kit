<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './self.scss'

export default {
  setup () {
    const msg = ref('我的页面')
    return {
      msg
    }
  }
}
</script>
