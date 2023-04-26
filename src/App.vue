<template>
  <div id="app">
    <the-counter></the-counter>
  </div>
</template>

<script>
import TheCounter from '@/views/TheCounter.vue'
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    TheCounter,
  },
  methods: {
  // mutations和actions也是挂在全局空间下, 可以直接使用
  ...mapMutations(['INCREMENT', 'DECREMENT']),
  ...mapActions(['incrementIfOdd', 'incrementAsync'])
}
}

</script>