<template>
  <div>
    <keep-alive>
      <router-view :key="uuid"/>
    </keep-alive>
    <hr>
    <small>Container</small>
    <pre>{{ $props }}</pre>
  </div>
</template>

<script>
import { guid } from "../utils";

export default {
  name: "Container",
  props: {
    name: String,
    label: String
  },
  data: () => ({
    uuid: guid()
  })
};
</script>
