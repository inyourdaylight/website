<template>
  <div class="timesun">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 51 51" style="enable-background:new 0 0 51 51;" xml:space="preserve">
            <g>
                <g>
                    <path class="st0" d="M13.6,25.5c0-6.7,5.3-12.1,11.9-12.1s11.9,5.4,11.9,12.1"/>
                    <path class="st0" d="M25.5,8.3V3.4"/>
                    <path class="st0" d="M37.5,13.4l3.4-3.5"/>
                    <path class="st0" d="M42.4,25.5h4.9"/>
                    <path class="st0" d="M8.7,25.5H3.8"/>
                    <path class="st0" d="M13.6,13.4l-3.4-3.5"/>
                    <path class="st0" d="M31.9,9.6l3.7-9.1"/>
                    <path class="st0" d="M41.1,18.9l9-3.8"/>
                    <path class="st0" d="M9.9,19l-9-3.7"/>
                    <path class="st0" d="M19,9.7l-3.7-9.1"/>
                </g>
            </g>
            <g>
                <g>
                    <path class="st0" d="M37.4,25.5c0,6.7-5.3,12.1-11.9,12.1s-11.9-5.4-11.9-12.1"/>
                    <path class="st0" d="M25.5,42.7v4.9"/>
                    <path class="st0" d="M13.5,37.6l-3.4,3.5"/>
                    <path class="st0" d="M37.4,37.6l3.4,3.5"/>
                    <path class="st0" d="M19.1,41.4l-3.7,9.1"/>
                    <path class="st0" d="M9.9,32.1l-9,3.8"/>
                    <path class="st0" d="M41.1,32l9,3.7"/>
                    <path class="st0" d="M32,41.3l3.7,9.1"/>
                </g>
            </g>
        </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    color: {
        type: String,
        default: "#DBAA47"
    }
  },
  watch: {},
  methods: {

  },
  data() {
    return {
      
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.st0 {
    fill:none;
    stroke:#DBAA47;
    stroke-width:1;
    stroke-miterlimit:10;
}
</style>
