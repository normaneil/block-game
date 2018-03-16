export default {
  methods: {
    openPage (url) {
      try{
        this.$router.load({
          url,
          pushState: true
        })
      }
      catch (e) {
        this.$f7.mainView.router.load({
          url,
          pushState: true
        })        
      }
      try{
        this.$refs.panel.close()
      }
      catch (e) {

      }
    },
    back () {
      this.$router.back()
    }
  }
}