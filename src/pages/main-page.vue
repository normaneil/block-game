<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'main-page',
  computed: mapState({
    isLoggedin: state => state.islogin
  }),
  data () {
    return {
      msg: 'This is a test',
      isLogin: this.$store.state.isLoggedin
    }
  },
  async mounted () {
    this.islogin = this.$store.state.isLoggedin
    if (this.isLogin) {
      this.$f7.router.navigate('/home/')
    }
  }
}
</script>

<style scoped>
.home{
  background: url(../assets/bingo-balls.png) no-repeat transparent top center;
  background-size:contain;
  height: 100vh;
}

.logo{
  height:88px;
  margin-top:50px;
  margin-bottom: 50px;
}
</style>


<template>
  <f7-page class="">
    <f7-block>
      <img src='../assets/bingo-balls.png' class='logo'/>
      <f7-list>
        <f7-list-button title="Sign In" login-screen-open="#login-screen"></f7-list-button>
      </f7-list>

    </f7-block>
  </f7-page>
</template>

