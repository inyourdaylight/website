import { createRouter, createWebHistory } from "vue-router";
import prismic from "./prismic.js";

const router = createRouter({
    history : createWebHistory(),
    base: "",
    routes : prismic.routes
})

export default router;