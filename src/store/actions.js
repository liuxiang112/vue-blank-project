import { ACTION_COMMIT } from './type'

const actions = {
  // Action_commit ({commit}) {
  //   commit('Mutation_commit')
  // }
  // Action_commit (context) {
  //   setTimeout(() => {
  //     context.commit('Mutation_commit')
  //   }, 1000)
  // }
  [ACTION_COMMIT] (context) {
    setTimeout(() => {
      context.commit('MUTATION_COMMIT')
    }, 1000)
  }
}

export default actions
