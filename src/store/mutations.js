import { MUTATION_COMMIT } from './type'

const mutations = {
  // Mutation_commit (state) {
  //   state.initData ++
  // }
  [MUTATION_COMMIT] (state) {
    state.initData ++
  }
}

export default mutations
