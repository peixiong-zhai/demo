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
  	path:'/tables',
  	name:'tables',
  	component:()=>import("../view/tables")
  },
  {
  	path:'/detail',
  	name:'detail',
  	component:()=>import("../view/detail")
  },
  {
  	path:'/addTable',
  	name:'addTable',
  	component:()=>import("../view/addTable")
  },
  {
  	path:'/toComponent',
  	name:'toComponent',
  	component:()=>import("../view/toComponent")
  },
  {
  	path:'/shopCar',
  	name:'shopCar',
  	component:()=>import("../view/shopCar")
  },
  ]
})
