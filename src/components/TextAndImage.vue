<template>
  <div :class="`text-and-image ${data.orientation} ${data.textalign}`">
    <!-- options will be  -->
   <div class="col image animate-fade-in">
    <img :src="data.image"/>
   </div>
   <div class="col text animate-fade-in animate-delay-250">
    <small v-show="data.date">{{ data.date }}</small>
    <h2>{{ data.title }}</h2>
        <p class="subtitle" v-html="data.text"></p>
        <div class="ctas" v-show="data.cta_buttons">
          <a v-for="(item, i) in data.cta_buttons" :key="i" class="cta" :href="item.link">
            <p>{{ item.text }}</p>
          </a>
        </div>
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
    width: auto;
    height: auto;
    @media screen and (min-width: $mobileup) {
      max-height: 400px;
      max-width: 40vw;
    }
    margin: auto;
    @media screen and (max-width: $mobiledown) {
      margin-bottom: 20px;
      max-width: 100%;
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
      h1,h2,h3,h4,h5,h6,span,p,ul,ol, small, .ctas {
        @media screen and (min-width: $mobileup) {
          width: 80%;
          margin: auto;
          display: block;
        }
      }
      h2 {
        margin-bottom: 20px;
      }
      small {
        margin-bottom: 10px;
        opacity: .75;
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
  h1,h2,h3,h4,h5,h6,span,p,ul,ol,small, .ctas {
    margin-left: auto;
    // margin-left: auto;
  }
}
.text-on-right {
  img {
    margin-left: auto;
    display: block;
  }
  h1,h2,h3,h4,h5,h6,span,p,ul,ol, small, .ctas {
    margin-right: auto;
    // margin-left: auto;
  }
}
.ctas {
  padding-top: 30px;
}
.subtitle:first-letter {
    text-transform: uppercase;
}
</style>
