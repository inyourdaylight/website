<template>
  <div class="error-404">
    <div class="message">
      <h1>404! Page not found!</h1>
      <a href="/" class="cta">
        <p>Go Back</p>
    </a>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  watch: {},
  methods: {

  },
  data() {
    return {
      
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./styles.scss";
@import "./fonts.scss";
h1 {
  margin: 0;
  color: $gold;
  margin-bottom: 20px;
}
.error-404 {
  min-height: 100vh;
}
.error-404 {
  text-align: center;
}
.message {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
