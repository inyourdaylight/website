<template>
  <div class="index">
    <!-- <div class="gradient"></div> -->
    <div class="shine-gradient" ref="shine"></div>
    <div :class="`nav-background ${page ? page.bg === 'light' ? 'light-nav-background' : 'dark-nav-background' : ''} ${scrollPos > 50 ? 'show-nav-background' : 'hide-nav-background'}`"></div>
    <HeaderNav 
    :clickEvents="mouseEvent"
    :scrollLimit="scrollLimit" 
    :scrollPos="scrollPos"
    :showNav="showNav"
    :navColor="page ? page.bg === 'light' ? 'navDark' : 'navLight' : ''"></HeaderNav>
    
      <transition appear name="header-nav-screen">
        <HeaderNavScreen 
        v-show="showNav" 
        :showNav="showNav"
        ></HeaderNavScreen>
      </transition>

    <div id="page" :class="`${page ? page.bg === 'light' ? 'lightpage' : 'darkpage' : ''}`" >
    <div class="gradient" v-show="page && page.bg === 'light'"></div>

      <router-view
      :clickEvents="clickEvent"
      :key="$route"
      :scrollPos="scrollPos"
      ></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexIndex',
  props: {
  },
  components: {
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.showNav = false;
        window.scrollTo(0, 0);
        try {
          this.page = this.$cms.routes.filter(i => i.path === window.location.pathname)[0];
        } catch {
          console.log("page doesn't exist");
          window.location.href="./404";
        }
      })
    }
  },
  methods: {
    clickEvents(e) {
      this.clickEvent = e;
      switch(e.target.id) {
        case "hamburgerMenu": {
          this.showNav = !this.showNav;
          break;
        }
        case "closeNav": {
          this.showNav = false;
          break;
        }
      }
    },
    mousedown(e) {
      this.mouseEvent = e;
    },
    scroll() {
      this.scrollPos = window.scrollY;
      this.shineGradient(this.scrollPos);
    },
    shineGradient(scrollPos) {
      var pos = Math.min(scrollPos, (window.innerHeight * .8));
      this.$refs.shine.style = `transform: translateY(${ (window.innerHeight * .5) - pos}px)`;
    }
  },
  data() {
    return {
      showNav: false,
      scrollLimit: 0,
      scrollPos: 0,
      page: null,
      clickEvent: null,
      mouseEvent: null
    }
  },
  mounted() {
     // Defining only one click event listener here, to prevent possible memory leaks
    window.addEventListener("mousedown", this.mousedown);
    window.addEventListener("click", this.clickEvents);
    window.addEventListener("touchstart", this.clickEvents);
    // window.addEventListener("touchstart", this.clickEvents);

   
    window.onload = () => {
      return new Promise((resolve) => {
          setTimeout(() => {
            window.scrollTo({top: 0, left: 0});
            resolve();
          }, 0);
      }).then(() => {
        window.addEventListener("scroll", this.scroll);
      })
      
    }
    this.shineGradient(this.scrollPos);

   
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
  background: linear-gradient(180deg, rgba(255, 243, 197, 0) 0%, $lightgold 94.79%);
  transform: rotate(-180deg);
  z-index: 0;
  pointer-events: none;
}
.shine-gradient {
  background-image: url("./assets/BG-Gradient.png");
//   background: rgb(207,209,189);
// background: radial-gradient(circle, rgba(207,209,189,0.29597776610644255) 11%, rgba(218,219,212,0.22875087535014005) 28%, rgba(221,221,218,0.04667804621848737) 68%, rgba(224,224,224,0) 100%);

  position: fixed;
  // transform: translateY(-50%);
  top: -50vh;
  left: 0;
  width: 100%;
  height: 150vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  // transition: all 1s ease;
  pointer-events: none;
}

#page {
  position: relative;
  z-index: 2;
}
#app {
  // background-color: $darkblue;
  background-image: url("./assets/BG.jpg");
  background-size: 100vw 150vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.page {
  z-index: 1;
  position: relative;
}
.header-nav-screen  {
  width: 100vw;
  transition: all 1000ms cubic-bezier(0.355, 0.005, 0.240, 0.990); /* custom */
  transition-timing-function: cubic-bezier(0.355, 0.005, 0.240, 0.990); /* custom */
  @media screen and (min-width: $mobileup) {
    display: none;
  }
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
  min-height: 100vh;
}
h1 {
    font-family: $heading;
    // text-transform: uppercase;
}
h3 {
    font-family: $subheading;
}
.dark-nav-background {
  background: linear-gradient(0deg, rgba(37,37,37,0) 0%, rgba(33,49,58,0.5536808473389356) 21%, rgba(32,51,62,0.8730085784313726) 49%, rgba(32,52,65,0.9374343487394958) 66%, rgba(31,55,70,1) 100%);
}
.light-nav-background {
  background: linear-gradient(0deg, rgba(224,224,224,0) 0%, rgba(224,224,224,0.6965379901960784) 41%, rgba(224,224,224,1) 100%);
}
.nav-background {
  position: fixed;
  height: 80px;
  width: 100%;
  // background: $darkblue;
  z-index: 3;
  top: 0;
  transition: all .5s ease !important;
  transform: translateY(0%);
}
.show-nav-background {
  transform: translateY(0%);
  transition: all .5s ease;
}
.hide-nav-background {
  transform: translateY(-100%);
  transition: all .5s ease;
}
</style>
