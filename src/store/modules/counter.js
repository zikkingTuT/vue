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
      INCREMENT(state, value) {
        state.count++
      },
      DECREMENT(state, value) {
        state.count--
      },
      INCREMENTIFODD(state, value) {
        state.count++
      },
      INCREMENTASYNC(state, value) {
        state.count++
      },
    },
    // 修改数据的方法(支持异步, 相当于中间件)
    actions: {
      increment(ctx, value) {
        ctx.commit('INCREMENT')
      },
      decrement(ctx, value) {
        ctx.commit('DECREMENT')
      },
      incrementIfOdd(ctx, value) {
        if (ctx.state.count % 2) {
          ctx.commit('INCREMENTIFODD')
        }
      },
      incrementAsync(ctx, value) {
        setTimeout(() => {
          ctx.commit('INCREMENTASYNC')
        }, 1000)
      },
    },
  }
  