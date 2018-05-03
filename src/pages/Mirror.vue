<template>
  <keep-alive>
    <router-view :key="$router.fullPath"/>
  </keep-alive>
</template>

<script>
import { guid } from '../utils'

export default {
  name: 'Mirror',
  data: () => ({
    uuid: guid()
  })
}
</script>
