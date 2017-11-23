<template>
  <div style="position:absolute;color:#f00;left:0;right:0;top:0;bottom:0;border:1px solid #f00;overflow: hidden">
    <div style="height:100%;overflow-y:scroll">
      <his-page></his-page>
      <local-page v-show="false"></local-page>
    </div>
  </div>
</template>

<script>
// import {mapState, mapGetters} from 'vuex'
import hisPage from './his'
import localPage from './local'
export default {
  name: 'mainPage',
  components: {
    'his-page': hisPage,
    'local-page': localPage
  },
  data () {
    return {
      msg: 'mainPage'
    }
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 ::-webkit-scrollbar {
    display: none
  }
</style>
