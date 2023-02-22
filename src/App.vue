<template>
  <div id="inner">
      <component v-for="(item, i) in components" :key="i" :is="item.component" :id="item.component+i" :data="item.data"></component>
    </div>
    <FooterNav></FooterNav>
</template>

<script>
import {toRaw} from "vue";
export default {
  name: 'App',
  components: {
  },
  props: {
    scrollPos: {
      type: Number,
      default: 0
    },
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    scrollPos: {
      handler(scrollPos) {
        console.log(scrollPos);
        let scrolledComponent = document.getElementById(toRaw(this.componentsIntegered)[this.positions.filter(item => scrollPos >= item).length - 1]);
        if (toRaw(this.positions).filter(item => scrollPos >= item).length > 0 && !scrolledComponent.className.includes("fadein")) {
          scrolledComponent.className += " fadein";
        }
      }
    }
   
  },
  methods: {
  },
  data() {
    return {
      components: [
        {
          component: 'HomepageBanner',
          data: {}
        },
        {
          component: 'ImagesGallery',
          data: {
            images: [
              {
                  src: require("./assets/placeholdersize1.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              },
              {
                  src: require("./assets/placeholdersize1.png"),
                  link: '',
                  offset: {x: -80, y: 100}
              },
              {
                  src: require("./assets/placeholdersize1.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              }
            ],
            cta_text: "Check out more of our services!",
            cta: {
              link: './our-services',
              text: 'View All Services'
            }
          }
        },
        {
          component: 'CarouselText',
          data: {}
        },
        {
          component: 'GoldSquareSection',
          data: {}
        },
        {
          component: 'TextandFadedBG',
          data: {}
        },
        {
          component: 'ImagesGallery',
          data: {
            images: [
              {
                  src: require("./assets/placeholdersize1.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              },
              {
                  src: require("./assets/placeholdersize1.png"),
                  link: '',
                  offset: {x: -80, y: 100}
              },
              {
                  src: require("./assets/placeholdersize1.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              }
            ],
            cta_text: "See more of our work!",
            cta: {
              link: '',
              text: 'See More'
            }
          }
        },
      ],
      componentsIntegered: [],
      positions: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.positions = [...this.components].map((id,i) => {
        let component = document.getElementById(id.component+i);
        // return (component.getBoundingClientRect().top - ((window.innerHeight - component.getBoundingClientRect().height) / 8)) + window.scrollY;
        return component.getBoundingClientRect().top - (window.innerHeight * .5);
      })
      console.log(this.positions);
    })
    
    this.componentsIntegered = [...this.components].map((item, i) => item.component+i);
  
  }
}
</script>

<style lang="scss">
@import "fonts.scss";
@import "styles.scss";
</style>