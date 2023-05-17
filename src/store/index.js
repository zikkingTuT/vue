import Vue from 'vue'
import Vuex from 'vuex'
import counter from'./modules/counter'
import todos from './modules/todos'
Vue.use(Vuex)
// vuex本质上是vue的一个插件, 通过Vue.use()注册
// 上所有的vue实例上挂载$store
//Vue.use(Vuex)
//可以将多个进行拆分各个专用的

export default new Vuex.Store({
  state: {
    count:0,
    name:'张三',
    age:18,
    todos: [
      { id: 1, content: '待办1', done: true },
      { id: 2, content: '待办2', done: false },
      { id: 3, content: '待办3', done: false },
    ],
  },
  getters: {
    doneTodos:(state)=>{
      return state.todos.filter((todo) => todo.done)
    },
    getTodoById: (state) => {
      return (id) => {
        return state.todos.find((todo) => todo.id == id)
      }
    },
  },
//处理同步任务
  mutations: {
   //加减乘除
    INCREMENT(state, value) {
      console.log(state,'value---->',value)
      state.count += value
    },
    decrement(state, value) {
      console.log(state,'value---->',value)
      state.count -= value
    },
    incrementIfOdd(state, value) {
      console.log(state,'value---->',value)
      if (state.count % 2) state.count+=value
    },
    incrementAsync(state, value) {
      console.log(state,'value---->',value)
      setTimeout(() => {
        state.count += value
      }, 500)
      
    },
  },
//   1) 为什么将Actions和Mutations分开
// Vuex设计的目的就是为中大型项目服务的
// 1. Actions属于分层设计, 将复杂业务解耦, 承担了类似中间件的角色
// 2. Actions处理异步任务, Mutations处理同步任务
// 3. Mutations方便调试与监控, 能更好地与devtools集成
  actions: {
    INCREMENT(ctx,value){
      console.log(ctx,value,'cts-----<<<<');
      ctx.commit('INCREMENT',value)
    },
    complex(ctx) {
      console.log('处理复杂逻辑...')
      ctx.dispatch('sub1')
    },
    sub1(ctx) {
      console.log('处理子任务1...')
      ctx.dispatch('sub2')
    },
    sub2(ctx) {
      console.log('处理子任务2...')
      ctx.commit('INCREMENT', 1)
    },
  },
  modules: {
    counter,
    todos

  }
})
