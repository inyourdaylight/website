<template>
  <div class="nav">
    <transition :key="hour+minute" appear>
      <p :class="`time ${showNav ? `blue` : ``}`">
        <TimeSun class="sun" :color="showNav ? `#1B2227` : ``"></TimeSun>
        <span v-html="hour"></span>:<span v-html="minute"></span>
      </p>
    </transition>
    <div class="logo">
      <a href="/">
        <img src="../assets/IYD-White-Small.svg"/>
      </a>
    </div>
    <div class="scrollbar" ref="scrollbar">
      <img src="../assets/glow-sphere.svg" ref="glow"/>
    </div>
    <div class="hamburger" id="hamburgerMenu">
      <div class="line top"></div>
      <div class="line mid"></div>
      <div class="line bot"></div>
    </div>
  
  </div>
</template>

<script>
import TimeSun from './TimeSun.vue';
import { gsap } from "gsap";
import { toRaw } from 'vue';
export default {
  name: 'HeaderNav',
  components: {
    TimeSun
  },
  props: {
    scrollLimit: {
      type: Number,
      default: 0
    },
    scrollPos: {
      type: Number,
      default: 0
    },
    showNav: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    scrollPos(scrollPos) {
      let glowSize = this.$refs.glow.getBoundingClientRect().height;
      this.$refs.glow.style = `top: ${scrollPos * ((this.scrollBarHeight - (glowSize) / 2) / this.scrollLimit)}px`
    },
    showNav(showNav) {
      if (showNav) {
        this.hamburgerAnimate();
      } else {
        toRaw(this.timeline).reverse();
      }
    }
  },
  methods: {
    getTime() {
      this.date = new Date();
      this.minute = this.date.getMinutes().toString().padStart(2, '0');
      this.hour = this.date.getHours().toString();
    },
    hamburgerAnimate() {
      toRaw(this.timeline).restart();
      toRaw(this.timeline).to(".top", {rotation: 45, duration: 1, y: 8, borderTop: "1px solid #1B2227"}, 0);
      toRaw(this.timeline).to(".mid", {width: 0, duration: 1, borderTop: "1px solid #1B2227"}, 0);
      toRaw(this.timeline).to(".bot", {rotation: -45, duration: 1, y: -8, borderTop: "1px solid #1B2227"}, 0);
    }
  },
  data() {
    return {
      date: new Date(),
      scrollBarHeight: 0,
      minute:0,
      hour:0,
      timeline: new gsap.timeline()
    }
  },
  
  mounted() {
    
    this.getTime();
    this.scrollBarHeight = this.$refs.scrollbar.getBoundingClientRect().height;
    let countdownTilMinuteInterval = (60 - this.date.getSeconds()) * 1000 + this.date.getMilliseconds();

    setTimeout(() => {
      this.getTime();
      setInterval(() => {
        this.getTime();
      }, 60000);
    }, countdownTilMinuteInterval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.time {
  color: $gold;
  position: fixed;
  z-index: 10;
  top: 20px;
  transition: all .5s ease .5s;
  left: 20px;
  margin: 0;
  .sun {
    display: inline-block;
    min-width: 40px;
    padding-right: 5px;
    transition: all .5s ease .5s;
  }
}
.blue {
  color: #1B2227;
  transition: all .5s ease .5s;
}
.logo {
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  z-index: 10;
  img {
    max-width: 100px;
  }
}
.scrollbar {
  position: fixed;
  right: 30px;
  height: 50vh;
  border-right: 1px solid white;
  top: 50%;
  transform: translateY(-50%);
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 0;
  }
}
.hamburger {
  position: fixed;
  right: 20px;
  top: 30px;
  z-index: 10;
  cursor: pointer;
  img {
    width: 30px;
  }
}

.line {
  pointer-events: none;
  width: 30px;
  height: 1px;
  margin-bottom: 6px;
  border-top: 1px solid white;
}
</style>
