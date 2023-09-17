<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './memorandum.scss'

export default {
  setup () {
    const msg = ref('备忘页面')
    return {
      msg
    }
  }
}
</script>
