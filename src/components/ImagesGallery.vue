<template>
  <div class="images">
   <div v-for="(item, i) in data.images" :key="i" class="tile">
    <img :src="item.src" :style="`margin-left: ${item.offset.x}px; margin-top: ${item.offset.y}px;`"/>
  </div>
  <div class="see-more">
    <div class="inner">
      <h2 class="animate-fade-in">{{ data.cta_text }}</h2>
      <a class="cta animate-fade-in animate-delay-500" :href="data.cta.link">
        <p>{{ data.cta.text }}</p>
      </a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ImagesGallery',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
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
.tile {
  display: inline-block;
  text-align: center;
  vertical-align: top;
  // width: 33%;
  img {
    max-height: 60vh;
    max-width: 22vw;
    @media screen and (max-width: $mobiledown) {
      max-width: 50vw;
    }
    padding: 20px;
  }
}
.images {
  margin: auto;
  text-align: center;
  padding: 40px 0;
}
.see-more {
  width: 100%;
  max-width: 90%;
  text-align: center;
  // margin-left: auto;
  margin: auto;
  h2 {
    margin-bottom: 20px;
  }
}
.inner {
  margin: 20px;
  // text-align: left;
  position: relative;
  text-align: center;
  &:after {
    content: '';
    width: 50%;
    position: absolute;
    bottom: -60px;
    border-bottom: 1px solid $gold;
    height: 1px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
