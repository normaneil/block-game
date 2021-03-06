import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import GenerateCardPage from './pages/generate-card.vue';
import ScannerPage from './pages/scanner.vue';
import GenerateBarcodePage from './pages/generate-barcode.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/generate-card/',
    component: GenerateCardPage,
  },
  {
    path: '/scanner/',
    component: ScannerPage,
  },
  {
    path: '/generate-barcode/',
    component: GenerateBarcodePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },

];
