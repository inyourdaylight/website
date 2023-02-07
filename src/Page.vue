<template>
  <div class="page" v-if="page">
      <component v-for="(item, i) in page.slices" :key="i" :is="item"></component>
  </div>
</template>

<script>
export default {
  name: 'PagePage',
  props: {
  },
  components: {
  },
  watch: {},
  methods: {},
  data() {
    return {
      page: null
    }
  },
  mounted() {
    console.log(this.$cms.routes.filter(i => i.path === window.location.pathname)[0].slices);
    try {
      this.page = this.$cms.routes.filter(i => i.path === window.location.pathname)[0];
    } catch {
      console.log("page doesn't exist");
    }
  },
  beforeUpdate() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./styles.scss";
@import "./fonts.scss";

</style>
