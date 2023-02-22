<template>
<div class="timemoon">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 21.5 26" style="enable-background:new 0 0 21.5 26;" xml:space="preserve">
    <path class="st0" d="M20.2,13c0,6.9-5.6,12.4-12.4,12.4c-2.4,0-4.6-0.7-6.5-1.8c5.5-0.4,9.9-5,9.9-10.6S6.8,2.8,1.3,2.4
        c1.9-1.2,4.1-1.8,6.5-1.8C14.6,0.6,20.2,6.1,20.2,13z"/>
    </svg>
</div>
</template>

<script>
export default {
  name: 'TimeMoon',
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
    stroke-width:0.5;
    stroke-miterlimit:10;
}
.timemoon {
  // width: 25px;
  height: 40px;
  vertical-align: middle;
  svg {
  height: 40px;

  }
}
</style>
