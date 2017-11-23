const getters = {
  count: state => {
    state.count += 100
  },
  gettersTest: state => {
    if (state.initData % 2 === 0) {
      return '非无脚下浮云闹'
    } else {
      return '来不相知去不留'
    }
  }
}

export default getters
