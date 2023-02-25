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
        // console.log(scrollPos);
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
                  src: require("./assets/iyd1.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              },
              {
                  src: require("./assets/CDAP-image.png"),
                  link: '',
                  offset: {x: -80, y: 100}
              },
              {
                  src: require("./assets/goals.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              }
            ],
            cta_text: "We are the official Digital Advisor for Canada Digital Adoption Program (CDAP).",
            text: 'We are certified by the Federal Government of Canada. Feel free to check the criteria to become an eligible business and click the icon at the right bottom corner to start a conversation. We are also more than welcome to receive your inquiry email.',
            cta: {
              link: './cdap',
              text: 'Learn More About CDAP'
            }
          }
        },
        {
          component: 'CarouselText',
          data: {}
        },
        {
          component: 'GoldSquareSection',
          data: {
            title: "Clear Growth Strategy For Your Future.",
            stagger_title: true,
            text: "You need to have a clear vision for your company and a well-thought-out marketing strategy in order to grow sustainably. A strong business plan will help keep your company on track as you make decisions about where to allocate resources and energy, bring on partners, evaluate new opportunities and much more!",
            image: ''
          }
        },
        {
          component: 'ImagesGallery',
          data: {
            images: [
              {
                  src: require("./assets/iyd3.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              },
              {
                  src: require("./assets/iyd6.png"),
                  link: '',
                  offset: {x: -80, y: 100}
              },
              {
                  src: require("./assets/iyd5.png"),
                  link: '',
                  offset: {x: 0, y: 0}
              }
            ],
            cta_text: "Check out our services!",
            cta: {
              link: '',
              text: 'services'
            },
            text_on_top: true
          }
        },
        // {
        //   component: 'TextandFadedBG',
        //   data: {
        //     title: "CRM",
        //     text: "Customer satisfaction is the number one measure of success for your business"
        //   }
        // }
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
      // console.log(this.positions);
    })
    
    this.componentsIntegered = [...this.components].map((item, i) => item.component+i);
  
  }
}
</script>

<style lang="scss">
@import "fonts.scss";
@import "styles.scss";
</style>