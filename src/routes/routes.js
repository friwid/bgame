import { createRouter, createWebHashHistory } from "vue-router";
//import PageViewer from "./views/PageViewer.vue";
//import Pages from "./views/Pages.vue";


/**
 * Creates a new Vue Router instance.
 * @module router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    /**
     * Route for viewing a page.
     * The index parameter is optional.
     * If provided, it will be passed as a prop to the PageViewer component.
     */
/*     { path: "/:index?", component: PageViewer, props: true },
    { 
      path: "/pages", 
      component: Pages,
      children: [
        { path: "", component: PagesList },
        { path: "create", component: CreatePage },
        { path: ":index/edit", component: PageEdit, props: true }
      ] }, */
  ],
});

export default router;
