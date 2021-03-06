import axios from 'axios'

export default {
  async generate ({
    commit,
    state,
    dispatch
  }, data) {

    try {
      commit('applyGenerateStatus', {
        status: true
      })

      // let response = await apios.post('/device/issue_tokens', data)
      // console.log(data)
      let response = [
        {
          id: '639276510421',
          trxid: '60485621OI10',
          date: '2010-12-13 10:02:11',
          card: [ "15","23","32","48","65","14","16","44","58","72","5","22","F","55","62","7","18","33","49","70","8","25","37","57","63"]
        },
        {
          id: '639276510422',
          trxid: '60485621OI11',
          date: '2010-12-13 10:02:11',
          card: [ "15","23","32","48","65","14","16","44","58","72","5","22","F","55","62","7","18","33","49","70","8","25","37","57","63"]
        },
        {
          id: '639276510423',
          trxid: '60485621OI12',
          date: '2010-12-13 10:02:11',
          card: [ "15","23","32","48","65","14","16","44","58","72","5","22","F","55","62","7","18","33","49","70","8","25","37","57","63"]
        }
      ]

      commit('applyResponse', {
        response: response
      })

      commit('applyGenerateStatus', {
        status: false
      })

      return {
        success: true,
        result: response
      }
      return {
        success: false,
        result: []
      }
    }
    catch (e) {
      return {
        success: false,
        response: e.response
      }
    }
  }
}
