<template>
  <div class="index">
    <div class="gradient"></div>

    <HeaderNav 
    :scrollLimit="scrollLimit" 
    :scrollPos="scrollPos"
    :showNav="showNav"></HeaderNav>
    <transition appear name="header-nav-screen">
      <HeaderNavScreen v-show="showNav" :showNav="showNav"></HeaderNavScreen>
    </transition>

    <div id="page">
      <router-view class="page"></router-view>
    </div>

  </div>
</template>

<script>
import HeaderNavScreen from './components/HeaderNavScreen.vue';
import HeaderNav from './components/HeaderNav.vue';
export default {
  name: 'IndexIndex',
  props: {
  },
  components: {
    HeaderNavScreen,
    HeaderNav 
  },
  watch: {},
  methods: {
    clickEvents(e) {
      switch(e.target.id) {
        case "hamburgerMenu": {
          this.showNav = !this.showNav;
          break;
        }
      }
    },
    scroll() {
      this.scrollPos = window.scrollY;
    },
  },
  data() {
    return {
      showNav: false,
      scrollLimit: 0,
      scrollPos: 0,
    }
  },
  mounted() {
     // Defining only one click event listener here, to prevent possible memory leaks
     window.addEventListener("click", this.clickEvents);
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scroll);
    })
   
  },
  beforeUpdate() {
    this.scrollLimit = document.getElementById("page").getBoundingClientRect().height - window.innerHeight;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./styles.scss";
@import "./fonts.scss";
p, li, div {
    font-family: $body;
    color: white;
    margin-top: 0;
}
.gradient {
  position: absolute;
  width: 100vw;
  height: 479px;
  background: linear-gradient(180deg, rgba(50, 62, 71, 0) 0%, #323E47 94.79%);
  transform: rotate(-180deg);
  z-index: 0;
  pointer-events: none;
}
#app {
  background-color: $darkblue;
}
.page {
  z-index: 1;
  position: relative;
}
.header-nav-screen  {
  width: 100vw;
  transition: all 1000ms cubic-bezier(0.355, 0.005, 0.240, 0.990); /* custom */
  transition-timing-function: cubic-bezier(0.355, 0.005, 0.240, 0.990); /* custom */
}
.header-nav-screen-enter-to {
  width: 100vw !important;
}
.header-nav-screen-enter-active {
  width: 0vw;
}
.header-nav-screen-leave-to {
  width: 0vw;
}

.page {
  position: relative;
  z-index: 2;
  min-height: 200vh;
}
h1 {
    font-family: $heading;
    text-transform: uppercase;
}
h3 {
    font-family: $headinglight;
}
</style>
