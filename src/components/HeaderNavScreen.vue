<template>
  <div class="header-nav-screen">
    <ul class="menu">
        <li v-for="(item, i) in nav" :key="i">
           <transition appear name="menu-item">
            <h1 class="menu-item" v-show="showNav" :style="`transition-delay: ${((i+1)*100) + 100}ms`">
                <a :href="item.link">{{ item.text }}
            </a></h1>
           </transition>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavScreen',
  props: {
    showNav: {
        type: Boolean,
        defauly: false
    }
  },
  watch: {
  },
  methods: {

  },
  data() {
    return {
        timeout: null,
        nav: [
            {
                text: "About",
                link: null
            },
            {
                text: "Who we are",
                link: "./who-we-are"
            },
            {
                text: "contact",
                link: null
            },
            {
                text: "menu item",
                link: null
            },
            {
                text: "menu item 2",
                link: null
            },
        ]
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.header-nav-screen {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background: $gold;
    z-index: 9;
}
.menu {
    list-style: none;
    padding: 0;
    display: inline-block;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    margin-left: 10%;
    white-space: nowrap;
    h1 {
        margin: 0;
        color: $darkblue;
    }
}
.menu-item {
    transition: all .5s ease-in-out;
    transform: translateY(0%);
}
a {
    text-decoration: none;
    color: $darkblue;
}
.menu-item-enter-to {
    transform: translateY(0%);
    opacity: 1;
}
.menu-item-enter-active {
    transform: translateY(100%);
    opacity: 0;
}
</style>
