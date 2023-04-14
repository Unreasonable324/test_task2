<template>
  <UMainWrapper></UMainWrapper>
</template>

<script lang="ts">
import UMainWrapper from "./components/U-main-wrapper.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    UMainWrapper,
  },
})
export default class App extends Vue {}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
