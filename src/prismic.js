
import App from "./App.vue";
import ErrorPage from "./ErrorPage.vue";
import Page from "./Page.vue";
export default new class Prismic {
    constructor() {
        this.routes = [
            {
              path: "/",
              name: 'App',
              component: App,
            },
            {
              path: "/404",
              component: ErrorPage,
            },
            {
              path: "/who-we-are",
              component:Page,
              slices: [
                'StickyScrollGallery'
              ]
            }
          ];
    }
}