import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router.js';
import prismic from './prismic.js';
import StickyScrollGallery from "./components/StickyScrollGallery.vue";

let index = createApp(Index);

index.config.globalProperties.$cms = prismic;
index.component('StickyScrollGallery', StickyScrollGallery);
index.use(router);
index.mount('#app');
