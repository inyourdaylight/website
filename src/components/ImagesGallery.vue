<template>
  <div class="images">
   <div v-for="(item, i) in images" :key="i" class="tile">
    <img :src="item.src" :style="`margin-left: ${item.offset.x}px; margin-top: ${item.offset.y}px;`"/>
  </div>
  <div class="see-more">
    <div class="inner">
      <h2>See more of our projects...</h2>
      <a class="cta">See More</a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesGallery',
  props: {
  },
  watch: {},
  methods: {

  },
  data() {
    return {
      images: [
        {
            src: require("../assets/placeholdersize1.png"),
            link: '',
            offset: {x: 0, y: 0}
        },
        {
            src: require("../assets/placeholdersize2.png"),
            link: '',
            offset: {x: -80, y: 100}
        },
        {
            src: require("../assets/placeholdersize3.png"),
            link: '',
            offset: {x: 0, y: 0}
        }
      ]
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.tile {
  display: inline-block;
  text-align: center;
  vertical-align: top;
  // width: 33%;
  img {
    max-height: 60vh;
    max-width: 28vw;
    padding: 20px;
  }
}
.images {
  margin: auto;
  text-align: center;
  padding: 40px 0;
}
.see-more {
  width: 33%;
  margin-left: auto;
}
.inner {
  margin: 20px;
  text-align: left;
}
</style>
