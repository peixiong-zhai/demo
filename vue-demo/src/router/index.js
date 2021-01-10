import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
		path:'/jisuanqi/:num',
		name:'jisuanqi',
		component:()=>import("../view/jisuanqi")
	},
  {
    path:'/inputSearch',
    name:'inputSearch',
    component:()=>import("../view/input/index.vue")
  },
  {
  	path:'/table',
  	name:'table',
  	component:()=>import("../view/table")
  },
  {
  	path:'/detail',
  	name:'detail',
  	component:()=>import("../view/detail")
  },

  ]
})
