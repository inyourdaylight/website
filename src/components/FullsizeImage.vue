<template>
  <div class="fullsize-image">
   <img :src="data.image" :style="`object-fit: ${data.cover ? 'cover' : 'contain'};`"/>
  </div>
</template>

<script>
export default {
  name: 'FullSizeImage',
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
.fullsize-image {
    min-height: 500px;
    border-radius: 20px;
    text-align: center;
    img {
       width: 100%;
       height: 100%;
       max-height: 80vh;
    }
}
</style>
