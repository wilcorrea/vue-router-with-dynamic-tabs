<template>
  <div class="hello">
    <h6>Bar</h6>
    <hr>
    <input type="text" v-model="model">
    <hr>
    <router-view/>
    <button @click="navigate('bar/foo')">Go Deep</button>
  </div>
</template>

<script>
import Page from "./Page.js";

export default {
  mixins: [Page],
  name: "Bar"
};
</script>
