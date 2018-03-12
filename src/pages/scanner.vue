<script>
import Quagga from "quagga";
export default {
  name: 'scanner',
  data: () => ({ data: null }),
  mounted() {
    this.$nextTick(() => {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: this.$refs.quagga
          },
          decoder: {
            readers: ["ean_reader", "upc_reader"],
            debug: {
              drawBoundingBox: false
            }
          }
        },
        () => this.start()
      );
    });
  },
  methods: {
    start() {
      Quagga.onDetected(this.onDetected);
      Quagga.start();
      console.log("Quagga started!");
    },
    onDetected(data) {
      this.data = data;
    },
    stop() {
      Quagga.offDetected(this.onDetected);
      Quagga.stop();
      this.$refs.quagga.querySelector("video").remove();
      this.$refs.quagga.querySelector("canvas").remove();
    }
  }
}
</script>

<style scoped>
.scanner-wrapper {
  width: 80vh;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
}
.camera {
  border: 1px solid red;
  max-height: 300px;
  display: block;
}
</style>


<template>
  <f7-page>
    <f7-navbar title="Scanner" back-link="Back"></f7-navbar>
    <f7-block strong>

      <div class="scanner_wrapper">
        <button @click="stop">Stop</button>
        <div ref="quagga" class="camera"/>
        <pre v-if="data">
          {{ data }}
        </pre>
      </div>

    </f7-block>
    <f7-block strong>
      <f7-link @click="$f7router.back()">Go back</f7-link>
    </f7-block>
  </f7-page>
</template>

