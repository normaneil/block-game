<script>
export default {
  name: 'generate-card',
  data () {
    return {
      someJSONdata: [
          {
            id: '639276510421',
            trxid: '60485621OI10',
            date: '2010-12-13 10:02:11',
            card: [ "15","23","32","48","65","14","16","44","58","72","5","22","F","55","62","7","18","33","49","70","8","25","37","57","63"]
          },
          {
            id: '639276510421',
            trxid: '60485621OI10',
            date: '2010-12-13 10:02:11',
            card: [ "15","23","32","48","65","14","16","44","58","72","5","22","F","55","62","7","18","33","49","70","8","25","37","57","63"]
          },
          {
            id: '639276510421',
            trxid: '60485621OI10',
            date: '2010-12-13 10:02:11',
            card: [ "15","23","32","48","65","14","16","44","58","72","5","22","F","55","62","7","18","33","49","70","8","25","37","57","63"]
          }
      ]
    }
  }
}
</script>

<style scoped>
.block-bg {

}

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
  <f7-page>
    <f7-navbar title="Generate Card" back-link="Back"></f7-navbar>
    <f7-block strong>

      <f7-card v-for="(item, key) in someJSONdata" :key="key" >
        <f7-card-header>{{ item.id }} </f7-card-header>
        <f7-card-content class="block-bg">
          <f7-row no-gap>
            <f7-col width="20" class="text-align-center h-cell-bg b-cell">B</f7-col>
            <f7-col width="20" class="text-align-center h-cell-bg b-cell">L</f7-col>
            <f7-col width="20" class="text-align-center h-cell-bg b-cell">O</f7-col>
            <f7-col width="20" class="text-align-center h-cell-bg b-cell">C</f7-col>
            <f7-col width="20" class="text-align-center h-cell-bg b-cell">K</f7-col>

            <f7-col width="20" class="text-align-center" v-for="(v, k) in item.card" :key="k" >{{ v }}</f7-col>
          </f7-row>
        </f7-card-content>
        <f7-card-footer>{{ item.trxid }}</f7-card-footer>
      </f7-card>

    </f7-block>

    <!-- <f7-block v-for="(item, key) in someJSONdata" :key="key">
      <f7-row no-gap>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">B</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">L</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">O</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">C</f7-col>
        <f7-col width="20" class="text-align-center h-cell-bg b-cell">K</f7-col>

        <f7-col width="20" class="text-align-center" v-for="(v, k) in item.card" :key="k" >{{ v }}</f7-col>
      </f7-row>
    </f7-block> -->




    <f7-block strong>
      <f7-link @click="$f7router.back()">Go back</f7-link>
    </f7-block>
  </f7-page>
</template>

