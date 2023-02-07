<template>
  <div class="sticky-scroll-gallery">
    <div class="text">
      <h1>
        WHO WE ARE
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
      </p>
    </div>
    <div class="gallery">
      <div class="tile">
        <img src="../assets/placeholdersize3.png"/>
        <div class="tile-text">
          <h2>James Williams</h2>
          <p>Art Director</p>
        </div>
      </div>
      <br/>
      <div class="tile">
        <img src="../assets/placeholdersize3.png"/>
        <div class="tile-text">
          <h2>James Williams</h2>
          <p>Art Director</p>
        </div>
      </div>
      <br/>
      <div class="tile">
        <img src="../assets/placeholdersize3.png"/>
        <div class="tile-text">
          <h2>James Williams</h2>
          <p>Art Director</p>
        </div>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
h1 {
  margin: 0;
  color: $gold;
}
.text {
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  max-width: 500px;
  left: 10%;
}
.gallery {
  max-width: 800px;
  margin-left: auto;
  text-align: center;
  h2 {
    margin-bottom: 0;
    margin-top: 10px;
  }
  img {
    width: 100%;
    max-width: 300px;
  }
  .tile-text {
    text-align: left;
  }
  .tile {
    display: inline-block;
    padding-top: 40px;
  }
}
</style>
