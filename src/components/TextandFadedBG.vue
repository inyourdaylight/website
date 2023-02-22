<template>
  <div class="text-and-faded-bg">
    <img class="bg" src="../assets/placeholder1.png"/>
   <div class="text">
    <h2 class="animate-fade-in">In Your Daylight is a marketing agency Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <p class="animate-fade-in animate-delay-500">
      In Your Daylight is a marketing agency Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius metus quis leo auctor tincidunt. Maecenas tempor at orci eu posuere. Cras semper efficitur venenatis. Mauris vitae luctus mauris. Cras non erat et purus pellentesque elementum.
    </p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'TextandFadedBG',
  props: {
    clickEvents: {
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
@import "../styles.scss";
.text-and-faded-bg {
  min-height: calc(80vh - 120px);
  margin: 0 10%;
  position: relative;
  padding: 60px 0;
  @media screen and (max-width: $mobiledown) {
    margin: 0 20px;
  }
}
.text {
  text-align: left;
  width: 75%;
  @media screen and (max-width: $mobiledown) {
    width: 100%;
  }
  margin-left: auto;
  z-index: 1;
  position: relative;
  padding-top: 100px;
}
.bg {
  position: absolute;
  left: 0;
  width: 40%;
  z-index: 0;
  @media screen and (max-width: $mobiledown) {
    width: 100%;
  }
}
</style>
