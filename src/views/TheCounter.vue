<template>
    <div>
      <!-- 从Vuex到组件 -->
      <!-- 所有的组件对象都可以通过$store访问到Vuex, 进而可以拿到state
在组件中使用 -->
      <h1>点击了{{ $store.state.count }}次</h1>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <button @click="incrementIfOdd">是奇数就+1</button>
      <button @click="incrementAsync">异步+1</button>
      <button @click="$store.dispatch('complex')">复杂的逻辑</button>
      <!-- <h3>已完成的待办</h3> -->
<ul>
  <!-- <li v-for="item in $store.getters.doneTodos" :key="item.id">
    {{ item.content }}
  </li> -->
</ul>

<!-- <div>id为2的todo: {{ $store.getters.getTodoById(2) }}</div> -->
    </div>
  </template>
  
  <script>
import { mapState,mapGetters } from 'vuex'

  export default {
    name: 'TheCounter',
    data() {
      return {
        //count: 1,
        num:1
      }
    },
    mounted() {
  // 返回一个对象
  console.log(mapState(['count', 'name', 'age']))
},
computed: {
  // 使用对象的展开
   ...mapState(['count', 'name', 'age']),
   ...mapGetters(['doneTodos', 'getTodoById']),
   //console.log( ...mapState(['count', 'name', 'age']))
// mapState(对象写法)
// 键就是在模板中使用的计算属性, 值就是在store中定义的属性
//...mapState({ myCount: 'count', myName: 'name', myAge: 'age' }),
  //someOther() {}
},
    methods: {
      increment() {
        //从组件到actions
//         dispatch的两个参数
// ● type: 对应action函数的名称
// ● payload(可选): 携带的数据
//简单的数据可以直接用.commit 省略.dispatch
        this.$store.dispatch('INCREMENT',this.num)
        //this.$store.commit('INCREMENT',this.num)
        // this.count++
      },
      decrement() {
        this.$store.commit('decrement',this.num)
        // this.count--
      },
      incrementIfOdd() {
        this.$store.commit('incrementIfOdd',this.num)
       // if (this.count % 2) this.count++
      },
      incrementAsync() {
        this.$store.commit('incrementAsync',this.num)
        // setTimeout(() => {
        //   this.count++
        // }, 500)
      },
    },
  }
  </script>