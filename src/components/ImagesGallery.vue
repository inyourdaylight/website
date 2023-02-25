<template>
  <div class="images" :style="data.text_on_top ? `flex-direction: column-reverse` : `flex-direction: column`">
    <div class="tiles">
      <div v-for="(item, i) in data.images" :key="i" class="tile">
      <img :src="item.src" :style="`margin-left: ${item.offset.x}px; margin-top: ${item.offset.y}px;`"/>
    </div>
  </div>
  <div class="text-content">
    <div class="inner">
      <!-- <div class="divider">
       <div class="suns">
        <FullSun class="sun"></FullSun>
       </div>
      </div> -->
      <h2 class="animate-fade-in">{{ data.cta_text }}</h2>
      <p class="body" v-show="data.text">{{ data.text }}</p>
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
  display: flex;
  flex-direction: column;
  width: 100%;
}
.text-content {
  @media screen and (min-width: $mobileup) {
    width: calc(100% - 200px);
    padding: 0 100px;
  }
  text-align: center;
  // margin-left: auto;
  margin: auto;
  h2 {
    margin-bottom: 20px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}
.inner {
  margin: 20px;
  // text-align: left;
  position: relative;
  text-align: center;
  .cta {
    // margin-top: 30px;
    text-transform: capitalize;
  }
  .body {
    margin-bottom: 30px;
  }
  .divider {
    // width: 200px;
    position: absolute;
    bottom: -60px;
    // border-bottom: 1px solid $gold;
    height: 1px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }

  .sun {
    display: inline-block;
    min-width: 70px;
    transform: translateY(50%);
    padding: 0 10px; 
  }
  .suns {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform:translateX(-50%);
    white-space: nowrap;
  }
}

</style>
