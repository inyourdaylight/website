<template>
  <div class="carousel-text">
    <!-- <img class="sun" src="../assets/Sun-animated.svg"/> -->
        <div class="text-content">
            <h2 ref="title" class="text" v-if="text">
                <span class="pre animate-fade-in">We Speak</span>
                <div class="carousel-container animate-fade-in">
                    <span class="row1" ref="row">
                      <transition-group v-for="(item, i) in titleCount + 1" :key="i">
                        <span :key="i+''" v-html="text"></span>
                        </transition-group>
                    </span>
                    <span class="row2">
                      <transition-group v-for="(item, i) in titleCount + 1" :key="i">
                        <span :key="i+''" v-html="text"></span>
                      </transition-group>
                    </span>
                </div>
            </h2>
            <p class="blurb animate-fade-in animate-delay-250">Overall, your brand or company's goal is to make higher revenue or to scale up. But before you do it, you should check if you are customer-centric..</p>
        </div>
  </div>
</template>

<script>
import { toRaw } from 'vue';
import { gsap } from "gsap";
import { Linear } from "gsap";
export default {
  name: 'CarouselText',
  props: {
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    titleCount: {
      handler() {
        this.$nextTick(() => {
          this.animatedTitle();
        })
      }
    },
  },
  methods: {
    animatedTitle() {
      this.rowWidth = this.$refs.row.getBoundingClientRect().width;
      toRaw(this.timeline).to(".row2", {x: this.rowWidth,  duration: 0, ease:Linear.easeNone}, 0);
      toRaw(this.timeline).to(".row1", {x: -((this.rowWidth - window.innerWidth)+ window.innerWidth) ,  duration: this.duration, ease:Linear.easeNone }, 0);
      toRaw(this.timeline).to(".row2", {x: 0,  duration: this.duration, ease:Linear.easeNone }, 0);
      toRaw(this.timeline).repeat();
        
    }
  },
  data() {
    return {
      // text: [
      //   '한국어',
      //   '中文',
      //   'Français',
      //   'English'
      // ],
      text: `한국어 &nbsp;&nbsp; 中文 &nbsp;&nbsp; Français &nbsp;&nbsp; English &nbsp;`,
      rowWidth:0,
      timeline: new gsap.timeline({repeat: -1}),
      titleCount:2,
      duration: 30
    }
  },
  mounted() {
    this.$nextTick(() => {
        this.titleCount = Math.ceil(window.innerWidth / this.$refs.row.getBoundingClientRect().width);
    })
    // this.animatedTitle();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.sun {
    max-height: 100vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
}
.carousel-text {
    height: 60vh;
    position: relative;
    overflow: hidden;
}
.carousel-enter-active {
  transition: all 1s ease;
  opacity: 1;
}
.carousel-enter {
  opacity: 0;
}
.text {
    width: 100vw;
    // transform: translateY(-50%);
    margin: 0;
    // position: absolute;
    z-index: 0;
    top: 50vh;
    text-align: center;
    span:not(.row1, .row2, .pre) {
        display: inline-block;
        padding-right: 20px;
    }
  .row1, .row2 {
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    color: $gold;
    // text-transform: uppercase;
    font-size: 60px;
    font-family: $heading;
    white-space:nowrap;
    top: 50%;
  }
}
.pre {
    color: white;
    // transform: translateY(-100%);
    display: block;
    font-size: 30px;
}
.carousel-container {
    position: relative;
    height: 100px;
}
.blurb {
    text-align: center;
    max-width: 600px;
    width: calc(100% - 40px);
    margin: auto;
    padding-top: 40px;
    text-shadow: 0px 0px 20px #1B2227;
}
.text-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 40px 0;
}
</style>
