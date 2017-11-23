<template>
  <div class="outer" style="">
    <div class="inner-wrap" style="">
      <div class="header-nav" style=""></div>
      <button class="init-btn" style="" @click="handleInit">设备初始化</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'init',
  data () {
    return {
      msg: '设备初始化'
    }
  },
  methods: {
    handleInit () {
      setInterval(() => {
        this.$router.push('/index')
      }, 3000)
    }
  },
  computed: {},
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

li {
  display: inline-block;
}

.outer {
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  border:1px solid #333;
  box-sizing: border-box;
  overflow: hidden;
}

.inner-wrap {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #333;
  text-align: center;
}

.header-nav {
  width: 100%;
  height: 40px;
  background: #333;
}

.init-btn {
  background: none;
  padding: 10px;
  margin-top: 50px;
}

</style>
