<template>
  <div class="golden-section">
   <div class="section-outer">
      <div class="section">
      <img class="image" src="../assets/placeholder.png"/>
      <div class="text">
          <table>
            <tr class="row">
              <td class="left">
                <h2>Create</h2>
              </td>
              <td class="right">
                <h2>Your</h2>
              </td>
            </tr>
            <tr class="row">
              <td class="left">
                <h2>Own</h2>
              </td>
              <td class="right">
                <h2>Value</h2>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Overall, your brand or company's goal is to make higher revenue or to scale up.
                  But before you do it, you should check if you are customer-centric, which means that your business is done with setting up all the ways that people can find you and get to know you.
                  In order to complete it, you should be an amazing communicator.
                  Effective communication is surely required to have best online presence and be active online not staying behind the scenes.
                </p>
              </td>
            </tr>
          </table>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'GoldSquareSection',
  props: {
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
.golden-section {
    min-height: 50vh;
    position: relative;
    width: calc(100vw - 180px);
    padding: 40px;
    margin: auto;
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
    padding: 40px;
}
.text {
  width: 100%;
  text-align: right;
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
    font-family: "Joane Bold";
    font-size: 60px;
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
.row {
  // padding-bottom: 50px;
  width: 100%;
  // display: inline-block;
  td {
    width: 50%;
  }
}
</style>
