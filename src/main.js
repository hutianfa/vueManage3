import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import Hello from './components/Hello.vue'
import Index from './views/index.vue'
import Theme from './views/addThem.vue' 
import newTheme from './views/newTheme.vue'
import userAdmin from './views/userAdmin.vue'
import vuxData from './views/vuxData.vue'
import login from './components/login.vue'
import chartTheme from './views/chartTheme.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

const routes = [{
   path:'/',
   component:login
},{
  path:'/login',
  component:login
},{
	path:'*',
  name:'hello',
	component:Hello,
  children:[{
    path:'index',
    component:Index
  },{
    path:'theme',
    component:Theme,
  },{
    path:'newtheme',
    component:newTheme,
  },{
    path:'useradmin',
    component:userAdmin,
  },{
    path:'vuxdata',
    component:vuxData
  },{
    path:'charttheme',
    component:chartTheme
  }]
}];

const router = new VueRouter({
  routes
});
var app = new Vue({
  router:router,
  render:h=>h(App)
}).$mount('#app');
