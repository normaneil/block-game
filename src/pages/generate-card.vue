<script>
import { mapState, mapGetters } from 'vuex'
import BlockCard from '../components/block-card'
export default {
  name: 'generate-card',
  components: {
    BlockCard
  },
  computed: mapState({
    isGenerating: state => state.isGenerating,
    response: state => state.response
  }),
  data () {
    return {
      minQty:1,
      formData: {
        qty: 1
      }
    }
  },
  methods: {
    async generate () {
      this.$f7.preloader.show()
      let response = await this.$store.dispatch('generate', this.formData)
      // console.log(response.result)
      // for(let i=0; i<response.result.length; i++) {
      //   let card = response.result[i]
      //   this.printMe('card_'+card.id, 'html')
      // }
      this.$f7.preloader.hide()
    },

    printMe (id) {
      setTimeout(function(){
        // printJS(id, 'html')
        printJS({ printable: id, type: 'html', header: id })
        console.log(id)
      }, 3000);
    }

  },
  mounted() {
    // do nothing
  }
}
</script>


<template>
  <f7-page>
    <f7-navbar title="Generate Card" back-link="Back"></f7-navbar>
    <!-- isGenerating : {{ isGenerating }} -->
    <f7-block class="text-align-center" v-if="isGenerating">
      <p>Processing please wait...</p>
    </f7-block>

    <f7-block id="samplePrint">
      This is a test
    </f7-block>

    <f7-block v-if="!response">
      <f7-list inline-labels no-hairlines-md>
        <f7-list-item>
          <f7-label>Qty</f7-label>
          <f7-input
            type="text"
            placeholder="Enter number"
            error-message="Only numbers please!"
            required
            validate
            pattern="[0-9]*"
            clear-button
            :value="formData.qty"
            @input="formData.qty = $event.target.value"
            >
          </f7-input>
        </f7-list-item>
      </f7-list>
      <f7-button fill raised color="blue" @click="generate" >Generate</f7-button>
    </f7-block>

    <f7-block v-if="response"  v-for="(item, key) in response" :key="key" >
      <block-card :card="item"></block-card>
    </f7-block>

    <f7-block strong>
      <f7-link @click="$f7router.back()">Go back</f7-link>
    </f7-block>
  </f7-page>
</template>

