<template>
  <div id="app">
    <!-- <the-counter></the-counter> -->
    <router-view></router-view>
    <router-link to="/todo" >显示Todo组件</router-link>
    <router-link to="/article" >显示Article组件</router-link>
  </div>
</template>

<script>
// import TheCounter from '@/views/TheCounter.vue'
// import { mapMutations,mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    // TheCounter,
  },
  methods: {
  // mutations和actions也是挂在全局空间下, 可以直接使用
  // ...mapMutations(['INCREMENT', 'DECREMENT']),
  // ...mapActions(['incrementIfOdd', 'incrementAsync'])
}
}

</script>