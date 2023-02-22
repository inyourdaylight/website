/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router.js';
import prismic from './prismic.js';
let index = createApp(Index);
index.config.globalProperties.$cms = prismic;

import StickyScrollGallery from "./components/StickyScrollGallery.vue";
import TextComponent from "./components/TextComponent.vue";
import FloatingCard from "./components/FloatingCard.vue";
import FooterNav from './components/FooterNav.vue';
import HeaderNav from './components/HeaderNav.vue';
import HeaderNavScreen from './components/HeaderNavScreen.vue';
import HomepageBanner from './components/HomepageBanner.vue';
import TextandFadedBG from './components/TextandFadedBG.vue';
import TextAndImage from './components/TextAndImage.vue';
import GoldSquareSection from './components/GoldSquareSection.vue';
import CarouselText from './components/CarouselText.vue';
import ImagesGallery from './components/ImagesGallery.vue';
import FullsizeImage from './components/FullsizeImage.vue';
import CDAPApplication from './components/CDAPApplication.vue';
import TimeMoon from './components/TimeMoon.vue';
import GlowSphere from './components/GlowSphere.vue';
import IYDLogo from './components/IYDLogo.vue';
import ContactForm from './components/ContactForm.vue';

index.component('StickyScrollGallery', StickyScrollGallery);
index.component('TextComponent', TextComponent);
index.component('FooterNav', FooterNav);
index.component('HeaderNav', HeaderNav);
index.component('HeaderNavScreen', HeaderNavScreen);
index.component('HomepageBanner', HomepageBanner);
index.component('FloatingCard', FloatingCard);
index.component('TextandFadedBG', TextandFadedBG);
index.component('TextAndImage', TextAndImage);
index.component('GoldSquareSection', GoldSquareSection);
index.component('CarouselText', CarouselText);
index.component('ImagesGallery', ImagesGallery);
index.component('FullsizeImage', FullsizeImage);
index.component('CDAPApplication', CDAPApplication);
index.component('TimeMoon', TimeMoon);
index.component('GlowSphere', GlowSphere);
index.component('IYDLogo', IYDLogo);
index.component('ContactForm', ContactForm);

index.use(router);
index.mount('#app');
