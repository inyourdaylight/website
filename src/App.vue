<template>
  <div id="inner">
      <div class="page">
        <HomepageBanner></HomepageBanner>
        <TextandFadedBG></TextandFadedBG>
        <GoldSquareSection></GoldSquareSection>
        <CarouselText></CarouselText>
        <ImagesGallery></ImagesGallery>
      </div>
      <FooterNav></FooterNav>

  </div>
  
</template>

<script>
import FooterNav from './components/FooterNav.vue';
import HomepageBanner from './components/HomepageBanner.vue';
import TextandFadedBG from './components/TextandFadedBG.vue';
import GoldSquareSection from './components/GoldSquareSection.vue';
import CarouselText from './components/CarouselText.vue';
import ImagesGallery from './components/ImagesGallery.vue';



export default {
  name: 'App',
  components: {
    FooterNav,
    HomepageBanner,
    TextandFadedBG,
    GoldSquareSection,
    CarouselText,
    ImagesGallery,
  },
  props: {
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

<style lang="scss">
@import "fonts.scss";
@import "styles.scss";
</style>
