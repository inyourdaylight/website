<template>
  <div class="page" v-if="page">
      <component v-for="(item, i) in page.slices" 
      :key="i" 
      :is="item.component" 
      :data="item.data"
      :clickEvents="clickEvents"
      :id="item.component+i"></component>
    <FooterNav></FooterNav>

  </div>
</template>

<script>
import {toRaw} from  "vue";
export default {
  
  name: 'PagePage',
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
  components: {
  },
  watch: {
    scrollPos: {
      handler(scrollPos) {
        this.transition(scrollPos);
      },  
      // immediate:true
    }
  },
  methods: {
    transition(scrollPos) {
      let scrolledComponent = document.getElementById(toRaw(this.componentsIntegered)[this.positions.filter(item => scrollPos >= item).length - 1]);

       try {
        if (toRaw(this.positions).filter(item => scrollPos >= item).length > -1 && !scrolledComponent.className.includes("fadein")) {
          scrolledComponent.className += " fadein";
        }
       } catch {
        // No error
       }
    }
  },
  data() {
    return {
      page: null,
      componentsIntegered: [],
      positions: []
    }
  },
  mounted() {
    try {
      this.page = this.$cms.routes.filter(i => i.path === window.location.pathname)[0];
      console.log(this.$cms.routes);
    } catch {
      console.log("page doesn't exist");
      window.location.href="./404";
    }
    this.componentsIntegered = [...this.page.slices].map((item, i) => item.component+i);

    this.$nextTick(() => {
      this.positions = [...this.page.slices].map((id,i) => {
        let component = document.getElementById(id.component+i);
        return (component.getBoundingClientRect().top - ((window.innerHeight - component.getBoundingClientRect().height) / 2)) + window.scrollY;
      })

      // Accounts for if the element already shows on the page
      this.positions.forEach(pos => {
        if (pos < (window.innerHeight / 3)) {
          this.transition(pos);
        }
      })
      // this.componentsIntegered .forEach(item => {
      //   document.getElementById(item).className += " animate-fade-in";
      // })
    })
    
  },
  beforeUpdate() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./styles.scss";
@import "./fonts.scss";

.page {
  padding-top: 20vh;
}

</style>
