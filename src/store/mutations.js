
export default {
  applyGenerateStatus (state, payload) {
    state.isGenerating = payload.status
  },
  applyResponse (state, payload) {
    state.response = payload.response
  }
}
