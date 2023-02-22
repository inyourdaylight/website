<template>
  <div class="golden-section">
   <div class="section-outer">
      <div class="section">
      <img class="image" src="../assets/placeholder.png"/>
      <div class="text">
          <table>
            <tr class="row">
              <td class="left">
                <h2 class="animate-fade-right animate-delay-250">Create</h2>
              </td>
              <td class="right">
                <h2 class="animate-fade-left animate-delay-500">Your</h2>
              </td>
            </tr>
            <tr class="row">
              <td class="left">
                <h2 class="animate-fade-right animate-delay-750">Own</h2>
              </td>
              <td class="right">
                <h2 class="animate-fade-left animate-delay-1000">Value</h2>
              </td>
            </tr>
            <tr class="text-tr">
              <td>
                <p class="animate-fade-in">
                  Overall, your brand or company's goal is to make higher revenue or to scale up.
                  But before you do it, you should check if you are customer-centric, which means that your business is done with setting up all the ways that people can find you and get to know you.
                </p>
              </td>
            </tr>
          </table>
          <div class="text-tr-mobile">
              <p class="animate-fade-in">
                  Overall, your brand or company's goal is to make higher revenue or to scale up.
                  But before you do it, you should check if you are customer-centric, which means that your business is done with setting up all the ways that people can find you and get to know you.
                </p>
            </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'GoldSquareSection',
  props: {
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    
  },
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
.golden-section {
    position: relative;
    margin: auto;
    @media screen and (min-width: $mobileup) {
      min-height: 50vh;
      width: calc(100vw - 180px);
      padding: 40px;
    }
    @media screen and (max-width: $mobiledown) {
      padding: 20px;
      width: calc(100vw - 40px);
    }
}


.section-outer {
  padding: 40px 0;
  border-radius: 24px;
  border: 1px solid $gold;
}
.image {
  position: absolute;
  max-width: 25%;
  max-height: 400px;
  left: 75%;
  transform: translateX(-50%);
  bottom: -10%;
}
.heading {
  padding-bottom: 40px;
}
.section {
    // width: calc(100vw - 180px);
    margin: auto;
    background: #DBAA47;
    border-radius: 24px;
    @media screen and (min-width: $mobileup) {
      padding: 10px;
    }
    @media screen and (min-width: $mobileup) {
      padding: 40px;
    }
}
.text {
  width: 100%;
  text-align: right;
  padding: 20px 0;
}
p {
  color: $darkblue;
  padding-top: 30px;
  // margin-left: auto;
  width: 75%;
  margin-left: auto;
}
h2 {
    color: $darkblue;
    font-size: 60px;
    @media screen and (max-width: $mobiledown) {
      font-size: 30px;
    }
    margin: 0;
    line-height: 1.5;
    display: inline-block;
    // transform: translateX(-100%);
  
}
.right {
  transform: translateY(60%);
  text-align: left;
  // display: inline-block;
}
.left {
  // display: inline-block;
  text-align: right;
}
.col {
  display: inline-block;
}

table {
  width: 100%;
}
.row {
  // padding-bottom: 50px;
  width: 100%;
  // display: inline-block;
  td {
    width: 50%;
    overflow: hidden;
  }
}
.text-tr-mobile {
  @media screen and (min-width: $mobileup) {
    display: none;
  }
  p {
    margin: auto;
    text-align: center;
    padding-bottom: 10px;
    width: calc(100% - 10px);
  }
}
.text-tr {
  @media screen and (max-width: $mobiledown) {
    display: none;
  }
}
</style>
