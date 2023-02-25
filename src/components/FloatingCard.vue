<template>
  <div class="floating-card">
   <div class="card animate-fade-in">
    <div class="gradient"></div>
    <div class="col">
        <h2 class="animate-fade-in">
            {{ data.title }}
        </h2>
    </div>
    <div class="col">
        <p class="animate-fade-in" v-html="data.text"></p>
        <div class="ctas animate-fade-in" v-show="data.cta_buttons">
            <a class="cta" v-for="(item, i) in data.cta_buttons" :key="i" :href="item.link">
                <p class="cta_text">{{ item.text }}</p>
            </a>
        </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingCard',
  props: {
    data: {
        type: Object,
        default: () => {}
    },
    scrollPos: {
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
.card {
    // background: $darkblue;
    position: relative;
    overflow: hidden;
    background: white;
    border-radius: 20px;
    padding: 40px;
    @media screen and (min-width: $mobileup) {
        padding: 80px;
    }
    h2, p {
        margin: 0;
    }
    h2 {
        color: $darkblue;
        @media screen and (max-width: $mobiledown) {
            margin-bottom: 20px;
        }
        @media screen and (min-width: $mobileup) {
            font-size: 60px;
        }
    }
    ::v-deep p:not(.cta_text) {
        color: $darkblue;
    }
}
.floating-card {
    padding: 60px 100px;
    @media screen and (max-width: $mobiledown) {
        padding: 20px;
    }
}
.col {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    width: 100%;
    @media screen and (min-width: $mobileup) {
        width: 50%;
    }

}
.gradient {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 0;
}
.ctas {
    margin-top: 30px;
    .cta:not(:hover) {
        border: 1px solid $darkblue;
        transition: all 1s ease;
    }
    .cta_text {
        color: $darkblue;
    }
}
</style>
