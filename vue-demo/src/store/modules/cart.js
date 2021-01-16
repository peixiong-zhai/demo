const state = {
    shop_list: [
        {
          id: 11,
          name: '鱼香肉丝',
          price: 12,
        },
        {
          id: 22,
          name: '宫保鸡丁',
          price: 14,
        },
        {
          id: 34,
          name: '土豆丝',
          price: 10,
        },
        {
          id: 47,
          name: '米饭',
          price: 2,
        },
      ],
      added:[]
};
const getters = {
    //商品列表
    shoplist:state => state.shop_list,
    cartProducts:state=>{
        return state.added.map(({id,num})=>{ //在actions中只有的id和num的字段
            //在原始数据数据上面进行刷选，这里通过id来匹配
            let product = state.shop_list.find(n=>n.id == id)
            // console.info('product',product)
            return {
                ...product,
                num
            }
        })
    },
    //计算总价
    totalPrice:(state,getters)=>{  //getter中可以调用getter里面的方法，文档有介绍
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.price * n.num
        })
        return total;
    },
    //计算总数量
    totalNum:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.num
        })
        return total;
    },

};
const actions = {
    //添加到购物车操作
    addToCart({commit},id){
      commit('add',{//传递一个add的方法，携带参数id
          id:id
      })
    },
    //清除购物车
    clearAllCart({commit}){
        commit('clearAll')
    },
    //删除购物车的指定的商品
    delProduct({commit},id){
        commit('del',id)//commit del的方法
    }
};
const mutations = {
   add(state,{id}){
       let record = state.added.find(x=>x.id==id);
        if(!record){
            state.added.push({//如果购物车中还没有这个商品，先用这个id创建一个携带num的对象，后面匹配成功后就只改变num就可以
                id,
                num:1
            })
        }else{
            record.num++
        }
       
   },
   //清除购物车
   clearAll(state){
    state.added = []
},
//删除购物车的指定的商品
del(state,id){
    //console.info(state,product)
    state.added.forEach((n,i)=>{
        if(n.id == id){
            //console.info(11,n)
            //找到下标值
            state.added.splice(i,1)
        }
    })
},
};
export default {
    state,
    mutations,
    actions,
    getters
};