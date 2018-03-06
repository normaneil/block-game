<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>
    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block-title>Print</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill raised color="green" @click="printMe" >Print</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      someJSONdata: [
          {
            name: 'John Doe',
            email: 'john@doe.com',
            phone: '111-111-1111'
          },
          {
            name: 'Barry Allen',
            email: 'barry@flash.com',
            phone: '222-222-2222'
          },
          {
            name: 'Cool Dude',
            email: 'cool@dude.com',
            phone: '333-333-3333'
          }
      ]
    }
  },
  methods: {
    printMe() {
      console.log('here')
      // printJS({
      //     printable: this.someJSONdata,
      //     properties: ['name', 'email', 'phone'],
      //     type: 'json',
      //     gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
      //     gridStyle: 'border: 2px solid #3971A5;'
      // });
      printJS('https://6.viki.io/image/3cbf77dfea414e648780c4ed854f7072.jpeg?x=b&s=780x436&q=h&e=t&f=t&cb=1', 'image')
      //printJS('https://www.google.com.ph/', 'html')
    }
  }
}
</script>
