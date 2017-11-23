<template>
  <div>
   <span style="color:#f00">{{msg}}</span>
  </div>
</template>

<script>
// import {mapState, mapGetters} from 'vuex'
export default {
  name: 'localPage',
  data () {
    return {
      msg: 'localPage'
    }
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  /* list-style-type: none; */
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
