<template>
  <router-view/>
</template>

<script>
import Layout from "./Layout.js";

export default {
  mixins: [Layout],
  name: "LayoutIndex"
};
</script>
