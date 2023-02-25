<template>
  <div :class="`nav ${navColor}`" id="nav">
    <div class="languages">
      <ul>
        <li class="active">
          EN
        </li>
        <li>
          FR
        </li>
        <li>
          한국어
        </li>
        <li>
          中文
        </li>
      </ul>
    </div>
    <div class="scrollbar" ref="scrollbar">
      <GlowSphere src="../assets/glow-sphere.svg" class="scroll-handle" :color="navColor === 'navDark' ? `#1B2227` : `white`"/>
    </div>
    <div :class="`hamburger ${showNav ? `blue` : ``}`" id="hamburgerMenu">
      <div class="line top"></div>
      <div class="line mid"></div>
      <div class="line bot"></div>
    </div>
    <div class="logo">
      <a href="./">
        <!-- <img src="../assets/IYD-White-Small.svg"/> -->
        <IYDLogo></IYDLogo>
      </a>
    </div>
    <transition :key="hour+minute" appear>
      <a href="./">
        <p :class="`time ${showNav ? `blue` : ``}`">
        <TimeSun class="sun" v-show="hour < 18" :color="showNav ? `#1B2227` : ``"></TimeSun>
        <TimeMoon class="sun" v-show="hour > 18" :color="showNav ? `#1B2227` : ``"></TimeMoon>
        <span v-html="hour"></span><span>:</span><span v-html="minute"></span>
      </p>
      </a>
    </transition>
    <div class="desktop-nav">
      <ul class="menuleft">
        <li v-for="(item, i) in menuleft" :key="i" class="menuitemleft">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
      <li class="logo">
          <a href="./">
            <!-- <img src="../assets/IYD-White-Small.svg"/> -->
            <IYDLogo></IYDLogo>
          </a>
        </li>
      <ul class="menuright">
        <li v-for="(item, i) in menuright" :key="i" class="menuitemright">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
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
    },
    navColor: {
      type: String,
      default: "darkNav"
    },
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    scrollPos(scrollPos) {
      // let glowSize = this.$refs.glow.getBoundingClientRect().height;
      document.getElementsByClassName("scroll-handle")[0].style = `transform: translateY(${scrollPos * ((this.scrollBarHeight) / this.scrollLimit)}px) translateX(-50%)`;
    },
    clickEvents(e) {
      this.scroller(e);
    },
    showNav(showNav) {
      if (showNav) {
        this.hamburgerAnimate();
      } else {
        toRaw(this.timeline).reverse();
      }
    },
    // navColor(e) {
    //   console.log(e);
    // }
  },
  methods: {
    scroller(e) {

      if (e.target.className.includes("scroll-handle")) {
         window.addEventListener("mousemove", this.scrollDrag);
         window.addEventListener("mouseup", this.removeScrollDrag);
      }
    },
    scrollDrag(e) {
      let scrollbarTop = this.$refs.scrollbar.getBoundingClientRect().top;
      let scrollbarHeight = this.$refs.scrollbar.getBoundingClientRect().height;
      let move = Math.min((Math.max((e.clientY - scrollbarTop), 0)), scrollbarHeight);
      document.getElementsByClassName("scroll-handle")[0].style = `transform: translateY(${move}px) translateX(-50%);`;
      window.scrollTo(0, move * (this.scrollLimit / scrollbarHeight));
    },
    removeScrollDrag() {
      window.removeEventListener("mousemove", this.scrollDrag);
    },
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
      timeline: new gsap.timeline(),
      menuleft: [],
      menuright: []
    }
  },
  
  mounted() {
    
    this.getTime();
    this.scrollBarHeight = this.$refs.scrollbar.getBoundingClientRect().height;
    let countdownTilMinuteInterval = (60 - this.date.getSeconds()) * 1000 + this.date.getMilliseconds();
    this.$nextTick(() => {
      // this.menuleft = this.$cms.nav.split(Math.ceil($cms.nav.length / 2));
      this.menuleft = [...this.$cms.nav].splice(0, Math.ceil(this.$cms.nav.length / 2));
      this.menuright = [...this.$cms.nav].splice(Math.ceil(this.$cms.nav.length / 2));

    })
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
  color: white;
  position: fixed;
  z-index: 10;
  top: 26px;
  transition: all .5s ease .5s;
  left: 20px;
  margin: 0;
  // padding-left: 20px;
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
  mix-blend-mode: normal !important;
}
.logo {
  position: fixed;
  left: 50%;
  :deep svg {
    height: 50px;
  }
  // left: 140px;
  top: 20px;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  // mix-blend-mode: difference;
  display: inline-block;
  vertical-align: middle;
}
.scrollbar {
  cursor: pointer;
  position: fixed;
  right: 30px;
  height: 50vh;
  border-right: 1px solid white;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  // mix-blend-mode: difference;
  @media screen and (max-width: $mobiledown) {
    display: none;
  }
  .scroll-handle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -23px;
    cursor: pointer;
  }
}
.hamburger {
  @media screen and (min-width: $mobileup) {
    display: none;
  }
  position: fixed;
  right: 20px;
  top: 30px;
  z-index: 10;
  cursor: pointer;
  // mix-blend-mode: difference;

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
.desktop-nav {
  @media screen and (max-width: $mobiledown) {
    display: none;
  }
  position: fixed;
  // right: 20px;
  top: 20px;
  li {
    transform: translateY(-50%);
  }
  z-index: 4;
  li {
    cursor: pointer;
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    color: $gold;
  }
  
ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      padding: 0 15px;
    }
  }
}
.navDark {
  .scrollbar {
    border-color: $darkblue;
  }
  a, span, .sun {
    color: $darkblue;
    &:after, &:before {
      background: $darkblue;
    }
  }
}
.languages {
  @media screen and (max-width: $mobiledown) {
    display: none;
  }
  position: fixed;
  left: 20px;
  top: 50vh;
  z-index: 10;
  transform: translateY(-50%);
  ul {
    list-style: none;
    padding: 0;
    line-height: 1.5;
  }
  .active {
    color: $gold;
  }
}
.menuleft, .menuright {
  position: fixed;
  display: inline-block;
  top: 40px;
}
.menuleft {
  text-align: right;
  right: calc(50% + 50px);
}
.menuright {
  text-align: left;
  left: calc(50% + 50px);
}
</style>
