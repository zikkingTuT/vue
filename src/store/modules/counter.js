// 定义一个counter模块
export default {
     // 开启命名空间
     namespaced: true,
    // state: 保存状态(数据)
    state: () => {
      return {
        count: 0,
      }
    },
    // 修改数据的方法(同步)
    mutations: {
      INCREMENT(state) {
        state.count++
      },
      DECREMENT(state) {
        state.count--
      },
      INCREMENTIFODD(state) {
        state.count++
      },
      INCREMENTASYNC(state) {
        state.count++
      },
    },
    // 修改数据的方法(支持异步, 相当于中间件)
    actions: {
      increment(ctx) {
        ctx.commit('INCREMENT')
      },
      decrement(ctx, ) {
        ctx.commit('DECREMENT')
      },
      incrementIfOdd(ctx, ) {
        if (ctx.state.count % 2) {
          ctx.commit('INCREMENTIFODD')
        }
      },
      incrementAsync(ctx, ) {
        setTimeout(() => {
          ctx.commit('INCREMENTASYNC')
        }, 1000)
      },
    },
  }
  