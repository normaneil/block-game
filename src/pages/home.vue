<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Block Game</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>


    <f7-block-title>Print Sample</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col>
          <f7-button fill raised color="green" @click="printMe" >Print</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-list-item link="/generate-card/" title="Generate Card"></f7-list-item>
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
