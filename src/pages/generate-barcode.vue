<script>
import VueBarcode from '@xkeshi/vue-barcode'
export default {
  name: 'generate-barcode',
  data() {
    return {
      barcodeValue: 'test',
      barCodeOptiions: {
        displayValue: true,
        margin:0,
        textAlign: 'center',
        width:2
      }
    }
  },
  components: {
    VueBarcode
  }


}
</script>

<style scoped>

</style>


<template>
  <f7-page>
    <f7-navbar title="Generate Barcode" back-link="Back"></f7-navbar>
    <f7-block strong>

      <vue-barcode :value="barcodeValue" :options="barCodeOptiions"></vue-barcode>

    </f7-block>
    <f7-block strong>
      <f7-link @click="$f7router.back()">Go back</f7-link>
    </f7-block>
  </f7-page>
</template>

