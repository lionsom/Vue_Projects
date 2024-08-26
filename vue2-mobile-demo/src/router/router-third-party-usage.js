// third party home page
import ThirdPartyUsageHomePage from '@/views/third-party-usage-pages/index'
// lx-ui-vue2
import lxUIVue2UsagePage from '@/views/third-party-usage-pages/lx-ui-vue2-usage-page'
// vant
import BaseNavbarUsagePage from '@/views/third-party-usage-pages/base-navbar-usage-page'
import VantButtonUsagePage from '@/views/third-party-usage-pages/vant-button-usage-page';
// Vuex usage
import VuexUsagePage from '@/views/third-party-usage-pages/vuex-usage-page'
// Vue Icons Plus
import VueIconsPlusUsagePage from '@/views/third-party-usage-pages/vue-icons-plus-page';

export default [
  {
    path: '/third-party-usage-home',
    component: ThirdPartyUsageHomePage
  },
  {
    path: '/lx-ui-vue2-usage',
    component: lxUIVue2UsagePage
  },
  {
    path: '/base-navbar-usage',
    component: BaseNavbarUsagePage
  },
  {
    path: '/vant-button-usage',
    component: VantButtonUsagePage
  },
  {
    path: '/vuex-usage',
    component: VuexUsagePage
  },
  {
    path: '/vue-icons-plus-usage',
    component: VueIconsPlusUsagePage
  }
]
