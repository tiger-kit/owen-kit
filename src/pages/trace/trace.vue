<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './trace.scss'

export default {
  setup () {
    const msg = ref('追踪页面')
    return {
      msg
    }
  }
}
</script>
