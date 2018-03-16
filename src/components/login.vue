<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        mobile: 1
      },
      error_login: ''
    }
  },
  computed: mapState({
    islogin: state => state.isLogin
  }),
  methods: {
    async login() {


      this.$f7.preloader.show()
      let response = await this.$store.dispatch('login', this.formData)
      console.log(response.response.isLogin)

      this.$f7.preloader.hide()
      if( response.success) {
        if (response.response.isLogin) {
          this.$refs.loginScreen.close()
          this.$f7.router.navigate('/home/')
        } else {
          this.error_login = 'Mobile number seems incorrect. Please try to login again.'
        }
      }

    },
    close () {
      this.error_login = ''
      this.$refs.loginScreen.close()
    }
  }
}
</script>

<style>

</style>
<template>
  <f7-login-screen ref="loginScreen" id="login-screen">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Mobile Number</f7-label>
            <f7-input
              type="text"
              placeholder="Enter number"
              error-message="Only numbers please!"
              required
              validate
              pattern="[0-9]*"
              clear-button
              :value="formData.mobile"
              @input="formData.mobile = $event.target.value"
              >
            </f7-input>
          </f7-list-item>
        </f7-list>
        <f7-block v-if="error_login" class="text-color-red text-align-center" >
          {{ error_login }}
        </f7-block>
        <f7-block>
          <f7-row>
            <f7-col width="50">
              <f7-button fill raised @click="login" >Login</f7-button>
            </f7-col>
            <f7-col width="50">
              <f7-button raised @click="close" >Close</f7-button>
            </f7-col>
          </f7-row>

        </f7-block>
        <f7-block-footer>
          <p>Sample Mobile Number : 639276510421</p>
        </f7-block-footer>
      </f7-page>
    </f7-view>
    </f7-login-screen>
</template>
