<template>
  <div :class="`text-and-image ${data.orientation} ${data.textalign}`">
    <!-- options will be  -->
   <div class="col image animate-fade-in">
    <img :src="data.image"/>
   </div>
   <div class="col text animate-fade-in animate-delay-250">
    <h2>{{ data.title }}</h2>
        <p v-html="data.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.text-and-image {
  padding: 30px 60px;
  @media screen and (max-width: $mobiledown) {
    flex-direction: column !important;
    padding: 30px 20px;
  }
}
.image {
  text-align: center;
  img {
    width: 100%;
      height: 100%;
    @media screen and (min-width: $mobileup) {
      max-height: 400px;
      max-width: 40vw;
    }
    margin: auto;
    @media screen and (max-width: $mobiledown) {
      margin-bottom: 20px;
    }
  }
}
.text-align-right {
  .text {
    text-align: right;
  }
  @media screen and (max-width: $mobiledown) {
    .text {
      text-align: left;
    }
  }
}
.text-align-left {
  .text {
    text-align: left;
  }
}
.text-and-image {
  display: flex;
  align-items: center;
  justify-content: center;
    .col {
      // padding: 0 20px;
      width: 100%;
      h1,h2,h3,h4,h5,h6,span,p,ul,ol {
       @media screen and (min-width: $mobileup) {
        width: 80%;
        margin: auto;
       }
      }
      // flex: 1;
    }
}
.text-on-left {
  img {
    margin-right: auto;
    display: block;
  }
  flex-direction: row-reverse;
  h1,h2,h3,h4,h5,h6,span,p,ul,ol {
    margin-left: auto;
    // margin-left: auto;
  }
}
.text-on-right {
  img {
    margin-left: auto;
    display: block;
  }
  h1,h2,h3,h4,h5,h6,span,p,ul,ol {
    margin-right: auto;
    // margin-left: auto;
  }
}

</style>
