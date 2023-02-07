<template>
  <div class="text-and-faded-bg">
    <img class="bg" src="../assets/placeholder1.png"/>
   <div class="text">
    <h2>In Your Daylight is a marketing agency Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <p>
      In Your Daylight is a marketing agency Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius metus quis leo auctor tincidunt. Maecenas tempor at orci eu posuere. Cras semper efficitur venenatis. Mauris vitae luctus mauris. Cras non erat et purus pellentesque elementum.
    </p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'TextandFadedBG',
  props: {
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
}
.text {
  text-align: left;
  width: 75%;
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
}
</style>
