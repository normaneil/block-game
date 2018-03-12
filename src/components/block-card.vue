<script>
import VueBarcode from '@xkeshi/vue-barcode'
export default {
  name: 'block-card',
  props: ['card'],
  components: {
    VueBarcode
  },
  data () {
    return {
      barCodeOptiions: {
        displayValue: true,
        margin:0,
        textAlign: 'center',
        width:1,
        height:70,
        fontSize:15
      }
    }
  },
  computed: {
    barcodeValue () {
      return this.card.id+'-'+this.card.trxid
    },
    cardId () {
      return 'card_'+this.card.id
    }
  }
}
</script>

<style scoped>
.h-cell-bg {
  color: red;
  font-weight: bold;
  background: #ffffff;
}

.b-cell {
  border: #ccc solid 1px;
}
</style>

<template>
  <f7-card :id="cardId">
    <!-- <f7-card-header>{{ card.id }} </f7-card-header> -->
    <f7-card-content class="block-bg">
      <f7-row no-gap>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">B</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">L</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">O</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">C</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">K</f7-col>

        <f7-col width="20" class="text-align-center" v-for="(v, k) in card.card" :key="k" >{{ v }}</f7-col>
      </f7-row>


    </f7-card-content>
    <f7-card-footer>
      <vue-barcode :value="barcodeValue" :options="barCodeOptiions"></vue-barcode>
    </f7-card-footer>
  </f7-card>
</template>

